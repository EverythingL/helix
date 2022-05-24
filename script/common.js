document.addEventListener('DOMContentLoaded', (e) => {
    const $$ = (selector) => document.querySelector(selector);
    const tabList = document.querySelectorAll('.tab-link');
    const tabContentList = document.querySelectorAll('.tabs-content');



    tabList.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabList.forEach(btn => {
                btn.classList.remove('tab-link-active');
            })
            tabContentList.forEach(content => {
                content.classList.add('tabs-content-hidden');
            })
            e.target.classList.add('tab-link-active');
            const dataTab = e.target.dataset.tab;
            tabContentList[dataTab].classList.remove('tabs-content-hidden');
        })
    })

    console.log(tabList);
})