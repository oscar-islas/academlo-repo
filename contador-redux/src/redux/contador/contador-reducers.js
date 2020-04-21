const contador = (previousState = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(previousState);
            return previousState + 1;
        default:
            return previousState;
    }
}

export default contador;