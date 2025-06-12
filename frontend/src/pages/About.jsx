import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
            {/* Title: ABOUT US */}
            <Title text1="ABOUT" text2="US" />

            {/* Image and Intro Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '30px' }}>
                <img
                    src={assets.about_img}
                    alt="About Us"
                    style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.
                        Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum.
                    </p>
                    <p>
                        <b>Our Mission</b><br />
                        Our mission is to deliver high-quality, culturally rich products that resonate with our global audience. 
                        We aim to create a space where tradition meets innovation, making each experience meaningful.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </p>
                </div>
            </div>

            {/* Title: WHYy CHOOSE US */}
            <div style={{ marginTop: '60px' }}>
                <Title text1="WHY" text2="CHOOSE US" />

                <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    <div>
                        <b>QUALITY ASSURANCE</b>
                        <p>
                            We are committed to providing products that meet the highest standards of quality and craftsmanship.
                            Our team carefully selects and tests every item to ensure durability and customer satisfaction.
                        </p>
                    </div>
                    <div>
                        <b>CONVENIENCE</b>
                        <p>
                            Enjoy a seamless shopping experience with our user-friendly platform, secure payment options,
                            and prompt delivery services. Convenience is at the core of what we do.
                        </p>
                    </div>
                    <div>
                        <b>EXCEPTIONAL CUSTOMER SERVICE</b>
                        <p>
                            Our dedicated support team is always ready to assist you with any queries or concerns.
                            We prioritize your satisfaction and strive to make every interaction pleasant and productive.
                        </p>
                    </div>
                </div>
            </div>

            {/* NewsletterBox at the bottom */}
            <div style={{ marginTop: '60px' }}>
                <NewsletterBox />
            </div>
        </div>
    );
};

export default About;
