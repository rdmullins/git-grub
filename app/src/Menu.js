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
                <div className="col-sm-6 gitgrub-btn">
                    <div onClick={() => {handleClick(2)}} className="gitgrub-btn display-5 m-3">Breakfast</div> 
                </div>
                <div className="col-sm-6 gitgrub-btn">
                    <div onClick={() => {handleClick(1)}} className="gitgrub-btn display-5 m-3">Appetizers</div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-6 gitgrub-btn">
                    <div onClick={() => {handleClick(3)}} className="gitgrub-btn display-5 m-3">Brunch</div>
                </div>
                <div className="col-sm-6 gitgrub-btn">
                    <div onClick={() => {handleClick(4)}} className="gitgrub-btn display-5 m-3">Lunch</div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-6 gitgrub-btn">
                    <div onClick={() => {handleClick(5)}} className="gitgrub-btn display-5 m-3">Dinner</div>
                </div>
                <div className="col-sm-6 gitgrub-btn">
                    <div onClick={() => {handleClick(7)}} className="gitgrub-btn display-5 m-3">Desserts</div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col gitgrub-btn">
                    <div onClick={() => {handleClick(6)}} className="gitgrub-btn display-5 m-3">Sides</div>
                </div>
            </div>
        <div/>
    </div>
    );
}

export default Menu;