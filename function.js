function calculateRoots() {
    var a = parseInt(document.getElementById('a').value, 10);
    var b = parseInt(document.getElementById('b').value, 10);
    var c = parseInt(document.getElementById('c').value, 10);
    var result = document.getElementById('result');

  
    result.textContent = '';

    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('All values must be entered and must be numbers.');
        return;
    }
    if (a === 0 || a < -99 || a > 99) {
        alert('Invalid entry for a. Must be a non-zero integer between -99 and +99.');
        return;
    }
    if ( b < -99 || b > 99) {
        alert('Invalid entry for b. Must be an integer between -99 and +99.');
        return;
    }
    if ( c < -99 || c > 99) {
        alert('Invalid entry for c. Must be an integer between -99 and +99.');
        return;
    }

   
    var discriminant = b * b - 4 * a * c;
    var root1, root2;

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.textContent = 'Solution: x  = ' + root1.toFixed(3) + ',  x = ' + root2.toFixed(3);
    } else if (discriminant === 0) {
        root1 = -b / (2 * a);
        result.textContent = 'Solution: x  = ' + root1.toFixed(3);
    } else {
        var realPart = (-b / (2 * a)).toFixed(3);
        var imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(3);
        result.textContent = "Solution : x's Roots are imaginary: ";
    }
}






