import React, { Component, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../../pages/homePage/HomePage';
import LaserPage from '../../pages/laserPage/LaserPage';
import InkjetPage from '../../pages/inkjetPage/InkjetPage';
import DotPrinterPage from '../../pages/dotPrinterPage/DotPrinterPage';
import PhotoCopyPage from '../../pages/photoCopyPage/PhotoCopyPage';
import MyInformationPage from '../../pages/myInformationPage/MyInformationPage';

class MyRouter extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/laser" element={<LaserPage />} />
                        <Route path="/inkject" element={<InkjetPage />} />
                        <Route path="/dot_printer" element={<DotPrinterPage />} />
                        <Route path="/photoCopy" element={<PhotoCopyPage />} />
                        <Route path="/information" element={<MyInformationPage />} />
                    </Routes>
                    </BrowserRouter>
            </Fragment>
        );
    }
}

export default MyRouter;