"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var pseudo;
	var password;
	var page;
	var nouveauMembre;
	var contenu_fichier;
	var listeMembres;
	var i;
	var trouve;
	var q;
	var m;
	var verif_q_s;
	var verif_m_s;
	var verif_q_nb;
	var verif_m_nb;

	// ON LIT LES COMPTES EXISTANTS

	marqueurs = {};
	contenu_fichier = fs.readFileSync("membres.json", 'utf-8');    
	listeMembres = JSON.parse(contenu_fichier);

	// ON VERIFIE QUE LE COMPTE N'EXISTE PAS DEJA

	trouve = false;
	i = 0;
	while(i<listeMembres.length && trouve === false) {
		if(listeMembres[i].pseudo === query.pseudo) {
			trouve = true;
		}
		i++;
	}
	q = query.pseudo;
	m = query.password;

	//Appel de la fonction de vérification de caractère spéciaux

	var caractere_speciaux = require("./fonction.js");

	verif_q_s = caractere_speciaux(q); 
	verif_m_s = caractere_speciaux(m);
	console.log("Permission caractère spéciaux dans pseudo : "+verif_q_s);
	console.log("Permission caratère spéciaux dans mot de passe: "+verif_m_s);
	if (verif_q_s === false || verif_m_s === false) { 
		trouve = true;

	}	 
	//Appel de la fonction de vérification de nombre de lettre 

	var nb_caractere = require("./nb_caractere.js");

	verif_q_nb = nb_caractere(q);
	verif_m_nb = nb_caractere(m);
	console.log("Acceptation nb_pseudo : "+verif_q_nb);
	console.log("Acceptation nb_mdp : "+verif_m_nb);
	if (verif_q_nb === false || verif_m_nb === false) {
		trouve = true;

	}
	console.log("Nb_pseudo : "+q.length+" Nb_mdp : "+m.length);

	// SI PAS TROUVE, ON AJOUTE LE NOUVEAU COMPTE DANS LA LISTE DES COMPTES

	if(trouve === false) {
		nouveauMembre = {};
		nouveauMembre.pseudo = query.pseudo;
		nouveauMembre.password = query.password;
		listeMembres[listeMembres.length] = nouveauMembre;

		contenu_fichier = JSON.stringify(listeMembres);

		fs.writeFileSync("membres.json", contenu_fichier, 'utf-8');
	}


	// ON RENVOIT UNE PAGE HTML 

	if(trouve === true && verif_q_s === true || verif_m_s === true) {
		// SI CREATION PAS OK, ON REAFFICHE PAGE FORMULAIRE AVEC ERREUR
		page = fs.readFileSync('modele_formulaire_inscription.html', 'utf-8');

		marqueurs.erreur = "ERREUR : ce compte existe déjà";
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);


	}if (verif_q_s === false || verif_m_s === false) {

		page = fs.readFileSync('modele_formulaire_inscription.html', 'utf-8');
		marqueurs.erreur = " Ces caractères spéciaux n'est pas accepter";
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);

	}else if (verif_q_nb === false || verif_m_nb === false){
		page = fs.readFileSync('modele_formulaire_inscription.html', 'utf-8');
		marqueurs.erreur = "Votre mot de passe ou pseudo sont trop long";
		marqueurs.pseudo = query.pseudo;
		page = page.supplant(marqueurs);

	}else if (trouve === false || verif_q_s === true || verif_m_s === true || verif_q_nb === true || verif_q_nb === true){
		// SI CREATION OK, ON ENVOIE PAGE DE CONFIRMATION

		page = fs.readFileSync('modele_confirmation_inscription.html', 'UTF-8');

		marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		marqueurs.password = query.password;
		page = page.supplant(marqueurs);
	} 

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//---------------------------------------------------------------------------

module.exports = trait;
