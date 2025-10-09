// 여기에 실제 송편 가게 URL을 넣어주세요!
const SONGPYEON_STORE_URL = "https://www.coupang.com/np/search?q=%EC%86%A1%ED%8E%B8&listSize=36"; // 쿠팡 송편 검색 결과 예시

window.addEventListener('DOMContentLoaded', event => {

    // 1. 네비게이션 바 축소 기능
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // 네비게이션 바 축소 함수 실행 및 스크롤 이벤트 등록
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // Bootstrap scrollspy 활성화
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // 모바일 환경에서 네비게이션 링크 클릭 시 메뉴 닫기
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ==========================================================
    // 2. 달토끼 컨셉 추가 기능
    // ==========================================================

    // A. 달토끼 아바타 미세 움직임 (절구질 효과)
    const rabbitAvatar = document.body.querySelector('.masthead-avatar');
    
    document.addEventListener('scroll', () => {
        if (rabbitAvatar) {
            // 스크롤 위치에 따라 아바타를 상하로 움직여 절구질하는 듯한 효과 연출
            const scrollFactor = window.scrollY * 0.03; 
            const translateY = Math.sin(scrollFactor) * 5; // -5px ~ 5px 사이로 부드럽게 움직임
            
            rabbitAvatar.style.transform = `translateY(${translateY}px)`;
        }
    });

    // B. 연락처 폼 제출 성공 메시지 커스텀 (송편 가게 링크 연결)
    const contactForm = document.getElementById('contactForm');
    const submitSuccessMessage = document.getElementById('submitSuccessMessage');
    
    if (submitSuccessMessage) {
        // SB Forms JS의 메시지 영역을 커스텀 콘텐츠로 덮어쓰기
        submitSuccessMessage.innerHTML = `
            <div class="text-center mb-3">
                <div class="fw-bolder fs-5 text-primary mb-3">송편 주문 접수 완료!</div>
                <p class="lead mb-4">
                    달토끼는 당신의 간절함을 알아요. 직접 빚은 송편은 아니지만, 
                    <strong class="text-secondary">현실에서 가장 맛있는 송편</strong>으로 안내할게요!
                </p>
                <a class="btn btn-xl btn-primary" href="${SONGPYEON_STORE_URL}" target="_blank">
                    <i class="fas fa-cookie-bite me-2"></i>
                    지금 바로 송편 사러가기!
                </a>
            </div>
        `;
    }
    
    // **참고:** Start Bootstrap 템플릿은 외부 JS 파일(sb-forms-latest.js)을 사용하여
    // 실제 폼 제출과 성공/실패 메시지 표시를 처리합니다. 
    // 위 코드는 성공 메시지가 표시되었을 때의 *내용만* 변경합니다.

});