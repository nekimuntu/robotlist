import Cards from "./card";


const CardList = ({robots}) => {
    const listC =  robots.map( r => {
        return(<Cards key={r.id} id={r.id} name={r.name} username={r.username} email={r.email}></Cards>)
        });
    return(            
            <div>
                {
                    listC    
                }
               
            </div>          
    );
}

export default CardList