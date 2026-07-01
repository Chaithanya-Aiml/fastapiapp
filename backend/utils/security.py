from passlib.context import CryptContext
 
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
 
def hash_password(password: str) -> str:
     # Bcrypt has a 72 byte limit, truncate if necessary
     password_truncated = password[:72]
     return pwd_context.hash(password_truncated)

def verify_password(plain_password: str, hashed_password: str) -> bool:
     # Truncate to 72 bytes to match the hashed version
     plain_password_truncated = plain_password[:72]
     return pwd_context.verify(plain_password_truncated, hashed_password)
 
def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)