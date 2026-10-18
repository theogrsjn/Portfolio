---
title: Reconnaissance vocale
eyebrow: IA · traitement du signal
summary: Un assistant vocal embarqué dans un boîtier imprimé en 3D, qui reconnaît des mots grâce à un réseau de neurones convolutif entraîné avec PyTorch.
status: termine
role: Projet d'école
context: Cycle ingénieur
order: 18
kind: etudes
category: IA
stack: [Python, PyTorch, CNN, MFCC, Arduino Due, Écran OLED]
cover: "[Visuel : spectrogramme ou courbes d'entraînement]"
image: ../../assets/projets/reconnaissance-vocale-boitier.jpg
imageAlt: "Le boîtier blanc de l'assistant vocal, son écran OLED affiche « Analyse MFCC… Inférence CNN… »"
imagePosition: "center 45%"
gallery:
  - { src: ../../assets/projets/reconnaissance-vocale-interieur.jpg, alt: "L'intérieur du boîtier : carte Arduino, module microphone, écran OLED et deux boutons sur une carte à pastilles, ruban de LED violet" }
---

## Le principe

Le boîtier écoute à travers son **microphone**. Le son est d'abord transformé en **coefficients MFCC**, une représentation compacte de la voix qui imite la façon dont l'oreille perçoit les fréquences. Un **réseau de neurones convolutif (CNN)** analyse ensuite ces coefficients pour reconnaître le mot prononcé.

## Ce qui a été réalisé

- **Le modèle** : préparation des enregistrements, calcul des MFCC, puis conception et entraînement du CNN avec **PyTorch**.
- **Le matériel** : une carte **Arduino Due**, un module microphone à gain réglable, un écran OLED, deux boutons et un ruban de LED, réunis sur une carte à pastilles.
- **Le boîtier** : une coque imprimée en 3D, avec une ouverture pour le micro, une fenêtre pour l'écran et des boutons intégrés.
- **L'interface** : l'écran affiche chaque étape du traitement (« Analyse MFCC… », « Inférence CNN… ») puis le résultat, et les LED réagissent à l'état de l'assistant.

<!-- À compléter : les mots reconnus, où tourne l'inférence (sur la carte ou sur un ordinateur), la précision obtenue. -->
