---
title: Export Excel pour webdirect dév
description: Procédure pour implémenter la fonction d'exportation sous format Excel pour les utilisateurs de Passage via webdirect
slug: export-excel-webdirect
tag: ['passage', 'export', 'excel', 'webdirect']
app: Passage
---

# Export Excel pour webdirect
## Ajout de tables
**setup_export_excel**  
configurations des exports actifs  

**setup_export_excel_champs**  
listes des champs accessibles pour chaque export  

<doc-image src="docs/exportExcelWebdirect/01.png" alt="Alfa3a Documentation"></doc-image>  
 
***
## Scripts

<doc-image src="docs/exportExcelWebdirect/03.png" alt="Alfa3a Documentation"></doc-image> 

***
## Backoffice

<doc-image src="docs/exportExcelWebdirect/02.png" alt="Alfa3a Documentation"></doc-image> 

***
## Procédure d'ajout du composant d'export excel pour webdirect  

***  

1 - BackOffice / Export Excel : copier du popup Excel  
***   

2 - Sur le modèle FMP concerné : coller du popup Excel  
***  

3 - Dans la table du modèle :
  ajouter le champs global text *lien_export_excel_uuid_g*, seulement si c'est nécessaire, à savoir si la table a déjà été modifiée pour un précédent ajout d'export excel de ce type.  

***  


4 - Dans le schéma des liaisons entre table :
  ajouter un lien entre le champs *lien_export_excel_uuid_g* de la table du modèle au champs *UUID_export* d'une instance de la table **setup_export_excel**

<doc-image src="docs/exportExcelWebdirect/04.png" alt="Alfa3a Documentation"></doc-image>  
***  

5 - Configuration initiale des champs qui pourront être exportés:  
ouverture du popup et clic sur le bouton **création de la configuration initiale**  
accès au modèle **BackOffice** pour associer les champs du modèle aux colonnes du fichier Excel par lettrage  
puid valider la configuration en cliquant sur le bouton **Nouveau**  

 
<doc-image src="docs/exportExcelWebdirect/05.png" alt="Alfa3a Documentation"></doc-image>    
***
**ATTENTION**  
Il faut s'assurer que l'UUID du nouvel export excel soit ajouté comme paramètre au script qui se lance automatiquement à chaque ouverture du popup :  
*setup_lien_modele_avec_export_excel*
(déclencheur de script à l'ouverture du popup)  
***  


6 - Configuration des noms d'en-tête de colonne:
A partir du popup, clic sur le bouton **Gestion des colonnes**  
Sélection des champs à exporter : case à cocher à gauche de chaque ligne
 
<doc-image src="docs/exportExcelWebdirect/06.png" alt="Alfa3a Documentation"></doc-image> 
***  

7 - Configuration des en-têtes, du modèle excel, etc.:
A partir du popup, clic sur le bouton **Gestion des en-têtes**  
Définition de l'emplacement du marquage du titre, de l'auteur et de l'horodatage.
Définition du nom par défaut du fichier exporté.
Ajout possible d'un modèle *sur mesure*
 
<doc-image src="docs/exportExcelWebdirect/07.png" alt="Alfa3a Documentation"></doc-image> 
***  
