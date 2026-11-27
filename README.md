# Quiz sur l'IA 

Mini-projet React : un quiz à choix unique sur l'intelligence artificielle. Une question à la fois, réponses modifiables, score à la fin.

## Fonctionnalités

- 5 questions avec 4 réponses chacune, stockées dans un fichier de données
- Une seule réponse par question, modifiable
- Boutons « Précédent » et « Suivant » (« Suivant » bloqué sans réponse)
- Les réponses sont conservées quand on change de question
- « Terminer le quiz » puis score sur le total
- « Recommencer » efface tout
- Design rose, lisible sur mobile et ordinateur

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse affichée dans le terminal (souvent http://localhost:5173).

## Organisation du code

- `src/donnees/questions.js` : les questions, les réponses et la bonne réponse
- `src/composant/Question.jsx` : affiche une question et ses réponses
- `src/composant/Resultat.jsx` : affiche le score final
- `src/App.jsx` : garde le state (question en cours, réponses, quiz terminé) et les boutons
- Les réponses sont conservées dans un tableau `reponses` (une case par question, `null` si pas répondu)
- Le score compte les cas où la réponse choisie est égale à la bonne réponse

## Difficultés et apprentissages

**Difficulté 1 : ouvrir le projet sur le Bureau**
- Essayé : `cd bureau` et `cd ~/Desktop`, sans succès
- Ce qui a marché : le chemin Windows `%USERPROFILE%\Desktop`, puis le dossier OneDrive
- Ressources : documentation de Windows et de Vite
- Retenu : sur Windows, les chemins s'écrivent avec `\` et le Bureau peut être dans OneDrive
**Difficulté 2 :« key » dans la console**
- Essayé : afficher les réponses avec `map()` sans mettre d'attribut `key`
- Ce qui a marché : ajouter `key={index}` sur chaque bouton de réponse
- Ressources : documentation de React rendu de listes et console du navigateur
- Retenu : `key` permet à React d'identifier chaque élément d'une liste pour mettre à jour l'affichage correctement

## Ressources utilisées

- Documentation de React et de Vite
- Assistant IA : utilisé pour le CSS