import Layout from "../Common/Layout";
import LocalMap from "./components/LocalMap";
import IntroAbout from "./components/IntroAbout";
import DiscoverProducts from "./components/DiscoverProducts";
import { IlocationProps } from "../../utils/interfaces";

const Home = () => {
  const locationStatic: IlocationProps = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 23.822665367994194,
    lng: 90.37948960457562,
  };
  return (
    <Layout title="Home">
      <div>
        <IntroAbout />
        <DiscoverProducts />
        <LocalMap location={locationStatic} zoomLevel={8.5} />
      </div>
    </Layout>
  );
};

export default Home;
