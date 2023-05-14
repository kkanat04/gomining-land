import BtcSupport from '@/components/BtcSupport/BtcSupport';
import ContactForm from '@/components/ContactForm/ContactForm';
import CryptoArt from '@/components/CryptoArt/CryptoArt';
import Footer from '@/components/Footer/Footer';
import FooterOption2 from '@/components/FooterOption2/FooterOption2';
import GetGominig from '@/components/GetGominig/GetGominig';
import Header from '@/components/Header/Header';
import HowWork from '@/components/HowWork/HowWork';
import Info from '@/components/Info/Info';
import ProfitableMining from '@/components/ProfitableMining/ProfitableMining';
import SelectMining from '@/components/SelectMining/SelectMining';
import TraditionalMining from '@/components/TraditionalMining/TraditionalMining';

const Main = () => {
  return (
    <div>
      <Header />
      <Info />
      <TraditionalMining />
      <GetGominig />
      <SelectMining />
      <HowWork />
      <ProfitableMining />
      <BtcSupport />
      <CryptoArt />
      <ContactForm />
      <Footer />
      <FooterOption2 />
    </div>
  );
};

export default Main;
