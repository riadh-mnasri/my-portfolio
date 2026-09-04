"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Bot, Send, X } from "lucide-react";
import { getContent } from "@/lib/content";

type Message = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const { chat } = getContent(useLocale());
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    if (!text.trim() || streaming) return;
    const nextMessages: Message[] = [...messages, { role: "user", content: text.trim() }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setStreaming(true);

    try {
      const res = await fetch("/api/portfolio-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.body) throw new Error("no body");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: updated[updated.length - 1].content + chunk,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: chat.errorMessage,
        };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm shadow-2xl"
        style={{
          background: "#111118",
          border: "1px solid rgba(212,175,55,0.4)",
          color: "#D4AF37",
          boxShadow: "0 8px 32px rgba(212,175,55,0.25)",
        }}
      >
        <Bot size={16} />
        {open ? chat.toggleClose : chat.toggleOpen}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed bottom-24 left-6 z-40 w-[92vw] max-w-sm rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "#111118",
              border: "1px solid rgba(212,175,55,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              maxHeight: "70vh",
            }}
          >
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: "1px solid rgba(212,175,55,0.15)" }}
            >
              <div>
                <div className="text-sm font-semibold text-[#F1F5F9]">{chat.title}</div>
                <div className="text-[10px] text-[#94A3B8]">{chat.subtitle}</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-[#F1F5F9]">
                <X size={16} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ minHeight: 240 }}>
              {messages.length === 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-[#94A3B8]">
                    {chat.emptyPrompt}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {chat.suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-left text-xs px-3 py-2 rounded-lg"
                        style={{ background: "rgba(212,175,55,0.08)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.15)" }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`text-sm leading-relaxed ${m.role === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className="inline-block px-3 py-2 rounded-xl max-w-[85%] whitespace-pre-wrap"
                    style={
                      m.role === "user"
                        ? { background: "#D4AF37", color: "#0A0A0F" }
                        : { background: "rgba(255,255,255,0.05)", color: "#F1F5F9" }
                    }
                  >
                    {m.content || (streaming && i === messages.length - 1 ? "…" : "")}
                  </span>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 p-3"
              style={{ borderTop: "1px solid rgba(212,175,55,0.15)" }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={chat.inputPlaceholder}
                className="flex-1 bg-transparent text-sm text-[#F1F5F9] placeholder:text-[#64748B] outline-none px-2 py-1.5 rounded-lg"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                disabled={streaming}
              />
              <button
                type="submit"
                disabled={streaming || !input.trim()}
                className="p-2 rounded-lg disabled:opacity-40"
                style={{ background: "#D4AF37", color: "#0A0A0F" }}
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
