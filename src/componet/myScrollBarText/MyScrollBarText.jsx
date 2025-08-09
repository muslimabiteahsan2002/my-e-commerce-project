import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../my/my.css"
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

class MyScrollBarText extends Component {
    render() {
        return (
            <Fragment>
                <div className='mar'>
                <Container className='mar_all'>
                    <div className='mar_1'>Latest Posts</div>
                    <div className='mar_2'>
                        <Marquee autoFill="true" className='prin' pauseOnHover="true">
                            <p>&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	বাংলাদেশে আমদানিকৃত সকল ধরনের লেজার প্রিন্টার, ডেস্কজেট/ইংকজেট প্রিন্টার, ফটোকপি প্রিন্টারের যেকোন ব্র্যান্ডের প্রফেশনাল চায়না টোনার কার্ট্রিজ খুচরা ও পাইকারী মূল্যে পাওয়া যায় । এছাড়াও দেশের যেকোন প্রান্তে কুরিয়ার সার্ভিসের মাধ্যমে অফিস ও হোম ডেলিভারী দেওয়া হয় ।</p>
                        </Marquee>
                    </div>
                </Container>
                </div>
            </Fragment>
        );
    }
}

export default MyScrollBarText;