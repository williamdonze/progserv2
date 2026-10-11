# Programme de l'appli « ProgServ2 »

Cours **Programmation serveur 2 (ProgServ2)**, HEIG-VD, L. Delafontaine, année 2026-2027.
Source : le dépôt `heig-vd-progserv2-course` (zip envoyé le 11.10.2026), copié dans `docs/cours/`.

**Évaluations** (`docs/cours/eval-*.md`) :
- **Évaluation intermédiaire** : 25.11.2026, 90 minutes, **sur papier, sans ressources** (50 % de la note). Questions de théorie, bouts de code à expliquer ou compléter, QCM. Elle porte sur les séances 1 à 7 (et ProgServ1).
- **Projet libre** en équipe (50 %) : application PHP + MySQL/MariaDB déployée sur Infomaniak, POO, sécurité, i18n, sessions, e-mails.

L'appli prépare surtout à l'évaluation papier (lire, prédire, compléter du PHP), et fait **écrire** du vrai PHP, exécuté dans le navigateur (PHP 8.3 en WebAssembly, avec PDO + SQLite en mémoire).

## Les exercices du cours

| séance | chapitre | exercices | dans l'appli |
|---|---|---|---|
| 1 | Rappels sur PHP | Ex. 1 : environnement de développement pour le projet libre | étude de cas (pas de code) |
| 2 | Programmation orientée objet | Ex. 1a / 1b `Person`, Ex. 2a / 2b `Vehicle`, Ex. 3 `Book` + `Library`, Ex. 4 `Calculator` | boss de code |
| 3 | Bases de données et déploiement | Ex. 1 gestion d'outils (PDO, validation, POO), Ex. 2 déploiement Infomaniak | boss de code (version réduite, SQLite) + étude de cas |
| 4 | Réutiliser des parties d'interface | Ex. 1 animaux de compagnie : sortir les parties communes | boss de code (composants en fonctions) |
| 5 | Sécurité et nettoyage des saisies | Ex. 1, 2, 3 (questions), Ex. 4 artistes favori·tes (code à corriger) | étude de cas + boss de code |
| 6 | Cookies, préférences et i18n | Ex. 1 couleur préférée dans un cookie | boss de code (requêtes simulées) |
| 7 | Sessions, authentification, autorisation | Ex. 1 gestion de livres : comptes, connexion, rôles | boss de code (fonctions, requêtes simulées) |
| 8 | Évaluation intermédiaire | – | unité de révision « examen blanc » |
| 9 | POO avancée | Ex. 1 personnages (abstraites + namespaces), Ex. 2 plantes (traits) | boss de code |
| 10 | E-mails | Ex. 1 formulaire de contact avec PHPMailer | boss de code (validation, sujet, corps ; l'envoi est simulé) |

## Les unités

| unité | notions | boss |
|---|---|---|
| u01 Rappels sur PHP | client-serveur (navigateur, serveur web, interpréteur, BDD, hébergement), variables, constantes, opérateurs, conditions, fonctions typées, tableaux, boucles, `require` | S1 Ex. 1 (étude de cas : l'environnement de dev) |
| u02 Classes et objets | classe, `new`, attributs, méthodes, `$this`, encapsulation (`private`/`public`), getters / setters, constructeur, destructeur, constantes `self::` | S2 Ex. 1a + 1b `Person`, Ex. 2a + 2b `Vehicle` |
| u03 Interfaces, héritage, abstraction | `interface`/`implements`, `extends`, `protected`, `parent::`, `abstract`, `require_once`, limites de l'héritage, (bonus) `static` | S2 Ex. 3 `Library`, Ex. 4 `Calculator` |
| u04 Formulaires, PDO et exceptions | `$_POST`, validation serveur, conserver les saisies, PDO, requêtes préparées, `try`/`catch`/`throw`, fichier de configuration (`parse_ini_file`), MariaDB, Docker Compose, déploiement Infomaniak | S3 Ex. 1 outils (réduit), S3 Ex. 2 (étude de cas : déployer) |
| u05 Réutiliser des parties d'interface | `require`/`include`(`_once`), structure `public/` `src/` `components/`, header / footer, composants, fonctions à paramètres explicites | S4 Ex. 1 animaux |
| u06 Sécurité des saisies | validation ≠ nettoyage, injection SQL, XSS, requêtes préparées, `htmlspecialchars` | S5 Ex. 1-3 (étude de cas), Ex. 4 artistes |
| u07 Cookies et i18n | `setcookie`, `$_COOKIE`, durée, suppression, fichiers de traduction, langue choisie | S6 Ex. 1 couleur préférée |
| u08 Sessions, authentification, autorisation | `session_start`, `$_SESSION`, durée, `session_destroy`, sessions ≠ cookies, authentification ≠ autorisation, rôles, `password_hash` / `password_verify` | S7 Ex. 1 livres |
| u09 Examen blanc | révision mélangée des séances 1 à 7 au format de l'évaluation papier | examen blanc (étude de cas longue) |
| u10 POO avancée | `namespace`, `use`, autoloader (`spl_autoload_register`), traits, interface vs abstraite vs trait | S9 Ex. 1 personnages (classe mère, ninja, mages), Ex. 2 plantes (`SmellTrait`, orchidée) |
| u11 E-mails | SMTP, POP3, IMAP, `mail()` vs PHPMailer, Mailpit, Infomaniak, `mail.ini` | S10 Ex. 1 formulaire de contact (PHPMailer simulé) + étude de cas (Mailpit, Infomaniak) |

Chaque unité : 3 à 5 fiches, 3 à 5 leçons courtes, un jeu, un quiz (dont des révisions), ses boss. L'ordre suit les séances, pour que l'appli soit prête **avant** chaque cours ; u01 à u09 sont prioritaires (évaluation du 25.11).

## Difficultés à cibler

L'élève a indiqué (11.10.2026) quatre domaines difficiles : **la POO**, **les bases de données / PDO**, **la sécurité, les cookies et les sessions**, **les bases de PHP**. Chacun est travaillé dans plusieurs unités, et revient dans le défi du jour (répétition espacée) et dans l'examen blanc (u09).

| difficulté | où elle est travaillée |
|---|---|
| **Bases de PHP** : concaténation `.` (et pas `+`), `"$x"` vs `'$x'`, `==` vs `===`, `echo` vs `return`, tableaux associatifs, `foreach` | u01 (toutes les leçons), u09-l1, diagnostics `concat-plus`, `echo-vs-return`, `variable-inconnue` |
| **POO** : `$this->x` oublié, `$this->$x`, `->` vs `::`, visibilité, constructeur, `parent::` | u02, u03, u09-l2, u10 ; diagnostics `this-oublie`, `this-dollar`, `visibilite`, `parent-sans-extends` |
| **POO** : interface vs classe abstraite vs trait | u03, u10-l4, u09-l2 |
| **POO** : namespaces, `use`, autoloader | u10-l1, u10-l2, boss u10-b1 à b5 ; diagnostic `classe-inconnue` (namespace du fichier) |
| **PDO** : `prepare` / `bindValue` / `execute` / `fetch`, `try` / `catch`, fichier de configuration | u04, u06, u09-l3 ; diagnostics `sql-*` |
| **Sécurité** : requête préparée vs concaténation, échapper à l'affichage (`htmlspecialchars`), valider côté serveur | u04, u06, u09-l3 ; conseils `sql-concat`, `xss` |
| **Cookies et sessions** : `setcookie` avant tout affichage, durée, cookie vs session, `session_start`, `session_destroy` | u07, u08, u09-l4 ; diagnostics `entete-envoye`, `session-double` |
| **Authentification vs autorisation**, `password_hash` / `password_verify` | u08, u09-l4 ; conseil `hachage-faible` |
| **E-mails** : SMTP / POP3 / IMAP, PHPMailer, format exact du sujet et du corps | u11 |

## Analogies récurrentes

1. **Le restaurant** (client-serveur) : le navigateur est le client qui commande, le serveur web le serveur qui prend la commande, PHP le cuisinier qui prépare le plat (le HTML), la base de données le garde-manger.
2. **Le plan et la maison** (POO) : la classe est le plan, l'objet une maison construite d'après le plan ; l'interface est le cahier des charges, la classe abstraite une maison témoin à moitié finie, l'héritage une variante du plan.
3. **Le ticket de la Poste** (cookies et sessions, analogie du cours) : le guichet donne un ticket numéroté (le cookie avec l'identifiant de session) ; le dossier reste au guichet (la session, côté serveur).
4. **Le signal d'alarme** (exceptions, analogie du cours) : `throw` déclenche l'alarme, `catch` est la personne qui l'entend et réagit ; si personne n'écoute, tout s'arrête.
5. **Les cases du formulaire** (sécurité) : dans une requête préparée, la donnée reste dans sa case et ne devient jamais du code ; avec `htmlspecialchars`, elle est mise en vitrine : on la voit, elle n'agit pas.
6. **Les hashtags** (namespaces, analogie du cours) : on range les classes sous un même hashtag pour les retrouver et éviter les homonymes.
