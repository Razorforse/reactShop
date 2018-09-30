import React from 'react';
import shop from "./img/shop24.png";
import user from "./img/user.png";
import cart from "./img/cart.png";
import search from './img/search.png';




class Search extends React.Component {
        
    state = {
        name: 'нажми меня'
    }

    clickName = () => {
      return this.setState({name:prompt('enter your name plz')})
    }


    render() {
        return (
            <div className="search">
                <div className="search__item">
                    <img src={shop}/>
                    <span>New Look</span>
                    <div className="search__form">
                        <input type="search" placeholder="Поиск по сайту" />
                        <button><img src={search}/></button>
                    </div>
                </div>
                <div className="search__item">
                    <div>
                        <img src={user} />
                        <button onClick={this.clickName}>{this.state.name}</button>
                    </div>
                    <div>
                        <img src={cart} />
                        <button >В корзине:<br/> {this.props.basket} товара</button>
                    </div>
                </div>
            </div>
        )
    };
    
}



export default Search;