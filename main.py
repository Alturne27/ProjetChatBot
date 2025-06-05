# import section
import os
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.document_loaders import PyPDFDirectoryLoader, PyPDFLoader  # Nouveau import pour le loader PDF
import ollama

db_directory = "chroma-db"
db_file = os.path.join(db_directory,"chroma.sqlite3")
model_url = "http://ollama:11434"

if os.path.exists(db_file):
  os.remove(db_file)

folder_path_local="data"

document_loader = PyPDFDirectoryLoader(path=folder_path_local, mode='single',silent_errors=True)
pdf_data = document_loader.load()
# Vérification si aucun document n'est chargé
if not pdf_data:
    print("Aucun document trouvé dans le répertoire :", folder_path_local)

print("pdf data loaded...")
# translate_llm = ollama.Client(host=model_url)

# pdf_english = []
# for doc in pdf_data:
#     # Example: Summarize a paragraph of text
#     prompt = f"Translate this text in english, without extra text:\n\"\"\"\n{doc}\n\"\"\""
#     result = translate_llm.generate(model='dorian2b/vera', prompt=prompt)
#     pdf_english.append(result['response'])

# Chunking of data where chunk_size, chunk_overlap is configurble and defined as per data document & use case
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=50)
data_chunks = text_splitter.split_documents(pdf_data)
print("data chunks created....")


# Crée la base de données vectorielle qui sauvegardera les données dans persist_directory
vector_store = Chroma.from_documents(
    data_chunks,
    OllamaEmbeddings(base_url=model_url,model="nomic-embed-text", show_progress=True),
    persist_directory=db_directory
)
print("Base de données vectorielle créée et sauvegardée dans", db_directory)





