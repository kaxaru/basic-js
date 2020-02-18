const flag = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']

module.exports = function transform(arr) {  
    let newArray = [] 
    if(!Array.isArray(arr)){
        throw error
    }
    

    for(let idx=0; idx < arr.length; idx++) {
        if(flag.filter(el => el == arr[idx]).length > 0) {
            switch(arr[idx]) {
                case '--discard-next':
                    if(idx + 2 < arr.length)
                        idx++
                break;
                case '--discard-prev':
                    newArray.pop()
                break;
                case '--double-next':
                    if(idx + 1 < arr.length)
                        newArray.push(arr[idx + 1])          
                break;
                case '--double-prev':
                    if(idx - 1 >= 0){
                       newArray.push(arr[idx - 1])
                    }
                break;
                default:
                  
            }
        } else {
            newArray.push(arr[idx])
        }
    }

    return newArray
};
