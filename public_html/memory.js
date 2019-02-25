//
var vettore = ["albero", "barca", "cane", "dito", "emporio", "fabbro", "giraffa", "hotel", "istante", "lista", "mare", "notte", "ombra", "parola", "quadro"]

//MEMORIZZA QUANTE VOLTE LA CARTA E STATA SCELTA
var vettScelto = []

vettore.forEach((elm, k) => {
    vettScelto[k] = 0
})

//IL MAZZO MESCOLATO
vettoreGioco = []

var numCarte = 8;
var quanteVoltePrendoCarte = 2;

for (var j = 0; j < numCarte * quanteVoltePrendoCarte; j++) {
    for (var inserito = false; inserito == false; ) {
        var indice = parseInt(Math.random() * numCarte);
        if (vettScelto[indice] < quanteVoltePrendoCarte) {
            vettScelto[indice]++;
            vettoreGioco.push(vettore[indice]);
            inserito = true;
        }
    }
}


var stato = 0
var cartaGirata = null

for (var j = 0; j < vettoreGioco.length; j++) {
    let myDiv = document.createElement("DIV")
    myDiv.classList.add("elementi")
    myDiv.classList.add("sfondo")
    myDiv.innerHTML = vettoreGioco[j]

    /*
     myDiv.onmouseover = function () {
     myDiv.style.backgroundColor = "yellow"
     let testo = this.innerHTML
     //cerco quello uguale
     document.querySelectorAll(".elementi").forEach(function (elm, k) {
     if (elm.innerHTML == testo) {
     elm.style.background = "yellow"
     } else {
     elm.style.backgroundColor = "unset"
     }
     })
     }
     myDiv.onmouseout = function () {
     document.querySelectorAll(".elementi").forEach(function (elm, k) {
     elm.style.backgroundColor = "unset"
     })
     }
     */

    myDiv.onclick = function () {

        this.style.background = "yellow"
        this.style.color = "blue"
        
        
        if (stato == 0) {
            //primo click
            stato = 1
            cartaGirata = this
        } else {
            
            let secondaCarta = this
            
            console.log("sec click:", cartaGirata.innerHTML, this.innerHTML)
            if (cartaGirata.innerHTML != this.innerHTML) {
                blocca()
                setTimeout(function(){
                    annullaBlocca()
                    cartaGirata.style.color = "transparent"
                    cartaGirata.style.background = ""
                    secondaCarta.style.color = "transparent"
                    secondaCarta.style.background = ""
                }, 3000)
            } else {
                cartaGirata.onclick = null
                secondaCarta.onclick = null
            }
            stato = 0
        }

    }

    document.querySelector("#container").appendChild(myDiv)
}

function blocca() {
    document.querySelector("#bloccoSchermo").style.display = "block";
}

function annullaBlocca() {
    document.querySelector("#bloccoSchermo").style.display = "none";
}

annullaBlocca()
