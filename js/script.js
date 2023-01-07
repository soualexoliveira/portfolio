//CHANGE THEME
const btn = document.querySelector('.tema');

function toggleTheme() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
}

window.addEventListener("load", function(){
    if (window.localStorage.getItem('modo') != "Escuro"){
        toggleTheme();
        document.getElementById('inverted-icon').style.display = "none";
        document.getElementById('correct-icon').style.display = "block";
    }else{
        document.getElementById('inverted-icon').style.display = "block";
        document.getElementById('correct-icon').style.display = "none";
    }
});

btn.addEventListener('change', function() {
    toggleTheme();


    if(document.body.classList.contains('dark')) {
        localStorage.setItem('modo', 'Escuro');
        document.getElementById('inverted-icon').style.display = "block";
        document.getElementById('correct-icon').style.display = "none";
    }else{
        localStorage.setItem('modo', 'Claro');
        document.getElementById('inverted-icon').style.display = "none";
        document.getElementById('correct-icon').style.display = "block";
    }
});

// CHANGE LANGUAGE


//SCROLL SMOOTH


//SHOW FULL NAV


//OPEN ITEM
