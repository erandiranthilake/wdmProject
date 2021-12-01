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
import EmployerPortal from "./components/Portal/EmployerPortal";

import Logout from "./components/Logout";
import EmpRegistration from "./components/Register/EmpRegistration";
import EquipRegistration from "./components/Equipment/EquipRegistration";
import UpdateEquipment from "./components/Equipment/UpdateEquipment";

import ServiceRegistration from "./components/Services/ServiceRegistration";
import UpdateService from "./components/Services/UpdateService";
import DeleteService from "./components/Services/DeleteService";
import UpdateServiceUser from "./components/ServiceUser/UpdateServiceUser";

import SuperadminPortal from "./components/Portal/SuperadminPortal";
import ManagerRegistration from "./components/Register/ManagerRegistration";
import CustomerPortal from "./components/Portal/CustomerPortal";
import Inquiries from "./components/Register/Inquiries";
import Orders from "./components/Order/Orders";
import Order from "./components/Order/Order";
import UpdateOrder from "./components/Order/UpdateOrder";
import Delivery from "./components/Delivery/Delivery";
import Checkout from "./components/Order/Checkout";
import DeleteOrder from "./components/Order/DeleteOrder";

import Equipment from "./components/Equipment/Equipment";
import DeleteEquipment from "./components/Equipment/DeleteEquipment";

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
        <RoleBasedRouting path="/EmployerPortal" roles={[ROLES.ROLE_USER]}>
          <EmployerPortal />
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
        <Route path="/updateEquipment/:id" component={UpdateEquipment} />
        <Route path="/updateService/:id" component={UpdateService} />
        <Route path="/updateServiceUser/:id" component={UpdateServiceUser} />

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
        <Route path="/checkoutOrder/:id" component={Checkout} />
        <Route path="/deleteOrder/:id" component={DeleteOrder} />
        <Route path="/deleteEquipment/:id" component={DeleteEquipment} />
        <Route path="/deleteService/:id" component={DeleteService} />

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
