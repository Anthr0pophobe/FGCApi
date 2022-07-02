# FGCApi
API REST node.js de l'application FGC

# 1-PREREQUIS
Installer Node.JS
Installer Yarn
Pour utiliser uniquement l'API, vous aurez besoin d'installer :
MAMP : https://www.mamp.info/en/downloads/ 
Demander le fichier SQL à Ludovic (Ludal#0709 sur Discord)

Lancer le serveur MAMP et se rendre sur cette page : http://localhost:8888/phpMyAdmin5/index.php
Créer une nouvelle base de donnée.
La nommer 'fgc'
Importer le fichier creationDB.SQL
Importer le fichier insertTable.SQL


# 2-INSTALLATION

Une fois le projet sur votre machine :
$ yarn install
cela peut prendre quelques minutes pour installer tout les packages 
( Optionnel mais possiblement obligatoire ) 
$ yarn prisma db pull
$ yarn prisma generate
--------------------------------------------
$ yarn dev
Pour lancer l'environenemnt de développement

# 3 - ENJOY

L'API est a présent fonctionnelle
