import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY ?? "fsddfdf";
const indexName = process.env.PINECONE_INDEX;

if (!apiKey) {
  throw new Error("PINECONE_API_KEY is not defined");
}

if (!indexName) {
  console.log("PINECONE_INDEX is not defined");
}

export const pinecone = new Pinecone({
  apiKey,
});

export const index = pinecone.index(indexName as string);
