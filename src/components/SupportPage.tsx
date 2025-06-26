
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MessageSquare, Bot, Video, HelpCircle, Ticket, Send, Paperclip } from 'lucide-react';

const SupportPage = () => {
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I\'m your AI investment assistant. How can I help you today?', time: '10:30 AM' },
    { type: 'user', message: 'What are my current portfolio returns?', time: '10:31 AM' },
    { type: 'bot', message: 'Your current portfolio value is ৳5,60,000 with a total return of +12.5% (৳62,000). Your best performing fund is Tech Growth Basket with +18.2% returns.', time: '10:31 AM' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const supportTickets = [
    { id: 'TKT-001', subject: 'Unable to withdraw funds', status: 'Open', priority: 'High', date: '25 Jan 2025' },
    { id: 'TKT-002', subject: 'MIP dividend not received', status: 'In Progress', priority: 'Medium', date: '24 Jan 2025' },
    { id: 'TKT-003', subject: 'App login issue', status: 'Resolved', priority: 'Low', date: '23 Jan 2025' },
    { id: 'TKT-004', subject: 'Investment goal modification', status: 'Closed', priority: 'Medium', date: '22 Jan 2025' },
  ];

  const faqs = [
    { question: 'How do I start investing?', answer: 'You can start investing by completing your KYC verification and adding money to your wallet.' },
    { question: 'What is the minimum investment amount?', answer: 'The minimum investment amount is ৳1,000 for most funds.' },
    { question: 'How are dividends paid?', answer: 'Dividends are automatically credited to your wallet on the declared payout date.' },
    { question: 'Can I withdraw my investment anytime?', answer: 'Yes, most investments can be redeemed, but some may have lock-in periods.' },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = { type: 'user', message: newMessage, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) };
      setChatMessages([...chatMessages, userMessage]);
      setNewMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = { 
          type: 'bot', 
          message: 'Thank you for your question. Let me help you with that. For specific account details, please provide your account number or contact our support team.',
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="bg-prime-bg min-h-screen p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-prime-dark">Support Center</h1>
      </div>

      <Tabs defaultValue="chatbot" className="mb-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="chatbot">AI Assistant</TabsTrigger>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
          <TabsTrigger value="help">Help Center</TabsTrigger>
          <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
        </TabsList>

        <TabsContent value="chatbot" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-prime-purple" />
                24/7 Investment Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Avatar Section */}
              <div className="flex items-center gap-3 mb-4 p-3 bg-gradient-to-r from-prime-purple to-prime-green rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-prime-purple" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Prime Assistant</h3>
                  <p className="text-white/80 text-sm">Always here to help with your investments</p>
                </div>
                <button className="ml-auto bg-white/20 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                  <Video className="w-4 h-4" />
                  Video Call
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-64 overflow-y-auto border rounded-lg p-4 mb-4 space-y-3">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-prime-purple text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <button className="p-2 text-gray-500 hover:text-prime-purple">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-prime-purple"
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-prime-purple text-white p-2 rounded-lg"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-prime-dark">Support Tickets</h3>
            <button className="bg-prime-green text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Ticket className="w-4 h-4" />
              New Ticket
            </button>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {supportTickets.map((ticket) => (
                    <TableRow key={ticket.id} className="cursor-pointer hover:bg-gray-50">
                      <TableCell className="font-medium text-prime-purple">{ticket.id}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs ${
                          ticket.status === 'Open' ? 'bg-red-100 text-red-600' :
                          ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-600' :
                          ticket.status === 'Resolved' ? 'bg-green-100 text-green-600' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {ticket.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs ${
                          ticket.priority === 'High' ? 'bg-red-100 text-red-600' :
                          ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-blue-100 text-blue-600'
                        }`}>
                          {ticket.priority}
                        </span>
                      </TableCell>
                      <TableCell>{ticket.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="help" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4">
                    <h4 className="font-medium text-prime-dark mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Getting Started with Prime Invest', duration: '5:32' },
              { title: 'How to Set Investment Goals', duration: '3:45' },
              { title: 'Understanding Portfolio Analytics', duration: '7:20' },
              { title: 'Monthly Income Plans Explained', duration: '4:15' },
            ].map((video, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="bg-gradient-to-br from-prime-purple to-prime-green h-32 rounded-lg mb-3 flex items-center justify-center">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-medium text-prime-dark">{video.title}</h4>
                  <p className="text-sm text-gray-600">{video.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SupportPage;
