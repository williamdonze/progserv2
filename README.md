# Modèle : une appli façon Duolingo pour chaque cours

Un moteur d'apprentissage prêt à l'emploi : leçons de 5 minutes, 23 types d'exercices, XP, séries de jours, badges, défi du jour, révisions espacées, fiches de théorie, mode sombre, appli installable sur téléphone et utilisable hors connexion. Pour les cours de programmation : du vrai code exécuté et testé dans le navigateur, avec les erreurs expliquées en français.

Issu de [Pampre](https://github.com/williamdonze/pampre) (le vin) et de [ProgWeb 2](https://github.com/williamdonze/progweb2) (JavaScript).

## Créer l'appli d'un nouveau cours

1. Sur GitHub, en haut de ce dépôt : **Use this template → Create a new repository** (par exemple `cours-php`).
2. Ouvre une session Claude Code sur le nouveau dépôt.
3. Tape **`/nouveau-cours`** et envoie les supports du cours (zip des pages d'exercices, slides, PDF, lien du site).
4. Claude te propose un nom, une mascotte et un programme d'unités ; tu valides ; il écrit les unités, les teste, et pousse.
5. Mise en ligne : **Settings → Pages → Deploy from a branch → `main`, `/ (root)`**. Le site est à `https://<ton-compte>.github.io/<dépôt>/`.

Pour un nouveau TP plus tard : envoie la page du TP en disant « voici la nouvelle page de TP ».

## Ce qu'il y a dedans

- **`content/`** : tout le contenu, en JSON (une unité par fichier). La section `app` de `content/config.json` règle le nom, la mascotte, les couleurs et les **modules** (`code-js` pour du JavaScript, `dom` pour des pages web, aucun pour un cours sans code).
- Deux **unités d'exemple** : « Bien apprendre » (un cours sans code, avec un boss « étude de cas ») et « Catalogue des exercices » (un exemple de chaque type). Elles sont retirées quand on crée un vrai cours.
- **`docs/format-contenu.md`** : la référence du format. **`docs/modules.md`** : ajouter un langage (PHP, SQL…) ou un terminal simulé.

## Lancer et tester

```bash
python3 -m http.server 8765                    # puis http://localhost:8765/
pip install playwright && playwright install chromium   # une fois, pour les tests
python3 tools/valider-contenu.py && python3 tools/tester-exercices.py && python3 tools/test-parcours.py
python3 tools/configurer.py                    # après avoir changé le nom, la mascotte ou les couleurs
```
