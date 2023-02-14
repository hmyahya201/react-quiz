import React from 'react';
import '../Styles/App.css';
import Layout from './Layout';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import AuthProvider from '../contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
// import PrivateOutlate from './PrivateOutlate';
import PublicRoute from './PublicRoute';
function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>}/>
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>}/>


          {/* <Route path="/*" elenent={<PrivateOutlate/>}>
            <Route path="quiz" element={<Quiz/>}/>
            <Route path="result" element={<Result/>}/>
          </Route> */}

          <Route path='/quiz/:id' element={<PrivateRoute><Quiz/></PrivateRoute>}/>
          <Route path='/result' element={<PrivateRoute><Result /></PrivateRoute>}/>

        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
