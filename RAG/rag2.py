# import section
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.document_loaders import PyPDFDirectoryLoader  # Nouveau import pour le loader PDF
import numpy as np
import ollama


# Load local pdf file monopoly.pdf
file_path_local=r'C:\Users\adelu\PycharmProjects\ProjetChatBot\RAG'
document_loader = PyPDFDirectoryLoader(file_path_local)
pdf_data = document_loader.load()
# Vérification si aucun document n'est chargé
if not pdf_data:
    print("Aucun document trouvé dans le répertoire :", file_path_local)

print("pdf data loaded...")


# Chunking of data where chunk_size, chunk_overlap is configurble and defined as per data document & use case
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=50)
data_chunks = text_splitter.split_documents(pdf_data)
#Convert data chun in numpy array
print(type(data_chunks))
data_chunks_array = np.array(data_chunks)
print(type(data_chunks_array))
print(len(data_chunks))
print(data_chunks[0].page_content)
print("data chunks created....")

persist_directory = r'C:\Users\adelu\PycharmProjects\ProjetChatBot\chroma_db'
# Crée la base de données vectorielle qui sauvegardera les données dans persist_directory
vector_store = Chroma.from_documents(
    data_chunks,
    OllamaEmbeddings(model="nomic-embed-text", show_progress=True),
    persist_directory=persist_directory
)
print("Base de données vectorielle créée et sauvegardée dans", persist_directory)





