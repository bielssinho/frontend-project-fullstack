import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray-900);
  color: var(--color-gray-300);
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: var(--color-gray-100);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 20px;
    color: var(--color-gray-100);
  }

  
`;
const Contacts = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 0.5rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    overflow: auto;

    > li:not(:last-child) {
      margin-bottom: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: var(--color-purple-600) var(--color-gray-800);

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--color-gray-800);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-purple-600);
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-purple-700);
    }
  }
`

export { Container, Header, Main, Contacts }