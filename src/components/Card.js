  // card component
const Card = (props) => {
    return (
        <div className="card" style={{ width: '18rem', margin:'1rem'}}>
            <img className="card-img-top" style={{height:'24rem'}} src={props.src} />
            <div className="card-body">
            <h5 className="card-title" style={{color:'black',height:'5rem'}}>{props.title}</h5>
            </div>
        </div>
    )
}

export default Card;