import { useSession, login, users } from "@/models/session";
import router, { Router } from "next/router";
import { Box, Button, Form } from "react-bulma-components";


export default function Login() {

    const session = useSession();

    const user = users[0];

    function loggingin(){
      
        login();
        router.push("/");
    }

    return(

        <>
           <Box style={{ width: 400, margin: 'auto', }}>
      <form>
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Form.Input  type="email" placeholder="John Doe"  />
          </Form.Control>
        </Form.Field>


        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Control>
            <Form.Input type="password" placeholder="***********"  />
          </Form.Control>
        </Form.Field>

        </form>

        <Button.Group align="right">
          <Button color="primary"  onClick={loggingin}>Submit</Button>
        </Button.Group>




        </Box>
          

         </>

    )

    }