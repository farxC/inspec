
export function generateUniqueID(length: number = 6): string{
    const id = Math.floor(Math.random() * (10 ** length)).toString().padStart(length,'0')
    
    //Returns the id.
    return id
}