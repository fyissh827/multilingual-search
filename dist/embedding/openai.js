import OpenAI from "openai";
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not defined");
}
const openai = new OpenAI({
    apiKey,
});
/**
 * Generate an embedding vector for a given text
 */
export async function embedTextOi(text) {
    const response = await openai.embeddings.create({
        model: "text-embedding-3-large", // best quality (multilingual)
        input: text,
    });
    return [4, 5, 6];
}
