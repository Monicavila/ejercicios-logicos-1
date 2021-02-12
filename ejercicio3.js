// Anagrama Valido
// Escribe una función que reciba dos strings s y t como argumentos y determine si t es un anagrama de s
// https://www.ejemplos.co/50-ejemplos-de-anagramas/

const isAnagram = (s, t) => {
    if(s.length === t.length) {
        let i = 0;
        while(i <= s.length) {
            let letter = t.charAt(i);
            if(s.includes(letter)){
                i ++
            }else{return false}
        }
    return true
    }else{
    return false
    }
}

module.exports = {
    isAnagram
}