const apiUrl = process.env.API_URL ?? 'http://localhost:3100/api' ////!

const headers = (token: string) => {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")
    if (token != null)
        headers.append('Authorization', `Bearer ${token}`)
    return headers
}

const api = () => {
    return {
        getAsync: async (urlParams: any, token: string) => {
            const options = { method: "GET", headers: headers(token) }
            const request = new Request(apiUrl + "?" + urlParams, options)
            const response = await fetch(request)
            return await response.json()
        },
        postAsync: async (path: string, model: any, token?: string) => {
            const headers = new Headers()
            headers.append("Content-Type", "application/json")

            // ! dev
            headers.append("Access-Control-Allow-Headers", "*")
            headers.append("Access-Control-Allow-Origin", "*")
            headers.append("Access-Control-Allow-Methods", "*")

            if (token != null)
                headers.append('Authorization', `Bearer ${token}`)

            var options = {
                method: "POST",
                headers,
                body: JSON.stringify(model)
            }

            console.log(options.body)

            const request = new Request(`${apiUrl}/${path}`, options)

            // fetch(request).then((r) => {
            //     r.json().then(s => console.log(s))
            //     console.log()
            // })

            const response = await fetch(request)
            return await response.json()
        }
        // put = async (model) => {
        //     const headers = new Headers()
        //     headers.append("Content-Type", "application/json");
        //     var options = {
        //         method: "PUT",
        //         headers,
        //         body: JSON.stringify(model)
        //     }
        //     const request = new Request(webApiUrl, options);
        //     const response = await fetch(request);
        //     return response;
        // }
        // delete = async (id) => {
        //     const headers = new Headers();
        //     headers.append("Content-Type", "application/json");
        //     const options = {
        //         method: "DELETE",
        //         headers
        //     }
        //     const request = new Request(webApiUrl + "/" + id, options);
        //     const response = await fetch(request);
        //     return response;
        // }
    }
}
export default api