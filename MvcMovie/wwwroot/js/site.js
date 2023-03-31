// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Movie Batch js
const selectAllCheckbox = document.querySelector('#select-all');
const checkboxItems = document.querySelectorAll('.checkbox-item');

selectAllCheckbox.addEventListener('change', () => {
    for (const checkboxItem of checkboxItems) {
        checkboxItem.checked = selectAllCheckbox.checked;


    };

});