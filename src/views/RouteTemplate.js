export default function RouteTemplate(props){
    return (<div className="route-body" style={{margin:'0.4em 0.2em 0.4em 0.2em',padding:'1em',backgroundColor:'#1D1D1F'}}>
      {props.children}
    </div>);
}