import { useState } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage: Message = {
        role: "bot",
        text: data.reply || "No response.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error connecting to server." },
      ]);
    }
  };

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-gray-800 text-white w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
      >
        💬
      </div>

      {open && (
        <div className="fixed bottom-20 right-5 w-80 bg-white border border-gray-200 rounded-lg shadow-xl flex flex-col">
          <div className="p-3 border-b font-semibold text-gray-700">
            DSA Assistant
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  msg.role === "user"
                    ? "bg-gray-200 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-2 border-t flex">
            <input
              className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask DSA doubt..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-gray-800 text-white px-3 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
