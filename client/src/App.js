import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TasksList from './Components/List/List';
import Nav from './Components/Nav/Nav'
import { Container } from '@mui/material';
import TaskForm from './Components/Form/TaskForm';

function App() {
  return (
    <div className="App">
        <Nav />
        <Container>
      <Routes>
        <Route path='/'  element={<TasksList />}></Route>
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/tasks/:id/edit" element={<TaskForm />} />
      </Routes>
        </Container>

    </div>
  );
}

export default App;
