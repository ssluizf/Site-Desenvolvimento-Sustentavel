
window.onload(cabecalho());

function cabecalho() {
    const el = `
    <div id="cabecalho" class="sticky-top">
        <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item"><a class="nav-link" href="noticias.html">NOTÍCIAS</a></li>
                    <li class="nav-item"><a class="nav-link" href="sobre.html">QUEM SOMOS</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contato">CONTATO</a></li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>`;
    document.getElementById("web-top").outerHTML += el
}
