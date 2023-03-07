
const Cards = ({id,name,username,email}) =>{

        return(
            <div  className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                {/* padding 3 pa3
                  grow = -moz-osx-font-smoothing:grayscale backface-visibility:hidden transform:translateZ(0) transition:transform 0.25s ease-out
                  br  = border right 
                  ma2 = margin 2, 
                  dib = display:inline-block 
                  bw2 = border width*
                  tc = 	text-align:center */}
                <img src={`https://robohash.org/${name}`} alt="robotPict"></img>
                <div>
                    <p>Rencontrez {name} </p>
                    <p>{email} </p>
                </div>
            </div>
        );
} 
export default Cards