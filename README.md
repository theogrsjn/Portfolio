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

### CV

Le CV (`public/cv/TheoGROSJEAN_CV.pdf`) n'est pas versionné, car il contient des données personnelles et le dépôt est public.
Avant le premier build, et à chaque nouvelle version du CV, le copier sur le serveur :

```bash
scp TheoGROSJEAN_CV.pdf serveur:/chemin/vers/Portfolio/public/cv/
docker compose up -d --build
```

## Où modifier le contenu

| Quoi | Où |
|---|---|
| Nom, email, disponibilité, chiffres clés, parcours, compétences | `src/data/site.ts` |
| Pages projet (texte, chiffres, technos) | `src/content/projets/*.md` |
| Couleurs et typographie (thèmes clair et sombre) | `src/styles/global.css` |
| CV téléchargeable | `public/cv/TheoGROSJEAN_CV.pdf` |

Ajouter un projet revient à ajouter un fichier `.md` dans `src/content/projets/` :
`kind: personnel` ou `kind: etudes` choisit la section de la page Projets, et `featured: true` l'affiche aussi sur l'accueil.

### Ajouter une photo à un projet

1. Copier l'image dans `src/assets/projets/` (JPG, PNG ou WebP ; elle est redimensionnée et convertie automatiquement).
2. Dans le fichier `.md` du projet, ajouter sous `cover:` :

```yaml
image: ../../assets/projets/mon-image.jpg
imageAlt: "Description de ce que montre l'image"
imageFit: contain   # facultatif : pour un rendu CAO ou un objet sur fond blanc
```

Tant qu'un projet n'a pas d'image, une zone hachurée affiche le texte de `cover:`.
