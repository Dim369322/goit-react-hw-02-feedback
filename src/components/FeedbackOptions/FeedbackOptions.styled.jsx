import styled from 'styled-components';

export const CommentOption = styled.li`
  display: inline-block;
  margin-right: 10px;

  &:last-child {
    margin-right: 0px;
  }

  button:first-letter {
    text-transform: capitalize;
  }
`;
