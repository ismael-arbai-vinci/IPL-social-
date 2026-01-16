

# IPL Social - Projet DevOps

## Informations Étudiant
- **Nom**: Arbai
- **Prénom**: Ismael
- **Email Vinci**: ismael.arbai@student.vinci.be
- **URL GitHub**: https://github.com/ismael-arbai-vinci/IPL-social-

## Description du Projet

Ce projet implémente une fonction de validation d'adresses email en TypeScript dans le cadre du cours BIMV2190 - DevOps. 

Le projet utilise une approche TDD (Test Driven Development) avec Jest comme framework de test et met en place un pipeline CI/CD via GitHub Actions.

## Structure du Projet

```
ipl-social/
├── src/
│   └── emailValidator.ts
├── tests/
│   └── emailValidator.test.ts
├── .github/
│   └── workflows/
│       └── ci.yml
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md

## Pipeline CI/CD

Le projet utilise GitHub Actions pour automatiser les tests à chaque push et pull request sur la branche `main`.

Le pipeline exécute :
1. Installation des dépendances
2. Compilation TypeScript
3. Exécution des tests unitaires
4. Vérification de la couverture de code

## Installation

```bash
npm install
```

## Exécution des Tests

Pour lancer l'exécution des tests :

```bash
npm test