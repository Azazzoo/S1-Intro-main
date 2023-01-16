function ajouter(){
    let item = document.getElementById("desc").value;
    // Creer une balise p
    nouveauP = document.createElement("p")
    // Ecrire dans le paragraphe
    nouveauP.innerText = item;
    // Ajouter le paragraphe a la liste
    document.getElementById("maListe").append(nouveauP);

    // alert("L'item est bien ajouté") // Fait un Pop-up
    let prix = document.getElementById("valeur").value;
    nouveauS = document.createElement("span")
    nouveauS.innerText =prix + ("$");
    nouveauP.append(nouveauS)


}


console.log("Bonjour");


