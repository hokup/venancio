import React, { useEffect } from 'react'
import $ from 'jquery';
import { Parallax } from 'react-scroll-parallax';
import { Helmet } from "react-helmet";

// Images svg
import logoLight from '../assets/svg/logo-light.svg'
import logoDark from '../assets/svg/logo-dark.svg'
import venancioLogo from '../assets/svg/venancio-logo.svg'
import hex from '../assets/svg/hexagon.svg'

// Images jpg
import img1 from '../assets/img/2.jpg'
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
      //Loading Screen

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
            <img loading="lazy" className="parallax-img" src={`${props.imgSrc}`} />
         </Parallax>
      )
   }

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Card??pio | Venancio Restaurante & Bar</title>
            <link rel="canonical" href="http://mysite.com/example" />
         </Helmet>
         <div className="loader">
            <div className="loader-inner">
               <svg width="120" height="220" viewbox="0 0 100 100" className="loading-spinner" version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <circle className="spinner" cx="50" cy="50" r="21" fill="#ffffff" stroke-width="3" />
               </svg>
            </div>
         </div>
         <div className="wrapper">
            <header className="header default">
               <div className="header-section">
                  <div className="container-fluid ">
                     <nav className="navbar navbar-expand-lg header-navbar ">
                        <a className=" navbar-brand navbar-logo scroll" href="/">
                           <img className="mx-auto logo-light" src={logoLight} alt="" />
                           <img className="mx-auto logo-dark" src={logoDark} alt="" />
                        </a>
                        <button className="navbar-toggler btn-navbar-toggler" type="button" data-toggle="collapse"
                           data-target=".nav-menu" aria-expanded="true" aria-label="Toggle navigation">
                           <span className="fa fa-bars"></span>
                        </button>
                        <div className="nav-menu collapse navbar-collapse navbar-collapse justify-content-end py-0 ">
                           <ul className=" navbar-nav  header-navbar-nav">
                              <li data-toggle="collapse" data-target=".navbar-collapse.show"><a className=" nav-link scroll" href="#petiscos">PETISCOS</a></li>
                              <li data-toggle="collapse" data-target=".navbar-collapse.show"><a className=" nav-link scroll" href="#pratosprincipais">PRATOS PRINCIPAIS</a></li>
                              <li data-toggle="collapse" data-target=".navbar-collapse.show"><a className=" nav-link scroll" href="#sobremesas">SOBREMESAS</a></li>
                              <li data-toggle="collapse" data-target=".navbar-collapse.show"><a className=" nav-link scroll" href="#bebidas">BEBIDAS</a></li>
                              <li data-toggle="collapse" data-target=".navbar-collapse.show"><a className=" nav-link scroll" href="#cartavinhos">VINHOS</a></li>
                              <li data-toggle="collapse" data-target=".navbar-collapse.show" className="ml-lg-auto"><a className="nav-link pr-0 pb-sm-4 pb-sm-0 nav-divider d-flex cardapio"
                                 style={{ borderRight: 'none' }} href="/">P??GINA INICIAL</a></li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </header>
            <section className="spacer-xlg-alt jarallax gradient-overlay gradient-overlay-dark" id="petiscos">
               {/* <ParallaxImage imgSrc={img1} /> */}
               <Parallax y={[-10, -40]} tagOuter="figure" className="jarallax-img">
                  <img loading="lazy" className="parallax-img" src={img1} />
               </Parallax>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col">
                        <div className=" text-center">
                           <h1 className="display-4 font-alt text-white mb-0">Petiscos</h1>
                        </div>
                     </div>
                  </div>
               </div>
               <svg className="hero-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"
                  preserveAspectRatio="none" width="100%" height="100">
                  <path d="M0 100 C40 0 60 0 100 100 Z"></path>
               </svg>
            </section>
            <section className="  spacer-one-bottom-lg spacer-one-top-md">
               <div className="container">
                  <div className="row justify-content-around align-items-center">
                     <div className="col-md-8 col-lg-7 ">
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Croquete de
                              Parma</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6 price-none">R$35,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Croquete de Parma com Bechamel e Maionese de Tabasco</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Croqueta de Cordeiro com Molho de Iogurte</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$35,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Croquete de Cordeiro desfiado com Molho de Iogurte e Hortel??</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Croqueta de
                              Salmao com Molho Teriyaki</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$35,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Croquete de Salm??o com Molho Teriyaki</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Lula ??
                              proven??al</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$60,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">An??is e Tent??culos de Lula a moda Proven??al:
                              cebola, alho e
                           salsinha. Servido com Aioli de P??prica Picante - acompanha P??o de Fermenta????o Natural </p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Mexilh??es ao
                              Vinho Branco</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$45,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Mexilh??es ao Vinho Branco servidos na pr??pria
                              casca - acompanha P??o
                           de Fermenta????o Natural</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Mini
                              Almondegas ?? Parmegiana</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$40,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Bolinhas bem temperadas de carne com Molho de
                              Tomate da casa e
                           bastante Queijo gratinado</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Bolinho de
                              Bacalhau</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$45,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">O tradicional - feito aqui. Acompanha lim??o a
                              francesa e azeite pra
                           xuxar.</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Camar??o
                              Empanado</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$119,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Por????o de Camar??o empanado com Coco e servido com
                              Maionese de
                           Gremolata.</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Polvo ??
                              Vinagrete</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$57,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Polvo cozido e temperado ao estilo Vinagrete -
                              acompanha P??o de
                           Fermenta????o Natural</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Bruschetta de
                              Cogumelos Frescos</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$25,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Um cl??ssico com recheio revisitado. Nosso mix de
                              cogumelos frescos
                           leva Eryngui, Shimeji, Shitake e Paris.</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Bruschetta de
                              Tomate e B??fala</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$25,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pode pedir! ?? cl??ssico, mas ?? top!</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Dueto de
                              Bruschetas</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$25,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Uma de Cada!</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Steak
                              Tartare</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$39,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Filet Mignon picado na ponta da faca - servido
                              cru. acompanha P??o
                           de Fermenta????o Natural</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Tartare de
                              Salm??o</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$45,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Camar??o e Salm??o marinados, temperados com Dill e
                              Iogurte Natural -
                           acompanha P??o Pita Caseiro</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Torre
                              Grega</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$39,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Quibe cru, Tabule, Coalhada Seca e Cebola Frita -
                              Acompanha P??o
                           Pita Caseiro</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Batata
                              Frita</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$24,99</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Batata Frita! Sequinha e Crocante!</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="spacer-xlg jarallax gradient-overlay gradient-overlay-dark" id="pratosprincipais">
               {/* <ParallaxImage imgSrc={img16} /> */}
               <Parallax y={[-20, -50]} tagOuter="figure" className="jarallax-img">
                  <img loading="lazy" className="parallax-img" src={img16} />
               </Parallax>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col">
                        <div className=" text-center">
                           <h1 className=" display-4 font-alt text-white mb-0">Pratos Principais</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="spacer-double-sm">
               <div className="container">
                  <div className="row justify-content-around align-items-center">
                     <div className="col-md-8 col-lg-7 ">
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Saladas</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Espinafre com
                              Buchette e Bals??mico</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$39,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Salada de Espinafre, Nozes, Queijo Buchette
                              Empanado e Molho de
                           Bals??mico</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Ni??oise</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$49,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Mix de Folhas Baby, Atum em Crosta de Gergelim,
                              Ovo e Ervilhas
                           Tortas - Servida com Molho de Lim??o Siciliano</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Panzanella com
                              Carpaccio de Abobrinha</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$36,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Carpaccio de Abobrinha Marinada. R??cula, Tomate
                              Confit, Azeitonas
                           Pretas e Pepino ??? Mollho de Bals??mico</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">S??ria</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$39,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Cous Cous Marroquino, Berinjela Defumada,
                              Castanhas, Passas e Zatar
                           - Molho de Iogurte</p>
                           </div>
                        </div>
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Risotos</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Beterraba com
                              Iogurte defumado</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$39,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Risoto rosa de Beterraba e Iogurte Defumado</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Cordeiro</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$65,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Risoto de Paleta Desfiada, Cebola Caramelizada e
                           Hortel?? frita</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Nero</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$69,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Arroz Negro com Frutos do Mar</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Cogumelos</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$65,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Risoto de Funghi e Cogumelos Frescos com BomBom
                              de Mignon e Molho
                           Glace</p>
                           </div>
                        </div>
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Massas</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Fet. Ragu
                              Polvo</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$65,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Massa feita em casa com Polvo e Ragu de Lingui??a
                              Fresca -
                           verdadeiro casamento entre mar e montanha</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Gnocchi</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$39,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Gnocchi de Semolina Gratinado com Fonduta de
                           Parmes??o</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Spaghetti</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$69,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Massa seca italiana com Molho de Tomates e Frutos
                              do Mar da casa
                        </p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Ravioli</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$59,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Massa feita na casa recheada de Frutos do Mar.
                              Acompanha ervilhas
                           tortas, molho Bisque e Ovas</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Lasanha</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$69,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Massa feita na casa com Bacalhau Confit, Bechamel
                              e Espinafre
                           fresco. Servido juntamente de tomates assados.</p>
                           </div>
                        </div>
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Peixes</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Robalo</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$79,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pescado em crosta de am??ndoas com aspargos
                              grelhados, tapenade de
                           azeitonas e molho de lim??o siciliano</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Salmao e
                              Camar??o</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$74,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Salm??o com Camar??o e Bisque ao Molho de
                              Manjeric??o e Mil Folhas de
                           Batata</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Atum em
                              Crosta</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$59,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Atum em Crosta de Gergelim com Mousseline de
                              Mandioquinha com
                           Wasabi, Gremolata e Farofa Crocante</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Lombo Bacalhau
                              Confit</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$99,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Lombo de Bacalhau Confit com Batata Assada,
                              Tomates Tostados,
                           Br??colis, Azeitonas e Ovo cozido</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Polvo</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$69,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Polvo com Molho de Ervas, Batata Assada, Tomates
                              Confit e Tostados
                           ??? Servido com Aioli de P??prica Picante</p>
                           </div>
                        </div>
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Carnes</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Mignon
                              recheado</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$69,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Filet Mignon recheado de Brie e Aspargos envolto
                              de Parma com
                           Risoto de Parmes??o</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Prime Rib
                              Su??no</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$55,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Prime Rib Suino ?? Milanesa, Mousseline de
                              Mandioquinha, Gremolata e
                           Cebola Caramelizada</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Bombom de
                              Mignon</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$69,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Bombom de Mignon ao Molho Mostarda com Polenta
                           Frita e Br??colis</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Galantine de
                              Frango</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$49,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Gallantine de Frango recheada de Lingui??a e
                              Pistache com Parma,
                           acompanha Risoto de Tomate</p>
                           </div>
                        </div>
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Fam??lia</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Cassoulet com
                              Costelinha</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$119,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Feij??o Branco com Lingui??as e Costelinha
                              Glaceada, servido junto de
                           arroz branco e farofinha crocante</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Paleta de
                              Cordeiro</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$230,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Paleta de Cordeiro inteira na mesa. Acompanha mil
                              folhas de batata
                           e mini legumes assados</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Caldeirada de
                              Peixe e Frutos do Mar</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$179,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Acompanha arroz e farofa crocante.</p>
                           </div>
                        </div>
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Kids</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Escalope</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Escalope de Mignon, arroz e batatas assadas</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Peixe</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$34,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pescado grelhado, arroz e pure de mandioquinha
                        </p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Bolonhesa</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Penne ao molho bolonhesa</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Molho
                              Tomate</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Penne ao molho de tomates</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section className="spacer-xlg jarallax gradient-overlay gradient-overlay-dark" id="sobremesas">
               <ParallaxImage imgSrc={img20} />
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col">
                        <div className=" text-center">
                           <h1 className="display-4 font-alt text-white mb-0">Sobremesas</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="spacer-double-sm">
               <div className="container">
                  <div className="row justify-content-around align-items-center">
                     <div className="col-md-8 col-lg-7 ">
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Panna
                              Cotta</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Creme e Iogurte com Frutas Vermelhas e Crocante
                           de Laranja</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Tiramisu</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$34,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Um cl??ssico totalmente feito na casa. A
                              Savoiardi, aquele
                           biscoitinho, tamb??m!</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Salame</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Servido no formato de salame, pronto pra fatiar e
                              dividir na mesa.
                           Acompanha sorvete de maracuj??</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Tortino</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Bolinho de am??ndoas assado com recheio de lim??o e
                              sorvete de frutas
                           vermelhas.</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Petit
                              Gateau</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">De chocolate! Acompanha sorvete de baunilha.</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Manjar</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Manjar de doce de leite com coco, calda de doce
                              de leite morna e
                           sorvete de Tapioca.</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Canolli</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">O poderoso chef??o benh??!</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Verrine</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Servido montado na ta??a. Morango marinado no
                              Bals??mico, Chantily de
                           Morango e Suspiros</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="spacer-xlg jarallax gradient-overlay gradient-overlay-dark" id="bebidas">
               {/* <ParallaxImage imgSrc={img22} /> */}
               <Parallax y={[-20, -50]} tagOuter="figure" className="jarallax-img">
                  <img loading="lazy" className="parallax-img" src={img22} />
               </Parallax>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col">
                        <div className=" text-center">
                           <h1 className="display-4 font-alt text-white mb-0">Bebidas</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="spacer-double-sm">
               <div className="container">
                  <div className="row justify-content-around align-items-center">
                     <div className="col-md-8 col-lg-7 ">

                        <h2 className="h3 font-alt mb-6 mt-6 text-center">N??o Alco??licos</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">??gua</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Com ou sem g??s</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">??gua
                              T??nica</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Schweppes</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Refrigerante</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Coca-Cola, Coca-Cola Zero, Sprite, Guaran??
                           Antarctica e Guaran?? Antarctica Zero</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Suco
                              Natural</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Frutas da esta????o</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Ch??
                              Mate</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$12,90</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Erva mate</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Ch?? de
                              Hibisco</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$12,90</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Flor de hibisco</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Creta sem
                              ??lcool</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$12,90</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pur?? de morango, xarope de morango e ??gua com g??s
                        </p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Ginger sem
                              ??lcool</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$12,90</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Xarope de gengibre e ??gua com g??s</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Ginger Lemon
                              sem ??lcool</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$12,90</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Xarope de gengibre, lim??o siciliano e ??gua com
                           g??s</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Caf??
                              Espresso</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$12,90</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Caf?? Nespresso</p>
                           </div>
                        </div>

                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Caipirinhas</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Caipirinha</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Frutas da esta????o</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Caipiroska</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Frutas da esta????o</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Saqueirinha</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$28,00</span>
                              <p className="mb-0 font-size-14">Frutas da esta????o</p>
                           </div>
                        </div>

                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Drinks Autorais</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Jager Bomb</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$28,00</span>
                              <p className="mb-0 font-size-14">Jagermeister e Red Bull</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Bolinho da Vov??</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$22,00</span>
                              <p className="mb-0 font-size-14">Frangelico, vodka, xarope de baunilha e espuma c??trica</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Venancio</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$18,00</span>
                              <p className="mb-0 font-size-14">Maracuj??, capim santo, vodka e a??ucar</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Campo Dourado</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$33,00</span>
                              <p className="mb-0 font-size-14">Gin, maracuj??, xarope de ma??a verde, abacaxi e Red Bull</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Ibiza</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$33,00</span>
                              <p className="mb-0 font-size-14">Aperol, lim??o, Red Bull Melancia</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Monaco</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$28,00</span>
                              <p className="mb-0 font-size-14">Espumante, maracuj?? e p??ssego</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Drink de Pa??oca</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$18,00</span>
                              <p className="mb-0 font-size-14">Vodka, pa??oca, creme de leite e a??ucar</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Drink de C??co</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$18,00</span>
                              <p className="mb-0 font-size-14">Vodka, leite de c??co, creme de leite, xarope de a??ucar</p>
                           </div>
                        </div>

                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Drinks Cl??ssicos</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Apple Martini</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$18,00</span>
                              <p className="mb-0 font-size-14">Cointreau, vodka, licor de ma??a verde</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Negroni</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$18,00</span>
                              <p className="mb-0 font-size-14">Gin, Martini Rosso, Campari</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Whisky Sour</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14">Jack Daniels, lim??o, xarope de a??ucar e ovo</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Mojito</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$18,00</span>
                              <p className="mb-0 font-size-14">Lim??o, Rum, hortel??, ??gua com g??s e xarope de a??ucar</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Dry Martini</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14">Gin, Martini Dry e azeitona</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Apparent Sour</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$24,00</span>
                              <p className="mb-0 font-size-14">Aperol, St. Germain e lim??o</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Moscow Mule</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$18,00</span>
                              <p className="mb-0 font-size-14">Vodka, lim??o, xarope de gengibre e espuma c??trica</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Margarita</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$28,00</span>
                              <p className="mb-0 font-size-14">Tequila, lim??o e Cointreau</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Jager Ginbre</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$22,00</span>
                              <p className="mb-0 font-size-14">Jagermeister, xarope de gengibre e lim??o</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Cararrilho</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$22,00</span>
                              <p className="mb-0 font-size-14">Licor 43 e caf?? expresso</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Cosmopolitan</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$22,00</span>
                              <p className="mb-0 font-size-14">Vodka, lim??o, laranja e cranberry</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Aperol Spritz</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$22,00</span>
                              <p className="mb-0 font-size-14">Aperol, espumante e ??gua com g??s</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Fitz Gerald</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Gin, lim??o, xarope de a??ucar e Angustura</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">The Bramble</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Gin, lim??o, xarope de a??ucar e Chambord</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Old Fashion</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Jack Daniels, Angustura, a??ucar e ??gua com g??s</p>
                           </div>
                        </div>

                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Gin's</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Gin T??nica</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Gin e t??nica</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Gin Mediterr??neo</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Gin, lim??o e t??nica</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Gin Pomelo Rose</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Gin, ch?? de hibisco e t??nica</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Gin Tangibre</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Gin, xarope de gengibre, tangerina e t??nica</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Gin Capim Santo</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Gin, xarope de capim e t??nica</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Gin Strawberry</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Gin, pur?? de morango, xarope de morango e t??nica</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                 className="bg-white">Gin Pitaya</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$26,00</span>
                              <p className="mb-0 font-size-14">Gin, Cura??au Blue, xarope de pitaya, xarope de lichia e t??nica</p>
                           </div>
                        </div>

                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Sangrias</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Sangria Tinta</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$44,00</span>
                              <p className="mb-0 font-size-14">Vinho tinto, Cointreau, Conhaque e frutas</p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Clericot</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$99,00</span>
                              <p className="mb-0 font-size-14">Prosseco, ??gua com g??s, Cointreau e frutas</p>
                           </div>
                        </div>

                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Chopps e Cervejas</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Budweiser
                              330ml</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Becks
                              330ml</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Chopp Brahma
                              600ml</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Chopp Colorado
                              Appia 300ml</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Brahma 0,0% -
                              Sem ??lcool</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                           </div>
                        </div>

                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Doses</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Smirnoff</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Sagatiba</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Red Label</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Black Label</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Double Black</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Blue Label</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Chivas</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Jack Daniels N??7</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Ballantines</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Jack Daniels Apple</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Gentleman Jack</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Single Barrel</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Woodford Reserve</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Jos?? Cuervo</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">1800</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Baileys</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Limoncello</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Licor Caf?? Sheridans</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Bombay</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Tanqueray</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Hendricks</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Bull Dog</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Monkey 47</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Ketel One</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Ciroc</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Absolute</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Grey Goose</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">London N??1</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Salinas</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Jack Daniels Honey</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Jack Daniels Fire</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">El Jimador</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Campari</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Boazinha</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Esp??rito de Minas</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$15,00</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="spacer-xlg jarallax gradient-overlay gradient-overlay-dark" id="cartavinhos">
               <ParallaxImage imgSrc={img23} />
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col">
                        <div className=" text-center">
                           <h1 className="display-4 font-alt text-white mb-0">Carta de Vinhos</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="spacer-double-sm">
               <div className="container">
                  <div className="row justify-content-around align-items-center">
                     <div className="col-md-8 col-lg-7 ">
                        <h2 className="h3 font-alt mb-6 text-center">Espumante</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Cava Don Roman
                              Brut</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Espanha</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Macabeo, Parellada e Xarel.lo</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Marqu??s de Tomares</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Villa
                              Fabrizia</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>It??lia</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Trebbiano e Chardonnay</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Villa Fabrizia</b></p>
                           </div>
                        </div>
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Branco</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Bodega Vieja
                              Sauvignon Blanc-Semillon</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Chile</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>50% Sauvignon Blanc e 50% Semillon</b>
                              </p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Bodega Vieja</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Antares
                              Sauvignon Blanc</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Chile</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Sauvignon Blanc</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Antares</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Santa Carolina
                              Estrelas Reserva Sauvignon Blanc</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Chile </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Sauvignon Blanc </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Santa Carolina </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">C??firo Reserva
                              Chardonnay</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Chile</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Chardonnay</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Vi??a Casablanca </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Alfredo Roca
                              Chardonnay </span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Argentina </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Chardonnay </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Alfredo Roca </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Nieto
                              Senetiner Fran Chardonnay </span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Argentina </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Chardonnay </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Bodegas Nieto Senetiner </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Nederburg 1791
                              Sauvignon Blanc</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>??frica do Sul </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Sauvignon Blanc </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Nederburg </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">99 Rosas
                              Chardonnay-Viognier </span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Espanha </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>70% Chardonnay e 30% Viognier Org??nico e
                              Ecol??gico </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Dom??nio de Punctum </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Heritage Blanc
                           </span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Fran??a </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Colombard, Ugni Blanc e Folle Blanche
                           </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Patriarche </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Chateau Reynon
                              Sauvignon Blanc </span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Fran??a </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Sauvignon Blanc </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Denis Dubordieu Domanies </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Frascati
                           </span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>It??lia </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>40% Malvasia di Candia, 30% </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Villa Fabrizia </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Terras del Rei
                           </span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Portugal </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Ant??o Vaz, S??ria, Rabo de Ovelha e Perrum
                           </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Carmim </b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Regia
                              Colheita</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Portugal </b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Ant??o Vaz e Arinto</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Carmim </b></p>
                           </div>
                        </div>
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Ros??</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">99
                              Rosas</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Espanha</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>50% Garnacha e 50% Bobal Jovem</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Dom??nio de Punctum</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Alfredo
                              Roca</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Argentina</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Merlot</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Alfredo Roca</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">C??firo
                              Reserva</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Chile</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Pinot Noir</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Vi??a Casablanca</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Jas Des Vignes
                              Provence Ros?? IGP</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Fran??a</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>60% Grenache, 20% Syrah, 10% Cinsault e
                              10% Muscat</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Ravoire & Fils</b></p>
                           </div>
                        </div>
                        <h2 className="h3 font-alt mb-6 mt-6 text-center">Tinto</h2>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Bodega Vieja
                              Cabernet Sauvignon-Merlot</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Chile</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>75% Cabernet Sauvignon e 25% Merlot</b>
                              </p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Bodega Vieja</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Antares
                              Carmenere</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Chile</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Carmen??re</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Antares</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">C??firo
                              Carmenere</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Chile</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Carmen??re</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Vi??a Casablanca</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Alfredo Roca
                              Cabernet Sauvignon</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Argentina</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Cabernet Sauvignon</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Alfredo Roca</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Alfredo Roca
                              Pinot Noir</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Argentina</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Pinot Noir</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Alfredo Roca</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Nieto
                              Senetiner Fran Malbec</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Argentina</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Malbec</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Bodegas Nieto Senetiner</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Nieto
                              Senetiner Estate Bottled Malbec</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Luj??n de Cuyo, Mendoza</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>100% Malbec</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Bodegas Nieto Senetiner</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Cadus
                              Tupungato Cabernet Sauvignon</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Argentina</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Cabernet Sauvignon</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Cadus Wines</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Nederburg 1791
                              Shiraz</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>??frica do Sul</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Shiraz</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Nederburg</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Jacob???s Creek
                              Cabernet Sauvignon-Shiraz</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Austr??lia</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>60% Shiraz 40% Cabernet Sauvignon</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Jacob's Creek</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Pata Negra Oro
                              tempranillo</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Espanha</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Tempranillo</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Garcia Carrion/Pata Negra</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">99 Rosas
                              Tempranillo - Cabernet Sauvignon</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Espanha</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>70% Tempranillo e 30% Cabernet
                              Sauvignon</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Dom??nio de Punctum</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Marqu??s de
                              Tomares Excellence</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Espanha</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>90% Tempranillo e 10% Graciano</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Marqu??s de Tomares</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Heritage
                              Rouge</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Fran??a</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Carignan, Grenache e Syrah.</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Patriarche</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Secret de
                              Campagne Vin de Pays</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Fran??a</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>60% Grenache, 30% Vieux Carignan e 10%
                              Cinsault</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Cave de Cairanne</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Abel Pinchard
                              Pinot Noir</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Fran??a</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>100% Pinot Noir</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Abel Pinchard</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Corbelli
                              Chianti DOCG</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>It??lia</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>85% Sangiovese, 10% Canaiolo e 5%
                              Ciliegiolo</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Castellani</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Forte Ambrone
                              Rosso </span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>It??lia</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Blend de Cepas Italianas</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Castellani</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Brunello di
                              Montalcino Vila Frabrizia</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>It??lia</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Sangiovese Grosso</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Cantina Villa Fabrizia</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Terras d'el
                              Rei</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Portugal</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Castel??o, Aragon??s e Trincadeira.</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Carmim</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Loios</span>
                              </h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Portugal</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Aragon??s, Trincadeira e Castel??o</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Jo??o Portugal Ramos</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Regia
                              Colheita</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Portugal</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Aragon??s, Trincadeira e Alicante
                              Bouschet</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Carmim</b></p>
                           </div>
                        </div>
                        <div className="media align-items-center mb-4 ">
                           <div className="media-body position-relative">
                              <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Montes
                              Toscanini Reserva Familiar Tannat</span></h6>
                              <span className="dots-price"></span>
                              <span className="menu-price price-none  mb-0 h6">R$29,00</span>
                              <p className="mb-0 font-size-14 description-width-qr ">Pa??s: <b>Uruguai</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Uva: <b>Tannat</b></p>
                              <p className="mb-0 font-size-14 description-width-qr ">Produtor: <b>Montes Toscanini</b></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <footer className="footer bg-dark spacer-one-top-md">
                    <svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"
                        preserveAspectRatio="none" width="100%" height="100">
                        <path d="M0 100 C40 0 60 0 100 100 Z"></path>
                    </svg>
                    <div className="container space-top-2 space-bottom-1">
                        <div className="row justify-content-lg-start mb-5">
                            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                <a className="d-inline-block mb-3 footer-logo" href="/">
                                    <img src={venancioLogo} style={{ width: '125px' }} alt="" />
                                </a>
                                <p className="font-size-14 ">?? 2021 Venancio. Todos direitos <br /> reservados.</p>
                                <div>
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item mb-2 mb-lg-0 mr-1"><a className="social-icon" href="https://www.facebook.com/venanciorestaurantebar/" target='_blank'><span
                                            className="fab fa-facebook-f"></span></a></li>
                                        {/* <li className="list-inline-item mr-1"><a className="social-icon " href="#"><span
                                            className="fab fa-twitter"></span></a></li> */}
                                        <li className="list-inline-item"><a className="social-icon " href="https://www.instagram.com/venanciorestaurantebar/" target='_blank'><span
                                            className="fab fa-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-4">
                                <h3 className="h6 text-white mb-3  font-size-15">Endere??o</h3>
                                <address>
                                    <ul className="list-group list-group-flush list-group-borderless mb-0">
                                        <li className="list-group-item"><a className='normal-link' href='tel:+551122251844'>+55 (11) 2225-1844</a></li>
                                        <li className="list-group-item">
                                            <a className='normal-link' href="mailto:restaurantevencioebar@gmail.com">restaurantevencioebar@gmail.com</a>
                                        </li>
                                        <li className="list-group-item"><a className='normal-link' href='https://goo.gl/maps/RYkPvyvUnSmJxdfi9' target='_blank'>Rua Serra De Japi, 789 <br /> Vila Gomes Cardim - 03.309-000</a></li>
                                    </ul>
                                </address>
                            </div>
                            <div className=" col-lg-4 col-sm-6 mb-4">
                                <h3 className="h6 text-white font-size-15 mb-0">Hor??rio de atendimento</h3>
                                <span className="mb-3" style={{ fontSize: '10px' }}>hor??rio em periodo de restri????o*</span>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Segunda</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">Fechado</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Ter??a</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 21:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Quarta</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 21:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Quinta</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 21:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Sexta</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 21:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">S??bado</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 21:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Domingo</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 21:00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-sm-12 text-center">
                            <div class="hexagon"></div>
                                <p class="small  text-secondary mb-3">Desenvolvido por  <a href='www.hokup.com.br' target='_blank' style={{textDecoration:'none'}}><img style={{maxWidth:'10px'}} src={hex} />   hokup</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            <a className="scroll-to-top scroll" href="#petiscos"><span className=" fas fa-arrow-up top-icon "></span></a>
         </div>
      </>
   )
}
