type ChatMessage = {
  id: string;
  message: string;
  role: string;
  createdAt: string;
  chatSessionId?: string; // Optional, if the message is linked to a specific chat session
};

type ChatSession = {
  id: string;
  title: string;
  messages: ChatMessage[];
  userId: string;
};
