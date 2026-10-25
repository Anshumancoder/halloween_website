const surpriseButton = document.querySelector("#surprise-button");
const surpriseDialog = document.querySelector("#surprise-dialog");
const closeDialogButton = document.querySelector("#close-dialog");
const enjoyButton = document.querySelector("#enjoy-button");



surpriseButton.addEventListener("click", () => {
    surpriseDialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
    surpriseDialog.close();
});

enjoyButton.addEventListener("click", () => {
    surpriseDialog.close();
});

surpriseDialog.addEventListener("click", (event) => {
    if (event.target === surpriseDialog) {
        surpriseDialog.close();
    }
});
