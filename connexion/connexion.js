let Utilisateur = [
    { pseudo: "Michel", password: "Banane" },
    { pseudo: "Martine", password: "Jambon" },
    { pseudo: "Mariette", password: "Orange" },
    { pseudo: "Kiki", password: "crevette" },
    { pseudo: "root", password: "root" }
]

const connexion = (event) => {
    event.preventDefault()
    for (users of Utilisateur) {
        console.log(users)
        if (users.pseudo == event.target[0].value && users.password == event.target[1].value) {
            if (confirm("Felicitations, vous êtes maintenant connecter")) {
                window.location.href = "../accueil/accueil.html";
            }

        }
    }
}

document.querySelector("#MonForm").addEventListener('submit', connexion)
