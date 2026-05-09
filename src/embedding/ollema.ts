import axios from "axios";

const OLLAMA_URL = process.env.OLLAMA_URL  || "http://localhost:11434/api/embeddings";
const MODEL = "nomic-embed-text"; // closest LaBSE alternative

interface OllamaEmbeddingResponse {
  embedding: number[];
}

/**
 * Generate an embedding vector using Ollama (local)
 */
export async function embedTextOm(text: string): Promise<number[]> {
  if (!text || !text.trim()) {
    throw new Error("embedText: input text is empty");
  }

  const response = await axios.post<OllamaEmbeddingResponse>(
    OLLAMA_URL,
    {
      model: MODEL,
      prompt: text,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 30_000,
    }
  );

  const embedding = response.data?.embedding;

  if (!Array.isArray(embedding) || embedding.length === 0) {
    throw new Error("Invalid embedding returned from Ollama");
  }

  return embedding;
}
