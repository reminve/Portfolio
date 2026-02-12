# Script de déploiement pour GitHub Pages
Write-Host "Déploiement du Portfolio sur GitHub Pages" -ForegroundColor Cyan

# Vérifier que le CV existe dans public/
if (-not (Test-Path "public\CV_Remi_Neveu.pdf")) {
    Write-Host "❌ Erreur: Le fichier CV_Remi_Neveu.pdf n'existe pas dans le dossier public/" -ForegroundColor Red
    Write-Host "   Placez votre CV dans: public\CV_Remi_Neveu.pdf" -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ CV trouvé dans public/" -ForegroundColor Green

# Build du projet
Write-Host "`n1. Build du projet..." -ForegroundColor Yellow
ng build --output-path docs --base-href /Portfolio/

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erreur lors du build" -ForegroundColor Red
    exit 1
}

# Déplacement des fichiers depuis docs/browser vers docs
if (Test-Path "docs\browser") {
    Write-Host "`n2. Réorganisation des fichiers..." -ForegroundColor Yellow
    Move-Item docs\browser\* docs\ -Force
    Remove-Item docs\browser -Recurse -Force
}

# Copier le CV depuis public/ vers docs/ (pour s'assurer qu'il est à jour)
Write-Host "`n3. Copie du CV à jour..." -ForegroundColor Yellow
Copy-Item "public\CV_Remi_Neveu.pdf" "docs\CV_Remi_Neveu.pdf" -Force
Write-Host "   ✓ CV copié vers docs/" -ForegroundColor Green

# Création du fichier .nojekyll
Write-Host "`n4. Création du fichier .nojekyll..." -ForegroundColor Yellow
New-Item docs\.nojekyll -ItemType File -Force | Out-Null

# Git add, commit et push
Write-Host "`n5. Commit et push vers GitHub..." -ForegroundColor Yellow
git add -A

# Vérifier s'il y a des changements
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "ℹ Aucun changement à déployer" -ForegroundColor Cyan
    exit 0
}

$message = Read-Host "Message de commit (Entrée pour 'Deploy update')"
if ([string]::IsNullOrWhiteSpace($message)) {
    $message = "Deploy update"
}
git commit -m $message
git push

Write-Host "`n✅ Déploiement terminé avec succès!" -ForegroundColor Green
Write-Host "`nℹ Pour mettre à jour votre CV:" -ForegroundColor Cyan
Write-Host "  1. Remplacez le fichier: public\CV_Remi_Neveu.pdf" -ForegroundColor White
Write-Host "  2. Relancez: .\deploy.ps1" -ForegroundColor White
Write-Host "`nVotre site sera disponible dans 1-2 minutes sur:" -ForegroundColor Cyan
Write-Host "https://reminve.github.io/Portfolio/" -ForegroundColor White
