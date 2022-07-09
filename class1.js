class Rectangle {
    constructor(length, breath) {
        this.length = length;
        this.breath = breath;
    }
     getArea() {
        console.log(this.length * this.breath);
    }
}
  var area = new Rectangle (10,20);
  area.getArea();
  var area1 = new Rectangle (50,50);
  area1.getArea();