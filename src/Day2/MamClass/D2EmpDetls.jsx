import D2Card from "./D2Card"

const data={
    name:"Pankaj Kumar Ram",
    qualification:"Graduate",
    organisation:"Masai School",
    imgUrl:"https://ca.slack-edge.com/T02QFJUB5DF-U02RDMWKXNG-8ca78dcba17d-512",
    gender:"Male"
}

const data2={
    name:"Bushra Jabeen",
    qualification:"Graduate",
    organisation:"Masai School",
    imgUrl:"https://ca.slack-edge.com/T02QFJUB5DF-U02R5RHT50S-dbc14a51f2df-512",
    gender:"Female"
}

const data3={
    name:"Gajraj Singh Shekhawat",
    qualification:"Graduate",
    organisation:"Masai School",
    imgUrl:"https://ca.slack-edge.com/T02QFJUB5DF-U02R6PL4PDJ-3e8fe00adb49-512",
    gender:"Male"
}

function D2EmpDetls(){
    return (
        <>
        <D2Card {...data}/>
        <D2Card {...data2}/>
        <D2Card {...data3}/>
        </>
    
    )
}
export default D2EmpDetls;