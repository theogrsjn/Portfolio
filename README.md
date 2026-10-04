# theogrsjn.fr

Portfolio de Théo Grosjean, construit avec [Astro](https://astro.build) (site 100 % statique) et servi par nginx dans un conteneur Docker.

## Développement

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # vérification des types + génération dans dist/
```

## Déploiement (Docker)

```bash
docker compose up -d --build
```

Le site écoute sur le port `8080` de l'hôte (modifiable avec la variable `PORTFOLIO_PORT`, par exemple dans un fichier `.env`).
Le reverse proxy ou le tunnel Cloudflare du domaine `theogrsjn.fr` pointe ensuite vers ce port.

Le conteneur tourne sans root, en lecture seule et sans capacités Linux. Les en-têtes de sécurité (CSP, X-Frame-Options…)
sont définis dans `docker/security-headers.conf`.

Mise à jour du site : `git pull && docker compose up -d --build`.

## Où modifier le contenu

| Quoi | Où |
|---|---|
| Nom, email, disponibilité, chiffres clés, parcours, compétences | `src/data/site.ts` |
| Pages projet (texte, chiffres, technos) | `src/content/projets/*.md` |
| Couleurs et typographie (thèmes clair et sombre) | `src/styles/global.css` |
| CV téléchargeable | `public/cv/TheoGROSJEAN_CV.pdf` |

Ajouter un projet revient à ajouter un fichier `.md` dans `src/content/projets/` (avec `featured: true` pour l'afficher sur l'accueil).
Les zones hachurées sont des emplacements d'images à remplacer par de vraies photos.
