document.addEventListener("DOMContentLoaded", function(event){
    dinamica = document.getElementById('dinamica')
    hidrostatica = document.getElementById('hidrostatica')
    hidrodinamica = document.getElementById('hidrodinamica')
    gravitacao = document.getElementById('gravitacao')
    estatica = document.getElementById('estatica')

    dinamica.addEventListener('click', function(event){
        img = dinamica.querySelector('img')
        img.src='assets/img/dinamica_bloqueada.png'
    })
    
    hidrostatica.addEventListener('click', function(event){
        img2 = hidrostatica.querySelector('img')
        img2.src='assets/img/hidrostatica_bloqueada.png'
    })
    hidrodinamica.addEventListener('click', function(event){
        img3 = hidrodinamica.querySelector('img')
        img3.src='assets/img/hidrodinamica_bloqueada.png'
    })
    gravitacao.addEventListener('click', function(event){
        img4 = gravitacao.querySelector('img')
        img4.src='assets/img/gravitacao_bloqueada.png'
    })
    estatica.addEventListener('click', function(event){
        img5 = estatica.querySelector('img')
        img5.src='assets/img/estatica_bloqueada.png'
    })
})


