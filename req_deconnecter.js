// REQUETE QUI AFFICHE LA PAGE ACCUEIL 
"use strict";


var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

var page;


 page = fs.readFileSync('modele_accueil.html', 'utf-8');


    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(page);
    res.end();
};

//---------------------------------------------------------------------------

module.exports = trait;





