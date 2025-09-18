function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

// Закрытие при клике вне меню
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("myDropdown");
  const button = document.querySelector(".dropbtn");

  if (!dropdown.contains(e.target) && !button.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});


// 

    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');

    burger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

// 

    function toggleDropdown2() {
      document.getElementById("myDropdown2").classList.toggle("show2");
    }

    // закрытие при клике вне меню
    window.onclick = function(event2) {
      if (!event2.target.matches('.dropbtn2')) {
        let dropdowns = document.getElementsByClassName("dropdown-content2");
        for (let i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show2')) {
            openDropdown.classList.remove('show2');
          }
        }
      }
    };