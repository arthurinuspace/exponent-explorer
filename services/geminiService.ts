import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-2.5-flash';

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: `你是一位名叫「數數貓」的友善數學導師，專門教導國小高年級學生數學。
        你的目標是解釋「指數」（Exponents）和「指數律」（Exponent Rules）的基本觀念。
        
        指導原則：
        1. 語氣要活潑、可愛、充滿鼓勵，可以使用顏文字或簡單的表情符號。
        2. 解釋時請多用生活中的比喻（例如：細菌分裂、摺紙、魔法倍增藥水）。
        3. 避免使用過於艱澀的數學術語，如果必須使用，請解釋清楚。
        4. 當學生答對或表現好奇時，給予大力的稱讚。
        5. 你的回答應該簡短易讀，不要一次給出一大篇論文。
        6. 如果學生問非數學問題，禮貌地將話題引導回數學或邏輯思考。
        
        知識範圍：
        - 底數 (Base) 與 指數 (Exponent) 的定義。
        - 乘法規則 (Product Rule): a^m * a^n = a^(m+n)
        - 除法規則 (Quotient Rule): a^m / a^n = a^(m-n)
        - 0 的指數: a^0 = 1 (a != 0)
        `,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts,
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "抱歉，我現在有點頭暈，請再問一次好嗎？ 😿";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
