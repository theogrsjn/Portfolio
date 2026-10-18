---
title: Reconnaissance vocale
eyebrow: IA · traitement du signal
summary: Un modèle de deep learning entraîné avec PyTorch pour reconnaître des mots prononcés à partir d'enregistrements audio.
status: termine
role: Projet d'école
context: Cycle ingénieur
order: 22
kind: etudes
category: IA
stack: [Python, PyTorch, Traitement du signal]
cover: "[Visuel : spectrogramme ou courbes d'entraînement]"
---

## Le principe

Un enregistrement audio est d'abord transformé en **spectrogramme**, une image qui montre l'énergie de chaque fréquence au cours du temps. Un réseau de neurones apprend ensuite à reconnaître, sur ces images, le mot qui a été prononcé.

## Ce qui a été réalisé

- **La préparation des données** : découpage et normalisation des enregistrements, calcul des spectrogrammes.
- **Le modèle** : conception et entraînement d'un réseau de neurones avec **PyTorch**.
- **L'évaluation** : mesure de la précision sur des enregistrements que le modèle n'a jamais vus.

<!-- À vérifier et compléter : jeu de données, nombre de mots reconnus, architecture du réseau, précision obtenue. -->
