const containerQuiz = document.querySelector(".container-quiz");
const areaPergunta = document.querySelector(".area-pergunta");
const areaOpcoes = document.querySelector(".area-opcoes");
const areaResultado = document.querySelector(".area-resultado");
const textoFinal = document.querySelector(".texto-final");

const perguntas = [
    {
        enunciado: "Você acorda em 2035 e descobre que assistentes virtuais com IA estão em todas as casas, carros e escolas. Qual sua reação imediata?",
        alternativas: [
            {
                texto: "Quero entender como essa tecnologia funciona por dentro!",
                afirmacao: "Despertou uma curiosidade insaciável sobre os mecanismos da IA."
            },
            {
                texto: "Preciso avaliar os riscos antes de confiar nisso.",
                afirmacao: "Manteve uma postura crítica e analítica sobre os avanços tecnológicos."
            }
        ]
    },
    {
        enunciado: "Na escola, as aulas agora usam IA para personalizar o aprendizado de cada aluno. Seu professor pede que vocês avaliem o impacto disso. O que você destaca?",
        alternativas: [
            {
                texto: "A IA pode ajudar alunos com dificuldades específicas, adaptando o conteúdo.",
                afirmacao: "Reconheceu o potencial da IA para democratizar a educação."
            },
            {
                texto: "Precisamos garantir que a IA não substitua a interação humana no ensino.",
                afirmacao: "Defendeu que o contato humano continua sendo essencial na educação."
            }
        ]
    },
    {
        enunciado: "Surgem notícias de que robôs com IA estão substituindo trabalhadores em várias fábricas. Durante um debate na escola, qual sua posição?",
        alternativas: [
            {
                texto: "Isso pode libertar humanos de trabalhos perigosos e repetitivos.",
                afirmacao: "Enxergou a IA como ferramenta para melhorar a qualidade de vida."
            },
            {
                texto: "É urgente criar políticas para proteger os empregos das pessoas.",
                afirmacao: "Levantou a bandeira da responsabilidade social no avanço tecnológico."
            }
        ]
    },
    {
        enunciado: "Você é convidado a testar um novo programa de IA que cria músicas, pinturas e poesias. O que você pensa sobre a criatividade das máquinas?",
        alternativas: [
            {
                texto: "É fascinante! A IA pode ser uma parceira criativa para artistas.",
                afirmacao: "Explorou novas formas de expressão artística com IA."
            },
            {
                texto: "Arte verdadeira precisa de emoção humana, isso é só imitação.",
                afirmacao: "Preservou a valorização da experiência humana na arte."
            }
        ]
    },
    {
        enunciado: "Seu grupo cria um projeto final usando IA para resolver um problema da comunidade. Porém, percebem que a IA reproduz preconceitos nos resultados. O que fazem?",
        alternativas: [
            {
                texto: "Investigam a origem do problema e buscam maneiras de corrigir o viés.",
                afirmacao: "Trabalhou ativamente para desenvolver IA mais justa e inclusiva."
            },
            {
                texto: "Decidem não usar IA no projeto, pois não confiam mais nela.",
                afirmacao: "Optou por soluções tradicionais sem depender da tecnologia."
            }
        ]
    }
];

let indiceAtual = 0;
let perguntaCorrente;
let historiaCompleta = "";

function exibirPergunta() {
    if (indiceAtual >= perguntas.length) {
        exibirResultado();
        return;
    }
    
    perguntaCorrente = perguntas[indiceAtual];
    areaPergunta.textContent = perguntaCorrente.enunciado;
    areaOpcoes.textContent = "";
    exibirAlternativas();
}

function exibirAlternativas() {
    for (const alternativa of perguntaCorrente.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => selecionarResposta(alternativa));
        areaOpcoes.appendChild(botaoAlternativa);
    }
}

function selecionarResposta(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaCompleta += afirmacoes + " ";
    indiceAtual++;
    exibirPergunta();
}

function exibirResultado() {
    areaPergunta.textContent = "O FUTURO DA IA EM 2035...";
    textoFinal.textContent = historiaCompleta;
    areaOpcoes.textContent = "";
    
    // Remove a animação de piscar após mostrar o resultado
    textoFinal.style.animation = "none";
}

exibirPergunta();