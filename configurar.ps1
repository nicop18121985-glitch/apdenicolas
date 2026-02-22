# configurar.ps1
$ErrorActionPreference = "Continue"

Write-Host "--- APLICACION SALU ---"
Write-Host "Iniciando configuracion..."

# 1. Credenciales
Write-Host ""
Write-Host "1. CONEXION"
$p_url = Read-Host "Copia la URL de Supabase"
$p_key = Read-Host "Copia la KEY de Supabase"

$json = "{`"supabaseUrl`": `"$p_url`", `"supabaseAnonKey`": `"$p_key`"}"
$json | Out-File -FilePath "shared/config.json" -Encoding ascii
Write-Host "Guardado en shared/config.json"

# 2. Instrucciones
Write-Host ""
Write-Host "2. BASE DE DATOS"
Write-Host "Copia el texto de 'supabase_schema.sql' en el SQL Editor de Supabase y dale a RUN."

# 3. Instalacion
Write-Host ""
Write-Host "3. INSTALANDO..."
Set-Location desktop
npm install
Set-Location ..
Set-Location mobile
npm install
Set-Location ..

Write-Host ""
Write-Host "--- LISTO ---"
Write-Host "PC: cd desktop; npm run electron"
Write-Host "Movil: cd mobile; npm start"
