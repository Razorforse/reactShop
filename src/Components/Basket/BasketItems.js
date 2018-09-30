import React from 'react';
import BasketItem from './BasketItem.js'
import data from "../fixtures.js";


 class BasketItems extends React.Component {
    

        constructor(props) {
            super(props);
            this.state = {
                now: this.content(),
                globalVal: this.getVal(),
                promo: 0,
                allval: this.getVal()
            }
        }


        promoClick = () => {
            if(this.state.promo === 1800 && this.state.globalVal > 0) {
                this.setState({
                    allval: this.state.globalVal - this.state.promo
                }) 
            } else  {
                this.setState({
                    allval: this.state.globalVal
                })
            }
        }


        promoChange = (event) => {
            if(event.target.value === '123456') {
                this.setState({
                    promo: 1800
                })
            } else {
                this.setState({
                    promo: 0
                })
            }
        }
            
        plusClick = (val) => {
           this.setState({
            globalVal: this.state.globalVal += val,
            allval: this.state.globalVal 
           })
        }

        minusClick = (val) => {
            if(this.state.globalVal > 0) {
                this.setState({
                globalVal: this.state.globalVal -= val,
                allval: this.state.globalVal 
                })
            }
        }

        getVal() {
            return data.map((item) => item.val).reduce((sum,item) => sum + item)
        }


        content() { return data.map((item,index)=>{
        return <BasketItem dl={this.props.dl} pl={this.props.pl} mn={this.props.mn} red={this.minusClick}  sum={this.plusClick} key={data[index].id} id={index} item={data[index]}/>
                }
            )
        }
        

        render() {
               
                return (
                        <div className="basket__items">
                            <div>{this.state.now}</div>
                            <div className="promo">
                                <div className="promo__action">
                                    <p>Есть промокод?</p>
                                    <div><input onChange={this.promoChange} placeholder="Введите промокод" type="text" /><button onClick={this.promoClick} type="submit">Применить</button></div>
                                </div>
                                <div className="promo__val">
                                    <div>Сумма заказа:<span></span><span>{this.state.globalVal} руб.</span></div>
                                    <div>Промокод:<span></span><span>{this.state.promo}руб.</span></div>
                                    <div>Всего:<span></span><span>{this.state.allval}руб.</span></div>
                                </div>
                            </div>
                        </div>

                )
            }
        }


    
export default BasketItems;