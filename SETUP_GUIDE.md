# Instalación Rápida (Salu/Azul App)

1. **Supabase**: Crea un proyecto gratis en [supabase.com](https://supabase.com/).
   - **Para las tablas**: Ve al icono **"SQL Editor"** (`>_`) en la izquierda, pega el código de `supabase_schema.sql` (en esta carpeta) y dale a **"Run"**.
   - **Para la URL y Key**:
     1. Haz clic en el icono del **engranaje** (Settings) abajo a la izquierda.
     2. Haz clic en la pestaña **"API"**.
     3. Ahí verás la **"Project URL"** y la **"anon / public" Key**. ¡Cópialas!

2. **Instalación (Automático)**:
   - Haz doble clic en el archivo llamado **`INSTALAR`** (o `INSTALAR.bat`) que está en esta carpeta.
   - Sigue las instrucciones de la ventana negra y pega la URL y la Key cuando te lo pida.

## Cómo entrar (Solo 2 formas)

Una vez que hayas usado el archivo **`INSTALAR`**, ya no necesitas escribir nada más. Solo usa estos dos archivos:

1. **Desde PC**: Haz doble clic en **`PC.bat`**. Se abrirá la aplicación en tu computadora.
2. **Desde Móvil**: Haz doble clic en **`MOBILE.bat`**. 
   - Se abrirá una ventana con un código QR.
   - Escanea ese código con la cámara de tu teléfono (o la app **Expo Go**).

## ¿No tienes GitHub? Usa "Arrastrar y Soltar" (Gratis)

Si Vercel te pide una URL de GitHub y no la tienes, usa este método que es **instantáneo**:

### Opción A: Netlify (La más fácil)
1. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop).
2. **Arrastra la carpeta "nico ap1"** (o el archivo descomprimido) directamente a la página.
3. ¡Listo! En 10 segundos tendrás un link público para ver tu app.

### Opción B: Vercel "Drag & Drop"
1. Ve a [https://vercel.com/deploy](https://vercel.com/deploy).
2. Busca la opción de **"Upload"** o arrastra la carpeta allí.
3. No necesitas URL de Git para esto.

---
### Importante: Variables de Supabase
En cualquiera de los dos sitios, busca la sección **"Environment Variables"** y añade:
- `VITE_SUPABASE_URL` = (Tu URL)
- `VITE_SUPABASE_ANON_KEY` = (Tu Key)

---
### ¿Por qué no se ve "casi nada" ahora?
Para que el diseño (colores, botones, gráficos) aparezca, **TIENES que ejecutar el archivo `INSTALAR`**. 
Ese archivo descarga miles de mini-piezas necesarias para el diseño. Sin eso, solo verás código base.



