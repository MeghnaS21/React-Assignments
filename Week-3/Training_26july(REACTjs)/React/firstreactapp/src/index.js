import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from './Header';
import { Body } from './Header';
import { Form } from './Header';
import { Image } from './Header';
import { List } from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <Header></Header>
    <Body></Body>
    <Form></Form>
    <Image></Image>
    <List></List>
    </>
);


// export default CompleteApp






// import ContentPage from "../task/ContentPage";
//import WelcomePage from "./WelcomePage";
// import GreetComponent from './PropsDemo/GreetComponent';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
// <>
// <GreetComponent username='john' email="john@gmail.com"></GreetComponent>
// <GreetComponent username='peter' email="john@gmail.com"></GreetComponent>

// </>
// );

// import ContentPage from "./ContentPage";
// import WelcomePage from "./WelcomePage";

// function CompleteApp(){
//     return(
//         <>
//         <WelcomePage></WelcomePage>
//         <ContentPage></ContentPage>
//         </>
//     )
// }
// export default CompleteApp




// const root = ReactDOM.createRoot(document.getElementById('root'));
// const tech="React JS"
// const lnk='https://www.google.com' 
// //above=jsx attribute
// root.render(
//   <div>
//   <h1>Hello React</h1>
//   <p>paragraph</p>
//   <a href={lnk}>link</a>
//   </div>

//   //jsx rules
//   //use curly braces if you are using js expressions
// );







































// Component Creation ----->
//  function componentName(Note- in CamelCase)
//  { return},
//   render the same component inside 
//  root.render. 

//  2 ways of rendering------->
//      1st-<component></component> or 
//      2nd-</component>.

//  BEFORE RENDERING----->
//   User (export default component name) in component
//   file  & 
//  use (import component from file) before
//   rendering in the entry file(index.js).
//   Use Empty fragments<></> OR <div></div>

//   For multi-component export/import/render ----> 
//  (Use export before function keyword in component
//   name in component file)/
//   (For import use curly braces({Component} 
//  in index.js file)/(for 