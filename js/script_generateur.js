// -- Constante contenant les lettres (maj / min), symboles et chiffres -- //
const motDePasse =  document.getElementById('nouveauPassword');
const tableauMinuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
const tableauMaj = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
const tableauNumero = [1,2,3,4,5,6,7,8,9,0];
const tableauSymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];

// -- Fonction qui génere le mot de passe -- //
function generateur(){
	
    // Verif des checkbox activé
    const tableauxRegroupé = [].concat(
        min.checked ? tableauMinuscule : [],    
        maj.checked ? tableauMaj : [],
        chiffre.checked ? tableauNumero : [],
        symbole.checked ? tableauSymbole : []);
	
    var passwordLength = parseInt(document.getElementById('taille').value);
    var mdp = ''; 
    
    // -- verif nombre de caractère minimum OK -- //
    if (tableauxRegroupé.length<1 && passwordLength< 12){

        alert('Tu dois séléctionner au moins un critère');
	    alert('Le minimum est de 10 caractères');
	  
    }else if (tableauxRegroupé.length>=1 && passwordLength< 12){
   
        alert('Le minimum est de 10 caractères');
        
    // -- si l'utilisateur saisi aucun critère -- //
    }else if (tableauxRegroupé.length<1 && passwordLength>= 12){
   
	    alert('Tu dois séléctionner au moins un critère');
    
    }else{

	    for(i = 0; i < passwordLength; i++){

		    mdp+= tableauxRegroupé[Math.floor(Math.random() * tableauxRegroupé.length)]; 
	    }

    motDePasse.value = mdp; 

    }
}

// -- Fonction permettant de copier le mot de passe -- //
function copie(){
	 
	if (document.getElementById('nouveauPassword').value==0) {
		 
		alert('Case vide , il n y a rien à copier')
	}else {
        motDePasse.select();
        document.execCommand('copy');
        alert('Copié')
    }
}
// -- Création d'un mot de passe par défaut -- //
function parDefaut() {

    document.getElementById('taille').value="18";
	document.getElementById('min').checked =true;
	document.getElementById('maj').checked =true;
	document.getElementById('chiffre').checked =true;
	document.getElementById('symbole').checked =true;
	
    generateur();
}