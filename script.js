// Toggle Sidebar

let flag = 1;

let toggleSidebar = function () {
    let sidebar = document.querySelector(".sidebar");
    let sidebarUl = document.querySelector(".side-links");
    let sidebarUlA = document.querySelectorAll(".side-links li a");

    if (flag == 1) {
        sidebarUl.style.visibility = "visible";
        sidebar.style.display = "block";
        let a = sidebarUlA.length;
        for (let i = 0; i < a; i++) {
            sidebarUlA[i].style.opacity = "1";
        }
        flag = 0;
    }
    else if (flag == 0) {
        sidebarUl.style.visibility = "hidden";
        sidebar.style.display = "none";
        let a = sidebarUlA.length;
        for (let i = 0; i < a; i++) {
            sidebarUlA[i].style.opacity = "0";
        }
        flag = 1;
    }
}

let ham = document.querySelector(".hamburger");
ham.addEventListener('click', toggleSidebar);
