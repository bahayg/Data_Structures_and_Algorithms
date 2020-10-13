function timeConversion(s) {
    /*
     * Write your code here.
     */
   let AMPM = s.slice(-2)
   let newStr = s.slice(0, -2).split(':')
   if (AMPM === 'AM' && newStr[0] === '12') newStr[0] = '00'
   if (AMPM === 'PM' && newStr[0] < 12) newStr[0] = Number(newStr[0]) + 12
   return newStr.join(':')
}
