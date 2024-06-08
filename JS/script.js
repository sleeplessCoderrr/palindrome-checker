function checkPalindrome(text){
    const result = document.querySelector("#container .palindrome #result");
    result.innerHTML = "";

    let front = "";
    for (let char of text) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
            front += char;
        }
    }
    const reversed = front.split("").reverse().join("");
    const message = document.createElement("p");

    if(front.toLowerCase() === reversed.toLowerCase()){
        message.textContent = `${text} is a palindrome`;
    }else{
        message.textContent = `${text} is not a palindrome`;
    }
    result.appendChild(message);
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#text-input");
    const button = document.querySelector("#check-btn");
    
    button.addEventListener("click", function() {
        if(input.value.length === 0){
            alert("Please input a value");
        } else {
            checkPalindrome(input.value);
            input.value = "";
        }
    });
});
