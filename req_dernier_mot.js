// REQUETE QUI AFFICHE LA PAGE SUSPENSE
"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var page;
	var questions;
	var question;
	var marqueurs;
	var contenu_fichier;
	var nom_fichier_partie;
	var partie;
	var niveau;
	var somme;
	var i;
	var random1;
	var random2;

	// MEMORISE REPONSE

	nom_fichier_partie = query.pseudo + ".json";
	contenu_fichier = fs.readFileSync(nom_fichier_partie, "UTF-8");
	partie = JSON.parse(contenu_fichier);

	partie.choix = query.choix;

	contenu_fichier = JSON.stringify(partie);
	fs.writeFileSync(nom_fichier_partie, contenu_fichier, 'utf-8');

	// RECHERCHE LA QUESTION

	contenu_fichier = fs.readFileSync("questions.json", "UTF-8");
	questions = JSON.parse(contenu_fichier);

	question = questions[partie.niveau][partie.no_q];

	// ... PAGE ....

	somme = 0;

	page = fs.readFileSync('modele_jeux.html', 'utf-8');

	marqueurs = {};
	marqueurs.pseudo = query.pseudo;
	marqueurs.somme = partie.somme;
	marqueurs.niveau = partie.niveau;
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
	marqueurs. ami= partie.nom_ami;
	marqueurs.reponse = question.reponses[partie.choix - 1];

	//...........................50 / 50 ......................................//

	if (partie.cinquante == false) {
		marqueurs.cinquante = 'disabled= "disabled"';
		marqueurs.cinquante = "";

		do{
			random1 = Math.floor(Math.random() *4);
			random2 = Math.floor(Math.random() *4);
		}while(random1 === question.br || random2 === question.br || random1 === random2);
		console.log(question.br);
		console.log(random1);
		console.log(random2);

		// questions = JSON.parse(trouve);

		if(random1 === 0 || random2 === 0) {
			marqueurs.display1 = 'disabled="disabled"';
		}else{
			marqueurs.display1="";

		}
		if(random1 ===1 || random2 === 1 ) { 
			marqueurs.display2 = 'disabled="disabled"';
		}else{
			marqueurs.display2="";
		}
		if(random1 === 2 || random2 === 2 ) { 
			marqueurs.display3= 'disabled="disabled"';
		}else{
			marqueurs.display3="";
		}
		if(random1 === 3 || random2 === 3 ) { 
			marqueurs.display4='disabled="disabled"';
		}else{
			marqueurs.display4="";

		}
	} 
	if (partie.publique === false) {
		marqueurs.publique = 'disabled="disabled"';
	}
	if (partie.ami === false) {
		marqueurs.ami = 'disabled="disabled"';
	}
	//......................MODULE COULEUR PALIER DE LA FORTUNE............................//
	var couleur2 = require("./module_couleur_2.js");
	var palier2 = partie.niveau;
	var recup2 = couleur2(palier2, palier3);
	var palier3 = partie.br;
	for(i = 0; i < 15; i++){
		marqueurs["c" + (i + 1)] = recup2[i];
	}

	//..........................................FIN MODULE PALIER............................................//


	page = page.supplant(marqueurs);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//--------------------------------------------------------------------------

module.exports = trait;
