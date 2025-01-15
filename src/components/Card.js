import React from "react";


const Card = (Menu) =>{

	console.log(Menu.menu);


	return(
		// <div style="
		//   border: 1px solid #ddd; 
		//   border-radius: 8px; 
		//   width: 300px; 
		//   overflow: hidden; 
		//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
		//   font-family: Arial, sans-serif; 
		//   margin: 20px;
		// ">
		//   <img 
		//     src="https://via.placeholder.com/300x200" 
		//     alt="Card Image" 
		//     style="width: 100%; height: 200px; object-fit: cover;" 
		//   />

		//   <div style="padding: 16px;">
		//     <h2 style="
		//       font-size: 1.5em; 
		//       margin: 0 0 10px; 
		//       color: #333;
		//     ">
		//       Card Title
		//     </h2>

		//     <p style="
		//       font-size: 1em; 
		//       color: #666; 
		//       margin: 0 0 10px;
		//     ">
		//       This is a short description of the card content. It gives a brief overview of what the card is about.
		//     </p>

		//     <p style="
		//       font-size: 1.2em; 
		//       font-weight: bold; 
		//       color: #007BFF; 
		//       margin: 0;
		//     ">
		//       $49.99
		//     </p>
		//   </div>
		// </div>

<div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        maxWidth: "500px",
      }}
    >
      <img
        src={Menu.menu.image}
        alt={Menu.menu.title}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          marginRight: "16px",
        }}
      />

      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.2em",
              margin: "0",
              color: "#333",
            }}
          >
            {Menu.menu.title}
          </h2>

          <p
            style={{
              fontSize: "1.2em",
              fontWeight: "bold",
              color: "#007BFF",
              margin: "0",
            }}
          >
            ${Menu.menu.price}
          </p>
        </div>

        <p
          style={{
            fontSize: "0.9em",
            color: "#666",
            marginTop: "8px",
          }}
        >
          {Menu.menu.desc}
        </p>
      </div>
    </div>
		
	);

}

export default Card
