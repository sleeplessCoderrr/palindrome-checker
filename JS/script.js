function checkPalindrome(text){
    const result = document.querySelector("#container .palindrome #result");
    const reversed = text.split("").reverse().join("");
    if(text === reversed){
        result.innerHTML = `${text} is a palindrome`;
    }else{
        result.innerHTML = `${text} is not a palindrome`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#input");
    const button = document.querySelector("#button");
    
    button.addEventListener("click", function() {
        if(input.value.length === 0){
            alert("Please input a value");
        } else {
            checkPalindrome(input.value);
        }
    });
});

