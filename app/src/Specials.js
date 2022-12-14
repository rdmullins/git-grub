function Specials(props) {

    function handleClick(page) {
        props.pageUpdater(page);
    };

return (
    <div className="container text-center gitgrub-brand">
        <div className="row">
            <div className="col">
                <h1>Today's Special</h1>
                <h2>Four Courses | $15 All Day</h2>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-6 p-2">
                <div className="card text-center h-100">
                    <div className="card-header menu-title">Appetizer</div>
                    <div className="card-body">
                        <h3 className="card-title menu-title">{props.menuData[0].title}</h3>
                        <p className="card-text menu-body">{props.menuData[0].description}</p>
                    </div>
                </div>
            </div> 
            <div className="col-sm-6 p-2">
                <div className="card text-center h-100">
                    <div className="card-header menu-title">Main Course</div>
                    <div className="card-body">
                        <h3 className="card-title menu-title">{props.menuData[1].title}</h3>
                        <p className="card-text menu-body">{props.menuData[1].description}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-6 p-2">
                <div className="card text-center h-100">
                    <div className="card-header menu-title">Side Dish</div>
                    <div className="card-body">
                        <h3 className="card-title menu-title">{props.menuData[2].title}</h3>
                        <p className="card-text menu-body">{props.menuData[2].description}</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 p-2">
                <div className="card text-center h-100">
                    <div className="card-header menu-title">Dessert</div>
                    <div className="card-body">
                        <h3 className="card-title menu-title">{props.menuData[3].title}</h3>
                        <p className="card-text menu-body">{props.menuData[3].description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

}

export default Specials;