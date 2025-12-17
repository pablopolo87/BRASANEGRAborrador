import { GoogleGenAI, Type } from "@google/genai";
import { ImageGenerationConfig } from "../types";

// Note: API Key must be set in environment variables as REACT_APP_API_KEY or similar in a real build,
// but for this snippet we use process.env.API_KEY as per instructions.
// The user of this code must ensure the environment variable is injected.

let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const generateHeroImage = async (prompt: string, config: ImageGenerationConfig) => {
  const client = getAI();
  try {
    const response = await client.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: config.aspectRatio,
          imageSize: config.imageSize,
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};

export const getSmartLocationInfo = async () => {
  const client = getAI();
  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Tell me the current weather and skiing conditions in Sierra Nevada, Spain, and how to get to Restaurante Brasa Negra in the Melia hotel. Be brief and helpful for a diner.",
      config: {
        tools: [{ googleSearch: {} }, { googleMaps: {} }],
        toolConfig: {
          retrievalConfig: {
            latLng: {
              latitude: 37.096, // Sierra Nevada approximate
              longitude: -3.398
            }
          }
        }
      }
    });
    
    return {
      text: response.text,
      groundingChunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks
    };
  } catch (error) {
    console.error("Error getting location info:", error);
    return { text: "No se pudo obtener información en tiempo real.", groundingChunks: [] };
  }
};

export const askSommelier = async (question: string) => {
  const client = getAI();
  try {
    const response = await client.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `You are an expert Sommelier at Restaurante Brasa Negra in Sierra Nevada. 
      We serve high quality grilled meats (steaks, iberico pork) and local dishes.
      The user asks: "${question}".
      Provide a sophisticated yet friendly recommendation. Suggest a type of wine (e.g., Ribera del Duero, Rioja, local Granada wine) that pairs well with our style of food.`,
      config: {
        thinkingConfig: { thinkingBudget: 32768 },
      }
    });
    return response.text;
  } catch (error) {
    console.error("Sommelier is busy:", error);
    return "Disculpe, nuestro sumiller digital está ocupado en este momento. Por favor, pregunte a nuestros camareros al llegar.";
  }
};
