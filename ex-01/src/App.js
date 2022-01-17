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
        </div>
        <div className='main-aside'>

        </div>
      </body>
    </div>
  );
}

export default App;
