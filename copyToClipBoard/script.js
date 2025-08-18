const copyBtn = document.querySelector('.copy-btn');
const textarea = document.querySelector('textarea');

copyBtn.addEventListener('click', () => {
    textarea.select();
    document.execCommand("copy");
    copyBtn.innerHTML = "<i class='fa fa-check'></i>";
    copyBtn.style.backgroundColor = "#2DCDA7";
    copyBtn.style.color = "#fff";

    setTimeout(() => {
        document.getSelection().removeAllRanges();
        copyBtn.innerHTML = "<i class='fa fa-copy'></i>";
        copyBtn.style.backgroundColor = "";
        copyBtn.style.color = "";
    }, 2000);
});
