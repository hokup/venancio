import React, { useEffect } from 'react'
import $ from 'jquery';
import { Parallax } from 'react-scroll-parallax';
import { Helmet } from "react-helmet";

// Images svg
import logoLight from '../assets/svg/logo-light.svg'
import logoDark from '../assets/svg/logo-dark.svg'
import venancioLogo from '../assets/svg/venancio-logo.svg'

// Images jpg
import img1 from '../assets/img/1.jpg'
import img16 from '../assets/img/16.jpg'
import img20 from '../assets/img/20.jpg'
import img22 from '../assets/img/22.jpg'
import img23 from '../assets/img/23.jpg'


export default function Cardapio() {
   function Header() {
      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      var header = $('.header'),
         pos = header.offset();

      if (window.screen.width > 991) {
         $(window).scroll(function () {
            if ($(this).scrollTop() > pos.top + 50 && header.hasClass('default')) {
               header.fadeOut('fast', function () {
                  $(this).removeClass('default').addClass('switched-header').fadeIn(200);
                  $('.scroll-to-top').addClass('active');
               });
            } else if ($(this).scrollTop() <= pos.top + 50 && header.hasClass('switched-header')) {
               header.fadeOut('fast', function () {
                  $(this).removeClass('switched-header').addClass('default').fadeIn(100);
                  $('.scroll-to-top').removeClass('active');
               });
            }
         });
      }

      else if (isMobile || window.screen.width < 992) {
         $(this).removeClass('default').addClass('switched-header');
         $('.scroll-to-top').addClass('active');
      }
   }

   function BGImg() {
      $('.background-img').each(function () {
         var path = $(this).children('img').attr('src');
         $(this).css('background-image', 'url("' + path + '")').css('background-position', 'initial');
      });
   }

   useEffect(() => {
      // Windows load
      $(window).on("load", function () {
         $(".loader-inner").fadeOut();
         $(".loader").delay(200).fadeOut("slow");
      });

      Header();

      BGImg();

   }, []);

   function ParallaxImage(props) {
      return (
         <Parallax y={[-10, -40]} tagOuter="figure" className="jarallax-img">
            <img className="parallax-img" src={`${props.imgSrc}`} />
         </Parallax>
      )
   }

   return (
      <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Cardápio | Venancio Restaurante & Bar</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         <div class="loader">
            <div class="loader-inner">
               <svg width="120" height="220" viewbox="0 0 100 100" class="loading-spinner" version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle class="spinner" cx="50" cy="50" r="21" fill="#ffffff" stroke-width="3" />
               </svg>
            </div>
         </div>
         <div class="wrapper">
            <header class="header default">
               <div class="header-section">
                  <div class="container-fluid ">
                     <nav class="navbar navbar-expand-lg header-navbar ">
                        <a class=" navbar-brand navbar-logo scroll" href="/">
                           <img class="mx-auto logo-light" src={logoLight} alt="" />
                           <img class="mx-auto logo-dark" src={logoDark} alt="" />
                        </a>
                        <button class="navbar-toggler btn-navbar-toggler" type="button" data-toggle="collapse"
                           data-target=".nav-menu" aria-expanded="true" aria-label="Toggle navigation">
                           <span class="fa fa-bars"></span>
                        </button>
                        <div class="nav-menu collapse navbar-collapse navbar-collapse justify-content-end py-0 ">
                           <ul class=" navbar-nav  header-navbar-nav">
                              <li><a class=" nav-link scroll" href="#petiscos">PETISCOS</a></li>
                              <li><a class=" nav-link scroll" href="#pratosprincipais">PRATOS PRINCIPAIS</a></li>
                              <li><a class=" nav-link scroll" href="#sobremesas">SOBREMESAS</a></li>
                              <li><a class=" nav-link scroll" href="#bebidas">BEBIDAS</a></li>
                              <li><a class=" nav-link scroll" href="#cartavinhos">VINHOS</a></li>
                              <li class="ml-lg-auto"><a class="nav-link pr-0 pb-sm-4 pb-sm-0 nav-divider d-flex cardapio"
                                 style={{ borderRight: 'none' }} href="/">PÁGINA INICIAL</a></li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </header>
            <section class="spacer-xlg-alt jarallax gradient-overlay gradient-overlay-dark" id="petiscos">
               <ParallaxImage imgSrc={img1} />
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col">
                        <div class=" text-center">
                           <h1 class="display-4 font-alt text-white mb-0">Petiscos</h1>
                        </div>
                     </div>
                  </div>
               </div>
               <svg class="hero-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"
                  preserveAspectRatio="none" width="100%" height="100">
                  <path d="M0 100 C40 0 60 0 100 100 Z"></path>
               </svg>
            </section>
            <section class="  spacer-one-bottom-lg spacer-one-top-md">
               <div class="container">
                  <div class="row justify-content-around align-items-center">
                     <div class="col-md-8 col-lg-7 ">
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Croquete de
                              Parma</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$35,00</span>
                              <p class="mb-0 font-size-14 description-width">Croquete de Parma com Bechamel e Maionese de
                           Tabasco</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Croqueta de
                              Cordeiro com Molho de Iogurte</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$35,00</span>
                              <p class="mb-0 font-size-14 description-width">Croquete de Cordeiro desfiado com Molho de
                           Iogurte e Hortelã</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Croqueta de
                              Salmao com Molho Teriyaki</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$35,00</span>
                              <p class="mb-0 font-size-14 description-width">Croquete de Salmão com Molho Teriyaki</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Lula à
                              provençal</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$60,00</span>
                              <p class="mb-0 font-size-14 description-width">Anéis e Tentáculos de Lula a moda Provençal:
                              cebola, alho e
                           salsinha. Servido com Aioli de Páprica Picante - acompanha Pão de Fermentação Natural </p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Mexilhões ao
                              Vinho Branco</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$45,00</span>
                              <p class="mb-0 font-size-14 description-width">Mexilhões ao Vinho Branco servidos na própria
                              casca - acompanha Pão
                           de Fermentação Natural</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Mini
                              Almondegas à Parmegiana</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$40,00</span>
                              <p class="mb-0 font-size-14 description-width">Bolinhas bem temperadas de carne com Molho de
                              Tomate da casa e
                           bastante Queijo gratinado</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Bolinho de
                              Bacalhau</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$45,00</span>
                              <p class="mb-0 font-size-14 description-width">O tradicional - feito aqui. Acompanha limão a
                              francesa e azeite pra
                           xuxar.</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Camarão
                              Empanado</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$119,00</span>
                              <p class="mb-0 font-size-14 description-width">Porção de Camarão empanado com Coco e servido com
                              Maionese de
                           Gremolata.</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Polvo à
                              Vinagrete</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$57,00</span>
                              <p class="mb-0 font-size-14 description-width">Polvo cozido e temperado ao estilo Vinagrete -
                              acompanha Pão de
                           Fermentação Natural</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Bruschetta de
                              Cogumelos Frescos</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$25,00</span>
                              <p class="mb-0 font-size-14 description-width">Um clássico com recheio revisitado. Nosso mix de
                              cogumelos frescos
                           leva Eryngui, Shimeji, Shitake e Paris.</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Bruschetta de
                              Tomate e Búfala</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$25,00</span>
                              <p class="mb-0 font-size-14 description-width">Pode pedir! É clássico, mas é top!</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Dueto de
                              Bruschetas</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$25,00</span>
                              <p class="mb-0 font-size-14 description-width">Uma de Cada!</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Steak
                              Tartare</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$39,00</span>
                              <p class="mb-0 font-size-14 description-width">Filet Mignon picado na ponta da faca - servido
                              cru. acompanha Pão
                           de Fermentação Natural</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Tartare de
                              Salmão</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$45,00</span>
                              <p class="mb-0 font-size-14 description-width">Camarão e Salmão marinados, temperados com Dill e
                              Iogurte Natural -
                           acompanha Pão Pita Caseiro</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Torre
                              Grega</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$39,00</span>
                              <p class="mb-0 font-size-14 description-width">Quibe cru, Tabule, Coalhada Seca e Cebola Frita -
                              Acompanha Pão
                           Pita Caseiro</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Batata
                              Frita</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$24,99</span>
                              <p class="mb-0 font-size-14 description-width">Batata Frita! Sequinha e Crocante!</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="spacer-xlg jarallax gradient-overlay gradient-overlay-dark" id="pratosprincipais">
               <ParallaxImage imgSrc={img16} />
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col">
                        <div class=" text-center">
                           <h1 class=" display-4 font-alt text-white mb-0">Pratos Principais</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="  spacer-double-lg">
               <div class="container">
                  <div class="row justify-content-around align-items-center">
                     <div class="col-md-8 col-lg-7 ">
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Saladas</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Espinafre com
                              Buchette e Balsâmico</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$39,00</span>
                              <p class="mb-0 font-size-14 description-width">Salada de Espinafre, Nozes, Queijo Buchette
                              Empanado e Molho de
                           Balsâmico</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Niçoise</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$49,00</span>
                              <p class="mb-0 font-size-14 description-width">Mix de Folhas Baby, Atum em Crosta de Gergelim,
                              Ovo e Ervilhas
                           Tortas - Servida com Molho de Limão Siciliano</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Panzanella com
                              Carpaccio de Abobrinha</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$36,00</span>
                              <p class="mb-0 font-size-14 description-width">Carpaccio de Abobrinha Marinada. Rúcula, Tomate
                              Confit, Azeitonas
                           Pretas e Pepino – Mollho de Balsâmico</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Síria</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$39,00</span>
                              <p class="mb-0 font-size-14 description-width">Cous Cous Marroquino, Berinjela Defumada,
                              Castanhas, Passas e Zatar
                           - Molho de Iogurte</p>
                           </div>
                        </div>
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Risotos</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Beterraba com
                              Iogurte defumado</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$39,00</span>
                              <p class="mb-0 font-size-14 description-width">Risoto rosa de Beterraba e Iogurte Defumado</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Cordeiro</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$65,00</span>
                              <p class="mb-0 font-size-14 description-width">Risoto de Paleta Desfiada, Cebola Caramelizada e
                           Hortelã frita</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Nero</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$69,00</span>
                              <p class="mb-0 font-size-14 description-width">Arroz Negro com Frutos do Mar</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Cogumelos</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$65,00</span>
                              <p class="mb-0 font-size-14 description-width">Risoto de Funghi e Cogumelos Frescos com BomBom
                              de Mignon e Molho
                           Glace</p>
                           </div>
                        </div>
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Massas</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Fet. Ragu
                              Polvo</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$65,00</span>
                              <p class="mb-0 font-size-14 description-width">Massa feita em casa com Polvo e Ragu de Linguiça
                              Fresca -
                           verdadeiro casamento entre mar e montanha</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Gnocchi</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$39,00</span>
                              <p class="mb-0 font-size-14 description-width">Gnocchi de Semolina Gratinado com Fonduta de
                           Parmesão</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Spaghetti</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$69,00</span>
                              <p class="mb-0 font-size-14 description-width">Massa seca italiana com Molho de Tomates e Frutos
                              do Mar da casa
                        </p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Ravioli</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$59,00</span>
                              <p class="mb-0 font-size-14 description-width">Massa feita na casa recheada de Frutos do Mar.
                              Acompanha ervilhas
                           tortas, molho Bisque e Ovas</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Lasanha</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$69,00</span>
                              <p class="mb-0 font-size-14 description-width">Massa feita na casa com Bacalhau Confit, Bechamel
                              e Espinafre
                           fresco. Servido juntamente de tomates assados.</p>
                           </div>
                        </div>
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Peixes</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Robalo</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$79,00</span>
                              <p class="mb-0 font-size-14 description-width">Pescado em crosta de amêndoas com aspargos
                              grelhados, tapenade de
                           azeitonas e molho de limão siciliano</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Salmao e
                              Camarão</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$74,00</span>
                              <p class="mb-0 font-size-14 description-width">Salmão com Camarão e Bisque ao Molho de
                              Manjericão e Mil Folhas de
                           Batata</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Atum em
                              Crosta</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$59,00</span>
                              <p class="mb-0 font-size-14 description-width">Atum em Crosta de Gergelim com Mousseline de
                              Mandioquinha com
                           Wasabi, Gremolata e Farofa Crocante</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Lombo Bacalhau
                              Confit</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$99,00</span>
                              <p class="mb-0 font-size-14 description-width">Lombo de Bacalhau Confit com Batata Assada,
                              Tomates Tostados,
                           Brócolis, Azeitonas e Ovo cozido</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Polvo</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$69,00</span>
                              <p class="mb-0 font-size-14 description-width">Polvo com Molho de Ervas, Batata Assada, Tomates
                              Confit e Tostados
                           – Servido com Aioli de Páprica Picante</p>
                           </div>
                        </div>
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Carnes</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Mignon
                              recheado</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$69,00</span>
                              <p class="mb-0 font-size-14 description-width">Filet Mignon recheado de Brie e Aspargos envolto
                              de Parma com
                           Risoto de Parmesão</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Prime Rib
                              Suíno</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$55,00</span>
                              <p class="mb-0 font-size-14 description-width">Prime Rib Suino à Milanesa, Mousseline de
                              Mandioquinha, Gremolata e
                           Cebola Caramelizada</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Bombom de
                              Mignon</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$69,00</span>
                              <p class="mb-0 font-size-14 description-width">Bombom de Mignon ao Molho Mostarda com Polenta
                           Frita e Brócolis</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Galantine de
                              Frango</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$49,00</span>
                              <p class="mb-0 font-size-14 description-width">Gallantine de Frango recheada de Linguiça e
                              Pistache com Parma,
                           acompanha Risoto de Tomate</p>
                           </div>
                        </div>
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Família</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Cassoulet com
                              Costelinha</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$119,00</span>
                              <p class="mb-0 font-size-14 description-width">Feijão Branco com Linguiças e Costelinha
                              Glaceada, servido junto de
                           arroz branco e farofinha crocante</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Paleta de
                              Cordeiro</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$230,00</span>
                              <p class="mb-0 font-size-14 description-width">Paleta de Cordeiro inteira na mesa. Acompanha mil
                              folhas de batata
                           e mini legumes assados</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Caldeirada de
                              Peixe e Frutos do Mar</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$179,00</span>
                              <p class="mb-0 font-size-14 description-width">Acompanha arroz e farofa crocante.</p>
                           </div>
                        </div>
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Kids</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Escalope</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">Escalope de Mignon, arroz e batatas assadas</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Peixe</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$34,00</span>
                              <p class="mb-0 font-size-14 description-width">Pescado grelhado, arroz e pure de mandioquinha
                        </p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Bolonhesa</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14 description-width">Penne ao molho bolonhesa</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Molho
                              Tomate</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14 description-width">Penne ao molho de tomates</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section class="spacer-xlg jarallax gradient-overlay gradient-overlay-dark" id="sobremesas">
               <ParallaxImage imgSrc={img20} />
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col">
                        <div class=" text-center">
                           <h1 class="display-4 font-alt text-white mb-0">Sobremesas</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="spacer-double-lg">
               <div class="container">
                  <div class="row justify-content-around align-items-center">
                     <div class="col-md-8 col-lg-7 ">
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Panna
                              Cotta</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">Creme e Iogurte com Frutas Vermelhas e Crocante
                           de Laranja</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Tiramisu</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$34,00</span>
                              <p class="mb-0 font-size-14 description-width">Um clássico totalmente feito na casa. A
                              Savoiardi, aquele
                           biscoitinho, também!</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Salame</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14 description-width">Servido no formato de salame, pronto pra fatiar e
                              dividir na mesa.
                           Acompanha sorvete de maracujá</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Tortino</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14 description-width">Bolinho de amêndoas assado com recheio de limão e
                              sorvete de frutas
                           vermelhas.</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Petit
                              Gateau</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14 description-width">De chocolate! Acompanha sorvete de baunilha.</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Manjar</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14 description-width">Manjar de doce de leite com coco, calda de doce
                              de leite morna e
                           sorvete de Tapioca.</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Canolli</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14 description-width">O poderoso chefão benhê!</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Verrine</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14 description-width">Servido montado na taça. Morango marinado no
                              Balsâmico, Chantily de
                           Morango e Suspiros</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="spacer-xlg jarallax gradient-overlay gradient-overlay-dark" id="bebidas">
               <ParallaxImage imgSrc={img22} />

               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col">
                        <div class=" text-center">
                           <h1 class="display-4 font-alt text-white mb-0">Bebidas</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="spacer-double-lg">
               <div class="container">
                  <div class="row justify-content-around align-items-center">
                     <div class="col-md-8 col-lg-7 ">

                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Não Alcoólicos</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Água</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">Com ou sem gás</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Água
                              Tônica</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">Schweppes</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Refrigerante</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">Coca-Cola, Coca-Cola Zero, Sprite, Guaraná
                           Antarctica e Guaraná Antarctica Zero</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Suco
                              Natural</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">Frutas da estação</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Chá
                              Mate</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$12,90</span>
                              <p class="mb-0 font-size-14 description-width">Erva mate</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Chá de
                              Hibisco</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$12,90</span>
                              <p class="mb-0 font-size-14 description-width">Flor de hibisco</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Creta sem
                              Álcool</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$12,90</span>
                              <p class="mb-0 font-size-14 description-width">Purê de morango, xarope de morango e água com gás
                        </p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Ginger sem
                              Álcool</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$12,90</span>
                              <p class="mb-0 font-size-14 description-width">Xarope de gengibre e água com gás</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Ginger Lemon
                              sem Álcool</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$12,90</span>
                              <p class="mb-0 font-size-14 description-width">Xarope de gengibre, limão siciliano e água com
                           gás</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Café
                              Espresso</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$12,90</span>
                              <p class="mb-0 font-size-14 description-width">Café Nespresso</p>
                           </div>
                        </div>

                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Caipirinhas</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Caipirinha</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Frutas da estação</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Caipiroska</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Frutas da estação</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Saqueirinha</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$28,00</span>
                              <p class="mb-0 font-size-14">Frutas da estação</p>
                           </div>
                        </div>

                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Drinks Autorais</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Jager Bomb</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$28,00</span>
                              <p class="mb-0 font-size-14">Jagermeister e Red Bull</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Bolinho da Vovó</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$22,00</span>
                              <p class="mb-0 font-size-14">Frangelico, vodka, xarope de baunilha e espuma cítrica</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Venancio</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$18,00</span>
                              <p class="mb-0 font-size-14">Maracujá, capim santo, vodka e açucar</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Campo Dourado</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$33,00</span>
                              <p class="mb-0 font-size-14">Gin, maracujá, xarope de maça verde, abacaxi e Red Bull</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Ibiza</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$33,00</span>
                              <p class="mb-0 font-size-14">Aperol, limão, Red Bull Melancia</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Monaco</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$28,00</span>
                              <p class="mb-0 font-size-14">Espumante, maracujá e pêssego</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Drink de Paçoca</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$18,00</span>
                              <p class="mb-0 font-size-14">Vodka, paçoca, creme de leite e açucar</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Drink de Côco</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$18,00</span>
                              <p class="mb-0 font-size-14">Vodka, leite de côco, creme de leite, xarope de açucar</p>
                           </div>
                        </div>

                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Drinks Clássicos</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Apple Martini</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$18,00</span>
                              <p class="mb-0 font-size-14">Cointreau, vodka, licor de maça verde</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Negroni</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$18,00</span>
                              <p class="mb-0 font-size-14">Gin, Martini Rosso, Campari</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Whisky Sour</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14">Jack Daniels, limão, xarope de açucar e ovo</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Mojito</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$18,00</span>
                              <p class="mb-0 font-size-14">Limão, Rum, hortelã, água com gás e xarope de açucar</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Dry Martini</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14">Gin, Martini Dry e azeitona</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Apparent Sour</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$24,00</span>
                              <p class="mb-0 font-size-14">Aperol, St. Germain e limão</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Moscow Mule</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$18,00</span>
                              <p class="mb-0 font-size-14">Vodka, limão, xarope de gengibre e espuma cítrica</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Margarita</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$28,00</span>
                              <p class="mb-0 font-size-14">Tequila, limão e Cointreau</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Jager Ginbre</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$22,00</span>
                              <p class="mb-0 font-size-14">Jagermeister, xarope de gengibre e limão</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Cararrilho</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$22,00</span>
                              <p class="mb-0 font-size-14">Licor 43 e café expresso</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Cosmopolitan</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$22,00</span>
                              <p class="mb-0 font-size-14">Vodka, limão, laranja e cranberry</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Aperol Spritz</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$22,00</span>
                              <p class="mb-0 font-size-14">Aperol, espumante e água com gás</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Fitz Gerald</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Gin, limão, xarope de açucar e Angustura</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">The Bramble</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Gin, limão, xarope de açucar e Chambord</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Old Fashion</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Jack Daniels, Angustura, açucar e água com gás</p>
                           </div>
                        </div>

                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Gin's</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Gin Tônica</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Gin e tônica</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Gin Mediterrâneo</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Gin, limão e tônica</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Gin Pomelo Rose</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Gin, chá de hibisco e tônica</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Gin Tangibre</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Gin, xarope de gengibre, tangerina e tônica</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Gin Capim Santo</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Gin, xarope de capim e tônica</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Gin Strawberry</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Gin, purê de morango, xarope de morango e tônica</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span
                                 class="bg-white">Gin Pitaya</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$26,00</span>
                              <p class="mb-0 font-size-14">Gin, Curaçau Blue, xarope de pitaya, xarope de lichia e tônica</p>
                           </div>
                        </div>

                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Sangrias</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Sangria Tinta</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$44,00</span>
                              <p class="mb-0 font-size-14">Vinho tinto, Cointreau, Conhaque e frutas</p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Clericot</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$99,00</span>
                              <p class="mb-0 font-size-14">Prosseco, água com gás, Cointreau e frutas</p>
                           </div>
                        </div>

                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Chopps e Cervejas</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Budweiser
                              330ml</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Becks
                              330ml</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Chopp Brahma
                              600ml</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Chopp Colorado
                              Appia 300ml</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Brahma 0,0% -
                              Sem Álcool</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                           </div>
                        </div>

                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Doses</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Smirnoff</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Sagatiba</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Red Label</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Black Label</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Double Black</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Blue Label</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Chivas</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Jack Daniels Nº7</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Ballantines</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Jack Daniels Apple</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Gentleman Jack</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Single Barrel</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Woodford Reserve</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">José Cuervo</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">1800</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Baileys</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Limoncello</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Licor Café Sheridans</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Bombay</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Tanqueray</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Hendricks</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Bull Dog</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Monkey 47</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Ketel One</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Ciroc</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Absolute</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Grey Goose</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">London Nº1</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Salinas</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Jack Daniels Honey</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Jack Daniels Fire</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">El Jimador</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Campari</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Boazinha</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Espírito de Minas</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="spacer-xlg jarallax gradient-overlay gradient-overlay-dark" id="cartavinhos">
               <ParallaxImage imgSrc={img23} />
               <div class="container">
                  <div class="row justify-content-center">
                     <div class="col">
                        <div class=" text-center">
                           <h1 class="display-4 font-alt text-white mb-0">Carta de Vinhos</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section class="spacer-double-lg">
               <div class="container">
                  <div class="row justify-content-around align-items-center">
                     <div class="col-md-8 col-lg-7 ">
                        <h2 class="h3 font-alt mb-6 text-center">Espumante</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Cava Don Roman
                              Brut</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Espanha</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Macabeo, Parellada e Xarel.lo</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Marqués de Tomares</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Villa
                              Fabrizia</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Itália</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Trebbiano e Chardonnay</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Villa Fabrizia</b></p>
                           </div>
                        </div>
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Branco</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Bodega Vieja
                              Sauvignon Blanc-Semillon</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Chile</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>50% Sauvignon Blanc e 50% Semillon</b>
                              </p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Bodega Vieja</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Antares
                              Sauvignon Blanc</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Chile</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Sauvignon Blanc</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Antares</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Santa Carolina
                              Estrelas Reserva Sauvignon Blanc</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Chile </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Sauvignon Blanc </b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Santa Carolina </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Céfiro Reserva
                              Chardonnay</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Chile</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Chardonnay</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Viña Casablanca </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Alfredo Roca
                              Chardonnay </span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Argentina </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Chardonnay </b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Alfredo Roca </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Nieto
                              Senetiner Fran Chardonnay </span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Argentina </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Chardonnay </b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Bodegas Nieto Senetiner </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Nederburg 1791
                              Sauvignon Blanc</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>África do Sul </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Sauvignon Blanc </b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Nederburg </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">99 Rosas
                              Chardonnay-Viognier </span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Espanha </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>70% Chardonnay e 30% Viognier Orgânico e
                              Ecológico </b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Domínio de Punctum </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Heritage Blanc
                           </span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>França </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Colombard, Ugni Blanc e Folle Blanche
                           </b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Patriarche </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Chateau Reynon
                              Sauvignon Blanc </span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>França </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Sauvignon Blanc </b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Denis Dubordieu Domanies </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Frascati
                           </span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Itália </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>40% Malvasia di Candia, 30% </b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Villa Fabrizia </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Terras del Rei
                           </span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Portugal </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Antão Vaz, Síria, Rabo de Ovelha e Perrum
                           </b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Carmim </b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Regia
                              Colheita</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Portugal </b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Antão Vaz e Arinto</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Carmim </b></p>
                           </div>
                        </div>
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Rosé</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">99
                              Rosas</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Espanha</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>50% Garnacha e 50% Bobal Jovem</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Domínio de Punctum</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Alfredo
                              Roca</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Argentina</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Merlot</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Alfredo Roca</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Céfiro
                              Reserva</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Chile</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Pinot Noir</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Viña Casablanca</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Jas Des Vignes
                              Provence Rosé IGP</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>França</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>60% Grenache, 20% Syrah, 10% Cinsault e
                              10% Muscat</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Ravoire & Fils</b></p>
                           </div>
                        </div>
                        <h2 class="h3 font-alt mb-6 mt-6 text-center">Tinto</h2>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Bodega Vieja
                              Cabernet Sauvignon-Merlot</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Chile</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>75% Cabernet Sauvignon e 25% Merlot</b>
                              </p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Bodega Vieja</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Antares
                              Carmenere</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Chile</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Carmenère</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Antares</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Céfiro
                              Carmenere</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Chile</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Carmenère</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Viña Casablanca</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Alfredo Roca
                              Cabernet Sauvignon</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Argentina</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Cabernet Sauvignon</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Alfredo Roca</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Alfredo Roca
                              Pinot Noir</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Argentina</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Pinot Noir</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Alfredo Roca</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Nieto
                              Senetiner Fran Malbec</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Argentina</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Malbec</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Bodegas Nieto Senetiner</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Nieto
                              Senetiner Estate Bottled Malbec</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Luján de Cuyo, Mendoza</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>100% Malbec</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Bodegas Nieto Senetiner</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Cadus
                              Tupungato Cabernet Sauvignon</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Argentina</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Cabernet Sauvignon</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Cadus Wines</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Nederburg 1791
                              Shiraz</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>África do Sul</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Shiraz</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Nederburg</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Jacob’s Creek
                              Cabernet Sauvignon-Shiraz</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Austrália</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>60% Shiraz 40% Cabernet Sauvignon</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Jacob's Creek</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Pata Negra Oro
                              tempranillo</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Espanha</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Tempranillo</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Garcia Carrion/Pata Negra</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">99 Rosas
                              Tempranillo - Cabernet Sauvignon</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Espanha</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>70% Tempranillo e 30% Cabernet
                              Sauvignon</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Domínio de Punctum</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Marqués de
                              Tomares Excellence</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Espanha</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>90% Tempranillo e 10% Graciano</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Marqués de Tomares</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Heritage
                              Rouge</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>França</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Carignan, Grenache e Syrah.</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Patriarche</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Secret de
                              Campagne Vin de Pays</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>França</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>60% Grenache, 30% Vieux Carignan e 10%
                              Cinsault</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Cave de Cairanne</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Abel Pinchard
                              Pinot Noir</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>França</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>100% Pinot Noir</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Abel Pinchard</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Corbelli
                              Chianti DOCG</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Itália</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>85% Sangiovese, 10% Canaiolo e 5%
                              Ciliegiolo</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Castellani</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Forte Ambrone
                              Rosso </span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Itália</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Blend de Cepas Italianas</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Castellani</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Brunello di
                              Montalcino Vila Frabrizia</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Itália</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Sangiovese Grosso</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Cantina Villa Fabrizia</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Terras d'el
                              Rei</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Portugal</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Castelão, Aragonês e Trincadeira.</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Carmim</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Loios</span>
                              </h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Portugal</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Aragonês, Trincadeira e Castelão</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>João Portugal Ramos</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Regia
                              Colheita</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Portugal</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Aragonês, Trincadeira e Alicante
                              Bouschet</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Carmim</b></p>
                           </div>
                        </div>
                        <div class="media align-items-center mb-4 ">
                           <div class="media-body position-relative">
                              <h6 class="mb-0 position-relative  z-index-2 font-size-15"><span class="bg-white">Montes
                              Toscanini Reserva Familiar Tannat</span></h6>
                              <span class="dots-price"></span>
                              <span class="menu-price  mb-0 h6">R$29,00</span>
                              <p class="mb-0 font-size-14 description-width">País: <b>Uruguai</b></p>
                              <p class="mb-0 font-size-14 description-width">Uva: <b>Tannat</b></p>
                              <p class="mb-0 font-size-14 description-width">Produtor: <b>Montes Toscanini</b></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <footer class="footer bg-dark spacer-one-top-md">
               <svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"
                  preserveAspectRatio="none" width="100%" height="100">
                  <path d="M0 100 C40 0 60 0 100 100 Z"></path>
               </svg>
               <div class="container space-top-2 space-bottom-1">
                  <div class="row justify-content-lg-start mb-5">
                     <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                        <a class="d-inline-block mb-3 footer-logo" href="index.html">
                           <img src="assets/svg/venancio-logo.svg" style={{ width: '125px !important' }} alt="" />
                        </a>
                        <p class="font-size-14 ">© 2021 Venancio. Todos direitos <br /> reservados.</p>
                        <div>
                           <ul class="list-inline mb-0">
                              <li class="list-inline-item mb-2 mb-lg-0 mr-1"><a class="social-icon" href="#"><span
                                 class="fab fa-facebook-f"></span></a></li>
                              <li class="list-inline-item mr-1"><a class="social-icon " href="#"><span
                                 class="fab fa-twitter"></span></a></li>
                              <li class="list-inline-item"><a class="social-icon " href="#"><span
                                 class="fab fa-instagram"></span></a></li>
                           </ul>
                        </div>
                     </div>
                     <div class="col-lg-4 col-sm-6 mb-4">
                        <h3 class="h6 text-white mb-3  font-size-15">Endereço</h3>
                        <address>
                           <ul class="list-group list-group-flush list-group-borderless mb-0">
                              <li class="list-group-item">+55 (11) 3747-0096 </li>
                              <li class="list-group-item">
                                 <a href="mailto:contato@venancio.com.br">contato@venancio.com.br</a>
                              </li>
                              <li class="list-group-item">Rua Serra De Japi, 789 <br /> Vila Gomes Cardim - 03.309-000</li>
                           </ul>
                        </address>
                     </div>
                     <div class=" col-lg-4 col-sm-6 mb-4">
                        <h3 class="h6 text-white mb-3  font-size-15">Hours of opening</h3>
                        <div class="opening-hours-container font-size-14 ">
                           <span class="opening-hours-holder-inner">
                              <span class="opening-hours-day-holder">
                                 <span class="opening-hours-day">Segunda</span>
                              </span>
                              <span class="opening-hours-line"></span>
                              <span class="opening-hours-time">10:00 - 22:00</span>
                           </span>
                        </div>
                        <div class="opening-hours-container font-size-14 ">
                           <span class="opening-hours-holder-inner">
                              <span class="opening-hours-day-holder">
                                 <span class="opening-hours-day">Terça</span>
                              </span>
                              <span class="opening-hours-line"></span>
                              <span class="opening-hours-time">10:00 - 22:00</span>
                           </span>
                        </div>
                        <div class="opening-hours-container font-size-14 ">
                           <span class="opening-hours-holder-inner">
                              <span class="opening-hours-day-holder">
                                 <span class="opening-hours-day">Quarta</span>
                              </span>
                              <span class="opening-hours-line"></span>
                              <span class="opening-hours-time">10:00 - 22:00</span>
                           </span>
                        </div>
                        <div class="opening-hours-container font-size-14 ">
                           <span class="opening-hours-holder-inner">
                              <span class="opening-hours-day-holder">
                                 <span class="opening-hours-day">Quinta</span>
                              </span>
                              <span class="opening-hours-line"></span>
                              <span class="opening-hours-time">10:00 - 22:00</span>
                           </span>
                        </div>
                        <div class="opening-hours-container font-size-14 ">
                           <span class="opening-hours-holder-inner">
                              <span class="opening-hours-day-holder">
                                 <span class="opening-hours-day">Sexta</span>
                              </span>
                              <span class="opening-hours-line"></span>
                              <span class="opening-hours-time">10:00 - 22:00</span>
                           </span>
                        </div>
                        <div class="opening-hours-container font-size-14 ">
                           <span class="opening-hours-holder-inner">
                              <span class="opening-hours-day-holder">
                                 <span class="opening-hours-day">Sábado</span>
                              </span>
                              <span class="opening-hours-line"></span>
                              <span class="opening-hours-time">10:00 - 22:00</span>
                           </span>
                        </div>
                        <div class="opening-hours-container font-size-14 ">
                           <span class="opening-hours-holder-inner">
                              <span class="opening-hours-day-holder">
                                 <span class="opening-hours-day">Domingo</span>
                              </span>
                              <span class="opening-hours-line"></span>
                              <span class="opening-hours-time">Fechado</span>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="container-fluid d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: '#131313', height: '82px' }}>
                  <div class="col-12 text-sm-center flex-column justify-content-center align-items-center">
                     <img style={{ maxWidth: '15px' }} src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTQ4NS4yOTEgMTI5LjQwOC0yMjQtMTI4Yy0zLjI4NS0xLjg3Ny03LjI5Ni0xLjg3Ny0xMC41ODEgMGwtMjI0IDEyOGMtMy4zMjggMS44OTktNS4zNzYgNS40NC01LjM3NiA5LjI1OXYyMzQuNjY3YzAgMy44MTkgMi4wNDggNy4zNiA1LjM3NiA5LjI1OWwyMjQgMTI4YzEuNjQzLjkzOSAzLjQ1NiAxLjQwOCA1LjI5MSAxLjQwOHMzLjY0OC0uNDY5IDUuMjkxLTEuNDA4bDIyNC0xMjhjMy4zMjgtMS44OTkgNS4zNzYtNS40NCA1LjM3Ni05LjI1OXYtMjM0LjY2N2MtLjAwMS0zLjgxOS0yLjA0OS03LjM2LTUuMzc3LTkuMjU5eiIvPjwvZz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+" />
                     <p class="small text-secondary  mb-0">Desenvolvido por <a href="https://www.hokup.com.br/"
                        target="_blank">hokup</a></p>
                  </div>
               </div>
            </footer>
            <a class="scroll-to-top scroll" href="#wrapper"><span class=" fas fa-arrow-up top-icon "></span></a>
         </div>
      </>
   )
}
