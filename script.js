// Obtener referencias a los nuevos botones
const projectsBtn = document.getElementById('projects-btn');
const articlesBtn = document.getElementById('articles-btn');

// Crear elementos de contenido para Proyectos y Artículos
const projectsContent = document.createElement('div');
projectsContent.id = 'projects-content';
projectsContent.className = 'hidden';
projectsContent.innerHTML = `
    <div class="cv-header">
        <div class="name-title">
            <h1 class="name">Proyectos Destacados</h1>
            <p class="title">Una selección de mis trabajos más relevantes</p>
        </div>
    </div>
    
    <div class="left-column" style="grid-column: 1 / -1; max-width: 900px; margin: 0 auto;">
        <div class="section">
            <h2 class="section-title"><i class="fas fa-project-diagram"></i> Proyectos</h2>
            <p>Contenido de proyectos aquí...</p>
        </div>
    </div>
    
    <div class="btn-container">
        <a href="#cv" class="download-btn print-btn back-to-cv-btn"><i class="fas fa-arrow-left"></i> Volver al CV</a>
    </div>
`;

const articlesContent = document.createElement('div');
articlesContent.id = 'articles-content';
articlesContent.className = 'hidden';
articlesContent.innerHTML = `
    <div class="cv-header">
        <div class="name-title">
            <h1 class="name">Artículos y Publicaciones</h1>
            <p class="title">Investigación y divulgación técnica</p>
        </div>
    </div>
    
    <div class="left-column" style="grid-column: 1 / -1; max-width: 900px; margin: 0 auto;">
        <div class="section">
            <h2 class="section-title"><i class="fas fa-newspaper"></i> Artículos</h2>
            <p>Contenido de artículos aquí...</p>
        </div>
    </div>
    
    <div class="btn-container">
        <a href="#cv" class="download-btn print-btn back-to-cv-btn"><i class="fas fa-arrow-left"></i> Volver al CV</a>
    </div>
`;

// Insertar los nuevos contenidos después de letter-content
letterContent.insertAdjacentElement('afterend', projectsContent);
projectsContent.insertAdjacentElement('afterend', articlesContent);

// Funciones para manejar la navegación
function showSection(sectionToShow) {
    // Ocultar todas las secciones
    cvContent.classList.add('hidden');
    letterContent.classList.add('hidden');
    projectsContent.classList.add('hidden');
    articlesContent.classList.add('hidden');
    
    // Remover active de todos los botones
    cvBtn.classList.remove('active');
    letterBtn.classList.remove('active');
    projectsBtn.classList.remove('active');
    articlesBtn.classList.remove('active');
    
    // Mostrar la sección seleccionada
    sectionToShow.classList.remove('hidden');
}

// Event listeners para los nuevos botones
projectsBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(projectsContent);
    projectsBtn.classList.add('active');
    window.scrollTo(0, 0);
});

articlesBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(articlesContent);
    articlesBtn.classList.add('active');
    window.scrollTo(0, 0);
});

// Actualizar event listeners existentes para usar la nueva función
cvBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(cvContent);
    cvBtn.classList.add('active');
});

letterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showSection(letterContent);
    letterBtn.classList.add('active');
});

// Actualizar el botón de volver para manejar todos los casos
const allBackButtons = document.querySelectorAll('.back-to-cv-btn');
allBackButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(cvContent);
        cvBtn.classList.add('active');
        window.scrollTo(0, 0);
    });
});