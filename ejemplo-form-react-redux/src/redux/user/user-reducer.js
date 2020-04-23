const INITIAL_STATE = {
  data: {
    name: "",
    lastName: "",
    email: ""
  },
  usuarios: []
};

const user = (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "nombreUsuario":
      return {
        ...previousState,
        data: { ...previousState.data, [action.data.name]: action.data.value }
      };
    case "ADD_USER":
      let nuevoUsuario = [...previousState.usuarios, previousState.data];
      return { ...previousState, usuarios: nuevoUsuario };
    default:
      return previousState;
  }
};

export default user;
