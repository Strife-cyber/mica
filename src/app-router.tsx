import Landing from './pages/landing';
import Header from './components/header';
import LoginPage from './pages/auth/log-in';
import SignUpPage from './pages/auth/sign-up';
import SalesPage from './pages/transactions/sales-page';
import CustomersPage from './pages/entities/customer-page';
import SuppliersPage from './pages/entities/supplier-page';
import InventoryPage from './pages/entities/inventory-page';
import { ThemeProvider } from './components/theme-provider';
import PurchasesPage from './pages/transactions/purchase-page';
import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  return (
    <ThemeProvider>
      <Header onNavigate={(path) => navigate(path)} />
      <Outlet />
    </ThemeProvider>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route element={<Layout />}>
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/purchases" element={<PurchasesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
