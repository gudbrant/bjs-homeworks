function parseCount (count) {
    let newCount = parseInt(count);
    if (isNaN (count)) {
        return Err("Невалидное значение");
    } else {
        return count;
    }
}



