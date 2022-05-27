import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/WelcomeComponent';
import BookList from './components/BookList';
import romance from './data/romance.json'


function App() {
  return (
    <>
    <MyNav>
    </MyNav>
    <Welcome>

    </Welcome>
    <BookList books={romance}/>

    
    
 
    <MyFooter>

    </MyFooter>
    
    </>
  );
}

export default App;

