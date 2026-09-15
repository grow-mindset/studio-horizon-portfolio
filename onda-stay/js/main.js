const header = document.querySelector("header");
const menuButton = header.querySelector("button[aria-controls='main-navigation']");
const navigation = document.querySelector("#main-navigation");
const navigationLinks = navigation.querySelectorAll("a");
const reservationForm = document.querySelector("#reservation form");
const checkInInput = document.querySelector("#check-in");
const nameInput = document.querySelector("#name");
const formStatus = document.querySelector("#form-status");

document.body.classList.add("js-enabled");

function updateMenu(isOpen) {
  header.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  menuButton.textContent = isOpen ? "닫기" : "메뉴";
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  updateMenu(!isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => updateMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && header.classList.contains("menu-open")) {
    updateMenu(false);
    menuButton.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    updateMenu(false);
  }
});

function getToday() {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;

  return new Date(now - timezoneOffset).toISOString().split("T")[0];
}

checkInInput.min = getToday();

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!reservationForm.checkValidity()) {
    reservationForm.reportValidity();
    return;
  }

  if (checkInInput.value < getToday()) {
    formStatus.textContent = "체크인은 오늘 이후 날짜로 선택해 주세요.";
    checkInInput.focus();
    return;
  }

  const guestName = nameInput.value.trim();
  formStatus.textContent = `${guestName}님, 문의가 접수되었습니다. 영업일 기준 1일 안에 예약 가능 여부를 안내해 드릴게요.`;
  reservationForm.reset();
  checkInInput.min = getToday();
});
