import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='app-header-div'>

          <div>
            <h1>UUTISET TÄNÄÄN</h1>
          </div>
          <div>
            <h3>Uutiset</h3>
          </div>
          <div>
            <h3>Lehdet</h3>
          </div>
        </div>
        <div className='app-header-div'>

          <div>
            <h3 className='tilaus'>Tilaa</h3>
          </div>
          <div>
            <h3>Kirjaudu</h3>
          </div>
          <div>
            <h3>Hae</h3>
          </div>
          <div>
            <h3>Valikko</h3>
          </div>
          </div>

      </header>

      <body>
        <div className='sec-head'>
          <ul className='sec-head-ul'>
            <li><a href='#etusivu'>Etusivu</a></li>
            <li><a href='#politiikka'>Politiikka</a></li>
            <li><a href='#uusimmat'>Uusimmat</a></li>
            <li><a href='#Kulttuuri'>Kulttuuri</a></li>
          </ul>
        </div>

        <div className='main-uutiset'>
          <div>
            <p>Uutinen numero 1</p>
          </div>
          <div>
            <p>Uutinen numero 2</p>
          </div>
          <div>
            <p>Uutinen numero 3</p>
          </div>
        </div>

        <div className = 'main-section'>
          <div className='main-item one'>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit 
              voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
              et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <img src='https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'></img>
          </div>
          <div className='main-item'>2
            <ol className='ordered-list'>
              <li>Uutinen numero 1</li>
              <li>Uutinen numero 2</li>
              <li>Uutinen numero 3</li>
              <li>Uutinen numero 4</li>
            </ol>
          </div>          
        </div>

      </body>
    </div>
  );
}

export default App;
