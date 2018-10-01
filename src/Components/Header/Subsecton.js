import React from 'react';

let arr = ['Женская одежда','Мужская одежда','Аксессуары']

class Subsection extends React.Component {

    content(prop){
        return prop.map((item,index)=><li><button>{prop[index]}</button></li>)
    }

    render() {
        return(
            <div className="subsection">
                <ul>
                     {this.content(arr)}
                </ul>
            </div>
        )
    }

}

export default Subsection;