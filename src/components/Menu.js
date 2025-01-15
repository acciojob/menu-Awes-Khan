import React from "react";
import Card from "./Card";

const Menu = () =>{

  const [menus, setMenus] = React.useState([
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: './images/item-1.jpeg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'diner double',
      category: 'lunch',
      price: 13.99,
      img: './images/item-2.jpeg',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: './images/item-3.jpeg',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: './images/item-4.jpeg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'egg attack',
      category: 'lunch',
      price: 22.99,
      img: './images/item-5.jpeg',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img: './images/item-6.jpeg',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: './images/item-7.jpeg',
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img: './images/item-8.jpeg',
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'quarantine buddy',
      category: 'shakes',
      price: 16.99,
      img: './images/item-9.jpeg',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ]);
  const [menuList, setMenuList] = React.useState(menus);

  const filterByCategoy = (category) =>{
    if(category === "all"){
      setMenuList(menus);
      console.log(menus);

      return;
    }
    const filteredMenu = menus.filter((menu) => menu.category === category);
    setMenuList(filteredMenu);
    console.log(menuList, filteredMenu);
  }

  return (
    <div>
      <h1 style={{ 
        textAlign: "center", 
        textDecoration: "underline", 
        color: "#333", 
        marginBottom: "20px" 
      }}>
        Our Menu
      </h1>

      <div 
        className="btn-container tabs" 
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "10px", 
          marginBottom: "20px" 
        }}
      >
        <button 
          id="main"
          className="" 
          onClick={() => filterByCategoy("all")}
          style={{
            padding: "10px 20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          All
        </button>
        <button 
          id="filter-btn-1"
          data-test-id="menu-item-breakfast"
          className="" 
          onClick={() => filterByCategoy("breakfast")}
          style={{
            padding: "10px 20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Breakfast
        </button>
        <button 
          id="filter-btn-2"
          data-test-id="menu-item-lunch"
          className="" 
          onClick={() => filterByCategoy("lunch")}
          style={{
            padding: "10px 20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Lunch
        </button>
        <button 
          id="filter-btn-3"
          data-test-id="menu-item-shakes"
          className="filter-btn" 
          onClick={() => filterByCategoy("shakes")}
          style={{
            padding: "10px 20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Shakes
        </button>
      </div>
      <div>
        { menuList.map((menu) => (
          
          <Card key={menu.id} menu={menu} />

        ))  

        }
      </div>
    </div>
  );
};

export default Menu