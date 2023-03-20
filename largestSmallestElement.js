const ARRAY_LENGTH =10;
const randomArray =[];
for(let i=0;i<ARRAY_LENGTH;i++){
    randomArray.push(Math.floor(100+Math.random()*999))
}
console.log(randomArray);

let first=0, second=0;
function findSecondLargestElement(randomArray){
for(let i=0;i<=ARRAY_LENGTH-1;i++){
    if(randomArray[i]>first){
        second=first;
        first=randomArray[i];
    }
    else if(randomArray[i]>second && first>randomArray[i]){
        second=randomArray[i];
    }
}
console.log("Second largest element is :"+second);
}


function findSecondSmallestElement(randomArray){
    for(let i=0;i<=ARRAY_LENGTH-1;i++){
        if(randomArray[i]<first){
            second=first;
            first=randomArray[i];
        }
        else if(randomArray[i]<second && first<randomArray[i]){
            second=randomArray[i];
        }
    }
    console.log("Second smallest element is :"+second);
    }

    findSecondLargestElement(randomArray);
    findSecondSmallestElement(randomArray);