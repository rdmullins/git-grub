function Splash() {
    console.log("Inside Splash function.");
    const handleClick = () => {
        alert("You clicked!");
    }
    return (
        <div className="container bg-primary">
            <h1 className="text-light">GitGrub</h1>
            <h2>348 E. Main Street</h2>
            <h2>Lexington, KY</h2>
            <h3>A Fusion Gastro-Pub Merging International Cuisines</h3>
            <h3>Grab a Fork!</h3>
            <button onClick={handleClick} className="btn btn-danger">Today's Specials</button>
            <button onClick={handleClick} className="btn btn-success">Our Menu</button>
        </div>
    )
};

export default Splash;