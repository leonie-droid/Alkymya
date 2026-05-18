import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface Message {
  role: 'user' | 'model';
  parts: [{ text: string }];
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage('');
    
    const newUserMessage: Message = {
      role: 'user',
      parts: [{ text: userMessage }]
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const history = messages.map(msg => ({
        role: msg.role,
        parts: msg.parts
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history })
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      
      const botMessage: Message = {
        role: 'model',
        parts: [{ text: data.text }]
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat Error:', error);
      const errorMessage: Message = {
        role: 'model',
        parts: [{ text: "Désolé, j'ai rencontré une erreur. Réessayez plus tard." }]
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white/90 backdrop-blur-xl border border-accent/20 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-deep-blue p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-heading font-black text-lg">Assistant Alkymya</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">En ligne</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
                id="close-chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
              {messages.length === 0 && (
                <div className="text-center space-y-4 py-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-deep-blue font-bold">Bonjour ! 👋</p>
                    <p className="text-muted-foreground text-sm">Comment puis-je vous aider aujourd'hui ? Je peux vous parler de notre étude Génération IA ou de nos services.</p>
                  </div>
                </div>
              )}
              
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={cn(
                    "flex flex-col gap-1.5 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div 
                    className={cn(
                      "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                      msg.role === 'user' 
                        ? "bg-accent text-white rounded-tr-none" 
                        : "bg-muted text-deep-blue rounded-tl-none"
                    )}
                  >
                    {msg.parts[0].text}
                  </div>
                  <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                    {msg.role === 'user' ? 'Vous' : 'Assistant'}
                  </span>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex flex-col gap-1.5 items-start mr-auto max-w-[85%]">
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 text-accent animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-muted/50 border-t border-accent/10">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Posez votre question..."
                  className="w-full bg-white border border-accent/20 rounded-full pl-6 pr-14 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all shadow-inner"
                  id="chat-input"
                />
                <button
                  type="submit"
                  disabled={!message.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-deep-blue hover:bg-accent text-white rounded-full flex items-center justify-center transition-all disabled:opacity-50 disabled:hover:bg-deep-blue"
                  id="send-message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500",
          isOpen ? "bg-white text-deep-blue rotate-90" : "bg-accent text-white"
        )}
        id="toggle-chat"
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
      </motion.button>
    </div>
  );
};
