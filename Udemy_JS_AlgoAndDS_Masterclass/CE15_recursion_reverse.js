// Write a recursive function called reverse which accepts a string and returns a new string in reverse. 

// My solution:
function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 1) return str
    return str[str.length - 1] + reverse(str.slice(0, -1))
}

// Colt Steele's Solution:
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

reverse('awesome') // 'emosewa'
