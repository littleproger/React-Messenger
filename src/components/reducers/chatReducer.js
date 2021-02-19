import {
  ADD_NEW_MESSAGE,
  FETCHED_MESSAGES,
  DELETE_MESSAGE,
  SHOW_EDIT,
  HIDE_EDIT,
  EDIT_MESSAGE,
} from "../actions/actionsType";
const initialState = {
  messages: [],
  myInform: {
    userId: "61325",
    avatar:
      "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    user: "Yaroslav",
  },
  editMsg: {
    id: "",
    editMsg: false,
    text: "",
  },
};

export function chatReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const message = {
        id: action.payload.id,
        userId: state.myInform.userId,
        avatar: state.myInform.avatar,
        user: state.myInform.user,
        text: action.payload.text,
        createdAt: action.payload.createdAt,
        editedAt: "",
      };
      return { ...state, messages: [...state.messages, message] };

    case FETCHED_MESSAGES:
      return { ...state, messages: [...state.messages, ...action.payload] };

    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };

    case SHOW_EDIT:
      console.log(action.payload);
      if (action.payload) {
        const text = state.messages.filter(
          (message) => message.id === action.payload
        );
        return {
          ...state,
          editMsg: { id: action.payload, editMsg: true, text: text[0].text },
        };
      } else {
        const myMessage = state.messages.filter(
          (message) => state.myInform.userId === message.userId
        );
        const lastMessage = myMessage[myMessage.length - 1];
        if (lastMessage) {
          return {
            ...state,
            editMsg: {
              id: lastMessage.id,
              editMsg: true,
              text: lastMessage.text,
            },
          };
        } else {
          alert(
            "You must write message first!\nThis button for edit last message!"
          );
        }
      }

    case HIDE_EDIT:
      return { ...state, editMsg: { id: "", editMsg: false, text: "" } };

    case EDIT_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === action.payload.id) {
            message.text = action.payload.text;
            message.editedAt = new Date().toString();
          }
          return message;
        }),
      };

    default:
      return state;
  }
}
