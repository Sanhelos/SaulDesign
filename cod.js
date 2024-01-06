	const tabNavItems = document.querySelectorAll('[data-tab-link]'); // navigator
    const tabItems = document.querySelectorAll('[data-tab-block]'); // information
    document.addEventListener('click', function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest('[data-tab-link]')) {
    tabNavItems.forEach((tabNavItems, index)=>{
        if (tabNavItems.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItems.classList.remove('active');
        }
        if (tabNavItems === targetElement) {
        newActiveIndex = index;
        }

    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active')
    }
    })