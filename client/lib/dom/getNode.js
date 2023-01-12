//node를 얻는 함수
function getNode(node){
  //validation
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입이어야 합니다.');
  }
  return document.querySelector(node);
}

//nodes를 얻는 함수
function getNodes(node){
  //validation
  if(typeof node !== 'string'){
    throw new Error('getNodes 함수의 인자는 문자 타입이어야 합니다.');
  }
  return document.querySelectorAll(node);
}