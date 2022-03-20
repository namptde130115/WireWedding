import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ components, roles, isAuthenticated }) => {
  const user = { role: 'customer' };
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;

  if (isAuthenticated && userHasRequiredRole) {
    return components;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <div>Not Found</div>;
  }

  return <Navigate to='/home' />;
};
