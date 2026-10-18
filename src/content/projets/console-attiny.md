---
title: Mini-console ATTiny
eyebrow: Embarqué · 8 bits
summary: Une mini-console de jeu sur microcontrôleur ATtiny85, avec des jeux type Snake et Pong sur écran OLED, dans une coque imprimée en 3D.
status: termine
role: Projet d'école
period: "2024"
context: ECE Paris
order: 17
kind: etudes
category: Embarqué
stack: [ATtiny85, C/Arduino, Écran OLED, Buzzer, Impression 3D]
cover: "[Photo : la console allumée]"
---

## Le défi

L'**ATtiny85** est un microcontrôleur 8 bits minuscule à 8 broches : quelques kilo-octets de mémoire programme et quelques centaines d'octets de RAM. Faire tourner un jeu dessus oblige à compter chaque octet.

## Ce qui a été réalisé

- **Des jeux type Snake et Pong** affichés sur un **écran OLED**.
- **La lecture des boutons** et la **gestion du score**, avec des effets sonores sur un **buzzer**.
- **La coque** imprimée en 3D, qui laisse voir la puce ATtiny85.
- **L'optimisation mémoire** pour faire tenir l'affichage et la logique de jeu dans la mémoire du microcontrôleur.

Programmé en C avec l'environnement Arduino.
