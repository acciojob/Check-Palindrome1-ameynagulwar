// complete the given function

function palindrome(str){
    const trimmed = str.replace(/[^0-9a-z]/gi, '').toLowerCase()
  return trimmed.split('').reverse().join('') === trimmed;
}
module.exports = palindrome
