function Splash(props) {

    //console.log("Inside Splash function.");
    function handleClick(page) {
        props.pageUpdater(page);
    };

    return (
        <div className="container bg-primary">
            <h1 className="text-light">GitGrub</h1>
            <h2>348 E. Main Street</h2>
            <h2>Lexington, KY</h2>
            <h3>A Fusion Gastro-Pub Merging International Cuisines</h3>
            <h3>Grab a Fork!</h3>
            <button onClick={() => {handleClick(9)}} className="btn btn-danger">Today's Specials</button>
            <button onClick={() => {handleClick(8)}} className="btn btn-success">Our Menu</button>
        </div>
    )
};

export default Splash;