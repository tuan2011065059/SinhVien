
import { SinhVien } from "../modules/SinhVien.js";

let arrSinhVien = [];

// Thêm sinh viên
document.getElementById('btnThemSinhVien').addEventListener('click', function (e) {
    e.preventDefault();
    let arrInput = document.querySelectorAll('.form-control');
    let sv = new SinhVien();
    for (let input of arrInput) {
        let id = input.id;
        let value = input.value;
        sv[id] = value;
    }
    arrSinhVien.push(sv);
    renderTableSinhVien(arrSinhVien); // Gọi lại để cập nhật giao diện
});

// Hàm render bảng sinh viên
window.renderTableSinhVien = function (target) {
    let htmlString = '';
    for (let sinhVien of target) {
        htmlString += `
    <tr>
        <td>${sinhVien.maSinhVien}</td>
        <td>${sinhVien.tenSinhVien}</td>
        <td>${sinhVien.soDienThoai}</td>
        <td>${sinhVien.email}</td>
        <td>${sinhVien.diemToan}</td>
        <td>${sinhVien.diemLy}</td>
        <td>${sinhVien.diemHoa}</td>
        <td>${sinhVien.diemRenLuyen}</td>
        <td>${sinhVien.loaiSinhVien}</td>
        <td>
            <button class="btn btn-danger text-white rounded" onclick="xoa('${sinhVien.maSinhVien}')">Xoá</button>
        </td>
        <td>
            <button class="btn btn-primary text-white rounded" onclick="chinhSua('${sinhVien.maSinhVien}')">Chỉnh sửa</button>
        </td>
    </tr>`;
    }
    document.getElementById('tblSinhVien').innerHTML = htmlString;
};

// Xóa sinh viên
window.xoa = function (maSinhVien) {
    let indexDelete = arrSinhVien.findIndex(sinhVien => sinhVien.maSinhVien === maSinhVien);
    if (indexDelete !== -1) {
        arrSinhVien.splice(indexDelete, 1); // Xóa phần tử khỏi mảng
        renderTableSinhVien(arrSinhVien); // Render lại bảng
    }
};

// Chỉnh sửa sinh viên
window.chinhSua = function (maSinhVien) {
    let svEdit = arrSinhVien.find(sinhVien => sinhVien.maSinhVien === maSinhVien);
    if (svEdit) {
        for (let key in svEdit) {
            let input = document.querySelector(`#${key}`);
            if (input) {
                input.value = svEdit[key]; // Gán giá trị vào các ô input
            }
        }
    }
};

// Lưu thông tin sau khi chỉnh sửa
document.querySelector('#btnLuuThongTin').onclick= function (e) {
    e.preventDefault();

    // Tạo object chứa thông tin mới từ các input
    let svEdit = new SinhVien();
    let arrInput = document.querySelectorAll('.form-control'); // Cập nhật selector
    for (let input of arrInput) {
        let id = input.id;
        let value = input.value;
        svEdit[id] = value;
    }

    // Tìm sinh viên trong mảng để cập nhật thông tin
    let svTrongMang = arrSinhVien.find(sv => sv.maSinhVien === svEdit.maSinhVien);

    if (svTrongMang) {
        for (let key in svTrongMang) {
            if (svEdit.hasOwnProperty(key)) {
                svTrongMang[key] = svEdit[key];
            }
        }

        // Cập nhật lại giao diện
        renderTableSinhVien(arrSinhVien);
    }
};






































// import { SinhVien } from "../modules/SinhVien.js";

// let arrSinhVien = [];
// document.getElementById('btnThemSinhVien').addEventListener('click', function (e) {
//     e.preventDefault();
//     let arrInput = document.querySelectorAll('.form-control');
//     let sv = new SinhVien();
//     for (let input of arrInput) {
//         let id = input.id
//         let value = input.value
//         sv[id] = value
//     }
//     arrSinhVien.push(sv);
//     randerTableSinhVien(arrSinhVien);
// })
// window.randerTableSinhVien = function (target) {
//     let htmlString = '';
//     for (let sinhVien of target) {
//         htmlString += `
//     <tr>
//         <th>${sinhVien.maSinhVien}</th>
//         <th>${sinhVien.tenSinhVien}</th>
//         <th>${sinhVien.soDienThoai}</th>
//         <th>${sinhVien.email}</th>
//         <th>${sinhVien.diemToan}</th>
//         <th>${sinhVien.diemLy}</th>
//         <th>${sinhVien.diemHoa}</th>
//         <th>${sinhVien.diemRenLuyen}</th>
//         <th>${sinhVien.loaiSinhVien}</th>
//         <th><button class ="btn btn-danger text-white rounded" onclick=xoa("${sinhVien.maSinhVien}")>xoá</button></th>
//         <th><button class ="btn btn-primary text-white rounded" onclick=chinhSua("${sinhVien.maSinhVien}")>chỉnh sửa</button></th>
        
//     </tr>
//         `
//     }
//     document.getElementById('tblSinhVien').innerHTML = htmlString;
// }
// window.xoa = function (maSinhVien) {
//     let indexDelete = arrSinhVien.findIndex(sinhVien => sinhVien.maSinhVien === maSinhVien)
//     if (indexDelete !== undefined) {
//         arrSinhVien.splice(indexDelete, 1)
//         randerTableSinhVien(arrSinhVien);
//     }
// }
// window.chinhSua = function (maSinhVien) {
//     let inDexUpdate = arrSinhVien.find(sinhVien => sinhVien.maSinhVien === maSinhVien)
//     if (inDexUpdate !== undefined) {
//         for (let key in inDexUpdate) {
//             document.querySelector(`#${key}`).value = inDexUpdate[key];
//         }


//     }
// }

// document.querySelector('#btnLuuThongTin').onclick = function (e) {
//     //Lấy tất cả thông tin từ giao diện đưa vào object
//     let svEdit = new SinhVien(); // {maSinhVien: '1', tenSinhVien: 'b update',}
//     let arrInput = document.querySelectorAll('#frmSinhVien.form-control');
//     for (let input of arrInput) {
//         let id = input.id;
//         let value = input.value;
//         svEdit[id] = value
//     }
//     console.log('svEdit', svEdit);

//     // Tìm sinh viên trong mảng dựa trên mã sinh viên và cập nhật thông tin
// let svTrongMang = arrSinhVien.find(sv => sv.maSinhVien === svEdit.maSinhVien);

// if (svTrongMang) {
//     // Duyệt qua các thuộc tính của `svEdit` để cập nhật `svTrongMang`
//     for (let key in svEdit) {
//         if (svEdit.hasOwnProperty(key)) {
//             svTrongMang[key] = svEdit[key];
//         }
//     }

//     // Sau khi cập nhật xong, hiển thị lại danh sách sinh viên
//     renderTableSinhVien(arrSinhVien);
// }

// }
