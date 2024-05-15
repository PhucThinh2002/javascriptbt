//Bài 1
document.querySelector(".btn-success").onclick = function () {
  let soNgayLam = document.getElementById("soNgayLam").value;
  let Luong1Ngay = document.getElementById("TienLuong1Ngay").value;
  let tienLuong = Luong1Ngay * soNgayLam;
  document.getElementById(
    "ketQua1"
  ).innerHTML = `Lương nhân viên là: ${tienLuong.toLocaleString()} VND`;
};

//Bài 2
document.getElementById("tinhTrungBinh").onclick = function () {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);
  let number3 = parseFloat(document.getElementById("number3").value);
  let number4 = parseFloat(document.getElementById("number4").value);
  let number5 = parseFloat(document.getElementById("number5").value);

  let trungBinh = (number1 + number2 + number3 + number4 + number5) / 5;
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Giá trị trung bình là: ${trungBinh}`;
};

//Bài 3
document.getElementById("btnQuyDoi").onclick = function () {
  let soTienUSD = parseFloat(document.getElementById("soTienUSD").value);
  let tyGia = 23000;

  let soTienVND = soTienUSD * tyGia || 0;

  document.getElementById(
    "ketQua3"
  ).innerHTML = `Số tiền sau quy đổi là: ${soTienVND.toLocaleString()} VND`;
};

//Bài 4
document.getElementById("btnTinh").onclick = function () {
  let chieuDai = parseFloat(document.getElementById("chieuDai").value);
  let chieuRong = parseFloat(document.getElementById("chieuRong").value);

  let dienTich = chieuDai * chieuRong;
  let chuVi = 2 * (chieuDai + chieuRong);

  document.getElementById("ketQua4").innerHTML = `
        Diện tích: ${dienTich} cm<sup>2</sup> <br>
        Chu vi: ${chuVi} cm
    `;
};

//Bài 5
document.getElementById("btnTinhTong").onclick = function () {
  let soHaiChuSo = document.getElementById("soHaiChuSo").value;

  // Tách chữ số hàng đơn vị và hàng chục
  let hangDonVi = soHaiChuSo % 10;
  let hangChuc = Math.floor(soHaiChuSo / 10);

  // Tính tổng hai chữ số
  let tong = hangDonVi + hangChuc;

  document.getElementById("ketQua5").innerHTML = `Tổng hai chữ số là: ${tong}`;
};
