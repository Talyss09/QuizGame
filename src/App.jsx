import { useContext, useEffect } from 'react'
import { Body, Container, Content, Header, Score, Time } from './assets/styles/app'
import { QuestionCard } from './components/QuestionCard'
import { StartPage } from './components/StartPage'
import { QuizContext } from './context/quiz'
import {FinalScore} from './components/FinalScore'
export const App = () => {
  const [quizState, setQuizState] = useContext(QuizContext);

  useEffect(() => {
    setQuizState({type: "ReOrder"})
  },[setQuizState])
  return (
    <Container>
        <Header>
            <Score>
              View Highscores
            </Score>
            <Time>Time: 38</Time>
        </Header>
        <Body> 
          <Content>
            {quizState.game === "start" && <StartPage/>}
            {quizState.game === "playing" && <QuestionCard/>}
            {quizState.game === "end" && <FinalScore/>}
            {/* <QuestionCard/> */} 
          </Content>
        </Body>
    </Container>
  )
}
