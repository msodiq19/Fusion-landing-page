/* showcase button manipulation */
const btn1 = document.querySelector('.showcase-btn1');
const btn2 = document.querySelector('.showcase-btn2');

btn1.addEventListener('click',()=>{
    const current = document.querySelector(".current");
    current.classList.remove('current');
    btn1.classList.add("current");
})
btn2.addEventListener('click', () => {
    const current = document.querySelector(".current");
    current.classList.remove('current');
    btn2.classList.add("current");
})

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-links');

hamburger.addEventListener('click', animate);

function animate() {
    navList.classList.toggle('open')
    hamburger.classList.toggle('h-open')
}

/* testimonial manipulation */
const dots = document.querySelectorAll(".dot");
const customers = document.querySelectorAll('.customer');

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const now = document.querySelector('.now');
        now.classList.remove('now');

        customers.forEach((customer, index) => {
            if (customer.classList.contains('current')) {
                customer.classList.remove('current')
            }
            if (dot.classList.contains('dot1')) {
                dot.classList.add('now')
                if (index < 3) {
                    customer.classList.add('current');
                }
            }
            if (dot.classList.contains('dot2')) {
                dot.classList.add('now');
                if (index >= 3 && index < 6) {
                    customer.classList.add('current');
                }
            }
            if (dot.classList.contains('dot3')) {
                dot.classList.add('now')
                if (index >= 6 && index < 9) {
                    customer.classList.add('current');
                }
            }
            if (dot.classList.contains('dot4')) {
                dot.classList.add('now');
                if (index >= 9 && index < 12) {
                    customer.classList.add('current');
                }
            }

        })

    })
})