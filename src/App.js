import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './component/Routes/index';
import MainLayout from './component/MainLayout/Layout';
import  LoginReducer  from "./service/authService";

function PrivateRoutes({ children }) {
  const isLoggedIn = LoginReducer();
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <Router>
        <div className="App">
            <Routes>
                { publicRoutes.map((route, index) => {
                  const Page = route.component;
                   return <Route key={index} path={route.path} element={
                      <Page />
                   } /> 
                })
                }
                  { privateRoutes.map((route, index) => {
                    const Layout = MainLayout;
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={
                      <PrivateRoutes>
                      <Layout>
                        <Page />
                      </Layout>
                      </PrivateRoutes>  
                    } />
                  })
                  }
            </Routes>
        </div>
    </Router>
  );
};

export default App;