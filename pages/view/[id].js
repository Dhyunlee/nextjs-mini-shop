import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import ProdItem from "../../src/components/ProdItem";

function ProdDetail() {
  const [item, setItem] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getDetail = useCallback(async () => {
    await axios.get(`${API_URL}`).then(res => setItem(res.data))
  }, [API_URL])

  useEffect(() => {
    if(id && id > 0) {
      getDetail();
    }
  }, [id, getDetail]);

  return (
    item && <ProdItem item={item}/>
  );
}

export default ProdDetail;
