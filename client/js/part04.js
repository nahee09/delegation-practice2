const contents = getNode('.contents');
const textField = getNode('#comment37');

function clearText(target) {
  target.value = "";
}

function handler(e){
  let target = e.target;

  //data-name이 없으면 부모로 올라가서 찾도록 반복. 찾을 때까지. 
  while(!attr(target, 'data-name')){
    target = target.parentNode;

    if(target.nodeName === 'BODY'){
      target = null;
      return;
    }
  }

  if(target.dataset.name === 'like'){
    console.log('like');
    toggleClass(target, 'active');
  }

  if(target.dataset.name === 'comment'){
    textField.focus();
  }

  if(target.dataset.name === 'send'){
    console.log(textField.value); //input태그에선 value로 가져오면 됨. 
    let template = `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">범쌤</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `
    insertLast('.comment_container', template);

    clearText(textField);
  }
}

contents.addEventListener('click', handler);

//엔터 입력도 할 수 있음~ 
textField.addEventListener('keydown',(e)=>{

  if(e.keyCode === 13){
    textField.value

    let template = `
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">심선범</a></div>
                  <div class="text_field">${textField.value}</div>
              </div>
          </div>
      </div>
      `
      insertLast('.comment_container',template);

      clearText(textField)
  }
})
















