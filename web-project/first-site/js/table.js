//新增
function addRow(){
  var table=document.getElementById("table");
  //获取插入位置
  var length=table.rows.length;
  //插入行节点
  var newRow=table.insertRow(length);
  //插入列节点对象
  var nameEle=newRow.insertCell(0);
  var phoneEle=newRow.insertCell(1);
  var opEle=newRow.insertCell(2);

  nameEle.innerHTML="未命名";
  phoneEle.innerHTML="无联系方式";
  opEle.innerHTML="<button onclick='editRow(this)'>编辑</button><button onclick='deleteRow(this)'>删除</button>";
}

//删除
function deleteRow(button){
  var row=button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//编辑
function editRow(button){
  var row=button.parentNode.parentNode;
  var name=row.cells[0];
  var phone=row.cells[1];

  var inputName=prompt("请输入名字：");
  var inputPhone=prompt("请输入联系方式：");

 
  name.innerHTML=inputName;
  phone.innerHTML=inputPhone;
}