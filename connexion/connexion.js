let Utilisateur = {
    
}

const send = (event) => {
    event.preventDefault()
    Utilisateur[event.target[0].name] = event.target[0].value
    Utilisateur[event.target[1].name] = event.target[1].value
    console.log(Utilisateur)
}

document.querySelector('#MonForm').addEventListener
('submit', send)