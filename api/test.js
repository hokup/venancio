const se = require('./send-email')

let req = {
    query: {},
    cookies: {},
    body: {
        name: 'Teste',
        mail: 'teste@gmail.com',
        matter: 'Assunto',
        phone: '1112345-6789',
        message: 'isdaiushdiauhsdiuahsiduhasiudhaisudhiaushiasd'
    }
}

let res = {
    send(msg) {
        console.log(msg)
    },
    status(code) {
        console.log(`Response Code: ${code}`)
    }
}

console.log(se(req, res))