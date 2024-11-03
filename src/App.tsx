import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout';
import Login from "./pages/Login";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signup from "./pages/Signup";

const theme = createTheme({
  palette: {
    primary: {
      main: '#342B38',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
