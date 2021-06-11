import * as apiData from "./apiData";

export const getToken = async () => {
    try {
        let result = await fetch(`${apiData.url}/auth/uuidLogin`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "uuid=hello"
        });
        if (result.ok) {
            const {response} = await result.json()
            return response.access_token
        } else {
            throw (new Error(`error post`))
        }
    } catch (e) {
        console.log(new Error(`error post`));
    }
};