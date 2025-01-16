import React from "react";


const Card = ({menu}) =>{

	const{title, price, desc, category, img} = menu
    // console.log(title)

	return (
	    <div key={title} data-test-id={"menu-item-" + category} style={{display:"flex", border:"1px solid black", width:"500px"}}>
	        <img src={img} alt='broken'/>

	        <div>
	            <div>
	                <h3>{title}</h3>
	                <span>{price}</span>
	            </div>

	            <p>{desc}</p>
	        </div>
	    </div>
	 );

}

export default Card
