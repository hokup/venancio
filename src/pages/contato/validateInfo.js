export default function validadeInfo(values) {
    let errors = {};

    //Name
    if (!values.name.trim()) {
        errors.name = "*como podemos te chamar?";
    }

    //Email
    if (!values.email) {
        errors.email = '*qual o seu email?';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = '*email inválido.';
    }

    //Phone
    if (!values.phone) {
        errors.phone = '*qual o seu telefone?';
    }
    //Message
    if (!values.message) {
        errors.message = '*como é seu projeto?';
    }

    //Solução
    if (!values.app & !values.website & !values.branding & !values.uiux) {
        errors.solucao = '*qual serviço você precisa?';
    }

    //Orçamento
    if (!values.orcamento) {
        errors.orcamento = '*qual o seu orçamento?';
    }

    return errors;
}

