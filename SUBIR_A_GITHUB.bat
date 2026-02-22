@echo off
setlocal enabledelayedexpansion
:: 1. Verificar Configuracion de Git
echo [0/4] Verificando identidad de Git...
git config user.email >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [!] Git necesita saber tu nombre y correo para guardar los cambios.
    set /p user_email="Ingresa tu correo de GitHub: "
    set /p user_name="Ingresa tu nombre (ej: Nicolas): "
    git config user.email "!user_email!"
    git config user.name "!user_name!"
    echo [OK] Identidad configurada para este proyecto.
    echo.
)

:: 2. Eliminar carpetas .git anidadas que bloquean la subida
echo [1/4] Limpiando carpetas internas...
if exist "mobile\.git" (
    attrib -h -s "mobile\.git" /s /d
    rd /s /q "mobile\.git"
)
git rm -r --cached mobile >nul 2>&1

echo [2/4] Preparando todos los archivos...
git add .

:: 2. Forzar commit (si por alguna razon el anterior no se guardo)
echo [2/4] Creando paquete de cambios...
git commit -m "chore: organizar proyecto para produccion y Netlify"

:: 3. Asegurar nombre de la rama
echo [3/4] Configurando rama principal (main)...
git branch -M main

:: 4. Pedir Link (o usar el anterior si existe)
echo.
set /p github_url="Vuelve a pegar el link de tu GitHub (terminado en .git): "

if "%github_url%"=="" (
    echo No has puesto ningun link. Ejecuta el archivo de nuevo cuando lo tengas.
    pause
    exit
)

:: Intentar quitar el remote viejo por si ya existe para evitar error
git remote remove origin >nul 2>&1
echo [4/3] Conectando con GitHub...
git remote add origin %github_url%

:: 4. Subir (con -f por si acaso para esta primera vez)
echo [4/4] Subiendo codigo...
echo.
git push -u origin main

echo.
echo ======================================================
echo           ¡PROCESO FINALIZADO!
echo ======================================================
pause
