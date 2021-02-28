const cypher = (msg: string, rotation:number) => {
    const lowerCaseMsg:string = msg.toLowerCase()
    const first:number = "a".charCodeAt(0)
    const last:number = "z".charCodeAt(0)
    const alphabetLength:number = last - first + 1
    const realRotation = rotation % alphabetLength
    let validChars = "";
    for(let i = 0; i <  lowerCaseMsg.length; i++){
        const current:number = lowerCaseMsg.charCodeAt(i)
        if(current >= first && current <= last){
            validChars += lowerCaseMsg.charAt(i)
        }
    }
    let result = ""
    for(let i = 0; i < validChars.length; i++){
        const current:number = validChars.charCodeAt(i)
        const charPosition:number = current - first
        const currentOffset:number = i % realRotation
        const translatedChar:number = (charPosition + currentOffset) % alphabetLength
        const cypheredChar:string = String.fromCharCode(translatedChar + first)
        result += cypheredChar
    }
    return result;
}

const decypher = (msg: string, rotation:number) => {
    const lowerCaseMsg:string = msg.toLowerCase()
    const first:number = "a".charCodeAt(0)
    const last:number = "z".charCodeAt(0)
    const alphabetLength:number = last - first + 1
    const realRotation = rotation % alphabetLength
    let validChars = "";
    for(let i = 0; i <  lowerCaseMsg.length; i++){
        const current:number = lowerCaseMsg.charCodeAt(i)
        if(current >= first && current <= last){
            validChars += lowerCaseMsg.charAt(i)
        }
    }
    let result = ""
    for(let i = 0; i < validChars.length; i++){
        const current:number = validChars.charCodeAt(i)
        const charPosition:number = current - first
        const currentOffset:number = i % realRotation
        const translation:number = (charPosition - currentOffset) >= 0 ? (charPosition - currentOffset) : alphabetLength + (charPosition - currentOffset)
        const translatedChar:number = translation % alphabetLength
        const cypheredChar:string = String.fromCharCode(translatedChar + first)
        
        result += cypheredChar
    }
    return result;
}



export {cypher, decypher}