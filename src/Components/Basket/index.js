import React from 'react';
import BasketItems from "./BasketItems.js"
import data from "../fixtures.js";
import "./basket.css"





class Basket extends React.Component {    

    render(){
        return(
            <div className="basket">
                <div className="basket__label">Ваша корзина</div>
                <ul>
                    <li>Товар</li>
                    <li>Описание</li>
                    <li>Количество</li>
                    <li>Цена</li>
                    <li>Удалить</li>
                </ul>
                <div className="basket__items">
                    <BasketItems dl={this.props.dl} pl={this.props.pl} mn={this.props.mn} data={data} />
                </div>
            </div>
        )
    }
    
}


export default Basket