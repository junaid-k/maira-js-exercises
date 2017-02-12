function permutations(str) { 
    permutation("", str); 
}

function permutation(prefix, str) {
        var n = str.length; 
        if (n === 0)
            console.log(prefix);
        else {
            for (var i = 0; i < n; i++) {
                permutation(prefix + str.charAt(i), str.substring(0, i) + str.substring(i+1, n));
                
            }
        }
}
