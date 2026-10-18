---
title: ECEPILOT
eyebrow: Robotique · embarqué · en cours
summary: Un rover piloté par une télécommande que nous avons conçue, avec un LiDAR qui déclenche l'arrêt d'urgence. Le semestre 1 est terminé ; le semestre 2 passera à la navigation sous ROS 2.
status: en-cours
statusLabel: Semestre 2 à venir
role: Membre d'une équipe de 4
period: Septembre 2026 → aujourd'hui
context: Projet technique ING4 Systèmes embarqués · ECE Paris
order: 10
kind: etudes
category: Robotique
stack: [ESP32, ATmega328P, ESP-01S, KiCad, LiDAR, IMU, Wi-Fi, Python, Impression 3D]
cover: "[Photo : le rover et la télécommande sur PCB]"
image: ../../assets/projets/ecepilot-mallette.jpg
imageAlt: "Le rover avec son LiDAR et la télécommande rangés dans leur mallette de transport"
imagePosition: "center 60%"
gallery:
  - { src: ../../assets/projets/ecepilot-telecommande.jpg, alt: "La télécommande tenue en main : coque noire imprimée en 3D, joystick et écran OLED affichant la position du joystick et la vitesse" }
facts:
  - { value: "2", label: "cœurs de l'ESP32 exploités en parallèle" }
  - { value: "1", label: "PCB de télécommande conçu et fabriqué" }
  - { value: "S2", label: "navigation sous ROS 2, à venir" }
---

## Le projet

ECEPILOT est le projet technique de l'année d'ING4 Systèmes embarqués. Au sein d'une équipe de quatre, nous construisons un **véhicule connecté** sur la base d'un rover Waveshare : d'abord piloté à distance, puis de plus en plus autonome. Le projet suit un cycle en V, avec trois soutenances au premier semestre.

## Semestre 1 : le pilotage à distance (terminé)

### Une télécommande sur notre propre PCB

La télécommande est une carte que nous avons dessinée sous KiCad puis fabriquée au FabLab. Elle réunit un **ATmega328P** pour la logique et un module **ESP-01S** pour le Wi-Fi, avec un joystick, quatre boutons, un écran OLED, une LED RGB et un buzzer, le tout dans une coque ergonomique imprimée en 3D.

Le cahier des charges imposait un **PCB simple face** de 100 × 100 mm maximum, avec au plus 8 straps : il a fallu soigner le placement des composants pour router presque toutes les pistes sur une seule couche.

### Le rover

À bord du rover, un **ESP32** reçoit les commandes en Wi-Fi. Ses deux cœurs travaillent en parallèle :

- un cœur pilote les moteurs à partir des commandes de la télécommande ;
- l'autre lit le **LiDAR** et envoie le nuage de points à une interface graphique Python sur l'ordinateur, qui affiche ce que « voit » le rover.

### Sécurité et retours d'information

- **Arrêt d'urgence** : quand le LiDAR détecte un obstacle trop proche, le rover s'arrête, et cette consigne passe avant les commandes de la télécommande. La LED passe au rouge et le buzzer sonne.
- **Vitesse** : une centrale inertielle (IMU) embarquée mesure la vitesse du rover, affichée sur l'écran OLED de la télécommande.
- **Qualité du lien** : la force du signal Wi-Fi s'affiche sur l'écran ; la LED est bleue pendant la connexion et verte une fois connectée.

## Semestre 2 : vers l'autonomie avec ROS 2 (à venir)

Le second semestre ajoutera la **perception** et le **calcul de trajectoire** sous **ROS 2**. Cette phase n'a pas encore commencé.

<!-- À compléter : résultats des soutenances, temps au chrono, photos du PCB et du rover, ta part précise dans l'équipe. -->
