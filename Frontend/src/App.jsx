import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import NotFound from './components/NotFound';
import Info from './components/Info';
import  {BrowserRouter,Link,Route,Routes} from 'react-router-dom'

function App() {


  return (  
      <div style={{backgroundColor:'lightgray'}}>
      <BrowserRouter>
              {/* set link */}
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about-us'>About Us</Link></li>
                    <li><Link to='/contact-us'>Contact</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
        </ul>
              
        {/* define components */}
        <Routes>
              <Route path="*" element={<NotFound/>} />
              <Route exact path="/" element={<Home/>} />
              <Route path="/about-us" element={<About />}>
                  <Route path="info" element={<Info/>} />
              </Route>
              <Route path="/contact-us" element={<Contact/>} />
              <Route path="/menu" element={<Menu/>} />
        </Routes>
          </BrowserRouter>
      </div>

  )
}

export default App
