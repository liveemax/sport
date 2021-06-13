import moment from "moment";

//Constants
export const url='https://jogtracker.herokuapp.com/api/v1'
export const pageSize = 2
export const dateFormat = 'DD.MM.YYYY'
export const timeExample = '15'
export const dateExample = '28.12.2020'
export const distanceExample = '2.2'
export const startPage = 0
export const tokenStorage='token'
export const jogStorage='jogs'
export const isValid=(payload)=>moment(payload, dateFormat, true).isValid()
export const localBuffer = !!localStorage.getItem(jogStorage) ? JSON.parse(localStorage.getItem(jogStorage)) : []


//Func
export const authHeader=(token)=>{
    return {
        "Accept":'application/json',
        "Authorization":`Bearer ${token}`
    }}
export const tokenHeader=()=>{
    return {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    }}

export const allPages =(allItems)=>{return Math.ceil(allItems.length / pageSize)}

export const filterFunc=(payload,dateFrom,dateTo,jogsResults)=>{
    if(!dateFrom)
        dateFrom='00.00.0000'
    if(!dateTo)
        dateTo=moment(Date.now()).format(dateFormat)
    let jogsBuffer=[]
    if(isValid(payload))
    {
        let dateFromNumber=moment(dateFrom,dateFormat).unix();
        let dateToNumber=moment(dateTo,dateFormat).unix();
        localBuffer.forEach((el)=>{
            if(el.date>=dateFromNumber&&el.date<=dateToNumber)
                jogsBuffer.push(el)
        })
    }
    else{
        jogsBuffer=jogsResults
    }
    return jogsBuffer
}

export const apiReuse = async (path,responseName,method,headers,body) => {
    try {
        let result = await fetch(`${url}${path}`, {
            method: `${method}`,
            headers,
            body
        });
        if (result.ok) {
            const {response} = await result.json()
            return response[responseName]
        } else {
            throw (new Error(`error post`))
        }
    } catch (e) {
        console.log(new Error(`error post`));
    }
};