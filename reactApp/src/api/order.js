const axios = require('axios');

const order = (c_id, weight, rate, service, type, comments, e_id) => {
    axios.post(
        'http://localhost/phpserver/returning_customer.php',{
            c_id: c_id,
            weight: weight,
            rate: rate,
            service: service,
            type: type,
            comments: comments,
            e_id: e_id
        }).then((data) => {
            console.log(data); 
            return data;
        })
}

module.exports = {order}