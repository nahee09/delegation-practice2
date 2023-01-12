//이벤트 위임

//data는 배열로 만들어줬네. 
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
function makeArray(arrayLike){
  return Array.from(arrayLike);
}

const navigation = getNode('.navigation');
const list = getNodes('.navigation > li');

function handler(e){
  //이벤트 대상에 가장 인접한 li를 찾는다. 
  let target = e.target.closest('li');
  //li 사이 빈 공간 누르면 null이 반환 돼서 그럼 종료되게. 
  if(!target) return; 

  let list = makeArray(navigation.children); 
  let index = attr(target, 'data-index');

  //내가 선택하지 않은(모든 li) li에게 is-active 클래스를 제거. 
  list.forEach(item => removeClass(item, 'is-active'));

  //내가 선택한 li에게 is-active 클래스를 넣기 
  addClass(target, 'is-active');

  //이미지명의 숫자를 바뀌게. 
  //비주얼 안에 있는 이미지를 가져오기 
  let visualImg = getNode('.visual img');
  //이미지의 src 속성에 접근해서 src값을 index로 바꾸기
  attr(visualImg, 'src', `./assets/part01/${data[index-1].src}`);
  attr(visualImg, 'alt', data[index-1].alt); 
}

navigation.addEventListener('click', handler);

















