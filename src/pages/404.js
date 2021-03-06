import React from "react";
import { Link } from "gatsby";

import NotFound from "./not_found.svg";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ location }) => {
  React.useEffect(() => {
    if (window.plausible) {
      window.plausible("404", { props: { path: location.pathname } });
    }
  }, [location.pathname]);

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <div className="flex flex-col items-center justify-center h-screen max-w-4xl px-4 mx-auto md:px-0">
        <img src={NotFound} alt="" className="mt-4 w-96 h-96" />
        <div className="flex flex-col items-center space-y-6">
          <p className="mt-4 text-3xl font-semibold text-center text-gray-200 sm:mt-6">
            Oops... Nothing found here!
          </p>
          <Link to="/">
            <button className="w-full px-4 py-2 mt-2 text-xl font-semibold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-300">
              Take me back home
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
