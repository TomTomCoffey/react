import { addBill, useSession } from "@/models/session";
import { useState } from "react";
import { Box, Button, Form} from "react-bulma-components";
import Router from "next/router";
import type {Bill} from "@/models/bills";
import router from "next/router";



export default function patientData() {



  const session = useSession();

  // if(!session.user){
  //   router.push("/login");
  // }
  


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [dateOfService, setDateOfService] = useState("");
  const [amount, setAmount] = useState("");
  const [filebase64,setFileBase64] = useState<string>("")
 

  console.log(name);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("submitted");
    const data = {
      pName: name,
      email,
      address,
      hospitalName,
      dateOfService,
      amount,
      filebase64,
   
    } as unknown as Bill;

    addBill(data);
    console.log("data");
    console.log(data);


   Router.push("/summary");

  };





function convertFile(files: FileList|null) {
  if (files) {
    const fileRef = files[0] || ""
    const fileType: string= fileRef.type || ""
    console.log("This file upload is of type:",fileType)
    const reader = new FileReader()
    reader.readAsBinaryString(fileRef)
    reader.onload=(ev: any) => {
      // convert it to base64
      setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`)
    }
  }
}

if(!session.user){

  router.push("/login");
  return null;
}


return (

   
  


  <>
      <Box style={{ width: 400, margin: 'auto', }}>
      <form>
        <Form.Field>
          <Form.Label>Patient Name</Form.Label>
          <Form.Control>
            <Form.Input  type="address" placeholder="John Doe"  onChange={(e) => setName(e.target.value)}/>
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
            <Form.Input type="number" placeholder="Amount"  onChange={(e) => setAmount(e.target.value)} />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Upload Bill</Form.Label>
          <Form.Control>
            <Form.Input type="file" name="file" placeholder="Upload Bill" onChange={(e)=> convertFile(e.target.files)}  />
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


