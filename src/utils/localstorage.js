function setItemLocalStorage(data) {
  var dataLocalStorage = getItemLocalStorage();
  var dataLocalStorage2 = []
  if (dataLocalStorage) {
    data.map((item) => {
      dataLocalStorage.push(item.id);
    });

    localStorage.setItem("name", JSON.stringify(dataLocalStorage));
  } else {
    data.map((item) => {
        dataLocalStorage2.push(item.id);
      });
  
      localStorage.setItem("name", JSON.stringify(dataLocalStorage2));
  }
}

function getItemLocalStorage() {
  return JSON.parse(localStorage.getItem("name"));
}

function clearLocalStorage() {}

export { setItemLocalStorage, getItemLocalStorage, clearLocalStorage };
