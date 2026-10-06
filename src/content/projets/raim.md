---
title: RAIM
eyebrow: Électronique · optique · en cours
summary: Viseur holographique sur PCB maison. La V1 fonctionne ; la V2 vise un module plus compact et la correction de la parallaxe optique.
status: en-cours
statusLabel: En développement · V2
role: Projet personnel, conception de A à Z
period: Juillet 2026 → aujourd'hui
order: 2
featured: true
category: Hardware
stack: [KiCad, PCB/PCBA, C embarqué, GNSS, LoRa, Radar mmWave, Caméra IR]
cover: "[Carnet de recherche : croquis, schéma optique]"
image: ../../assets/projets/raim-cao.png
imageAlt: "Rendu CAO de RAIM : boîtier noir du viseur avec fenêtre holographique, deux antennes, boutons latéraux et connecteur magnétique"
imageFit: contain
facts:
  - { value: "V1", label: "fonctionnelle" }
  - { value: "V2", label: "en conception" }
---

> Ce projet est en cours de développement. Cette page présente la démarche et les recherches ; les schémas et le détail de la conception ne sont pas publiés.

## L'objectif

Concevoir un **viseur holographique** qui affiche directement dans la mire des informations issues de capteurs embarqués : position GNSS, télémétrie longue distance, détection radar mmWave, orientation (gyroscope), image infrarouge, avec une liaison LoRa.

## La démarche

1. **Recherche** : principes optiques des viseurs holographiques et réflexes, choix des capteurs, lecture des datasheets.
2. **Architecture** : découpage en sous-systèmes (alimentation, acquisition capteurs, calcul, affichage, radio).
3. **Électronique** : mes premières cartes, de la CAO au routage PCB puis à l'assemblage PCBA.
4. **Code embarqué** : pilotes des capteurs et fusion des données pour l'affichage.

## La V1

La première version valide le principe : les capteurs remontent leurs données et l'information s'affiche dans la mire.

## Les objectifs de la V2

- **Compacité** : réduire l'encombrement du module pour une intégration réaliste.
- **Parallaxe optique** : corriger le décalage entre l'information affichée et la cible quand l'œil n'est pas parfaitement aligné.

## Ce que j'apprends

<!-- À compléter au fil du projet. -->

Ce projet me fait passer de la théorie à une carte réelle : contraintes de routage, choix de composants disponibles, et aller-retour constant entre la documentation technique et le code.
