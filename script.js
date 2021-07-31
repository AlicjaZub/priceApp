let slide_bar = document.querySelector('#slide_bar');
let pageviews = document.querySelector('#pageviews');
let price_element = document.querySelector('#price');
let toggle_switch = document.querySelector('#toggle_switch');

slide_bar.addEventListener('input',function() {
    calculate()
})

toggle_switch.addEventListener('change', function() {
    calculate()
})

let calculate = function () {
    let result = calculatePriceViews(slide_bar.value, toggle_switch.checked)
    if (result.views === 1) {
        pageviews.innerHTML = result.views + 'M page views';
        price_element.innerHTML = '£' + result.price + ' per month';
} else {
        pageviews.innerHTML = result.views + 'k page views';
        price_element.innerHTML = '£' + result.price + ' per month';
    }
}

function calculatePriceViews(slide_bar, toggle_switch) {
    let price;
    let views;
    if (slide_bar < 20) {
        views = 10;
        price = 8;
    } else if (slide_bar < 40) {
        views = 50;
        price = 12;
    } else if (slide_bar < 60) {
        views = 100;
        price = 16;
    } else if (slide_bar < 90) {
        views = 500;
        price = 24;
    } else {
        views = 1;
        price = 36;
    }
    if (toggle_switch) {
        price = price * 0.75;
    }
    return {
        views: views,
        price: price
    }
}



