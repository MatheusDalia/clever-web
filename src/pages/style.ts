import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.black};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 20%;
`;
