export const tempConverter = (value: number, type:string) => {    
    if(type === 'c') return Math.round(value - 273.15)
    else return Math.round((value - 273.15) * 9/5 + 32)
}