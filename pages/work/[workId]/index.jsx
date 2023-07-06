import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";
import Footer from "../../../src/layout/Footer";
import Layout from "../../../src/layout/Layout";
import PageTitle from "../../../src/layout/PageTitle";


function workList() {
    return (
        <Layout>
            <div className="wrapper">
                <div className="section section-inner started-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {/* Section Started Heading */}
                                <PageTitle title="Projects" />
                                {/* Section Works */}
                                {/* <PortfolioIsotope /> */}
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default workList