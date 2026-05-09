import { embedTextHf } from "./huggingFace.js";
import { embedTextOm } from "./ollema.js";
import { embedTextOi } from "./openai.js";
const modelServices = {
    huggingFace: embedTextHf,
    openAI: embedTextOi,
    ollema: embedTextOm
};
export const embedText = async (text) => {
    let r = process.env.MODELSERVICE;
    return await modelServices[r](text);
};
