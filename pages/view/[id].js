import axios from "axios";
import Head from "next/head";
import ProdItem from "../../src/components/ProdItem";

function ProdDetail({ item }) {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          <ProdItem item={item} />
        </>
      )}
    </>
  );
}

export default ProdDetail;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
}
