export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: 'Docker' | 'GitHub Actions' | 'CI/CD';
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Quelle commande Docker permet de créer une image à partir d'un Dockerfile ?",
    options: ["docker create", "docker build", "docker make", "docker generate"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 2,
    question: "Quel fichier configure les actions GitHub ?",
    options: [".github/workflows/main.yml", ".github/actions.yml", ".workflows/main.yml", ".github/config.yml"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 3,
    question: "Que signifie CI/CD ?",
    options: ["Continuous Integration/Continuous Deployment", "Code Integration/Code Deployment", "Continuous Improvement/Continuous Development", "Code Inspection/Code Distribution"],
    correctAnswer: 0,
    category: "CI/CD"
  },
  {
    id: 4,
    question: "Quelle commande Docker permet de lister les conteneurs en cours d'exécution ?",
    options: ["docker list", "docker ps", "docker show", "docker containers"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 5,
    question: "Dans GitHub Actions, comment appelle-t-on une unité de travail ?",
    options: ["Task", "Job", "Step", "Action"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 6,
    question: "Quel est l'avantage principal de Docker ?",
    options: ["Sécurité renforcée", "Isolation des applications", "Vitesse d'exécution", "Réduction des coûts"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 7,
    question: "Quelle syntaxe déclenche une GitHub Action sur un push ?",
    options: ["on: push", "trigger: push", "event: push", "when: push"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 8,
    question: "Qu'est-ce qu'un pipeline CI/CD ?",
    options: ["Un serveur de déploiement", "Un processus automatisé de build et déploiement", "Un outil de monitoring", "Un système de versioning"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 9,
    question: "Quelle commande Docker permet de télécharger une image ?",
    options: ["docker download", "docker pull", "docker get", "docker fetch"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 10,
    question: "Dans GitHub Actions, que fait 'uses' ?",
    options: ["Définit une variable", "Utilise une action prédéfinie", "Spécifie un environnement", "Configure un secret"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 11,
    question: "Quel port Docker expose-t-il par défaut ?",
    options: ["8080", "3000", "80", "Aucun par défaut"],
    correctAnswer: 3,
    category: "Docker"
  },
  {
    id: 12,
    question: "Qu'est-ce que la containerisation ?",
    options: ["Un système de stockage", "L'empaquetage d'applications avec leurs dépendances", "Un protocole réseau", "Un système de bases de données"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 13,
    question: "Quel événement GitHub Actions peut déclencher un workflow ?",
    options: ["pull_request", "issue_comment", "schedule", "Tous les précédents"],
    correctAnswer: 3,
    category: "GitHub Actions"
  },
  {
    id: 14,
    question: "Qu'est-ce qu'un artefact dans CI/CD ?",
    options: ["Un bug", "Un fichier de configuration", "Un produit de build", "Un test unitaire"],
    correctAnswer: 2,
    category: "CI/CD"
  },
  {
    id: 15,
    question: "Quelle commande Docker permet de supprimer un conteneur ?",
    options: ["docker delete", "docker rm", "docker remove", "docker destroy"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 16,
    question: "Dans GitHub Actions, où sont stockés les secrets ?",
    options: ["Dans le code", "Dans les paramètres du repository", "Dans un fichier .env", "Dans le README"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 17,
    question: "Qu'est-ce que le blue-green deployment ?",
    options: ["Une stratégie de couleur", "Une méthode de déploiement avec deux environnements", "Un type de test", "Un framework"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 18,
    question: "Quelle instruction Dockerfile copie des fichiers ?",
    options: ["COPY", "ADD", "MOVE", "Les deux premières"],
    correctAnswer: 3,
    category: "Docker"
  },
  {
    id: 19,
    question: "Quel runner GitHub Actions est gratuit pour les projets publics ?",
    options: ["windows-latest", "ubuntu-latest", "macos-latest", "Tous les précédents"],
    correctAnswer: 3,
    category: "GitHub Actions"
  },
  {
    id: 20,
    question: "Qu'est-ce que l'intégration continue ?",
    options: ["Déploiement automatique", "Fusion fréquente de code avec tests", "Monitoring en temps réel", "Sauvegarde automatique"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 21,
    question: "Quelle commande Docker permet de voir les logs d'un conteneur ?",
    options: ["docker logs", "docker show", "docker print", "docker output"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 22,
    question: "Dans GitHub Actions, que fait 'runs-on' ?",
    options: ["Définit la durée d'exécution", "Spécifie l'environnement d'exécution", "Configure les permissions", "Définit les dépendances"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 23,
    question: "Qu'est-ce qu'un rollback en CI/CD ?",
    options: ["Une mise à jour", "Un retour à une version précédente", "Un test de performance", "Une sauvegarde"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 24,
    question: "Quelle instruction Dockerfile définit le point d'entrée ?",
    options: ["RUN", "CMD", "ENTRYPOINT", "START"],
    correctAnswer: 2,
    category: "Docker"
  },
  {
    id: 25,
    question: "Quel est le format de fichier pour GitHub Actions ?",
    options: ["JSON", "YAML", "XML", "TOML"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 26,
    question: "Qu'est-ce que Docker Compose ?",
    options: ["Un éditeur de Dockerfile", "Un outil pour orchestrer plusieurs conteneurs", "Un registry Docker", "Un système de monitoring"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 27,
    question: "Dans GitHub Actions, comment passer des données entre jobs ?",
    options: ["Variables d'environnement", "Artefacts", "Secrets", "Paramètres"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 28,
    question: "Qu'est-ce qu'un pipeline en CI/CD ?",
    options: ["Un serveur", "Une séquence d'étapes automatisées", "Un outil de test", "Une base de données"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 29,
    question: "Quelle commande Docker permet de démarrer un conteneur ?",
    options: ["docker start", "docker run", "docker exec", "docker launch"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 30,
    question: "Dans GitHub Actions, que fait 'with' ?",
    options: ["Définit une condition", "Passe des paramètres à une action", "Configure l'environnement", "Spécifie les permissions"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 31,
    question: "Qu'est-ce que le déploiement continu ?",
    options: ["Tests automatisés", "Déploiement automatique en production", "Monitoring continu", "Intégration de code"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 32,
    question: "Quelle instruction Dockerfile installe des paquets ?",
    options: ["INSTALL", "ADD", "RUN", "GET"],
    correctAnswer: 2,
    category: "Docker"
  },
  {
    id: 33,
    question: "Quel est le timeout par défaut pour un job GitHub Actions ?",
    options: ["30 minutes", "1 heure", "6 heures", "Pas de limite"],
    correctAnswer: 2,
    category: "GitHub Actions"
  },
  {
    id: 34,
    question: "Qu'est-ce qu'un environnement de staging ?",
    options: ["Production", "Développement", "Test avant production", "Sauvegarde"],
    correctAnswer: 2,
    category: "CI/CD"
  },
  {
    id: 35,
    question: "Quelle commande Docker permet de créer un réseau ?",
    options: ["docker network create", "docker create network", "docker net create", "docker make network"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 36,
    question: "Dans GitHub Actions, que fait 'if' ?",
    options: ["Définit une boucle", "Ajoute une condition", "Configure un timer", "Spécifie un environnement"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 37,
    question: "Qu'est-ce que la livraison continue ?",
    options: ["Déploiement automatique", "Préparation automatique pour déploiement", "Tests continus", "Monitoring"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 38,
    question: "Quelle commande Docker permet de voir les images ?",
    options: ["docker images", "docker list", "docker show", "docker display"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 39,
    question: "Dans GitHub Actions, que fait 'needs' ?",
    options: ["Définit les dépendances entre jobs", "Configure les permissions", "Spécifie les ressources", "Définit les variables"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 40,
    question: "Qu'est-ce qu'un test de régression ?",
    options: ["Test de performance", "Test pour vérifier qu'aucune fonctionnalité n'est cassée", "Test de sécurité", "Test d'intégration"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 41,
    question: "Quelle instruction Dockerfile expose un port ?",
    options: ["PORT", "EXPOSE", "OPEN", "LISTEN"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 42,
    question: "Quel est le marketplace pour GitHub Actions ?",
    options: ["GitHub Store", "Actions Hub", "GitHub Marketplace", "Actions Store"],
    correctAnswer: 2,
    category: "GitHub Actions"
  },
  {
    id: 43,
    question: "Qu'est-ce que DevOps ?",
    options: ["Un outil", "Une philosophie de collaboration Dev/Ops", "Un langage", "Un framework"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 44,
    question: "Quelle commande Docker permet de supprimer une image ?",
    options: ["docker rmi", "docker rm image", "docker delete", "docker remove"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 45,
    question: "Dans GitHub Actions, que fait 'strategy' ?",
    options: ["Définit une stratégie de déploiement", "Configure une matrice de tests", "Spécifie les permissions", "Définit les timeouts"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 46,
    question: "Qu'est-ce qu'un webhook ?",
    options: ["Un test automatique", "Un mécanisme de notification HTTP", "Un type de déploiement", "Un outil de monitoring"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 47,
    question: "Quelle commande Docker permet d'entrer dans un conteneur ?",
    options: ["docker enter", "docker exec", "docker shell", "docker connect"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 48,
    question: "Dans GitHub Actions, que fait 'env' ?",
    options: ["Définit l'environnement d'exécution", "Configure les variables d'environnement", "Spécifie les permissions", "Définit les dépendances"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 49,
    question: "Qu'est-ce que l'Infrastructure as Code ?",
    options: ["Écriture de code", "Gestion d'infrastructure via code", "Tests automatisés", "Déploiement manuel"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 50,
    question: "Quelle instruction Dockerfile définit le répertoire de travail ?",
    options: ["WORKDIR", "CD", "DIR", "FOLDER"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 51,
    question: "Dans GitHub Actions, que fait 'continue-on-error' ?",
    options: ["Ignore les erreurs", "Permet au job de continuer malgré les erreurs", "Affiche les erreurs", "Corrige les erreurs"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 52,
    question: "Qu'est-ce que le monitoring en CI/CD ?",
    options: ["Tests unitaires", "Surveillance des applications en production", "Gestion des versions", "Compilation du code"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 53,
    question: "Quelle commande Docker permet de créer un volume ?",
    options: ["docker volume create", "docker create volume", "docker make volume", "docker new volume"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 54,
    question: "Dans GitHub Actions, que fait 'timeout-minutes' ?",
    options: ["Définit le délai d'attente", "Configure la fréquence", "Spécifie la durée", "Définit les pauses"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 55,
    question: "Qu'est-ce qu'un test unitaire ?",
    options: ["Test d'intégration", "Test d'une unité de code isolée", "Test de performance", "Test manuel"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 56,
    question: "Quelle commande Docker permet de voir l'utilisation des ressources ?",
    options: ["docker stats", "docker info", "docker status", "docker resources"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 57,
    question: "Dans GitHub Actions, que fait 'permissions' ?",
    options: ["Configure les droits d'accès", "Définit les utilisateurs", "Spécifie les rôles", "Configure la sécurité"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 58,
    question: "Qu'est-ce que le feature flagging ?",
    options: ["Gestion des versions", "Activation/désactivation de fonctionnalités", "Tests automatisés", "Déploiement"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 59,
    question: "Quelle instruction Dockerfile permet de définir des variables ?",
    options: ["VAR", "ENV", "SET", "DEFINE"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 60,
    question: "Dans GitHub Actions, que fait 'defaults' ?",
    options: ["Définit les valeurs par défaut", "Configure les permissions", "Spécifie les environnements", "Définit les timeouts"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 61,
    question: "Qu'est-ce que le shift-left testing ?",
    options: ["Tests en fin de cycle", "Tests précoces dans le cycle de développement", "Tests manuels", "Tests de régression"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 62,
    question: "Quelle commande Docker permet de copier des fichiers ?",
    options: ["docker copy", "docker cp", "docker transfer", "docker move"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 63,
    question: "Dans GitHub Actions, que fait 'concurrency' ?",
    options: ["Configure la parallélisation", "Définit les limites d'exécution", "Spécifie les ressources", "Configure les permissions"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 64,
    question: "Qu'est-ce que le canary deployment ?",
    options: ["Déploiement complet", "Déploiement progressif sur un sous-ensemble", "Déploiement de test", "Déploiement manuel"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 65,
    question: "Quelle commande Docker permet de redémarrer un conteneur ?",
    options: ["docker restart", "docker reboot", "docker reload", "docker refresh"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 66,
    question: "Dans GitHub Actions, que fait 'outputs' ?",
    options: ["Définit les sorties d'un job", "Configure les logs", "Spécifie les artefacts", "Définit les variables"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 67,
    question: "Qu'est-ce que la containerisation native cloud ?",
    options: ["Docker standard", "Conteneurs optimisés pour le cloud", "Virtualisation", "Orchestration"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 68,
    question: "Quelle commande Docker permet de voir l'historique d'une image ?",
    options: ["docker history", "docker log", "docker info", "docker trace"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 69,
    question: "Dans GitHub Actions, que fait 'matrix' ?",
    options: ["Configure les tests en parallèle", "Définit les environnements", "Spécifie les versions", "Toutes les réponses"],
    correctAnswer: 3,
    category: "GitHub Actions"
  },
  {
    id: 70,
    question: "Qu'est-ce que l'orchestration de conteneurs ?",
    options: ["Création de conteneurs", "Gestion automatisée de conteneurs", "Suppression de conteneurs", "Monitoring"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 71,
    question: "Quelle commande Docker permet de taguer une image ?",
    options: ["docker tag", "docker label", "docker name", "docker mark"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 72,
    question: "Dans GitHub Actions, que fait 'cache' ?",
    options: ["Stocke temporairement des données", "Configure la mémoire", "Spécifie les dépendances", "Définit les performances"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 73,
    question: "Qu'est-ce que GitOps ?",
    options: ["Outil Git", "Pratique de déploiement via Git", "Interface Git", "Extension Git"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 74,
    question: "Quelle commande Docker permet de publier une image ?",
    options: ["docker push", "docker publish", "docker upload", "docker deploy"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 75,
    question: "Dans GitHub Actions, que fait 'workflow_dispatch' ?",
    options: ["Déclenche automatiquement", "Permet le déclenchement manuel", "Configure les permissions", "Définit les horaires"],
    correctAnswer: 1,
    category: "GitHub Actions"
  },
  {
    id: 76,
    question: "Qu'est-ce que le chaos engineering ?",
    options: ["Tests de destruction", "Tests de résilience en production", "Tests de performance", "Tests unitaires"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 77,
    question: "Quelle commande Docker permet de sauvegarder une image ?",
    options: ["docker save", "docker export", "docker backup", "docker archive"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 78,
    question: "Dans GitHub Actions, que fait 'workflow_call' ?",
    options: ["Appelle un autre workflow", "Démarre un workflow", "Configure un workflow", "Arrête un workflow"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 79,
    question: "Qu'est-ce que l'observabilité ?",
    options: ["Monitoring simple", "Capacité à comprendre l'état interne via les outputs", "Tests automatisés", "Déploiement"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 80,
    question: "Quelle commande Docker permet de charger une image ?",
    options: ["docker load", "docker import", "docker restore", "docker unpack"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 81,
    question: "Dans GitHub Actions, que fait 'repository_dispatch' ?",
    options: ["Déclenche via API", "Configure le repository", "Définit les permissions", "Spécifie les branches"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 82,
    question: "Qu'est-ce que le shift-right testing ?",
    options: ["Tests en début de cycle", "Tests en production", "Tests manuels", "Tests unitaires"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 83,
    question: "Quelle commande Docker permet de voir les processus d'un conteneur ?",
    options: ["docker ps", "docker top", "docker processes", "docker status"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 84,
    question: "Dans GitHub Actions, que fait 'schedule' ?",
    options: ["Planifie l'exécution", "Configure les horaires", "Définit les récurrences", "Toutes les réponses"],
    correctAnswer: 3,
    category: "GitHub Actions"
  },
  {
    id: 85,
    question: "Qu'est-ce que la progressive delivery ?",
    options: ["Déploiement progressif avec contrôle", "Déploiement rapide", "Déploiement manuel", "Déploiement de test"],
    correctAnswer: 0,
    category: "CI/CD"
  },
  {
    id: 86,
    question: "Quelle commande Docker permet de voir les modifications d'un conteneur ?",
    options: ["docker diff", "docker changes", "docker delta", "docker compare"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 87,
    question: "Dans GitHub Actions, que fait 'pull_request_target' ?",
    options: ["Déclenche sur PR avec permissions élevées", "Configure les PR", "Définit les reviewers", "Spécifie les branches"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 88,
    question: "Qu'est-ce que le Site Reliability Engineering (SRE) ?",
    options: ["Tests de sécurité", "Pratique d'ingénierie pour la fiabilité", "Monitoring", "Déploiement"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 89,
    question: "Quelle commande Docker permet de créer une image à partir d'un conteneur ?",
    options: ["docker commit", "docker create", "docker build", "docker make"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 90,
    question: "Dans GitHub Actions, que fait 'release' ?",
    options: ["Déclenche sur publication de release", "Crée une release", "Configure les tags", "Définit les versions"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 91,
    question: "Qu'est-ce que la continuous verification ?",
    options: ["Tests continus", "Vérification continue de la qualité", "Monitoring", "Déploiement"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 92,
    question: "Quelle commande Docker permet de voir les événements ?",
    options: ["docker events", "docker logs", "docker monitor", "docker watch"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 93,
    question: "Dans GitHub Actions, que fait 'workflow_run' ?",
    options: ["Déclenche après un autre workflow", "Exécute un workflow", "Configure un workflow", "Arrête un workflow"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 94,
    question: "Qu'est-ce que le testing in production ?",
    options: ["Tests avant production", "Tests directement en production", "Tests de régression", "Tests unitaires"],
    correctAnswer: 1,
    category: "CI/CD"
  },
  {
    id: 95,
    question: "Quelle commande Docker permet de nettoyer le système ?",
    options: ["docker clean", "docker system prune", "docker cleanup", "docker remove"],
    correctAnswer: 1,
    category: "Docker"
  },
  {
    id: 96,
    question: "Dans GitHub Actions, que fait 'check_suite' ?",
    options: ["Déclenche sur check suite", "Configure les checks", "Définit les validations", "Spécifie les tests"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 97,
    question: "Qu'est-ce que la policy as code ?",
    options: ["Gestion des politiques via code", "Tests automatisés", "Déploiement", "Monitoring"],
    correctAnswer: 0,
    category: "CI/CD"
  },
  {
    id: 98,
    question: "Quelle commande Docker permet de voir la configuration ?",
    options: ["docker info", "docker config", "docker show", "docker settings"],
    correctAnswer: 0,
    category: "Docker"
  },
  {
    id: 99,
    question: "Dans GitHub Actions, que fait 'check_run' ?",
    options: ["Déclenche sur check run", "Exécute un check", "Configure les checks", "Définit les validations"],
    correctAnswer: 0,
    category: "GitHub Actions"
  },
  {
    id: 100,
    question: "Qu'est-ce que la continuous security ?",
    options: ["Sécurité continue intégrée au pipeline", "Tests de sécurité", "Monitoring", "Déploiement sécurisé"],
    correctAnswer: 0,
    category: "CI/CD"
  }
];