export function getHeaders(){
    return {
        Authorization: `Token ${localStorage.getItem('userToken')}`
    }
}


export function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}


export const formatFileSize = size => {
    let formattedFileSize = `${size}`

    if (size < 1024){
        formattedFileSize = `${size} bytes`;
    }
    else if ((size / 1024) < 1024){
        formattedFileSize = `${(size / 1024).toFixed(2)} KB`;
    }
    else if ((size / (1024 * 1024)) < 1024){
        formattedFileSize = `${(size / (1024 * 1024)).toFixed(2)} MB`;
    }
    else if((size / (1024 * 1024 * 1024)) < 1024){
        formattedFileSize = `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return formattedFileSize
}