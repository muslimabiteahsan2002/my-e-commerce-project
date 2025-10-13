import React, { Component, Fragment } from 'react';
import MyScrollBarText from '../../componet/myScrollBarText/MyScrollBarText';
import MyHader from '../../componet/myHader/MyHader';
import MyFooder from '../../componet/myFooder/MyFooder';
import MyNavBar from '../../componet/myNavBar/MyNavBar';
import MyLeaser from '../../componet/myLaser/MyLeaser';

class LaserPage extends Component {
    render() {
        return (
            <Fragment>
                <MyScrollBarText/>
                <MyHader/>
                <MyNavBar/>
                <MyLeaser/>
                <MyFooder/>
            </Fragment>
        );
    }
}

export default LaserPage;