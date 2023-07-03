import React from 'react'
import { Anwers, Container, Question } from './styled'
// import { QuizContext } from '../../context/quiz';
import { Input } from '../Input';

export const QuestionCard = ({ current, onClick}) => {
  // const [quizState, setQuizState] = useContext(QuizContext);
  return (
    <Container>
      <Question>
          {current.questionText}
      </Question>
      <div>
        <Anwers>
          {current.options.map((props, index) => {
            return <Input key={index} value={props} type="button" onclick = {onClick}/>
          })}
        </Anwers>
      </div>
    </Container>
  )
}
