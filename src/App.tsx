import './App.css'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { TodosPage } from './pages/todo/TodosPage';
import { AboutPage } from './pages/about/AboutPage';

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={'todos'} element={<TodosPage />} />
      <Route path={'about'} element={<AboutPage />}/>
    </Routes>

  )
}

export default App
