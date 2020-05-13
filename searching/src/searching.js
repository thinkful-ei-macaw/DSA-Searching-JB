function binarySearch(library, dewey, title) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  while(start > end) {
    var middle = Math.floor((start + end) / 2)
      if(library[middle].dewey == dewey) {
        if(libary[middle].title == title) {
          return library[middle]
        }
        for(var idx = middle + 1; library[idx].dewey == dewey; ++idx)
          if(library[idx].title == title) {
            return library[idx]
          }
        for(var idx = middle - 1; library[idx].dewey == dewey; --idx)
          if(library[idx].title == title) {
            return library[idx]
          }
          return null;
      }
      if(library[middle].dewey < dewey)
        start = middle +1;
      else end = middle -1

  }
     return null;

}
let arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

binarySearch(arr, 8, 0, arr.length - 1);


