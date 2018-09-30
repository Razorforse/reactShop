import React from 'react';
import Header from './Components/Header';
import Basket from './Components/Basket';
import './Style/index.css';


class App extends React.Component {

    constructor(props){   
        super(props);

        this.state = {  
        basketCount: 0
        }

        this.plusBasketCount = this.plusBasketCount.bind(this);
        this.minusBasketCount = this.minusBasketCount.bind(this);
        this.delBasketCount = this.delBasketCount.bind(this);
    }

    plusBasketCount(){
            this.setState({
            basketCount: this.state.basketCount += 1
         })
    }

    
    minusBasketCount(){
         this.setState({
            basketCount: this.state.basketCount -= 1
         })
        console.log(this.state.basketCount);
    }

    delBasketCount(val) {
        this.setState({
            basketCount: this.state.basketCount -= val
         })
    }

    
    render(){
        console.log(this.state.basketCount)
        return(
            <div className="container">
                <Header basket={this.state.basketCount} />
                <Basket dl={this.delBasketCount} mn={this.minusBasketCount}  pl={this.plusBasketCount}/>
            </div>
        )
    }
}


export default App