import Wrapper from '../components/Layout/Wrapper';
import Header from '../components/HomeComponents/Header';
import Cards from '../components/HomeComponents/Cards';
import Info from '../components/HomeComponents/Info';

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Cards />
      <Info />
    </Wrapper>
  )
}
