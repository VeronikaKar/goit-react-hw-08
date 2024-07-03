import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

import { refreshThunk } from "../src/redux/auth/operations.js";
import { selectIsRefresh } from "../src/redux/auth/selectors.js";
import { easyLazy } from "../src/helpers/easyLazy.js";

import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const HomePage = easyLazy("HomePage");
const RegisterPage = easyLazy("RegisterPage");
const LoginPage = easyLazy("LoginPage");
const ContactsPage = easyLazy("ContactsPage");

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <div className="flex justify-center items-center h-screen">
        <InfinitySpin
          visible={true}
          width={80}
          color="#EF4444"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-48">
          <InfinitySpin
            visible={true}
            width={80}
            color="#EF4444"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      }
    >
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
