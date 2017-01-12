// REQUETE QUI AFFICHER LA PAGE ACCUEIL MEMBRE

"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

    var marqueurs;
    var pseudo;
    var password;
    var page;
    var membre;
    var contenu_fichier;
    var listeMembres;
    var i;
    var trouve;

    // ON LIT LES COMPTES EXISTANTS

    contenu_fichier = fs.readFileSync("membres.json", 'utf-8');
    listeMembres = JSON.parse(contenu_fichier);

    // ON VERIFIE QUE LE PSEUDO/PASSWORD EXISTE

        // SI IDENTIFICATION OK, ON ENVOIE PAGE ACCUEIL MEMBRE

        page = fs.readFileSync('modele_accueil_membre.html', 'UTF-8');

        marqueurs = {};
        marqueurs.pseudo = query.pseudo;
        page = page.supplant(marqueurs);
    

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(page);
    res.end();
};

//---------------------------------------------------------------------------

module.exports = trait;
                            




