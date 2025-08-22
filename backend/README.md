# FORCA App Backend (MVP)

Backend Node.js + PostgreSQL pour FORCA App – Produit Minimum Viable.

## Démarrage rapide

```bash
cd backend
npm install
cp .env.example .env
# Modifier .env avec vos infos Postgres et secret JWT
npm run dev
```

## Structure

- `/controllers` : logique métier par entité (auth, user, mission)
- `/models` : modèles Sequelize (PostgreSQL)
- `/routes` : endpoints Express
- `/middlewares` : middlewares de sécurité/auth
- `/utils` : outils JWT, hash, etc.

## Endpoints principaux (MVP)

- **POST /api/auth/register** : Inscription (freelance/client)
- **POST /api/auth/login** : Connexion (JWT)
- **GET /api/users/me** : Profil utilisateur connecté (JWT)
- **GET /api/users/:id** : Profil public utilisateur
- **POST /api/missions** : Dépôt d’une mission (client)
- **GET /api/missions** : Liste des missions disponibles
- **GET /api/missions/:id** : Détail d’une mission

## Respect du périmètre MVP

Aucune route API n’est exposée pour les modules non prioritaires (formations, microservices, etc.) à ce stade.

---