document.addEventListener('DOMContentLoaded', function () {

    let elements = {
        'h1': document.getElementsByTagName('h1').item(0),
        'leftCell': document.getElementsByClassName('leftCell').item(0),
        'middleCell': document.getElementsByClassName('middleCell').item(0),
        'rightCell': document.getElementsByClassName('rightCell').item(0),

        'grid': document.getElementsByClassName('grid').item(0),
        'body': document.body,

        'portfolioButton': document.getElementById('portfolioButton'),
        'aboutButton': document.getElementById('aboutButton'),
        'contactButton': document.getElementById('contactButton'),
        'calendarButton': document.getElementById('calendarButton'),
        'prepareButton': document.getElementsByClassName('buttonRight').item(0)
    }

    let valuesCSS = {
        'invisible': '0',
        'visible': '1'
    }

    let transitionsDurations = {
        'pageAppear': 400,
        'cellAppear': 200,

        'pageDisappear': 300,
        'pageDisappearDelay': 100
    }

    function appear() {
        elements.middleCell.style.opacity = valuesCSS.visible;
        elements.h1.style.opacity = valuesCSS.visible;
        setTimeout(function () {
            elements.leftCell.style.opacity = valuesCSS.visible;
            elements.rightCell.style.opacity = valuesCSS.visible;
        }, transitionsDurations.cellAppear);
    }

    function relocate(address) {
        setTimeout(function () {
            location.href = address;
        }, transitionsDurations.pageDisappear);
    }

    function disappear(address) {
        elements.leftCell.style.opacity = valuesCSS.invisible;
        elements.rightCell.style.opacity = valuesCSS.invisible;
        setTimeout(function () {
            elements.middleCell.style.opacity = valuesCSS.invisible;
            elements.h1.style.opacity = valuesCSS.invisible;

            relocate(address);
        }, transitionsDurations.pageDisappearDelay);
    }

    elements.portfolioButton.addEventListener('click', function () {
        const portfolioAddress = 'portfolio.html';
        disappear(portfolioAddress);
    });

    elements.aboutButton.addEventListener('click', function () {
        const aboutAddress = 'about.html';
        disappear(aboutAddress);
    });

    elements.contactButton.addEventListener('click', function () {
        const contactAddress = 'contact.html';
        disappear(contactAddress);
    });

    elements.calendarButton.addEventListener('click', function () {
        const contactAddress = 'calendar.html';
        disappear(contactAddress);
    });

    elements.prepareButton.addEventListener('click', function () {
        const prepareAddress = 'prepare.html';
        disappear(prepareAddress);
    });

    setTimeout(appear, transitionsDurations.pageAppear);

});