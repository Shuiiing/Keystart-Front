
// ----------------------------  Header -----------------------------------
class Header {

    constructor() {
        // 헤더 요소 초기화
        this.element = document.createElement('header');
        this.element.classList.add('TopNav-sub');
        this.render();
    }

    render() {
        // 헤더 내부 HTML 생성
        this.element.innerHTML = `
            <div class="logo-top">
                <img src="./img/logo/logoBlack.png" alt="" />
            </div>
            <div class="main-nav-sub">
                <a href="/introduce.html" class="nav-link-sub">키스타트란?</a>
                <a href="/partner.html" class="nav-link-sub">파트너사</a>
                <a href="/startup.html" class="nav-link-sub">창업 이야기</a>
                <a href="/lecture.html" class="nav-link-sub">창업 관련 정보</a>
            </div>
            <div class="info-sub" onclick="logout()">
                <img src="./img/user.png" alt="" />
            </div>
        `;
    }

    getElement() {
        // 생성된 헤더 요소 반환
        return this.element;
    }
}

// 로그아웃 함수
async function logout() {
    try {
        const response = await fetch(
            // 개발
            // "http://localhost:8282/api/v1/user/kakaologout",
            //배포
            "https://www.keystart.co.kr/api/v1/user/kakaologout",
            {
                method: "GET", // POST 메소드 사용
            }
        );
        localStorage.removeItem("accessToken");
        const data = await response.json();
        window.location.href = data.logoutUrl; // 카카오 로그아웃 페이지로 리다이렉션
    } catch (error) {
        console.error("로그아웃 중 오류 발생", error);
    }
}

// Header 컴포넌트 생성 및 페이지에 추가
const headerComponent = new Header();
document.body.appendChild(headerComponent.getElement());
// ----------------------------  Header -----------------------------------




// ------------  스크롤을 내렸을때 글씨가 바뀌는 작업 ------------
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".TopNav");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// ------------  스크롤을 내렸을때 글씨가 바뀌는 작업 ------------
