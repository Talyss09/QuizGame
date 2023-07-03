import { createContext, useReducer } from "react";
import {Questions} from '../utils/Questions'

const Stages = ['start', 'playing', 'end']
const initialState = {
  game: Stages[0],
  Questions,
  currentQuestion: [0],
  score: 0
}


const quizReducer = (state, action) => {

  switch(action.type) { 
    case "ChangeState":
      return {
        ...state,
        game: Stages[1],
      };
    case "ReOrder": 
      const ReorderQuestions = Questions.sort(() => {
        return Math.random() - 0.5;
      })
      return {
        ...state,
        Questions: ReorderQuestions
      };
    case "ChangeQuestion": 
      const NextQuestion = Number(state.currentQuestion + 1)
      let endGame = false

      if(!Questions[NextQuestion]) {
        endGame = true
      }
      return {
        ...state,
        currentQuestion: NextQuestion,
        game: endGame ? Stages[2] : state.game
      }
    case 'RestartGame': 
      return initialState
    default: 
      return state
  }
}
export const QuizContext= createContext();

export const QuizProvider = ({children}) => {
  
  const value = useReducer(quizReducer, initialState)
  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}