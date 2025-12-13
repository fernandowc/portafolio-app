export interface ChatRoomCreateRequest {
  name: string;
  description: string;
  isPrivate: boolean;
  user1Id: string | null;
  user2Id: string | null;
  createdAt: string; // ISO date string
}