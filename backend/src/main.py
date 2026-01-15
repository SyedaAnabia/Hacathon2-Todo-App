from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import auth_router, todos_router
from .database import create_db_and_tables
import os


def create_app():
    app = FastAPI(title="Todo API", version="1.0.0")

    # CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(","),
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Include routers
    app.include_router(auth_router, prefix="/api")
    app.include_router(todos_router, prefix="/api")

    @app.on_event("startup")
    def on_startup():
        create_db_and_tables()

    @app.get("/")
    def read_root():
        return {"message": "Welcome to the Todo API"}

    return app


app = create_app()