import './App.css';
import { Routes , Route , Navigate } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Add from './component/Dashboard/Add';
import Edit from './component/Dashboard/Edit';
import Upload from './component/Dashboard/Upload';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={'/employees/list'} />} />
      <Route path={'/employees/list'} element={<Dashboard />} />
      <Route path={'/employees/add'} element={<Add />} />
      <Route path={'/employees/upload'} element={<Upload>
        <button>Upload Files</button>
      </Upload>} />
      {/* <Route path={'/employees/view/:employeesId'} element={<View/>} /> */}
      <Route path={'/employees/edit/:employeesId'} element={<Edit />} />
    </Routes>
    
   
  );
}

export default App;
