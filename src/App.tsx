import './App.css'
import Cards from './components/cards/Cards'
import Header from './components/header/Header'

function App() {

  return (
    <>
    <div className='poligon'></div>
      <Header />
     <main>
        {
          <Cards cards={['סטודנטים' , 'מגוייסים למילואים' , 'טיפול אישי וזוגי' , 'קרן הסיוע']}  />
        }
     </main>
     <footer>

     </footer>
    </>
  )
}

export default App
