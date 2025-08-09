import React, { Component, Fragment } from 'react';
import MyScrollBarText from '../../componet/myScrollBarText/MyScrollBarText';
import MyHader from '../../componet/myHader/MyHader';
import MyFooder from '../../componet/myFooder/MyFooder';
import MyNavBar from '../../componet/myNavBar/MyNavBar';
import MyHome from '../../componet/myHome/MyHome';

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <MyScrollBarText/>
                <MyHader/>
                <MyNavBar/>
                <MyHome/>
                <MyFooder/>
            </Fragment>
        );
    }
}

export default HomePage;