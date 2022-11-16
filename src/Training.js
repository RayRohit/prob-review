import React from "react";

export default function Training() {
  return (
    <>
      <div className="container-fluid my-2">
        <div className="shadow shadow-lg">
          <div className="shadow ">
            <h4 className="p-3 fw-bolder border border-5">Training Period</h4>
          </div>
          <div className="bg-light my-1 p-3">
            <h5 className="fw-bolder shadow p-3 border border-5">Topics Covered :</h5>
            <div className="row p-3 m-1 shadow-lg">
              <div>
                <ol className="fw-bolder" style={{lineHeight:2}}>
                  <li>
                    React Hooks (useState, useEffect, useRef, useReducer,
                    useContext)
                  </li>
                  <li>
                    Data Fetching and Api Manipulation’s using Axios (Axios
                    methods – get ,post, put, delete){" "}
                  </li>
                  <li>
                    React Material-UI (React Mui - Google's Material Design) ,
                    React-Bootstrap
                  </li>
                  <li>
                    JavaScript ES-6 Array Methods(map, filter , reduce, find,
                    findIndex) , Promises, Async and Await ,Event and Event
                    Handling , Error Handling(try ,catch, finally) ,
                    Destructuring , Spread and Rest operator , Bootstrap-5 ,
                    React-Icons , React-Router-Dom , Prop Drilling , State
                    Management in react
                  </li>
                  <li>
                    Redux and Redux Toolkit (State Management Library) ,
                    Alternative(useContext)​
                  </li>
                  <li>
                    {" "}
                    How to use 3rd party dependencies in react application and
                    integrating JavaScript libraries in React Application
                  </li>
                  <li>
                    How to create Desktop Application using React and electron
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
