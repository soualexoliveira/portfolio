'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="gallery"]')
const navPreviousButton = document.querySelector('[data-slide="previous-btn"]')
const navNextButton = document.querySelector('[data-slide="next-btn"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
let slideItems = document.querySelectorAll('[data-slide="item"]')
let controlButtons

const state = {
    startingPoint: 0,
    savedPosition: 0,
    currentPoint: 0,
    movement: 0,
    currentSlideIndex: 0
}

function translateSlide({ position }) {
    state.savedPosition = position
    slideList.style.transform = `translateX(${position}px)`
}

function getCenterPosition({ index }){
    const slideItem = slideItems[index]
    const slideWidth = slideItem.clientWidth
    const windowWidth = document.body.clientWidth
    const margin = (windowWidth - slideWidth) / 2.53
    const position = margin - (index * slideWidth)
    return position
}

function setVisibleSlide({ index, animate }) {
    if(index === 1 || index === slideItems.length - 2){
        index = state.currentSlideIndex
    }
    const position = getCenterPosition({ index })
    state.currentSlideIndex = index
    slideList.style.transition = animate === true ? 'transform .5s' : 'none'
    activeControlButton({ index })
    translateSlide({ position: position})
}

function nextSlide(){
    setVisibleSlide({ index: state.currentSlideIndex + 1, animate: true})
}

function previousSlide(){
    setVisibleSlide({ index: state.currentSlideIndex - 1, animate: true})
}

function createControlButtons() {
    slideItems.forEach(function(){
        const controlButton = document.createElement('button')
        controlButton.classList.add('slider-btn')
        controlButton.classList.add('fa-solid')
        controlButton.classList.add('fa-circle')
        controlButton.dataset.slide = 'controls-btn'
        controlsWrapper.append(controlButton)
    })
}

function activeControlButton({ index }){
    const slideItem = slideItems[index]
    const dataIndex = Number(slideItem.dataset.index)
    const controlButton = controlButtons[dataIndex]
    controlButtons.forEach(function(controlButtonItem) {
        controlButtonItem.classList.remove('active')
    })
    if(controlButton) controlButton.classList.add('active')
}

function creatSlideClones() {
    const firstSlide = slideItems[0].cloneNode(true)
    firstSlide.classList.add('slide-cloned')
    firstSlide.dataset.index = slideItems.length

    const secondSlide = slideItems[1].cloneNode(true)
    secondSlide.classList.add('slide-cloned')
    secondSlide.dataset.index = slideItems.length + 1

    const thirdSlide = slideItems[2].cloneNode(true)
    thirdSlide.classList.add('slide-cloned')
    thirdSlide.dataset.index = slideItems.length + 2

    const lastSlide = slideItems[slideItems.length - 1].cloneNode(true)
    lastSlide.classList.add('slide-cloned')
    lastSlide.dataset.index = -1

    const secondToLastSlide = slideItems[slideItems.length - 2].cloneNode(true)
    secondToLastSlide.classList.add('slide-cloned')
    secondToLastSlide.dataset.index = -2

    const thirdToLastSlide = slideItems[slideItems.length - 3].cloneNode(true)
    thirdToLastSlide.classList.add('slide-cloned')
    thirdToLastSlide.dataset.index = -3

    slideList.append(firstSlide)
    slideList.append(secondSlide)
    slideList.append(thirdSlide)
    slideList.prepend(lastSlide)
    slideList.prepend(secondToLastSlide)
    slideList.prepend(thirdToLastSlide)

    slideItems = document.querySelectorAll('[data-slide="item"]')
}

function onMouseDown(event, index) {
    const slideItem = event.currentTarget
    state.startingPoint = event.clientX
    state.currentPoint = event.clientX - state.savedPosition
    state.currentSlideIndex = index
    slideList.style.transition ='none'
    slideItem.addEventListener('mousemove', onMouseMove)
}

function onMouseMove(event) {
    state.movement = event.clientX - state.startingPoint
    const position = event.clientX - state.currentPoint
    translateSlide({ position })
}

function onMouseUp(event) {
    const slideItem = event.currentTarget
    if(state.movement < -75){
        nextSlide()
    } else if (state.movement > 75) {
        previousSlide()
    } else {
        setVisibleSlide({ index: state.currentSlideIndex, animate: true})
    }

    slideItem.removeEventListener('mousemove', onMouseMove)
}

function onControlButtonClick(index) {
    setVisibleSlide({ index: index + 3, animate: true })
}

function onSlideListTransitionEnd(){
    if(state.currentSlideIndex === slideItems.length - 3){
        setVisibleSlide({ index: 3, animate: false })
    }
    if(state.currentSlideIndex === 2){
        setVisibleSlide({ index: slideItems.length - 4, animate: false })
    }
}

function setListeners(){
    controlButtons = document.querySelectorAll('[data-slide="controls-btn"]')
    

    controlButtons.forEach(function(controlButton, index) {
        controlButton.addEventListener('click', function(event) {
            onControlButtonClick(index)
        })
    })

    slideItems.forEach(function(slideItem, index) {
        slideItem.addEventListener('dragstart', function(event) {
            event.preventDefault()
        })
        slideItem.addEventListener('mousedown', function(event) {
            onMouseDown(event, index)
        })
        slideItem.addEventListener('mouseup', onMouseUp)
        
    })

    navNextButton.addEventListener('click', nextSlide)
    navPreviousButton.addEventListener('click', previousSlide)
    slideList.addEventListener('transitionend', onSlideListTransitionEnd)
}

function initSlider() {
    createControlButtons()
    creatSlideClones()
    setListeners()
    setVisibleSlide({ index: 3, animate: true })
}

initSlider()
