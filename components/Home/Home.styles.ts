import styled from 'styled-components';
import LogoSVG from '../../public/images/logo.svg';

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  height: 100vh;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.darkBlue};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled(LogoSVG)`
  width: 50%;
  margin-bottom: 20px;
`;
