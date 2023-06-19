import { Bill } from "./bills";




const session = {
    user: null as User | null,
}

export function useSession() {
    return session;
}



export interface User{
    id: number,
    name: string,
    email: string,
    password: string,
    bills: Bill[],

}

export function login(user: User) {
    session.user = users[0];

    }

export function logout() {
    session.user = null;
}

const users: User[] = [
    {
       id: 1,
        name: "John Doe",
        email: "John@doe.com",
        password: "1234321",
        bills: []
       
    }

]




  export function addBill(bill: Bill) {
    session.user!.bills.push(bill);
  }

    export function deleteBill(bill: Bill) {
    const index = session.user!.bills.indexOf(bill);
    session.user!.bills.splice(index, 1);
    }









