import HomeComponent, { HomeProps } from '../components/Home/Home';
import { GetStaticProps } from 'next';

type IndexProps = {
  homeProps: HomeProps;
};

const Index = ({ homeProps }: IndexProps) => {
  return <HomeComponent {...homeProps} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      //TODO: Bring data from API
      homeProps: {
        title: 'Loviscek Propiedades',
        description: 'Bienvenidos al sitio',
      },
    },
  };
};
export default Index;
