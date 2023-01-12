


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
  let list = makeArray(navigation.children); 

  //li 사이 빈 공간 누르면 null이 반환 돼서 그럼 종료되게. 
  if(!target) return; 

  //내가 선택하지 않은(모든 li) li에게 is-active 클래스를 제거. 
  list.forEach(item => removeClass(item, 'is-active'));

  //내가 선택한 li에게 is-active 클래스를 넣기 
  addClass(target, 'is-active');
  
}

navigation.addEventListener('click', handler);
















