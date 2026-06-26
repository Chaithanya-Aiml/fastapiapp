from pydantic import BaseModel
from typing import Optional

class JobCreate(BaseModel):
    title:str
    salary:str
    
class JobUpdate(BaseModel):
    title:Optional[str]=None
    salary:Optional[str]=None