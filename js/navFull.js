const navFull = document.getElementById('navFull');
const btnTrg = document.getElementById('btntrg')

btnTrg.addEventListener('click', function () {
    btnTrg.classList.toggle('active');
    navFull.classList.toggle('active');
});

navFull.addEventListener('click', function () {
    navFull.classList.remove('active');
    btnTrg.classList.remove('active');
})
