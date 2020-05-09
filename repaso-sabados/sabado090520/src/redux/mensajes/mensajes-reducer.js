const INITIAL_STATE = {
  currentMessage: {
    content: "",
    date: "9 de mayo 2020"
  },
  currentUser: 0,
  filter: "",
  itemConversations: [
    {
      userId: "101",
      profileImg:
        "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Felipe",
      time: "12:16",
      messagesItems: [
        {
          senderId: 1232,
          receiverId: 1233,
          content: "Hola soy Felipe",
          date: "4 de mayo 2020"
        },
        {
          senderId: 1233,
          receiverId: 1233,
          content: "Hola como estás",
          date: "4 de mayo 2020"
        }
      ]
    },
    {
      userId: "102",
      profileImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Eduardo",
      time: "13:16",
      messagesItems: [
        {
          senderId: 1232,
          receiverId: 1233,
          content: "Hola soy Eduardo",
          date: "4 de mayo 2020"
        },
        {
          senderId: 1233,
          receiverId: 1233,
          content: "Hola, me llamo Oscar",
          date: "4 de mayo 2020"
        }
      ]
    },
    {
      userId: "103",
      profileImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Eduardo",
      time: "10:05",
      messagesItems: [
        {
          senderId: 1232,
          receiverId: 1233,
          content: "Hola",
          date: "4 de mayo 2020"
        },
        {
          senderId: 1233,
          receiverId: 1233,
          content: "Hola, qué tal?",
          date: "4 de mayo 2020"
        }
      ]
    },
    {
      userId: "104",
      profileImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Eduardo",
      time: "12:00",
      messagesItems: [
        {
          senderId: 1232,
          receiverId: 1233,
          content: "Hola",
          date: "4 de mayo 2020"
        },
        {
          senderId: 1233,
          receiverId: 1233,
          content: "Hola, ¿cómo estás?",
          date: "4 de mayo 2020"
        }
      ]
    },
    {
      userId: "105",
      profileImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Eduardo",
      time: "12:30",
      messagesItems: [
        {
          senderId: 1232,
          receiverId: 1233,
          content: "Oye...",
          date: "4 de mayo 2020"
        },
        {
          senderId: 1233,
          receiverId: 1233,
          content: "¿Qué pasó?",
          date: "4 de mayo 2020"
        }
      ]
    },
    {
      userId: "106",
      profileImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Eduardo",
      time: "10:16",
      messagesItems: [
        {
          senderId: 1232,
          receiverId: 1233,
          content: "Hola mundo",
          date: "4 de mayo 2020"
        },
        {
          senderId: 1233,
          receiverId: 1233,
          content: "console.log('Hola Mundo')",
          date: "4 de mayo 2020"
        }
      ]
    },
    {
      userId: "107",
      profileImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Eduardo",
      time: "09:15",
      messagesItems: [
        {
          senderId: 1232,
          receiverId: 1233,
          content: "Hi, what are you doing?!",
          date: "4 de mayo 2020"
        },
        {
          senderId: 1233,
          receiverId: 1233,
          content: "I am doing nothing man!",
          date: "4 de mayo 2020"
        }
      ]
    },
    {
      userId: "108",
      profileImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
      username: "Eduardo",
      time: "08:00",
      messagesItems: [
        {
          senderId: 1232,
          receiverId: 1233,
          content: "Hi, what are you doing?!",
          date: "4 de mayo 2020"
        },
        {
          senderId: 1233,
          receiverId: 1233,
          content: "I am doing nothing man!",
          date: "4 de mayo 2020"
        }
      ]
    },
  ]
};

const messageReducer = (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_MESSSAGE":
      return {
        ...previousState,
        currentMessage: {
          content: action.payload,
          date: "4 de mayo 2020"
        }
      };
    case "SET_CURRENT_FILTER":
      return {
        ...previousState,
        filter: action.payload
      }
    case "SEND_MESSAGE":
      let currentMessage = {...action.payload};
      currentMessage = {...previousState, content: previousState.currentMessage.content} 
      let copiaArreglo = [...previousState.itemConversations];
      let currentConversation = copiaArreglo.find( conversation => conversation.userId === action.payload.receiverId);
      let currentIndex = copiaArreglo.findIndex( conversation => conversation.userId === action.payload.receiverId);      
      copiaArreglo[currentIndex].messagesItems = [...currentConversation.messagesItems, currentMessage]
      return {
        ...previousState,
        itemConversations: copiaArreglo
      }
    default:
      return previousState;
  }
};

export default messageReducer;
