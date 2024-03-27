// ------------------------------ Footer  -----------------------------------------------
class Footer {
    constructor() {
        // 풋터 요소 초기화
        this.element = document.createElement('footer');
        this.element.classList.add('footer');
        this.render();
        // 화면 크기 변경 시 이벤트 추가
        window.addEventListener("resize", this.render.bind(this));
    }

    render() {
        // • 앱으로 구동될때 
        if (window.innerWidth <= 768) {
            this.element.innerHTML = `
            <div class="footer-left">
                <div class="logo">
                    <img class="logo-img" src="./img/logoWhite.png" alt="로고" />
                </div>
                <div class="links">
                    <div class="footer-link">이용약관</div>
                    <div class="separator">ㅣ</div>
                    <div class="footer-link">개인정보 처리방침</div>
                </div>
                <div class="contact-info">
                    <div class="info-item">
                        <span class="label title">상호명</span>
                        <span class="value">키스타트</span>
                    </div>
                    <div class="info-item">
                        <span class="label title">주소</span>
                        <span class="value">울산광역시 중구 운곡8길 82-2,201 (다운동)</span>
                    </div>
                    <div class="info-item">
                        <span class="label title">사업자등록번호</span>
                        <span class="value">607-79-00239
                            <a href="#" class="business-info-link">[사업자 정보 확인]</a></span>
                    </div>
                    <div class="info-item">
                        <span class="label title">E-MAIL</span>
                        <span class="value">keystart.official@keystart.co.kr</span>
                    </div>
                    <div class="info-item">
                        <span class="label title">TEL</span>
                        <span class="value">010-9043-9908</span>
                    </div>
                </div>
            </div>
        `;
        } else {
            // • 웹으로 구동될때 
            this.element.innerHTML = `
            <div class="footer-left">
                <div class="logo">
                    <img class="logo-img" src="./img/logoWhite.png" alt="로고" />
                </div>
                <div class="links">
                    <div class="footer-link">이용약관</div>
                    <div class="separator">ㅣ</div>
                    <div class="footer-link">개인정보 처리방침</div>
                </div>
                <div class="contact-info">
                    <div class="info-item">
                        <span class="label title">상호명</span>
                        <span class="value">키스타트</span>
                        <span class="label title"> | </span>
                        <span class="label title">주소</span>
                        <span class="value">울산광역시 중구 운곡8길 82-2, 201호(다운동)</span>
                    </div>
                    <div class="info-item">
                        <span class="label title">사업자등록번호</span>
                        <span class="value">607-79-00239
                            <a href="#" class="business-info-link">[사업자 정보 확인]</a></span>
                    </div>
                    <div class="info-item">
                        <span class="label title">E-MAIL</span>
                        <span class="value">keystart.official@keystart.co.kr</span>
                        <span class="label title"> | </span>
                        <span class="label title">TEL</span>
                        <span class="value">010-9043-9908</span>
                    </div>
                </div>
            </div>
            <div class="footer-right">
                <div class="community">커뮤니티</div>
                <div class="notification">공지사항</div>
                <div class="requestion">자주 묻는 질문</div>
                <div class="social-item">
                    <div class="social">
                        <img class="insta" src="./img/social/insta.png" alt="" />
                    </div>
                    <div class="social">
                        <img class="kakao" src="./img/social/kakao.png" alt="" />
                    </div>
                    <div class="social">
                        <img class="blog" src="./img/social/blog.png" alt="" />
                    </div>
                </div>
            </div>
            `;
        }
    }

    getElement() {
        // 생성된 풋터 요소 반환
        return this.element;
    }
}

// Footer 컴포넌트 생성 및 페이지에 추가
const footerComponent = new Footer();
document.body.appendChild(footerComponent.getElement());
// ------------------------------ Footer  -----------------------------------------------


