import _ from "lodash";

const grantPermission = (requestedRoles) => {
  const permittedRoles = JSON.parse(localStorage.getItem("userRoles"));
  if (
    requestedRoles.length === 0 &&
    (!permittedRoles || permittedRoles.length === 0)
  ) {
    return true;
  }
  return _.some(requestedRoles, (item) =>
    _.some(permittedRoles, (p) => p === item)
  );
};

export default grantPermission;
