import React, { useEffect } from 'react';
import { Route, BrowserRouter, Routes, useLocation, Navigate } from 'react-router-dom';
import AdminLogin from './admin/pages/login/AdminLogin';
import Register from './users/pages/register/register'
import ForgotPassword from './admin/pages/ForgotPassword/ForgotPassword';
import ResetAdminPassword from './admin/pages/resetPassword/ResetPassword';
import PasswordSuccess from './admin/pages/success/PasswordSuccess';
import AdminDashboard from './admin/pages/dashboard/Admindashboard';
import DashboardIndex from './admin/pages/dashboard-index/Index';
import Customer from './admin/pages/customer';
import Payment from './admin/pages/payment/payment';
import Transaction from './admin/pages/transaction';
import Profile from './admin/pages/profile/profile';
import { ModalProvider } from './hooks/modal-context';
import UserLogin from './users/pages/login/UserLogin';
import { useSelector } from 'react-redux';
import { CombinedState } from 'redux';
import { combinedState } from './redux/reducers';
import { useDispatch } from 'react-redux';
import { stopLoading } from './redux/actions-creators/appSatusActions';
import UserDashboard from './users/pages/dashboard/Userdashboard';
import UserForgotPassword from './users/pages/ForgotPassword/ForgotPassword'
import UserResetPassword from './users/pages/ForgotPassword/ForgotPassword'
import UserPasswordSuccess from './users/pages/success/PasswordSuccess'
function AppRoutes() {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state:CombinedState<combinedState>) =>state.auth.isAuthenticated);

  console.log("authcated",isAuthenticated)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const ProtectedRoute = ({ element}:any) => {
    dispatch(stopLoading())
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  return (
    <ModalProvider>
      <Routes>

        <Route index element={<UserLogin />} path="/" />
        <Route index element={<Register />} path="user/register" />
        <Route path="user" element={<UserLogin />} />
        <Route path="user/recover-password" element={<UserForgotPassword />} />
        <Route path="user/reset-password" element={<UserResetPassword />} />
        <Route path="user/reset-success" element={<UserPasswordSuccess />} />
        <Route
          path="user/dashboard"
          element={<ProtectedRoute element={<UserDashboard />} />}
        >
          <Route index element={<DashboardIndex />} />
          <Route path="customer" element={<Customer />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<Payment />} />
          <Route path="transactions" element={<Transaction />} />
        </Route>
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/recover-password" element={<ForgotPassword />} />
        <Route path="admin/reset-password" element={<ResetAdminPassword />} />
        <Route path="admin/reset-success" element={<PasswordSuccess />} />
        <Route
          path="admin/dashboard"
          element={<ProtectedRoute element={<AdminDashboard />} />}
        >
          <Route index element={<DashboardIndex />} />
          <Route path="customer" element={<Customer />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<Payment />} />
          <Route path="transactions" element={<Transaction />} />
        </Route>
      </Routes>
    </ModalProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;


