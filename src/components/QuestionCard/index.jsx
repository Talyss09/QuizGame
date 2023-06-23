import React, { useContext, useEffect } from 'react'
import { Anwers, Container, Question } from './styled'
import { QuizContext } from '../../context/quiz';
import { Input } from '../Button';
export const QuestionCard = () => {
  const [quizState, setQuizState] = useContext(QuizContext);
  const currentQuestion = quizState.Questions[quizState.currentQuestion]
  console.log({currentQuestion}, 'currentQuestion')
  console.log(currentQuestion.options, 'current options')
  

  useEffect(() => {
    console.log(quizState, 'quizStateeeeeeeeee')
  },[quizState])
  return (
    <Container>
      <Question>
          {currentQuestion.questionText}
      </Question>
      <div>
        <Anwers>
          {currentQuestion.options.map((props, index) => {
            return <Input key={props.Question} value={props}type="button" answer={currentQuestion.Anwers} onclick = {() =>  setQuizState({type: 'ChangeQuestion'})}/>
          })}
        </Anwers>
      </div>
    </Container>
  )
}
