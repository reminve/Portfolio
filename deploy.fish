#!/usr/bin/env fish

# Script de déploiement pour GitHub Pages
set_color cyan; echo "Déploiement du Portfolio sur GitHub Pages"; set_color normal

# Vérifier que le CV existe dans public/
if not test -f "public/CV_Remi_Neveu.pdf"
    set_color red; echo "❌ Erreur: Le fichier CV_Remi_Neveu.pdf n'existe pas dans le dossier public/"; set_color normal
    set_color yellow; echo "   Placez votre CV dans: public/CV_Remi_Neveu.pdf"; set_color normal
    exit 1
end

set_color green; echo "✓ CV trouvé dans public/"; set_color normal

# Build du projet
echo
set_color yellow; echo "1. Build du projet..."; set_color normal
ng build --output-path docs --base-href /Portfolio/

if test $status -ne 0
    set_color red; echo "❌ Erreur lors du build"; set_color normal
    exit 1
end

# Déplacement des fichiers depuis docs/browser vers docs
if test -d docs/browser
    echo
    set_color yellow; echo "2. Réorganisation des fichiers..."; set_color normal
    mv docs/browser/* docs/
    rm -rf docs/browser
end

# Copier le CV depuis public/ vers docs/ (pour s'assurer qu'il est à jour)
echo
set_color yellow; echo "3. Copie du CV à jour..."; set_color normal
cp "public/CV_Remi_Neveu.pdf" "docs/CV_Remi_Neveu.pdf"
set_color green; echo "   ✓ CV copié vers docs/"; set_color normal

# Création du fichier .nojekyll
echo
set_color yellow; echo "4. Création du fichier .nojekyll..."; set_color normal
touch docs/.nojekyll

# Git add, commit et push
echo
set_color yellow; echo "5. Commit et push vers GitHub..."; set_color normal
git add -A

# Vérifier s'il y a des changements
set -l git_changes (git status --porcelain)
if test -z "$git_changes"
    set_color cyan; echo "ℹ Aucun changement à déployer"; set_color normal
    exit 0
end

read -P "Message de commit (Entrée pour 'Deploy update'): " message
if test -z "$message"
    set message "Deploy update"
end
git commit -m "$message"
git push

echo
set_color green; echo "✅ Déploiement terminé avec succès!"; set_color normal
echo
set_color cyan; echo "ℹ Pour mettre à jour votre CV:"; set_color normal
set_color white; echo "  1. Remplacez le fichier: public/CV_Remi_Neveu.pdf"; set_color normal
set_color white; echo "  2. Relancez: ./deploy.fish"; set_color normal
echo
set_color cyan; echo "Votre site sera disponible dans 1-2 minutes sur:"; set_color normal
set_color white; echo "https://reminve.github.io/Portfolio/"; set_color normal
set_color white; echo "https://codefirst.iut.uca.fr/kubernetes/reneveu/portfolio/"; set_color normal
