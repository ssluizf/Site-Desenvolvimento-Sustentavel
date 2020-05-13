
window.onload = gerarElementos();

function gerarElementos() {
    const cabecalho = `
    <div id="cabecalho" class="sticky-top">
        <nav class="navbar navbar-dark navbar-expand-lg font-pacifico">
        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i class="navbar-toggler-icon"></i></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="navbar-nav mr-auto mt-lg-0">
                <li><a href="index.html" onclick="darkSwitchNav(event)">HOME</a></li>
                <li><a href="noticias1.html" onclick="darkSwitchNav(event)">NOTÍCIAS</a></li>
                <li><a href="sobre.html" onclick="darkSwitchNav(event)">QUEM SOMOS</a></li>
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

    const darks = `
        <div class="custom-control custom-switch nt-m" id="dark-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch1">
            <label class="custom-control-label" for="customSwitch1">DarkMode</label>
        </div>
    `

    const rodape = `
    <div class="row justify-content-between align-items-end nt-m" id="rodape"> 
        <div class="col-md-3" id="contato">
            <p>Contato</p>
            <ul>
                <li>+55 11 94325-0000</li>
                <li>+55 11 94325-0000</li>
            </ul>
        </div>
        <div class="col-md-3" id="redes-sociais">
            <p>Redes Sociais</p>
            <ul class="row">
                <li><a href="https://www.instagram.com/?hl=pt-br"><img src="assets/img/inst.png"></a></li>
                <li><a href="https://twitter.com/login?lang=pt"><img src="assets/img/twt.png"></a></li>
                <li><a href="https://pt-br.facebook.com/"><img src="assets/img/fcb.png"></a></li>
                <li><a href="https://www.youtube.com/?gl=BR&hl=pt"><img src="assets/img/ytb.png"></a></li>
            </ul> 
        </div>
        <div class="col-md-6">    
            <p class="card-text" id="copyright">Copyright © 2020 Ind. Safe, Blog</p>
        </div>     
    </div>`;
    
    document.getElementById("web-top").outerHTML += cabecalho;
    document.getElementById("web-bottom").outerHTML += rodape;
    document.getElementById("cabecalho").outerHTML += darks;
}

function queryString(parameter) {  
    var loc = location.search.substring(1, location.search.length);   
    var param_value = false;   
    var params = loc.split("&");   
    for (i=0; i<params.length;i++) {   
        param_name = params[i].substring(0,params[i].indexOf('='));   
        if (param_name == parameter) {                                          
            param_value = params[i].substring(params[i].indexOf('=')+1)   
        }   
    }   
    if (param_value) {   
        return param_value;   
    }   
    else {   
        return undefined;   
    }   
}

function passaValor(inp) {
    window.location = "search.html?inputValue="+ inp.replace(/( )+/g, '+') + "&inputCheck=" + document.getElementById("customSwitch1").checked;
}

function eventosPesquisa() {
    const button = document.getElementById("search-button");
    const input = document.getElementById("input")

    button.addEventListener("click", function(e) {
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

function darkSwitch() {
    const elems = document.getElementsByClassName('nt-m');

    if( document.getElementById("customSwitch1").checked ) {
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.add('night-mode')
        }
    } else {
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('night-mode')
        }
    }
}

function darkSwitchNav(event) {
    event.target.href += "?inputCheck=" + document.getElementById("customSwitch1").checked
}

function darkSwitchEvent() {
    queryString("inputCheck") == 'true' ? document.getElementById("customSwitch1").checked = true : ""

    window.addEventListener("load", darkSwitch)
    window.addEventListener("keydown", (e) => {
        if (e.which == 116) {
            e.preventDefault()
            window.location = "?inputCheck=" + document.getElementById("customSwitch1").checked
        }
    })
    document.getElementById("customSwitch1").addEventListener("change", darkSwitch)
}

darkSwitchEvent()

function noticiasNav(e) {
    let noticia = window.location.pathname
    let number = parseInt((noticia.slice(noticia.lastIndexOf("/")).replace(/([^\d])+/gim, '')))

    let lastIndex = 2

    if (e.target.innerHTML == "Anterior") {
        number > 1 ? window.location.href = "noticias" + (number - 1) + ".html" + "?inputCheck=" + document.getElementById("customSwitch1").checked : ''
    } else if (e.target.innerHTML == "Próximo") {
        number < lastIndex ? window.location.href = "noticias" + (number + 1) + ".html" + "?inputCheck=" + document.getElementById("customSwitch1").checked : ''
    }
}

function noticiasProx() {
    let noticia = window.location.pathname
    let number = parseInt((noticia.slice(noticia.lastIndexOf("/")).replace(/([^\d])+/gim, '')))

    number < lastIndex ? window.location.href = "noticias" + (number + 1) + ".html" + "?inputCheck=" + document.getElementById("customSwitch1").checked : ''
}

function chartColor(chart) {
    let color = ""

    if ( document.getElementById("customSwitch1").checked ) {
        color = "#e1f5fe"
    } else {
        color = "black"
    }

    chart.options = {
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 16,
                    fontColor: color,
                },
            }],
            yAxes: [{
                ticks: {
                    fontSize: 16,
                    fontColor: color,
                    stepSize: 10,
                },
            }],
        },
        tooltips: {
            titleFontSize: 16,
            bodyFontSize: 16,
        },
        legend: {
            display: false,
            }
    }
}