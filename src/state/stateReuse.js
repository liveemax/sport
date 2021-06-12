import moment from "moment";

export const pageSize = 2

export const dateFormat = 'DD.MM.YYYY'

export const startPage = 0

export const isValid=(payload)=>moment(payload, dateFormat, true).isValid()

export const localBuffer = !!localStorage.getItem("jogs") ? JSON.parse(localStorage.getItem("jogs")) : []

export const allPages =(allItems)=>{return Math.ceil(allItems.length / pageSize)}

export const filterFunc=(payload,dateFrom,dateTo,jogsResults)=>{
    if(!dateFrom)
        dateFrom='00.00.0000'
    if(!dateTo)
        dateTo=moment(Date.now()).format(dateFormat)
    let jogsBuffer=[]
    if(isValid(payload))
    {
        let dateFromNumber=moment(dateFrom,dateFormat).valueOf();
        let dateToNumber=moment(dateTo,dateFormat).valueOf();
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