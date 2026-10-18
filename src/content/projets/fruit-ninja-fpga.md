---
title: Fruit Ninja sur FPGA
eyebrow: Électronique numérique · VHDL
summary: Le jeu Fruit Ninja recréé entièrement en matériel sur une carte FPGA DE10-Lite, avec un affichage VGA calculé en temps réel.
status: termine
role: Projet d'école
period: "2025"
context: ECE Paris
order: 12
kind: etudes
category: FPGA
stack: [VHDL, FPGA DE10-Lite, Quartus Prime Lite, VGA]
cover: "[Photo : le jeu affiché sur l'écran VGA]"
---

## Le défi

Sur un **FPGA**, on ne programme pas un processeur : on décrit directement les circuits logiques. Ici, il n'y a ni système d'exploitation ni carte graphique. Chaque pixel envoyé à l'écran et chaque règle du jeu sont des circuits décrits en **VHDL**, qui travaillent en parallèle au rythme de l'horloge.

## Ce qui a été réalisé

- **Un affichage VGA en temps réel** : la génération des signaux de synchronisation et le calcul de la couleur de chaque pixel à la volée.
- **Une boucle de jeu matérielle** organisée en **machine à états** : menu, partie, fin de partie.
- **La détection des collisions** entre la lame et les fruits.
- **La génération pseudo-aléatoire** des fruits, pour que chaque partie soit différente.

Le tout tourne sur une carte **DE10-Lite** (FPGA Intel MAX 10), développé avec **Quartus Prime Lite**. La carte, ses commandes (un capteur à ultrasons et un potentiomètre) et la sortie VGA sont rangées dans un boîtier de transport.

<!-- À vérifier : le rôle du capteur à ultrasons et du potentiomètre dans le jeu. -->
