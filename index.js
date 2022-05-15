let menu = [];
const menu_result = document.querySelector("#menu-result");
const add_form = document.querySelector("#add-form");
const add_menu = document.querySelector("#add-menu");
const result_button = document.querySelector("#result-button");
const menu_list = document.querySelector("#menu-list");

//음식추가하면 실행되는 기능
function menu_add(e) {
  //페이지 새로고침 막기
  e.preventDefault();

  //메뉴(백엔드)에 추가하기
  menu.push(add_menu.value);
  console.log(menu);

  //추가한 메뉴 html 화면에 보여주기
  let addItem = document.createElement("button");
  // 속성추가하기(글자, id, class)
  addItem.innerText = add_menu.value;
  addItem.id = add_menu.value;
  addItem.className = "menu-items";
  // 클릭하면 지우는 기능 넣어두기
  addItem.addEventListener("click", removeMenu);
  // 음식 이름 클릭하면 지워짐.
  function removeMenu() {
    let index = menu.indexOf(this.innerText);
    //화면에서 지우고
    document.getElementById(this.innerText).remove();
    //메뉴(백엔드)에서도 지움
    menu.splice(index, 1);
    console.log(menu);
  }
  //최종적으로 화면에 추가함
  menu_list.appendChild(addItem);
  add_menu.value = "";
}

// 메뉴선택 버튼 누르면 보여줄 결과
function show_result() {
  //난수 설정하기
  let randomNum = Math.floor(Math.random() * menu.length);
  console.log(`랜덤으로 뽑힌 숫자는 ${randomNum}`);
  //메뉴중에서 난수에 해당하는 거 고르기
  let today_menu = menu[randomNum];
  //화면에 보여주기
  menu_result.innerText = `오늘 먹을 메뉴는..??!!!  "${today_menu}"`;
}

//화면이 실행되면 가장 처음 실행할 함수모음
function init() {
  //form태그 제출하면 menu_add함수 실행
  add_form.addEventListener("submit", menu_add);
  //메뉴선택 버튼 누르면 show_result함수 실행
  result_button.addEventListener("click", show_result);
}

//함수 시작하기
init();
