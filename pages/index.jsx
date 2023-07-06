import dynamic from "next/dynamic";
import Partners from "../src/components/Partners";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
// import Splitting from "splitting";

const Index = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Description */}
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-center col-lg-12">
                <div className="m-titles large">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    We are <span className='acent'>Digital </span> Agency <br />
                    Startup <span className='acent'>Studio</span>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div
                  className="description-text scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <p>
                    A Los Angeles based studio building handcrafted websites
                    <br />
                    and brands for companies and all over the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PortfolioIsotope />
        {/* Section Partners */}
        <Partners />
      </div>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};
export default Index;
