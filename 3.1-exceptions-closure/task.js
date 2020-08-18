function parseCount (count) {
    this.count = count;
    let newCount = parseInt (count);
    if (isNaN(newCount)) {
        throw 'Невалидное значение';
    } else {
        return newCount;
    }
    
}

function validateCount (count) {
    try {
        const parsed = parseInt(count);
        return parsed;
    } catch {
        
    }
}



class Triangle {
    constructor (a,b,c) {
        if (a == b < с || c == a < b || c == a < b) {
            throw 'Треугольник с такими сторонами не существует';
        }
        
    }
}