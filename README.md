# aiTi - Página Web Comercial

## Descripción

Landing page estática para el producto aiTi (Sistema de Gestión Integral de Infraestructura IT).
Permite a potenciales clientes conocer el producto, ver funcionalidades y descargar la versión de evaluación.

## Estructura

```
website/
├── index.html          ← Página principal
├── css/
│   └── style.css       ← Estilos personalizados
├── js/
│   └── main.js         ← JavaScript (navbar, formulario descarga)
├── img/                ← Imágenes y capturas (agregar después)
└── README.md           ← Este archivo
```

---

## Deploy con GitHub Pages (recomendado)

### Requisitos previos

- Repositorio en GitHub (ya tenés `sbmpd/sgir-sistema-gestion-redes`)
- Dominio `aiti.com.ar` registrado en NIC.ar ✅

### Paso 1: Activar GitHub Pages

1. Ir al repositorio en GitHub: `https://github.com/sbmpd/sgir-sistema-gestion-redes`
2. **Settings** → **Pages** (menú lateral izquierdo)
3. En **Source** seleccionar:
   - Branch: `main`
   - Folder: `/website`
4. Click **Save**
5. GitHub genera la URL: `https://sbmpd.github.io/sgir-sistema-gestion-redes/`

> La página estará disponible en ~1 minuto. Cada push a `main` actualiza automáticamente.

### Paso 2: Configurar dominio custom (aiti.com.ar)

#### 2a. En GitHub:

1. En **Settings → Pages → Custom domain**, escribir: `aiti.com.ar`
2. Click **Save**
3. Marcar **Enforce HTTPS** (se activa después de que los DNS propaguen)

GitHub crea automáticamente un archivo `CNAME` en la carpeta del sitio.

#### 2b. En NIC.ar (panel de administración del dominio):

Configurar los siguientes registros DNS:

**Registros A (dominio raíz aiti.com.ar):**

```
Tipo: A    Host: @    Valor: 185.199.108.153
Tipo: A    Host: @    Valor: 185.199.109.153
Tipo: A    Host: @    Valor: 185.199.110.153
Tipo: A    Host: @    Valor: 185.199.111.153
```

**Registro CNAME (www.aiti.com.ar):**

```
Tipo: CNAME    Host: www    Valor: sbmpd.github.io.
```

> **Nota:** El punto final en `sbmpd.github.io.` es importante (algunos paneles DNS lo requieren).

#### 2c. Verificar propagación:

Esperar 10-30 minutos (puede tardar hasta 48h en algunos casos). Verificar con:

```cmd
nslookup aiti.com.ar
```

Debe resolver a una de las IPs de GitHub (185.199.108-111.153).

### Paso 3: Verificar

1. Acceder a `https://aiti.com.ar` — debe cargar la landing page
2. Acceder a `https://www.aiti.com.ar` — debe redirigir al mismo sitio
3. El candado verde (HTTPS) se activa automáticamente con Let's Encrypt (puede tardar ~15 min después de que los DNS propaguen)

### Actualizar la página

Cualquier cambio en la carpeta `website/` que se pushee a `main` se publica automáticamente en ~1 minuto:

```cmd
cd C:\Users\sbonura\Desktop\Kiro\SGIR
git add website/
git commit -m "web: actualizar contenido"
git push origin main
```

---

## Hosting del instalador (.exe)

El instalador es un archivo grande (~200MB). GitHub Pages no es ideal para archivos grandes, pero **GitHub Releases** sí:

### Subir instalador a GitHub Releases

1. Ir a `https://github.com/sbmpd/sgir-sistema-gestion-redes/releases`
2. Click **"Create a new release"**
3. Tag: `v1.0.0` (o la versión actual)
4. Title: `aiTi v1.0.0`
5. Descripción: notas de la versión
6. **Attach binaries**: arrastrar `AiTi_Setup_v1.0.0.exe`
7. Publicar

La URL de descarga será:
```
https://github.com/sbmpd/sgir-sistema-gestion-redes/releases/download/v1.0.0/AiTi_Setup_v1.0.0.exe
```

### Configurar URL en la web

En `website/js/main.js`, actualizar la variable `downloadUrl`:

```javascript
var downloadUrl = 'https://github.com/sbmpd/sgir-sistema-gestion-redes/releases/download/v1.0.0/AiTi_Setup_v1.0.0.exe';
```

> **Nota:** Si el repo es privado, los releases también son privados. Para que el cliente descargue sin autenticarse, el repo debe ser público O usar un link de descarga alternativo.

### Alternativa: Repo privado + descarga pública

Si no querés hacer público el repo de código:

1. Crear un **segundo repositorio público** solo para releases: `sbmpd/aiti-releases`
2. Subir el .exe como release ahí
3. El código fuente sigue privado, pero el instalador es descargable

---

## Formulario de leads (captura de datos)

El formulario de descarga captura nombre, empresa y email. Los leads llegan a `info@aiti.com.ar`.

### Opción A: Formspree (gratis, sin backend)

1. Crear cuenta en [formspree.io](https://formspree.io)
2. Crear un form → obtener ID (ej: `xpwzgkqr`)
3. En `website/js/main.js`, cambiar el submit del formulario:

```javascript
fetch('https://formspree.io/f/xpwzgkqr', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, empresa, email, equipos })
});
```

Formspree envía un email a tu casilla con cada lead. Gratis hasta 50 envíos/mes.

### Opción B: Google Forms (gratis, ilimitado)

1. Crear Google Form con los campos (nombre, empresa, email, equipos)
2. Las respuestas van a una Google Sheet automáticamente
3. Redirigir el submit del formulario al endpoint de Google Forms

### Opción C: Email directo (cuando tengas el dominio con email)

Configurar `soporte@aiti.com.ar` y que el formulario envíe un email via servicio SMTP (requiere backend o servicio como EmailJS).

---

## Email con dominio propio (@aiti.com.ar) — Zoho Mail

GitHub Pages no incluye servicio de email. Para enviar y recibir correos con `@aiti.com.ar` se usa **Zoho Mail** (plan gratuito, hasta 5 usuarios).

### ¿Qué incluye el plan gratuito?

- 5 casillas de correo con dominio propio
- 5 GB por usuario
- Webmail en `https://mail.zoho.com`
- Acceso IMAP/POP3 (para Outlook, Thunderbird, celular)
- SMTP para envío (útil para el formulario de la web)
- Antispam y antivirus incluido
- Sin publicidad

### Casillas a crear

| Casilla | Uso |
|---------|-----|
| `info@aiti.com.ar` | Contacto general, leads del formulario web |
| `soporte@aiti.com.ar` | Soporte técnico a clientes |
| `ventas@aiti.com.ar` | Consultas comerciales |

### Paso 1: Crear cuenta en Zoho

1. Ir a [https://www.zoho.com/mail/zohomail-pricing.html](https://www.zoho.com/mail/zohomail-pricing.html)
2. Seleccionar **"Mail Free"** (plan gratuito)
3. Click en **"Sign Up"**
4. Ingresar `aiti.com.ar` como dominio
5. Crear la cuenta de administrador (será la primera casilla)

### Paso 2: Verificar dominio

Zoho pide verificar que sos dueño del dominio. Agregar en NIC.ar:

```
Tipo: TXT    Host: @    Valor: zoho-verification=zb12345678.zmverify.zoho.com
```

> El valor exacto lo da Zoho durante el setup. Copiar tal cual.

Esperar 5-10 minutos y click en "Verificar" en Zoho.

### Paso 3: Configurar registros MX en NIC.ar

Estos registros le dicen a internet que los correos de `@aiti.com.ar` van a Zoho:

```
Tipo: MX    Host: @    Valor: mx.zoho.com        Prioridad: 10
Tipo: MX    Host: @    Valor: mx2.zoho.com       Prioridad: 20
Tipo: MX    Host: @    Valor: mx3.zoho.com       Prioridad: 50
```

### Paso 4: Configurar SPF (evitar que los correos caigan en spam)

```
Tipo: TXT    Host: @    Valor: v=spf1 include:zoho.com ~all
```

> Si ya tenés un registro TXT con SPF (por la verificación), editarlo para incluir `include:zoho.com`.

### Paso 5: Configurar DKIM (firma digital de correos)

1. En Zoho Mail → **Admin Console** → **Email Authentication** → **DKIM**
2. Generar clave para `aiti.com.ar`
3. Zoho te da un registro TXT para agregar en NIC.ar:

```
Tipo: TXT    Host: zmail._domainkey    Valor: v=DKIM1; k=rsa; p=MIGfMA0GCS....(clave larga)
```

### Paso 6: Crear casillas adicionales

1. En Zoho Admin → **Users** → **Add User**
2. Crear `soporte@aiti.com.ar` y `ventas@aiti.com.ar`

### Configuración SMTP (para enviar desde la web o el sistema)

| Parámetro | Valor |
|-----------|-------|
| Servidor SMTP | `smtp.zoho.com` |
| Puerto | `587` (TLS) o `465` (SSL) |
| Autenticación | Sí |
| Usuario | `info@aiti.com.ar` |
| Contraseña | La de la cuenta Zoho |
| Cifrado | STARTTLS (587) o SSL (465) |

### Configurar en Outlook / Thunderbird (IMAP)

| Parámetro | Entrante (IMAP) | Saliente (SMTP) |
|-----------|-----------------|-----------------|
| Servidor | `imap.zoho.com` | `smtp.zoho.com` |
| Puerto | `993` (SSL) | `587` (TLS) |
| Cifrado | SSL/TLS | STARTTLS |
| Usuario | `info@aiti.com.ar` | `info@aiti.com.ar` |

### Configurar en celular (Android/iOS)

1. Agregar cuenta → Otra (IMAP)
2. Email: `info@aiti.com.ar`
3. Servidor entrante: `imap.zoho.com` puerto `993` SSL
4. Servidor saliente: `smtp.zoho.com` puerto `587` TLS

### Resumen de registros DNS en NIC.ar

Después de configurar todo, los registros DNS de `aiti.com.ar` quedan:

```
# GitHub Pages (web)
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     sbmpd.github.io.

# Zoho Mail (email)
MX      @       mx.zoho.com         (prioridad 10)
MX      @       mx2.zoho.com        (prioridad 20)
MX      @       mx3.zoho.com        (prioridad 50)
TXT     @       zoho-verification=zb12345678.zmverify.zoho.com
TXT     @       v=spf1 include:zoho.com ~all
TXT     zmail._domainkey    v=DKIM1; k=rsa; p=...(clave)
```

> **Nota:** Algunos paneles DNS de NIC.ar no soportan múltiples registros TXT en el mismo host. En ese caso, combinar en uno solo: `v=spf1 include:zoho.com ~all` y la verificación como registro separado con un subdominio.

---

## Checklist de publicación

- [x] Dominio registrado (aiti.com.ar en NIC.ar)
- [ ] Activar GitHub Pages en el repo (Settings → Pages → /website)
- [ ] Configurar DNS en NIC.ar (4 registros A + 1 CNAME)
- [ ] Verificar que carga en https://aiti.com.ar
- [ ] Verificar HTTPS (candado verde)
- [ ] Configurar formulario de leads (Formspree o similar)
- [ ] Subir instalador a GitHub Releases (cuando esté listo)
- [ ] Actualizar URL de descarga en main.js
- [ ] Capturas de pantalla reales (opcional para primera versión)
- [ ] Datos de contacto actualizados (email, teléfono)

---

## Notas

- La página es 100% estática (HTML + CSS + JS). No requiere PHP, Node ni base de datos.
- GitHub Pages es gratuito, con CDN global y SSL automático.
- El diseño es responsive (se adapta a móviles).
- Cada push a `main` actualiza la web automáticamente (~1 min).
- El código fuente del producto sigue privado; solo la carpeta `website/` se publica.
