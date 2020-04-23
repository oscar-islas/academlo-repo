export const setUser = (nombre, valor) => ({
  type: "nombreUsuario",
  data: {
    name: nombre,
    value: valor
  }
});

export const addUser = () => ({
  type: "ADD_USER"
});
