import logo from './logo.svg';
import './App.css';
import HTTPRequest from './components/HTTPRequest';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className="App">
      <div>
        {/* <HTTPRequest/> */}
        {/* <HTTPPost/> */}
        <HTTPHooks/>
      </div>
    </div>
  );
}

export default App;
