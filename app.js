function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('msg').value;

    const formData = {
        nome: nome,
        email: email,
        usuario_msg: mensagem
    };

    fetch('http://localhost:8000/forms', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            let formulario = document.getElementById("contato").innerHTML;
            document.getElementById('contato').innerHTML = "<h1 class='success'>Mensagem enviada!</h1>";
            setTimeout(() => {
                document.getElementById('contato').innerHTML = formulario;
                document.getElementById('contato').addEventListener('submit', enviarFormulario);
            }, 3000);
        } else {
            document.getElementById('contato').innerHTML = "<h1 class='error'>Erro ao enviar o formulario, Tente novamente.</h1>"
        }
    })
}

document.getElementById('contato').addEventListener('submit', enviarFormulario)

var pages = {
    'home' : '<div id="inicio"><h2>Seja bem-vindo ao meu Portfolio</h2><p>Eduardo Capdeville</p> </div>',

    'about' : '<div id="sobre"><h2>Sobre mim</h2><img src="img/eu_jogando.jpg" alt="Eduardo Capdeville jogando "Fortnite"" class="eu2"><img src="img/eu.jpg" alt="Eduardo Capdeville olhando para a foto e sorrindo" class="eu"> <img src="img/eu_surfista.png" alt="Eduardo Capdeville com uma prancha de surf na mão" class="eu3"><p>Me chamo Eduardo Capdeville, tenho 18 anos. Gosto muito de jogar jogos de FPS (First Person Shooter) no computador. Faço faculdade de Engenharia de Software na Uninter desde 2023. Além disso, realizo projetos pessoais para praticar o que aprendo na faculdade e nos cursos que faço na Alura.Nunca fiz curso de inglês formalmente; aprendi a falar e escrever em inglês apenas jogando e assistindo videos em inglês. Atualmente, possuo um nível intermediário-avançado na língua.Estudei na ACM da Ilha do Governador do primário até o 4º ano. No 5º ano, ingressei na Edel, também na Ilha do Governador, onde permaneci por apenas um ano. Depois, ingressei no MV1, na Ilha do Governador, onde estudei até o 1º ano do ensino médio.No 9º ano, conheci o amor da minha vida: Luana Alves. Namoramos desde então e planejamos nos casar.No 2º ano do ensino médio, mudei-me para Petrópolis, no Rio de Janeiro, e estudei no Colégio de Aplicação da Universidade Católica de Petrópolis por um ano. Após esse período, mudei-me novamente, desta vez para Cabo Frio. Devido à pandemia, continuei meus estudos no mesmo colégio por meio do ensino a distância.Durante as férias entre o 2º e o 3º ano do ensino médio, mudei-me novamente, agora para Rio das Ostras. Lá, concluí o 3º ano do ensino médio no Colégio RH Positivo/Bahiense. Foi um período desafiador, no qual tive dificuldade de me adaptar e me senti perdido em relação ao meu futuro. No entanto, ao final desse ano, descobri minha paixão pela programação. Comecei a realizar projetos por conta própria e, no início de 2023, ingressei na faculdade de Engenharia de Software na Uninter, onde tenho estudado com muito entusiasmo desde então.</p></div>',

    'projects' : '<div id="projetos"><h2>Projetos</h2><p>Possuo diversos projetos no GitHub. Clique no ícone para ver mais.</p><a href="https://github.com/EduCapdeville"><img src="./img/github.jpg"></a></div>',

    'contact' : '<div id="contato"><h2>Fale comigo</h2><form><label for="nome">Nome:</label><input type="text" id="nome" name="nome" required /><label for="email">E-mail:</label><input type="email" id="email" name="email" required /><label for="msg">Mensagem:</label><textarea id="msg" name="usuario_msg" required></textarea><button type="submit" class="button">Enviar sua mensagem</button></form></div>',
};

function getPageContent(page) {
    var contentToReturn;

    switch(page){
        case 'home':
            contentToReturn = pages.home;
            break;
        case 'about':
            contentToReturn = pages.about;
            break;
        case 'projects':
            contentToReturn = pages.projects;
            break;
        case 'contact':
            contentToReturn = pages.contact;
            break;
        default:
            contentToReturn = pages.home;
            break;
    }
    document.getElementById('content').innerHTML = contentToReturn;
}