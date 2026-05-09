import { embedTextHf } from "./huggingFace.js";
import { embedTextOm } from "./ollema.js";
import { embedTextOi } from "./openai.js";
const modelServices = {
 huggingFace : embedTextHf,
 openAI : embedTextOi,
 ollema : embedTextOm
};
type ModelServiceKey = keyof typeof modelServices;
export const embedText = async(text : string) : Promise<number[]> => {
let r : ModelServiceKey = process.env.MODELSERVICE as ModelServiceKey;
return  await modelServices[r](text);
}