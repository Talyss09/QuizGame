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
export const Header = styled.div`
  text-align: center;
  color: #000000;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  `
export const Message = styled.span`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  color: #000;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const Button = styled.input`
  margin-top: 1rem;
  width: 20%;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bolder;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  background-color: #237D6F;
  `