import { SinhVien } from "./SinhVien.js"
document.getElementById('btnThemSinhVien').addEventListener('click', function(e){
    e.preventDefault();
    let sv = new SinhVien();
    let arrInput =  document.querySelectorAll('.form-control');
    for(let input of arrInput){
        let id = input.id
        let value = input.value
        sv[id] = value
    }
    let hienThi = `
    <tr>
        <th>${sv.maSinhVien}</th>
        <th>${sv.tenSinhVien}</th>
        <th>${sv.soDienThoai}</th>
        <th>${sv.email}</th>
        <th>${sv.diemToan}</th>
        <th>${sv.diemLy}</th>
        <th>${sv.diemHoa}</th>
        <th>${sv.diemRenLuyen}</th>
        <th>${sv.loaiSinhVien}</th>
        <th><button class ="btn btn-danger text-white rounded" onclick=xoa(event)>xoá</button></th>
        
    </tr>
    `
    document.getElementById('tblSinhVien').innerHTML += hienThi;
})
window.xoa = function(event){
    event.target.closest('tr').remove();
}






































// document.getElementById('btnThemSinhVien').addEventListener('click', function(e){
//     e.preventDefault();
//     let sv = new SinhVien();
//     let arrInput = document.querySelectorAll('.container .row .form-control');
//     for(let input of arrInput){
//         let id = input.id
//         let value = input.value
//         sv[id] = value
//     }
//     let hienThi = `
//     <tr>
//         <th>${sv.maSinhVien}</th>
//         <th>${sv.tenSinhVien}</th>
//         <th>${sv.soDienThoai}</th>
//         <th>${sv.email}</th>
//         <th>${sv.diemToan}</th>
//         <th>${sv.diemLy}</th>
//         <th>${sv.diemHoa}</th>
//         <th>${sv.diemRenLuyen}</th>
//         <th>${sv.loaiSinhVien}</th>
//         <th><button class ="btn btn-danger text-white rounded" onclick=xoa(event)>xoá</button></th>
        
//     </tr>
//     `
//     document.getElementById('tblSinhVien').innerHTML += hienThi
// })
// window.xoa = function(event){
//     event.target.closest('tr').remove();
// }