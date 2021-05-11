import React, { useState } from 'react'
// import { Helmet } from "react-helmet";
// import TextareaAutosize from 'react-textarea-autosize';
// import Modal from 'react-modal';
// import { Redirect, Link } from 'react-router-dom';
// Sender + Validator
import useForm from './useForm';
import validate from './validateInfo';

const Contato = () => {
    const { handleChange, values, handlePress, errors, sent } =
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
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Seu nome*"
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
                        placeholder="Seu email*"
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
                        placeholder="Seu telefone*"
                        value={values.phone}
                        onChange={handleChange}
                        required />
                </div>
            </div>
            <div className="col-sm-6 mb-5">
                <div className="error-container">
                    {errors.matter && <p>{errors.matter}</p>}
                </div>
                <label className="form-label"> ASSUNTO <span className="text-danger-alt">*</span></label>
                <div className=" input-group form">
                    <input id="matter"
                        className="form-control "
                        name="matter"
                        type="text"
                        placeholder="Assunto*"
                        value={values.matter}
                        onChange={handleChange}
                        required />
                </div>
            </div>
            <div className="col-12">
                <label className="form-label">MENSAGEM<span className="text-danger-alt">*</span>
                </label>
                <div className="input-group form mb-5">
                <div className="error-container">
                        {errors.message && <p>{errors.message}</p>}
                    </div>
                    <textarea
                        className="form-control"
                        rows="6"
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Sua mensagem*"
                        value={values.message}
                        onChange={handleChange}
                        required ></textarea>
                </div>
            </div>
            <div className="col">
                <div className="text-center">
                    { sent ? <p style={{color:'green'}}>mensagem enviada com sucesso</p> : null }
                    <button name="submit" 
                    className="btn btn-primary btn-wide"
                    onClick={handlePress}>ENVIAR MENSAGEM</button>
                </div>
            </div>
        </div>
    )
};

export default Contato;
