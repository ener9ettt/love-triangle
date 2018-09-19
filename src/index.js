/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var amount = 0;
    for (var i = 0; i < preferences.length; i++) {
        a = preferences[i];
        b = preferences[a - 1];
        c = preferences[b - 1];
        if (a == b && a == c && b == c) continue;
        if (c - 1 == i) {
            amount++;
            preferences[i] = null;
        }
    }
    return amount;
};
