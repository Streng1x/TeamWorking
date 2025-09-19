function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function toggleDropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

// обработчик для первого меню
window.addEventListener("click", (event) => {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});

// обработчик для второго меню
window.addEventListener("click", (event) => {
  if (!event.target.matches('.dropbtn_2')) {
    let dropdowns2 = document.getElementsByClassName("dropdown-content2");
    for (let i = 0; i < dropdowns2.length; i++) {
      let openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show2')) {
        openDropdown2.classList.remove('show2');
      }
    }
  }
});

// 

    // const burger = document.getElementById('burger');
    // const menu = document.getElementById('menu');

    // burger.addEventListener('click', () => {
    //   menu.classList.toggle('active');
    // });

    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
      burger.classList.toggle('active'); // 🔥 переключаем крестик
    });


// 