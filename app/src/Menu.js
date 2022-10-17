function Menu (props) {

    function handleClick(page) {
        props.pageUpdater(page);
    };

    return (
        <div className="container gitgrub-brand">
            <div className="row text-center">
                <div className="col">
                    <h1>Our Menu</h1>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-6 bg-info text-light">
                    <button onClick={() => {handleClick(2)}} className="btn btn-info m-3">Breakfast</button> 
                </div>
                <div className="col-sm-6 bg-info text-light">
                    <button onClick={() => {handleClick(1)}} className="btn btn-info m-3">Appetizers</button>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-6 bg-info text-light">
                    <button onClick={() => {handleClick(3)}} className="btn btn-info m-3">Brunch</button>
                </div>
                <div className="col-sm-6 bg-info text-light">
                    <button onClick={() => {handleClick(4)}} className="btn btn-info m-3">Lunch</button>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-6">
                    <button onClick={() => {handleClick(5)}} className="btn btn-info m-3">Dinner</button>
                </div>
                <div className="col-sm-6">
                    <button onClick={() => {handleClick(7)}} className="btn btn-info m-3">Desserts</button>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <button onClick={() => {handleClick(6)}} className="btn btn-info m-3">Sides</button>
                </div>
            </div>
        <div/>
    </div>
    );
}

export default Menu;