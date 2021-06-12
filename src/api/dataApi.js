import * as apiData from "./commonData";

export const getJogs = async () => {
    try {
        let result = await fetch(`${apiData.url}/data/sync`, {
            method: "GET",
            headers: {
                ...apiData.authHeader(localStorage.getItem('token'))
            }
        });
        if (result.ok) {
            const {response} = await result.json()
            return response.jogs
        } else {
            throw (new Error(`error post`))
        }
    } catch (e) {
        console.log(new Error(`error post`));
    }
};