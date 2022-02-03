import { useEffect } from "react";
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
    </div>
  );
};

export default Layout;
