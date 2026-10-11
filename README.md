<p align="center"><img src="icones/mascotte.svg" width="150" alt="Elly, la mascotte de ProgServ2"></p>
<h1 align="center">ProgServ2</h1>
<p align="center"><b>Réviser le cours Programmation serveur 2 (HEIG-VD) en jouant : leçons courtes, vrai PHP exécuté dans le navigateur, défi du jour et révisions espacées.</b></p>
<p align="center"><a href="https://williamdonze.github.io/progserv2/"><b>Ouvrir l'appli →</b></a></p>

Une appli façon Duolingo pour réviser le cours : leçons de cinq minutes, exercices interactifs, XP, séries de jours, badges, défi du jour et révisions espacées (les notions ratées reviennent vite, les autres de plus en plus rarement). Elle s'installe sur le téléphone et marche hors connexion ; la progression reste dans le navigateur.

**11 unités · 50 leçons · 599 questions · 47 fiches de théorie · 31 boss** (les exercices du cours).

## Les unités

| | Unité | Ce que tu sauras faire | Boss |
|---|---|---|---|
| 1 | **Rappels sur PHP**<br><sub>Séance 1 · client-serveur, variables, conditions, fonctions, tableaux</sub> | Revoir les bases de ProgServ1 : savoir où s'exécute le PHP, manipuler variables et constantes, décider, écrire des fonctions qui retournent un résultat, parcourir des tableaux. | Séance 1, exercice 1 : mettre en place un environnement de développement PHP pour le projet libre |
| 2 | **Classes et objets**<br><sub>Séance 2 · classe, objet, $this, encapsulation, constructeur, constantes</sub> | Créer des classes et des objets en PHP, protéger leurs données avec l'encapsulation, les initialiser avec un constructeur et nommer les valeurs fixes avec des constantes. | Séance 2, exercice 1a<br>Séance 2, exercice 1b<br>Séance 2, exercice 2a<br>Séance 2, exercice 2b |
| 3 | **Interfaces, héritage, abstraction**<br><sub>Séance 2 · implements, extends, abstract, require_once, static</sub> | Appliquer les interfaces, l'héritage et les classes abstraites, organiser ses classes en fichiers avec require_once, et réaliser la bibliothèque et la calculatrice du cours. | Séance 2, exercice 3, partie 1<br>Séance 2, exercice 3, partie 2<br>Séance 2, exercice 4 |
| 4 | **Formulaires, PDO et exceptions**<br><sub>Séance 3 · $_POST, validation, requêtes préparées, try/catch, configuration, déploiement</sub> | Traiter un formulaire de façon sûre, enregistrer et lire des données avec PDO et des requêtes préparées, gérer les erreurs avec des exceptions, et préparer le déploiement avec un fichier de configuration. | Séance 3, exercice 1 (1re partie : la classe de l'outil)<br>Séance 3, exercice 1 (2e partie : la gestion en base de données)<br>Séance 3, exercice 1 (3e partie : le formulaire)<br>Séance 3, exercice 2 : déployer l'application de l'exercice 1 sur Infomaniak |
| 5 | **Réutiliser des parties d'interface**<br><sub>Séance 4 · PHP dans le HTML, include/require, composants, render()</sub> | Inclure des fichiers à bon escient, sortir l'en-tête, le pied de page et le bloc head dans des composants, et les afficher avec des paramètres explicites grâce à render(). | Séance 4, exercice 1 (inclure les composants)<br>Séance 4, exercice 1 (passer des paramètres explicites avec une fonction) |
| 6 | **Sécurité des saisies**<br><sub>Séance 5 · validation, nettoyage, injection SQL, XSS</sub> | Distinguer validation et nettoyage, comprendre l'injection SQL et les attaques XSS, et s'en protéger avec des requêtes préparées et htmlspecialchars. | Séance 5, exercices 1, 2 et 3<br>Séance 5, exercice 4 |
| 7 | **Cookies et i18n**<br><sub>Séance 6 · setcookie, $_COOKIE, préférences, traductions</sub> | Stocker et relire des préférences dans des cookies, les supprimer, s'en méfier comme de toute saisie, et afficher une application en plusieurs langues. | Séance 6, exercice 1<br>Projet libre, critère 7 (gestion multilingue), sur le modèle de l'exemple de code « Gestion des langues avec des cookies » de la séance 6 |
| 8 | **Sessions, authentification, autorisation**<br><sub>Séance 7 · session_start, $_SESSION, rôles, password_hash</sub> | Utiliser les sessions pour garder un utilisateur connecté, distinguer sessions et cookies, authentifier avec des mots de passe hachés et autoriser selon le rôle. | Séance 7, exercice 1 (page de création de compte)<br>Séance 7, exercice 1 (page de connexion)<br>Séance 7, exercice 1 (page privée)<br>Séance 7, exercice 1 (page réservée au rôle author)<br>Séance 7, exercice 1 (déconnexion) |
| 9 | **Examen blanc**<br><sub>Séance 8 · révision des séances 1 à 7 au format de l'évaluation papier</sub> | Lire, prédire, compléter et expliquer du PHP sans ordinateur, sur toutes les notions des séances 1 à 7, comme à l'évaluation intermédiaire du 25.11.2026. | Évaluation intermédiaire du 25.11.2026 (format : papier, 90 minutes, sans ressources, séances 1 à 7) |
| 10 | **POO avancée**<br><sub>Séance 9 · namespaces, use, autoloader, traits</sub> | Organiser ses classes avec des namespaces et un autoloader, partager du code avec des traits, et choisir entre interface, classe abstraite et trait. | Séance 9, exercice 1 (src/Characters/AbstractCharacter.php)<br>Séance 9, exercice 1 (src/Characters/Assassins/Ninja.php)<br>Séance 9, exercice 1 (src/Characters/Mages/AbstractMage.php)<br>Séance 9, exercice 2 (src/Traits/SmellTrait.php)<br>Séance 9, exercice 2 (src/Plants/Orchid.php) |
| 11 | **Les e-mails**<br><sub>Séance 10 · SMTP, POP3, IMAP, PHPMailer, Mailpit, Infomaniak</sub> | Comprendre comment circulent les e-mails, choisir PHPMailer plutôt que mail(), configurer l'envoi en développement (Mailpit) et en production (Infomaniak), et envoyer un formulaire de contact. | Séance 10, exercice 1 : formulaire de contact avec PHPMailer<br>Séance 10, exercice 1 : configurer l'envoi en développement (Mailpit) puis en production (Infomaniak) |

## Sur ton téléphone

Ouvre [l'appli](https://williamdonze.github.io/progserv2/) sur ton téléphone : après la première leçon, Elly te montre comment l'ajouter à l'écran d'accueil (iPhone : Partager → « Sur l'écran d'accueil » ; Android : « Installer »). Le mode d'emploi est aussi dans Profil.

## Compléter le cours

- **Nouveaux supports** (slides, énoncés, PDF) : dépose-les dans `supports/` (sur GitHub : *Add file → Upload files*), puis, dans une session Claude Code sur ce dépôt, tape **`/ajouter-supports`**. Claude propose les nouvelles unités, tu valides, il les écrit et les teste.
- **Améliorations du moteur** : **`/mettre-a-jour-moteur`** reprend la dernière version du modèle sans toucher au contenu.

## Pour développer

```bash
python3 -m http.server 8765        # puis http://localhost:8765/
python3 tools/valider-contenu.py && python3 tools/tester-exercices.py && python3 tools/test-parcours.py
```

Le contenu est en JSON dans `content/` (une unité par fichier), le format dans `docs/format-contenu.md`, le programme dans `docs/programme.md`.

---

<p align="center"><sub>Créé à partir du <a href="https://github.com/williamdonze/cours-duolingo-template">modèle de cours façon Duolingo</a> de <a href="https://github.com/williamdonze">William Donzé</a>.</sub></p>
