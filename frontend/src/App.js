import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import ProductInfoScreen from "./screens/ProductInfoScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <Router>
      <div className="startColor">
        <Header />
        <Container>
          <main>
            <Routes>
              <Route path="/" element={<HomeScreen />}></Route>
              <Route
                path="/product/:id"
                element={<ProductInfoScreen />}
              ></Route>
              <Route path="/cart/:id" element={<CartScreen />}></Route>
              <Route path="/cart" element={<CartScreen />}></Route>
            </Routes>
          </main>
        </Container>
      </div>
    </Router>
  );
}

export default App;
