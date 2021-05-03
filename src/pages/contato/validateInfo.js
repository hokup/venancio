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
        errors.message = '*o que você gostaria de saber?';
    }

    //Solução
    if (!values.subject) {
        errors.solucao = '*qual é o seu assunto?';
    }

    return errors;
}

