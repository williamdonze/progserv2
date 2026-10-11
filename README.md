# ProgServ2

L'appli de révision du cours **Programmation serveur 2 (ProgServ2)** de la HEIG-VD, façon Duolingo : on révise le PHP ensemble, des rappels jusqu'aux sessions et aux e-mails, avec Elly, l'éléphant de PHP.

**Le site** : https://williamdonze.github.io/progserv2/ (après la mise en ligne, voir plus bas).

- **11 unités**, une par séance : rappels de PHP, classes et objets, héritage et interfaces, formulaires et PDO, parties d'interface, sécurité des saisies, cookies et i18n, sessions et authentification, **examen blanc** (pour l'évaluation du 25.11.2026), POO avancée (namespaces, autoloader, traits), e-mails.
- Des leçons de 5 minutes, des fiches de théorie, des jeux, des quiz, et des **boss** : les exercices du cours, tels quels, plus d'autres cas.
- Du **vrai PHP 8.3**, exécuté dans le navigateur (WebAssembly) : formulaires, cookies et sessions simulés, PDO avec SQLite, erreurs expliquées en français. Jamais la solution : trois indices progressifs.
- XP, séries de jours, badges, défi du jour, révisions espacées, mode sombre ; s'installe sur le téléphone et marche hors connexion.

Contenu tiré des supports du cours de L. Delafontaine ([heig-vd-progserv2-course](https://github.com/heig-vd-progserv-course/heig-vd-progserv2-course), licence CC BY-SA 4.0), copiés dans `docs/cours/`. Construit à partir du modèle d'appli de cours façon Duolingo (issu de [Pampre](https://github.com/williamdonze/pampre) et de [ProgWeb 2](https://github.com/williamdonze/progweb2)).

## Mettre en ligne

Sur GitHub : **Settings → Pages → Build and deployment → Deploy from a branch → `main`, `/ (root)` → Save**. Le site est ensuite à https://williamdonze.github.io/progserv2/.

## Ajouter une séance

Envoie la nouvelle page de TP (ou le zip des supports) à Claude Code en disant « voici la nouvelle page de TP » : la procédure est dans `CLAUDE.md`.

## Lancer et tester

```bash
python3 -m http.server 8765                    # puis http://localhost:8765/
pip install playwright && playwright install chromium   # une fois, pour les tests
python3 tools/valider-contenu.py && python3 tools/tester-exercices.py && python3 tools/test-parcours.py
python3 tools/configurer.py                    # après avoir changé le nom, la mascotte ou les couleurs
```

- `content/` : tout le contenu, en JSON (une unité par fichier) ; `docs/format-contenu.md` : la référence du format ; `docs/programme.md` : le programme et les difficultés travaillées.
- `js/php.js` et `js/vendor/php-wasm/` : le module PHP (PHP compilé en WebAssembly, [@php-wasm/web](https://github.com/WordPress/wordpress-playground), licence GPL) ; voir `docs/modules.md`.
