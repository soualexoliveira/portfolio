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
const openProjects = document.querySelector('.btn-img');
const closeProjects = document.querySelector('.close-item');
const overlayProjects = document.querySelector('.overlay-item')

openProjects.addEventListener('click', function(){
        overlayProjects.style.opacity = '1';
        overlayProjects.style.zIndex = '2';
        document.body.style.overflow = 'hidden';
        overlayProjects.style.transform = 'scale(1)';
        overlayProjects.stylewebkitTransform = 'scale(1)';
})

closeProjects.addEventListener('click', function(){
        overlayProjects.style.opacity = '0';
        overlayProjects.style.zIndex = '-2';
        document.body.style.overflow = 'visible';
        overlayProjects.style.transform = 'scale(0)';
        overlayProjects.stylewebkitTransform = 'scale(0)';
})
