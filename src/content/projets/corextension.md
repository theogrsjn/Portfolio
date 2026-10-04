---
title: CoreXtension
eyebrow: Full-stack · infra · depuis 2025
summary: Le groupe de logiciels étudiants que j'ai fondé et que j'héberge moi-même, avec un compte unique pour tous les services.
status: en-ligne
statusLabel: 600+ inscrits
role: Fondateur, développeur full-stack et administrateur
period: Septembre 2025 → aujourd'hui
order: 3
featured: true
category: Logiciel
stack: [JavaScript, PHP, PostgreSQL, OAuth2/OIDC, Docker, Extensions navigateur]
cover: "[Mosaïque de captures des applications]"
facts:
  - { value: "600+", label: "utilisateurs inscrits" }
  - { value: "35+", label: "actifs par jour sur NoteXtension" }
  - { value: "5", label: "sites conteneurisés et auto-hébergés" }
products:
  - { name: NoteXtension, desc: "Récupération, analyse et suivi des notes des étudiants du groupe OMNES, via une extension Chrome et Firefox et une plateforme web.", url: "https://notextension.fr" }
  - { name: LaTeXtension, desc: "Éditeur LaTeX en ligne." }
  - { name: Émargement, desc: "Gestion des feuilles de présence." }
  - { name: Jeux, desc: "Plateforme de jeux." }
links:
  - { label: "corextension.fr", url: "https://corextension.fr" }
---

## Le point de départ

En tant qu'étudiant, je voulais des outils qui n'existaient pas : suivre mes notes et mes moyennes facilement, rédiger en LaTeX sans installation, gérer l'émargement. J'ai commencé par **NoteXtension**, puis j'ai réuni ces services sous **CoreXtension**.

## Les produits

- **NoteXtension** : une extension de navigateur (Chrome et Firefox) récupère les notes et coefficients affichés sur les plateformes de l'école. La plateforme calcule les moyennes pondérées et propose des statistiques anonymisées et des graphiques de progression.
- **LaTeXtension** : un éditeur LaTeX en ligne.
- **Émargement** : la gestion des feuilles de présence.
- **Jeux** : une plateforme de jeux.

<!-- À compléter : une ou deux phrases de plus par produit, avec captures. -->

## Un compte unique

Tous les services partagent un **service d'identité OAuth2/OIDC** que j'ai mis en place : un seul compte pour se connecter partout.

## Infrastructure et sécurité

- Sites **conteneurisés** avec Docker et **auto-hébergés** sur mon infrastructure.
- Une base **PostgreSQL isolée** par service.
- **Conformité RGPD** et travail sur le référencement (SEO).
- Projet protégé par un **dépôt e-Soleau** auprès de l'INPI.

## Les chiffres

Plus de **600 utilisateurs inscrits**, et plus de **35 utilisateurs actifs par jour** sur NoteXtension (relevé du 11/08/2026).
