import styled from 'styled-components'

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 1rem;
  margin: 5rem;
  border-radius: 0.5rem;
  border: 1px solid black;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`
export const Question = styled.div` 
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const Anwers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`