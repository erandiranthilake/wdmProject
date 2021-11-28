import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Chatbot from "./components/Chatbot";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RoleBasedRouting from "./components/RoleBasedRouting";
import ROLES from "./roles";
import ManagerPortal from "./components/Portal/ManagerPortal";
import Logout from "./components/Logout";
import EmpRegistration from "./components/Register/EmpRegistration";
import EquipRegistration from "./components/Register/EquipRegistration";
import ServiceRegistration from "./components/Register/ServiceRegistration";
import SuperadminPortal from "./components/Portal/SuperadminPortal";
import ManagerRegistration from "./components/Register/ManagerRegistration";
import CustomerPortal from "./components/Portal/CustomerPortal";
import Inquiries from "./components/Register/Inquiries";
import Orders from "./components/Order/Orders";
import Order from "./components/Order/Order";
import UpdateOrder from "./components/Order/UpdateOrder";
import Delivery from "./components/Delivery/Delivery";
import Checkout from "./components/Checkout/Checkout";
import Equipment from "./components/Equipment/Equipment";
import Register from "./components/Register/Register";

function App() {
  createUsers();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <RoleBasedRouting path="/ManagerPortal" roles={[ROLES.ROLE_MANAGER]}>
          <ManagerPortal />
        </RoleBasedRouting>
        <RoleBasedRouting
          path="/SuperadminPortal"
          roles={[ROLES.ROLE_SUPER_ADMIN]}
        >
          <SuperadminPortal />
        </RoleBasedRouting>
        <RoleBasedRouting
          path="/ManagerRegistration"
          roles={[ROLES.ROLE_SUPER_ADMIN]}
        >
          <ManagerRegistration />
        </RoleBasedRouting>
        <RoleBasedRouting path="/CustomerPortal" roles={[ROLES.ROLE_CUSTOMER]}>
          <CustomerPortal />
        </RoleBasedRouting>
        <RoleBasedRouting path="/Inquiries" roles={[ROLES.ROLE_CUSTOMER]}>
          <Inquiries />
        </RoleBasedRouting>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/updateOrder/:id" component={UpdateOrder} />

        <Route path="/chatbot">
          <Chatbot />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/delivery">
          <Delivery />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/equipment">
          <Equipment />
        </Route>
        {/* <Route path="/contact">
          <Contact />
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>
        <RoleBasedRouting
          path="/empregistration"
          roles={[ROLES.ROLE_MANAGER, ROLES.ROLE_SUPER_ADMIN]}
        >
          <EmpRegistration />
        </RoleBasedRouting>
        <RoleBasedRouting
          path="/equipregistration"
          roles={[ROLES.ROLE_MANAGER, ROLES.ROLE_SUPER_ADMIN]}
        >
          <EquipRegistration />
        </RoleBasedRouting>
        <RoleBasedRouting
          path="/serviceregistration"
          roles={[ROLES.ROLE_MANAGER, ROLES.ROLE_SUPER_ADMIN]}
        >
          <ServiceRegistration />
        </RoleBasedRouting>
        <Route>
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

const createUsers = () => {
  const users = [
    {
      email: "manager@email.com",
      password: "1234@wdm",
      role: ROLES.ROLE_MANAGER,
    },
    {
      email: "user@email.com",
      password: "1234@wdm",
      role: ROLES.ROLE_USER,
    },
    {
      email: "superadmin@email.com",
      password: "1234@wdm",
      role: ROLES.ROLE_SUPER_ADMIN,
    },
    {
      email: "customer@email.com",
      password: "1234@wdm",
      role: ROLES.ROLE_CUSTOMER,
    },
  ];

  // localStorage.setItem("users", JSON.stringify(users));
};

export default App;
