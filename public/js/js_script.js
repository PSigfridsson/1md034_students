class MenuItem {
  // lactose, gluten IS BOOL
  // name: String
  // kCal: Int
  constructor(name, kCal, lactose, gluten) {
    this.name = name;
    this.kCal = kCal;
    this.lactose = lactose;
    this.gluten = gluten;
  }

  getName() {
    return this.name;
  }

  getKcal() {
    return this.kCal;
  }
}
