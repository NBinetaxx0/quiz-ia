
function Question({ numero, total, question, reponseChoisie, choisirReponse }) {
  return (
    <div>
      <p className="numero">
        Question {numero} / {total}
      </p>

      <h2 className="enonce">{question.enonce}</h2>

      <div className="liste-reponses">
        {/* map() crée un bouton pour chaque réponse du tableau */}
        {question.reponses.map((texte, index) => (
          <button
            key={index}
            className={reponseChoisie === index ? "reponse choisie" : "reponse"}
            onClick={() => choisirReponse(index)}
          >
            {texte}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;