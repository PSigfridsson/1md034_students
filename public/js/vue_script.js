let burger1 = new MenuItem("The Fire Burger", 2200, true, true, ["Kobe beef of the highest quality", "Covered in fancy cheese", "Cold-leavened sourdough bread"], "https://images4.alphacoders.com/871/871251.jpg", "box a");
let burger2 = new MenuItem("Fried Turkey Burger", 1600, true, false, ["Deep fried Turkish turke", "A slice of pink stuff", "Shake-n-bake gluten-free bread"], "https://assets.epicurious.com/photos/5748b2ed5a5fbbae31ae4af9/master/pass/shutterstock_148839410.jpg", "box b");
let burger3 = new MenuItem("A Double w/ cheese", 1300, true, true, ["Two layers of pure meat", "Lots of yummy cheese", "Sweet bread bun"], "https://www.foodora.se/wp-content/uploads/sites/11/2016/12/janis-tripping-mushroom-burger-1920x1280.jpg", "box c");
let burger4 = new MenuItem("A Double w/ cheese", 1300, true, true, ["Two layers of pure meat", "Lots of yummy cheese", "Sweet bread bun"], "https://www.foodora.se/wp-content/uploads/sites/11/2016/12/janis-tripping-mushroom-burger-1920x1280.jpg", "box c");

var vm = new Vue({
    el: '#Burgers',
    data: {
        burgers: [
            burger1,
            burger2,
            burger3,
            burger4,
            burger4
            
        ]
    }
})
