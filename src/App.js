
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Router/Router';
function App() {

return (
<>
<Header></Header>

<div className='appDiv'>
<Router></Router>
</div>
<Footer></Footer>
</>
)
}



export default App;
