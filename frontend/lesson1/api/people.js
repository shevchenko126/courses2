const peopleApi = () => {
    return fetch(`${process.env.SERVER_URL}people/`).then((result) => {
        return result.json();
    })
}


const onePersonApi = (id) =>  {
    return fetch(`${process.env.SERVER_URL}people/${id}`).then((result) => {
        return result.json()
    })
}

export{
    peopleApi,
    onePersonApi
}