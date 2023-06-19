import { Bill } from "./bills";




const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "success" | "danger" | "warning" | "info",
    }[],
    
})

export function useSession() {
    return session;
}


function reactive(arg0: { user: any; isLoading: boolean; messages: { msg: string; type: "success" | "danger" | "warning" | "info"; }[]; }) {
    throw new Error("Function not implemented.");
}

export interface User{
    id: number,
    name: string,
    email: string,
    password: string,
    bills: Bill[],

}





