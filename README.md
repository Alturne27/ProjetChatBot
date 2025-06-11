# Projet Chatbot

## Requirements

- Docker & Docker Compose
- Git

## How to install

```
git clone https://github.com/Alturne27/ProjetChatBot
cd ProjetChatBot
```

You should then create the environnement files like this:

- `front-build/.env.local`:
```
    AUTH_SECRET="auth_secret"
    AUTH_GITHUB_ID=github_id
    AUTH_GITHUB_SECRET=6github_secret
    AUTH_RESEND_KEY=resend_key
    DATABASE_URL=postgresql://username:password@chatbot-db:5432/database?schema=public
```

- `db-build/.env.database` et `api-build/.env.database`:
```
    POSTGRES_PASSWORD=password
    POSTGRES_USER=username
    POSTGRES_DB=database
```

And finally:
```
docker compose up -d
```

## Accessing Chatbot

Connect to `localhost:3000` to get access to the Web UI

You will be asked to connect with GitHub or with an email

## RAG (Retrieval-augmented generation) Generation

Our Chatbot is using RAG to deliver high quality informations.

The data used to train our chatbot is not available on this repository, but you can do it easily:

1. Put PDF Documents in the `data` folder

2. Run `docker compose exec chatbot-api python3 rag-generator.py`

## Limitation

This `docker-compose.yml` file has been made for computers with NVIDIA GPUs

To use it with another type of GPU, you should make some change on the `chatbot-ollama` container config
