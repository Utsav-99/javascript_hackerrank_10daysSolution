class Polygon {
    constructor(args) {
        this.values = args;
    }

    perimeter() {
        return (this.values || []).reduce((target, item) => target + item);
    }
}
