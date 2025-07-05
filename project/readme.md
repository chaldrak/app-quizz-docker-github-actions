## 1. Introduction

### Objectifs de la session

* Comprendre ce qu’est le CI/CD.
* Découvrir les bases de GitHub Actions.
* Comprendre comment Docker s’intègre dans un pipeline CI/CD.
* Construire un pipeline simple : Build -> Test -> Deploy.

### Pourquoi cette session ?

De nos jours, automatiser les tests et le déploiement est essentiel. Cela permet de gagner du temps, d’éviter les erreurs humaines et de livrer plus rapidement des applications fiables.

---

## 2. Comprendre le CI/CD

### Qu’est-ce que le CI/CD ?

* **CI (Intégration Continue)** : à chaque modification du code, on exécute automatiquement des tests pour vérifier que rien ne casse.
* **CD (Livraison / Déploiement Continu)** : on automatise l’envoi du code testé vers un environnement de préproduction ou production.

### Pourquoi l’utiliser ?

* Moins de bugs.
* Livraison plus rapide.
* Équipe plus productive.

### Exemple de pipeline

```
Dev -> Push sur GitHub -> Tests -> Build -> Déploiement automatique
```

---

## 3. Notions de base sur Docker

### Pourquoi Docker ?

* Reproduire le même environnement de développement partout.
* Regrouper application + dépendances dans un conteneur.
* Facilite le déploiement sur n’importe quel serveur.

### Concepts clés

* **Image** : modèle figé d’un conteneur (comme une "photo" de l’app).
* **Conteneur** : instance en fonctionnement d’une image.
* **Dockerfile** : fichier décrivant comment construire une image.
* **Docker Hub** : registre d’images Docker (comme GitHub mais pour les images).

---

## 4. Introduction à GitHub Actions

### Qu’est-ce que GitHub Actions ?

* Système d’automatisation intégré à GitHub.
* Permet de créer des workflows (pipelines) pour tester, build et déployer automatiquement.

### Structure d’un fichier GitHub Actions

* `.github/workflows/deploy.yml`
* Composé de :

  * **events** : déclencheur (push, pull\_request, etc.)
  * **jobs** : ensemble de tâches
  * **steps** : actions à exécuter

### Exemples d’actions utiles

* `actions/checkout` : récupère le code du dépôt.
* `actions/setup-node` : configure Node.js.
* `docker/build-push-action` : build et push une image Docker.

---

## 5. Démo complète CI/CD

### Étapes de la démo

1. Créer une image Docker pour une app simple (ex: Node.js, API, etc.).
2. Écrire un Dockerfile.
3. Créer un fichier GitHub Actions pour :

   * Lancer les tests.
   * Construire l’image Docker.
   * Pousser l’image sur Docker Hub.
   * Déployer sur un VPS ou simuler localement.

### Secrets à ajouter

* `DOCKER_USERNAME`
* `DOCKER_PASSWORD`
* `SSH_PRIVATE_KEY` (pour accès à un serveur, si besoin)

---

## 6. Bonnes pratiques CI/CD

* Ne jamais stocker de mots de passe ou tokens dans le code.
* Garder les workflows simples et lisibles.
* Versionner les images Docker (ex: `monapp:1.0.0`, `monapp:latest`).
* Utiliser des étapes de validation (ex: approval manuelle en production).
* Tester d’abord en environnement de staging.

---

## 7. Questions / Réponses

### Suggestions

* Prévoir 5 à 10 minutes à la fin.
* Laisser l’audience poser des questions.
* Exemples de questions qu’on peut poser à l’audience :

  * Avez-vous déjà utilisé un pipeline CI/CD ?
  * Quelles plateformes utilisez-vous ?

---

## 8. Ressources pour aller plus loin

### Officielles

* [GitHub Actions Docs](https://docs.github.com/actions)
* [Docker Docs](https://docs.docker.com/)

### Actions GitHub populaires

* `actions/checkout`
* `actions/setup-node`
* `docker/build-push-action`

### Astuces

* Créer des workflows réutilisables.
* Tester localement ses Dockerfiles.
* Utiliser GitHub Secrets pour sécuriser ses tokens.
