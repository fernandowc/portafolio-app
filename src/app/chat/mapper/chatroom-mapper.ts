import { ChatRoom } from "../interfaces/ChatRoom";
import { RESTChatRoom } from "../interfaces/rest-chatrooms.interface";

export class ChatRoomMapper {

    static mapRestChatRoomToChatRoom(restChatRoom: RESTChatRoom): ChatRoom {
        return {

            id: restChatRoom.id,
            name: restChatRoom.name,
            description: restChatRoom.description,
            isPrivate: restChatRoom.isPrivate,
            user1Id: restChatRoom.user1Id,
            user2Id: restChatRoom.user2Id,
            createdAt: restChatRoom.createdAt,
        };
    }

    static mapRestChatroomArrayToChatRoomArray(restCountries: RESTChatRoom[]): ChatRoom[] 
    {
    return restCountries.map(this.mapRestChatRoomToChatRoom);
    }
}