#!/bin/bash

# Start Ollama in the background.
ollama serve &
# Record Process ID.
pid=$!

# Pause for Ollama to start.
sleep 5

echo "🔴 Retrieving model..."
ollama pull nomic-embed-text
ollama create cyber-model -f Modelfile
echo "🟢 Done!"
touch /tmp/ollama_ready

wait $pid
