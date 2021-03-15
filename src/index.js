module.exports = function toReadable (number) {
  
    let words = {
        0 : "zero", 
        1 : "one", 
        2 : "two", 
        3 : "three", 
        4 : "four", 
        5 : "five", 
        6 : "six", 
        7 : "seven", 
        8 :  "eight", 
        9 :  "nine", 
        10 : "ten",
        11 : "eleven",
        12 : "twelve", 
        13 : "thirteen",
        14 : "fourteen", 
        15 : "fifteen", 
        16 : "sixteen", 
        17 : "seventeen", 
        18 : "eighteen", 
        19 : "nineteen",
        20 : "twenty", 
        30 : "thirty", 
        40 : "forty",  
        50 : "fifty", 
        60 : "sixty", 
        70 : "seventy", 
        80 : "eighty", 
        90 : "ninety", 
        100 : "hundred"
    }
    let hundred = words[Math.floor(number / 100)];
    let dozens = words[(Math.floor(number / 10)) * 10 - (Math.floor(number / 100) * 100)];
    
    switch (true) {
        case (number < 20) : 
        return words[number];
      
        case ((number > 19) && (number < 100)) :
            if (number % 10 === 0) {
            return words[number]
            } else {
            return words[(Math.floor(number / 10)) * 10] + " " + words[number % 10]
            }

        case (number > 99) :
        if (number % 100 === 0) {
            return words[number / 100] + " hundred"
          
        } else if ((number % 10 === 0) && (number !== 100)) {
            return  hundred + " hundred " +  dozens 
            
        } else if (number.toString().slice(-2) < 20 ) { 
            return ( hundred + " hundred " + words[number - Math.floor(number / 100)*100])
        }
        
        case (number > 120) :  
        if (number % 10 !== 0) {
            return ( hundred + " hundred " + dozens + " " + words[number.toString().slice(-1)])
        }




    } 
}
