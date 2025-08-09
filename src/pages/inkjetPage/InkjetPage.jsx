import React, { Component, Fragment } from 'react';
import MyScrollBarText from '../../componet/myScrollBarText/MyScrollBarText';
import MyHader from '../../componet/myHader/MyHader';
import MyFooder from '../../componet/myFooder/MyFooder';
import MyNavBar from '../../componet/myNavBar/MyNavBar';

class InkjetPage extends Component {
    render() {
        return (
            <Fragment>
                <MyScrollBarText/>
                <MyHader/>
                <MyNavBar/>
                <MyFooder/>
            </Fragment>
        );
    }
}

export default InkjetPage;