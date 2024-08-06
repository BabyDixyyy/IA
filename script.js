const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está navegando pela internet e encontra um site que utiliza IA para personalizar recomendações de produtos e conteúdo. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Achei útil, pois ajuda a encontrar produtos e conteúdo que eu realmente quero.",
                afirmacao: "Vê a personalização por IA como uma vantagem para uma experiência online mais relevante."
            },
            {
                texto: "Estou desconfiado, pois não sei quão bem a IA entende minhas preferências e como meus dados estão sendo usados.",
                afirmacao: "Preocupa-se com a privacidade e a precisão das recomendações feitas pela IA."
            }
        ]
    },
    {
        enunciado: "Durante uma aula de ciência, o professor apresenta um software de IA que pode prever resultados de experimentos com base em dados anteriores. Como você utilizaria essa ferramenta em seus próprios experimentos?",
        alternativas: [
            {
                texto: "Usaria a IA para prever resultados e então conduzir os experimentos reais para confirmar a precisão das previsões.",
                afirmacao: "Enxerga a IA como uma ferramenta valiosa para auxiliar e validar experimentos científicos."
            },
            {
                texto: "Preferiria realizar os experimentos sem a ajuda da IA para entender melhor o processo e desenvolver minhas próprias conclusões.",
                afirmacao: "Valoriza a experiência prática direta e acredita que isso é essencial para o aprendizado científico."
            }
        ]
    },
    {
        enunciado: "Você está participando de uma simulação de entrevista de emprego utilizando um robô de IA. Como você se prepara para maximizar o sucesso nessa simulação?",
        alternativas: [
            {
                texto: "Estudo possíveis perguntas e respostas, e pratico minhas respostas para estar bem preparado para a simulação.",
                afirmacao: "Acredita que a preparação tradicional é crucial para ter um bom desempenho na simulação com IA."
            },
            {
                texto: "Analiso o comportamento do robô e ajusto minhas respostas em tempo real para se adequar ao estilo de entrevista do robô.",
                afirmacao: "Adapta-se às interações da IA para maximizar suas chances de sucesso na simulação."
            }
        ]
    },
    {
        enunciado: "Você está planejando um evento escolar e decide usar um assistente de IA para ajudar a organizar tarefas e lembretes. Como você integra essa tecnologia na sua organização?",
        alternativas: [
            {
                texto: "Utilizo o assistente de IA para criar e gerenciar uma lista de tarefas e lembretes para garantir que tudo seja feito a tempo.",
                afirmacao: "Vê a IA como uma ferramenta útil para manter a organização e o cumprimento de prazos no planejamento do evento."
            },
            {
                texto: "Faço o planejamento manualmente e uso o assistente de IA apenas para verificar e ajustar detalhes específicos.",
                afirmacao: "Prefere manter um controle pessoal sobre o planejamento, utilizando a IA como um recurso adicional para ajustes."
            }
        ]
    },
    {
        enunciado: "Você está fazendo uma pesquisa sobre o impacto da IA na sociedade e encontra diferentes opiniões sobre o tema. Como você decide abordar as diversas perspectivas em seu trabalho?",
        alternativas: [
            {
                texto: "Incluo várias perspectivas, apresentando tanto os benefícios quanto os desafios da IA, para oferecer uma visão equilibrada.",
                afirmacao: "Valoriza uma abordagem abrangente e imparcial ao explorar o impacto da IA na sociedade."
            },
            {
                texto: "Escolho focar apenas nas opiniões que alinham com minha própria visão sobre a IA, para fortalecer meu argumento principal.",
                afirmacao: "Prefere uma abordagem mais direcionada para reforçar sua própria perspectiva sobre a IA."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();