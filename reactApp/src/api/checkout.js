const axios = require('axios');

const checkout = (order, payment, e_id, amount) => {
    axios.post(
        'http://localhost/phpserver/checkout.php',{
            order: 4,
            amount: 50,
            e_id: 1, //Emp ID of current logged in employee
            payment: "payment"
        }).then((data) => {
            console.log(data.data); 
            return data.data;
        })
}

checkout();

module.exports = {checkout}