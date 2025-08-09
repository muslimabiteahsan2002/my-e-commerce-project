import React, { Component, Fragment } from 'react';
import MyScrollBarText from '../../componet/myScrollBarText/MyScrollBarText';
import MyHader from '../../componet/myHader/MyHader';
import MyFooder from '../../componet/myFooder/MyFooder';
import MyNavBar from '../../componet/myNavBar/MyNavBar';
import MyAllInformation from '../../componet/myAllInformation/MyAllInformation';

class MyInformationPage extends Component {
    render() {
        return (
            <Fragment>
                <MyScrollBarText/>
                <MyHader/>
                <MyNavBar/>
                <MyAllInformation/>
                <MyFooder/>
            </Fragment>
        );
    }
}

export default MyInformationPage;