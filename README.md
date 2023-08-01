# ***Generateur de MDP***
## **Objectifs**

- Generer un mot de passe.
- Accès à certains reglages pour le mot de passe. 

## **ETAPE 1:**
### Explication du script Password Generator : 

Premierement j'ai crée plusieurs constantes : 
- ***motDePasse*** = (id de la balise html ou le mot de passe s'affichera).
- ***tableauMinuscule*** = (contient toutes les lettres de l'alphabet en minuscule).
- ***tableauMaj*** = (contient toutes les lettres de l'alphabet en majuscule).
- ***tableauNumero*** = (contient tous les numéros de 0 à 9).
- ***tableauSymbole*** = (contient tous les caractères spéciaux).

Ces constantes serviront pour les fonctions qui permettront de générer le MDP. 

------------------------------------
------------------------------------
<span style="color: #eee000">/!\ TOUTES LES FONCTIONS S'EXECUTENT LORSQUE L'UTILISATEUR CLIQUE SUR LEURS BOUTONS ASSOCIES DANS L'HTML.</span>

### La fonction ***generateur()*** : 

La fonction déclare un tableau "***tableauxRegroupe***" qui regroupe d'autres tableaux de caractères (les tableaux initialisés plus haut) ***si leurs cases dans le HTML est coché par l'utilisateur*** : utilisation de "checkbox" dans l'HTML et vérification dans notre fonction.
> Par exemple : "***min.checked ?***" ou "***min***" correspond à l'ID de la checkbox et "***checked ?***" vérifie si celle-ci a été cochée.

------------------------------------

Une variable "***passwordLength***" qui contient la longueur du mot de passe souhaité par l'utilisateur, obtenue en récupérant la valeur de l'élément HTML ayant l'ID "***taille***".
Pour récuperer l'ID du code HTML ainsi que la valeur de input, j'utilise la méthode suivante : 
```js
 parseInt(document.getElementById('taille').value)
```
> "parseInt()" permet de convertir une chaine de caractère en string

------------------------------------

Une variable "***mdp***" qui stockera le mot de passe généré et qui est initialisée par une chaîne de caractères vide.

> Cette variable sera appeller en fin de fonction. 

------------------------------------

Ensuite il faut vérifier que plusieurs conditions qui permettront d'avoir un mot de passe fort soit respecter. 

1. Si ***aucune des checkboxes n'est cochée*** (c'est-à-dire si tableauxRegroupé est vide) et que ***la longueur du mot de passe*** souhaitée par l'utilisateur est ***inférieure à 12***, alors elle affiche deux alertes : 
   >"Tu dois sélectionner au moins un critère"

   >"Le minimum est de 10 caractères".

2. Si ***au moins une des checkboxes est cochée*** (c'est-à-dire si tableauxRegroupé n'est pas vide) mais que ***la longueur du mot de passe*** souhaitée par l'utilisateur est ***inférieure à 12***, alors elle affiche l'alerte :
   > "Le minimum est de 10 caractères".

3. Si ***aucune des checkboxes n'est cochée*** et que ***la longueur du mot de passe*** souhaitée par l'utilisateur est ***supérieure ou égale à 12***, alors elle affiche l'alerte :
   >"Tu dois sélectionner au moins un critère".

4. Si ***aucune des conditions précédentes n'est remplie***, cela signifie que l'utilisateur ***a coché au moins une checkbox*** et qu'il a choisi une longueur de mot de passe ***supérieure ou égale à 12***. Dans ce cas, la fonction exécute une boucle "for" qui génère le mot.
   
------------------------------------

Cette boucle "***for***" fonctionne de la facon suivante : 

1. La boucle "***for***" parcourt les éléments de l'intervalle allant de ***0*** à "***passwordLength***" (le nombre de caractère max pour le mdp). 

    Pour chaque itération, la variable "***mdp***" est augmentée de la valeur d'un caractère choisi de manière aléatoire dans le tableau "***tableauxRegroupé***". Pour choisir le caractère, la fonction utilise la méthode "***Math.floor(Math.random() * tableauxRegroupé.length)***" qui génère un nombre entier aléatoire compris entre ***0*** et ***la longueur du tableau "tableauxRegroupé"***. Le ***nombre sera utilisé comme index*** pour récupérer un élément dans le tableau "tableauxRegroupé".   

2. Lorsque la boucle "***for***" est terminé, le mot de passe généré est stocké dans la variable "***mdp***".

3. La constante initialisé plutot "***motDePasse***" récupere la valeur de la variable "***mdp***", grâce à l'instruction "***motDePasse.value = mdp;***". Cela permet d'afficher le mot de passe généré dans l'élément HTML correspondant.

------------------------------------
------------------------------------

### La fonction **parDefault()**

La fonction "parDefaut" a pour objectif de mettre en place une configuration par défaut pour la fonction générateur de mot de passe.

Voici ce que fait la fonction en détail :

1. Elle donne la valeur "***18***" à l'élément HTML ayant l'ID "***taille***" grâce à l'instruction 
   ```js 
   document.getElementById('taille').value = '18';
   ``` 
   Cela permet de définir la longueur du mot de passe à générer à ***18 caractères***.

2. Elle coche les checkboxes ayant les IDs ***"min", "maj", "chiffre" et "symbole"*** grâce aux instructions 
    ```js
    document.getElementById('min').checked = true;
    document.getElementById('maj').checked = true;
    document.getElementById('chiffre').checked = true;
    document.getElementById('symbole').checked = true;
    ``` 
    Cela permet de définir que le mot de passe généré doit contenir l'ensemble des critères proposés pour qu'il soit le plus sécurisé possible. 
    > Utilisation des ***.checked = true*** permet de valider automatiquement les checkbox de la page HTML. 

3. Elle appelle la fonction en fin, la fonction "***generateur()***". 
   Cela permet de générer le mot de passe en fonction de la configuration définie par les instructions précédentes.

------------------------------------
### La fonction **copie()**
Cette fonction est une fonction JavaScript qui permet à l'utilisateur de ***copier le mot de passe généré***. 

1. Elle vérifie d'abord si la valeur du champ de saisie avec l'ID "nouveauPassword" est égale à zéro. Si c'est le cas, elle affiche une alerte disant 
    >"Case vide, il n y a rien à copier".

2. Si la valeur du champ de saisie n'est pas zéro, la fonction sélectionne le texte dans le champ de génération du mot de passe avec l'ID html de celui-ci. Puis utilise la méthode execCommand pour exécuter la commande "***copy***". Le texte dans le champ de saisie est mis le presse-papiers. La fonction affiche alors une alerte disant "***Copié***".

----------------

                                       FIN
