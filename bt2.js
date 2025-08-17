const form = document.getElementById("profileForm");
const profileDisplay = document.getElementById("profileDisplay");

// Lưu thông tin người dùng vào localStorage
function saveProfile(data) {
  localStorage.setItem("userProfile", JSON.stringify(data));
}

// Lấy thông tin từ localStorage
function loadProfile() {
  const stored = localStorage.getItem("userProfile");
  return stored ? JSON.parse(stored) : null;
}

// Hiển thị hồ sơ
function renderProfile(profile) {
  if (!profile) {
    profileDisplay.innerHTML = "<p>Chưa có hồ sơ nào được lưu.</p>";
    return;
  }

  profileDisplay.innerHTML = `
        <img src="${profile.avatar}" alt="Avatar" />
        <h3>${profile.name}</h3>
        <p><strong>Email:</strong> ${profile.email}</p>
        <p><strong>SĐT:</strong> ${profile.phone}</p>
        <p><strong>Địa chỉ:</strong> ${profile.address}</p>
      `;

  // Điền sẵn form nếu muốn cập nhật
  document.getElementById("name").value = profile.name;
  document.getElementById("email").value = profile.email;
  document.getElementById("phone").value = profile.phone;
  document.getElementById("address").value = profile.address;
  document.getElementById("avatar").value = profile.avatar;
}

// Xử lý khi gửi form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const profile = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    avatar: document.getElementById("avatar").value,
  };

  saveProfile(profile);
  renderProfile(profile);
});

// Hiển thị lại dữ liệu khi tải trang
const savedProfile = loadProfile();
renderProfile(savedProfile);
