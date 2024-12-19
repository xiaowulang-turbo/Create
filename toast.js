// toast 提示
function toast() {
  // success
  function success(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add("toast-success");
    toast.innerHTML = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }

  // error
  function error(error) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add("toast-error");
    toast.innerHTML = error;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }

  return {
    success,
    error,
  };
}

const toastInstance = toast();

export default toastInstance;
