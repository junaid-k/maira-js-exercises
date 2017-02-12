function isPrimeNumber(n) {
	if (n <= 1) {
		return true;
	}

	for (var i = 2, j = Math.ceil(n ^ 0.5); j >= i; j--) {
		if (n % j === 0) {
			return false;
		}
	}

	return true;
}

function isPrimeNumberTests() {
	for (var i = 0; i < 100; i++) {
		console.log(i + ': ' + (isPrimeNumber(i) ? 'Prime' : '-'));
	}
}

function mergeSort(A) {
	if (A.length < 2) {
		return A;
	}

	var s = Math.floor(A.length / 2);
	return mergeSortMerge(mergeSort(A.slice(0, s)), mergeSort(A.slice(s)));
}
function mergeSortMerge(A1, A2) {
	//var A1 = D[0];
	//var A2 = D[1];
	var p1 = 0,
		p2 = 0;

	var merged = [];

	for (var i = 0, len = A1.length + A2.length; i < len; i++) {
		if (A1[p1] < A2[p2]) {
			merged.push(A1[p1]);
			p1++;
		}
		else {
			merged.push(A2[p2]);
			p2++;
		}
	}

	return merged;
}

//https://codility.com/programmers/task/min_avg_two_slice/
function solution(A) {
	var a = 0;
	var b = 1;
	var runningSum = A[a] + A[b];
	var runningAvg = runningSum / 2;
	var minAvg = runningAvg;

	var r = a; //result

	var newSum,
		newAvg,
		i = 2,
		len = A.length;

	for (; i < len; i++) {
		b++;
		newSum = runningSum + A[b];
		newAvg = newSum / (b - a + 1);

		if (newAvg > runningAvg) {
			if (b + 1 < len) {
				a = b;
				b = a + 1;
				
				runningSum = A[a] + A[b];
				var tmpAvg = runningSum / 2;
				
				if (tmpAvg < minAvg) { //not using '<=' because need to return the left most 'r'
					minAvg = tmpAvg;
					r = a;
				}

				runningAvg = tmpAvg;
				
				i++;
			}
		}
		else if (newAvg < runningAvg) {
			//minAvg = newAvg;
			a = b - 1;
			runningSum = A[a] + A[b];
			runningAvg = runningSum / (b - a + 1);
			minAvg = runningAvg;
			r = a;
		}
	}

	return r;
}


//https://codility.com/programmers/task/distinct/
function solution(A) {
	var dict = {};

	for (var i = 0; i < A.length; i++) {
		dict[A[i]] = true;
	}

	return Object.keys(dict).length;
}


//https://codility.com/programmers/task/triangle/
function solution(A) {
	if (A.length < 3) {
		return 0;
	}

	var i = 0,
		j = 1,
		k = 2;

	for (; i < A.length; i++) {
		j = i + 1;
		for (; j < A.length && j > i; j++) {
			k = j + 1;
			for (; k < A.length && k > j; k++) {
				if (checkTriangle(A[i], A[j], A[k])) {
					return 1;
				}
			}	
		}
	}

	return 0;
}
function checkTriangle(P, Q, R) {
	return (P + Q > R
			&& Q + R > P
			&& R + P > Q);
}


//https://codility.com/programmers/task/nesting/
function solution(s) {
	if (!s) {
		return 1;
	}

	var tally = 0;

	for (var i = 0; i < s.length; i++) {
		if (s.charAt(i) === '(') {
			tally++;
		}
		else {
			tally--;
		}

		if (tally < 0) {
			return 0;
		}
	}

	return (tally === 0 ? 1 : 0);
}





































