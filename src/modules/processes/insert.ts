import { index } from "../../services/pinecone.js";
import { embedText } from "../../embedding/index.js";
import { v4 as uuidv4 } from "uuid";
interface DocumentMetadata {
  text: string;
  language: string;
}
export const insert = async(text : string) : Promise<string> => {
    const embedding: number[] = await embedText(text);
    const res : any =  await index.upsert([
      {
        id: uuidv4(),
        values: embedding,
        metadata: {
          text: text,
          language: "en",
        } satisfies DocumentMetadata,
      },
    ]);
    if(res) return "data is inserted."
    return "not inserted"
}