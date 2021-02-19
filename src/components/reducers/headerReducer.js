import { CHANGE_HEADER_DATA } from "../actions/actionsType";
const initialState = {
  roomName: "My chat",
  numberUsers: 0,
  numberMessages: 0,
  lastMessageDate: "0",
};

export function headerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_HEADER_DATA:
      const messages = action.payload;
      const allUserId = messages.map((msg) => {
        return msg.userId;
      });

      const messagesLength = messages.length;
      const users = new Set(allUserId);

      const createdAt = new Date(messages[messagesLength - 1].createdAt)
        .toLocaleDateString()
        .split(".");
      const today = new Date().toLocaleDateString().split(".");

      let lastMsgTime = createdAt.join(".").slice(0, 5);
      if (createdAt[2] !== today[2]) {
        lastMsgTime = createdAt.join(".");
      }

      return {...state,
          numberUsers: users.size,
          numberMessages: messagesLength,
          lastMessageDate: lastMsgTime
      };

    default:
      return state;
  }
}
