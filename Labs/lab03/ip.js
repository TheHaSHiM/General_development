function ipToNumber(ip) {
    const parts = ip.split('.').map(x => parseInt(x));
    
    const nums = [
        parts[0] << 24,
        parts[1] << 16,
        parts[2] << 8,
        parts[3]
    ];

    const total = nums.reduce((x, y) => x + y, 0);
    return total;
}

console.log(ipToNumber('10.0.0.1'));

console.log(ipToNumber('127.0.0.1'));

console.log(ipToNumber('192.168.1.10')); 