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
    const numbers = [10, 20, 30, 40];

    const result = numbers.map((value, index) => ({
        index: index,
        value: value
    }));
    console.log(result);

    //Q43
        const words = ['תפוח', 'בננה', 'אבטיח', 'תמר'];
    const outcome = words.filter(word => word.includes('א'));
    console.log(outcome); 

    //Q44
        const letters = ['א', 'ב', 'א', 'ג', 'ב', 'א'];
    const countOccurrences = letters.reduce((acc, letter) => {
        acc[letter] = (acc[letter] || 0) + 1;
        return acc;
    }, {});
    console.log(countOccurrences);

    //Q45
        const strings = ['שלום', 'עולם', 'ג\'אווהסקריפט'];
    const containsZ = strings.some(str => str.includes('ז'));
    console.log(containsZ); 

    //Q46
        const num = [2, 4, 6, 8];
    const allDivisibleBy2 = num.every(num => num % 2 === 0);
    console.log(allDivisibleBy2);

    //Q47
    const statuses = [{id: 1, status: 'לא פעיל'}, {id: 2, status: 'פעיל'}];
    const activeStatus = statuses.find(item => item.status === 'פעיל');
    console.log(activeStatus);

    //Q48
    const num48 = [3, 7, -2, 9, -5];
    const negativeIndex = num48.findIndex(num => num < 0);
    console.log(negativeIndex); 

    //Q49
    const languages = ['JavaScript', 'Python', 'Ruby', 'Java'];
    const sortedByLength = languages.sort((a, b) => b.length - a.length);
    console.log(sortedByLength);

    //Q50
    const nestedArray = [1, [2, [3]], [4, [5]]];
    const flattened = nestedArray.flat(1);
    console.log(flattened); // [1, 2, [3], 4, [5]]











    



