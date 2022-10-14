function MenuCard(menu) {
    //let dishesList = [];
    //console.log("Inside the MenuCard component. Recieved from App: ", menu);

    //const listItems = menu.menuData.map(dish => <li>{dish.title}<ul><li>{dish.description}</li><li>{dish.price}</li></ul></li>);

    //const listItems = menu.menuData.map(dish => <div className="card text-center"><div className="card-header"></div><div className="card-body"><h5 className="card-title">{dish.title}</h5><p className="card-text">{dish.description}</p></div><div className="card-footer text-muted">{dish.price}</div></div>);

    const listItems = menu.menuData.map(dish =>
        (<div className="card text-center">
            <div className="card-header"></div>
            <div className="card-body">
                <h5 className="card-title">{dish.title}</h5>
                <p className="card-text">{dish.description}</p>
            </div>
            <div className="card-footer text-muted">
                {dish.price}
            </div>
        </div>)
        );

    return (
        <div className="container text-center">
            {(menu.page === 1) && <h1>Appetizers</h1>}
            {(menu.page === 2) && <h1>Breakfast</h1>}
            {(menu.page === 3) && <h1>Brunch</h1>}
            {(menu.page === 4) && <h1>Lunch</h1>}
            {(menu.page === 5) && <h1>Dinner</h1>}
            {(menu.page === 6) && <h1>Side Dishes</h1>}
            {(menu.page === 7) && <h1>Desserts</h1>}
    
    
    <ul>{listItems}</ul>
    
    </div>
    )

    // return (
    //     <>
    //         <ul>
    //             <li>{menu.menuData[0].title}
    //                 <ul>
    //                     <li>{menu.menuData[0].description}</li>
    //                     <li>{menu.menuData[0].price}</li>
    //                 </ul>
    //             </li>
    //         </ul>
    //     </>
    // )
    // for (let i=0; i<menu.menuData.length; i++) {
    //     let menuItem = "";
    //     console.log(menu.menuData[i].title);
    //         menuItem = menuItem + `<li>${menu.menuData[i].title}<ul>`;
    //     console.log(menu.menuData[i].description);
    //         menuItem = menuItem + `<li>${menu.menuData[i].description}</li><li>`;
    //     console.log(menu.menuData[i].price);
    //         menuItem = menuItem + `${menu.menuData[i].price}</li></ul></li>`
    //     console.log(menuItem);
    //     dishesList.push(menuItem);
    // };
    // console.log(dishesList);

    // const listItems = menu.menuData.map(title => <li>{menu.menuData.title}</li>);

    // return (<ul>{dishesList}</ul>);
    //console.log(menuData.menu[9].description);
    // for (dish in data) {
    //     console.log(dish.description);
    // }
    // //console.log("Incoming values are: ", Object.values(menu));
    //console.log(menu.dinnerMenu[0].title);

    // for (const title in menu)
    //     { console.log(`${title}: ${menu[title]}`);
    // };
    //console.log(menu[6].title);
    //menu.forEach(element => console.log(element.description));
    // });
    // return (
    //     <div className="row row-cols-1 row-cols-md-3 g-4">
    //         <div className="col">
    //             <div className="card h-100">
    //             <img src="..." className="card-img-top" alt="..."/>
    //             <div className="card-body">
    //                 <h5 className="card-title">Card title</h5>
    //                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //             </div>
    //             <div className="card-footer">
    //                 <small className="text-muted">Last updated 3 mins ago</small>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    

    // const listItems = menu.filter(dishes => 
    //     dishes.category === "Appetizer");

    // const listItems = menu.map(dish => <li>{dish}</li>);
 //return <ul>{listItems}</ul>;
};
export default MenuCard;