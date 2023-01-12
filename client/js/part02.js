

const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

//이벤트 위임x
$('.navigation > li').click(function(e){
  e.preventDefault(); //stropPropagation과 비슷하게 어디로 넘기지 않음.자기 기능 상실 
  let index = $(this).index();
  
  $('.navigation > li').removeClass('is-active');
  $(this).addClass('is-active');
  //attr을 사용해서 속성 바꿔줄 수 있는데 아래처럼 객체를 사용해 설정 가능
  $('.visual img').attr({
    'src':`./assets/part01/${data[index].src}`,
    'alt':data[index].alt
  })
})

//이벤트 위임 아님. 위 코드는 아래 코드랑 같은 코드임
// const list = document.querySelectorAll('.navigation > li');
// list.forEach((item)=>{
//   item.addEventListener('click', ()=>{
    
//   })
// })

//그럼 이제 이벤트 위임으로 해보겠삼. 
//on은 addEventListener라고 보면 됨. 
//아래 'li' 넣어준 부분이 이벤트 위임.
$('.navigation').on('click', 'li', function(e){
  e.preventDefault();
  let index = $(this).attr('data-index');
  //아래는 위와 똑같음.(index-1만 빼고)
  $('.navigation > li').removeClass('is-active');
  $(this).addClass('is-active');
  //attr을 사용해서 속성 바꿔줄 수 있는데 아래처럼 객체를 사용해 설정 가능
  $('.visual img').attr({
    'src':`./assets/part01/${data[index-1].src}`,
    'alt':data[index-1].alt
  })
});

