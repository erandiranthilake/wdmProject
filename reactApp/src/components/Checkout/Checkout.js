import React from "react";

import './Checkout.css';

const Checkout = () => {
  return (
    <React.Fragment>
      <div class="orderForm">
    <div class="heading">
      <h1>Enter Checkout Information</h1>
    </div>
    <form class="inputs">
      <input type="number" name="orderId" value="" placeholder="Order Id"/>
      <input type="number" name="employeeId" value="" placeholder="Employee Id"/>
      <input type="number" name="amount" value="" placeholder="Amount"/>
      <input type="text" name="paymentMethod" value="" placeholder="Payment Method"/>
      <button type="button" name="button" class="checkout" onclick="checkout()">Submit</button>
    </form>
  </div>

  <div class="modal">
    <div class="heading">
      <h1>Registration Summary</h1>
    </div>

    <div class="details">
      <p>Order Id : <span id="orderId"></span> </p>
      <p>Amount : <span id="amount"></span> </p>

      <button type="button" name="button" onclick="modal()" class="btn__close"> Close</button>
    </div>
  </div>
    </React.Fragment>
  );
}

export default Checkout;
