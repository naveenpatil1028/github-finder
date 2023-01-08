import { createContext, useState } from "react";

const GithubContext=createContext()

const GITHUB_URL= "https://api.github.com"
const GITHUB_TOKEN="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"


export const GithubProvider=({children})=>{


    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUser=async ()=>{
        const response=await fetch(`${GITHUB_URL}/users`,{
            headers:{
                Authorization:`token ${GITHUB_TOKEN}`
            }
        })

        const data=await response.json()

        setUsers(data);
        setLoading(false)
}

return <GithubContext.Provider value={{
        users,
        loading,
        fetchUser
}}>
    {children}
</GithubContext.Provider>
}

export default GithubContext