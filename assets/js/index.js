
window.onload = gerarElementos();

function gerarElementos() {
    const cabecalho = `
    <div id="cabecalho" class="sticky-top">
        <nav class="navbar navbar-dark navbar-expand-lg pacifico">
        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i class="navbar-toggler-icon"></i></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="navbar-nav mr-auto mt-lg-0">
                <li><a href="index.html">HOME</a></li>
                <li><a href="noticias.html">NOTÍCIAS</a></li>
                <li><a href="sobre.html">QUEM SOMOS</a></li>
                <li><a href="#contato">CONTATO</a></li>
            </ul>
            <form class="form-row justify-content-center my-2 my-lg-0" id="search-box">
                <input class="col-sm-8 form-control mr-sm-4" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </div>
        </nav>
    </div>`;

    const rodape = `
    <div class="row justify-content-between align-items-end text" id="rodape">
        <p class="card-text">Copyright © 2020 Ind. Safe, Blog</p>
        <div>
            <div class="cl-4" id="contato">
                <p>Contato</p>
                <ul>
                    <li>+55 11 94325-0000</li>
                    <li>+55 11 94325-0000</li>
                </ul>
            </div>
            <div class="cl-4" id="redes-sociais">
                <p>Redes Sociais</p>
                <ul class="row">
                    <li><a href="https://www.instagram.com/?hl=pt-br"><img src="assets/img/inst.png"></a></li>
                    <li><a href="https://twitter.com/login?lang=pt"><img src="assets/img/twt.png"></a></li>
                    <li><a href="https://pt-br.facebook.com/"><img src="assets/img/fcb.png"></a></li>
                    <li><a href="https://www.youtube.com/?gl=BR&hl=pt"><img src="assets/img/ytb.png"></a></li>
                </ul> 
            </div>  
        </div>    
    </div>`;
    
    document.getElementById("web-top").outerHTML += cabecalho;
    document.getElementById("web-bottom").outerHTML += rodape;
}

var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {

    type: 'bar',

    data: {
        labels: ['Eólica', 'Solar', 'Hídrica', 'Nuclear'],
        datasets: [{
            label: 'Pesquisa Desenvolvimento Sustentável',
            backgroundColor: [
                '#306e32',
                '#cc7a00',
                'rgb(1, 87, 155, 0.7)',
                '#a99700',
            ],
            borderColor: 'rgb(0, 0, 0, 0.1)',
            borderWidth: 3,
            borderSkipped: "bottom",
            data: [1, 10, 5, 2],
        }],
        labels: [
            'Eólica',
            'Solar',
            'Hídrica',
            'Nuclear',
        ],
    },

    options: {
    }
});