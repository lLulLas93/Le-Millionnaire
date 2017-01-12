// REQUETE QUI AFFICHER LA PAGE RESULTAT
"use strict";
require('remedial');
var cboutton = require("./module_cboutton.js");
var fs = require("fs");

var trait = function (req, res, query) {

	var marqueurs;
	var page;
	var question;
	var niveau;
	var questions;
	var partie;
	var nom_fichier_parie;
	var contenu_fichier;
	var contenu;
	var nom_fichier_partie;
	var x;
	var br;
	var i;
	var somme;
	var vert;
	var rouge;
	var jaune;

	// APPEL DU COMPTE ET DE SON CONTENU

	nom_fichier_partie = query.pseudo + ".json";
	contenu_fichier = fs.readFileSync(nom_fichier_partie, "UTF-8");
	partie = JSON.parse(contenu_fichier);

	contenu = fs.readFileSync('questions.json','utf-8');
	questions = JSON.parse(contenu); 
	question = questions[partie.niveau][partie.no_q];

	x = question.br;

	// AFFICHAGE DU JEU


	marqueurs = {};
	
	marqueurs = cboutton(0, vert, 0);
	marqueurs.pseudo = query.pseudo;
	marqueurs.reponse = question.reponses[partie.choix -1];
	marqueurs.ecrit = question.q;
	marqueurs.reponsea = question.reponses[0];
	marqueurs.reponseb = question.reponses[1];
	marqueurs.reponsec = question.reponses[2];
	marqueurs.reponsed = question.reponses[3];
	marqueurs.br = question.reponses[x];
	marqueurs.niveau = partie.niveau;
	marqueurs.somme = partie.somme;
	partie.choix = partie.choix -1 ;
	

if(marqueurs.reponse === marqueurs.reponsea && partie.choix === question.br){
marqueurs.classe1 = "vert";
}else if(marqueurs.reponse === marqueurs.reponsea && partie.choix !== question.br) {
marqueurs.classe1 = "rouge"; 
}else{
marqueurs.classe1 = "";
}
if(marqueurs.reponse === marqueurs.reponseb && partie.choix === question.br){
marqueurs.classe2 = "vert";
}else if(marqueurs.reponse === marqueurs.reponseb && partie.choix !== question.br){
marqueurs.classe2 = "rouge";
}else{
marqueurs.classe2 = "";
} 
if(marqueurs.reponse === marqueurs.reponsec && partie.choix === question.br){
marqueurs.classe3 = "vert";
}else if(marqueurs.reponse === marqueurs.reponsec && partie.choix !== question.br){
marqueurs.classe3 = "rouge";
}else{
marqueurs.classe3 = "";
} 
if(marqueurs.reponse === marqueurs.reponsed && partie.choix === question.br){
marqueurs.classe4 = "vert";
}else if(marqueurs.reponse === marqueurs.reponsed && partie.choix !== question.br){
marqueurs.classe4 = "rouge";
}else{
marqueurs.classe4 = "";
}
if(marqueurs.reponsea !== marqueurs.br && marqueurs.reponseb !== marqueurs.br && marqueurs.reponsec !== marqueurs.br){
marqueurs.classe4 = "vert";
}else if(marqueurs.reponseb !== marqueurs.br && marqueurs.reponsec !== marqueurs.br && marqueurs.reponsed !== marqueurs.br){ marqueurs.classe1 = "vert";
}else if(marqueurs.reponsec !== marqueurs.br && marqueurs.reponsed !== marqueurs.br && marqueurs.reponsea !== marqueurs.br ){
marqueurs.classe2 = "vert";
}
else if(marqueurs.reponsed !== marqueurs.br && marqueurs.reponsea !== marqueurs.br && marqueurs.reponseb !== marqueurs.br){
marqueurs.classe3 = "vert";
}









	marqueurs.display1 = "disabled = 'disabled'";
	marqueurs.display2 = "disabled = 'disabled'";
	marqueurs.display3 = "disabled = 'disabled'";
	marqueurs.display4 = "disabled = 'disabled'";

	//.........................MODULE BOUTON COULEUR...........................//
		
		/*	var pc = partie.choix;
			var qb = question.br;
			var mr = marqueurs.reponse;
			var mra = marqueurs.reponsea;
			var mrb = marqueurs.reponseb;
			var mrc = marqueurs.reponsec;
			var mrd = marqueurs.reponsed;
			var mabr = marqueurs.br;
			var recup3 = cboutton(pc, qb, mr, mra, mrb, mrc, mrd, mabr);

			for(i=0; i < 4; i++){
			marqueurs["classe" + ( i + 1 )] = recup3[i];
			}
		 */
		//........................FIN MODULE BOUTON COULEUR.......................//

	 	if (partie.choix === question.br) {

			page = fs.readFileSync('modele_resultat.html', 'utf-8');
			marqueurs.good = "Bravo ! Bonne réponse,";
			marqueurs.commentaire = " continuez comme ça ";
			marqueurs.bouton1 = "<button>Continuer</button>"
				marqueurs.bouton2 = "";
			marqueurs.bouton3 = "";
			marqueurs.br = "";
			marqueurs.pseudo = query.pseudo;
		}else {
			page = fs.readFileSync('modele_resultat.html', 'utf-8');
			marqueurs.good = "Dommage! Mauvaise réponse,";
			marqueurs.commentaire = "essayez encore";
			marqueurs.bouton3 = "<button class='btn btn-primary  btn-sm'>Partir avec vos gains</button>"
				marqueurs.bouton1 = "";
				marqueurs.br = "La bonne réponse est : "+marqueurs.br;
			marqueurs.bouton2= "";
			marqueurs.pseudo = query.pseudo;
		}

		//.............NIVEAU...............................//

		i = partie.niveau;
		somme = [];

		somme[0] = 100;
		somme[1] = 200;
		somme[2] = 300;
		somme[3] = 500;
		somme[4] = 1000;
		somme[5] = 2000;
		somme[6] = 4000;
		somme[7] = 8000;
		somme[8] = 16000;
		somme[9] = 32000;
		somme[10] = 64000;
		somme[11] = 125000;
		somme[12] = 250000;
		somme[13] = 500000;
		somme[14] = 1000000;

		partie.somme = somme[i];
		partie.niveau++;


		//.....................MODULE COULEUR PALIER DE LA FORTUNE............/	

		var pc = partie.choix;
		var qb = question.br;
		var couleur2 = require("./module_couleur_3.js");
		var palier2 = partie.niveau;
		var recup2 = couleur2(palier2, pc, qb);
		var i;

		for(i = 0; i < 15; i++){
			marqueurs["c" + (i + 1)] = recup2[i];
		}
		//..........................FIN MODULE PALIER......................../	


		page = page.supplant(marqueurs);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(page);
		res.end();
	};

	//--------------------------------------------------------------------------

	module.exports = trait;



