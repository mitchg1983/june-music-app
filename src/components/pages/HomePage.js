import Layout from "../Layout";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { fetchProductData } from "../../dataFetching";
import ProductDisplay from "../../components/productDisplay";

const HomePage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // first;
    fetchProductData()
      .then((data) => setProductData(data))
      .catch((error) => console.log("error: ", error));

    return () => {
      //   second;
    };
  }, []);

  return (
    <Layout>
      <Box
        maxWidth={1}
        bgcolor="lightblue"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {" "}
        {productData.map((product) => (
          <Box m={4} key={product.title} width="375px" maxWidth="100%">
            <ProductDisplay product={product} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default HomePage;
