import React from 'react';

import Aux from '../../../hoc/Aux';


const orderSummary = (props) => {

  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return (<li key={igKey}>
              <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
    });
  return (
    <Aux>
      <h3>Your Orde</h3>
      <p>A delicious  burger with the folowing ingredientes:</p>
      <ul>
        {ingredientsSummary}
      </ul>

      <p>Continue to checkout?</p>
    </Aux>
  );
};
  



export default orderSummary;