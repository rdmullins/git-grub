function Navbar(props) {

    function handleClick(page) {
        props.pageUpdater(page);
    };

    return (
        <div className="sticky-top text-bg-primary">
            <div>
                <h1>GitGrub</h1>
            </div>
            <button onClick={() => {handleClick(2)}} className="btn btn-danger">Breakfast</button>
            <button onClick={() => {handleClick(1)}} className="btn btn-danger">Appetizers</button>
            <button onClick={() => {handleClick(3)}} className="btn btn-danger">Brunch</button>
            <button onClick={() => {handleClick(4)}} className="btn btn-danger">Lunch</button>
            <button onClick={() => {handleClick(5)}} className="btn btn-danger">Dinner</button>
            <button onClick={() => {handleClick(7)}} className="btn btn-danger">Desserts</button>
            <button onClick={() => {handleClick(6)}} className="btn btn-danger">Sides</button>
        </div>
    )
};

export default Navbar;