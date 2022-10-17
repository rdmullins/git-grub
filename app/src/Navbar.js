function Navbar(props) {

    function handleClick(page) {
        props.pageUpdater(page);
    };

    return (
        <nav className="navbar navbar-expand-lg text-bg-primary gitgrub-navbar-brand sticky-top">
            <div className="container-fluid gitgrub-navbar-brand">
                <div className="navbar-brand gitgrub-navbar-brand">
                    GitGrub
                    <small>7-11 Daily</small>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse gitgrub-navbar-brand" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button onClick={() => {handleClick(2)}} className="btn btn-info m-1">Breakfast</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(1)}} className="btn btn-info m-1">Appetizers</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(3)}} className="btn btn-info m-1">Brunch</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(4)}} className="btn btn-info m-1">Lunch</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(5)}} className="btn btn-info m-1">Dinner</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(7)}} className="btn btn-info m-1">Desserts</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(6)}} className="btn btn-info m-1">Sides</button>
                        </li>  
                        <li className="nav-item">
                            <button onClick={() => {handleClick(9)}} className="btn btn-danger m-1">Today's Specials</button>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;