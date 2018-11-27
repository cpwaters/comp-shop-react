export const createHh = (hh) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('hhs').add({
            ...hh, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_HH', hh});
        }).catch((err) => {
            dispatch({ type:'CREATE_HH_ERROR', err });
        })
    }
};