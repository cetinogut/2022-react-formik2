
import './App.css';
import FormikContainer from './components/FormikContainer';
import LoginForm from './pages/LoginForm';
import RegistrationForm from './pages/RegistrationForm';
import EnrollmentForm from './pages/EnrollmentForm';
import { theme, ThemeProvider } from '@chakra-ui/react'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <FormikContainer /> */}
        <LoginForm/>
        {/* <RegistrationForm/> */}
        {/* <EnrollmentForm/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
