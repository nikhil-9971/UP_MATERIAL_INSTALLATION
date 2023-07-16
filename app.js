const roname = document.getElementById("roname");

roname.addEventListener("input", () => {
  roname.value = roname.value.toUpperCase();
});

const duremark = document.getElementById("DUREMARK");

duremark.addEventListener("input", () => {
  duremark.value = duremark.value.toUpperCase();
});

const atgproberequirment = document.getElementById("atgproberequirment");

atgproberequirment.addEventListener("input", () => {
  atgproberequirment.value = atgproberequirment.value.toUpperCase();
});

document.querySelectorAll('input[type = "number"]').forEach(input => {
  input.oninput = () => {
    if (input.value.length > input.maxLength)
      input.value = input.value.slice(0, input.maxLength);
  };
});
