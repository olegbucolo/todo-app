import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { TodosPage } from './pages/todo/TodosPage';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={"todos"} element={<TodosPage />} />
    </Routes>

  )
}

export default App
