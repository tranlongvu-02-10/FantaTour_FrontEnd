const menuInput = document.getElementById('navbar__menu-input');
  const menu = document.querySelector('.navbar__menu');

  // Click ra ngoài thì tự đóng menu
  document.addEventListener('click', function(e) {
    if (menuInput.checked && !menu.contains(e.target) && e.target.id !== 'navbar__menu-input') {
      menuInput.checked = false;
    }
  });

  // Di chuột ra ngoài menu thì tự đóng
  menu.addEventListener('mouseleave', function() {
    if (menuInput.checked) {
      menuInput.checked = false;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "./assets/img/background.jpg",
        "./assets/img/PuLuong.png",
        "./assets/img/WHENVIETNAM0124.jpg",
        "./assets/img/hang-son-doong.jpg"
    ];

    let currentIndex = 0;
    const searchSection = document.querySelector(".search");

    function changeBackground() {
        const nextIndex = (currentIndex + 1) % images.length;
        const nextImage = images[nextIndex];

        // Thêm lớp để trượt ảnh
        searchSection.style.backgroundImage = `url(${nextImage})`;
        searchSection.classList.add("slide-animation");

        setTimeout(() => {
            searchSection.classList.remove("slide-animation");
            currentIndex = nextIndex;
        }); 
    }

    setInterval(changeBackground, 10000); // Đổi ảnh mỗi 10 giây
});

  function showMessage(text, color = "green") {
    message.textContent = text;
    message.style.color = color;
    message.style.opacity = "1";

    setTimeout(() => {
        message.style.opacity = "0";
    }, 3000);
}

showMessage("Đã gửi yêu cầu thành công!");

function navigateToPage() {
  var select = document.getElementById("destinationSelect");
  var selectedValue = select.value;
  if (selectedValue) {
      window.location.href = selectedValue; // Chuyển hướng đến trang tương ứng
  }
}


//Hiệu ứng đánh chữ

