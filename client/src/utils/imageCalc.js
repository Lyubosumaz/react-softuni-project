function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function imageRatio(a, b) {
    return ((b / a) * 100).toFixed(2);
}

function imageOrientation(a, b) {
    return b > a ? 'portrait' : 'landscape';
}

function imageAltName(a) {
    a
        ? console.log(a, '----------------------------')
        : // a.split(' ').array.forEach((element) => {
          //     console.log(element);
          // });
          console.log('can do alt name function');
}

export { gcd, imageRatio, imageOrientation, imageAltName };
