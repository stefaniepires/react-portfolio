import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav/>
    <div className="App">
      
      <Header/>
      <header className="App-header">
        <ButtonGroup>
        <Button 
        endIcon={<SaveIcon/>}
        variant="contained" 
        size="large"
        style= {{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        }}>
          Save
        </Button>
        <Button 
        endIcon={<DeleteIcon/>}
        variant="contained" 
        size="large"
        style= {{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        }}>
          Delete 
        </Button>
        </ButtonGroup>

      </header>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
