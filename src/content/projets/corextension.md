---
title: CoreXtension
eyebrow: Full-stack · infra · depuis 2025
summary: L'éditeur de 4 logiciels étudiants que j'ai fondé et que j'héberge moi-même, avec un compte unique pour tous les services.
status: en-ligne
statusLabel: 800+ inscrits
role: Fondateur, développeur full-stack et administrateur
period: Septembre 2025 → aujourd'hui
order: 3
featured: true
category: Logiciel
stack: [JavaScript, Node.js, React, PHP, PostgreSQL, OAuth2/OIDC, Docker, Cloudflare]
cover: "[Mosaïque de captures des applications]"
visual: corextension
facts:
  - { value: "800+", label: "utilisateurs inscrits" }
  - { value: "50+", label: "utilisateurs actifs par jour" }
  - { value: "4", label: "logiciels sous un compte unique" }
products:
  - { name: NoteXtension, desc: "Récupération, analyse et suivi des résultats académiques, via une extension navigateur et une plateforme web.", url: "https://notextension.fr" }
  - { name: LaTeXtension, desc: "Éditeur LaTeX en ligne." }
  - { name: WeSignXtension, desc: "Gestion de l'émargement." }
  - { name: PlayXtension, desc: "Plateforme de jeux." }
links:
  - { label: "corextension.fr", url: "https://corextension.fr" }
---

## Le point de départ

En tant qu'étudiant, je voulais des outils qui n'existaient pas : suivre mes résultats facilement, rédiger en LaTeX sans installation, gérer l'émargement. J'ai commencé par **NoteXtension**, puis j'ai réuni ces services sous **CoreXtension**.

## Les produits

- **NoteXtension** : une extension de navigateur (Chrome, Firefox et Edge) récupère les notes et coefficients affichés sur les plateformes de l'école. La plateforme calcule les moyennes pondérées et propose des statistiques anonymisées et des graphiques de progression.
- **LaTeXtension** : un éditeur LaTeX en ligne.
- **WeSignXtension** : la gestion de l'émargement.
- **PlayXtension** : une plateforme de jeux.

## Développement complet

Je développe l'ensemble : **back-end**, **front-end** et **extensions navigateur**, avec JavaScript, Node.js, React et PHP.

## Un compte unique

Tous les services partagent un **service d'identité OAuth2/OIDC** que j'ai mis en place : un seul compte pour se connecter partout.

## Infrastructure et sécurité

- Services **conteneurisés** avec Docker et **auto-hébergés** sur mon infrastructure, derrière Cloudflare.
- Une base **PostgreSQL isolée** par service.
- **Conformité RGPD** et travail sur le référencement (SEO).
- Projet protégé par un **dépôt e-Soleau** auprès de l'INPI.

## Les chiffres

Plus de **800 utilisateurs inscrits** et plus de **50 utilisateurs actifs par jour**.
