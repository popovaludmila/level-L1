// Задача на классы и наследование: создайте базовый класс Shape (фигура), 
// который имеет методы для расчета площади и периметра. 
// Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. 
// Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
    constructor(name) {
        this.name = name;
    }

    calcArea() {
        throw new Error('Метод должен быть реализован');
    }

    calcPerimetr() {
        throw new Error('Метод должен быть реализован');
    }
};

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    calcArea() {
        return `Площадь ${this.name}a с радиусом ${this.radius} = ${Number(Math.PI.toFixed(2)) * this.radius * this.radius}`;
    }

    calcPerimetr() {
        return `Периметр ${this.name}a с радиусом ${this.radius} = ${Number((2 * Math.PI.toFixed(2) * this.radius).toFixed(1))}`;
    }
};

class Triangle extends Shape {
    constructor(name, length, heigth, lengthTwo, lengthThree) {
        super(name);
        this.length = length;
        this.heigth = heigth;
        this.lengthTwo = lengthTwo;
        this.lengthThree = lengthThree;
    }

    calcArea() {
        return `Площадь ${this.name}а длиной ${this.length} и высотой ${this.heigth} =  ${0.5 * this.length * this.heigth}`;
    }

    calcPerimetr() {
        return `Периметр ${this.name}а со сторонами ${this.length}, ${this.lengthTwo}, ${this.lengthThree} = ${this.length + this.lengthTwo + this.lengthThree}`;
    }
};

class Rectangle extends Shape {
    constructor(name, width, length) {
        super(name);
        this.width = width;
        this.length = length;
    }

    calcArea() {
        return `Площадь ${this.name}а со сторонами ${this.length}, ${this.width} =  ${this.width * this.length}`;
    }

    calcPerimetr() {
        return `Периметр ${this.name}a со сторонами ${this.length}, ${this.width} =  ${(this.width + this.length) * 2}`;
    }


};

const rectangle = new Rectangle("прямоугольник",7, 5);
console.log(rectangle.calcArea());
console.log(rectangle.calcPerimetr());

const circle = new Circle("круг", 10);
console.log(circle.calcArea());
console.log(circle.calcPerimetr());

const triangle = new Triangle("треугольник", 10, 12, 2, 10);
console.log(triangle.calcArea());
console.log(triangle.calcPerimetr());