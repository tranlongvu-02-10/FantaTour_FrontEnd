function submitFeedback() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value;
    let rating = document.querySelector("input[name='rating']:checked")?.value || 0;
    let imageInput = document.getElementById("image-upload");
    
    if (!name || !comment) {
        alert("Vui lòng nhập tên và phản hồi!");
        return;
    }

    let feedbackContainer = document.getElementById("feedback-container");
    let feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");

    let feedbackHTML = `<strong>${name}</strong> <br> 
                        Đánh giá: ${"⭐".repeat(rating)} <br> 
                        <p>${comment}</p>`;

    if (imageInput.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function (e) {
            feedbackHTML += `<img src="${e.target.result}" alt="Hình ảnh phản hồi">`;
            feedbackItem.innerHTML = feedbackHTML;
            feedbackContainer.prepend(feedbackItem);
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        feedbackItem.innerHTML = feedbackHTML;
        feedbackContainer.prepend(feedbackItem);
    }

    // Reset form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("image-upload").value = "";
    document.querySelector("input[name='rating']:checked")?.checked = false;
    document.getElementById("image-preview").innerHTML = "";
}

// Xem trước hình ảnh
document.getElementById("image-upload").addEventListener("change", function(event) {
    const preview = document.getElementById("image-preview");
    preview.innerHTML = ""; // Xóa ảnh trước đó nếu có

    const file = event.target.files[0]; // Lấy file đã chọn
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.maxWidth = "200px";  // Điều chỉnh kích thước ảnh
            img.style.borderRadius = "5px";
            img.style.border = "1px solid #ccc";
            img.style.marginTop = "10px";
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
