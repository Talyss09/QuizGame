import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
 `
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: #237D6F;
  padding: 1.5rem;
  align-items: center;
  justify-content: space-between;
`
export const Body = styled.body`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Score = styled.div`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
`
export const Time = styled.div`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
`