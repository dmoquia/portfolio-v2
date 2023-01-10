export const eventHandler = (event, modal = null, str = String) => {
  event.addEventListener("click", () => {
    modal.style.display = str;
  });
};
