let alphabet = 'abcdefghijklmnopqrstuvwxyz';

class VigenereCipheringMachine {
    constructor(flag = true) {
        this.flag = flag
    }

    encrypt(message, key) {
        if(message === undefined || key === undefined) {
            throw error
        }
        let offset = 0;
        let outputString = [];
        [...message.toLowerCase()].map((m, indexMsg) => {
            if(alphabet.indexOf(m) >= 0) {
                
                let idxCharOfMsg = alphabet.indexOf(m) + 1
                let charOfKey = indexMsg - offset < key.length ? key[indexMsg - offset] : key[(indexMsg - offset) % key.length]
                charOfKey = charOfKey.toLowerCase()
                let idxCharOfKey = alphabet.indexOf(charOfKey) + 1
                let step = idxCharOfMsg + (idxCharOfKey - 1)
                step = step > alphabet.length ? (step % alphabet.length) == 0 ? alphabet.length : step % alphabet.length  : step 
                outputString.push(alphabet[step - 1])

            } else {
                outputString.push(m)
                offset++
            }
        })

        
        return (this.flag) ? outputString.join("").toUpperCase() : outputString.reverse().join("").toUpperCase()
    }

    decrypt(message, key) {
        if(message === undefined || key === undefined) {
            throw error
        }
        let offset = 0;
        let outputString = [];
        [...message.toLowerCase()].map((m, indexMsg) => {
            if(alphabet.indexOf(m) >= 0) {
                
                let idxCharOfMsg = alphabet.indexOf(m) + 1
                let charOfKey = indexMsg - offset < key.length ? key[indexMsg - offset] : key[(indexMsg - offset) % key.length]
                charOfKey = charOfKey.toLowerCase()
                let idxCharOfKey = alphabet.indexOf(charOfKey) + 1
                let step = idxCharOfMsg - idxCharOfKey < 0 ? alphabet.length - Math.abs(idxCharOfMsg - idxCharOfKey) : idxCharOfMsg - idxCharOfKey
                step = step > alphabet.length ? (step % alphabet.length) == 0 ? alphabet.length : step % alphabet.length  : step 
                outputString.push(alphabet[step])

            } else {
                outputString.push(m)
                offset++
            }
        })

    
        return (this.flag) ? outputString.join("").toUpperCase() : outputString.reverse().join("").toUpperCase()

    }
}

module.exports = VigenereCipheringMachine;
