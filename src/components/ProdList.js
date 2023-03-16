import React from "react";
import Link from "next/link";
import { Grid, Image } from "semantic-ui-react";
import styles from "./ProList.module.css";

function ProdList({ prodList }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {prodList.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/detail/[id]`} as={`/detail/${item.id}`}>
                <div className={styles.wrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image_link}
                    alt={item.name}
                    className={styles.img_item}
                  />
                  <strong className={styles.tit_item}>{item.name}</strong>
                  <span className={styles.txt_info}>
                    {item.category} {item.product_type}
                  </span>
                  <strong className={styles.num_price}>${item.price}</strong>
                </div>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ProdList;