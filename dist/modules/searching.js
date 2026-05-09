import { embedText } from "../embedding/index.js";
// import { embedText } from "../services/embedding";
import { index } from "../services/pinecone.js";
export const search = async (req, res) => {
    try {
        const text = req.query.text;
        if (!text) {
            return res.status(400).json({ error: "Query is required" });
        }
        const embedding = await embedText(text);
        const results = await index.query({
            vector: embedding,
            topK: 5,
            includeMetadata: true,
        });
        res.json(results.matches?.map((match) => ({
            score: match.score,
            text: match.metadata?.text,
        })) ?? []);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
