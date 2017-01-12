"use strict"                            

var x;
var y;
var chaine;
var fs = require('fs');
var truc;
var ajout;

x = {};
y = [];

truc = "az";
ajout = truc+".json";

y[0] = "11";
y[1] = "10";
y[3] = "reponse D";

x.nom = "jim";
x.somme = "0";
x.date = y;

chaine = JSON.stringify(x);

fs.writeFileSync(ajout, chaine, 'utf-8');


console.log(chaine);
