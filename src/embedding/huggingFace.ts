import axios from "axios";

const HF_API =
  "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/LaBSE";

/**
 * Generates a sentence embedding using Hugging Face Inference API
 */
export async function embedTextHf(text: string): Promise<number[]> {
    console.log(text);
  const response = await axios.post<number[][][]>(
    HF_API,
    { inputs: text },
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

 
  const vectors = response.data[0];

  if (!vectors || vectors.length === 0) {
    throw new Error("No embeddings returned from Hugging Face API");
  }

  // Mean pooling
  const embedding: number[] = vectors[0].map((_, i) =>
    vectors.reduce((sum, vec) => sum + vec[i], 0) / vectors.length
  );

  return embedding;
}

