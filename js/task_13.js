// Задача на классы и наследование: создайте базовый класс Shape (фигура), 
// который имеет методы для расчета площади и периметра. 
// Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. 
// Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
    constructor() {
        if (this.constructor == Shape) {
            throw new Error('Abstract classes can\'t be instantiated.');
        }
    }

    calcArea() {
        throw new Error('Method \'calcArea()\' must be implemented.');
    }

    calcPerimetr() {
        throw new Error('Method \'calcPerimetr()\' must be implemented.');
    }
};

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calcArea() {
        return `Площадь круга с радиусом ${this.radius} = ${Number(Math.PI.toFixed(2)) * this.radius * this.radius}`;
    }

    calcPerimetr() {
        return `Периметр круга с радиусом ${this.radius} = ${Number((2 * Math.PI.toFixed(2) * this.radius).toFixed(1))}`;
    }
};

class Triangle extends Shape {
    constructor(length, heigth, lengthTwo, lengthThree) {
        super();
        this.length = length;
        this.heigth = heigth;
        this.lengthTwo = lengthTwo;
        this.lengthThree = lengthThree;
    }

    calcArea() {
        return `Площадь треугольника =  ${0.5 * this.length * this.heigth}`;
    }

    calcPerimetr() {
        return `Периметр треугольника = ${this.length + this.lengthTwo + this.lengthThree}`;
    }
};

class Rectangle extends Shape {
    constructor(width, length) {
        super();
        this.width = width;
        this.length = length;
    }

    calcArea() {
        return `Площадь прямоугольника =  ${this.width * this.length}`;
    }

    calcPerimetr() {
        return `Периметр прямоугольника =  ${(this.width + this.length) * 2}`;
    }
};

const rectangle = new Rectangle(7, 5);
console.log(rectangle.calcArea());
console.log(rectangle.calcPerimetr());

const circle = new Circle(10);
console.log(circle.calcArea());
console.log(circle.calcPerimetr());

const triangle = new Triangle(10, 12, 2, 10);
console.log(triangle.calcArea());
console.log(triangle.calcPerimetr());