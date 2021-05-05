import React, { useEffect } from 'react'
import $ from 'jquery';
import Popup from 'reactjs-popup';
import { Helmet } from "react-helmet";

import '../assets/css/App.css';
import '../assets/css/flexslider.css';
import '../assets/css/bootstrap.css'
import '../assets/css/fonts.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/main.css';

// Images svg
import logoLight from '../assets/svg/logo-light.svg'
import logoDark from '../assets/svg/logo-dark.svg'
import venancioLogo from '../assets/svg/venancio-logo.svg'
import instaSvg from '../assets/svg/instagram.svg'
import adressSvg from '../assets/svg/address.svg'
import mailSvg from '../assets/svg/email.svg'
import phoneSvg from '../assets/svg/phone.svg'
import dishLogo from '../assets/svg/serving-dish.svg'

// Images jpg
import img1 from '../assets/img/1.jpg'
import img4 from '../assets/img/4.jpg'

// Gallery
import gal1 from '../assets/img/gallery/1.jpg'
import gal2 from '../assets/img/gallery/2.jpg'
import gal3 from '../assets/img/gallery/3.jpg'
import gal4 from '../assets/img/gallery/4.jpg'
import gal5 from '../assets/img/gallery/5.jpg'
import gal6 from '../assets/img/gallery/6.jpg'
import gal7 from '../assets/img/gallery/7.jpg'
import gal8 from '../assets/img/gallery/8.jpg'

// Offset
import off1 from '../assets/img/offset/1.jpg'
import off2 from '../assets/img/offset/2.jpg'
import off3 from '../assets/img/offset/3.jpg'
import off4 from '../assets/img/offset/4.jpg'

// Avatar
import avatar from '../assets/img/avatar/1.jpg'

//Component
import Contato from './contato/Contato';

function App() {

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

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Venancio Restaurante & Bar</title>
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
            <div className="wrapper" id="wrapper">
                <section className="hero-section">
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
                                            <li data-toggle="collapse" data-target=".navbar-collapse.show"><a class="nav-link scroll" href="#wrapper" >HOME</a></li>
                                            <li data-toggle="collapse" data-target=".navbar-collapse.show"><a class="nav-link scroll" href="#about"   >SOBRE NÓS</a></li>
                                            <li data-toggle="collapse" data-target=".navbar-collapse.show"><a class="nav-link scroll" href="#menu"    >SUGESTÃO</a></li>
                                            <li data-toggle="collapse" data-target=".navbar-collapse.show"><a class="nav-link scroll" href="#contact" >CONTATO</a></li>
                                            <li data-toggle="collapse" data-target=".navbar-collapse.show" class="ml-lg-auto">
                                                <a class="nav-link pr-0 pb-sm-4 pb-sm-0 nav-divider d-flex cardapio" style={{ borderRight: 'none' }} href="/cardapio">CARDÁPIO</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <div className="main-img">
                        <div className="background-img gradient-overlay gradient-overlay-dark">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="inner-hero">
                        <div className="container hero-content">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-10 col-lg-10">
                                    <img className="venancio-logo" src={venancioLogo} alt="" style={{ maxWidth: '450px', margin: '0px 25px 0px 25px' }} />
                                    <div className="row justify-content-center text-center ">
                                        <div className="col-md-auto">
                                            <div className=" pt-5 mt-5">
                                                <a href="/cardapio" className="btn btn-primary btn-wide "><strong>conheça nosso cardápio</strong></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg className="hero-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100"
                        preserveAspectRatio="none" width="100%" height="100">
                        <path d="M0 100 C40 0 60 0 100 100 Z"></path>
                    </svg>
                </section>
                <section id="about" className="spacer-double-lg">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 mb-6 mb-lg-0">
                                <h2 className="h3 font-alt mb-3">Comida mediterrânea e <br />drinks de qualidade</h2>
                                <p>The time has come to bring those ideas and plans to life. This is where we really begin to
                                visualize your napkin sketches and make them into beautiful pixels.Now that your brand is all
                     dressed up and ready to party.</p>
                                <div className="media align-items-center">
                                    <img className="avatar-md rounded-circle mr-3" src={avatar} alt="" />
                                    <div className="media-body">
                                        <h4 className="h6  mb-0">Bernardo Braga</h4>
                                        <p className="mb-0">Master Chef</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative">
                                    <div className="row card-gutters">
                                        <div className="col-sm-6 offset-sm-1 mb-2">
                                            <Popup trigger={
                                                <a className="hover-effect popup-image">
                                                    <img style={{ cursor: 'pointer' }} className="card-img" src={off1} alt="" />
                                                    <span class="hover-effect-container">
                                                        <span class="hover-effect-icon">
                                                            <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                            } modal nested>
                                                <img className="card-img" src={off1} alt="" />
                                            </Popup>
                                        </div>
                                        <div className="col-sm-5 align-self-end mb-2">
                                            <Popup trigger={
                                                <a className="hover-effect popup-image">
                                                    <img style={{ cursor: 'pointer' }} className="card-img" src={off3} alt="" />
                                                    <span class="hover-effect-container">
                                                        <span class="hover-effect-icon">
                                                            <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                            } modal nested>
                                                <img className="card-img" src={off3} alt="" />
                                            </Popup>
                                        </div>
                                        <div className="col-sm-5 mb-2">
                                            <Popup trigger={
                                                <a className="hover-effect popup-image">
                                                    <img style={{ cursor: 'pointer' }} className="card-img" src={off4} alt="" />
                                                    <span class="hover-effect-container">
                                                        <span class="hover-effect-icon">
                                                            <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                            } modal nested>
                                                <img className="card-img" src={off4} alt="" />
                                            </Popup>
                                        </div>
                                        <div className="col-sm-6 mb-2">
                                            <Popup trigger={
                                                <a className="hover-effect popup-image">
                                                    <img style={{ cursor: 'pointer' }} className="card-img" src={off2} alt="" />
                                                    <span class="hover-effect-container">
                                                        <span class="hover-effect-icon">
                                                            <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                        </span>
                                                    </span>
                                                </a>
                                            } modal nested>
                                                <img className="card-img" src={off2} alt="" />
                                            </Popup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="no-gutters">
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-lg-6 bg-secondary ">
                                <div className="reservation-card p-4 h-100">
                                    <div className="reservation-card-container p-6">
                                        <div className="reservation-card-inner p-sm-6">
                                            <img src={dishLogo} alt="" className="max-width-lg mb-3" />
                                            <h1 className="h2 font-alt">Venha nos visitar</h1>
                                            <p className="lead">Segundas as sextas, estamos abertos das 09:00 ~ 18:00.</p>
                                            <p className="lead">Sábado das 09:00 ~ 01:00.</p>
                                            <br />
                                            <br />
                                            <p className="lead">Rua Serra De Japi, 789</p>
                                            <p className="lead">Vila Gomes Cardim - 03.309-000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="pl-lg-2">
                                    <img src={img4} alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="menu" className="spacer-double-lg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="mb-5 pb-5 text-center">
                                    <h1 className="h2 font-alt">Sugestão do Chef</h1>
                                    <p className="w-md-40 mb-0 mx-auto lead">Seleção variada dos nossos melhores pratos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around align-items-center">
                            <div className="col-md-8 col-lg-7 ">
                                <div className="tab-content">
                                    <div className="tab-pane fade active show" id="tab-one" role="tabpanel">
                                        <div className="media align-items-center mb-4 ">
                                            <div className="media-body position-relative">
                                                <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Sugestão 1</span></h6>
                                                <span className="dots-price"></span>
                                                <span className="menu-price mb-0 h6">R$29,00</span>
                                                <p className="mb-0 font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                        <div className="media align-items-center mb-4 ">
                                            <div className="media-body position-relative">
                                                <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span
                                                    className="bg-white">Sugestão 2</span></h6>
                                                <span className="dots-price"></span>
                                                <span className="menu-price  mb-0 h6">R$29,00</span>
                                                <p className="mb-0 font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                        <div className="media align-items-center mb-4 ">
                                            <div className="media-body position-relative">
                                                <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Sugestão 3</span></h6>
                                                <span className="dots-price"></span>
                                                <span className="menu-price mb-0 h6">R$29,00</span>
                                                <p className="mb-0 font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                        <div className="media align-items-center mb-4 ">
                                            <div className="media-body position-relative">
                                                <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Sugestão 4</span></h6>
                                                <span className="dots-price"></span>
                                                <span className="menu-price mb-0 h6">R$29,00</span>
                                                <p className="mb-0 font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                        <div className="media align-items-center ">
                                            <div className="media-body position-relative">
                                                <h6 className="mb-0 position-relative  z-index-2 font-size-15"><span className="bg-white">Sugestão 5</span></h6>
                                                <span className="dots-price"></span>
                                                <span className="menu-price  mb-0 h6">R$29,00</span>
                                                <p className="mb-0 font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center text-center ">
                                    <div className="col-md-auto">
                                        <div className=" pt-5 mt-5">
                                            <a href="/cardapio" className="btn btn-primary btn-wide "><strong>cardápio completo</strong></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="gallery" className="bg-secondary spacer-double-lg">
                    <div className="container">
                        <div className="row card-gutters">
                            <div className="col-sm-6 col-lg-3 mb-2  ">
                                <div className="grid-item card border-0">
                                    <Popup trigger={
                                        <a className="hover-effect mb-0 popup-image">
                                            <img style={{ cursor: 'pointer' }} className="card-img" src={gal1} alt="" />
                                            <span class="hover-effect-container">
                                                <span class="hover-effect-icon">
                                                    <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                </span>
                                            </span>
                                        </a>
                                    } modal nested>
                                        <img className="" src={gal1} alt="" />
                                    </Popup>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-2  ">
                                <div className="grid-item  card border-0">
                                    <Popup trigger={
                                        <a className="hover-effect mb-0 popup-image">
                                            <img style={{ cursor: 'pointer' }} className="card-img" src={gal6} alt="" />
                                            <span class="hover-effect-container">
                                                <span class="hover-effect-icon">
                                                    <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                </span>
                                            </span>
                                        </a>
                                    } modal nested>
                                        <img className="" src={gal6} alt="" />
                                    </Popup>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-2  ">
                                <div className="grid-item  card border-0">
                                    <Popup trigger={
                                        <a className="hover-effect mb-0 popup-image">
                                            <img style={{ cursor: 'pointer' }} className="card-img" src={gal3} alt="" />
                                            <span class="hover-effect-container">
                                                <span class="hover-effect-icon">
                                                    <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                </span>
                                            </span>
                                        </a>
                                    } modal nested>
                                        <img className="" src={gal3} alt="" />
                                    </Popup>

                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-2  ">
                                <div className="grid-item  card border-0">
                                    <Popup trigger={
                                        <a className="hover-effect mb-0 popup-image">
                                            <img style={{ cursor: 'pointer' }} className="card-img" src={gal4} alt="" />
                                            <span class="hover-effect-container">
                                                <span class="hover-effect-icon">
                                                    <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                </span>
                                            </span>
                                        </a>
                                    } modal nested>
                                        <img className="" src={gal4} alt="" />
                                    </Popup>

                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-2 mb-lg-0  ">
                                <div className="grid-item  card border-0">
                                    <Popup trigger={
                                        <a className="hover-effect mb-0 popup-image">
                                            <img style={{ cursor: 'pointer' }} className="card-img" src={gal5} alt="" />
                                            <span class="hover-effect-container">
                                                <span class="hover-effect-icon">
                                                    <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                </span>
                                            </span>
                                        </a>
                                    } modal nested>
                                        <img className="" src={gal5} alt="" />
                                    </Popup>

                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-2  mb-lg-0">
                                <div className="grid-item  card border-0">

                                    <Popup trigger={
                                        <a className="hover-effect mb-0 popup-image">
                                            <img style={{ cursor: 'pointer' }} className="card-img" src={gal2} alt="" />
                                            <span class="hover-effect-container">
                                                <span class="hover-effect-icon">
                                                    <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                </span>
                                            </span>
                                        </a>
                                    } modal nested>
                                        <img className="" src={gal2} alt="" />
                                    </Popup>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-2 mb-lg-0 ">
                                <div className="grid-item  card border-0">
                                    <Popup trigger={
                                        <a className="hover-effect mb-0 popup-image">
                                            <img style={{ cursor: 'pointer' }} className="card-img" src={gal7} alt="" />
                                            <span class="hover-effect-container">
                                                <span class="hover-effect-icon">
                                                    <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                </span>
                                            </span>
                                        </a>
                                    } modal nested>
                                        <img className="" src={gal7} alt="" />
                                    </Popup>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3 ">
                                <div className="grid-item graphic card border-0">
                                    <Popup trigger={
                                        <a className="hover-effect mb-0 popup-image">
                                            <img className="card-img" src={gal8} alt="" />
                                            <span class="hover-effect-container">
                                                <span class="hover-effect-icon">
                                                    <span class="fa fa-plus hover-effect-icon-inner"></span>
                                                </span>
                                            </span>
                                        </a>
                                    } modal nested>
                                        <img className="" src={gal8} alt="" />
                                    </Popup>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="spacer-double-lg" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="mb-5 pb-5 text-center">
                                    <h1 className="h2 font-alt">Fale conosco</h1>
                                    <p className="w-md-40 mb-0 mx-auto lead">Para mais informações, sugestões ou feedbacks!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <Contato />
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" spacer-one-bottom-md spacer-one-top-sm">
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-sm-6 col-lg-3 vertical-divider">
                                <a href='https://goo.gl/maps/RYkPvyvUnSmJxdfi9' target="_blank" className='normal-link'>
                                    <div className="text-center py-5">
                                        <img className="max-width-sm mb-3" src={adressSvg} alt="" />
                                        <h2 className="h6 mb-0">Endereço</h2>
                                        <p className="mb-0">Rua Serra de Japi, 789</p>
                                        <p className="mb-0">Vila Gomes Cardim - 03.309-000</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-lg-3 vertical-divider">
                                <a href='tel:+551137470096' className='normal-link'>
                                    <div className="text-center py-5">
                                        <img className="max-width-sm mb-3" src={phoneSvg} alt="" />
                                        <h3 className="h6 mb-0">Telefone</h3>
                                        <p className="mb-0">+55 (11) 3747-0096</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-lg-3 vertical-divider">
                                <a href='mailto:contato@venancio.com.br' className='normal-link'>
                                    <div className="text-center py-5">
                                        <img className="max-width-sm mb-3" src={mailSvg} alt="" />
                                        <h3 className="h6 mb-0">Email</h3>
                                        <p className="mb-0">contato@venancio.com.br</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <a href='https://www.instagram.com/venanciorestaurantebar/' target="_blank" className='normal-link'>
                                    <div className="text-center py-5" >
                                        <img className="max-width-sm mb-3" src={instaSvg} alt="" />
                                        <h3 className="h6 mb-0">Instagram</h3>
                                        <p className="mb-0">@venanciorestaurantebar</p>
                                    </div>
                                </a>
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
                                <a className="d-inline-block mb-3 footer-logo" href="index.html">
                                    <img src={venancioLogo} style={{ width: '125px' }} alt="" />
                                </a>
                                <p className="font-size-14 ">© 2021 Venancio. Todos direitos <br /> reservados.</p>
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
                                <h3 className="h6 text-white mb-3  font-size-15">Endereço</h3>
                                <address>
                                    <ul className="list-group list-group-flush list-group-borderless mb-0">
                                        <li className="list-group-item"><a className='normal-link' href='tel:+551137470096'>+55 (11) 3747-0096</a></li>
                                        <li className="list-group-item">
                                            <a className='normal-link' href="mailto:contato@venancio.com.br">contato@venancio.com.br</a>
                                        </li>
                                        <li className="list-group-item"><a className='normal-link' href='https://goo.gl/maps/RYkPvyvUnSmJxdfi9' target='_blank'>Rua Serra De Japi, 789 <br /> Vila Gomes Cardim - 03.309-000</a></li>
                                    </ul>
                                </address>
                            </div>
                            <div className=" col-lg-4 col-sm-6 mb-4">
                                <h3 className="h6 text-white mb-3  font-size-15">Horário de atendimento</h3>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Segunda</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 18:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Terça</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 18:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Quarta</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 18:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Quinta</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 18:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Sexta</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 18:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Sábado</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 01:00</span>
                                    </span>
                                </div>
                                <div className="opening-hours-container font-size-14 ">
                                    <span className="opening-hours-holder-inner">
                                        <span className="opening-hours-day-holder">
                                            <span className="opening-hours-day">Domingo</span>
                                        </span>
                                        <span className="opening-hours-line"></span>
                                        <span className="opening-hours-time">09:00 - 18:00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid d-flex align-items-center justify-content-center" style={{ backgroundColor: '#131313', height: '82px' }}>
                        <div className="col-12 text-sm-center flex-column justify-content-center align-items-center" >
                            <img style={{ maxWidth: '15px' }} src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTQ4NS4yOTEgMTI5LjQwOC0yMjQtMTI4Yy0zLjI4NS0xLjg3Ny03LjI5Ni0xLjg3Ny0xMC41ODEgMGwtMjI0IDEyOGMtMy4zMjggMS44OTktNS4zNzYgNS40NC01LjM3NiA5LjI1OXYyMzQuNjY3YzAgMy44MTkgMi4wNDggNy4zNiA1LjM3NiA5LjI1OWwyMjQgMTI4YzEuNjQzLjkzOSAzLjQ1NiAxLjQwOCA1LjI5MSAxLjQwOHMzLjY0OC0uNDY5IDUuMjkxLTEuNDA4bDIyNC0xMjhjMy4zMjgtMS44OTkgNS4zNzYtNS40NCA1LjM3Ni05LjI1OXYtMjM0LjY2N2MtLjAwMS0zLjgxOS0yLjA0OS03LjM2LTUuMzc3LTkuMjU5eiIvPjwvZz48L2c+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PC9zdmc+" />
                            <p className="small text-secondary  mb-0">Desenvolvido por <a href="https://www.hokup.com.br/" target="_blank">hokup</a></p>
                        </div>
                    </div>
                </footer>
                <a className="scroll-to-top scroll" href="#wrapper"><span className=" fas fa-arrow-up top-icon "></span></a>
            </div>
        </>
    );
}

export default App;
