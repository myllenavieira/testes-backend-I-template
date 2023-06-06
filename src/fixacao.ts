export const fixacao = (word: string): string[] | null  => {

    if(typeof word !== "string"){
        return null;
    }

    return word.split('')
}