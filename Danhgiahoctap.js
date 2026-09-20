// Lấy các phần tử cần thiết trên trang
const inputTen = document.getElementById("studentName");
const inputDiem = document.getElementById("score");
const btnXem = document.getElementById("danhgia");
const hopKetQua = document.getElementById("hoctap");

// Phân loại năng lực học tập 
function phanLoaiHocLuc(diem) {
    if (diem >= 8.5) {
        return { xepLoai: "Giỏi", lop: "gioi" };
    } else if (diem >= 7) {
        return { xepLoai: "Khá", lop: "kha" };
    } else if (diem >= 5) {
        return { xepLoai: "Trung bình", lop: "trungbinh" };
    } else {
        return { xepLoai: "Yếu", lop: "yeu" };
    }
}

// Xử lý khi bấm nút "Xem kết quả"
btnXem.addEventListener("click", xemKetQua);

// Xử lý khi bấm phím Enter trong ô nhập điểm
inputDiem.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        xemKetQua();
    }
});

// Hàm xử lý chính: đọc dữ liệu, kiểm tra và hiển thị kết quả
function xemKetQua() {

    const ten = inputTen.value.trim();
    const diem = parseFloat(inputDiem.value);

    // Kiểm tra dữ liệu nhập vào (validate)
    if (ten === "") {
        hienThiKetQua("Vui lòng nhập họ tên sinh viên.", "loi");
        return;
    }

    if (isNaN(diem) || diem < 0 || diem > 10) {
        hienThiKetQua("Vui lòng nhập điểm hợp lệ (từ 0 đến 10).", "loi");
        return;
    }

    // Phân loại học lực
    const ketQua = phanLoaiHocLuc(diem);

    // In kết quả động ra màn hình
    const noiDung = `
        <strong>Họ tên:</strong> ${ten}<br>
        <strong>Điểm:</strong> ${diem}<br>
        <strong>Xếp loại:</strong> ${ketQua.xepLoai}
    `;

    hienThiKetQua(noiDung, ketQua.lop);
}

// Hàm hiển thị nội dung vào khung result, kèm class màu tương ứng
function hienThiKetQua(noiDung, lopCss) {
    hopKetQua.innerHTML = noiDung;
    hopKetQua.className = "hoctap-box show " + lopCss;
}
