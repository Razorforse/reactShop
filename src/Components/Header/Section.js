import React from 'react';

let arr = ['Одежда и аксессуары','Обувь','Украшения','Красота и здоровье','Товары для дома','Товары для кухни']

class Section extends React.Component {

    content(prop){
        return prop.map((item,index)=><li><button>{prop[index]}</button></li>)
    }

    render() {
        return(
            <div className="section">
                <ul>
                    {this.content(arr)}
                </ul>
            </div>
        )
    }

}

export default Section;