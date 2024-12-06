document.addEventListener("DOMContentLoaded", () => {

  const navLogoItems = document.querySelectorAll(".nav-logo img");

  navLogoItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const targetClass = item.className.replace("-logo", "-main-logo");
      const targetElement = document.querySelector(`.${targetClass}`);

      if (targetElement) {
        // 대상 요소의 위치 계산
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition - 110;

        smoothScrollTo(offsetPosition, 800);
      } else {
        console.warn(`Element with class '${targetClass}' not found!`);
      }
    });
  });

  // 스크롤을 부드럽게 이동시키는 함수
  function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // 부드러운 애니메이션을 위한 ease 함수 (easeInOutQuad)
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const mainLogo = document.querySelector(".main-logo"); 
  const targetElement = document.querySelector("#firstpage");
  const navBarHeight = 110;

  if (mainLogo && targetElement) {
    mainLogo.addEventListener("click", (event) => {
      event.preventDefault(); 

      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navBarHeight;

      smoothScrollTo(targetPosition, 1000);
    });
  } else {
    console.warn("main-logo 또는 #firstpage 요소를 찾을 수 없습니다.");
  }

  function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Ease-In-Out-Quad easing 함수
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const posters = document.querySelectorAll('.HowSweet-img-box > img');

  posters.forEach(poster => {
      const overlay = poster.querySelector('.overlay');
      
      //회전 효과
      poster.addEventListener('mousemove', (e) => {
          const rect = poster.getBoundingClientRect();
          const x = e.clientX - rect.left; 
          const y = e.clientY - rect.top; 

          // 회전 효과
          const rotateY = ((x / rect.width) - 0.5) * 40;
          const rotateX = ((y / rect.height) - 0.5) * -40;
          poster.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      poster.addEventListener('mouseleave', () => {
          poster.style.transition = "transform 0.5s ease";
          poster.style.transform = 'perspective(1000px) rotate(0deg)';
      });

      if (overlay) {
          overlay.addEventListener('transitionend', () => {
              poster.style.transition = "transform 0.5s ease";
          });
      }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".HowSweet-EP-img");

  image.addEventListener("click", () => {
    if (image.classList.contains("clicked")) {
      image.classList.remove("clicked");
      image.classList.add("reverse");
      setTimeout(() => {
        image.classList.remove("reverse"); // 상태 초기화
      }, 500); // 애니메이션 종료 후 초기화
    } else {
      image.classList.add("clicked");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".introduction-logo");

  box.addEventListener("click", () => {
    window.open("https://namu.wiki/w/NewJeans", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box3");

  box.addEventListener("click", () => {
    window.open("https://namu.wiki/w/Get%20Up(NewJeans)", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box10");

  box.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=jOTfBlKSQYY", "_blank");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box14");

  box.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=ArmDp-zijuc", "_blank");
  });
});



const container = document.querySelector('.container');
const slides = Array.from(document.querySelectorAll('.slide'));
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// 현재 슬라이드 위치를 업데이트하는 함수
function updateSlides() {
  slides.forEach((slide, index) => {
    const offset = index - Math.floor(slides.length / 2); 
    const translateZ = -Math.abs(offset) * 100;
    const translateX = offset * 300;
    slide.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px)`;
    slide.style.opacity = 1 - Math.abs(offset) * 0.2;
  });
}

// 슬라이드를 뒤로 넘기기
prev.addEventListener('click', () => {
  const firstSlide = slides.shift();
  slides.push(firstSlide);
  updateSlides();
});

// 슬라이드를 앞으로 넘기기
next.addEventListener('click', () => {
  const lastSlide = slides.pop();
  slides.unshift(lastSlide);
  updateSlides();
});

// 초기 슬라이드 설정
updateSlides();

document.addEventListener("DOMContentLoaded", () => {
  const fullscreenButton = document.getElementById("fullscreen-button");

  if (fullscreenButton) {
    fullscreenButton.addEventListener("click", () => {
      const doc = document.documentElement;
      if (!document.fullscreenElement) {
        doc.requestFullscreen()
          .then(() => {
            console.log("전체화면 활성화");
          })
          .catch((err) => {
            console.error(`전체화면 전환 실패: ${err.message}`);
          });
      } else {
        document.exitFullscreen()
          .then(() => {
            console.log("전체화면 종료");
          })
          .catch((err) => {
            console.error(`전체화면 종료 실패: ${err.message}`);
          });
      }
    });
  } else {
    console.error("fullscreen-button 요소를 찾을 수 없습니다.");
  }
});

const audio = document.getElementById("track1");
const playStopButton = document.getElementById("play-stop-button");
const progressBar = document.getElementById("progress-bar");

playStopButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playStopButton.innerHTML = '<i class="fa-solid fa-stop"></i>';
    } else {
        audio.pause();
        audio.currentTime = 0;
        playStopButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});

// 오디오의 진행 상황에 맞춰 스크롤바 업데이트
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// 사용자가 스크롤바를 조정하면 오디오의 재생 위치 변경
progressBar.addEventListener("input", () => {
    const newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});


document.addEventListener("DOMContentLoaded", () => {
  const playStopButtons = document.querySelectorAll('[id^="play-stop-button"]');
  const progressBars = document.querySelectorAll('[id^="progress-bar"]');
  const audios = document.querySelectorAll('[id^="track"]');
  const slides = Array.from(document.querySelectorAll('.slide')); // 슬라이드 배열로 변환
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentIndex = 0; // 현재 슬라이드 인덱스

  // 모든 오디오 정지 함수
  const pauseAllAudios = () => {
    audios.forEach((audio, index) => {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
        playStopButtons[index].innerHTML = '<i class="fa-solid fa-play"></i>';
      }
    });
  };

  // 슬라이드 업데이트 함수
  const updateSlides = () => {
    slides.forEach((slide, index) => {
      slide.style.order = (index - currentIndex + slides.length) % slides.length;
    });
  };

  // prev 버튼 클릭
  prev.addEventListener('click', () => {
    pauseAllAudios(); // 음악 멈추기
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
    updateSlides();
  });

  // next 버튼 클릭
  next.addEventListener('click', () => {
    pauseAllAudios(); // 음악 멈추기
    currentIndex = (currentIndex + 1) % slides.length; 
    updateSlides();
  });

  // 오디오 제어
  playStopButtons.forEach((button, index) => {
    const audio = audios[index];
    const progressBar = progressBars[index];

    button.addEventListener("click", () => {
      pauseAllAudios(); // 다른 음악 정지
      if (audio.paused) {
        audio.play();
        button.innerHTML = '<i class="fa-solid fa-stop"></i>';
      } else {
        audio.pause();
        audio.currentTime = 0;
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
      }
    });

    audio.addEventListener("timeupdate", () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.value = progress;
    });

    progressBar.addEventListener("input", () => {
      const newTime = (progressBar.value / 100) * audio.duration;
      audio.currentTime = newTime;
    });
  });

  // 초기 슬라이드 상태 설정
  updateSlides();
});


















