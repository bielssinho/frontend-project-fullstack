import styled from 'styled-components';
import { MdOutlineDelete } from 'react-icons/md';
import { MdUpdate } from 'react-icons/md';

const Container = styled.div`
  background-color: var(--color-gray-800);
  color: var(--color-gray-200);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  span {
    display: block;
    font-size: 14px;
    margin-bottom: 4px;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

const DeleteIcon = styled(MdOutlineDelete)`
  color: var(--color-gray-100);
  cursor: pointer;

  :hover {
    color: var(--color-purple-800);
  }
`;

const UpdateIcon = styled(MdUpdate)`
  color: var(--color-gray-100);
  cursor: pointer;

  :hover {
    color: var(--color-purple-800);
  }
`;

export { Container, DeleteIcon, UpdateIcon }