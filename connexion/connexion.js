let Utilisateur = [
    { id: 1, pseudo: "Michel", password: "Banane" },
    { id: 2, pseudo: "Martine", password: "Jambon" },
    { id: 3, pseudo: "Mariette", password: "Orange" },
    { id: 4, pseudo: "Kiki", password: "crevette" }
]

const connexion = (event) => {
    event.preventDefault()
    for (users of Utilisateur) {
        if (event.target[0].value == "root" && event.target[1].value == "root") {
            window.location.href = "../admin/admin.html";
        }
        if (users.pseudo == event.target[0].value && users.password == event.target[1].value) {
            if (confirm("Felicitations, vous êtes maintenant connecter")) {
                window.location.href = "../accueil.html";
            }

        }
    }
}

document.querySelector("#MonForm").addEventListener('submit', connexion)

