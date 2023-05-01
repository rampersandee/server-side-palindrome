// GLOBALS
let userInput = document.querySelector('input')
let results = document.querySelector('span')
let userButton = document.querySelector('button')

// FUNCTIONS
userButton.addEventListener('click', userCheck)

function userCheck()
{
    fetch(`api/${userInput.value}`) // this is the URL; this is also the querystring that is used to pass the URL into the fetch request
    .then (res => res.json())
    .then (palindromeName => {
        console.log(palindromeName)
        if (palindromeName.status == 'palindrome')
        {
            results.innerText = 'Yes, ' + userInput.value + ' is a palindrome.  Yay!'
        }
        else
        {
            results.innerText = 'No, ' + userInput.value + ' is not a palindrome.'
        }
    })
    .catch(function() {
        console.log("error");
    });
}
