import React, { useState } from 'react'
// import { Helmet } from "react-helmet";
// import TextareaAutosize from 'react-textarea-autosize';
// import Modal from 'react-modal';
// import { Redirect, Link } from 'react-router-dom';
// Sender + Validator
import useForm from './useForm';
import validate from './validateInfo';

const Contato = () => {
    const { handleChange, values, handlePress, errors } =
        useForm(validate);

    return (
        <div className="row">
            <div className="col-sm-6 mb-5">
                <div className="error-container">
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <label className="form-label"> NOME <span className="text-danger-alt">*</span></label>
                <div className="input-group form">
                    <input id="name"
                        className="form-control "
                        name="name"
                        type="text"
                        placeholder="NOME"
                        value={values.name}
                        onChange={handleChange}
                        required />
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="error-container">
                    {errors.mail && <p>{errors.mail}</p>}
                </div>
                <label className="form-label"> EMAIL <span className="text-danger-alt">*</span></label>
                <div className=" input-group form">
                    <input id="mail"
                        className="form-control "
                        name="mail"
                        type="text"
                        placeholder="EMAIL"
                        value={values.mail}
                        onChange={handleChange}
                        required />
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="error-container">
                    {errors.phone && <p>{errors.phone}</p>}
                </div>
                <label className="form-label"> TELEFONE <span className="text-danger-alt">*</span></label>
                <div className=" input-group form">
                    <input id="phone"
                        className="form-control "
                        name="phone"
                        type="text"
                        placeholder="TELEFONE"
                        value={values.phone}
                        onChange={handleChange}
                        required />
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="error-container">
                    {errors.subject && <p>{errors.subject}</p>}
                </div>
                <label className="form-label"> ASSUNTO <span className="text-danger-alt">*</span></label>
                <div className=" input-group form">
                    <input id="subject"
                        className="form-control "
                        name="subject"
                        type="text"
                        placeholder="ASSUNTO"
                        value={values.subject}
                        onChange={handleChange}
                        required />
                </div>
            </div>
            <div className="col-12">
                <label className="form-label"> MENSAGEM<span className="text-danger-alt">*</span>
                </label>
                <div className="input-group form mb-5">
                    <textarea
                        className="form-control"
                        rows="6"
                        id="message"
                        name="message"
                        type="text"
                        placeholder="MENSAGEM*"
                        value={values.message}
                        onChange={handleChange}
                        required ></textarea>
                </div>
            </div>
            <div className="col">
                <div className="text-center">
                    <button name="submit" 
                    className="btn btn-primary btn-wide"
                    onClick={handlePress}>ENVIAR MENSAGEM</button>
                </div>
            </div>
        </div>
    )
};

export default Contato;

{/* <form method="post" action="./api/mail.php">
    <div className="row">
        <div className="col-sm-6 mb-5">
            <label className="form-label">
                NOME
                                            <span className="text-danger-alt">*</span>
            </label>
            <div className=" input-group form">
                <input className="form-control " type="text" name="name" placeholder="Seu nome" required />
            </div>
        </div>
        <div className="col-sm-6 mb-5">
            <label className="form-label">
                EMAIL
                              <span className="text-danger-alt">*</span>
            </label>
            <div className=" input-group form">
                <input className="form-control " type="email" name="email" placeholder="Seu email" required />
            </div>
        </div>
        <div className="col-sm-6 mb-5">
            <label className="form-label">
                TELEFONE
                           </label>
            <div className="input-group form">
                <input className="form-control " type="text" name="phone" placeholder="Seu telefone" />
            </div>
        </div>
        <div className="col-sm-6 mb-5">
            <label className="form-label">
                ASSUNTO
                           </label>
            <div className=" input-group form">
                <input className="form-control " type="text" name="subject" placeholder="Assunto" />
            </div>
        </div>
        <div className="col-12">
            <label className="form-label">
                MENSAGEM
                              <span className="text-danger-alt">*</span>
            </label>
            <div className=" input-group form mb-5">
                <textarea className="form-control " rows="6" name="text" placeholder="Sua mensagem"
                    required></textarea>
            </div>
        </div>
        <div className="col">
            <div className="text-center">
                <button type="submit" className="btn btn-primary btn-wide">ENVIAR MENSAGEM</button>
            </div>
        </div>
    </div>
</form> */}
