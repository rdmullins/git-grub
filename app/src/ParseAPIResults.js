function SortDishesIntoCategories(menu) {
    let dataStore = menu;

    dataStore.forEach((dish) => {
        console.log(dish.description);
    })
}

export default SortDishesIntoCategories;