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
stack: [VHDL, FPGA DE10-Lite, Quartus Prime Lite, VGA, Capteur à ultrasons, Encodeur rotatif]
cover: "[Photo : le jeu affiché sur l'écran VGA]"
image: ../../assets/projets/fruit-ninja-fpga.jpg
imageAlt: "La carte FPGA DE10-Lite dans son boîtier de transport, avec le capteur à ultrasons, l'encodeur rotatif, la sortie VGA et les câbles"
imagePosition: "center 25%"
---

## Le défi

Sur un **FPGA**, on ne programme pas un processeur : on décrit directement les circuits logiques. Ici, il n'y a ni système d'exploitation ni carte graphique. Chaque pixel envoyé à l'écran et chaque règle du jeu sont des circuits décrits en **VHDL**, qui travaillent en parallèle au rythme de l'horloge.

## Ce qui a été réalisé

- **Un affichage VGA en temps réel** : la génération des signaux de synchronisation et le calcul de la couleur de chaque pixel à la volée.
- **Une boucle de jeu matérielle** organisée en **machine à états** : menu, partie, fin de partie.
- **La détection des collisions** entre la ligne de coupe et les fruits.
- **La génération pseudo-aléatoire** des fruits, pour que chaque partie soit différente.

## Les commandes

Pas de souris ni de manette : le joueur pilote une **ligne de coupe** avec des capteurs câblés directement sur la carte.

- **Un capteur à ultrasons** mesure la distance de la main et déplace la ligne de coupe en hauteur.
- **Un encodeur rotatif** règle l'inclinaison de la ligne.
- **Le clic de l'encodeur** déclenche la coupe.

Le FPGA lit ces capteurs en parallèle du reste du jeu : mesure du temps d'écho des ultrasons, décodage des impulsions de l'encodeur.

## Le matériel

Le tout tourne sur une carte **DE10-Lite** (FPGA Intel MAX 10), développé avec **Quartus Prime Lite**. La carte, ses commandes et la sortie VGA sont rangées dans un boîtier de transport.
