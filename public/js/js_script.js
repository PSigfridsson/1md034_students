class MenuItem {
    // lactose, gluten IS BOOL
    // name: String
    // kCal: Int
    constructor(name, kCal, lactose, gluten, ingr, img) {
        this.name = name;
        this.kCal = kCal;
        this.lactose = lactose;
        this.gluten = gluten;
        this.ingr = ingr;
        this.img = img;
    }

    getName() {
        return this.name;
    }

    getKcal() {
        return this.kCal;
    }
}


