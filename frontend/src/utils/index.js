export function getHeaders(additional){
    return {
        Authorization: `Token ${localStorage.getItem('userToken')}`,
        ...additional
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



export function buildFilter(filters){
    let filter = "?"

    if(filters){
        if(filters.course){
            filter += `course=${filters.course}&`
        }
        if(filters.semester){
            filter += `semester=${filters.semester}&`
        }
    }
    return filter
}

export function removeEndSign(url){
    const lastChar = url.charAt(url.length-1)
    if(lastChar === '?' || lastChar === '&'){
        url = url.slice(0, url.length-1);
    }
    return url;
}