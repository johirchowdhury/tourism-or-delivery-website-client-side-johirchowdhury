import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <OurTeam></OurTeam>
            <WhyChoose></WhyChoose>
            <Footer></Footer>
        </div>
    );
};

export default Home;