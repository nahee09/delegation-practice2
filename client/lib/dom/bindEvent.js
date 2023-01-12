//지우는 이벤트를 매번 하기 힘드니까 이렇게 유틸함수로 클로저를 사용해서 만들어서 쓴다.
function bindEvent(node, type, handler){
  if(typeof node === 'string') node = getNode(node);
  if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){ //test는 정규표현식에 쓸 수 있는 함수
    typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type, handler);

  return ()=> node.removeEventListener(type, handler);
}