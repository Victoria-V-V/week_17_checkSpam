const commentButton = document.querySelector('.btn');
commentButton.addEventListener("click", checkSpam);

function checkSpam() {
    //укажем дату комментария
    const clickTime = new Date();
    const dataComment = document.querySelector('.dataComment');
    dataComment.innerHTML = (`${clickTime.getDate()}.${clickTime.getMonth()}.${clickTime.getFullYear()} ${clickTime.getHours()}:${clickTime.getMinutes()}`);


    //проверим спам
    const comment = document.querySelector('.userText').value;
    const checkedComment = comment.replace(/viagra|xxx/ig, "***");

    const submittedComment = document.querySelector('.submittedComment');
    submittedComment.innerHTML = checkedComment;
}