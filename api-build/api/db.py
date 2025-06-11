import os
from sqlmodel import SQLModel, create_engine
import models


db_name = os.getenv("POSTGRES_DB")
if not db_name:
    raise "DB_NAME not defined"
db_user = os.getenv("POSTGRES_USER")
if not db_user:
    raise "DB_USER not defined"
db_password = os.getenv("POSTGRES_PASSWORD")
if not db_password:
    raise "DB_PASSWORD not defined"

connect_url = str.format("postgresql://{}:{}@chatbot-db:5432/{}",db_user,db_password,db_name)

engine = create_engine(connect_url)