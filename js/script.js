'use strict'
//CHANGE THEME
const btn = document.querySelector('.tema');
const sol = document.querySelector('.inverted-icon');
const lua = document.querySelector('.correct-icon');
const voltarBtn = document.querySelector('.voltar-btn');


function toggleTheme() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
}

window.addEventListener("load", function(){
    if (window.localStorage.getItem('modo') != "Escuro"){
        toggleTheme();
        sol.style.display = "none";
        lua.style.display = "block";
    }else{
        sol.style.display = "block";
        lua.style.display = "none";
    }
});

btn.addEventListener("change", function() {
    toggleTheme();


    if(document.body.classList.contains('dark')) {
        localStorage.setItem('modo', 'Escuro');
        sol.style.display = "block";
        lua.style.display = "none";
    }else{
        localStorage.setItem('modo', 'Claro');
        sol.style.display = "none";
        lua.style.display = "block";
    }
});

// CHANGE LANGUAGE

//OPEN PROJECTS
const openProjects = document.querySelectorAll('.btn-img');
const closeProjects = document.querySelector('.close-item');
const overlayProjects = document.querySelector('.overlay-item')
let projectTitle = document.querySelector('.project-title')
let projectText = document.querySelector('.project-text')
let galleryItems = document.querySelectorAll('[data-slide="item"]')
let projetos =  [
    { nome: "Up Ever", description: "A Up Ever é uma plataforma online de cursos de inglês, focada em ser referência no ensino do idioma. O objetivo da plataforma é trazer valor ao potencial humano através do comprometimento e da qualidade, e assim alcançar o crescimento pessoal e profissional de seus empregados e clientes."},
    { nome: "La Red", description:"boa noite"},
    { nome: "Caldélica", description:""},
    { nome: "Dî Maitre", description:""},
    { nome: "Célula Coach", description:""},
    { nome: "Andiamo Eventos", description:""},
    { nome: "Dunkel", description:""},
    { nome: "Caioso", description:""}
];



openProjects.forEach(btni => {
  btni.addEventListener('click', function(){
        overlayProjects.style.opacity = '1';
        overlayProjects.style.zIndex = '2';
        document.body.style.overflow = 'hidden';
        overlayProjects.style.transform = 'scale(1)';
        overlayProjects.stylewebkitTransform = 'scale(1)';

        //n consegui avançar setar cada objeto em um item, pesquisar mais
        projectTitle.innerText = projetos[1].nome;
        projectText.innerText = projetos[1].description;
            
        console.log(projetos[1])
        
})
})
closeProjects.addEventListener('click', function(){
        overlayProjects.style.opacity = '0';
        overlayProjects.style.zIndex = '-2';
        document.body.style.overflow = 'visible';
        overlayProjects.style.transform = 'scale(0)';
        overlayProjects.stylewebkitTransform = 'scale(0)';
})


