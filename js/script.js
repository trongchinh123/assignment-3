/* email */
function handleSubmit() {
  // Lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLowerCase();

  // Lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");

  // Điều kiện để là một email (cải thiện RegEx)
  const checkMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Dùng match để kiểm tra với email vừa nhập
  const checkEmail = emailValue.match(regex);

  // Lấy phần chứa thông tin user
  const sectionContent = document.querySelector("#info .section-content");

  // Lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");

  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}
/*view more */
function handleOnMouseOver(element) {
  // Kiểm tra xem phần tử có tồn tại không
  if (!element) {
    console.warn("Phần tử không tồn tại.");
    return;
  }

  // Tìm phần tử con với class '.view-more'
  const viewMore = element.querySelector(".view-more");
  if (viewMore) {
    viewMore.style.display = "inline-block";
  } else {
    console.warn("Không tìm thấy phần tử '.view-more' trong phần tử cha.");
  }
}

function handleOnMouseOut(element) {
  // Kiểm tra xem phần tử có tồn tại không
  if (!element) {
    console.warn("Phần tử không tồn tại.");
    return;
  }

  // Tìm phần tử con với class '.view-more'
  const viewMore = element.querySelector(".view-more");
  if (viewMore) {
    // Ẩn nút 'view-more' khi chuột rời khỏi phần tử chứa nội dung
    viewMore.style.display = "none";
  } else {
    console.warn("Không tìm thấy phần tử '.view-more' trong phần tử cha.");
  }
}

function handleViewMore(button) {
  // Tìm phần tử cha với class 'parent'
  const parentElement = button.closest(".parent");
  if (!parentElement) {
    console.warn("Không tìm thấy phần tử cha với class 'parent'.");
    return;
  }

  // Tìm tất cả các phần tử có class 'section-content'
  const sectionContent = parentElement.querySelectorAll(".section-content");
  if (button.classList.contains("view-more")) {
    sectionContent.forEach((content) => {
      content.style.display = "block";
    });
    button.classList.remove("view-more");
    button.classList.add("less-more");
    button.innerHTML = "Less more";
  } else if (button.classList.contains("less-more")) {
    sectionContent.forEach((content) => {
      content.style.display = "none";
    });
    button.classList.remove("less-more");
    button.classList.add("view-more");
    button.innerHTML = "View more";
  }
}
