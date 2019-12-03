const getPostData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(result => result.json())
}

const getSinglePostData = (query) => {
    return fetch("https://jsonplaceholder.typicode.com/posts/" + query)
        .then(result => result.json())

}

export { getPostData, getSinglePostData };