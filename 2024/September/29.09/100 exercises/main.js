    resource = [1, 2, 3, 4, 5];
    //Q1

    resource.forEach((num) => {
    return console.log(num);
    });

    //Q2
    resource.forEach((num) => {
    let total = num * (num + 1);
    return console.log(total);
    });

    //Q3
    resource.forEach((num) => {
    let sum = 0;
    sum += num ** 2;
    return console.log(sum);
    });

    //Q4

    resource.forEach((num) => {
    let sum = 0;
    sum += num + num;
    console.log(sum);
    });

    //Q5
    const q5 = ["hello", " ", "World", "!"];
    const fullSentence = () => {
    let completeW = "";
    q5.forEach((word) => {
        completeW += word;
    });
    console.log(completeW);
    };
    fullSentence();

    //Q6
    const map1 = resource.map((x) => x ** 2);
    console.log(map1);

    //Q7
    const fruits = ["apple", "banana", "cherry"];
    const map2 = fruits.map((str) => {
    let stringArr = str.split("");
    let count = 0;
    stringArr.forEach(() => {
        count++;
    });
    return count;
    });
    console.log(map2);

    //Q8
    const q8Resource = [1, 4, 9, 16, 25];
    const map3 = q8Resource.map((arr) => {
    let newArr = arr ** 2;
    return newArr;
    });
    console.log(map3);

    //Q9
    const q9resource = ["hello", "world"];
    const map4 = q9resource.map((arr) => {
    return arr.toUpperCase();
    });
    console.log(map4);

    //Q10
    const q10Resource = [true, false, true];
    const map5 = q10Resource.map((arr) => {
    if (arr === true) {
        return false;
    } else {
        return true;
    }
    });
    console.log(map5);

    //Q11
    const q11Resource = [1,2,3,4,5,6]
    const filter1 = q11Resource.filter((arr) => arr % 2 === 0)
    console.log(filter1);
    
    //Q12
    const q12Resource = ['apple','banana','cherry','date','elderberry']
    filter2 = q12Resource.filter((arr) => arr.length > 5)
    console.log(filter2);
    
    //Q13
    const q13Resource = [5,10,15,20,25]
    const filter3 = q13Resource.filter((arr) => arr > 10)
    console.log(filter3);
    
    //Q14
    const q14Resource = ["דובדבן","תפוז","בננה","תפוח"]
    const filter4 = q14Resource.filter((arr) => arr[0] === "ת")
    console.log(filter4);

    //Q15
    const q15Resource = [1, 2, 3, 4, 5, 6];
    const filter5 = q15Resource.filter((arr , index) => index % 2 === 0)
    console.log(filter5);
    
    //Q16
    const reduce1 = resource.reduce((total, number) => total+number ,0)
    console.log(reduce1);
    
    //Q17
    const reduce2 = resource.reduce((acc,num) => acc*num , 1)
    console.log(reduce2);
    
    //Q18
    const q18Resource = [10, 5, 15, 20, 25]
    const reduce3 = q18Resource.reduce((biggest, num) => {
        if(biggest < num) {
            biggest = num
        }
        return num
    })
    console.log(reduce3);

    //Q19
    const q19Resource = ["Hello", " ", "World", "!"]
    const reduce4 = q19Resource.reduce((Sentence,str) => Sentence +=str )
    console.log(reduce4);
    
    //Q20
    let count = 0
    const q20Resource = [1,2,2,3,3,3,4,4,4,4]
    const reduce5 = q20Resource.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) +1
        return acc
    }, {})
    console.log(reduce5);

    //Q21
    const some1 = resource.some((num) => num > 3)
    console.log(some1);

    //Q22
    const q22Resource = [2,4,6,8,10]
    const every1 = q22Resource.every((arr) => arr % 2 === 0)
    console.log(every1);
    
    //Q23
    const q23Resource = ['apple','banana','cherry']
    const some2 = q23Resource.some((arr) => arr.length > 6)
    console.log(some2);

    //Q24
    const q24Resource = ['cat', 'dog', 'elephant'];

    const every2 = q24Resource.every(animal => {
        const firstLetter = animal[0].toLowerCase();
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.includes(firstLetter);
    });
    console.log(every2);
    
    //Q25
    const q25Resource = [false, false, true, false]
    const some3 = q25Resource.some ((arr) => arr === true)
    console.log(some3);
    
    //Q26
    const find1 = resource.find((num) => num > 3)
    console.log(find1);

    //Q27
    const q27Resource = [1,3,5,2,4,6]
    const findIndex1 = q27Resource.findIndex((num) => num % 2 === 0)
    console.log(findIndex1);

    //Q28
    const q28Resource = ["apple", "banana", "cherry"]
    const find2 = q28Resource.find((fruit) => fruit.length > 5)
    console.log(find2);

    //Q29
    const q29Resource = ["apple", "banana", "cherry","date"]
    const findIndex2 = q29Resource.findIndex((fruit) => fruit.toLowerCase() === "cherry")
    console.log(findIndex2);
    
    //Q30
    const q30Resource = [1,2,3,-4,5,-6]
    const find3 = q30Resource.find((num) => num < 0)
    console.log(find3);

    //Q31
    const q31Resource = [3, 1, 4, 1, 5, 9, 2, 6, 5]
    const sort1 = q31Resource.sort((a , b) => a-b)
    console.log(sort1);
    
    //Q32
    const q32Resource = [3, 1, 4, 1, 5, 9, 2, 6, 5]
    const sort2 = q32Resource.sort((a,b) => b - a)
    console.log(sort2);
    
    //Q33
    const q33Resource = ["apple", "banana","date", "cherry"]
    const sort3 = q33Resource.sort ((a,b) => a.localeCompare(b))
    console.log(sort3);
    
    //Q34
    const sort4 = q33Resource.sort ((a,b) => a.length - b.length)
    console.log(sort4);

    //Q35
    const q35Resource = [{name: 'Johnathan', age: 25}, {name: 'Yael', age: 30}, {name: 'Boaz', age: 20}]
    const sort5 = q35Resource.sort((a,b) => a.age-b.age)
    console.log(sort5);
    
    //Q36
    const q36Resource =  [1, [2, 3], [4, [5, 6]]]
    const flat1 = q36Resource.flat(Infinity)
    console.log(flat1);
    
    //Q37
    const q37Resource =  [1, [2, [3, [4]]]]
    const flat2 = q37Resource.flat(2)
    console.log(flat2);
    
    //Q38
    const q38Resource = [1, 2, , 4, 5]
    const flat3 = q38Resource.flat((Infinity))
    console.log(flat3);
    
    //Q39
    const q39Resource = ['a',['b','c'],'d']
    const flat4 = q39Resource.flat()
    console.log(flat4);
    
    //Q40
    const q40Resource = [1, [2, [3, [4, [5]]]]]
    const flat5 = q40Resource.flat((Infinity))
    console.log(flat5);

    //Q41
    const q41Resource = ['a','b','c','d']
    q41Resource.forEach((str) => console.log(str));
    
    //Q42
    const Q42Resource = [10, 20, 30, 40];

    const result = Q42Resource.map((value, index) => ({
        index: index,
        value: value
    }));
    console.log(result);

    //Q43
        const words = ['תפוח', 'בננה', 'אבטיח', 'תמר'];
    const outcome = words.filter(word => word.includes('א'));
    console.log(outcome); 

    //Q44
        const q44Resource = ['א', 'ב', 'א', 'ג', 'ב', 'א'];
    const countOccurrences = q44Resource.reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, {});
    console.log(countOccurrences);

    //Q45
        const q45Resource = ['שלום', 'עולם', 'ג\'אווהסקריפט'];
    const containsZ = q45Resource.some(str => str.includes('ז'));
    console.log(containsZ); 

    //Q46
        const q46Resource = [2, 4, 6, 8];
    const allDivisibleBy2 = q46Resource.every(num => num % 2 === 0);
    console.log(allDivisibleBy2);

    //Q47
    const q47Resource = [{id: 1, status: 'לא פעיל'}, {id: 2, status: 'פעיל'}];
    const activeStatus = q47Resource.find(item => item.status === 'פעיל');
    console.log(activeStatus);

    //Q48
    const q48Resource = [3, 7, -2, 9, -5];
    const negativeIndex = q48Resource.findIndex(num => num < 0);
    console.log(negativeIndex); 

    //Q49
    const q49Resource = ['JavaScript', 'Python', 'Ruby', 'Java'];
    const sortLength = q49Resource.sort((a, b) => b.length - a.length);
    console.log(sortLength);

    //Q50
    const q50Resource = [1, [2, [3]], [4, [5]]];
    const flattened = q50Resource.flat(1);
    console.log(flattened); // [1, 2, [3], 4, [5]]

    //Q51
    const q51Resource = ['ש', 'ל', 'ו', 'ם'];
    let word = '';
    q51Resource.forEach(char => word += char);
    console.log(word);

    //Q52
    const numbers = [1, 2, 3, 4, 5];
    const incrementedNumbers = numbers.map(num => num + 10);
    console.log(incrementedNumbers);

    //Q53
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const divisibleBy3 = numArray.filter(num => num % 3 === 0);
    console.log(divisibleBy3);

    //Q54
    const strings = ['קצר', 'בינוני', 'הכי ארוך', 'ארוך יותר'];
    const longestString = strings.reduce((longest, current) => current.length > longest.length ? current : longest, '');
    console.log(longestString);

    // Q55
    const oddNumbers = [1, 3, 5, 7, 9];
    const hasEvenNumber = oddNumbers.some(num => num % 2 === 0);
    console.log(hasEvenNumber);

    //Q56
    const q56Resource = ['תפוח', 'תפ', 'תפוז'];
    const allStartWithTap = q56Resource.every(fruit => fruit.startsWith('תפ'));
    console.log(allStartWithTap);

    //Q57
    const tasks = [{id: 1, completed: false}, {id: 2, completed: true}];
    const firstCompleted = tasks.find(task => task.completed);
    console.log(firstCompleted);

    //Q58
    const fruitArray = ['תפוח', 'בננה', 'דובדבן'];
    const bananaIndex = fruitArray.findIndex(fruit => fruit === 'בננה');
    console.log(bananaIndex);

    //Q59
    const people = [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}];
    const sortedPeople = people.sort((a, b) => a.name.localeCompare(b.name));
    console.log(sortedPeople);

    //Q60
    const nestedArray = [1, [2, 3], [4, [5, 6]]];
    const flattenedArray = nestedArray.flat(2);
    console.log(flattenedArray);

    //Q61
    const greeting = 'שלום';
    greeting.split('').forEach(char => console.log(char));

    //Q62
    const wordsArray = ['תפוח', 'בננה', 'דובדבן'];
    const firstLetters = wordsArray.map(word => word[0]);
    console.log(firstLetters);

    //Q63
    const shortStrings = ['א', 'אב', 'אבג', 'אבגד'];
    const longerStrings = shortStrings.filter(str => str.length > 3);
    console.log(longerStrings);

    //Q64
    const fruits2 = ['תפוח', 'בננה', 'דובדבן'];
    const totalCharacters = fruits2.reduce((total, word) => total + word.length, 0);
    console.log(totalCharacters);

    //Q65
    const longStringsArray = ['שלום', 'עולם', 'ג\'אווהסקריפט'];
    const hasLongString = longStringsArray.some(str => str.length > 10);
    console.log(hasLongString);

    //Q66
    const numbersArray = [10, 20, 30, 40, 50];
    const allGreaterThan5 = numbersArray.every(num => num > 5);
    console.log(allGreaterThan5);

    //Q67
    const objects = ['ספר', 'דלת', 'חלון'];
    const firstWithWW = objects.find(str => str.includes('וו'));
    console.log(firstWithWW);

    //Q68
    const mixedNumbers = [5, 10, 15, 20];
    const firstGreaterThan10 = mixedNumbers.findIndex(num => num > 10);
    console.log(firstGreaterThan10);

    //Q69
    const stringArray = ['אאא', 'בב', 'ג'];
    const sortedByLength = stringArray.sort((a, b) => a.length - b.length);
    console.log(sortedByLength);

    //Q70
    const deepArray = [1, [2, [3, [4]]]];
    const flattenedDeepArray = deepArray.flat(3);
    console.log(flattenedDeepArray);

    //Q71
    const squares = [1, 4, 9, 16];
    const squareRoots = [];
    squares.forEach(num => squareRoots.push(Math.sqrt(num)));
    console.log(squareRoots);

    //Q72
    const hebrewLetters = ['א', 'ב', 'ג'];
    const duplicated = hebrewLetters.map(letter => letter.repeat(2));
    console.log(duplicated);

    //Q73
    const numRange = [5, 10, 15, 20, 25];
    const between10And20 = numRange.filter(num => num >= 10 && num <= 20);
    console.log(between10And20);

    //Q74
    const objectArray = [{א: 1}, {ב: 2}, {ג: 3}];
    const mergedObject = objectArray.reduce((acc, obj) => ({...acc, ...obj}), {});
    console.log(mergedObject);

    //Q75
    const xyzArray = [{x: 1}, {y: 2}, {z: 3}];
    const hasYProperty = xyzArray.some(obj => obj.hasOwnProperty('y'));
    console.log(hasYProperty);

    //Q76
    const mixedStrings = ['א1', 'ב2', 'ג3'];
    const allContainLetterAndNumber = mixedStrings.every(str => /\D/.test(str) && /\d/.test(str));
    console.log(allContainLetterAndNumber);

    //Q77
    const prices = [{מחיר: 60}, {מחיר: 40}, {מחיר: 70}];
    const firstUnder50 = prices.find(product => product.מחיר < 50);
    console.log(firstUnder50);

    //Q78
    const truthyFalsyArray = [1, '', true, 0, null, 'שלום'];
    const firstFalsyIndex = truthyFalsyArray.findIndex(value => !value);
    console.log(firstFalsyIndex);

    //Q79
    const numberDecimals = [3.14, 2.71, 1.41, 1.73];
    const sortedNumbers = numberDecimals.sort((a, b) => a - b);
    console.log(sortedNumbers);

    //Q80
    const infiniteArray = ['א', ['ב', ['ג']]];
    const flattenedInfinite = infiniteArray.flat(Infinity);
    console.log(flattenedInfinite);

    
    
    










    



