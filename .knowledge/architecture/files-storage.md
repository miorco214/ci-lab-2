# Fichiers et storage

Source principale : The Vault (storage, URLs signées), The Mastery.

## Principes
- Un fichier privé stocké dans un bucket public est un fichier public, quelle
  que soit l'interface qui l'entoure.
- L'URL d'un fichier n'est pas un contrôle d'accès : une URL longue reste
  partageable et indexable.
- Le contrôle d'accès aux fichiers appartient au serveur, au moment de la
  demande.

## Exigences de construction (pour les fonctionnalités futures)
- Buckets privés par défaut ; buckets publics réservés aux ressources
  réellement publiques (visuels marketing, illustrations).
- Les fichiers vendables (masters, stems, WAV) ne sont jamais servis
  directement : génération d'une URL signée à durée courte, après vérification
  du droit d'accès de l'utilisateur.
- Les prévisualisations audio publiques sont des fichiers distincts, dégradés
  (basse qualité, tag audio le cas échéant), stockés séparément des masters.
- Upload : validation du type réel, de la taille et normalisation du nom de
  fichier ; le nom fourni par le client n'est jamais utilisé tel quel comme
  chemin.
- Chaque téléchargement d'un fichier protégé est journalisé (qui, quoi, quand).
- Rate limiting sur les endpoints de génération d'URL et de téléchargement.

## Pièges fréquents du code généré par IA
- Bucket public créé « pour que ça marche ».
- URL signée générée sans vérifier le droit de l'utilisateur.
- Master et preview stockés dans le même dossier, chemin devinable.
- Durée d'expiration très longue, équivalente à un accès permanent.

## Contrôles à effectuer
- Lister les buckets et leur visibilité.
- Tenter d'accéder au chemin d'un fichier protégé sans session.
- Vérifier l'expiration réelle d'une URL signée.

## Critères d'implantation correcte
- Aucun fichier vendable accessible sans vérification serveur (preuve : test).
- Expirations courtes et journalisation des accès.

## À vérifier dans les sources
- Fenêtres d'expiration recommandées et transformations d'images : The Vault.
