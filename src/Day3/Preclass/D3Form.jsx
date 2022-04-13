import React from "react";

const initState={
    name:"",
    email:"",
    password:""
};


function D3Form(){
    const [state,setState]=React.useState(initState);
    const {name,email,password}=state;
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(state,"data is");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="name" value={name} onChange={handleChange}/>
                <br/>
                <input type="text" name="email" placeholder="email" value={email} onChange={handleChange}/>
                <br/>
                <input type="text" name="password" placeholder="password" value={password} onChange={handleChange}/>
                <br/>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    )
}

export {D3Form}