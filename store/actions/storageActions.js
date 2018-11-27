export const upload = (path, files, databasePath) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.storage().uploadFile(
            path.path,
            files.files,
            databasePath.databasePath
        ).then(() => {
            dispatch({ type: 'UPLOAD_FILE' })
        }).catch((err) => {
            dispatch({ type: 'UPLOAD_ERROR', err });
        });
    }
}