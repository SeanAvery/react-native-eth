import React, { Component } from 'react';
import {
  View,
  Slider,
  Text,
  Button,
} from 'react-native';

// import { Router } from '../../index.ios.js';

export default class TradeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ue_amount: 0,
      gbp_amount: 0,
      price: .75
    }
    this.handleOrder = this.handleOrder.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleOrder() {
    console.log('this.state is', this.state)
    fetch('http://localhost:6000/submitBuy', {
      method: 'Post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'applicatoin/json',
      },
      body: JSON.stringify({
        ue: this.state.ex
      })
    });
  }

  handleSliderChange(e) {
    const temp = e*10;
    const conv_val = this.rounding(temp, 2);
    
    this.setState({ue_amount: conv_val});
    this.
    console.log('this.state.ue_amount', conv_val);
  }

  handleSliderComplete() {


  }
  rounding(val, places) {
    const multiplier = Math.pow(10, places);
    return Math.round(val * multiplier) / multiplier
  }


  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'lightgrey'}}>
        <View style={{width: '100%', height: '33%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style ={{
              textAlign: 'center',
              color: 'darkgrey',
              fontSize: 50,
              fontFamily: 'Helvetica'
            }}>
              {this.state.ue_amount}
            </Text>
          </View>
        </View>
        <View style={{width: '100%', height: '33%', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <Text style ={{
              textAlign: 'center',
              color: 'darkgrey',
              fontSize: 50,
              fontFamily: 'Helvetica'
            }}>
              3.45 GBP
            </Text>
          </View>
        </View>
        <View style={{width: '100%', height: '33%', }}>
          <Slider
            onValueChange={this.handleSliderChange}
            onSlidingComplete={this.handleSliderComplete}
          />
          <Button onPress={this.handleOrder}title="submit order" style={{backgroundColor: 'darkgrey', flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          </Button>
        </View>
      </View>
    )
  }
}
