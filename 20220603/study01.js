//어제꺼 복습//
//어제꺼 복습//
//어제꺼 복습//
//어제꺼 복습//
//어제 과제해보기

// function one() {
//     //setTimeout로 2초 뒤에 console 사용
//   setTimeout(() => {
//     console.log("첫번째");
//   }, 2000);
// }

// function two() {
//   console.log("두번째");
// }

// function three() {
//   console.log("세번째");
// }

// //순서 첫번째 2초뒤에 나오고
// // 두번째 , 세번째가 먼저 나옴
// // one();
// // two();
// // three();

// function one() {
//     console.log("첫번째");
// };

// function use(data){
//     //프로미스 동적으로 실행
//     return new Promise(function(res,rej){
//         //setTimeout 실행하고 1초뒤에
//         setTimeout(() => {
//         if(data ===1)
//         {
//             //console로 첫번재 찍고
//             // console.log("첫번째");
//             // one();
//             res();
//         }
//         else if(data === -1)
//         {
//             rej();
//         }
//         } ,1000);
//     });
// };

// use(1).then(function(){
//     //then 결과까지 기다리고
//     //two() 함수 실행
//     //three() 함수 실행
//     // two();
//     // three();
//     console.log('난 res (성공)');
// }).catch(function(){
//     console.log('난 rej (실패)');
// })

///////////////////////////////////////////////////////////////////////////////

//json 파일을 데이터처럼 가져와 보기
//저장된 데이터를 가져오기

function loadJson(){
    //fetch 경로에 데이터를 요청한다 기본적으로 method는
    //get(가져온다 읽기)방식과 post(참조도 되고 쓰기 및 수정도 가능)
    //비동기 요청 방식이다
    return fetch("study01.json")
    //요청을 하는데 json방식으로 받는다
    .then((res)=> res.json())
    //player 키값의 객체를 가져옴
    .then((json) => json.player)
    //catch 실패했을때
    .catch((rej) => {console.log('난 죽었어')});
}

loadJson().then((user) => {console.log(user)});

