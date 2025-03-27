let titulo = document.querySelector('h1')

let ultimoParagrafo = document.querySelector('#p')

//addEventListener: adicionar ouvinte/chamador/ o tipo do evento
titulo.addEventListener('mouseover', () => { 
    ultimoParagrafo.innerHTML = '<button>Mude o título</button>' 
})

ultimoParagrafo.addEventListener('click', () => {
    titulo.style.color = 'white'
    titulo.style.trace = '4px black'
    titulo.style.textAlign = 'center'
    titulo.style.fontFamily = 'sans-serif'
    titulo.style.border = '5px solid blue'
    //titulo.style.borderRadius = '20px'
    titulo.style.backgroundImage = 'url(tech.jpg)'
    titulo.style.padding = '30px'

})
