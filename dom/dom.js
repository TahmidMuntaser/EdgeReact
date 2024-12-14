let array = [];
cnt = 0;

let container = document.querySelector('.container');

// 1 time dom operation
// batch update

while(cnt<10000){
    array.push(++cnt);
}

container.innerHTML = array.join(' ');




// 10000 times dom operation
// while(cnt<10000){
//     cnt++;

//     container.innerHTML += ` ${cnt}`;
// }