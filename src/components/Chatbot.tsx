import React from "react";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

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
  "What makes Travis stand out?",
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
    <div className="chat-bot">
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

      <div className="chat-bot__container">
        {/* Messages */}
        <div className="chat-bot__messages-area">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-bot__message-row chat-bot__message-row--${msg.role}`}
            >
              {msg.role === "assistant" && (
                <div className="chat-bot__assistant-avatar">AI</div>
              )}
              <div className={`chat-bot__bubble chat-bot__bubble--${msg.role}`}>
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="chat-bot__message-row">
              <div className="chat-bot__assistant-avatar">AI</div>
              <div className="chat-bot__bubble chat-bot__bubble--assistant">
                <span className="chat-bot__dot chat-bot__dot--1">●</span>
                <span className="chat-bot__dot chat-bot__dot--2">●</span>
                <span className="chat-bot__dot chat-bot__dot--3">●</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length <= 1 && (
          <div className="chat-bot__suggested-area">
            <div className="chat-bot__suggested-label">Suggested questions</div>
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button
                key={i}
                className="chat-bot__suggested-btn"
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-bot__input-area">
          <div className="chat-bot__input-wrapper">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Travis"
              rows={1}
              className="chat-bot__textarea"
            />
            <button
              className="chat-bot__send-btn"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
            >
            <RocketLaunchIcon className="rocketLaunchIcon" />
            </button>
          </div>
          <div className="chat-bot__input-footer">
            Powered by Claude · Press Enter to send
          </div>
        </div>
      </div>
    </div>
  );
}