const initState = {}

const storageReducer = (state=initState, action) => {
    switch (action.type) {
        case 'UPLOAD_FILE':
            console.log('file uploaded', action.product);
            return state;
        case 'UPLOAD_ERROR':
            console.log('upload error', action.err);
            return state;
        default:
            return state;
    }
}

export default storageReducer;