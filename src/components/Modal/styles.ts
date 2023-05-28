import styled from 'styled-components'


const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-gray-900);
    padding: 20px;
    box-shadow: 0  0 25px 0 rgba(0,0,0,.25);
    width: 100%;
    max-width: 250px;
    border-radius: 0.5rem;
    gap: 1rem;
  }

  button{
    padding: 8px 16px;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`

export { Container }