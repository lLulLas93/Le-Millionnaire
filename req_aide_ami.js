"use strict";

var fs = require('fs');
require('remedial');

var trait = function (req, res, query) {
	var page;
	var marqueurs;
	var nom_fichier_partie;
	var contenu_fichier;
	var partie;
	var question;
	var questions;
	var x;
	var i;

	nom_fichier_partie = query.pseudo + ".json";
	contenu_fichier = fs.readFileSync(nom_fichier_partie, "UTF-8");
	partie = JSON.parse(contenu_fichier);

	contenu_fichier = fs.readFileSync("questions.json", "UTF-8");
	questions = JSON.parse (contenu_fichier);

	question = questions[partie.niveau][partie.no_q];
	x = question.br;

	marqueurs = {};
	if (partie.ami = true) {
		if(partie.cinquante === false){
			marqueurs.cinquante = 'disabled = "disabled"';
		}
		if(partie.publique === false){
			marqueurs.publique = 'disabled = "disabled"';
		}
		if(partie.ami === false){
			marqueurs.ami = 'disabled = "disabled"';
		}
		var y;
		var t;
		y = Math.floor(Math.random()*4);

		marqueurs.ami = 'disabled="disabled"';
		marqueurs.ecrit = question.q;
		marqueurs.reponsea = question.reponses[0];
		marqueurs.reponseb = question.reponses[1];
		marqueurs.reponsec = question.reponses[2];
		marqueurs.reponsed = question.reponses[3];
		marqueurs.a = ".";
		marqueurs.b = ".";
		marqueurs.c = ".";
		marqueurs.d = ".";
		marqueurs.s  = " je pense que c'est " + question.reponses[y];
		marqueurs.pseudo = query.pseudo;
		marqueurs.br = question.reponses[x];
		marqueurs.somme = partie.somme++;
		marqueurs.niveau = partie.niveau;
		partie.ami = false;
		contenu_fichier = JSON.stringify(partie);
		fs.writeFileSync(nom_fichier_partie, contenu_fichier, 'utf-8');

	} else {
		marqueurs = {};
		marqueurs.ami = 'disabled="disabled"';
		marqueurs.ecrit = question.q;
		marqueurs.reponsea = question.reponses[0];
		marqueurs.reponseb = question.reponses[1];
		marqueurs.reponsec = question.reponses[2];
		marqueurs.reponsed = question.reponses[3];
		marqueurs.a = "";
		marqueurs.b = "";
		marqueurs.c = "";
		marqueurs.d = "";
		marqueurs.s = "";
		marqueurs.pseudo = query.pseudo;
		marqueurs.br = question.reponses[x];
		marqueurs.somme = partie.somme++;
		marqueurs.niveau = partie.niveau;

	}   
	page = fs.readFileSync('modele_jeux.html', 'utf-8');
	page = page.supplant(marqueurs);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

module.exports = trait;
