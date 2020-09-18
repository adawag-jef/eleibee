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
import Transactions from "./components/Transactions";
import AdminLayout from "./components/AdminLayout";
import SiteManagement from "./components/SiteManagement";

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
        <UnAuthenticatedRoute
          path="/register"
          auth={auth}
          component={Register}
        />
        <AdminLayout>
          <PrivateRoute path="/admin" auth={auth} component={Transactions} />
          <PrivateRoute
            path="/site-management"
            auth={auth}
            component={SiteManagement}
          />
          <PrivateRoute
            path="/image-management"
            auth={auth}
            component={ImageManagement}
          />
        </AdminLayout>
      </Switch>
    </Router>
  );
}

export default App;
