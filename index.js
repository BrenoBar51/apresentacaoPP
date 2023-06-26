const btn = document.getElementById('btn')
const teste = document.getElementById('teste')

async function kanyeWest(){
    const response = await fetch('https://api.kanye.rest')
    const data = await response.json();
    console.log(data.quote)
    teste.innerHTML = data.quote
}

btn.addEventListener('click', kanyeWest)

