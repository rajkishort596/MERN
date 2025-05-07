import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cat, { catLoader } from "./components/Cat/Cat";
import RootLayout from "./components/RootLayout";
import CatDetails, { catDetailLoader } from "./components/Cat/CatDetails";
import CatLayout from "./components/CatLayout";
import NotFound from "./NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cats" element={<CatLayout />}>
          <Route index element={<Cat />} loader={catLoader} />
          <Route
            path=":breedId"
            element={<CatDetails />}
            loader={catDetailLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
