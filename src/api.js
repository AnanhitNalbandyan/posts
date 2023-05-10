const Base_URL = 'https://jsonplaceholder.typicode.com'

async function api(url, options) {
    const response = await fetch(Base_URL + url, options)
    const data= await response.json()
    return data
}

//await api()

export async function getPost(id) {

    return api(`/posts/${id}`);
}

