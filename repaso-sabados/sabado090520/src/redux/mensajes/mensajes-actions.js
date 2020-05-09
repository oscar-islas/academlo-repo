export const setCurrentMessage = message => {
  return {
    type: "SET_CURRENT_MESSSAGE",
    payload: message
  };
};

export const filterUsers = user => {
  return {
    type: "SET_CURRENT_FILTER",
    payload: user
  }
}

export const setCurrentUserId = id => {
  return {
    type: "SET_CURRENT_USER_ID",
    payload: id
  }
}

export const sendMessage = (id) => {
  return {
    type: "SEND_MESSAGE",
    payload: {
      senderId: 1232,
      receiverId: id,
      content: "",
      date: "9 de mayo 2020"
    }
  }
}