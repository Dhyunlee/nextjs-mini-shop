import { Icon } from "semantic-ui-react";

function Error({ statusCode }) {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <p>
        {statusCode && (
          <>
            <Icon name="warning circle" color="red" />
            {statusCode}: 내부 서버 오류
          </>
        )}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
