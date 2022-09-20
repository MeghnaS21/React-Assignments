

// import './index.css'


// function App() {
//   return (
//     <>

//    <div><h1>hello</h1></div>
//     </>
//   );
// }

// export default App;


import ContactManager from "./ContactManager/ContactManager"
import ContactSearch from "./ContactManager/ContactSearch"
// import CounterComponent from "./CounterComponent"
// import ReactForms from "./ReactForms"
function App() {
  return (
    <div>
      <ContactSearch></ContactSearch>
      <div className='container-fluid'>
        <div className='row'>
          
          <ContactManager></ContactManager>

        </div>
      </div>
    </div>


  )
}
export default App
