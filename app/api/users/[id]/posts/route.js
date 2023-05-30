import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 201 });
  } catch (e) {
    return new Response("error", { status: 500 });
  }
};
