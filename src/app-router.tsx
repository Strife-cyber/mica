import Landing from './pages/landing';
import LoginPage from './pages/auth/log-in';
import SignUpPage from './pages/auth/sign-up';
import EntitiesPage from './pages/entities/entities-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/entities" element={<EntitiesPage />} />
      </Routes>
    </Router>
  );
}
