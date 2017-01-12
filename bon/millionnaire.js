
"use strict";

var http = require("http");
var url = require("url");
var querystring = require("querystring");

//-------------------------------------------------------------------------
// DECLARATION DES DIFFERENTS MODULES CORRESPONDANT A CHAQUE ACTION
//-------------------------------------------------------------------------

var req_commencer = require("./req_commencer.js");
var req_afficher_formulaire_inscription = require("./req_afficher_formulaire_inscription.js");
var req_inscrire = require("./req_inscrire.js");
var req_identifier = require("./req_identifier.js");

var req_static = require("./req_static.js");
var req_erreur = require("./req_erreur.js");
// Req correspodant au Jeux

var req_identifier = require("./req_identifier.js");  // ACCUEIL ---> ACCUEIL MEMBRE
var req_debuter = require("./req_debuter.js");        // ACCUEIL MEMBRE --> JEUX
var req_abandonner = require("./req_abandonner.js");  // JEUX ---> FIN
var req_aide_cinquante = require("./req_aide_cinquante.js");
var req_aide_publique = require("./req_aide_publique.js");
var req_aide_ami = require("./req_aide_ami.js");
var req_dernier_mot = require("./req_dernier_mot.js");
var req_choisir = require("./req_choisir.js");        // JEUX ---> SUSPENSE
var req_analyser = require("./req_analyser.js");      // SUSPENSE ---> RESULTAT
var req_continuer = require("./req_continuer.js");    // RESULTAT ---> JEUX
var req_champion = require("./req_champion.js");
var req_fin = require("./req_fin.js");                // RESULTAT ---> FIN
var req_rejouer = require("./req_rejouer.js");        // FIN ---> ACCUEIL MEMBRE
var req_deconnecter = require("./req_deconnecter");   // FIN ---> ACCUEIL
var req_static = require("./req_static.js");
var req_erreur = require("./req_erreur.js");



//-------------------------------------------------------------------------
// FONCTION DE CALLBACK APPELLEE POUR CHAQUE REQUETE
//-------------------------------------------------------------------------

var traite_requete = function (req, res) {

	var ressource;
	var requete;
	var pathname;;
	var query;

	console.log("URL reçue : " + req.url);
	requete = url.parse(req.url, true);
	pathname = requete.pathname;
	query = requete.query;

	// ROUTEUR

	try {
		switch (pathname) {
			case '/':
			case '/req_commencer':
				req_commencer(req, res, query);
				break;
			case '/req_afficher_formulaire_inscription':
				req_afficher_formulaire_inscription(req, res, query);
				break;
			case '/req_inscrire':
				req_inscrire(req, res, query);
				break;
			case '/req_identifier':
				req_identifier(req, res, query);
				break;
			case '/req_debuter':
				req_debuter(req, res, query);
				break
			case '/req_abandonner':
				req_abandonner(req, res, query);
				break
			case '/req_aides':
				req_aides(req, res, query);
				break
			case '/req_aide_cinquante':
				req_aide_cinquante(req, res, query);
				break
			case '/req_aide_publique':
				req_aide_publique(req, res, query);
				break
			case '/req_aide_ami':
				req_aide_ami(req, res, query);
				break
			case '/req_dernier_mot':
				req_dernier_mot(req, res, query);
				break
			case '/req_choisir':
				req_choisir(req, res, query);
				break
			case '/req_analyser':
				req_analyser(req, res, query);
				break
			case '/req_continuer':
				req_continuer(req, res, query);
				break
			case '/req_champion':
				req_champion(req, res, query);
				break
			case '/req_fin':
				req_fin(req, res, query);
				break
			case '/req_rejouer':
				req_rejouer(req, res, query);
				break
			case '/req_deconnecter':
				req_deconnecter(req, res, query);
				break
			default:
					req_static(req, res, pathname);
					break;
		}
	} catch (e) {
		console.log('Erreur : ' + e.stack);
		console.log('Erreur : ' + e.message);
		//console.trace();
		req_erreur(req, res, query);
	}
};

//-------------------------------------------------------------------------
// CREATION ET LANCEMENT DU SERVEUR
//-------------------------------------------------------------------------

var mon_serveur = http.createServer(traite_requete);
var port = 5000;
console.log("Serveur en ecoute sur port " + port);
mon_serveur.listen(port);
