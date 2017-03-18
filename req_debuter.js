// REQUETE QUI AFFICHE LE JEUX
"use strict";

require('remedial');

var trait = function (req, res, query) {

	var page;
	var fs = require('fs');
	var questions; 
	var trouve;
	var contenu_fichier;
	var marqueurs;
	var niveau;
	var no_q;
	var nbq;
	var aleatoire;
	var somme; 
	var membre;
	var statue;
	var partie;
	var reponse;
	var nom_fichier_partie;
	var cinquante;


	contenu_fichier  = fs.readFileSync('questions.json','utf-8');
	questions = JSON.parse(contenu_fichier);

	// CREATION FICHIER PARTIE

	niveau = 0;
	no_q = Math.floor(Math.random()*questions[niveau].length);
	somme = 0;


	partie = {};
	partie.somme = 0;
	partie.niveau = niveau;
	partie.no_q = no_q;
	partie.cinquante = true;
	partie.publique = true;
	partie.ami = true;
	partie.nom_ami = query.ami;

	nom_fichier_partie = query.pseudo + ".json";
	contenu_fichier = JSON.stringify(partie); 
	fs.writeFileSync(nom_fichier_partie, contenu_fichier, 'utf-8');

	// FABRIQUE PAGE ....



page = fs.readFileSync('modele_jeux.html', 'utf-8');
	// questions = JSON.parse(trouve);	


	marqueurs = {};
	marqueurs.ecrit = questions[niveau][no_q].q;
	marqueurs.reponsea = questions[niveau][no_q].reponses[0];
	marqueurs.reponseb = questions[niveau][no_q].reponses[1];
	marqueurs.reponsec = questions[niveau][no_q].reponses[2];
	marqueurs.reponsed = questions[niveau][no_q].reponses[3];	
	marqueurs.br =	questions[niveau][no_q].br;
	marqueurs.pseudo = query.pseudo;
	marqueurs.niveau = niveau;
	marqueurs.somme = somme;
	marqueurs.a = "";
	marqueurs.b = "";
	marqueurs.c = "";
	marqueurs.d = "";
	marqueurs.s = "";
	marqueurs.ami = query.ami;
	
	var i;

/*marqueurs.mr = '<meta http-equiv="refresh" content="5; url=req_debuter?nb=' + (Number(query.nb)+1) + '">';	
if(query.nb === 0){
	marqueurs.reponsea;
	console.log(query.nb);
	console.log(teste0);
}
else if(query.nb === 1){
	marqueurs.reponsea;
	marqueurs.reponseb;
	console.log(teste1);
}
*/

//marqueurs.reponsea = "";
//marqueurs.["reponse"+1] = "";
//	for(i=0; i< query.nb; i++) {
//			marqueurs.reponsea += "X ";
//				}

//.............MODULE PALIER DE LA FORTUNE ......................//

	var couleur = require("./module_couleur.js");
	var palier = partie.niveau;
	var recup = couleur(palier);
	marqueurs.c1 = recup[0];

//............FIN MODULE PALIER ..................................//	
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//--------------------------------------------------------------------------

module.exports = trait;

