import { QuizContext } from "../../context/quiz"
import { Input } from "../Input";
import { Container, Content, Header, Message } from "./styled"
import { useContext } from 'react'
export const StartPage = () => {
  const QuizState = useContext(QuizContext);
  const [quizState, setQuizState] = useContext(QuizContext);
  return (
    <Container>
      <Header>Coding Quiz Challenge</Header>
      <Content>
        <Message>
          Try to answer to following code-related questions within the time limit.
          <br />
          Keep in mind that incorrect anwers will be penalize your sscoretime by ten seconds!
        </Message>
        <Input  value="Start Quiz" onclick={() => setQuizState({type: 'ChangeState'})}/>
      </Content>
    </Container>
  )
}
