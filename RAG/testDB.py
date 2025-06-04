import sqlite3
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.document_loaders import PyPDFDirectoryLoader  # Nouveau import pour le loader PDF
import numpy as np



def lectureTestDB():
    """
    Fonction pour lire une base de données SQLite et afficher le nombre de lignes par table.
    """
    # Remplacez 'chemin/vers/fichier.sqlite3' par le chemin de votre fichier sqlite3
    conn = sqlite3.connect(r'C:\Users\adelu\PycharmProjects\ProjetChatBot\chroma_db\chroma.sqlite3')
    cursor = conn.cursor()

    tables = [
        "migrations",
        "acquire_write",
        "collection_metadata",
        "segment_metadata",
        "tenants",
        "databases",
        "collections",
        "maintenance_log",
        "segments",
        "embeddings",
        "embedding_metadata",
        "max_seq_id",
        "embedding_fulltext_search",
        "embedding_fulltext_search_data",
        "embedding_fulltext_search_idx",
        "embedding_fulltext_search_content",
        "embedding_fulltext_search_docsize",
        "embedding_fulltext_search_config",
        "embeddings_queue",
        "embeddings_queue_config"
    ]

    print("Nombre de lignes par table :")
    for table in tables:
        try:
            cursor.execute(f"SELECT COUNT(*) FROM {table}")
            count = cursor.fetchone()[0]
            print(f"{table} : {count}")
        except Exception as e:
            print(f"Erreur sur {table} : {e}")

    # Exécution de la requête pour récupérer les 10 premiers enregistrements
    cursor.execute("SELECT * FROM embedding_metadata where key = 'chroma:document'")
    rows = cursor.fetchall()

    # Affichage des résultats
    for row in rows:
        print(row)

    conn.close()
    pass




def query_rag(query_text):
    """
    Query a Retrieval-Augmented Generation (RAG) system using Chroma database and OpenAI.
    Args:
      - query_text (str): The text to query the RAG system with.
    Returns:
      - formatted_response (str): Formatted response including the generated text and sources.
      - response_text (str): The generated response text.
    """


    # Prepare the database
    db = Chroma(persist_directory="C:/Users/adelu/PycharmProjects/ProjetChatBot/chroma_db", embedding_function=OllamaEmbeddings(model="nomic-embed-text"))

    retriever = db.as_retriever()
    docs = retriever.invoke(query_text, k=10)
    print("Documents fetched from database : " + str(len(docs)))
    return docs

query_text = "Cortana"

results = query_rag(query_text)

for count, doc in enumerate(results, start=1):
    print(f"Document {count}: {doc.page_content}\n\n")
