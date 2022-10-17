function Splash(props) {

    //console.log("Inside Splash function.");
    function handleClick(page) {
        props.pageUpdater(page);
    };

    return (
        <div className="container gitgrub-bg p-3">
            <div className="row bg-light text-center p-5" height="60vh">
                <img src="../GitGrubCropped.png" alt="Restaurant Logo"></img>
            </div>
            <div className="row text-center" height="35vh">
                <div className="col">
                    <button onClick={() => {handleClick(9)}} className="btn btn-danger">Today's Specials</button>
                </div>
            </div>
            <div className="row text-center" height="35vh">
                <div className="col">
                    <button onClick={() => {handleClick(8)}} className="btn btn-success">Our Menu</button>
                </div>
            </div>
        </div>
    )
};

export default Splash;