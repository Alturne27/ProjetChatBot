FROM python:3

WORKDIR /app

# pip install
COPY rag-build/requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt

COPY rag-build/main.py /app
