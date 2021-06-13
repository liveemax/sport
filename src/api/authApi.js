import * as stateReuse from "../sportsModule/stateReuse";
import {tokenHeader} from "../sportsModule/stateReuse";

export const getToken = async () => {
    try {
        let result = await fetch(`${stateReuse.url}/auth/uuidLogin`, {
            method: "POST",
            headers: {...tokenHeader()},
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
