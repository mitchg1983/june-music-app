import Layout from "./components/Layout";
import CustomThemeProvider from "./components/CustomThemeProvider";
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import { useEffect, useState } from "react";

// const HomePage = () => {
//   return <Layout>Home Page</Layout>;
// };

function App() {
  const [page, setPage] = useState("homePage");

  return (
    <>
      <CustomThemeProvider>
        <button onClick={() => setPage("homePage")}>Home Page</button>
        <button onClick={() => setPage("cartPage")}>Cart Page</button>

        {page === "homePage" ? <HomePage /> : <CartPage />}
      </CustomThemeProvider>
    </>
  );
}

export default App;
