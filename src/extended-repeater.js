module.exports = function repeater(str, option) {
    const { separator, additionSeparator, additionRepeatTimes, repeatTimes } = { separator: '+', additionSeparator: '|', additionRepeatTimes: 1, repeatTimes: 1}
    const userOptions = {separator, additionSeparator, additionRepeatTimes, repeatTimes, ...option }
    let suffix = '';
    Object.keys(userOptions).sort().map(option => {
      if(option == 'addition') {
        suffix = Array.from({length: userOptions.additionRepeatTimes === undefined ? 1 : userOptions.additionRepeatTimes }, (n, k) => k).map(el => new String(userOptions.addition).toString()).join(userOptions.additionSeparator)
      }
    })
    
    str = Array.from({length: userOptions.repeatTimes === undefined ? 1 : userOptions.repeatTimes }, (n, k) => k).map(el => new String(str).toString()  + suffix).join(userOptions.separator)
  
    return str
  };
  