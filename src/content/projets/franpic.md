---
title: PIC-MARKET
eyebrow: Embarqué · microcontrôleur PIC · 2026
summary: "Une caisse automatique de supermarché sur microcontrôleur PIC18F4550 : lecture de codes-barres, panier, carte de fidélité et paiement sans contact jusqu'à la facture."
status: termine
role: Conception du circuit sur KiCad, montage et liaison entre le matériel et le logiciel · équipe FRANPIC de 4
period: Octobre → novembre 2026
context: Module Microcontrôleurs · ING4 Systèmes embarqués · ECE Paris
order: 10.5
kind: etudes
category: Embarqué
stack: [PIC18F4550, C (XC8), EasyPIC v7, KiCad, USB HID, UART, SPI, I2C, RFID RC522, RTC DS3231, Python]
cover: "[Photo : la caisse sur la carte EasyPIC v7]"
image: ../../assets/projets/franpic-carte.jpg
imageAlt: "La carte EasyPIC v7 de la caisse PIC-MARKET, avec son écran graphique affichant « FRANPIC »"
gallery:
  - { src: ../../assets/projets/franpic-interface.png, alt: "L'application Python de la caisse : panier, articles sans code-barres, total et journal des échanges USB avec le PIC" }
  - { src: ../../assets/projets/franpic-schema-kicad.png, alt: "Le schéma KiCad de PIC-MARKET, organisé en blocs fonctionnels autour du PIC18F4550" }
facts:
  - { value: "8 bits", label: "microcontrôleur PIC18F4550" }
  - { value: "6", label: "états dans la machine à états" }
  - { value: "100", label: "messages USB consécutifs sans erreur exigés" }
---

## Le projet

PIC-MARKET reproduit toutes les étapes d'un passage en caisse automatique de supermarché. Le client scanne ses articles, voit leur prix s'afficher, peut présenter sa carte de fidélité, puis paie sans contact. Une application Python sur l'ordinateur tient le panier et édite la facture.

Le défi : faire tenir tout cela sur un **microcontrôleur 8 bits** aux ressources limitées, qui doit gérer plusieurs interfaces en parallèle et respecter des **contraintes de temps chiffrées** (par exemple, afficher le prix moins de 500 ms après un scan). Nous avons suivi un **cycle en V**, avec une spécification technique testée et validée à l'oscilloscope pour chaque comportement attendu.

## Mon rôle

Dans l'équipe FRANPIC, je me suis chargé de la **conception du circuit sous KiCad** et du **montage**, ainsi que de la **communication entre les composants matériels et le logiciel**. J'ai notamment travaillé l'adaptation des niveaux de tension entre les composants 5 V et 3,3 V.

## Le matériel

Le système est construit autour d'un **PIC18F4550** sur une carte **EasyPIC v7**, programmé en C avec le compilateur **XC8**.

- **Entrées** : un lecteur de codes-barres en **UART**, des boutons Paiement et Annuler, un lecteur **RFID RC522** en **SPI** pour les cartes de fidélité et de paiement, et une horloge temps réel **DS3231** en **I2C**.
- **Sorties** : un écran graphique **128 × 64** pour le prix et le total, des LED et un buzzer pour signaler un succès ou une erreur, et l'ordinateur relié en **USB HID**.
- **Adaptation des niveaux** : le RC522 fonctionne en 3,3 V. Ses entrées passent par des ponts diviseurs, et un régulateur fournit le 3,3 V.

## Le logiciel

- **Une machine à états** à six états : accueil, attente du PC, achat en cours, puis trois étapes de paiement (attente de la carte pendant 10 s, vérification par le PC, affichage du résultat).
- **Des interruptions** pour tout ce qui est soumis au temps : réception des codes-barres, base de temps, signal du buzzer.
- **Une liaison USB HID** avec l'application Python, qui se rétablit après une déconnexion sans redémarrer le PIC.
- **Une application Python** qui affiche le panier, gère les points de fidélité et l'historique, et édite la facture horodatée.

## Le bilan

Le système fonctionne de bout en bout : scan, affichage du prix, retours sonores et lumineux, carte de fidélité, paiement sans contact et facture. Les spécifications ont été validées par des mesures à l'oscilloscope.

Le PIC18F4550 n'a qu'un seul module SPI/I2C, partagé avec d'autres périphériques sur la carte : nous avons donc écrit le SPI et l'I2C en logiciel. Une suite logique serait un **PCB dédié** tiré de notre schéma KiCad, avec un microcontrôleur plus riche en périphériques.
