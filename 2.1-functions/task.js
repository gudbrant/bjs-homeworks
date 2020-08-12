function getSolution(a, b, c) {
    let D = b**2 - 4 * a * c;
    if (D < 0) {
        return D, roots:[];
    } else if (D == 0) {
        let x1 = [-b / 2 *a];
        return (x1);
    } else if (D > 0) {
        let x1 = [(-b + Math.sqrt(D)) / (2*a)];
        let x2 = [(-b - Math.sqrt(D)) / (2*a)];
        return { D,[x1], [x2]};
    }
}


function showSolutionMessage (a, b, c) {
    let result = getSolution(a, b, c);
    return `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`
}