import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';
import Navbar from './components/Navbar';
import ViewContact from './components/ViewContact';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to={'/contact/list'} />} />
        <Route path='/contact/list' element={<ContactList />} />
        <Route path='/contact/add' element={<AddContact />} />
        <Route path='/contact/view/:contactId' element={<ViewContact />} />
        <Route path='/contact/edit/:contactId' element={<EditContact />} />
      </Routes>
    </Router>
  );
}

export default App;
