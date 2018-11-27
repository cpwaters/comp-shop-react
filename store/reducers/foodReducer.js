const initState = {}

const foodReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_FOOD':
            console.log('created food', action.food);
            return state;
        case 'CREATE_FOOD_ERROR':
            console.log('create food error', action.err);
            return state;
        default:
            return state;
    }
}

export default foodReducer;