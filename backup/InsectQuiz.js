import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import '../styles/insectQuiz.css';
import QuizTxt from '../assets/InsectQuiz/QuizTxt.svg';

// Novas Perguntas
// const questions = [
//     { question: "O inseto possui carapaça dura?", key: "carapaca" },
//     { question: "O inseto produz luz própria (bioluminescência)?", key: "bioluminescencia" },
//     { question: "O inseto é parasita?", key: "parasitismo" },
//     { question: "O inseto possui patas adaptadas para cavar?", key: "patas_cavadoras" },
//     { question: "O inseto pode nadar?", key: "habilidade_natatoria" },
//     { question: "O corpo do inseto tem formato cilíndrico?", key: "formato_cilindrico" },
//     { question: "O inseto emite cheiro forte para defesa?", key: "defesa_olfativa" },
//     { question: "O inseto é capaz de se camuflar com o ambiente?", key: "camuflagem" },
//     { question: "O inseto possui glândulas de cera?", key: "glandulas_de_cera" },
//     { question: "O inseto possui partes bucais perfuradoras?", key: "boca_perfuradora" },
//     { question: "O inseto tem patas com ventosas?", key: "ventosas_nas_patas" },
//     { question: "O inseto constrói ninhos?", key: "construcao_de_ninhos" },
//     { question: "O inseto possui hábitos migratórios?", key: "migracao" },
//     { question: "O inseto possui garras em suas patas?", key: "garras" },
//     { question: "O inseto passa por diapausa (hibernação)?", key: "diapausa" },
//     { question: "O inseto é polinizador?", key: "polinizacao" },
//     { question: "O inseto possui corpo com formato achatado dorsoventralmente?", key: "formato_corpo_achatado" },
//     { question: "O inseto é capaz de viver em desertos?", key: "habitat_desertico" },
//     { question: "O inseto vive exclusivamente em plantas?", key: "habitat_folhas" },
//     { question: "O inseto possui escamas em suas asas?", key: "escamas" },
//     { question: "O inseto libera substâncias tóxicas?", key: "toxinas" },
//     { question: "O inseto apresenta coloração de advertência?", key: "coloracao_advertencia" },
//     { question: "O inseto é atraído por luz?", key: "fototaxia" },
//     { question: "O inseto possui estruturas para cantar (estridulação)?", key: "estridulacao" },
//     { question: "O inseto pode sobreviver em locais frios?", key: "tolerancia_ao_frio" },
//     { question: "O inseto possui patas saltadoras?", key: "patas_saltadoras" },
//     { question: "O inseto tem simbiose com outros organismos?", key: "simbiose" },
//     { question: "O inseto possui veneno?", key: "venenoso" },
//     { question: "O inseto tem exoesqueleto segmentado?", key: "exoesqueleto_segmentado" },
//     { question: "O inseto pode voar silenciosamente?", key: "voo_silencioso" },
//     { question: "O inseto é capaz de regenerar partes do corpo?", key: "regeneracao" },
//     { question: "O inseto se alimenta de néctar?", key: "alimentacao_nectar" },
//     { question: "O inseto tem asas?", key: "asas" },
//     { question: "O inseto é colorido?", key: "cor" },
//     { question: "O inseto possui antenas?", key: "antenas" },
//     { question: "O inseto possui espinhos?", key: "presenca_de_espinhos" },
//     { question: "O inseto tem olhos compostos?", key: "olhos_compostos" },
//     { question: "O inseto possui mandíbulas?", key: "presenca_de_mandibulas" },
//     { question: "O inseto vive em água?", key: "habitat" },
//     { question: "O inseto é noturno?", key: "atividade_diurna_noturna" },
//     { question: "O inseto tem metamorfose completa?", key: "metamorfose" },
//     { question: "O inseto se alimenta de plantas?", key: "alimentacao" },
//     { question: "O inseto é de grande porte?", key: "tamanho_mm" },
//     { question: "O inseto é predador?", key: "alimentacao" },
//     { question: "O inseto é herbívoro?", key: "alimentacao" },
//     { question: "O inseto se esconde durante o dia?", key: "comportamento_social" },
//     { question: "O inseto tem um ciclo de vida curto?", key: "expectativa_de_vida" },
//     { question: "O inseto vive em colônias?", key: "comportamento_social" },
//     { question: "O inseto tem um padrão de cores distinto?", key: "padroes_marcas_distintivas" },
//     { question: "O inseto se alimenta de outros insetos?", key: "alimentacao" },
//     { question: "O inseto é capaz de voar rapidamente?", key: "comportamento_de_voo" },
//     { question: "O inseto apresenta mimetismo?", key: "mimetismo" }
// ];

const questions = [
    { question: "O inseto possui asas?", key: "asas" },
    { question: "O inseto é colorido?", key: "cor" },
    { question: "O inseto se alimenta de plantas?", key: "alimentacao" },
    { question: "O inseto tem metamorfose completa?", key: "metamorfose" },
    { question: "O inseto é polinizador?", key: "polinizacao" },
    { question: "O inseto possui antenas?", key: "antenas" },
    { question: "O inseto vive em água?", key: "habitat" },
    { question: "O inseto é noturno?", key: "atividade_diurna_noturna" },
    { question: "O inseto é predador?", key: "alimentacao" },
    { question: "O inseto possui glândulas de cera?", key: "glandulas_de_cera" }
];


// Filtrar perguntas duplicadas
const uniqueQuestions = Array.from(new Set(questions.map(q => q.question)))
    .map(question => questions.find(q => q.question === question));

const InsectQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [identifiedInsect, setIdentifiedInsect] = useState(null);
    const [insects, setInsects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(""); // Novo estado para mensagens de erro

    // Use Effect para buscar dados do banco de dados
    useEffect(() => {
        const fetchInsects = async () => {
            try {
                const response = await fetch('http://13.59.122.88:4000/api/insects'); // Substitua pela URL da sua API
                const data = await response.json();
                console.log("Insetos carregados:", data); // Log dos insetos carregados
                setInsects(data.slice(0, 10)); // Apenas os 10 primeiros insetos
            } catch (error) {
                console.error("Erro ao buscar insetos:", error);
                setErrorMessage("Erro ao buscar insetos. Tente novamente mais tarde."); // Define a mensagem de erro
            } finally {
                setLoading(false);
            }
        };

        fetchInsects();
    }, []);

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        console.log("Respostas atuais:", [...answers, answer]); // Log das respostas atuais

        if (currentQuestionIndex < uniqueQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            identifyInsect();
        }
    };

    const identifyInsect = () => {
        const identified = insects.filter(insect => {
            const matches = uniqueQuestions.every((question, index) => {
                if (answers[index] === "Sim") {
                    return insect[question.key] === true; // Verifica se a chave é verdadeira
                } else if (answers[index] === "Não") {
                    return insect[question.key] === false; // Verifica se a chave é falsa
                }
                return true; // Se não foi respondido, não filtra
            });

            console.log(`Inseto: ${insect.nome_popular}, Matches: ${matches}`); // Log para ver quais insetos estão sendo verificados
            return matches;
        });

        console.log("Insetos identificados:", identified); // Log dos insetos identificados
        setIdentifiedInsect(identified.length > 0 ? identified[0] : null);

        if (identified.length === 0) {
            setErrorMessage("Nenhum inseto identificado com as respostas fornecidas."); // Define a mensagem de erro se nenhum inseto for encontrado
        } else {
            setErrorMessage(""); // Limpa a mensagem de erro se um inseto for encontrado
        }
    };

    if (loading) {
        return <div>Carregando insetos...</div>; // Exibe uma mensagem de carregamento
    }

    return (
        <div className="container-fluid insectQuiz d-flex align-items-center">
            <div className="row w-100 justify-content-center">
                <div className="col-12 col-lg-6 text-center">
                    <Header />
                    <div className="txtSubtitle fs-5 text-start text-white w-75 mb-4">
                        Bem-vindo ao EntomoKey! Aqui, você pode identificar rapidamente o inseto que encontrou.
                    </div>

                    {errorMessage && ( // Exibe a mensagem de erro, se existir
                        <div className='text-danger'>
                            <h3>{errorMessage}</h3>
                        </div>
                    )}

                    {identifiedInsect ? (
                        <div className='text-white'>
                            <h2>Inseto Identificado:</h2>
                            <p><strong>Nome Popular:</strong> {identifiedInsect.nome_popular}</p>
                            <p><strong>Nome Científico:</strong> {identifiedInsect.nome_cientifico}</p>
                            {/* Adicione mais informações do inseto conforme necessário */}
                        </div>
                    ) : (
                        <div className='text-white'>
                            <img src={QuizTxt} alt="Quiz Text" />
                            <div className="divisoria mx-auto"></div>
                            <h3>{uniqueQuestions[currentQuestionIndex].question}</h3>
                            <button onClick={() => handleAnswer("Sim")}>Sim</button>
                            <button onClick={() => handleAnswer("Não")}>Não</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InsectQuiz;
