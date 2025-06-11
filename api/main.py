from db import engine
from typing import Annotated

from fastapi import FastAPI, Header, HTTPException
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from sqlmodel import Session, select

from langchain_chroma import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from ollama import Client,chat, ChatResponse

from models import *

from typing import Callable
from cuid2 import cuid_wrapper

cuid_generator: Callable[[], str] = cuid_wrapper()

app = FastAPI()

model_url = "http://ollama:11434"

chroma_db = Chroma(persist_directory="../chroma-db", embedding_function=OllamaEmbeddings(model="nomic-embed-text",base_url=model_url))

ollama_client = Client(
    host=model_url
)

def get_rag(question : str):
    retriever = chroma_db.as_retriever()
    docs = retriever.invoke(question, k=5)
    result = ""
    for doc in docs:
        result += f"{doc}\n\n"
    return result

def get_context(session_id : str):
    with Session(engine) as session:
        statement = select(ChatMessage).where(ChatMessage.chatSessionId == session_id).order_by(ChatMessage.createdAt.desc()).offset(1).limit(5)
        results = session.exec(statement)
        messages = []
        for element in results:
            messages.append({"role" : element.role, "content" : element.message})
        return messages

def save_chat(content: str,session_id: str):
    with Session(engine) as session:
        new_chat = ChatMessage(id=cuid_generator(),chatSessionId=session_id, message=content,createdAt=datetime.now(),role='assistant')
        session.add(new_chat)
        session.commit()

def save_title(title: str, session_id: str):
    with Session(engine) as session:
        statement = select(ChatSession).where(ChatSession.id == session_id)
        results = session.exec(statement)
        chat_session = results.one()

        chat_session.title = title
        session.add(chat_session)
        session.commit()
        session.refresh(chat_session)

@app.post("/chat/")
def sendReponse(chat : ChatQuestion = None, session_id: Annotated[str | None, Header()] = None):
    if not session_id:
        raise HTTPException(status_code=500, detail="No Session ID given")
    if not chat:
        raise HTTPException(status_code=500, detail="No question given")
    messages = get_context(session_id = session_id)
    print("Messages fetched")
    documents = get_rag(question = chat.content)
    print("Document fetched")
    question = chat.content
    newChat = {
        "role":"user",
        "content":f"""
            Tu es un assistant intelligent. Pour chaque question, tu dois choisir la meilleure source d’information entres tes propres connaissances générales et les documents fournis ci-dessous.
            Lis attentivement la question et, si l’information dans les documents est plus précise ou pertinente que tes connaissances, utilise les documents pour répondre. Sinon, utilise tes connaissances.
            Voici la question:
            {question}
            Voici les documents:
            {documents}
        """
    }
    messages.insert(0,newChat)
    response: ChatResponse = ollama_client.chat(model='cyber-model',messages=messages)
    content = response['message']['content']
    save_chat(content=content,session_id=session_id)
    return {"content":content}
    
@app.post("/chat/session")
async def get_session_name(session_id: Annotated[str | None, Header()] = None):
    if not session_id:
        raise HTTPException(status_code=500, detail="No Session ID given")
    with Session(engine) as session:
        statement = select(ChatMessage).where(ChatMessage.chatSessionId == session_id).order_by(ChatMessage.createdAt.asc()).offset(1).limit(1)
        results = session.exec(statement)
        for result in results:
            chat_template={
            "role":"user",
            "content":f"""
                Tu es un assistant utilisé pour des questions de cybersécurité.
                Tu dois proposer un titre qui pourrait correspondre à une conversion commencant par une question.
                Tu ne répondra que le titre qui correspond, sans préciser qu'il s'agit d'un titre
                
                Voici la question:
                {result.message}            
                """
            }
            response: ChatResponse = ollama_client.chat(model='cyber-model',messages=[chat_template])
            title = response['message']['content']
            save_title(title=title,session_id=session_id)
            return {"content":title}
        raise HTTPException(status_code=500, detail="Pas de message dans cette session")
        
        


# @app.get("/heroes/")
# def read_heroes(
#     session: SessionDep,
#     offset: int = 0,
#     limit: Annotated[int, Query(le=100)] = 100,
# ) -> list[Hero]:
#     heroes = session.exec(select(Hero).offset(offset).limit(limit)).all()
#     return heroes


# @app.get("/heroes/{hero_id}")
# def read_hero(hero_id: int, session: SessionDep) -> Hero:
#     hero = session.get(Hero, hero_id)
#     if not hero:
#         raise HTTPException(status_code=404, detail="Hero not found")
#     return hero


# @app.delete("/heroes/{hero_id}")
# def delete_hero(hero_id: int, session: SessionDep):
#     hero = session.get(Hero, hero_id)
#     if not hero:
#         raise HTTPException(status_code=404, detail="Hero not found")
#     session.delete(hero)
#     session.commit()
#     return {"ok": True}