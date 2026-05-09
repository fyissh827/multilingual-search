import { index } from "../../services/pinecone.js";
import { embedText } from "../../embedding/index.js";
import { v4 as uuidv4 } from "uuid";
export const insert = async (text) => {
    const embedding = await embedText(text);
    const res = await index.upsert([
        {
            id: uuidv4(),
            values: embedding,
            metadata: {
                text: text,
                language: "en",
            },
        },
    ]);
    if (res)
        return "data is inserted.";
    return "not inserted";
};
