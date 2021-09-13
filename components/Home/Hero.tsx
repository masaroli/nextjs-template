import * as S from './Hero.styles';

export type HeroProps = {
  title: string;
  description: string;
};

const Hero = ({ title, description }: HeroProps) => {
  return (
    <>
      <S.Container>
        <S.Logo />
        <h1>{title}</h1>
        <p>{description}</p>
      </S.Container>
    </>
  );
};

export default Hero;
