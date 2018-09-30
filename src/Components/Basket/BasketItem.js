import React from 'react';



class BasketItem extends React.Component {

    constructor(props){    
        super(props);
        this.state = {
        count:  1,
        val: this.props.item.val,
        open: true
        }
    }


    componentWillMount() {
        this.props.pl(this.state.count)
    }
    

    plus = () => {
        this.props.sum(this.props.item.val);
        this.setState({
            count: this.state.count + 1,
            val: this.state.val + this.props.item.val
        })
        this.props.pl(this.state.count)
    }

    minus = () => {
        this.props.red(this.props.item.val);
        this.setState({
            count: this.state.count - 1,
            val: this.state.val - this.props.item.val
        })
        this.props.mn(this.state.count)
    }

    del = () => {
        this.props.dl(this.state.count)
        this.props.red(this.state.val)
        this.setState({
            open: !this.state.open
           })
    }

  
    render () {
        let item = this.props.item;

        if(this.state.open) {

        return (
            <ul>    
                <li>
                    <img src={require(`./img/${this.props.id + 1}.png`)} />
                </li>
                <li>
                    <span>{item.name}</span>
                    <span>Код: {item.code}</span>
                    <span>Размер: {item.size}</span>
                    <span>Цвет: {item.color}</span>
                </li> 
                <li>
                    <button onClick={this.state.count>1?this.minus:this.state.count}>-</button>
                    <span>{this.state.count}</span> 
                    <button onClick={this.state.count<10?this.plus:this.state.count}>+</button>
                </li>
                <li>
                    <span>{this.state.val} рублей</span>
                </li>
                <li>
                    <button onClick={this.del}>X</button>
                </li>
            </ul>
        )
      } else return null;

      
    }
}




export default BasketItem;