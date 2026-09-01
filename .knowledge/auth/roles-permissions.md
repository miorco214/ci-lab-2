# Rôles et permissions

Source principale : The Vault, The Pit (admin panel), The Industry (rôles).

## Principes
- Un rôle est une donnée sensible : le stocker au mauvais endroit crée une
  escalade de privilèges.
- Séparation des responsabilités : un compte ne cumule pas plus de droits que
  nécessaire pour sa fonction.
- Tout changement de droits est un événement auditable.

## Exigences de construction
- Les rôles sont stockés dans une **table dédiée**, jamais sur le profil ou la
  table utilisateur, et jamais dans un stockage navigateur.
- La vérification de rôle passe par une fonction serveur à privilège défini,
  utilisée par les politiques de données et par le code serveur.
- Rôles prévus pour CHRONOS INSTRU LAB (à définir formellement au moment de
  l'implantation) : visiteur, client, administrateur. Aucun rôle implicite.
- Les zones d'administration exigent une vérification de rôle explicite en plus
  de l'authentification ; une requête non autorisée ne doit pas confirmer
  l'existence de la zone.
- Toute attribution ou révocation de rôle est journalisée (qui, quoi, quand).
- Permissions minimales par défaut ; l'élévation est explicite et temporaire
  quand c'est possible.

## Pièges fréquents du code généré par IA
- Colonne `is_admin` sur la table de profil, modifiable par l'utilisateur.
- Rôle lu depuis le client et transmis au serveur.
- Politique de rôles récursive provoquant une erreur, puis RLS désactivé.
- Un seul rôle « admin » qui donne accès à tout, y compris aux données
  financières et personnelles.

## Contrôles à effectuer
- Tenter de modifier son propre rôle via chaque endpoint de mise à jour.
- Vérifier que les vérifications de rôle utilisent bien la source serveur.
- Lister les actions réservées et confirmer leur protection une par une.

## Critères d'implantation correcte
- Impossible d'obtenir un rôle par une requête utilisateur (preuve : test).
- Chaque action réservée refuse un compte non habilité.

## À vérifier dans les sources
- Modèle de rôles détaillé et audit des changements d'accès : The Vault,
  The Pit.
