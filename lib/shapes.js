

class Shape {
    constructor(color) {
        this.color = color;
    }

    currentShape() {
        return Shape;
    }
}


class Circle extends Shape {
    constructor(color) {
        super(color);
        this.radius = radius;

    }

    render() {
        return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;
    }
}

module.exports = Circle;

class Triangle {
    constructor(color = "black") {
        this.color = color;
    }

    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="' + this.color + '" />';
    }
}

module.exports = Triangle;

class Square {
    constructor(sideLength = 50, color = "black") {
        this.sideLength = sideLength;
        this.color = color;
    }

    render() {
        return `<rect x="25" y="25" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

module.exports = Square;
