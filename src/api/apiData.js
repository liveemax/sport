export const authHeader=(token)=>{
    return {
    Accepts:'application/json',
    Authorization:`${token}`
}}
export const url='https://jogtracker.herokuapp.com/api/v1/'
