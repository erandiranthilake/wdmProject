const axios = require('axios');

const equipmentService = () => {
  console.log("Reaching herre!!")
    return axios.get('http://localhost/phpserver/equipment_service.php').then((data) => {
            console.log(data.data); 
            return data.data;
        }).catch((e) => console.log(e));
};

const deliveryPickup = (orderid, comment, session) => {
    axios.post(
        'http://localhost/phpserver/delivery_pickup.php',{
          data: {
            orderid: orderid,
            comment: comment,
            session: session
          }
        }).then((data) => {
            console.log(data); 
            return data;
        }).catch((e) => console.log(e));
};

const customerEnquiry = (query, session) => {
    axios.post(
        'http://localhost/phpserver/customer_enquiry.php',{
          data: {
            query: query,
            session: session
          }
        }).then((data) => {
            console.log(data); 
            return data;
        }).catch((e) => console.log(e));
};

const customerDeliveryPickup = (session) => {
    axios.post('http://localhost/phpserver/customer_delivery_pickup.php', {session: 1}).then((data) => {
            console.log(data.data); 
            return data;
        }).catch((e) => console.log(e));
};


const orderService = () => {
  console.log("Reaching herre!!")
    return axios.get('http://localhost/phpserver/order_service.php').then((data) => {
            console.log(data.data); 
            return data.data;
        }).catch((e) => console.log(e));
};

module.exports = {
    customerDeliveryPickup,
    customerEnquiry,
    deliveryPickup,
    equipmentService,
    orderService
}