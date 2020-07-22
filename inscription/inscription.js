let Utilisateur = {
    
}

const send = (event) => {
    event.preventDefault()
    console.log(event)
    for (let i = 0 ; i <= 5 ; i++){
    Utilisateur[event.target[i].name] = event.target[i].value
    }
    console.log(Utilisateur)
}

document.querySelector('#MonForm').addEventListener
('submit', send)




