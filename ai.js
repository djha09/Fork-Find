import { OpenAI } from 'openai';  // This is the correct import
const api_key = import.meta.env.VITE_OPENAI_API_KEY;

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: api_key,
  dangerouslyAllowBrowser:true,
});

export async function getRecipe(ingredientsArr) {
  

  const prompt = `
Think of yourself as a Indian MASTERCHEF AI .
You have been given ingredients: ${ingredientsArr}.
Your task is to generate a tasty recipe based on the these ingredients.

If the ingredients are not valid or not understandable you have to respond back with just this clarification message : ("Whoops! It seems that one or more of the ingredients provided are not recognized for this recipe. Please check your list and try again with ingredients that are compatible, and we’ll be happy to assist you in creating something wonderful!.")
You can add some extra common ingredients if not mentioned explicitly like spices , salt , etc.
You can skip ingredients if they are not suitable for the recipe.
You can ignore ingredients silently if they do not match with the recipe.


  `;

  const response = await client.chat.completions.create({
    model: "deepseek/deepseek-chat-v3-0324",
    messages: [
      { role: "system", content: "You are a helpful Assistant" },
      { role: "user", content: prompt }
    ],
    max_tokens: 1024,
  });

  return response.choices[0].message.content;
}
