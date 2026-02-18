import React from "react";
import { useState, useRef, useEffect, KeyboardEvent } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are an AI assistant representing Travis Purcell, a Frontend Developer with 6+ years of experience. Answer questions about Travis in a friendly, professional way as if you are his personal assistant. Here is everything you know about Travis:

PROFESSIONAL SUMMARY:
Travis is a Frontend Developer with 6+ years of experience in Agile environments, building responsive, component-based web apps using React and Next.js. He is proficient in HTML, CSS, JavaScript, and TypeScript, with experience in state management, automated testing, CI/CD pipelines, and web accessibility standards. He is known for modernizing legacy codebases, improving documentation, and streamlining workflows. He is passionate about delivering high-quality UI/UX through performance optimization, with an aim of 90+ Lighthouse scores.

EXPERIENCE:
1. Self-Directed Development | Frontend Developer (Sep 2025 – Present)
- Completed JavaScript and React Udemy courses to deepen knowledge of Frontend Engineering
- Built personal projects exploring Next.js, server-side rendering, Jest and Cypress component testing, and Redux state management

2. OHO Interactive | Full-Stack Developer (Apr 2023 – Sep 2025)
- Modernized HTML listing pages with React 18, applying composition patterns, CSS Modules and Styled-Components, ensured mobile-first responsiveness, doubled load speed
- Tested React components with Jest and Cypress component testing
- Built modules, including a REST API to auto-populate faculty profiles, reducing manual updates
- Implemented localization features including Google Translate integration and RTL stylesheet support for Arabic
- Optimized site performance and Core Web Vitals across devices
- Contributed to frontend engineering workflow, documenting CI/Deployment such as Bitbucket Pipelines and Docker local development setup

3. The Lightstream Group | Front-End Developer (Jun 2020 – Apr 2023)
- Developed responsive, custom WordPress themes and plugins, using PHP and React
- Built SEO-optimized and WCAG-compliant WordPress projects, including server setup
- Measured and improved Core Web Vitals across WordPress projects using Google Lighthouse
- Mentored junior developers, conducted code reviews, and contributed to design system standards to maintain codebase quality

SKILLS:
- Programming: JavaScript, TypeScript, React 18, Next.js, Redux, Node.js, jQuery
- Styling: CSS, SASS, CSS Modules, Styled-Components, Bootstrap, Material UI, Tailwind
- DevOps & Backend: AWS, Pantheon, Acquia, Docker, Drush, CI/CD deployment, REST APIs
- Standards, Build Tools & AI: Webpack, Vite, npm, Yarn, WCAG 2.2, Claude, Copilot
- Collaboration Tools: Jira, Confluence, GitHub, Git, Figma
- Testing: Chrome Developer Tools, Jest, Cypress, BrowserStack
- CMS: WordPress (Classic and Gutenberg), Drupal 11

EDUCATION:
Rowan University | Bachelor of Arts (BA) in History

CONTACT:
- Email: travis.n.purcell@gmail.com
- Portfolio: https://www.travispurcell.dev
- Location: Denver, CO

Keep answers concise and relevant. If asked something you don't know about Travis, say you don't have that information but encourage them to reach out to Travis directly at travis.n.purcell@gmail.com.`;

const SUGGESTED_QUESTIONS: string[] = [
  "What is Travis's experience with React?",
  "What makes Travis stand out?",
  "Has Travis worked with accessibility standards?",
  "What testing tools does Travis use?",
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Travis's AI assistant. Ask me anything about his skills, experience, or background.",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string): Promise<void> => {
    const userMessage = text || input.trim();
    if (!userMessage) return;

    setInput("");
    const updatedMessages: Message[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: updatedMessages
            .filter((m, i) => !(i === 0 && m.role === 'assistant'))
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply: string =
        data.content?.[0]?.text || "Sorry, I couldn't get a response.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .message-bubble { animation: fadeUp 0.3s ease forwards; }

        .suggested-btn:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.25) !important;
          color: #888 !important;
        }

        .send-btn:hover:not(:disabled) { background: #e8e8e8 !important; }
        .send-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        textarea:focus { outline: none; border-color: rgba(255,255,255,0.3) !important; }
        textarea::placeholder { color: #555; }
      `}</style>

      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <div style={styles.avatar}>TP</div>
            <div>
              <div style={styles.headerName}>Travis Purcell</div>
              <div style={styles.headerSub}>
                <span style={styles.onlineDot} />
                AI Assistant Active
              </div>
            </div>
          </div>
          <div style={styles.headerTag}>Frontend Developer</div>
        </div>

        {/* Messages */}
        <div style={styles.messagesArea}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className="message-bubble"
              style={{
                ...styles.messageRow,
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              {msg.role === "assistant" && (
                <div style={styles.assistantAvatar}>AI</div>
              )}
              <div
                style={
                  msg.role === "user"
                    ? styles.userBubble
                    : styles.assistantBubble
                }
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div style={styles.messageRow} className="message-bubble">
              <div style={styles.assistantAvatar}>AI</div>
              <div style={styles.assistantBubble}>
                <span style={{ ...styles.dot, animationDelay: "0s" }}>●</span>
                <span style={{ ...styles.dot, animationDelay: "0.2s" }}>●</span>
                <span style={{ ...styles.dot, animationDelay: "0.4s" }}>●</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length <= 1 && (
          <div style={styles.suggestedArea}>
            <div style={styles.suggestedLabel}>Suggested questions</div>
            <div style={styles.suggestedGrid}>
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  className="suggested-btn"
                  onClick={() => sendMessage(q)}
                  style={styles.suggestedBtn}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div style={styles.inputArea}>
          <div style={styles.inputWrapper}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Travis's experience, skills, or background..."
              rows={1}
              style={styles.textarea}
            />
            <button
              className="send-btn"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              style={styles.sendBtn}
            >
              ↑
            </button>
          </div>
          <div style={styles.inputFooter}>
            Powered by Claude · Press Enter to send
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0a0a0a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'DM Sans', sans-serif",
    padding: "20px",
  },
  container: {
    width: "100%",
    maxWidth: "680px",
    background: "#111",
    border: "1px solid #222",
    borderRadius: "16px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "680px",
    boxShadow: "0 0 60px rgba(0,0,0,0.6)",
  },
  header: {
    padding: "20px 24px",
    borderBottom: "1px solid #1e1e1e",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#111",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "#fff",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'DM Mono', monospace",
    fontSize: "13px",
    fontWeight: "500",
    letterSpacing: "0.05em",
  },
  headerName: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: "500",
    letterSpacing: "-0.01em",
  },
  headerSub: {
    color: "#555",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "2px",
  },
  onlineDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#4ade80",
    display: "inline-block",
  },
  headerTag: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: "#444",
    border: "1px solid #222",
    borderRadius: "6px",
    padding: "4px 10px",
    letterSpacing: "0.05em",
  },
  messagesArea: {
    flex: 1,
    overflowY: "auto",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  messageRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
  },
  assistantAvatar: {
    width: "28px",
    height: "28px",
    borderRadius: "7px",
    background: "#1e1e1e",
    border: "1px solid #2a2a2a",
    color: "#666",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontFamily: "'DM Mono', monospace",
    flexShrink: 0,
    marginTop: "2px",
  },
  assistantBubble: {
    background: "#161616",
    border: "1px solid #1e1e1e",
    borderRadius: "4px 12px 12px 12px",
    padding: "12px 16px",
    color: "#ccc",
    fontSize: "14px",
    lineHeight: "1.6",
    maxWidth: "85%",
    letterSpacing: "-0.01em",
  },
  userBubble: {
    background: "#fff",
    borderRadius: "12px 4px 12px 12px",
    padding: "12px 16px",
    color: "#000",
    fontSize: "14px",
    lineHeight: "1.6",
    maxWidth: "85%",
    letterSpacing: "-0.01em",
  },
  dot: {
    display: "inline-block",
    fontSize: "8px",
    color: "#555",
    animation: "pulse 1.2s ease-in-out infinite",
    marginRight: "3px",
  },
  suggestedArea: {
    padding: "0 24px 16px",
  },
  suggestedLabel: {
    color: "#333",
    fontSize: "11px",
    fontFamily: "'DM Mono', monospace",
    letterSpacing: "0.08em",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  suggestedGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
  },
  suggestedBtn: {
    background: "transparent",
    border: "1px solid #1e1e1e",
    borderRadius: "8px",
    padding: "10px 12px",
    color: "#555",
    fontSize: "12px",
    cursor: "pointer",
    textAlign: "left",
    lineHeight: "1.4",
    transition: "all 0.15s ease",
    fontFamily: "'DM Sans', sans-serif",
  },
  inputArea: {
    padding: "16px 24px 20px",
    borderTop: "1px solid #1a1a1a",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "flex-end",
    gap: "10px",
    background: "#161616",
    border: "1px solid #222",
    borderRadius: "12px",
    padding: "12px 12px 12px 16px",
  },
  textarea: {
    flex: 1,
    background: "transparent",
    border: "none",
    color: "#ccc",
    fontSize: "14px",
    resize: "none",
    fontFamily: "'DM Sans', sans-serif",
    lineHeight: "1.5",
    letterSpacing: "-0.01em",
  },
  sendBtn: {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    background: "#fff",
    border: "none",
    color: "#000",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "background 0.15s ease",
    fontWeight: "600",
  },
  inputFooter: {
    color: "#2a2a2a",
    fontSize: "11px",
    fontFamily: "'DM Mono', monospace",
    textAlign: "center",
    marginTop: "10px",
    letterSpacing: "0.05em",
  },
};
