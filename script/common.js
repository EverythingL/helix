document.addEventListener('DOMContentLoaded', (e) => {
    const $$ = (selector) => document.querySelector(selector);
    const tabList = document.querySelectorAll('.tab-link');
    const tabContentList = document.querySelectorAll('.tabs-content');
    const faqItemList = document.querySelectorAll('.faq-item-visible');


    if (window.outerWidth > 810) {
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
    }

    faqItemList.forEach(faq => {
        faq.addEventListener('click', (e) => {
            // e.target.closest('li').classList.toggle('faq-item-hide'); 
            if (faq.closest('li').classList.contains('faq-item-hide')) {
                faqItemList.forEach(faq => {
                    faq.closest('li').classList.add('faq-item-hide');
                })
            }
            e.target.closest('li').classList.toggle('faq-item-hide');
        })
    })


    if (window.outerWidth < 810) {

        $('.tabs-content-wrapper').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1.02,
            // centerMode: true,
            // variableWidth: true
        });


        $$('.header-nav_burger').addEventListener('click', (e) => {
            $$('.header-nav_list').classList.toggle('open-menu')
            e.target.closest('button').classList.toggle('burger-open')
        })

    }

})