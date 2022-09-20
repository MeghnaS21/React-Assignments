import logo from './logo.svg';
import './App.css';

function App() {

//----------------------------------CONDITIONAL RENDERING
  const name='Meghna Srivastava';
  const isloggedin=true;

  
  return (
    <div className="App">
      <header className="App-header">
        {/*--------------------------------- PRACTICE PART----------------- */}

        <p>
          {!isloggedin && <p>Hello World</p>}
          {isloggedin && <p>Hello {name}</p>}
         </p>

         {/* //---------------------------------------------------- */}

         <p>
          Hello { isloggedin ? name : 'World'}
         </p>

          {/*------------------ rendering date=------ */}

          <p>
            {new Date().toDateString()}
          </p>

       {/* //------------------------ VIA VARIABLE=------ */}
        

         {/*-----------------VIA STRING------ */}

        <p>
          Hello Meghna
        </p>
      </header>
    </div>
  );
}

export default App;
