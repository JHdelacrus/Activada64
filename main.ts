let n = 0
input.onGesture(Gesture.Shake, function () {
    n = randint(1, 4)
    basic.showNumber(n)
    basic.pause(100)
    basic.clearScreen()
})
