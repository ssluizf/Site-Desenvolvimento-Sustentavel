
window.onload = gerarElementos();

function gerarElementos() {
    const cabecalho = `
    <div id="cabecalho" class="sticky-top">
        <nav class="navbar navbar-dark navbar-expand-lg font-pacifico">
        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i class="navbar-toggler-icon"></i></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="navbar-nav mr-auto mt-lg-0">
                <li><a href="index.html">HOME</a></li>
                <li><a href="noticias.html">NOTÍCIAS</a></li>
                <li><a href="sobre.html">QUEM SOMOS</a></li>
                <li><a href="#contato">CONTATO</a></li>
            </ul>
            <form class="form-row justify-content-center my-2 my-lg-0" autocomplete=off id="search-box">
                <input class="col-sm-8 form-control mr-sm-4" type="search" id="input" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-info my-2 my-sm-0" type="button" id="search-button">Buscar</button>
            </form>
        </div>
        </nav>
    </div>
    `;

    const rodape = `
    <div class="row justify-content-between align-items-end text nt-m" id="rodape">
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

function passaValor(inp) {
    window.location = "search.html?inputValue="+inp;
}

function eventosPesquisa() {
    const button = document.getElementById("search-button");
    const input = document.getElementById("input")

    button.addEventListener("click", function() {
        let inpValue = input.value
        passaValor(inpValue)
    })

    input.addEventListener("keypress", function(event) {
        if (event.which == 13) {
            event.preventDefault()
            button.click()
        }
    });
}

eventosPesquisa();

document.getElementById("customSwitch1").addEventListener("change", function() {
    const elems = document.getElementsByClassName('nt-m');
    let color = ''

    if(this.checked) {
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.add('night-mode')
            color = '#e1f5fe'
        }
    } else {
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('night-mode')
            color = 'black'
        }
    }
})