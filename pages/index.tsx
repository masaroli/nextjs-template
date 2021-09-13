import Hero, { HomeProps } from '../components/Home/Hero';
import { GetStaticProps } from 'next';

type IndexProps = {
  homeProps: HomeProps;
};

const Index = ({ homeProps }: IndexProps) => {
  return <Hero {...homeProps} />;
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
