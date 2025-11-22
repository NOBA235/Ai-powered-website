import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

const ChatWidgets = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatHistory])

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return

    const userMessage = { role: 'user', content: message, timestamp: new Date() }
    const updatedHistory = [...chatHistory, userMessage]
    setChatHistory(updatedHistory)
    setMessage('')
    setIsLoading(true)

    try {
      console.log(' Sending message to backend...')
      
      const formattedHistory = chatHistory.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }))

      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          chatHistory: formattedHistory
        }),
      })

      console.log('📡 Response status:', response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('❌ Response error:', errorText)
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('✅ AI Response data:', data)
      
      const botMessage = { 
        role: 'assistant',
        content: data.response, 
        timestamp: new Date() 
      }
      
      setChatHistory(prev => [...prev, botMessage])
    } catch (error) {
      console.error('💥 Chat error details:', error)
      const errorMessage = { 
        role: 'assistant', 
        content: `Sorry, I'm having trouble connecting right now. Please try again later.`, 
        timestamp: new Date() 
      }
      setChatHistory(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Test backend connection on component mount
  useEffect(() => {
    const testBackend = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/health')
        if (response.ok) {
          console.log('✅ Backend connection successful')
        } else {
          console.log('❌ Backend connection failed')
        }
      } catch (error) {
        console.log('❌ Backend is not reachable')
      }
    }
    testBackend()
  }, [])

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 z-50 border border-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:bg-transparent md:backdrop-blur-0"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] md:w-96 h-[500px] bg-white rounded-xl border border-gray-200 shadow-xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Alex AI</h3>
                    <p className="text-white/80 text-xs">Online • Ready to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-[380px] overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                {chatHistory.length === 0 && (
                  <div className="text-center text-gray-500 mt-8">
                    <Bot className="w-12 h-12 mx-auto mb-3 text-blue-400 opacity-60" />
                    <p className="text-sm">Hello! I'm Alex's AI assistant.</p>
                    <p className="text-sm">How can I help you today?</p>
                  </div>
                )}
                
                {chatHistory.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-xl ${
                        msg.role === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white border border-gray-200 rounded-bl-none text-gray-800 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {msg.role === 'assistant' && (
                          <Bot className="w-3 h-3 text-blue-500" />
                        )}
                        <span className="text-xs opacity-70">
                          {msg.role === 'user' ? 'You' : 'Alex AI'}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-xl rounded-bl-none p-3 max-w-[85%] text-gray-800 shadow-sm">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                        <Bot className="w-3 h-3 text-blue-500" />
                        Noba is typing...
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-50 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
                    disabled={isLoading}
                  />
                  <motion.button
                    onClick={sendMessage}
                    disabled={isLoading || !message.trim()}
                    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed border border-blue-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidgets