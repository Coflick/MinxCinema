const form = document.getElementById("infoForm");
const storedInfo = document.getElementById("storedInfo");

// Hiển thị dữ liệu nếu đã lưu trong localStorage
function displayStoredInfo() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  if (name && email) {
    storedInfo.innerHTML = `
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
        `;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn form load lại trang

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Lưu vào localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  displayStoredInfo(); // Cập nhật hiển thị
});

// Gọi khi trang vừa load
displayStoredInfo();
