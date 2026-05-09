

import type{ Request, Response } from "express";


export const insert = async (req: Request, res: Response) => {
     try {
      const { text } = req.body.text;

      if (!text) {
        return res.status(400).json({ error: "Text is required" });
      }

      

      res.json();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
