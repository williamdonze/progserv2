# Modèle d'appli de cours façon Duolingo

Ce dépôt est un **modèle** : un moteur d'apprentissage façon **Duolingo** (leçons courtes, exercices interactifs, XP, séries, badges, défi du jour, répétition espacée), sans aucun cours dedans, sauf deux unités d'exemple. On crée l'appli d'un cours avec **« Use this template »** sur GitHub, puis la compétence **`/nouveau-cours`** (`.claude/skills/nouveau-cours/SKILL.md`) la remplit à partir des supports du cours.

Il descend de **Pampre** (le « Duolingo du vin », https://github.com/williamdonze/pampre) et de **ProgWeb 2** (JavaScript, https://github.com/williamdonze/progweb2), d'où viennent le moteur, le bac à sable de code et l'unité « catalogue ». Public : l'élève, francophone. Langue du site, du contenu et des commentaires : **français**, tutoiement.

## Ce cours

**ProgServ2** : l'appli de révision du cours **Programmation serveur 2 (ProgServ2)** de la HEIG-VD (L. Delafontaine, 2026-2027), en **PHP**. Supports : le dépôt `heig-vd-progserv2-course` (zip envoyé le 11.10.2026, licence CC BY-SA 4.0), copiés dans `docs/cours/` (théorie, présentations, exercices, évaluations). Programme, exercices du cours, difficultés : `docs/programme.md`.

- **Identité** : clé `progserv2` (définitive), mascotte **Elly**, un éléphant (`forme: "elephant"`, la mascotte de PHP) dans le cadre `<? ?>`, violet PHP (`#5F64A8`).
- **Module** : `code-php` seul (PHP 8.3 en WebAssembly, requêtes simulées, PDO + SQLite en mémoire). Voir `docs/modules.md`.
- **Évaluations** : évaluation intermédiaire le 25.11.2026 (papier, 90 min, sans ressources, séances 1 à 7) ; projet libre en équipe.
- **Unités** (une par séance, boss = exercices du cours) :
  - `u01-rappels` (S1 : client-serveur, bases de PHP ; boss : étude de cas « environnement de développement ») ;
  - `u02-classes` (S2 : classes, encapsulation, constructeur, constantes ; boss `Person`, `Vehicle`) ;
  - `u03-heritage` (S2 : interfaces, héritage, abstraction, `static` ; boss `Library`, `Calculator`) ;
  - `u04-pdo` (S3 : formulaires, PDO, exceptions, configuration, déploiement ; boss gestion d'outils + étude de cas Infomaniak) ;
  - `u05-interface` (S4 : `require`/`include`, composants ; boss animaux de compagnie) ;
  - `u06-securite` (S5 : validation / nettoyage, injection SQL, XSS ; boss questions + artistes favori·tes) ;
  - `u07-cookies` (S6 : cookies, i18n ; boss couleur préférée) ;
  - `u08-sessions` (S7 : sessions, authentification, autorisation, `password_hash` ; boss gestion de livres, page par page) ;
  - `u09-examen-blanc` (S8 : révision des séances 1 à 7 au format de l'évaluation papier ; boss : examen blanc) ;
  - `u10-poo-avancee` (S9 : namespaces, autoloader, traits ; boss personnages et plantes) ;
  - `u11-e-mails` (S10 : SMTP/POP3/IMAP, PHPMailer **simulé**, Mailpit, Infomaniak ; boss formulaire de contact + étude de cas).
- **Analogies récurrentes** (toujours les mêmes) : **le restaurant** (client-serveur : le navigateur commande, PHP cuisine le HTML, la base est le garde-manger) ; **le plan et la maison** (POO : classe = plan, objet = maison, interface = cahier des charges, classe abstraite = maison témoin, trait = kit à installer) ; **le ticket de la Poste** (cookie = ticket gardé par le client, session = dossier resté au guichet ; analogie du cours) ; **le signal d'alarme** (exceptions : `throw` / `catch` ; analogie du cours) ; **les cases du formulaire et la vitrine** (requêtes préparées ; `htmlspecialchars`) ; **les hashtags** (namespaces ; analogie du cours).
- **Boss sur plusieurs fichiers** : l'élève écrit un fichier (`fichier`), les autres sont fournis (`fichiers`) ; un fichier fourni ne contient jamais la solution d'un autre boss (sauf `AbstractCharacter`, entièrement dicté par l'énoncé). Les sessions, cookies et formulaires passent par `requete` ; PHPMailer est remplacé par une version simulée (même interface, `send()` garde l'e-mail dans `PHPMailer::$envoyes`).
- **Écarts relevés dans les supports** : la solution du cours de `Calculator::subtract` (S2 Ex. 4) donne −12 au lieu de 12 (l'appli suit l'énoncé) ; S7 nomme le rôle par défaut `user` dans le texte et `reader` dans la solution (l'appli suit la solution).
- **État** : 11 unités complètes, les trois tests verts. À venir : séance 11 (récapitulatif) si de nouveaux supports arrivent.

## Lancer

```bash
python3 -m http.server 8765      # puis http://localhost:8765/
```

Aucune dépendance, aucun build. `fetch()` et les Web Workers exigent un serveur HTTP (pas de `file://`). Seule ressource externe : Google Fonts (Baloo 2, Nunito, JetBrains Mono), avec polices de repli.

## Arborescence

```
index.html                 Coquille : charge css/app.css et les scripts js/ dans l'ordre (titre et icône écrits par tools/configurer.py)
css/app.css                Tout le style ; jetons de couleur dans :root, redéfinis en sombre (2 blocs) ; config.app.couleurs les surcharge
js/base.js                 APP (identité, depuis config.app), utilitaires, icônes, mascotte, sauvegarde, progression, répétition espacée,
                           toasts, modale, affichage du code, executer() (worker, 2 s), texte enrichi, fiches, illustrations
js/questions.js            Moteur d'exercices : Q[type] pour les 23 types
js/app.js                  runSession, leçons / jeux / quiz / boss (code ou étude de cas), défi du jour, vues, démarrage
js/banc.js, js/worker.js, js/editeur.js     Module code-js : banc d'essai (tests, diagnostics, erreurs traduites), Web Worker, éditeur
js/dom.js, js/dom-harnais.js                Module dom : page web dans une iframe isolée, harnais de test
js/php.js, js/vendor/php-wasm/              Module code-php : PHP 8.3 en WebAssembly, requête simulée, tests, erreurs traduites
content/config.json        app (nom, clé, mascotte, couleurs, modules), sommaire des unités, rangs, badges
content/unites/uNN-*.json  Une unité par fichier : fiches, leçons, jeux, quiz, boss
content/pages/             Pages web des exercices DOM (module dom)
tools/                     Tests et outils (voir « Tests »), configurer.py, build-icones.py
docs/format-contenu.md     LA référence du format du contenu (config, tous les types, tests, diagnostics, boss)
docs/modules.md            Les modules, et comment en ajouter un (PHP, terminal…)
.claude/skills/nouveau-cours/   La procédure « créer l'appli d'un nouveau cours »
manifest.webmanifest, sw.js, icones/   Appli installable, hors connexion (configurer.py change le nom du cache)
```

**Règle d'or : contenu ≠ code.** Ajouter une unité, une leçon, un exercice = éditer du JSON. Ne toucher `js/` que pour une nouvelle mécanique (nouveau type, nouveau module, nouveau diagnostic, nouvelle vue), et la reporter alors dans ce modèle.

## Architecture

- Scripts classiques (pas de modules ES), qui partagent leurs déclarations globales, chargés dans l'ordre : `banc.js`, `base.js`, `editeur.js`, `dom.js`, `php.js`, `questions.js`, `app.js`.
- **Identité** : au démarrage, `boot()` lit `content/config.json` puis `appliquerApp(config.app)` remplit `APP` (nom, clé, mascotte, textes, modules), la clé de sauvegarde (`<cle>-sauvegarde-v1`), les couleurs (balise `<style id="couleurs-app">`) et le logo. `aModule("code-js")` dit si un module est actif (onglet Console, boutons « Exécuter »).
- **Contrat d'un type d'exercice** (repris de Pampre) : `Q.monType = (q, onChange) => ({ el, ready(), check(), key?, cleanup?, reouvrir?, resoudre? })`.
  - `check()` verrouille, marque juste / faux, renvoie `{ ok, answer?, answerHTML?, detailHTML?, retry? }`, ou une **promesse** (exercices de code).
  - `retry: true` : exercice de code raté ; « Corriger mon code », puis « Passer » après 3 essais. **Jamais de solution affichée.**
  - `resoudre()` : remplit la bonne réponse ; utilisé par `tools/test-parcours.py` (mode `?test`, `window.__q`).
  - Ajouter le libellé dans `KIND_NAME`, les champs dans `TYPES` de `tools/valider-contenu.py`, la doc dans `docs/format-contenu.md`, un exemple dans `u02-catalogue`.
- **Boss** : un boss de code (type `boss`, module `code-js`) ou une **étude de cas** (`questions` : scénario + questions de tout type, réussie au seuil de validation, `startEtude`).
- **Bac à sable de code** (module `code-js`) : `executer({ code, donnees, prelude, tests, contexte })` crée un Worker neuf, tué après 2 s ; `executerTout` (banc.js) exécute, teste chaque cas avec des arguments gelés, analyse le code (interdit, obligatoire, conseils), diagnostique le premier cas raté. Détails dans `docs/format-contenu.md` et le CLAUDE.md de ProgWeb 2.
- **Bac à sable DOM** (module `dom`) : iframe `sandbox="allow-scripts"` (sans accès à l'appli ni à la sauvegarde), code de l'élève importé comme module, `tests.etapes` (clics, scripts, comptages).
- **Progression** : unité ouverte si première, déjà ouverte (`ST.ouvertes`) ou quiz précédent validé (seuil 80 %). Les boss ne bloquent pas la suite. Identifiants explicites partout : ajouter du contenu ne casse jamais une sauvegarde. Ne **jamais** changer l'`id` d'un élément existant, ni `app.cle` une fois publié.
- **Répétition espacée** : `noterNotions(q, ok)` après chaque question ; boîtes 1 à 5, intervalles 1, 2, 4, 8, 16 jours ; une erreur ramène à la boîte 1. Le défi du jour prend d'abord les notions dues, puis les erreurs récentes, puis des révisions.

## Exigences pédagogiques (valables pour tous les cours)

- **Ne jamais donner la solution** d'un exercice. À la place : 3 indices progressifs (léger → précis → squelette à trous). Le champ `solution` ne sert qu'aux tests automatiques.
- **Ne jamais inventer** un énoncé ou une consigne du prof : tout vient des supports (copiés dans `docs/cours/`) ; ce qui manque se demande.
- **Analogies** concrètes et récurrentes, propres à chaque cours (3 à 6, listées dans « Ce cours »), toujours les mêmes d'une leçon à l'autre.
- Leçons courtes (4 à 6 cartes, 5 à 8 exercices) : une notion à la fois, exercices variés, puis mélange avec les notions précédentes.
- Exemples avec **d'autres données** que celles du cours ; les **boss** reprennent les exercices du cours tels quels **et** testent d'autres cas.
- Chaque question a une `explication` ; chaque exercice de code a des `erreursTypiques` avec le diagnostic attendu ; les difficultés propres de l'élève sont listées dans `docs/programme.md` avec l'endroit où chacune est travaillée.
- Ton : chaleureux, encourageant, jamais condescendant. Tutoiement.

## Procédures

- **Nouveau cours** : la compétence `/nouveau-cours` (supports → identité → programme validé par l'élève → modules → unités → tests → publication).
- **Nouvelle page de TP** (cours déjà créé) : lire la page et lister les exercices (si le site est bloqué, demander à l'élève de l'autoriser dans les réglages réseau ou d'envoyer la page enregistrée ; ne pas confondre la page d'accueil et les TP) ; repérer les nouvelles notions (`grep '"id"' content/unites/*.json`, `docs/programme.md`) ; créer leçons, fiches et boss ; ajouter l'unité dans `config.json` ; mettre à jour `docs/programme.md` et « Ce cours » ; lancer les trois tests.
- **Nouveau module** (PHP, SQL, terminal…) : `docs/modules.md`.
- **Amélioration du moteur** faite dans un cours : la reporter ici (mêmes fichiers `js/`, `css/`, `tools/`), relancer les tests du modèle.

## Tests

Installation (une fois) : `pip install playwright && playwright install chromium` (sinon les outils utilisent un Chromium déjà présent : variable `CHROMIUM` ou `/opt/pw-browsers`). Port : 8765 (`PORT=8790` pour en changer ; les outils refusent un port occupé par un autre site).

```bash
python3 tools/valider-contenu.py        # structure du contenu, ids, champs, liens, modules (sans navigateur, < 1 s)
python3 tools/tester-exercices.py       # dans Chromium : chaque solution passe, chaque erreur typique échoue avec le bon diagnostic,
                                        # chaque « prédire » est juste, chaque exemple tourne (--unite u02, --avertissements)
python3 tools/test-parcours.py          # tout le parcours par l'interface, défi du jour, vues, sauvegarde (--captures)
python3 tools/configurer.py             # après un changement de config.app : index.html, manifest, sw.js, icônes
```

GitHub Actions (`.github/workflows/tests.yml`) lance les trois tests à chaque push.

## Design

- Mode Duolingo de Pampre : boutons « 3D », nœuds ronds en zigzag, feuille de correction verte / rouge qui monte du bas, mascotte (un œuf souriant dans le « cadre » du cours).
- Jetons CSS dans `:root`, redéfinis pour le sombre dans `@media (prefers-color-scheme: dark)` **et** `:root[data-theme="dark"]` : toute nouvelle couleur doit exister dans les trois blocs (et `config.app.couleurs` a un bloc `clair` et un bloc `sombre`).
- Mobile d'abord (colonne de 680 px), zones tactiles ≥ 44 px, police de code à 16 px dans l'éditeur au doigt, pas de ligatures dans le code.

## Limites connues

- Deux langages exécutés : JavaScript (`code-js`) et PHP (`code-php`, un seul actif par cours) ; les autres sont des modules à ajouter (`docs/modules.md`).
- PHP : pas de vrai réseau (ni SMTP, ni MySQL) : SQLite en mémoire à la place de MariaDB, services externes simulés.
- Les exercices à réponse libre (rédiger un persona, une argumentation) ne sont pas corrigés automatiquement : les transformer en choix, classements, repérages d'erreurs, ou en grille d'auto-évaluation.
- La coloration du code suit la syntaxe du JavaScript ou du PHP selon le module actif.
