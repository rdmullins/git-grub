function Navbar(props) {

    function handleClick(page) {
        props.pageUpdater(page);
    };

    return (
        <nav className="d-flex navbar navbar-expand-lg justify-content-end gitgrub-navbar-brand sticky-top">
            <div className="container-fluid gitgrub-navbar-brand">
                <div className="navbar-brand gitgrub-navbar-brand" onClick={() => {handleClick(8)}}>
                    <h3>GitGrub</h3>
                    <small>7-11 Daily</small>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="d-flex collapse navbar-collapse justify-content-end gitgrub-navbar-brand" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button onClick={() => {handleClick(2)}} className="gitgrub-btn m-1">Breakfast</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(1)}} className="gitgrub-btn m-1">Appetizers</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(3)}} className="gitgrub-btn m-1">Brunch</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(4)}} className="gitgrub-btn m-1">Lunch</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(5)}} className="gitgrub-btn m-1">Dinner</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(7)}} className="gitgrub-btn m-1">Desserts</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => {handleClick(6)}} className="gitgrub-btn m-1">Sides</button>
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