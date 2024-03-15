import styled from "styled-components";

export const Chip = styled.button`
  border-radius: 8px;
  padding: 6px;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (prefers-color-scheme: light) {
    background-color: rgba(255, 255, 255, 0.25);

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;
