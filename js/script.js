window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises")
        // læs produktliste
    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe)
}

function visProduktListe(listen) {
    console.table(listen);
    listen.forEach(visProdukt);
}

function visProdukt(produkt) {
    console.log(produkt);
    // klon produkt_template
    var klon = document.querySelector("#produkt_template").content.cloneNode(true);

    //indsæt data i klon

    //append klon til .produkt-lise
    document.querySelector(".produkt-liste").appendChild(klon);
}
