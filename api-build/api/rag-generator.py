# import section
import os
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.document_loaders import PyPDFDirectoryLoader, PyPDFLoader  # Nouveau import pour le loader PDF

db_directory = "../chroma-db"
db_file = os.path.join(db_directory,"chroma.sqlite3")
model_url = "http://chatbot-ollama:11434"

if os.path.exists(db_file):
  os.remove(db_file)

folder_path_local="../data"

document_loader = PyPDFDirectoryLoader(path=folder_path_local, mode='single',silent_errors=True)
pdf_data = document_loader.load()
# Vérification si aucun document n'est chargé
if not pdf_data:
    print("Aucun document trouvé dans le répertoire :", folder_path_local)

print("pdf data loaded...")
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





