# Capturas de Pantalla por Funcionalidad

## Cómo agregar capturas

1. Tomar screenshots del sistema con datos ficticios
2. Guardarlas en esta carpeta con el nombre correcto
3. Formato recomendado: PNG o WebP
4. Resolución recomendada: 1280x720 o 1920x1080
5. Optimizar con tinypng.com antes de subir (reduce tamaño sin perder calidad)

## Nombres de archivo esperados

Cada funcionalidad espera 2 capturas (se pueden agregar más editando `js/main.js`):

| Funcionalidad | Archivo 1 | Archivo 2 |
|---------------|-----------|-----------|
| Dashboard | dashboard-1.png | dashboard-2.png |
| Inventario | inventario-1.png | inventario-2.png |
| Backups | backups-1.png | backups-2.png |
| Terminal | terminal-1.png | terminal-2.png |
| Sitios | sitios-1.png | sitios-2.png |
| Stock/Asignación | stock-1.png | stock-2.png |
| Comparación (diff) | diff-1.png | diff-2.png |
| VPN | vpn-1.png | vpn-2.png |
| Tareas | tareas-1.png | tareas-2.png |
| Reportes | reportes-1.png | reportes-2.png |
| Servicios | servicios-1.png | servicios-2.png |
| Administrativo | administrativo-1.png | administrativo-2.png |
| Auditoría | auditoria-1.png | auditoria-2.png |
| Credenciales | credenciales-1.png | credenciales-2.png |
| Importación | importacion-1.png | importacion-2.png |
| Email | email-1.png | email-2.png |
| Calendario | calendario-1.png | calendario-2.png |
| Biblioteca | biblioteca-1.png | biblioteca-2.png |

## Sugerencias de qué capturar

| Funcionalidad | Captura 1 | Captura 2 |
|---------------|-----------|-----------|
| Dashboard | Vista general con KPIs | Gráficos de distribución |
| Inventario | Listado con filtros activos | Detalle de un equipo |
| Backups | Mapa de calor | Comparación diff de configuración |
| Terminal | Vista grilla con 4 terminales | Multipaste en acción |
| Sitios | Mapa geográfico con sitios | Detalle de sitio con equipos |
| Stock | Listado filtrado por estado "Stock" | Equipo con persona asignada |
| Diff | Comparación lado a lado | Cambios resaltados |
| VPN | Mapa con túneles | Listado de túneles |
| Tareas | Listado con estadísticas | Detalle de tarea con comentarios |
| Reportes | PDF generado | Configuración de reportes programados |
| Servicios | Dashboard de servicios | Detalle de contrato |
| Administrativo | Listado de órdenes de compra | Detalle de licitación |
| Auditoría | Log de auditoría con filtros | Sesiones activas |
| Credenciales | Listado de credenciales | Herencia en cascada |
| Importación | Formulario de importación | Resultado con validación |
| Email | Configuración SMTP | Email recibido de backup |
| Calendario | Vista mensual con eventos | Detalle de evento |
| Biblioteca | Listado de documentos | Detalle con archivos |

## Notas

- Si una captura no existe, la web muestra "Captura próximamente" (no se rompe)
- Usar datos ficticios (no datos reales de producción)
- Ocultar información sensible (IPs reales, nombres de empleados reales)
- Las capturas se cargan bajo demanda (solo cuando el usuario hace clic en "Ver capturas")
