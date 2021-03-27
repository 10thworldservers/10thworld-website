import styled from 'styled-components';

export const ListParent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;



export const ListChild = styled.li`
  padding: 0.75rem;
  border-bottom: 1px solid var(--divider-color);
  max-width: 24em;
`;



export const ListLink = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: var(--text-color-1);
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: var(--soft-red);
  }
  
`;

export const ListIcon = styled.img`
  width: 15px;
  height: 10px;
`

export const ListIconActive = styled.img`
  width: 15px;
  height: 10px;
  transform: rotate(180deg);
  transition: transform 1s ease-in;
`;

export const CopyText = styled.p`
  max-width: 32em;
  color: var(--text-color-2);
  animation: 0.5s ease-in slidedown;
  font-size: 18px;
  @keyframes slidedown {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;