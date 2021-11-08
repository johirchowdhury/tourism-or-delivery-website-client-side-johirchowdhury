import React from 'react';
import bgImage from '../../../images/background.jpg'
import './WhyChoose.css';
const WhyChoose = () => {
    return (
        <div className="bg-opacity mb-4" style={{ backgroundImage: `url(${bgImage})`, padding: '10px' }}>
            <h1>Why Choose Us</h1>
            <img src="https://www.obokash.com/images/why-chose-us.jpg" alt="" srcset="" />
            <p>It is very important for you to choose your travel agency very wisely. When you take one or two weeks off from your regular schedule just for some relaxation, you must expect nothing but pleasure, satisfaction and enjoyment to refresh yourself and get you back on track. Therefore, Obokash travel agency is there to ensure that your holidays do not go to a waste with their top quality services and </p>
            <p>Cost Effective -  – We are very well known that how much you have worked hard for your savings. In addition, we want you to save as much as possible on your trips and get the best services and other VIP facilities within that budget at the same time. This is where our </p>
            <p>
                No hidden charges– This is the most common thing that is suffered by most of the people. Even we face many questions regarding hidden charges. Therefore, Oboskash travel agency has a policy that says “NO HIDDEN CHARGES”. We like our information and packages to be transparent for our clients.
            </p>
        </div>
    );
};

export default WhyChoose;