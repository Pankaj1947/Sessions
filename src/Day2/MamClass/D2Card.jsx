import styles from "./D2Card.module.css"

const rightStyle={
    color:"blue",
    padding:"2px"
}
const rightStyle2={
    fontWeight:"800",
    fontStyle:"italic"
}

function D2Card(props){
    console.log('props:', props)
    const {name,organisation,qualification,imgUrl,gender}=props
    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <img src={imgUrl}/>
            </div>
            <div className="right">
                <h1 style={{color:"green",fontSize:"40px"}}>{organisation}</h1>
                <h2 style={{...rightStyle,...rightStyle2}}>Name:{name}</h2>
                <h2>Qualification:{qualification}</h2>
                <h2>Gender:{gender}</h2>
            </div>
        </div>
    )
    
}
export default D2Card