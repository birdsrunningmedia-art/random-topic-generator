"use server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);

export const aiAgent = async (message: string) => {
  const chatCompletion = await client.chatCompletion({
    model: "google/gemma-2-2b-it:nebius",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });
  return chatCompletion.choices[0].message.content;
};
