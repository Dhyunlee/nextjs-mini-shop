import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import ProdItem from "../../src/components/ProdItem";

function ProdDetail({ item, mode }) {
  const router = useRouter();
  console.log(router.isFallback);

  if (router.isFallback) {
    return (
      <div style={{ padding: 100 }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          {mode} 환경입니다.
          <ProdItem item={item} />
        </>
      )}
    </>
  );
}

export default ProdDetail;

export async function getStaticPaths() {
  const API_URL = process.env.API_URL;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    // paths: [{ params: { id: "846" } }, { params: { id: "845" } }, { params: { id: "844" } }],
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      mode: process.env.MODE_NAME,
    },
  };
}
