// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/*
//Movie Batch js
const selectAllCheckbox = document.querySelector('#select-all');
const checkboxItems = document.querySelectorAll('.checkbox-item');

selectAllCheckbox.addEventListener('change', () => {
    for (const checkboxItem of checkboxItems) {
        checkboxItem.checked = selectAllCheckbox.checked;


    };

});
*/

// 全選checkbox的click事件
$("#select-all").click(function () {
    // 如果全選被勾選
    if ($(this).prop("checked")) {
        // 勾選所有項目checkbox
        $(".checkbox-item").prop("checked", true);
    } else {
        // 取消勾選所有項目checkbox
        $(".checkbox-item").prop("checked", false);
    }
});

// checkbox的click事件
$(".checkbox-item").click(function () {
    // 如果所有項目checkbox都被勾選
    if ($(".checkbox-item:checked").length == $(".checkbox-item").length) {
        // 勾選全選checkbox
        $("#select-all").prop("checked", true);
    } else {
        // 取消勾選全選checkbox
        $("#select-all").prop("checked", false);
    }
});


//存放值
function show() {
    let obj = document.getElementsByName("checkboxs");
    const check_ids = [];
    for (i in obj) {
        if (obj[i].checked)
            check_ids.push(obj[i].value);
    }
    alert(`Are you sure you want to delete the selected movies? ${check_ids}`);
}