// Tính thời gian đích: 1 tuần 3 ngày 5 giờ 24 phút từ bây giờ
const now = new Date().getTime();
const countdownTime = now + (7 * 24 * 60 * 60 * 1000) + (3 * 24 * 60 * 60 * 1000) + (5 * 60 * 60 * 1000) + (24 * 60 * 1000);

// Cập nhật mỗi giây
const countdown = setInterval(function () {
  const currentTime = new Date().getTime();
  const distance = countdownTime - currentTime;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days").innerHTML = "000";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(3, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
  }
}, 1000);