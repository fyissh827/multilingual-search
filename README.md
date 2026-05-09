# Multilingual Language Search

Semantic multilingual search system built with Node.js + TypeScript using:

- RAG
- Vector Embeddings
- Pinecone Vector Database
- OpenAI
- Hugging Face
- Ollama
- Kafka Consumer

This project allows inserting English content and searching using Hindi queries through semantic vector similarity.

---

# Features

- English → Hindi semantic search
- Vector embedding generation
- Pinecone vector database
- OpenAI embeddings
- Hugging Face embeddings
- Ollama local embeddings
- Kafka consumer support
- TypeScript support
- RAG architecture
- REST APIs

---

# Project Structure

```bash
.
├── dist
│   ├── consumer
│   │   └── services
│   │       ├── client.js
│   │       └── kafka.js
│   ├── embedding
│   │   ├── huggingFace.js
│   │   ├── index.js
│   │   ├── ollema.js
│   │   └── openai.js
│   ├── index.js
│   ├── modules
│   │   ├── insert.js
│   │   ├── processes
│   │   │   └── insert.js
│   │   └── searching.js
│   └── services
│       ├── embedding.js
│       └── pinecone.js
│
├── src
│   ├── consumer
│   │   └── services
│   │       ├── client.ts
│   │       └── kafka.ts
│   ├── embedding
│   │   ├── huggingFace.ts
│   │   ├── index.ts
│   │   ├── ollema.ts
│   │   └── openai.ts
│   ├── index.ts
│   ├── modules
│   │   ├── insert.ts
│   │   ├── processes
│   │   │   └── insert.ts
│   │   └── searching.ts
│   └── services
│       ├── embedding.ts
│       └── pinecone.ts
│
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# Installation

Clone the repository:

```bash
git clone <your-repository-url>

cd languageSearching
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

OPENAI_API_KEY=your_openai_api_key

HUGGINGFACE_API_KEY=your_huggingface_api_key

PINECONE_API_KEY=your_pinecone_api_key

PINECONE_INDEX=your_index_name

OLLAMA_BASE_URL=http://localhost:11434

KAFKA_BROKER=localhost:9092
```

---

# Ollama Setup

Install Ollama:

- https://ollama.com

Pull embedding model:

```bash
ollama pull nomic-embed-text
```

Start Ollama:

```bash
ollama serve
```

---

# Supported Embedding Providers

| Provider | Model |
|---|---|
| OpenAI | text-embedding-3-small |
| Hugging Face | sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2 |
| Ollama | nomic-embed-text |

---

# Insert English Data

Example English document:

```json
{
  "text": "Node.js is a JavaScript runtime environment."
}
```

The system generates embeddings and stores vectors inside Pinecone.

---

# Hindi Search Example

Hindi Query:

```json
{
  "query": "जावास्क्रिप्ट रनटाइम क्या है?"
}
```

Result:

```json
{
  "matches": [
    {
      "text": "Node.js is a JavaScript runtime environment.",
      "score": 0.93
    }
  ]
}
```

---

# Available Modules

## Insert Module

Handles document insertion and vector storage.

File:

```bash
src/modules/insert.ts
```

---

## Searching Module

Handles semantic multilingual searching.

File:

```bash
src/modules/searching.ts
```

---

## Embedding Services

Embedding providers:

```bash
src/embedding/openai.ts

src/embedding/huggingFace.ts

src/embedding/ollema.ts
```

---

## Pinecone Service

Handles vector database operations.

```bash
src/services/pinecone.ts
```

---

## Kafka Consumer

Kafka consumer for processing asynchronous insertion tasks.

```bash
src/consumer/services/kafka.ts
```

---

# Package Scripts

```json
"scripts": {
  "dev": "ts-node-dev src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

---

# Run Development Server

```bash
npm run dev
```

---

# Run Production Server

```bash
npm run build

npm start
```

---

# How It Works

1. Insert English documents
2. Generate multilingual embeddings
3. Store vectors in Pinecone
4. Search using Hindi queries
5. Generate Hindi query embeddings
6. Perform cosine similarity search
7. Return semantic matches

---

# Example Workflow

```text
Inserted:
"Artificial Intelligence is changing software."

Hindi Query:
"एआई सॉफ्टवेयर को कैसे बदल रहा है?"

Semantic Match Found ✓
```

---

# Tech Stack

- Node.js
- TypeScript
- Pinecone
- OpenAI
- Hugging Face
- Ollama
- Kafka
- Vector Search
- RAG

---

# Future Improvements

- Hybrid search
- Metadata filtering
- PDF ingestion
- Chat with documents
- Streaming search
- Multi-language support
- Redis caching

---

# License

MIT