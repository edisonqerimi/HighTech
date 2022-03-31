

window.addEventListener('scroll', hideTitle, false);
window.addEventListener('resize', hideTitle, false);


function hideTitle(e) {
    if (window.scrollY >= 80 && window.innerWidth > 768) {
        document.querySelector('.nav-title').style.display = 'none'
    }
    else {
        document.querySelector('.nav-title').style.display = 'block'
    }
}

const searchInput = document.querySelector('.search-input');
const account = document.querySelector('.account-navbar');

document.querySelector('.search-item').onclick = (e) => {
    searchInput.classList.toggle('hidden');
    searchInput.focus();
};

document.querySelector('.profile').onmouseenter = () => {
    account.style.display = 'flex';
}
document.querySelector('.profile').onmouseleave = () => {
    account.style.display = 'none';
}

const sidebar = document.querySelector('#sidebar');

const showSidebar = document.getElementsByClassName('show-sidebar');

const length = showSidebar.length;

for (let i = 0; i < length; i++) {
    showSidebar[i].addEventListener('click', () => {
        sidebar.style.display = 'block';
    })
}


document.querySelector('.close').addEventListener('click', () => {
    sidebar.style.display = 'none';
})

if (JSON.parse(sessionStorage.getItem('banner-closed'))) {
    document.querySelector('.banner').style.display = 'none';
}

document.querySelector('.close-banner').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';
    sessionStorage.setItem('banner-closed', true);
})

window.addEventListener('resize', (e) => {
    if (window.innerWidth >= 768) {
        sidebar.style.display = 'none'
    }
    if (window.innerWidth < 768) {
        searchInput.classList.add('hidden')
    }
})

let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
const accountNav = document.querySelector('#account-items-nav');
const accountSide = document.querySelector('#account-items-side');

if (currentUser != null) {

    if (currentUser.role == 'admin') {
        accountNav.innerHTML = accountSide.innerHTML = `
                    <a class='account-icon' href='#'>
                        ${profileIcon}
                        <div>Account</div>
                    </a>
                    <a class='account-icon' href="./administration.html">
                        ${adminIcon}
                        <div>Admin</div>
                    </a>
                    <a class='account-icon' href="./logout.html">
                        ${logoutIcon}
                        <div>Log Out</div>
                    </a>
        `;
    }
    else {
        accountNav.innerHTML = accountSide.innerHTML = `
                <a class='account-icon' href='./profile.html'>
                    ${profileIcon}
                    <div>Account</div>
                </a>
                <a class='account-icon' href="./logout.html">
                    ${logoutIcon}
                    <div>Log Out</div>
                </a>
        `;
    }
}
