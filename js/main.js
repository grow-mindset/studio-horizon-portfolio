/*
  main.js는 페이지의 "동작"만 담당합니다.
  HTML 요소를 찾고, 사용자 행동에 따라 클래스를 추가하거나 제거합니다.
*/

const menuButton = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');
const navigationLinks = document.querySelectorAll('.main-navigation a');

// 메뉴의 열린 상태를 한 함수에서 관리하면, 같은 코드를 반복하지 않아도 됩니다.
function setMenuState(isOpen) {
  document.body.classList.toggle('menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  menuButton.textContent = isOpen ? '닫기' : '메뉴';
}

// 메뉴 버튼을 누르면 현재 상태의 반대 상태로 전환합니다.
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuState(!isOpen);
});

// 메뉴 항목을 선택한 뒤에는 모바일 메뉴를 닫습니다.
navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false);
  });
});

// Escape 키를 누르면 메뉴를 닫을 수 있게 해 키보드 사용성도 챙깁니다.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuState(false);
  }
});

// 헤더를 지나 스크롤했을 때만 배경을 표시해, 처음 화면은 깔끔하게 유지합니다.
function updateHeaderOnScroll() {
  const hasScrolled = window.scrollY > 24;
  header.classList.toggle('is-scrolled', hasScrolled);
}

window.addEventListener('scroll', updateHeaderOnScroll);
updateHeaderOnScroll();

// 화면을 넓혀 데스크톱으로 돌아갈 때 열려 있던 모바일 메뉴를 정리합니다.
window.addEventListener('resize', () => {
  if (window.innerWidth > 640) {
    setMenuState(false);
  }
});

/* 문의 폼 검증 ---------------------------------------------------------- */
const contactForm = document.querySelector('#contact-form');

// 상세 페이지에는 문의 폼이 없으므로, 폼이 있는 메인 페이지에서만 실행합니다.
if (contactForm) {
  const nameInput = contactForm.querySelector('#name');
  const emailInput = contactForm.querySelector('#email');
  const messageInput = contactForm.querySelector('#message');
  const privacyInput = contactForm.querySelector('#privacy');
  const formStatus = contactForm.querySelector('#form-status');
  const submitButton = contactForm.querySelector('.form-submit');

  function showFieldError(input, message) {
    const errorElement = contactForm.querySelector(`#${input.id}-error`);

    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', errorElement.id);
    errorElement.textContent = message;
  }

  function clearFieldError(input) {
    const errorElement = contactForm.querySelector(`#${input.id}-error`);

    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    errorElement.textContent = '';
  }

  function validateForm() {
    let firstInvalidInput = null;

    if (nameInput.value.trim().length < 2) {
      showFieldError(nameInput, '이름 또는 회사명을 2자 이상 입력해 주세요.');
      firstInvalidInput ??= nameInput;
    } else {
      clearFieldError(nameInput);
    }

    if (emailInput.value.trim() === '') {
      showFieldError(emailInput, '답변받을 이메일을 입력해 주세요.');
      firstInvalidInput ??= emailInput;
    } else if (emailInput.validity.typeMismatch) {
      showFieldError(emailInput, '올바른 이메일 형식으로 입력해 주세요.');
      firstInvalidInput ??= emailInput;
    } else {
      clearFieldError(emailInput);
    }

    if (messageInput.value.trim().length < 20) {
      showFieldError(messageInput, '문의 내용을 20자 이상 입력해 주세요.');
      firstInvalidInput ??= messageInput;
    } else {
      clearFieldError(messageInput);
    }


    if (!privacyInput.checked) {
      showFieldError(privacyInput, '개인정보 수집 및 이용에 동의해 주세요.');
      firstInvalidInput ??= privacyInput;
    } else {
      clearFieldError(privacyInput);
    }

    return firstInvalidInput;
  }

  // 사용자가 값을 다시 입력하면 기존 오류 안내를 바로 지웁니다.
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => clearFieldError(input));
  });
  privacyInput.addEventListener('change', () => clearFieldError(privacyInput));

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = '';
    formStatus.classList.remove('is-error');

    const firstInvalidInput = validateForm();

    if (firstInvalidInput) {
      formStatus.textContent = '입력 내용을 다시 확인해 주세요.';
      formStatus.classList.add('is-error');
      firstInvalidInput.focus();
      return;
    }

    formStatus.textContent = '문의 내용을 전송하고 있습니다.';
    submitButton.disabled = true;
    submitButton.textContent = '전송 중...';
    contactForm.submit();
  });
}
