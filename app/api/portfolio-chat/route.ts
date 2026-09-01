import Anthropic from "@anthropic-ai/sdk";
import { buildSystemPrompt } from "@/lib/portfolioAssistant";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const { messages }: { messages: ChatMessage[] } = await req.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response("Missing messages", { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(
      "Le chat IA n'est pas encore configuré sur ce site. Contactez Riadh directement : riadh.mnasri@gmail.com",
      { headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }

  const client = new Anthropic({ apiKey });

  let stream;
  try {
    stream = client.messages.stream({
      model: "claude-opus-5",
      max_tokens: 1024,
      output_config: { effort: "low" },
      system: [
        {
          type: "text",
          text: buildSystemPrompt(),
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: messages.slice(-20).map((m) => ({ role: m.role, content: m.content })),
    });
  } catch (error) {
    const message =
      error instanceof Anthropic.AuthenticationError
        ? "Configuration du chat invalide."
        : "Le chat IA est momentanément indisponible.";
    return new Response(message, { status: 502 });
  }

  const encoder = new TextEncoder();
  const body = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch {
        controller.enqueue(encoder.encode("\n\n[Une erreur est survenue, réessayez.]"));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
