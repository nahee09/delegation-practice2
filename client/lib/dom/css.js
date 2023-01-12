function addClass(node, className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string') typeError("addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  node.classList.add(className);
}

function removeClass(node, className){
  if(typeof node === 'string') node = getNode(node);
  if(!className){
    node.className = ''; //인자가 하나 일땐 클래스명 몽땅 삭제
    return;
  }
  if(typeof className !== 'string') typeError("addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  node.classList.remove(className);
}

function toggleClass(node, className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string') typeError("addClass 함수의 두 번째 인자는 문자 타입이어야 합니다.");
  node.classList.toggle(className);
}

function getCss(node, prop){
  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }


  // return getComputedStyle(node).prop; //이렇게 쓰면 안됨. 
  //JS에선 객체의 key, value값을 변수로 받기 위해서는 .사용 x. 
  return getComputedStyle(node)[prop];
  //getComputedStyle(node) << 이건 객체인 거임
}

function setCss(node, prop, value){
  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    syntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  if(!value){
    syntaxError('setCss 함수의 세 번째 인자는 필수값입니다.')
  }

  node.style[prop] = value;
}

function css(node, prop, value){
  if(!value) return getCss(node, prop);
  else setCss(node, prop, value);
}