const axios = require('axios');

const registerManager = (fname, lname, mname, phone, email, password, ssn) => {
    axios.post(
        'http://localhost/phpserver/register_manager.php',{
          data: {
            email: email,
            password: password,
            fname: fname,
            lname: lname,
            mname: mname,
            ssn: ssn,
            phone: phone
          }
        }).then((data) => {
            console.log(data); 
            return data;
        }).catch((e) => console.log(e));
};

const registerService = (name, rate) => {
    axios.post(
        'http://localhost/phpserver/register_services.php',{
          data: {
            name: name,
            rate: rate
          }
        }).then((data) => {
            console.log(data); 
            return data;
        }).catch((e) => console.log(e));
};

const registerEquipment = (eqt) => {
    axios.post(
        'http://localhost/phpserver/register_equipment.php',{
          data: {
              eqt: eqt
          }
        }).then((data) => {
            console.log(data); 
            return data;
        }).catch((e) => console.log(e));
};

const registerEmployee = (fname, lname, mname, phone, email, addr1, addr2, city, state, postal) => {
    axios.post(
        'http://localhost/phpserver/register_manager.php',{
            email: email,
            state: state,
            fname: fname,
            lname: lname,
            mname: mname,
            posstal: postal,
            phone: phone,
            city: city,
            addr1: addr1,
            addr2: addr2
        }).then((data) => {
            console.log(data); 
            return data;
        }).catch((e) => console.log(e));
};

const registerCustomer = (fname, lname, mname, phone, email, password, ssn, mssn) => {
    axios.post(
        'http://localhost/phpserver/register_customer.php',{
            email: email,
            password: password,
            fname: fname,
            lname: lname,
            mname: mname,
            ssn: ssn,
            phone: phone,
            mssn: mssn
        }).then((data) => {
            console.log(data); 
            return data;
        }).catch((e) => console.log(e));
};

module.exports = {
    registerCustomer,
    registerEmployee,
    registerEquipment,
    registerService,
    registerManager
}