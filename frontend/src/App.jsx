import { useState } from 'react';
import FileUpload from './components/FileUpload';
import FileDownload from './components/FileDownload';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import FileAvailable from './components/FileAvailable';
import FileDelete from './components/FileDelete';
const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  return (
    <div>
      <div>
        {activeComponent === 'home' && <Home onSelect={setActiveComponent}/>}
        {activeComponent === 'upload' && <FileUpload  onBack={() => setActiveComponent('home')}/>}
        {activeComponent === 'download' && <FileDownload  onBack={() => setActiveComponent('home')}/>}
        {activeComponent === 'delete' && <FileDelete  onBack={() => setActiveComponent('home')}/>}
        {activeComponent === 'available' && <FileAvailable  onBack={() => setActiveComponent('home')}/>}
      </div>
    </div>
  );
};

export default App;
