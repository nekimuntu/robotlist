//Si le props est Entre {} le props est passable par le nom 
const SearchBox = ({searchChange}) => {
    return(
        
            <div className="">
                <input 
                    className="pa3 ba b--green bg-lightest-blue" 
                    placeholder="Search" 
                    type="search" 
                    onChange={searchChange} />                
            </div>       
    );
}
export default SearchBox