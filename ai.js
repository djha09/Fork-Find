import { OpenAI } from 'openai';  // This is the correct import
const api_key = import.meta.env.VITE_OPENAI_API_KEY;

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: api_key,
  dangerouslyAllowBrowser:true,
});

export async function getRecipe(ingredientsArr) {
  const prompt = `
You are a Top class MASTERCHEF.
You have been given ingredients: ${ingredientsArr}.
Try to align the recipe with the indian cuisine , if not possible with the ingredients given you can go with other cuisines.
It is not compulsory to add each ingredient if they do not align with the recipe you can skip them.
Based on these, generate a tasty recipe that can be made.
Use minimum or no extra ingredients.
If maximum of the Ingredients are not valid ingredients or no recipe can be generated you can say so
Return the response as a raw Markdown string (unescaped), so it can be passed directly into a Markdown renderer like react-markdown in React.
  `;

  const response = await client.chat.completions.create({
    model: "mistralai/mistral-7b-instruct:free",
    messages: [
      { role: "system", content: "You are a helpful Assistant" },
      { role: "user", content: prompt }
    ],
    max_tokens: 1024,
  });

  return response.choices[0].message.content;
}
