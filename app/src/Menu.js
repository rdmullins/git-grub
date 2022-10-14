function Menu (props) {

    function handleClick(page) {
        props.pageUpdater(page);
    };

    return (
        <>
            <h1>Our Menu</h1>
            <button onClick={() => {handleClick(2)}} className="btn btn-success">Breakfast</button>
            <button onClick={() => {handleClick(1)}} className="btn btn-success">Appetizers</button>
            <button onClick={() => {handleClick(3)}} className="btn btn-success">Brunch</button>
            <button onClick={() => {handleClick(4)}} className="btn btn-success">Lunch</button>
            <button onClick={() => {handleClick(5)}} className="btn btn-success">Dinner</button>
            <button onClick={() => {handleClick(7)}} className="btn btn-success">Desserts</button>
            <button onClick={() => {handleClick(6)}} className="btn btn-success">Sides</button>
        </>
    )
}

export default Menu;