---
title: DrawBot PID
eyebrow: Robotique · asservissement
summary: Un robot mobile qui trace des formes géométriques au sol, guidé par une régulation PID et des encodeurs à effet Hall.
status: termine
role: Projet d'école
period: "2025"
context: ECE Paris
order: 13
kind: etudes
category: Robotique
stack: [ESP32, C/C++, PID, Encodeurs à effet Hall]
cover: "[Photo : le robot et une forme tracée]"
image: ../../assets/projets/drawbot-pid.jpg
imageAlt: "Le DrawBot : robot noir à deux roues bleues imprimé en 3D, avec un feutre fixé à l'avant"
imagePosition: "center 60%"
---

## Le défi

Pour dessiner un carré ou un cercle propre, un robot doit savoir exactement de combien ses roues ont tourné et corriger sa trajectoire en permanence. Sans correction, la moindre différence entre les deux moteurs fait dériver le tracé.

## Ce qui a été réalisé

- **La mesure** : des **encodeurs à effet Hall** comptent la rotation de chaque roue.
- **L'asservissement** : une **régulation PID** compare la position mesurée à la position voulue et corrige la commande des moteurs.
- **Le calcul de trajectoire** : la décomposition de chaque forme géométrique en consignes pour les roues.
- **La correction en temps réel** : le tout tourne sur un **ESP32**, programmé en C/C++.
- **Le robot** : un châssis à deux roues imprimé en 3D, avec un feutre fixé à l'avant qui trace la forme au sol.
