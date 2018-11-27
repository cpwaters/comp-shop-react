const initState = {}

const drinkReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_DRINK':
            console.log('created drink', action.drink);
            return state;
        case 'CREATE_DRINK_ERROR':
            console.log('create drink error', action.err);
            return state;
        default:
            return state;
    }
}

export default drinkReducer;