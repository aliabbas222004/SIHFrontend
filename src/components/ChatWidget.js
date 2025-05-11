import React, { useState, useEffect, useRef } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you with interiors today?' },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const toggleChat = () => {
    if (!isOpen) {
      window.history.pushState({ chatOpen: true }, '');
      setIsOpen(true);
    } else {
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setIsOpen(false);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const threadRef = useRef(null); // store thread_id across messages

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/send-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { from: 'bot', text: data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { from: 'bot', text: '❌ Error talking to assistant.' }]);
    }
  };



  return (
    <>
      <div className="chat-button" onClick={toggleChat}>💬</div>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>AI Assistant</span>
            <button onClick={toggleChat}>✖</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.from === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .chat-button {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background-color: #333;
          color: white;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
        }

        .chat-window {
          position: fixed;
          bottom: 80px;
          left: 20px;
          width: 360px;
          max-width: 90vw;
          height: 500px;
          background-color: white;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          z-index: 1001;
        }

        .chat-header {
          background-color: #f1f1f1;
          padding: 10px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ddd;
        }

        .chat-header button {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }

        .chat-messages {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          background: #fafafa;
        }

        .message {
          padding: 8px 12px;
          margin-bottom: 10px;
          border-radius: 8px;
          max-width: 80%;
        }

        .message.user {
          background: #dcf8c6;
          align-self: flex-end;
          margin-left: auto;
        }

        .message.bot {
          background: #f1f0f0;
          align-self: flex-start;
          margin-right: auto;
        }

        .chat-input {
          display: flex;
          border-top: 1px solid #ddd;
        }

        .chat-input input {
          flex: 1;
          padding: 10px;
          border: none;
          font-size: 14px;
        }

        .chat-input button {
          background-color: #333;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
        }

        @media (max-width: 600px) {
          .chat-window {
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            border-radius: 0;
          }
        }
      `}</style>
    </>
  );
};

export default ChatWidget;
