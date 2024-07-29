
/* Nav */

/* Intro */

/* Sobre mim */

/* Projeto */

let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function () {
    nextImage()
}, 5000)

function nextImage() {
    count++;
    if (count > 5) {
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;

}

/* Conhecimento */

/* Fale comigo */


// Objeto
const contato = {
    email: "doninhanada@gmail.com",
    nome: "doninhaNada",
    mensagem: "doninha",
    finalizada: true
}


// Lita

let contatos = [
    contato, {
        email: "Nada1990@gmail.com",
        nome: "nada1990",
        mensagem: "nada",
        finalizada: true
    }, {
        email: "cara123@gmail.com",
        nome: "cara123",
        mensagem: "cara",
        finalizada: true
    }
]

atualizarListaDeContatos()

// Salva conato

const salvaContato = (event) => {
    event.preventDefault()
    const dadosDoFormulario = new FormData(event.target)

    const email = dadosDoFormulario.get('email')
    const nome = dadosDoFormulario.get('nome')
    const mensagem = dadosDoFormulario.get('mensagem')

    const novoForm = {
        email,
        nome,
        mensagem: false
    }

    const contatoExiste  = contatos.find((contato) => {
        return contato.email == novoForm.email
    })

    if (contatoExiste) {
        return alert('Contato já existe')
    }

    contatos = [novoForm, ...contatos]
    atualizarListaDeContatos()
}
