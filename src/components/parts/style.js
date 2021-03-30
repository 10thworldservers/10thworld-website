import styled from 'styled-components';


export const ListParent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListChild = styled.li`
  padding: 0.75rem;
  border-bottom: 1px solid ${props => props.theme.color.black.lightest};
  max-width: 24em;
`;

export const ListLink = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${props => props.theme.color.white.regular};
  font-size: 20px;
  cursor: pointer;
  &:visited {
    color: ${props => props.theme.color.white.lessdark};
  }
  &:hover {
    color: ${props => props.theme.color.white.dark};
  }
  &:focus {
    color: ${props => props.theme.color.white.lessdark}
  }
  &:active {
    color: ${props => props.theme.color.white.darker};
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
  color: ${props => props.theme.color.white.lessdark};
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