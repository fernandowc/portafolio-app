export interface RESTChatRoom {
  id: number;
  name: string;
  description: string | null;
  isPrivate: boolean;
  user1Id: number | null;
  user2Id: number | null;
  createdAt: string;
}