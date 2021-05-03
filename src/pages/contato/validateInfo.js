export default function validadeInfo(values) {
    let errors = {};

    //Name
    if (!values.name.trim()) {
        errors.name = "*como podemos te chamar?";
    }

    //Email
    if (!values.mail) {
        errors.mail = '*qual o seu email?';
    } else if (!/\S+@\S+\.\S+/.test(values.mail)) {
        errors.mail = '*email inválido.';
    }

     //Solução
     if (!values.matter) {
        errors.matter = '*qual é o seu assunto?';
    }

    //Phone
    if (!values.phone) {
        errors.phone = '*qual o seu telefone?';
    }
    //Message
    if (!values.message) {
        errors.message = '*o que você gostaria de saber?';
    }

    return errors;
}

