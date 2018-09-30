
binarySearch = function (A, item) {
    // assuming the A is in sorted order(assending order)

    var end = A.length-1;
    var start = 0;
    while (start <= end) {

        var mid = Math.floor((start + end) / 2);
        if (A[mid] === item) {
            return mid;
        }

        if (A[mid] > item) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}