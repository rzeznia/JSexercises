

// array map
function pokemonizeAStrings (arr) 
{
    // write a function that will pokeminize strings in the array that start with 'a'
    //if()

}

// array sort
function sortByOddity (arr) 
{
    // write a function that will sort an array of numbers in a way that
    // even numbers are first, then odd ones,
    // each group sorted ascending
    arr.sort();
    var tempIndexSorted = 0;
    for (var i = 0, len = arr.length; i < len; i++) 
    {
        if(arr[i] % 2 == 0)
        {
            var tempElement = arr[tempIndexSorted];
            arr[tempIndexSorted] = arr[i];
            arr[i] = tempElement;
            tempIndexSorted++;        
        }
    }
    for (var i = tempIndexSorted, len = arr.length; i < len; i++) 
    {
        if(i + 1 <= arr.length)
        {
            if(arr[i] > arr[i + 1])
            {
                tempElement = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tempElement;
            }
        }
    }   
    return arr
}

function CheckLast(value)
{
    console.log(value);
    var regexPattern = /(a|A)/;
    if(regexPattern.test(value.slice(-1)) == true)
    {
        return value
    }
}
// array filter
function womenOnly (arr) {
    // write a function that would filter out all the men from an array of first names
    //var pattern = 
    return arr.filter(CheckLast)
}

// array reduce
// Write function (and respective tests) that will:
//
// 1. calculate a sum of incomes from an array of transactions:
// var transactions = [
//  {
//      date: '2018/01/03',
//      income: 204.54
//  },
//  {
//      date: '2018/01/04',
//      income: 100.50
//  },
//  {
//      date: '2018/01/04',
//      income: 78.65
//  },
//  {
//      date: '2018/01/06',
//      income: 32.25
//  },
//  {
//      date: '2018/01/08',
//      income: 267.23
//  }
// ];
//
// 2. given an array of temperatures, will return an average
//
// 3. given an array of objects in the form of:
// [
//  { name: 'Dany', occupation: 'Khaleesi' },
//  { name: 'John', occupation: 'knowing nothing' },
//  { name: 'Arya', occupation: 'a killer to hire' }
// ]
// will transform it to an object in the form:
// {
//  Dany: 'Khaleesi',
//  John: 'knowing nothing',
//  Arya: 'a killer to hire'
// }
