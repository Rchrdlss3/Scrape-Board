import './App.css';
import { createContext,useState,useEffect } from 'react';
import { Routes, Route } from 'react-router';
import {HashRouter} from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent'
import HomePage from './pages/HomePage';
import { appStyle } from './styles/commonStyles';
import { getTheme } from './helpers/themeFunctions';
import SearchPage from './pages/SearchPage';

export const ThemeContext = createContext();

function App() {
  const [theme,setTheme] = useState(getTheme());
  console.log(theme)
  return (
    <div style = {appStyle(theme)}>
      <HashRouter>
        <ThemeContext.Provider value = {[theme,setTheme]} >
        <NavigationComponent />
        <Routes>
          <Route path = "/" element = {<HomePage />}> </Route>
          <Route path = "/search" element = {<SearchPage />}></Route>
        </Routes>
        </ThemeContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
