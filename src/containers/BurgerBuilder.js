import React, {Component} from 'react';

import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modal from '../components/UI/Modal/Modal';
import OrderSumamry from '../components/Burger/OrderSummary/OrderSummary'

const INGREDINTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  bacon: 0.7,
  meat: 1.3
}


class BurgerBuilder extends Component{

  state = {
    ingredients: {
      salad:  0,
      bacon:  0,
      cheese: 0,
      meat:   0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  updatePurchaseState(ingrdients){
  
    const sum = Object.keys(ingrdients)
      .map(igKey => {
        return ingrdients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el; 
      }, 0);

      this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) =>{
    const  oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }

    updatedIngredients[type] = updateCount;
    const priceAddition = INGREDINTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientsHandler = (type) => {
    const  oldCount = this.state.ingredients[type];
    if(oldCount <= 0 ){
      return;
    }
    const updateCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }

    updatedIngredients[type] = updateCount;
    const priceDeduction = INGREDINTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }
  render() {

    const disableInfo = {
      ...this.state.ingredients
    };

    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <=0
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSumamry ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientsHandler}
            disabled={disableInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;