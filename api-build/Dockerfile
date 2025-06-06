FROM python:3.12

WORKDIR /app

COPY api-build/requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt



COPY ./api /app

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
