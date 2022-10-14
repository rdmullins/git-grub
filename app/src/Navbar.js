function Navbar(props) {

    function handleClick(page) {
        props.pageUpdater(page);
    };

    return (
        <nav className="navbar navbar-expand-lg text-bg-primary sticky-top">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src="../GitGrubCropped.png" alt="Restaurant Logo" width="15%"></img>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button onClick={() => {handleClick(2)}} className="btn btn-danger">Breakfast</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(1)}} className="btn btn-danger">Appetizers</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(3)}} className="btn btn-danger">Brunch</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(4)}} className="btn btn-danger">Lunch</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(5)}} className="btn btn-danger">Dinner</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(7)}} className="btn btn-danger">Desserts</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(6)}} className="btn btn-danger">Sides</button>
                        </li>                          
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;