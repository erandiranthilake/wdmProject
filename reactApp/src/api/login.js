const axios = require("axios");

const userLogin = (email, password) => {
  return axios
    .post("http://localhost/phpserver/login.php", {
      email: email,
      password: password,
    })
    .then((data) => {
      console.log(data.data);
      return data.data;
    });
};

module.exports = { userLogin };
