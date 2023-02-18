# Projet FullStack
Il s'agit d'un projet fullstack pour la gestion des utilisateurs qui se compose d'une application frontend et d'une application backend. L'application frontale est construite à l'aide de React, tandis que le backend est construit à l'aide de springBoot. Le projet utilise également une base de données Oracle pour stocker les données.

# Prérequis
Pour exécuter ce projet, vous devez avoir Docker et Docker Compose installés sur votre machine.

# Comment ça marche?

Pour exécuter le projet, procédez comme suit :
* Clonez le référentiel sur votre machine locale : `git clone <repository_url>`
* Accédez au répertoire racine du projet : `cd <projet_directory>`
* Ouvrez un terminal et exécutez la commande suivante : `docker-compose up --build`

Docker Compose créera les images pour les services frontend, backend et de base de données et démarrera les conteneurs.

Une fois les conteneurs opérationnels, vous pouvez accéder à l'application en exécutant la commande suivante : `docker-compose up`.
En suite vous pouvez accéder à l'application frontale en ouvrant un navigateur Web et en accédant à http://localhost:3000.

# Structure du projet
Le projet comprend trois volets principaux :

* oracle : ce composant configure la base de données Oracle et l'initialise avec les tables et les données requises.
* backend : ce composant contient le code backend de Spring Boot. Il se connecte à la base de données Oracle et fournit les API nécessaires pour le frontend.
* frontend : Ce composant contient le code du frontend React. Il consomme les API fournies par le backend et affiche les données à l'utilisateur.

# Technologies Utilisées
Les technologies suivantes ont été utilisées pour créer cette application :
* Base de données Oracle
* Spring Boot
* React
* Docker

# Resultat

Voici quelques captures d'écran de l'application :

## _Page d'accueil_
La page d'accueil affiche une liste d'utilisateurs extraits de l'API backend :

![](/home/dosi/Bureau/projet/images/page_acceuil.png)
## _Ajouter Utilisateur_
La page d'ajout d'utilisateur vous permet d'ajouter un nouvel utilisateur à la base de données :

![](https://github.com/ZakariaeZouggarh/Projet-Socle-Applicatif-DOSI/blob/main/images/add_user.png?raw=true)
## _Consulter Utilisateur_
La page de consultation de l'utilisateur vous permet de consulter la totalité des informations d'un utilisateur :

![](/home/dosi/Bureau/projet/images/view_user.png)
## _Modifier Utilisateur_
La page de modification de l'utilisateur vous permet de modifier les informations d'un utilisateur existant :

![](/home/dosi/Bureau/projet/images/modif_user.png)
# Contributeurs
Ce projet a été construit par ZOUGGARH Zakariae.
