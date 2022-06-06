import Layout from "./components/Layout";
import CustomThemeProvider from "./components/CustomThemeProvider";
import HomePage from "./components/pages/HomePage"

// const HomePage = () => {
//   return <Layout>Home Page</Layout>;
// };

function App() {
  return (
    <>
      <CustomThemeProvider>
        <HomePage />
      </CustomThemeProvider>
    </>
  );
}

export default App;
