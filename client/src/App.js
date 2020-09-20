import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ImageManagement from "./components/ImageManagement";

import PrivateRoute from "./hoc/PrivateRoute";
import UnAuthenticatedRoute from "./hoc/UnAuthenticatedRoute";

import { isAuthenticated } from "./store/actions/authActions";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import SiteManagement from "./components/SiteManagement";
import NotFound from "./components/NotFound";
import AdminLayout from "./containers/AdminLayout";

import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(isAuthenticated());
  }, []);

  if (auth.isLoading) {
    return (
      <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <UnAuthenticatedRoute path="/login" auth={auth} component={Login} />
        {/* <UnAuthenticatedRoute
          path="/register"
          auth={auth}
          component={Register}
        /> */}

        <PrivateRoute path="/dashboard" auth={auth}>
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        </PrivateRoute>

        <PrivateRoute path="/transactions" auth={auth}>
          <AdminLayout>
            <Transactions />
          </AdminLayout>
        </PrivateRoute>

        <PrivateRoute path="/site-management" auth={auth}>
          <AdminLayout>
            <SiteManagement />
          </AdminLayout>
        </PrivateRoute>

        <PrivateRoute path="/image-management" auth={auth}>
          <AdminLayout>
            <ImageManagement />
          </AdminLayout>
        </PrivateRoute>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
