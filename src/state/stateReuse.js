export const pageSize = 2
export const startPage = 0
export const localBuffer = !!localStorage.getItem("jogs") ? JSON.parse(localStorage.getItem("jogs")) : []
export const allPages =(allItems)=>{return Math.ceil(allItems.length / pageSize)}
