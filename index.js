const btn = document.getElementById('btn')
const teste = document.getElementById('teste')
const btn2 = document.getElementById('btn2')
const teste2 = document.getElementById('teste2')

async function kanyeWest(){
    const response = await fetch('https://api.kanye.rest')
    const data = await response.json();
    console.log(data.quote)
    teste.innerHTML = data.quote
}

function chuckNorris(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then()
    .then()
}

btn.addEventListener('click', kanyeWest)
btn2.addEventListener('click', chuckNorris)