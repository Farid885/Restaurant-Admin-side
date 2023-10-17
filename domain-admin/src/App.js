import {} from "@ant-design/icons";
import React, { useEffect } from "react";
import MyLayout from "./components/layout/MyLayout";
import Logingrouting from "./components/layout/Logingrouting";
import Routing from "./components/layout/Routing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginlayout from "./components/layout/Loginlayout";
import { connect } from "react-redux";
import Loader from "./components/elements/Loader";
import { useDispatch,  } from "react-redux";
import { useReducer } from "./components/redux/reducers";
import { getUserData } from "./components/redux/actions";

function App(props) {
  const dispatch = useDispatch();
 

  let { isLoading , isLoggedIn , getUserData } = props

  
  
  useEffect(()=>{
  dispatch((useReducer))
  },[])


  return (
    <div className="App">
      <BrowserRouter>
        {isLoading? <Loader/> : ''}
        {isLoggedIn ? (
          <MyLayout>
            <Routing />
          </MyLayout>
        ) : (
          <Loginlayout>
            <Logingrouting/>
          </Loginlayout>
        )}
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isLoggedIn: state.user.isLoggedIn
})


export default connect(mapStateToProps , {getUserData})(App)
