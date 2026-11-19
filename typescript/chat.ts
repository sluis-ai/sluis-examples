// Chat completion through the Sluis gateway with the official openai package.
// npm install, then: SLUIS_KEY=... npm start
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.sluis.ai/v1",
  apiKey: process.env.SLUIS_KEY,
});

// sluis/auto is a managed alias: Sluis picks a model allowed by your residency policy.
const { data, response } = await client.chat.completions
  .create({
    model: "sluis/auto",
    messages: [{ role: "user", content: "Say hi" }],
  })
  .withResponse();
console.log("served by:", response.headers.get("x-sluis-model"));
console.log(data.choices[0].message.content);
