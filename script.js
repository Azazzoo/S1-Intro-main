compteur = 4;
function ajouter(){
    let item = document.getElementById("desc").value;
    // Creer une balise p
    nouveauP = document.createElement("p")
    // Ecrire dans le paragraphe
    nouveauP.innerText = item + (" :");
    // Ajouter le paragraphe a la liste
    document.getElementById("maListe").append(nouveauP);

    // alert("L'item est bien ajouté") // Fait un Pop-up
    let prix = document.getElementById("valeur").value;
    nouveauS = document.createElement("span")
    nouveauS.innerText = prix + ("$");
    nouveauP.append(nouveauS) // Mettre a la fin du p

    // mettre a jour le total
    let AncienPrix = document.getElementById("total").innerText;
    let nouveauPrix = parseInt(AncienPrix) + parseInt(prix);
    document.getElementById("total").innerText = nouveauPrix + ("$");

    // Creer des nouveaux input hidden dans le formulaire pour envoyer par courriel
    nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("hidden", true);
    nouveauInput.setAttribute("name", name + compteur);
    nouveauInput.setAttribute("value",item);
    document.forms[0].append(nouveauInput);
    compteur++;


}

function ajouterEmail(){
    let email = document.getElementById("email").value
    document.forms[0].action = "mailto:"+email;
}

function effacer(){
    document[0].action = "";
}



