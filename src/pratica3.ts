type OBJETO = {
    soma: number,
    mult: number
}
export const pratica3 = (a:number, b:number): OBJETO | null =>{
    if(typeof a !== "number" || typeof b !== "number"){
            return null;
    }
    return {
        soma: a+b,
        mult: a*b
    }
}