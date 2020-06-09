function getCount(objects) {
        return objects.reduce((target, item) => {
        (item.x === item.y) && (target += 1);

        return target;
    }, 0);
}
