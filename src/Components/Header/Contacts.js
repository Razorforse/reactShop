import React from 'react';
import blog from "./img/blog.png";
import youtube from "./img/youtube.png";
import online from "./img/online.png";

class Contacts extends React.Component {

    render() {
        return (
            <div className="contacts">
                <div className="contacts__item">
                    <span>8 (800) 500-75-55</span>
                    <span>Бесплатный звонок по России</span>
                </div>
                <div className="contacts__item">
                    <div className="contacts__blog">
                        <img src={blog}/>
                        <button>Звездный блог</button>
                    </div>
                    <div className="contacts__youtube">
                        <img src={youtube}/>
                        <button>Смотрите нас на YouTube</button>
                    </div>
                    <div className="contacts__online">
                        <img src={online}/>
                        <button>Смотрите наш прямой эфир</button>
                    </div>
                </div>
            </div>
        )
    }   
};


export default Contacts