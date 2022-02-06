import { Link } from "react-router-dom";

// a footer component with a copyright notice and links to the privacy policy and terms of use  and site map in tailwind css
// Language: typescript
// Path: src\components\Footer\Footer.tsx

const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-screen max-h-[40vh] bg-gray-200">
      <div className="flex flex-col items-center">
        <div className=""></div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-700">
              © 2020, All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-700">
              <a href="/privacy-policy">Privacy Policy</a>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-700">
              <Link to="/terms-of-use">Terms of Use</Link>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-700">
              <Link to="/sitemap">Site Map</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
