import * as S from './Home.styles';

export type HomeProps = {
  title: string;
  description: string;
};

const HomeComponent = ({ title, description }: HomeProps) => {
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

export default HomeComponent;
