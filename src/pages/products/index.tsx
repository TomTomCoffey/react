import { useSession } from "@/models/session";
import { useState } from "react";
import { Box, Button, Form} from "react-bulma-components";
import Router from "next/router";



export default function patientData() {

  const session = useSession();

  
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [dateOfService, setDateOfService] = useState("");
  const [amount, setAmount] = useState("");
  const [bill, setBill] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("submitted");
    const data = {
      patientName,
      email,
      address,
      hospitalName,
      dateOfService,
      amount,
      bill,
  };

  console.log(data);

  if(session.user){

    fetch("/api/bills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(data);


  }
   Router.push("/");

  };




return (
  <>
      <Box style={{ width: 400, margin: 'auto', }}>
      <form>
        <Form.Field>
          <Form.Label>Patient Name</Form.Label>
          <Form.Control>
            <Form.Input  type="name" placeholder="John Doe"  onChange={(e) => setPatientName(e.target.value)}/>
          </Form.Control>
        </Form.Field>


        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Form.Input type="email" placeholder="john@doe.com" onChange={(e) => setEmail(e.target.value)} />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Address</Form.Label>
          <Form.Control>
            <Form.Input type="address" placeholder="123 Main St" onChange={(e) => setAddress(e.target.value)} />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Hospital Name</Form.Label>
          <Form.Control>
            <Form.Input type="hospital" placeholder="Hospital Name"  onChange={(e) => setHospitalName(e.target.value)}/>
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Date of Service</Form.Label>
          <Form.Control>
            <Form.Input type="date" placeholder="Date of Service" onChange={(e) => setDateOfService(e.target.value)} />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Amount</Form.Label>
          <Form.Control>
            <Form.Input type="amount" placeholder="Amount"  onChange={(e) => setAmount(e.target.value)} />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Upload Bill</Form.Label>
          <Form.Control>
            <Form.Input type="file" placeholder="Upload Bill"  onChange={(e) => setBill(e.target.value)} />
          </Form.Control>
        </Form.Field>


        <Button.Group align="right">
          <Button color="primary"  onClick={handleSubmit}>Submit</Button>
        </Button.Group>
      </form>
    </Box>
  </>
)


}


