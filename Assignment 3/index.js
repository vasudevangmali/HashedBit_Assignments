// Program 1
function removeVowels(states) {
    let res = states.filter(state => {
        const firstChar = state[0].toLowerCase();
        return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
    });

    console.log(states)
    console.log(res)
}

console.log("Program 1");
removeVowels(["Gujarat", "Andhra Pradesh", "Maharashtra", "Odisha", "Rajasthan", "Uttrakhand"])
console.log("\n------------------------------");

// Program 2
function reverse(str) {
    let split = str.split(" ");
    let rev = split.reverse();
    let res = rev.join(" ");

    console.log(str);
    console.log(res);
}

console.log("\nProgram 2");
reverse("I Love My India")
console.log("\n------------------------------");

// Program 3
function addStr(str) {
    let split = str.split("");
    split.splice(3, 0, "O", "N", "E", "S");
    let res = split.join("");

    console.log(str);
    console.log(res);
}

console.log("\nProgram 3");
addStr("INDIA")
console.log("\n------------------------------");

// Program 4
function consonantVowels(str) {
    str = str.toLowerCase();

    let consonants = 0;
    let vowels = 0;
    
    for (let ch of str) {
        if (ch >= 'a' && ch <='z') {
            if ('aeiou'.includes(ch)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    console.log(str);
    console.log("Consonants :",consonants);
    console.log("Vowels :",vowels);
}

console.log("\nProgram 4");
consonantVowels("The cat sat on the mat");
console.log("\n------------------------------");

// Program 5
function correct(string, wrong, right) {
    let res = string.replace(wrong, right);

    console.log("Wrong : "+string);
    console.log("Right : "+res);
}

console.log("\nProgram 5");
correct("The sun set", "set", "rise");
console.log("\n------------------------------");

// Program 6
function gte5(arr) {
    let res = arr.filter(num => num > 5);
    
    console.log(arr);
    console.log(res)
}

console.log("\nProgram 6");
gte5([1, 2, 3, 9, 10, 7, 5, 4, 3])
console.log("\n------------------------------");

// Program 7
function avgScore() {
    const students = [
        { name: "Ram", scores: [80, 70, 60] },
        { name: "Mohan", scores: [80, 70, 90] },
        { name: "Sai", scores: [60, 70, 80] },
        { name: "Hemang", scores: [90, 90, 80, 80] },
    ];

    const res = students.map(student => {
        const total = student.scores.reduce((sum, score) => sum + score, 0);
        const avg = total / student.scores.length;

        return {
            name: student.name,
            average: avg
        };
    });

    console.log(students)
    console.log(res);
}

console.log("\nProgram 7");
avgScore()
console.log("\n------------------------------");

// Program 8
function repeatedDigitSum(num) {
    console.log("Original number :",num);

    while (num >= 10) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        num = sum;
    }

    console.log("Sum of digits :",num);
}

console.log("\nProgram 8");
repeatedDigitSum(456)
console.log("\n------------------------------");

// Program 9
function countWords(para) {
    console.log(para);
    let words = para.trim().split(" ");

    console.log(words.length);
}

console.log("\nProgram 9");
countWords("I have a cure for insomnia. It’s probably worth millions of dollars but I’m giving it to you free. It isn’t warm milk or chamomile tea. It’s list making. List stuff from your life like all your teachers or all the live music you’ve seen or all the Paul Newman movies you’ve watched.")
console.log("\n------------------------------");

// Program 10
function rev(str) {
    console.log(str);
    let res = str.split('').reverse().join('');

    console.log(res);
}

console.log("\nProgram 10");
rev("Hello")
console.log("\n------------------------------");

// Program 11
const input = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

const result = Object.entries(input).reduce((acc, [student, subjects]) => {
    acc[student] = {
        average: subjects.subject1
    };
    return acc;
}, {});

console.log("\nProgram 11");
console.log(result);
