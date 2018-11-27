export const createDrink = (drink) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('drinks').add({
            ...drink, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_DRINK', drink});
        }).catch((err) => {
            dispatch({ type:'CREATE_DRINK_ERROR', err });
        })
    }
};