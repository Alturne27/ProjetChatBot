from sqlmodel import Field, SQLModel
from datetime import datetime
from pydantic import BaseModel

class ChatSession(SQLModel, table=True,case_sensitive=True):
    __tablename__ = "ChatSession"
    id: str = Field(primary_key=True)
    title : str
    userId: str 

class ChatMessage(SQLModel, table=True):
    __tablename__ = "ChatMessage"
    id: str = Field(primary_key=True)
    chatSessionId: str = Field(foreign_key = "ChatMessage.id")
    message: str 
    createdAt : datetime
    role: str
    
class ChatQuestion(BaseModel):
    content : str