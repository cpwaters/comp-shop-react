export const createFood = (food) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('foods').add({
            ...food, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_FOOD', food});
        }).catch((err) => {
            dispatch({ type:'CREATE_FOOD_ERROR', err });
        })
    }
};