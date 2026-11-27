import { useState } from "react";
import questions from "./donnees/questions";
import Question from "./composant/Question";
import Resultat from "./composant/Resultat";
import "./App.css";

function App() {
  
  const [questionActuelle, setQuestionActuelle] = useState(0);

 
  const [reponses, setReponses] = useState(Array(questions.length).fill(null));

  
  const [termine, setTermine] = useState(false);

  
  function choisirReponse(indexReponse) {
   
    const nouvellesReponses = [...reponses];
    nouvellesReponses[questionActuelle] = indexReponse;
    setReponses(nouvellesReponses);
  }

  function suivant() {
    setQuestionActuelle(questionActuelle + 1);
  }

  function precedent() {
    setQuestionActuelle(questionActuelle - 1);
  }

  function terminer() {
    setTermine(true);
  }

 
  function recommencer() {
    setQuestionActuelle(0);
    setReponses(Array(questions.length).fill(null));
    setTermine(false);
  }

 
  function calculerScore() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (reponses[i] === questions[i].bonneReponse) {
        score = score + 1;
      }
    }
    return score;
  }

  
  const derniereQuestion = questionActuelle === questions.length - 1;
  const aRepondu = reponses[questionActuelle] !== null;

  if (termine) {
    return (
      <div className="carte">
        <Resultat
          score={calculerScore()}
          total={questions.length}
          recommencer={recommencer}
        />
      </div>
    );
  }

  
  return (
    <div className="carte">
      <h1 className="titre">Quiz sur l'IA </h1>

      <Question
        numero={questionActuelle + 1}
        total={questions.length}
        question={questions[questionActuelle]}
        reponseChoisie={reponses[questionActuelle]}
        choisirReponse={choisirReponse}
      />

      <div className="boutons">
        <button
          className="bouton"
          onClick={precedent}
          disabled={questionActuelle === 0}
        >
          Précédent
        </button>

        {derniereQuestion ? (
          <button
            className="bouton principal"
            onClick={terminer}
            disabled={!aRepondu}
          >
            Terminer le quiz
          </button>
        ) : (
          <button
            className="bouton principal"
            onClick={suivant}
            disabled={!aRepondu}
          >
            Suivant
          </button>
        )}
      </div>
    </div>
  );
}

export default App;