const initState = {}

const hhReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_HH':
            console.log('created hh', action.hh);
            return state;
        case 'CREATE_HH_ERROR':
            console.log('create hh error', action.err);
            return state;
        default:
            return state;
    }
}

export default hhReducer;