const titleAnimationWindow = document.querySelector('#title-animation');
const titleAnimationData = {
    container: titleAnimationWindow,
    renderer: 'svg',
    loop: 'false',
    autoplay: false,
    path: './assets/scene1/Scene_1a.json'
};

const titleAnimation = bodymovin.loadAnimation(titleAnimationData);
titleAnimation.addEventListener('DOMLoaded', onTitleAnimationDOMLoaded);


const titleTl = new TimelineMax();
function onTitleAnimationDOMLoaded(e) {
    titleTl.to({frame:0},3, {
        frame: titleAnimation.totalFrames - 1,
        onUpdate: function() {
            titleAnimation.goToAndStop(Math.round(this.target.frame), true)
        },
        ease: Linear.easeNone
    })
};

const jmAnimationWindow = document.querySelector('#jmPage');
const jmAnimationData = {
    container: jmAnimationWindow,
    renderer: 'svg',
    loop: 'false',
    autoplay: false,
    path: './assets/Scene_3a.json'
};

const jmAnimation = bodymovin.loadAnimation(jmAnimationData);
jmAnimation.addEventListener('DOMLoaded', onJMAnimationDOMLoaded);


const jmTl = new TimelineMax();
function onJMAnimationDOMLoaded(e) {
    jmTl.to({frame:0},3, {
        frame: jmAnimation.totalFrames - 1,
        onUpdate: function() {
            jmAnimation.goToAndStop(Math.round(this.target.frame), true)
        },
        ease: Linear.easeNone
    })
};


const scrollMagicAnimation = () => {
    const controller = new ScrollMagic.Controller();

    const pinTitleSlide = new ScrollMagic.Scene({
        triggerElement: '#titlePage',
        triggerHook: 0
    })
    .setPin('#titlePage', {pushFollowers: false})
    .setClassToggle('#titlePage', 'bring-forward')
    .addTo(controller);

    const titleSlideAnimation = new ScrollMagic.Scene({
        triggerElement: '#titlePage',
        triggerHook: 0,
        duration: '100%'
    })
    .setTween(titleTl)
    .addTo(controller);

    const revealNext = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0
    })
    .removeClassToggle('#titlePage', 'bring-forward')
    .setTween('#titlePage', {autoAlpha:0, ease: Power0.easeNone})
    .addTo(controller);

    const pinIntroSlide = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0,
        duration: '100%'
    })
    .setPin('#intro', {pushFollowers: true})
    .addTo(controller);

    const rePinIntroSlide = new ScrollMagic.Scene({
        triggerElement: '.note-page',
        triggerHook: 1,
        duration: '100%'
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);

    const introTl = new TimelineMax();
    introTl.from('#introTitle',2, {y:300})
    .from('#introTitle', 1,{opacity: 0, ease: Linear.noEase},'-=1')
    .from('#intro-subtitle-1',1, {y:300},'-=.25')
    .from('#intro-subtitle-1',1,{opacity: 0, ease: Linear.noEase},'-=.5')
    .from('#intro-subtitle-2',1, {y:300},'-=.25')
    .from('#intro-subtitle-2',1,{opacity: 0, ease: Linear.noEase},'-=.5')
    .from('#intro-subtitle-3',1, {y:300},'-=.25')
    .from('#intro-subtitle-3',1,{opacity: 0, ease: Linear.noEase},'-=.5');

    const introTitleReveal = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0
    })
    .setTween(introTl)
    .addTo(controller);

    const pinLastSlide = new ScrollMagic.Scene({
        triggerElement: '#last-slide',
        triggerHook: 0
    })
    .setPin('#last-slide', {pushFollowers: false})
    .setClassToggle('#last-slide', 'bring-forward')
    .addTo(controller);

    const revealLast = new ScrollMagic.Scene({
        triggerElement: '#husband-slide',
        triggerHook: 0
    })
    .removeClassToggle('#last-slide', 'bring-forward')
    .setTween('#last-slide', {autoAlpha:0, ease: Power0.easeNone})
    .addTo(controller);

    const pinHusbandSlide = new ScrollMagic.Scene({
        triggerElement: '#husband-slide',
        triggerHook: 0,
        duration: '25%'
    })
    .setPin('#husband-slide', {pushFollowers: true})
    .addTo(controller);

    const rePinHusbandSlide = new ScrollMagic.Scene({
        triggerElement: '#gift-prep',
        triggerHook: 1,
        duration: '75%'
    })
    .setPin('#husband-slide', {pushFollowers: false})
    .addTo(controller);

    const pinGiftPrepSlide = new ScrollMagic.Scene({
        triggerElement: '#gift-prep',
        triggerHook: 0,
        duration: '300%'
    })
    .setPin('#gift-prep', {pushFollowers: true})
    .addTo(controller);

    const giftTl = new TimelineMax();
    giftTl.from('#gp1',5, {y:300,opacity: 0, ease: Linear.noEase})
    .to('#gp1',5, {y:-300,opacity: 0, ease: Linear.noEase, delay: 3})
    .from('#gp2',5, {y:300,opacity: 0, ease: Linear.noEase})
    .to('#gp2',5, {y:-300,opacity: 0, ease: Linear.noEase, delay: 3})
    .from('#gp3',5, {y:300,opacity: 0, ease: Linear.noEase})
    .to('#gp3',5, {y:-300,opacity: 0, ease: Linear.noEase, delay: 3})
    .from('#gp4',5, {y:300,opacity: 0, ease: Linear.noEase})
    .to('#gp4',5, {y:-300,opacity: 0, ease: Linear.noEase, delay: 3})
    .from('#gp5',5, {y:300,opacity: 0, ease: Linear.noEase})
    .to('#gp5',5, {y:-300,opacity: 0, ease: Linear.noEase, delay: 3})
    .from('#gp6',5, {y:300,opacity: 0, ease: Linear.noEase})
    .to('#gp6',5, {y:-300,opacity: 0, ease: Linear.noEase, delay: 3})

    const giftReveal = new ScrollMagic.Scene({
        triggerElement: '#gift-prep',
        triggerHook: 0,
        duration: '300%'
    })
    .setTween(giftTl)
    .addTo(controller);

    const jmTitleReveal = new ScrollMagic.Scene({
        triggerElement: '#jmPage',
        triggerHook: 0
    })
    .setTween(jmTl)
    .addTo(controller);

    const pinJMSlide = new ScrollMagic.Scene({
        triggerElement: '#jmPage',
        triggerHook: 0,
        duration: '100%'
    })
    .setPin('#jmPage', {pushFollowers: true})
    .addTo(controller);
};


   

window.onload = () => {
    scrollMagicAnimation();
};