import {tokenStorage} from "../sportsModule/stateReuse";
import * as stateReuse from "../sportsModule/stateReuse";

export const getJogs = async () => {
    try {
        let result = await fetch(`${stateReuse.url}/data/sync`, {
            method: "GET",
            headers: {
                ...stateReuse.authHeader(localStorage.getItem(tokenStorage))
            }
        });
        if (result.ok) {
            const {response} = await result.json()
            return response.jogs
        } else {
            throw (new Error(`${result.statusText}`))
        }
    } catch (e) {
        console.log(new Error(`${e}`));
    }
};
export const setJog = async (date,time,distance) => {
    try {
        const data={
            date,
            time:parseInt(time,10),
            distance:parseFloat(distance)
        }
        let result = await fetch(`${stateReuse.url}/data/jog`, {
            method: "POST",
            headers: {
                ...stateReuse.authHeader(localStorage.getItem(tokenStorage))
            },
            body:JSON.stringify(data)
        });
        if (result.ok) {
            const {response} = await result.json()
            return response
        } else {
            throw (new Error(`${result.statusText}`))
        }
    } catch (e) {
        console.log(new Error(`${e}`));
    }
};