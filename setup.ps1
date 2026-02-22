# setup.ps1
$ErrorActionPreference = "Continue"

Write-Host "==============================================="
Write-Host "   SISTEMA SALU - INSTALADOR"
Write-Host "==============================================="

# 1. Configurar Credenciales
Write-Host ""
Write-Host "[1/3] CONFIGURACION DE SUPABASE"
$url = Read-Host "Pega tu Supabase URL"
$key = Read-Host "Pega tu Supabase Key"

$configContent = @{
    supabaseUrl     = $url
    supabaseAnonKey = $key
} | ConvertTo-Json

$configDir = Join-Path (Get-Location) "shared"
if (!(Test-Path $configDir)) { New-Item -ItemType Directory -Path $configDir }
$configPath = Join-Path $configDir "config.json"
$configContent | Out-File -FilePath $configPath -Encoding ascii
Write-Host "OK: Credenciales guardadas."

# 2. Base de datos
Write-Host ""
Write-Host "IMPORTANTE: BASE DE DATOS"
Write-Host "1. Ve a tu proyecto en la web de Supabase."
Write-Host "2. Busca el icono >_ (SQL Editor)."
Write-Host "3. Pega el contenido de 'supabase_schema.sql' y dale a 'Run'."

# 3. Instalacion
Write-Host ""
Write-Host "[2/3] INSTALANDO PROGRAMAS"
Write-Host "Esto puede tardar unos minutos. No cierres la ventana."

Write-Host "Instalando Desktop..."
Set-Location desktop
npm install
Set-Location ..

Write-Host "Instalando Mobile..."
Set-Location mobile
npm install
Set-Location ..

Write-Host "OK: Todo instalado."

# 4. Final
Write-Host ""
Write-Host "[3/3] LISTO"
Write-Host "-----------------------------------------------"
Write-Host "Para usar en PC: cd desktop; npm run electron"
Write-Host "Para usar en Movil: cd mobile; npm start"
Write-Host "==============================================="
