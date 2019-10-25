import React from 'react';
import Swiper from 'react-id-swiper';

export default class extends React.PureComponent {
    render() {
        return (
            <div id="scrollbar">
                <Swiper wrapperClass="box" freeMode={true} freeModeMomentumRatio={0.5} autoplay={true} pagination={{ el: '.scroll_bar', type: 'bullets', bulletClass: 'scroll_bar_dot' }}>
                    <div className="slider_item">
                        <img src="http://img9.daling.com/zin/public/common/2019/10/24/21/05/01/AHBFBEC000002568015.JPG" alt="" />
                    </div>
                    <div className="slider_item">
                        <img src="http://img6.daling.com/zin/public/common/2019/10/24/20/07/29/AIDACII000002566856.JPG" alt="" />
                    </div>
                    <div className="slider_item">
                        <img src="http://img4.daling.com/zin/public/common/2019/10/24/20/08/45/AJN0FNI000002566902.JPG" alt="" />
                    </div>
                    <div className="slider_item">
                        <img src="http://img7.daling.com/zin/public/common/2019/10/24/20/12/10/AHLQIBO000002567030.JPG" alt="" />
                    </div>
                </Swiper>
            </div>
        );
    }

    renderScrollbar = (e: any) => {
        console.log(e);
        return <span>1</span>;
    };
}
