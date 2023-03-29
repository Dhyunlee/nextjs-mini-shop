import { Button, Form } from "semantic-ui-react";
import {useRouter} from 'next/router';
import axios from 'axios';

export default function Login() {
  const router = useRouter();
  const onHandleLogin = () => {
    axios.post('/api/login').then(res => {
      if(res.status === 200) {
        // 로그인 성공
        router.push('/admin');
      }
    })
  }

  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue" onClick={onHandleLogin}>로그인</Button>
      </Form>
    </div>
  );
}
