var currentIndex;
var previousIndex;
const tabSelector = ".tab";
const swatchSelector = ".swatch";
const activeTabClass = "active-tab";
const activeSwatchClass = "active-swatch";
const hiddenClass = "hidden";
const guitarImage = "#guitarImage";
const gardeningCarousel = "#gardeningCarousel";
const grillImage = "#grillImage";
const drawingCarousel = "#drawingCarousel";

function checkActive(selector) {
    return $(selector).hasClass(activeTabClass);
}

function addActive(selector) {
    $(selector).addClass(activeTabClass);
    $(selector.querySelector(swatchSelector)).addClass(activeSwatchClass);
}

function removeActive(selector) {
    $(selector).removeClass(activeTabClass);
    $($(selector)[previousIndex].querySelector(swatchSelector)).removeClass(activeSwatchClass);
}

function showDetails(selector) {
    $(".detail h3").text(hobbyName[`${selector}`]);
    $(".detail p").text(hobbyText[`${selector}`]);

    switch (selector) {
        case "guitar":
            $(guitarImage).removeClass(hiddenClass);
            $(gardeningCarousel).addClass(hiddenClass);
            $(grillImage).addClass(hiddenClass);
            $(drawingCarousel).addClass(hiddenClass);
            break;
        case "gardening":
            $(guitarImage).addClass(hiddenClass);
            $(gardeningCarousel).removeClass(hiddenClass);
            $(grillImage).addClass(hiddenClass);
            $(drawingCarousel).addClass(hiddenClass);
            break;
        case "grill":
            $(guitarImage).addClass(hiddenClass);
            $(gardeningCarousel).addClass(hiddenClass);
            $(grillImage).removeClass(hiddenClass);
            $(drawingCarousel).addClass(hiddenClass);
            break;
        case "drawing":
            $(guitarImage).addClass(hiddenClass);
            $(gardeningCarousel).addClass(hiddenClass);
            $(grillImage).addClass(hiddenClass);
            $(drawingCarousel).removeClass(hiddenClass);
            break;
        default:
            break;
    }
}

$(tabSelector).click(function () {
    previousIndex = currentIndex;
    currentIndex = $(tabSelector).index(this);

    // check if the currently clicked tab button is active
    if (checkActive(this)) {
        return;
    }

    // check if any of the other tab buttons are active
    if (checkActive(tabSelector)) {
        removeActive(tabSelector);
    }

    // make the currently clicked tab button active
    addActive(this);
    showDetails($(this).attr("id"));
});

const hobbyName = {
    guitar: "Playing guitar",
    gardening: "Gardening",
    grill: "A fresh one: Grill & BBQ",
    drawing: "A neglected one: Drawing",
}

const hobbyText = {
    guitar: "I always thought it couldn't be that hard - you only need to hold down the strings at the right place at the right time on the neck and just strum. Yeah... it could be true if it wouldn't be a little more complex than that. When I get my first acoustic in high school, I quickly learned it's not as easy as it seems. But that didn't stop me to practice and get better. Now I'm playing the most famous songs of my favourite band on electric guitars (yes, I already have 2, and already put the 3rd one on my bucket list).",
    gardening: "Every household need some green colour, and that's not necessarily the paint on the wall. One of the few things I'm really passionate about nowadays is to grow my own chilis. I potted 4 different kind (Jalapeño, Habañero, Tabasco and Cayenne) at spring, and they are still growing surprisingly fast. Hopefully soon I can taste the peppers for the first time.",
    grill: "Probably there is a point in every men's life when they decide they want to cook. Definitely not in the kitchen, and definitely not cookies... Instead in the open, mostly meat, and strictly on fire. For me, this point has just arrived with the summer. Although I'm still at the very beginning of an experimental phase, I already had a lot of positive feedback about the food I made.",
    drawing: "I used to draw relatively a lot, from the beginning of my high school years until the end of university. Unfortunately, as time went by, this habit slowly vanished. However, I still find joy in watching these old drawings, and now I'm happy to share some of them with you:",
}