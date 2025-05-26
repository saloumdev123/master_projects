export interface Message {
  id: number;
  senderId: number;
  senderUsername: string;
  recipientId: number;
  recipientUsername: string;
  content: string;
  sentAt: string; 
  isRead: boolean;
  parentMessageId: number | null;
}
