
import {
  Route
} from "react-router-dom";
import grantPermission from '../grantPermission';
import Unauthorized from './Unauthorized';

const RoleBasedRouting = ({
    component: Component, roles, ...rest
  }) => {
    return (
      <>
        { grantPermission(roles) && (
        <Route
          {...rest}
          render={(props) => (
            <>
              <Component {...props} />
            </>
          )}
        />
        )}
        {
          !grantPermission(roles) && (
            <Route
              render={() => (
                <>
                  <Unauthorized />
                </>
              )}
            />
          )
        }
      </>
    );
  };

  
export default RoleBasedRouting;
