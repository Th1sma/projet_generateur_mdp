# Générateur de Mots de Passe

## Objectifs

- Générer un mot de passe sécurisé en fonction des critères sélectionnés par l'utilisateur.
- Permettre l'accès à certains réglages pour personnaliser la génération du mot de passe.

## ÉTAPE 1 : Explication du script du générateur de mots de passe

### Constantes utilisées dans le script :

- **password** : ID de l'élément HTML où le mot de passe généré s'affiche.
- **lowercaseTab** : Tableau contenant toutes les lettres de l'alphabet en minuscule.
- **uppercaseTab** : Tableau contenant toutes les lettres de l'alphabet en majuscule.
- **numberTab** : Tableau contenant tous les chiffres de 0 à 9.
- **symbolTab** : Tableau contenant tous les caractères spéciaux.

Ces constantes sont utilisées pour générer des mots de passe en combinant différents types de caractères.

---

<span style="color: #eee000">/!\ TOUTES LES FONCTIONS S'EXECUTENT LORSQUE L'UTILISATEUR CLIQUE SUR LEURS BOUTONS ASSOCIES DANS L'HTML.</span>

### Fonction **generateur()** :

Cette fonction génère un mot de passe en fonction des critères sélectionnés par l'utilisateur. Elle vérifie d'abord quelles options sont cochées à l'aide des cases à cocher dans l'interface HTML.

1. Elle crée un tableau "**tabGroup**" qui regroupe les tableaux de caractères sélectionnés par l'utilisateur (lettres minuscules, majuscules, chiffres, symboles).
   
2. La fonction vérifie également la longueur du mot de passe souhaitée par l'utilisateur en récupérant la valeur de l'élément HTML avec l'ID "**lenght-password-value**".

3. En fonction des critères sélectionnés et de la longueur du mot de passe :
   - Si aucun critère n'est sélectionné et que la longueur est inférieure à 12, des alertes sont affichées.
   - Si au moins un critère est sélectionné mais la longueur est inférieure à 12, une alerte est affichée pour indiquer la longueur minimale.
   - Si aucun critère n'est sélectionné mais que la longueur est supérieure ou égale à 12, une alerte est affichée pour sélectionner au moins un critère.
   - Si au moins un critère est sélectionné et que la longueur est supérieure ou égale à 12, le mot de passe est généré en combinant aléatoirement les caractères sélectionnés.

4. Le mot de passe généré est affiché dans l'élément HTML dédié "**password**".

### Fonction **copie()**

Cette fonction permet à l'utilisateur de copier le mot de passe généré dans le presse-papiers.

1. Elle vérifie d'abord si le champ de saisie avec l'ID "**nouveauPassword**" contient du texte.
   - Si le champ est vide, une alerte est affichée pour informer l'utilisateur qu'il n'y a rien à copier.
   
2. Si le champ contient du texte, elle sélectionne automatiquement le texte dans le champ "**nouveauPassword**" et utilise la méthode "**execCommand('copy')**" pour copier le texte dans le presse-papiers.
   - Une alerte est alors affichée pour confirmer que le mot de passe a été copié avec succès.

## Auteur

Ce projet a été développé par Th1sma.