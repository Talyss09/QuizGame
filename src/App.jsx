import { useContext, useEffect, useState } from 'react'
import { Body, Container, Content, Header} from './assets/styles/app'
import { QuestionCard } from './components/QuestionCard'
import { StartPage } from './components/StartPage'
import { QuizContext } from './context/quiz'
import {FinalScore} from './components/FinalScore'
export const App = () => {
  const [quizState, setQuizState] = useContext(QuizContext);
  const [score, setScore] = useState(0)
  const currentQuestion = quizState.Questions[quizState.currentQuestion]
  
  const optionClicked = (isCorrect) => {
    if (isCorrect === currentQuestion.answer) {
      setScore(score + 1)
    } else {
    }
  }

  useEffect(() => {
    if(quizState.game === 'start'){
      setScore(0)
    }
  }, [quizState])

  useEffect(() => {
    setQuizState({type: "ReOrder"})
  },[setQuizState])

  return (
    <Container>
        <Header>
            {/* <Time>Time: 38</Time> */}
        </Header>
        <Body> 
          <Content>
            {quizState.game === "start" && <StartPage/>}
            {quizState.game === "playing" && <QuestionCard Score={score} current={currentQuestion} onClick={(e) => {
               setQuizState({type: 'ChangeQuestion'})
               optionClicked(e.target.value)
              }}/>}
            {quizState.game === "end" && <FinalScore finalScore={score}/>}
          </Content>
        </Body>
    </Container>
  )
}
