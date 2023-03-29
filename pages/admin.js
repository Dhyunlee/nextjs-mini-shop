import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button } from "semantic-ui-react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const checkoutLogin = () => {
    axios.get("api/isLogin").then((res) => {
      if (res.status === 200 && res.data.isLoginStatus) {
        setIsLogin(true);
        // 로그인
      } else {
        // 로그인 안됨
        router.push("/login");
      }
    });
  };
  useEffect(() => {
    checkoutLogin();
  }, []);

  const onHandleLogOut = () => {
    axios.post("/api/logout").then((res) => {
      if (res.status === 200) {
        // 로그아웃 성공
        router.push("/");
      }
    });
  };

  return (
    <div>
      <span style={{ fontSize: 24 }}>어드민</span>
      {isLogin && (
        <Button color="blue" onClick={onHandleLogOut}>
          로그아웃
        </Button>
      )}
    </div>
  );
}
