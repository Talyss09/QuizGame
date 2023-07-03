import React, { useContext } from 'react'
import { QuizContext } from '../../context/quiz';
import { Container, Message, Score } from './styled'
import {  Input } from '../Input'
export const FinalScore = ({finalScore}) => {
  const [quizState, setQuizState] = useContext(QuizContext);

  return (
    <Container>
      <Message>All done!</Message>
      <Score>Your final score is {finalScore} of {quizState.Questions.length}.</Score>
      <div>
        <Input type="button" value="restart"  onclick={() => setQuizState({ type: 'RestartGame'})}/>
      </div>
    </Container>
  )
}
