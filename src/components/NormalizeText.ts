const NormalizeTextToExp = (str:string) => {
    if(str !== null){
        // Convertir a minúsculas
        let normalizedStr = str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
        const valueExp = new RegExp(normalizedStr, 'i');

        return valueExp;
    }else{
        throw new Error('No es un string valido');
    }
}

const NormalizeText = (str:string) => {
    if(str !== null){
        // Convertir a minúsculas
        let normalizedStr = str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        return normalizedStr;
    }else{
        throw new Error('No es un string valido');
    }
}

export { NormalizeTextToExp, NormalizeText }