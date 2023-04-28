// 전역 변수 : 어디서든 접근할 수 있게 (scope)
var totalImg = $(".imgs > div").length; // 총 이미지 갯수
var isPlaying = true; // 자동재생 여부
var pageNum = 1; // 시작 페이지 번호
var intervalID; // 자동 플레이 (return 타입 : number)
var playTime; // 자동재생 시간간격
$(function(){
    init();
    btn();    
});
function init(){ // 페이지 로드되면, init()로 기본 설정값 업데이트하거나 자동재생 시작
    updatePageNum(1);
    playTime = 4000; //ms
    startAutoPlay();
}
function changeURL(){
    location.href="../event-list.html";
}
function btn(){
    $("#plusBtn").on("click", changeURL); // 모둠페이지로 이동

    //$("#prevBtn").on("click", nextScene); // 이전
    $("#nextBtn").on("click", nextScene); // 다음
    
    $("#pause").on("click", function(){
        if(isPlaying) {
            console.log("재생중, 클릭시 일시정지로 변경!");
            $("#pause span").text("play_arrow");
            isPlaying = false;
            // 재생중 상태는 클릭하면 일정 시간마다 nextScene() 호출을 멈춤
            stopAutoPlay();
        } else {
            // 멈춰있는 자동재생을 다시 일정 시간마다 nextScene() 호출하게
            console.log("일시정지중, 클릭시 재생으로 변경!");
            $("#pause span").text("pause");
            isPlaying = true;
            startAutoPlay();
        }
    })
}
function stopAutoPlay(){ // 자동재생 중지
    clearInterval(intervalID);
}
function startAutoPlay(){ // 자동재생 시작
    intervalID = setInterval(nextScene, playTime);
}
function nextScene() { // 함수(function)의 선언식
    // .top 요소 다음 오는 형제요소가 있다면,
    var currentSlide = $(".img.top");
    var firstSlide = $(".img").first(); // .imgs 하위 .img 5개중 첫번째 요소를 (필터링) 선택
    if(currentSlide.length) {        
        var nextNum = pageNum + 1; // 다음 번호 = 현재 페이지 번호 + 1
        if (nextNum > totalImg) nextNum = pageNum = 1; // 다음 번호값을 체크 ==> 전체번호와 비교해서 크거나 같으면 초기화
        console.log("pageNum : "+pageNum, "nextNum : "+nextNum);
        var nextSlide = currentSlide.next(); // (다음)형제 요소 선택자
        if(nextSlide.length) {
            currentSlide.removeClass("top"); // .top 제거
            nextSlide.addClass("top");  // .top 추가
            updatePageNum(nextNum);
        } else {
           firstSlide.addClass("top");
           currentSlide.removeClass("top"); // .top 제거
           pageNum = 1;
        }
    } else {
        firstSlide.addClass("top");
    }
    pageNum++;
}
// function prevScene() { // 함수(function)의 선언식
//     updatePageNum();
// }


function updatePageNum(newNum){
    $(".pages").text(newNum+" / "+totalImg);
}


//var current = $(".imgs > div:nth-child(1)"); // .imgs 자손 div중 첫번째
// var current = $(".imgs > div.top"); // .imgs 자손 div중 클래스가 top 인것
// var next = current.next();  // .top 클래스를 가진 div 다음 오는 div
// if(pageNum >= 5) {
//     pageNum = 1;
// } else {
//     pageNum++;
// }
// // var current = $(".imgs > div.top");
// if(next.length) {
//     $(".pages").text("2 / "+totalImg);
//     $(".imgs > div.top").prev().removeClass("top");
//     $(".imgs > div.top").next().addClass("top");
// } else { // 없으면,
//     $(".imgs > div:nth-child(1)").addClass("top");
//     $(".imgs > div:nth-last-child(1)").removeClass("top");
// }
// updatePageNum();