let trouvaille = [ 
    {name: "Michel",lastname: "Vedette",contact: "Michel@Vedette.fr"},
    {name: "Martine",lastname: "Vedette",contact: "Michel@Vedette.fr"},
    {name: "Mariette",lastname: "Vedette",contact: "Michel@Vedette.fr"},
    {name: "Kiki",lastname: "Vedette",contact: "Michel@Vedette.fr"},
    {name: "admin",lastname: "admin",contact: "admin@admin"}
]


const generateTableHead = (table, data) => {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
}

const generateTable = (table, data) => {

    for (let element of data) {
        if (element ="admin") {
            continue
        }
        else { 
            let row = table.insertRow()
            for (key in element) {
            let cell = row.insertCell()
            let text = document.createTextNode(element[key])
            cell.appendChild(text);
            }
        }
    }
}


  let table = document.querySelector("table")
  let tbody = document.querySelector("tbody")
  let data = Object.keys(trouvaille[0]);
  generateTableHead(table, data);
  generateTable(tbody, trouvaille);