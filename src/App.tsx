import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { DashboardPage, MainPage, NotFoundPage, VotePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
