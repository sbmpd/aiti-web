// ============================================================================
// aiTi - Landing Page JavaScript
// ============================================================================

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Download form handling
document.getElementById('downloadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('dl_nombre').value.trim();
    const empresa = document.getElementById('dl_empresa').value.trim();
    const email = document.getElementById('dl_email').value.trim();
    const equipos = document.getElementById('dl_equipos').value;
    
    if (!nombre || !empresa || !email) {
        alert('Por favor complete todos los campos obligatorios.');
        return;
    }
    
    // Guardar lead en localStorage (temporal hasta tener backend)
    const leads = JSON.parse(localStorage.getItem('aiTi_leads') || '[]');
    leads.push({
        nombre: nombre,
        empresa: empresa,
        email: email,
        equipos: equipos,
        fecha: new Date().toISOString()
    });
    localStorage.setItem('aiTi_leads', JSON.stringify(leads));
    
    // Mostrar éxito y link de descarga
    document.getElementById('downloadForm').style.display = 'none';
    document.getElementById('downloadSuccess').style.display = '';
    
    // Registrar evento en Google Analytics
    if (typeof gtag === 'function') {
        gtag('event', 'download_trial', {
            'event_category': 'conversion',
            'event_label': empresa,
            'value': 1
        });
    }
    
    // Configurar link de descarga
    // TODO: Reemplazar con la URL real del instalador cuando esté disponible
    var downloadUrl = 'aiTi_Setup_v1.0.0.exe';
    document.getElementById('downloadLink').href = downloadUrl;
    
    // Iniciar descarga automática
    // window.location.href = downloadUrl;
    
    console.log('Lead registrado:', { nombre, empresa, email, equipos });
});

// Feature screenshots modal
var featureData = {
    'dashboard': {
        title: 'Dashboard Inteligente',
        images: ['img/features/dashboard-1.png', 'img/features/dashboard-2.png'],
        description: 'Panel con KPIs en tiempo real, gráficos de distribución por tipo/marca/estado, alertas y widgets personalizables.'
    },
    'inventario': {
        title: 'Inventario de Equipos',
        images: ['img/features/inventario-1.png', 'img/features/inventario-2.png'],
        description: 'Listado con filtros avanzados, columnas configurables, búsqueda universal, exportación PDF/Excel y códigos QR.'
    },
    'backups': {
        title: 'Backups Automáticos',
        images: ['img/features/backups-1.png', 'img/features/backups-2.png'],
        description: 'Respaldo automático via SSH/Telnet, mapa de calor de backups, historial y comparación visual de cambios.'
    },
    'terminal': {
        title: 'Terminal SSH/Telnet',
        images: ['img/features/terminal-1.png', 'img/features/terminal-2.png'],
        description: 'Conexión directa desde el navegador, múltiples pestañas, multipaste, snippets y vista grilla.'
    },
    'sitios': {
        title: 'Gestión de Sitios y Mudanzas',
        images: ['img/features/sitios-1.png', 'img/features/sitios-2.png'],
        description: 'Organización por ubicación, mapa geográfico, mudanzas masivas con checklist y archivo histórico.'
    },
    'stock': {
        title: 'Control de Stock y Asignación',
        images: ['img/features/stock-1.png', 'img/features/stock-2.png'],
        description: 'Estados de equipo, asignación a personas responsables con trazabilidad completa.'
    },
    'diff': {
        title: 'Comparación de Configuraciones',
        images: ['img/features/diff-1.png', 'img/features/diff-2.png'],
        description: 'Diff visual lado a lado entre versiones de backup. Detecte cambios al instante.'
    },
    'vpn': {
        title: 'VPN y Conectividad',
        images: ['img/features/vpn-1.png', 'img/features/vpn-2.png'],
        description: 'Túneles VPN bidireccionales, vista de mapa con conexiones entre sitios.'
    },
    'tareas': {
        title: 'Tareas y Seguimiento',
        images: ['img/features/tareas-1.png', 'img/features/tareas-2.png'],
        description: 'Tareas generales y por sitio, asignación, prioridades, comentarios y archivos adjuntos.'
    },
    'reportes': {
        title: 'Estadísticas y Reportes',
        images: ['img/features/reportes-1.png', 'img/features/reportes-2.png'],
        description: 'Reportes PDF/Excel, reportes programados por email, estadísticas de backups e inventario.'
    },
    'servicios': {
        title: 'Servicios de Internet',
        images: ['img/features/servicios-1.png', 'img/features/servicios-2.png'],
        description: 'Contratos ISP, proveedores, velocidades, pagos, vencimientos y dashboard analítico.'
    },
    'administrativo': {
        title: 'Gestión Administrativa',
        images: ['img/features/administrativo-1.png', 'img/features/administrativo-2.png'],
        description: 'Órdenes de compra, licitaciones, proveedores y licencias de software.'
    },
    'auditoria': {
        title: 'Auditoría y Seguridad',
        images: ['img/features/auditoria-1.png', 'img/features/auditoria-2.png'],
        description: 'Registro completo de acciones, roles y permisos, bloqueo por intentos fallidos.'
    },
    'credenciales': {
        title: 'Credenciales Seguras',
        images: ['img/features/credenciales-1.png', 'img/features/credenciales-2.png'],
        description: 'Encriptación AES-128, herencia en cascada Tipo → Marca → Modelo → Equipo.'
    },
    'importacion': {
        title: 'Importación Masiva',
        images: ['img/features/importacion-1.png', 'img/features/importacion-2.png'],
        description: 'Importación desde Excel con validación previa y reporte de errores detallado.'
    },
    'email': {
        title: 'Notificaciones por Email',
        images: ['img/features/email-1.png', 'img/features/email-2.png'],
        description: 'Alertas automáticas de backups, vencimientos y reportes programados.'
    },
    'calendario': {
        title: 'Calendario',
        images: ['img/features/calendario-1.png', 'img/features/calendario-2.png'],
        description: 'Vista mensual de eventos, vencimientos de licencias, certificados y contratos.'
    },
    'biblioteca': {
        title: 'Biblioteca Técnica',
        images: ['img/features/biblioteca-1.png', 'img/features/biblioteca-2.png'],
        description: 'Repositorio de documentación técnica, manuales y firmwares por equipo/modelo.'
    }
};

// Estado del carrusel de funcionalidades
var featureCarousel = {
    images: [],
    current: 0
};

function showFeature(key) {
    var feature = featureData[key];
    if (!feature) return;
    
    document.getElementById('featureModalTitle').textContent = feature.title;
    
    // Guardar imágenes en el estado del carrusel
    featureCarousel.images = feature.images;
    featureCarousel.current = 0;
    
    var body = document.getElementById('featureModalBody');
    var html = '<p class="text-muted mb-3">' + feature.description + '</p>';
    
    // Contenedor de imagen única con navegación
    html += '<div class="position-relative">';
    
    // Botón anterior
    html += '<button type="button" class="btn btn-dark btn-sm position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle" id="featurePrev" onclick="featureNav(-1)" style="z-index:10; width:40px; height:40px; opacity:0.7;">';
    html += '<i class="bi bi-chevron-left"></i></button>';
    
    // Imagen principal
    html += '<div class="text-center" id="featureImageContainer">';
    html += '<img src="' + feature.images[0] + '" class="img-fluid rounded shadow" id="featureCurrentImg" alt="' + feature.title + '" style="max-height: 70vh; cursor: pointer;" onclick="featureNav(1)" onerror="this.outerHTML=\'<div class=\\\'text-center text-muted py-5 border rounded\\\'><i class=\\\'bi bi-image fs-1 d-block mb-2\\\'></i><small>Captura próximamente</small></div>\'">';
    html += '</div>';
    
    // Botón siguiente
    html += '<button type="button" class="btn btn-dark btn-sm position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle" id="featureNext" onclick="featureNav(1)" style="z-index:10; width:40px; height:40px; opacity:0.7;">';
    html += '<i class="bi bi-chevron-right"></i></button>';
    
    html += '</div>';
    
    // Indicador de posición
    html += '<div class="text-center mt-2">';
    html += '<small class="text-muted" id="featureCounter">Imagen 1 de ' + feature.images.length + '</small>';
    html += '</div>';
    
    body.innerHTML = html;
    updateFeatureNav();
}

function featureNav(direction) {
    var total = featureCarousel.images.length;
    if (total <= 1) return;
    
    featureCarousel.current += direction;
    
    // Wrap around
    if (featureCarousel.current >= total) featureCarousel.current = 0;
    if (featureCarousel.current < 0) featureCarousel.current = total - 1;
    
    var img = document.getElementById('featureCurrentImg');
    if (img) {
        img.style.opacity = '0.3';
        setTimeout(function() {
            img.src = featureCarousel.images[featureCarousel.current];
            img.style.opacity = '1';
        }, 150);
    }
    
    var counter = document.getElementById('featureCounter');
    if (counter) {
        counter.textContent = 'Imagen ' + (featureCarousel.current + 1) + ' de ' + total;
    }
    
    updateFeatureNav();
}

function updateFeatureNav() {
    var total = featureCarousel.images.length;
    var prev = document.getElementById('featurePrev');
    var next = document.getElementById('featureNext');
    
    // Ocultar botones si hay una sola imagen
    if (total <= 1) {
        if (prev) prev.style.display = 'none';
        if (next) next.style.display = 'none';
    } else {
        if (prev) prev.style.display = '';
        if (next) next.style.display = '';
    }
}

// Navegación con teclado dentro del modal
document.addEventListener('keydown', function(e) {
    var modal = document.getElementById('featureModal');
    if (!modal || !modal.classList.contains('show')) return;
    
    if (e.key === 'ArrowLeft') {
        featureNav(-1);
    } else if (e.key === 'ArrowRight') {
        featureNav(1);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
