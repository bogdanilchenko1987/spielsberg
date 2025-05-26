import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home";

import Sizes from "./pages/Sizes";
import Gallery from "./pages/Gallery";
import Style from "./pages/Style";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="style" element={<Style />} />
          <Route path="sizes" element={<Sizes />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
}
