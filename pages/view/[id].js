import { useRouter } from "next/dist/client/router";

function Detail() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  return (
    <div>
      <h1>Detail({id}) Page</h1>
      <p>This is Detail({id}) page.</p>
    </div>
  );
}

export default Detail;
