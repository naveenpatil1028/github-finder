import { createContext, useReducer} from "react";
import GithubReducer from "./GithubReducer";
const GithubContext=createContext()

const GITHUB_URL= "https://api.github.com"
const GITHUB_TOKEN="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"


export const GithubProvider=({children})=>{

    const initialState={
        users:[],
        loading:true
    }

    const [state, dispatch] = useReducer(GithubReducer,initialState)
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)

    const fetchUser=async ()=>{
        setLoading();
        const response=await fetch(`${GITHUB_URL}/users`,{
            headers:{
                Authorization:`token ${GITHUB_TOKEN}`
            }
        })

        const data=await response.json()

        dispatch({
            type:'GET_USERS',
            payload:data,
        })
}

const setLoading=()=>dispatch({type: 'SET_LOADING'})
return <GithubContext.Provider value={{
        users:state.users,
        loading:state.loading,
        fetchUser
}}>
    {children}
</GithubContext.Provider>
}

export default GithubContext