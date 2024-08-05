import "./App.css";
import { Provider } from "react-redux";
import { getStore } from "./redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";
import Header from "./components/Header";

export const store = getStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </Provider>
  );
}

export default App;
