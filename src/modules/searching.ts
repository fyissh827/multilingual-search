

import type { Request, Response } from "express";
import { embedText } from "../embedding/index.js";
// import { embedText } from "../services/embedding";
 import { index } from "../services/pinecone.js";

export const search = async (req: Request, res: Response) => {
     try {
      const  text  = req.query.text;

      if (!text) {
        return res.status(400).json({ error: "Query is required" });
      }

      const embedding: number[] = await embedText(text as string);

      const results = await index.query({
        vector: embedding,
        topK: 5,
        includeMetadata: true,
      });

      res.json(
        results.matches?.map((match : any) => ({
          score: match.score,
          text: match.metadata?.text as string | undefined,
        })) ?? []
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
