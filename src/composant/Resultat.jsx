
function Resultat({ score, total, recommencer }) {
  return (
    <div className="resultat">
      <h2>Quiz terminé ! 🎉</h2>
      <p className="score">
        {score} / {total}
      </p>
      <p>Tu as obtenu {score} bonne réponse sur {total}.</p>
      <button className="bouton principal" onClick={recommencer}>
        Recommencer
      </button>
    </div>
  );
}

export default Resultat;