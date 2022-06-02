import Layout from "./components/Layout";
import CustomThemeProvider from "./components/CustomThemeProvider";

function App() {
  return (
    <CustomThemeProvider>
      <Layout>Home Page</Layout>;
    </CustomThemeProvider>
  );
}

export default App;
