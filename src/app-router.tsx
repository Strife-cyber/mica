import Landing from './pages/landing';
import Header from './components/header';
import LoginPage from './pages/auth/log-in';
import SignUpPage from './pages/auth/sign-up';
import CustomersPage from './pages/entities/customer-page';
import SuppliersPage from './pages/entities/supplier-page';
import InventoryPage from './pages/entities/inventory-page';
import { ThemeProvider } from './components/theme-provider';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
