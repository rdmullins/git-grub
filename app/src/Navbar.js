function Navbar() {

    const BreakfastClick = () => {}

    return (
        <div>
            <button onClick={BreakfastClick} className="btn btn-danger">Breakfast</button>
            <button onClick={LunchClick} className="btn btn-danger">Lunch</button>
        </div>
    )
}