// -- Constante contenant les lettres (maj / min), symboles et chiffres -- //
const password =  document.getElementById('nouveauPassword');
const tableauMinuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
const tableauMaj = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
const tableauNumero = [1,2,3,4,5,6,7,8,9,0];
const tableauSymbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];

// -- Fonction qui génere le mot de passe -- //
function generatePassword(){
    
    // Verif des checkbox activé
    const tableauxRegroupé = [].concat(
        min.checked ? tableauMinuscule : [],    
        maj.checked ? tableauMaj : [],
        chiffre.checked ? tableauNumero : [],
        symbole.checked ? tableauSymbole : []);
    
    var passwordLength = parseInt(document.getElementById('lenght-password-value').value);
    var mdp = ''; 
    
    // -- si l'utilisateur saisi aucun critère -- //
    if (tableauxRegroupé.length<1 && passwordLength>= 12){
   
        alert('Tu dois séléctionner au moins un critère');
    
    }else{

        for(i = 0; i < passwordLength; i++){

            mdp+= tableauxRegroupé[Math.floor(Math.random() * tableauxRegroupé.length)]; 
        }

        password.value = mdp; 
        evaluatePasswordStrength(mdp);
    }
}

/**
 * @function copy
 * @notes Copie du mot de passe généré
 */
function copy(){
     
    if (document.getElementById('nouveauPassword').value==0) {
         
        alert('Case vide , il n y a rien à copier')
    }else {
        password.select();
        document.execCommand('copy');
        alert('Copié')
    }
}

/**
 * @function evaluatePasswordStrength
 * @param {string} password - Le mot de passe à évaluer
 * @notes Évalue la force du mot de passe et met à jour l'indicateur visuel et le texte correspondant.
 */
function evaluatePasswordStrength(password) {
    const indicator = document.getElementById('strength-indicator');
    const strengthText = document.getElementById('strength-text');
    const length = password.length;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;

    if (length >= 12) strength++;
    if (length >= 16) strength++;
    if (hasLowercase) strength++;
    if (hasUppercase) strength++;
    if (hasNumber) strength++;
    if (hasSymbol) strength++;

    let strengthPercentage = (strength / 6) * 100;
    indicator.style.left = `${strengthPercentage}%`;

    if (strength < 2) {
        strengthText.textContent = "very weak";
    } else if (strength < 3) {
        strengthText.textContent = "weak";
    } else if (strength < 4) {
        strengthText.textContent = "medium";
    } else if (strength < 5){
        strengthText.textContent = "strong";
    } else if (strength > 5){
        strengthText.textContent = "very strong";
    } 
}

