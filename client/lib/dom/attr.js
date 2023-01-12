//IFFE패턴 사용 어케 하는디.

//1. get함수 만들기
function getAttr(node, prop){
  if(typeof node === 'string') node = getNode(node);
  return node.getAttribute(prop);
}

//2.set함수 만들기
function setAttr(node, prop, value){
  //validaiton
  if(typeof node === 'string') node = getNode(node);
  if(typeof prop !== 'string') throw new TypeError('setAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.');
  if(!value) throw new SyntaxError('setAttr 함수의 세 번째 인자는 필수값입니다.');
  //아래와 같이 data-*로 설정할 수도 있음 
  if (prop.includes("data")) {
    let rest = prop.slice(5); //앞의 5자리 자르기 
    node.dataset[rest] = value;
  }

  node.setAttribute(prop, value); //세팅만 해주는 것이므로 return 필요 없음. 
}

//3. attr함수 만들기
function attr(node, prop, value){
  if(!value){
    return getAttr(node, prop);
  }else{
    setAttr(node, prop, value);
  }
  //더 간단히는 아래처럼 적을 수 있음 
  // return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}