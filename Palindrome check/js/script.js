const result = document.getElementById("result");
const palindrome = {
    text: "",
    is: false
};


function resultPalindromeIs(string, reversString) {
   string === reversString ? palindrome.is = true : palindrome.is = false;
};

function setResult() {
    if (palindrome.is) {
        result.style.backgroundColor = "rgb(3, 170, 3)";
        result.innerText = `${palindrome.text} is a palindrome`;
        result.classList.add("right"); 
    } else {
        result.style.backgroundColor = "rgb(8, 8, 150)";
        result.innerText = `${palindrome.text} is not a palindrome`;
        result.classList.add("wrong");
    }
};


document.getElementById("check-btn").addEventListener("click", () => {
    const string = document.getElementById("text-input").value;

    if (string === "") return alert("Please input a value");

    const newString = [...string.matchAll(/[a-z+0-9+а-я]/ig)].join("").toLocaleLowerCase();
    const reversString = newString.split('').reverse().join('');
    palindrome.text = string;

    resultPalindromeIs(newString, reversString);

    if (result.classList.contains("right") || result.classList.contains("wrong")) {
        result.classList.add("vanish"); 
        result.classList.remove("right", "wrong");
    }   
    else {
        setResult();
    }
});


result.addEventListener('animationend', ()=> {
    result.classList.remove("vanish");
    setResult();
});