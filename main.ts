let x = 0
let y = 0
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        for (let x = 0; x <= index; x++) {
            for (let y = 0; y <= index; y++) {
                led.plot(0 + x, 4 - y)
                led.unplot(x - 1, 5 - y)
            }
        }
        basic.pause(500)
    }
    for (let index = 0; index <= 4; index++) {
        for (let x = 0; x <= 4 - index; x++) {
            for (let y = 0; y <= 4 - index; y++) {
                led.unplot(x, 4 - y)
            }
        }
        for (let x = 0; x <= 4 - index; x++) {
            for (let y = 0; y <= 4 - index; y++) {
                led.plot(x - 1, 1 + (index + y))
                led.unplot(x - 2, 2 + (index + y))
            }
        }
        if (index == 4) {
            led.plot(0, 4)
        } else {
            basic.pause(500)
        }
    }
})
