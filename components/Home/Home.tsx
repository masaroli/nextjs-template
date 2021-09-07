import * as S from './Home.styles';
import Logo from '../../public/images/33-plateado-logo.png';
import BKG1 from '../../public/images/bg_dark.jpg';
import BKG2 from '../../public/images/cloud-middle-dark.png';

const HomeComponent = () => {
  return (
    <>
      <S.Background>
        <S.ImageWrapper>
          <S.BackgroundImage src={BKG1} layout={'fill'} />
        </S.ImageWrapper>
        <S.ImageWrapper>
          <S.BackgroundImage src={BKG2} layout={'fill'} />
        </S.ImageWrapper>
      </S.Background>
      <S.Container>
        <S.Logo src={Logo} width={450} height={450} />
        <S.Button href="https://kkpoker.club/33plateado">
          <span>REGISTRARSE</span>
        </S.Button>
      </S.Container>
    </>
  );
};

export default HomeComponent;
