import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  max-width: 1440px;
  padding: 0 20px;
  height: 100vh;
  margin: 0 auto;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  filter: grayscale(50);

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.color.black};
    opacity: 0.7;
  }
`;
export const BackgroundImage = styled(Image)``;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    object-fit: cover;
  }
`;
export const Button = styled.a`
  position: relative;
  font-size: 1.8rem;
  padding: 12px 80px;
  background: ${({ theme }) => theme.color.darkBlue};
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;
  span {
    position: relative;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: -3px;
    transform: translateY(-100%);
    transition: transform 100ms ease, color 100ms ease 100ms;
    background: ${({ theme }) => theme.color.lightBlue};
  }

  &:hover {
    color: ${({ theme }) => theme.color.darkBlue};
    &:before {
      transform: translateY(0);
      transition: transform 200ms ease, color 200ms ease 100ms;
    }
  }
`;

export const Logo = styled(Image)``;
