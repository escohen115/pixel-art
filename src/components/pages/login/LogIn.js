import React,{useEffect, useState} from "react"


export default function LogIn ({user, setUser}){

    const [formState, setFormState] = useState({})

    function handleChange(e){
        setFormState({
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        let confObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        }

        fetch('http://localhost:3000/users/login', confObj)
        .then(response=>response.json())
        .then(data=>{
            // let foundUser = data.find((user)=>{
            //     return(user.username===formState.username)
            // })
            setUser(data)
            console.log(data)

        })

    }

    return (

        <div className="form ">

            <form className="signup" onSubmit={(e)=>handleSubmit(e)}>
                <label>
                    username:
                    <input type="text" name="username" onChange={(e)=>handleChange(e)}/>
                </label>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}