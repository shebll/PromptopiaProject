import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req, res) => {
  let { prompt, userId, tag } = await req.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (e) {
    return new Response("error", { status: 401 });
  }
};
