import './App.css';
import {configureNotification} from './Services/FirebaseService'
function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <button onClick={configureNotification}>Configure Notifications</button>
    </div>
  );
}

export default App;
