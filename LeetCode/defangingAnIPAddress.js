// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
 
// Constraints:

// The given address is a valid IPv4 address.

// Related Topics: String

// Runtime: 60 ms / Memory: 34 MB

defangIPaddr = address => {
    let strng = ''
    for (let i in address) {
      address[i] === '.' ? strng += '[.]' : strng += address[i]
    }
    return strng
}

// Runtime: 60 ms / Memory: 33.3 MB

defangIPaddr = address => {
    return address.split('.').join('[.]')
}

// Ruby / Runtime: 28 ms / Memory: 9.3 MB

// def defang_i_paddr(address)
//     address.split(".").join("[.]")
// end