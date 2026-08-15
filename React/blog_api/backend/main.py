from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from database import get_db
from models import User,Post
from schemas import (UserCreate,UserResponse,PostCreate,PostResponse)

app = FastAPI(title = "Blog API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def home():
    return{
        "message":"Blog Api is running"
    }

#create user
@app.post("/users",response_model=UserResponse)
def create_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):
    new_user = User(
        name = user.name,
        email = user.email,
        age = user.age
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

#get all users
@app.get("/users",response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users

#get one user
@app.get("/users/{user_id}",response_model=UserResponse)
def get_user(user_id: int,db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        raise HTTPException(status_code=404,detail="User not found")
    return user

#update user
@app.put("/users/{user_id}",response_model = UserResponse)
def update_user(user_id: int,user_data: UserCreate,db: Session=Depends(get_db)):
    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(status_code=404,detail="User not found")
    user.name = user_data.name
    user.email = user_data.email
    user.age = user_data.age

    db.commit()
    db.refresh(user)
    
    return user

#delete user
@app.delete("/users/{user_id}")
def delete_user(user_id: int,db: Session = Depends(get_db)):
    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(status_code=404,detail="User not found")

    db.delete(user)
    db.commit()

    return{
        "message": "User deleted successfully"
    }

#create blog post
@app.post("/posts",response_model=PostResponse)
def create_post(post: PostCreate,db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == post.owner_id).first()

    if not user:
        raise HTTPException(status_code=404,detail="User not found")

    new_post = Post(
        title = post.title,
        content = post.content,
        published = post.published,
        owner_id = post.owner_id
    )

    db.add(new_post)
    db.commit()
    db.refresh(new_post)

    return new_post

#get all post
@app.get("/posts",response_model=list[PostResponse])
def get_posts(db: Session= Depends(get_db)):
    posts = db.query(Post).all()
    return posts

#get one post
@app.get("/posts/{post_id}",response_model=PostResponse)
def get_post(post_id: int,db: Session = Depends(get_db)):
    post = db.query(Post).filter(Post.id == post_id).first()

    if not post:
        raise HTTPException(status_code=404,detail="Post not found")
    return post

#update post
@app.put("/posts/{post_id}",response_model=PostResponse)
def update_post(
    post_id: int,
    post_data: PostCreate,
    db: Session = Depends(get_db)
):
    post = db.query(Post).filter(
        Post.id == post_id
    ).first()

    if not post:
        raise HTTPException(status_code=404,detail="Post not found")
    post.title = post_data.title
    post.content = post_data.published
    post.published = post_data.published
    post.owner_id = post_data.owner_id

    db.commit()
    db.refresh(post)

    return post


#delete post
@app.delete("/posts/{post_id}")
def delete_post(post_id: int,db: Session = Depends(get_db)):
    post = db.query(Post).filter(
        Post.id == post_id
    ).first()

    if not post:
        raise HTTPException(status_code=404,detail="Post not found")

    db.delete(post)
    db.commit()

    return{
        "message": "Post Deleted Successfully"
    }