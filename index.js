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
}

// 메뉴선택 버튼 누르면 보여줄 결과
function show_result() {
  //난수 설정하기
  let randomNum = Math.floor(Math.random() * menu.length);
  console.log(`랜덤으로 뽑힌 숫자는 ${randomNum}`);
  //메뉴중에서 난수에 해당하는 거 고르기
  let today_menu = menu[randomNum];
  //콘솔에 보여주기
  console.log(`오늘 먹을 메뉴는..??!!!  ${today_menu}`);
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
