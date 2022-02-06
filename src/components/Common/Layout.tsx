import { useEffect } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
interface ILayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ children, title }: ILayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
