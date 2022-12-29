import Image from "next/image";
import Link from "next/link";
import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

function Top() {
  return (
    <div>
    <div style={{ display: "flex", paddingTop: 20 }}>
      <div style={{ flex: "100px 0 0" }}>
        <Link href={'/'}>
        <Image
          src="/images/angma.png"
          alt="logo"
          width="80"
          height="80"
          style={{ display: "block" }}
        />
        </Link>
      </div>
      <Header as="h1">Website</Header>
    </div>
    <Gnb />
  </div>
  );
}

export default Top;
