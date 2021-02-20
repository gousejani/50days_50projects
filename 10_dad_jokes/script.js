const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('btn');

generateJoke();

function generateJoke(){
    const config = {
        headers:{
            'Accept':'application/json'
        }
    };
    fetch('https://icanhazdadjoke.com/',config)
    .then(response=>response.json())
    .then(data => jokeEl.innerText = data.joke)
}

jokeBtn.addEventListener('click',generateJoke)