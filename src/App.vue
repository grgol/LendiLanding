<template>
    <div id="app">
        <b-navbar sticky="true" toggleable="lg" type="dark" class="navbar-placement">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">
                <img src="./assets/img/logo-contrast.svg" alt="Lendi">
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="#" active>Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                    <b-nav-item href="#">Link2</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div class="first-panel container-fluid">
            <h3>Technologiczna rewolucja na rynku kredytów gotówkowych
                i hipotecznych</h3>
        </div>

        <div class="container-fluid second-panel">
            <h3>Czym jest lendi?</h3>
            <p>
                Lendi to połączenie innowacyjnej technologii z doświadczeniem ponad 3500 ekspertów kredytowych. Efektem
                tych działań jest unikalny na polskim rynku algorytm, który umożliwia precyzyjne zbadanie zdolności
                kredytowej oraz porównanie ofert w najkrótszym czasie.</p>
            <div class="col-md-12 gray-dummy-panel"></div>
            <p>To unikalna korzyść zarówno dla klientów indywidualnych jak i ekspertów finansowych.</p>
        </div>

        <div class="container-fluid third-panel">
            <div class="container">
                <p>Aktualnie aż 70% ekspertów hipotecznych nie wyobraża sobie codziennej pracy bez narzędzia Lendi.
                    Teraz nasze autorskie rozwiązanie wprowadzamy również na rynek kredytów gotówkowych.</p>
            </div>
            <div class="button-positions-adjust">
                <b-btn class="btn-oval">UDOSTĘPNIJ</b-btn>
                <b-btn class="btn-oval">TWEETUJ</b-btn>
            </div>
        </div>
        <div class="container-fluid forth-panel">
            <h5>Co nas wyróżnia</h5>
            <h3>Główne atuty systemu Lendi:</h3>
        </div>
        <div class="vertical-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="info-card-panel">
                            <h3>PRECYZJA</h3>
                            <p class="col-md-12">Nasz system pozwala na wyjątkowo precyzyjne porównanie wybranych ofert kredytowych i wybór tej najlepszej</p>
                            <div class="rectangle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vertical-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="info-card-panel">
                            <h3>SZYBKOŚĆ</h3>
                            <p class="col-md-12">Zbadanie zdolności kredytowej i porównanie wszystkich ofert zajmuje zaledwie 5 minut. Kredytobiorca otrzyma gotówkę na swoim koncie nawet do 24h</p>
                            <div class="rectangle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vertical-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="info-card-panel align-items-center">
                            <h3>WYGODA</h3>
                            <p class="col-md-12">Umożliwiamy złożenie jednego wniosku do wielu banków, co znacznie oszczędza czas klientów i ekspertów kredytowych</p>
                            <div class="rectangle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vertical-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="info-card-panel align-items-center">
                            <h3>BEZPIECZEŃSTWO</h3>
                            <p class="col-md-12">Umożliwiamy złożenie jednego wniosku do wielu banków, co znacznie oszczędza czas klientów i ekspertów kredytowych</p>
                            <div class="rectangle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid second-panel">
            <h3>Plany na najbliższą przyszłość</h3>
            <p>Naszym celem jest opracowanie systemu, który sprawi, że klient będzie mógł uzyskać decyzję kredytową dosłownie w kilka sekund, a swoją tożsamość potwierdzi w wygodny sposób, korzystając z metod weryfikacji biometrycznej.</p>
            <div class="container col-md-12 gray-dummy-panel"></div>
        </div>

        <div class="container-fluid third-panel">
            <div class="container">
                <p>Zamierzamy udostępnić absolutnie wszystkie oferty kredytowe na rynku oraz tak uprościć cały proces, aby klient otrzymał pieniądze na swoim koncie maksymalnie w 15 minut. </p>
            </div>
            <div class="button-positions-adjust">
                <b-btn class="btn-oval">UDOSTĘPNIJ</b-btn>
                <b-btn class="btn-oval">TWEETUJ</b-btn>
            </div>
        </div>
        <div class="container-fluid second-panel">
            <h3>Jak stworzyliśmy najdokładniejsze i najszybsze narzędzie kredytowe na rynku</h3>
            <div class="timeline container">
                <div class="col-md-6 offset-md-3">
                    <slick ref="slick" :options="slickOptionsTimeline" id="slider-sync-history-1">
                        <div><p>2010</p></div>
                        <div><p>2012</p></div>
                        <div><p>2015</p></div>
                        <div><p>2016</p></div>
                        <div><p>2017</p></div>
                        <div><p>2018</p></div>
                    </slick>
                </div>
                <p>&#9679;</p>
                <div class="col-md-6 offset-md-3">
                    <slick ref="slick" :options="slickOptionsParagraphs" id="slider-sync-history-2">
                        <div><p>Kiedy jeden z założycieli Lendi ubiegał się o kredyt hipoteczny, sam doświadczył, jak skomplikowany i trudny jest to proces. Wiedział też jednak, jak za sprawą technologii można go uprościć.</p></div>
                        <div><p>Kiedy jeden z założycieli Lendi ubiegał się o kredyt hipoteczny, sam doświadczył, jak skomplikowany i trudny jest to proces. Wiedział też jednak, jak za sprawą technologii można go uprościć.</p></div>
                        <div><p>Kiedy jeden z założycieli Lendi ubiegał się o kredyt hipoteczny, sam doświadczył, jak skomplikowany i trudny jest to proces. Wiedział też jednak, jak za sprawą technologii można go uprościć.</p></div>
                        <div><p>Kiedy jeden z założycieli Lendi ubiegał się o kredyt hipoteczny, sam doświadczył, jak skomplikowany i trudny jest to proces. Wiedział też jednak, jak za sprawą technologii można go uprościć.</p></div>
                        <div><p>Kiedy jeden z założycieli Lendi ubiegał się o kredyt hipoteczny, sam doświadczył, jak skomplikowany i trudny jest to proces. Wiedział też jednak, jak za sprawą technologii można go uprościć.</p></div>
                        <div><p>Kiedy jeden z założycieli Lendi ubiegał się o kredyt hipoteczny, sam doświadczył, jak skomplikowany i trudny jest to proces. Wiedział też jednak, jak za sprawą technologii można go uprościć.</p></div>
                    </slick>
                </div>
            </div>
        </div>
        <div class="container-fluid second-panel">
            <h3>Wejście na rynek pożyczek gotówkowych</h3>
            <!--Use <b-embed> for media-->
            <div class="rectangle-2"></div>
            <p>Nasze rozwiązania, które zrewolucjonizowały rynek kredytów hipotecznych, wprowadzamy obecnie na rynek pożyczek gotówkowych. </p>
            <p>Znając wyzwania i specyfiką tego rynku oraz mając odpowiednie narzędzia i doświadczenie, dokonamy w tej sferze podobnej rewolucji. </p>
        </div>
        <div class="container-fluid first-panel">
            <div class="underline-title-box">NASZA MISJA</div>
            <h3>Ulepszyć rynek kredytowy w Polsce</h3>
            <div class="rectangle"></div>
        </div>
        <div class="vertical-center">
        <div class="container-fluid">
            <div class="row">
            <div class="media-container">
                <div class="col-md-12">
                <b-media>
                    <img slot="aside" src="./assets/img/1.svg" class="pagination-number">
                    <h5 class="mt-0">Jakość obsługi</h5>
                    <p>Już na pierwszym spotkaniu lub podczas rozmowy telefonicznej klient zna dokładne warunki poszczególnych ofert kredytowych i może wybrać najlepszą opcję dla siebie. To znaczne ułatwienie pracy eksperta finansowego – możliwe wyłącznie dzięki naszym rozwiązaniom technologicznym.</p>
                </b-media>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div class="vertical-center">
        <div class="container-fluid">
            <div class="row">
            <div class="media-container">
                <div class="col-md-12">
                    <b-media>
                        <img slot="aside" src="./assets/img/2.svg" class="pagination-number">
                        <h5 class="mt-0">Przejrzyste zasady i możliwość wyboru najlepszej oferty</h5>
                        <p>Już na pierwszym spotkaniu lub podczas rozmowy telefonicznej klient zna dokładne warunki poszczególnych ofert kredytowych i może wybrać najlepszą opcję dla siebie. To znaczne ułatwienie pracy eksperta finansowego – możliwe wyłącznie dzięki naszym rozwiązaniom technologicznym.</p>
                    </b-media>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div class="vertical-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="media-container">
                        <div class="col-md-12">
                            <b-media>
                                <img slot="aside" src="./assets/img/3.svg" class="pagination-number">
                                <h5 class="mt-0">Oszczędność czasu dla kredytobiorców i ekspertów</h5>
                                <p>Już na pierwszym spotkaniu lub podczas rozmowy telefonicznej klient zna dokładne warunki poszczególnych ofert kredytowych i może wybrać najlepszą opcję dla siebie. To znaczne ułatwienie pracy eksperta finansowego – możliwe wyłącznie dzięki naszym rozwiązaniom technologicznym.</p>
                            </b-media>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="vertical-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="media-container">
                        <div class="col-md-12">
                            <b-media>
                                <img slot="aside" src="./assets/img/4.svg" class="pagination-number">
                                <h5 class="mt-0">Realny dostęp online do kredytów</h5>
                                <p>Pracujemy nad przełomowym narzędziem, które pozwoli użytkownikom indywidualnym na precyzyjne porównanie ofert i umożliwi wzięcie kredytu bez wychodzenia z domu. Technologia, która do tej pory była zarezerwowana dla ekspertów, trafi w ręce użytkowników.</p>
                            </b-media>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid panel-gray">
            <div class="rectangle"></div>
            <p class="panel-gray-title">CO NAJWAŻNIEJSZE</p>
            <p>Powyższe rozwiązanie zakłada wsparcie eksperta, który trafi w końcowy etap procesu kredytowego i będzie mógł go sfinalizować. Dla eksperta do ogromna oszczędność czasu, a dla użytkownika spokój i poczucie bezpieczeństwa. W tym modelu wygrywają obie strony.</p>
        </div>
        <div class="container-fluid second-panel">
            <h3>Sieć ekspertów Lendi</h3>
            <p>Współpracuje z nami już 3500 ekspertów finansowych z całej Polski. Wyróżnia nas otwarte podejście do klienta oraz dostęp do najlepszej technologii na rynku.
                <br><br>
                Chcesz do nas dołączyć i wziąć udział w rewolucji technologicznej na polskim rynku kredytowym?</p>
            <div class="reference-panel-btn-wrapper offset-1">
                <b-btn class="btn-oval">DOŁĄCZ DO NAS</b-btn>
                <b-btn class="btn-oval">POZNAJ FRANCZYZĘ LENDI</b-btn>
            </div>
            <div style="height:50vh" class="gray-dummy-panel"></div>
        </div>
        <div class="container-fluid about-panel">
            <h3>Zespół</h3>
            <p>Poznajmy się!</p>
            <slick ref="slick" :options="slickOptionsImgBig">
                <div><img class="img-padding" src="./assets/img/circle.svg" alt="">
                    <p>Michał Petters</p>
                    <p>CEO</p></div>
                <div><img class="img-padding" src="./assets/img/circle.svg" alt="">
                    <p>Michał Petters</p>
                </div>
                <div><img class="img-padding" src="./assets/img/circle.svg" alt="">
                    <p>Michał Petters</p>
                </div>
                <div><img class="img-padding" src="./assets/img/circle.svg" alt="">
                    <p>Michał Petters</p>
                </div>
            </slick>
        </div>
        <div class="container-fluid contact-panel">
            <h3>Kontakt</h3>
            <p>Masz jakieś pytania albo chcesz zacząć z nami współpracę? Śmiało do nas napisz :)</p>
            <div class="container contact-showcase-panel">
                <p>DLA:</p>
                <div class="col-md-6 offset-md-3">
                    <slick ref="slick" :options="slickOptionsContacts" id="slider-sync-media-1">
                        <p>Miediów</p>
                        <p>Ekspertów</p>
                    </slick>
                    <p>&#9679;</p>
                </div>
                <slick ref="slick" :options="slickOptionsImgSmall" id="slider-sync-media-2">
                    <div><img class="img-padding" src="https://via.placeholder.com/120x120" alt="">
                        <h3>Joanna Zakrzewska</h3>
                        <p>joanna@lendi.pl</p></div>
                    <div><img class="img-padding" src="https://via.placeholder.com/120x120" alt="">
                        <p>Michał Petters</p>
                    </div>
                </slick>
            </div>

        </div>
        <div class="container-fluid footer-info">
            <div class="col-6 offset-3 ">
                <a href="#">LENDI PRO</a>
                <a href="#">FRANCZYZNA</a>
                <a href="#">CZĘSTE PYTANIA</a>
            </div>
            <img src="./assets/img/logo-contrast.svg" alt="">
            <div class="copyright-info">
                <p>© Lendi, 2018 | Warszawa, Rakwiecka 36/150 02-532 Warszawa </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick'
    import inViewportDirective from 'vue-in-viewport-directive'



    export default {
        name: 'app',
        components: {Slick},
        directives: [inViewportDirective],
        data() {
            return {
                slickOptionsImgBig: {
                    infinite: true,
                    centerMode: true,
                    arrows: false,
                    slidesToShow: 3,
                    responsive: [
                        {
                            breakpoint: 770,
                            settings: {
                                arrows: false,
                                slidesToShow: 2,
                                centerMode: true,
                                centerPadding: '40px'
                            }
                        },
                        {
                            breakpoint: 510,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                                centerMode: true,
                                centerPadding: '30px'
                            }
                        }
                    ]
                },
                slickOptionsImgSmall: {
                    infinite: false,
                    centerMode: true,
                    arrows: false,
                    slidesToShow: 1,
                    asNavFor: '#slider-sync-media-1',
                },
                slickOptionsTimeline: {
                    infinite: false,
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '40px',
                    asNavFor: '#slider-sync-history-2'
                },
                slickOptionsParagraphs: {
                    infinite: false,
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '0px',
                    asNavFor: '#slider-sync-history-1'
                },
                slickOptionsContacts: {
                    infinite: false,
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '0px',
                    asNavFor: '#slider-sync-media-2'
                },


            }
        }
    }
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .navbar-toggler-icon {
        background-image: url(./assets/img/nav-dots.svg) !important;
    }

    .navbar-toggler {
        border: none;
    }

    html, body {
        height: 100%;
    }

    h3 {
        font-size: 24px;
    }

    .rectangle {
        border-radius: 200px;
        background-color: #d8d8d8;
    }

    .first-panel {
        height: 100vh;
        color: white;
    }

    .first-panel h3 {
        line-height: 1.67;
        font-weight: 300;
        text-align: left;
    }

    .first-panel h3:nth-child(2) {
        text-align: center;
        margin: 0;
    }

    @media all and (max-width: 992px) {
        .first-panel h3:first-child {
            margin-left: 60px;
        }

        .navbar-placement {
            display: block !important;
        }

    }

    .first-panel, nav {
        background-color: #232d3a;
    }

    .first-panel .underline-title-box {
        text-align: center;
    }

    .first-panel > .rectangle {
        height: 156px;
        width: 156px;
        margin: 47px auto;
    }

    .second-panel {
        background-color: white;
        color: #000;
        padding: 24px;
    }

    .second-panel > h3,
    .about-panel > h3,
    .contact-panel > h3 {
        line-height: 1.67;
        font-weight: bold;
    }

    .second-panel p,
    .media-body p {
        font-size: 15px;
        line-height: 1.6;
    }

    .second-panel > .rectangle {
        height: 256px;
        width: 256px;
        margin: 35px auto;
    }

    .gray-dummy-panel {
        height: 35vh;
        border-radius: 16px;
        background-color: #d8d8d8;
        margin: 24px 0;
    }

    .third-panel {
        background-color: rgba(23, 44, 87, 0.05);
        height: 100vh;
        font-size: 19px;
        font-weight: 300;
        line-height: 2.11;
        padding-top: 48px;
        padding-bottom: 48px;
        position: relative;
    }

    .forth-panel {
        background-color: #fff;
        padding-top: 27px;
    }

    .forth-panel > h3 {
        font-weight: bold;
        padding-bottom: 27px;
    }

    .info-card-panel {
        text-align: center;
    }

    .info-card-panel > h3 {
        text-decoration: underline;
        font-weight: bold;
    }

    .info-card-panel .rectangle {
        width: 140px;
        height: 140px;
        margin: 10vh auto 0;
    }

    .btn-oval {
        border-radius: 22px;
        background-color: #fff;
        color: #000;
        border: none;
    }

    .button-positions-adjust {
        position: absolute;
        bottom: 48px;
    }

    .underline-title-box {
        font-weight: normal;
        font-size: 15px;
        line-height: 2.67;
        margin: auto;
        border-bottom: 1px solid #fff;
        width: 30vw;
        padding-top: 114px;
        padding-bottom: 16px;
    }

    .media-container {
        padding-top: 150px;
        padding-bottom: 106px;
    }

    .media-body > h5 {
        font-size: 19px;
        font-weight: bold;
        line-height: 1.47;
    }

    .pagination-number {
        height: 97px;
        width: 44px;
        opacity: 0.3;
    }

    .panel-gray {
        background-color: rgba(23, 44, 87, 0.05);
        height: 100vh;
        position: relative;
        font-size: 19px;
        font-weight: 300;
        line-height: 2.11;
        text-align: center;
        padding-top: 83px;
    }

    .panel-gray > .rectangle {
        width: 136px;
        height: 136px;
        margin: auto;
        position: absolute;
        left: 0;
        right: 0;
        top: -68px;
    }

    .panel-gray-title {
        font-size: 15px;
        line-height: 2.67;
        letter-spacing: 0.6px;
    }

    .reference-panel-btn-wrapper {
        padding-top: 45px;
        padding-bottom: 45px;
    }

    .reference-panel-btn-wrapper > .btn-oval {
        background-color: #d8d8d8;
        color: black;
        margin-top: 8px;
        margin-bottom: 8px;
        padding: 8px;
    }

    .about-panel {
        height: 100vh;
        background-color: #fff;
        text-align: center;
    }

    .contact-panel {
        text-align: center;
        height: 100vh;
    }

    .footer-info {
        height: 100vh;
        padding-top: 88px;
        text-align: center;
        position: relative;
        background-color: #d8d8d8;
    }

    .footer-info > div {
        line-height: 3;
        left: 0;
        right: 0;
    }

    .footer-info div > a {
        font-size: 15px;
        font-weight: 800;
        letter-spacing: 0.6px;
        color: #000;
    }

    .img-padding {
        padding: 9px;
        margin: auto;
    }

    .timeline {
        text-align: center;
        padding-top: 60px;
    }

    .contact-showcase-panel {
        padding-top: 24px;
    }

    #slider-sync-media-1 {
        height: 24px;
    }

    .copyright-info {
        font-size: 15px;
        position: absolute;
        bottom: 80px;
        color: rgba(38, 38, 38, 0.4);
        letter-spacing: normal;
    }

    .copyright-info > p {
        line-height: 1.6;
        width: 50%;
        margin: auto;
    }

    .footer-info > img {
        padding-top: 132px;
    }

    .vertical-center {
        min-height: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
</style>
