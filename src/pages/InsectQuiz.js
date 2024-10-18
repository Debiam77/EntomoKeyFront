import React, { useState } from 'react';
import Header from "../components/Header";
import '../styles/insectQuiz.css';

// Perguntas selecionadas
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

// Insetos estáticos
const insects = [
    { nome_popular: "Formiga", nome_cientifico: "Formica rufa", asas: false, cor: true, alimentacao: true, metamorfose: true, polinizacao: false, antenas: true, habitat: false, atividade_diurna_noturna: true, glandulas_de_cera: false },
    { nome_popular: "Borboleta", nome_cientifico: "Papilio machaon", asas: true, cor: true, alimentacao: true, metamorfose: true, polinizacao: true, antenas: true, habitat: false, atividade_diurna_noturna: false, glandulas_de_cera: false },
    { nome_popular: "Cigarra", nome_cientifico: "Cicada", asas: true, cor: true, alimentacao: false, metamorfose: false, polinizacao: false, antenas: true, habitat: false, atividade_diurna_noturna: false, glandulas_de_cera: false },
    { nome_popular: "Gafanhoto", nome_cientifico: "Caelifera", asas: true, cor: true, alimentacao: true, metamorfose: false, polinizacao: false, antenas: true, habitat: false, atividade_diurna_noturna: true, glandulas_de_cera: false },
    { nome_popular: "Libélula", nome_cientifico: "Anisoptera", asas: true, cor: true, alimentacao: true, metamorfose: true, polinizacao: false, antenas: true, habitat: true, atividade_diurna_noturna: true, glandulas_de_cera: false },
    { nome_popular: "Besouro", nome_cientifico: "Coleoptera", asas: true, cor: true, alimentacao: true, metamorfose: false, polinizacao: false, antenas: true, habitat: false, atividade_diurna_noturna: false, glandulas_de_cera: false },
    { nome_popular: "Mariposa", nome_cientifico: "Noctuidae", asas: true, cor: true, alimentacao: true, metamorfose: true, polinizacao: true, antenas: true, habitat: false, atividade_diurna_noturna: true, glandulas_de_cera: false },
    { nome_popular: "Barata", nome_cientifico: "Blattodea", asas: true, cor: true, alimentacao: true, metamorfose: false, polinizacao: false, antenas: true, habitat: true, atividade_diurna_noturna: true, glandulas_de_cera: false },
    { nome_popular: "Ácaro", nome_cientifico: "Acari", asas: false, cor: true, alimentacao: true, metamorfose: false, polinizacao: false, antenas: true, habitat: true, atividade_diurna_noturna: true, glandulas_de_cera: false },
    { nome_popular: "Piolho", nome_cientifico: "Phthiraptera", asas: false, cor: true, alimentacao: true, metamorfose: false, polinizacao: false, antenas: true, habitat: false, atividade_diurna_noturna: true, glandulas_de_cera: false },
];

const InsectQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [identifiedInsects, setIdentifiedInsects] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            identifyInsect();
        }
    };

    const identifyInsect = () => {
        const matches = insects.map(insect => {
            const score = questions.reduce((acc, question, index) => {
                const answer = answers[index];
                const insectValue = insect[question.key];

                if (answer === "Sim" && insectValue === true) {
                    return acc + 1; // Aumenta a pontuação se a resposta for "Sim" e o inseto tiver a característica
                } else if (answer === "Não" && insectValue === false) {
                    return acc + 1; // Aumenta a pontuação se a resposta for "Não" e o inseto não tiver a característica
                }
                return acc; // Mantém a pontuação atual se não houver correspondência
            }, 0);

            return { insect, score };
        });

        // Filtra apenas os insetos com pontuação maior ou igual a 5
        const sortedMatches = matches.filter(match => match.score >= 5).sort((a, b) => b.score - a.score);

        setIdentifiedInsects(sortedMatches);

        if (sortedMatches.length === 0) {
            setErrorMessage("Nenhum inseto identificado com as respostas fornecidas.");
        } else {
            setErrorMessage("");
        }
    };

    return (
        <div className="container-fluid insectQuiz d-flex align-items-center text-center">
            <div className="row w-100 justify-content-center">
                <div className="col-12 col-lg-6">
                    <Header />
                    <div className="txtSubtitle fs-5 text-start text-white w-75 mb-4">
                        Bem-vindo ao EntomoKey! Aqui, você pode identificar rapidamente o inseto que encontrou.
                    </div>

                    {errorMessage && (
                        <div className='text-danger'>
                            <h3>{errorMessage}</h3>
                        </div>
                    )}

                    {identifiedInsects.length > 0 ? (
                        <div className='text-white'>
                            <h2>Insetos Identificados:</h2>
                            <div className="row">
                                {identifiedInsects.map(({ insect, score }, index) => (
                                    <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{insect.nome_popular}</h5>
                                                <p className="card-text"><strong>Nome Científico:</strong> {insect.nome_cientifico}</p>
                                                <p className="card-text"><strong>Pontuação:</strong> {score}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className='text-white'>
                            <div className="divisoria mx-auto"></div>
                            <h3>{questions[currentQuestionIndex].question}</h3>
                            <button className="btn btn-success me-3" onClick={() => handleAnswer("Sim")}>Sim</button>
                            <button className='btn btn-danger' onClick={() => handleAnswer("Não")}>Não</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InsectQuiz;
