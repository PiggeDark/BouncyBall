let Random8 = 0
let Random7 = 0
let Random6 = 0
let Random2 = 0
let Random5 = 0
let Random4 = 0
let Random3 = 0
let X = 2
let Y = 2
led.plot(X, Y)
let Random = randint(0, 7)
basic.forever(function () {
    if (Random == 0) {
        for (let index = 0; index < 2; index++) {
            led.unplot(X, Y)
            X += -1
            led.plot(X, Y)
            basic.pause(200)
        }
    } else if (Random == 1) {
        for (let index = 0; index < 2; index++) {
            led.unplot(X, Y)
            X += -1
            Y += -1
            led.plot(X, Y)
            basic.pause(200)
        }
    } else if (Random == 2) {
        for (let index = 0; index < 2; index++) {
            led.unplot(X, Y)
            Y += -1
            led.plot(X, Y)
            basic.pause(200)
        }
    } else if (Random == 3) {
        for (let index = 0; index < 2; index++) {
            led.unplot(X, Y)
            X += 1
            Y += -1
            led.plot(X, Y)
            basic.pause(200)
        }
    } else if (Random == 4) {
        for (let index = 0; index < 2; index++) {
            led.unplot(X, Y)
            X += 1
            led.plot(X, Y)
            basic.pause(200)
        }
    } else if (Random == 5) {
        for (let index = 0; index < 2; index++) {
            led.unplot(X, Y)
            X += 1
            Y += 1
            led.plot(X, Y)
            basic.pause(200)
        }
    } else if (Random == 6) {
        for (let index = 0; index < 2; index++) {
            led.unplot(X, Y)
            Y += 1
            led.plot(X, Y)
            basic.pause(200)
        }
    } else if (Random == 7) {
        for (let index = 0; index < 2; index++) {
            led.unplot(X, Y)
            X += -1
            Y += 1
            led.plot(X, Y)
            basic.pause(200)
        }
    }
    basic.pause(100)
    if (X == 0 && Y == 4) {
        Random3 = randint(0, 2)
        if (Random3 == 0) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random3 == 1) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += 1
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random3 == 2) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        }
    }
    basic.pause(100)
    if (X == 4 && Y == 0) {
        Random4 = randint(0, 2)
        if (Random4 == 0) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random4 == 1) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += -1
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random4 == 2) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        }
    }
    basic.pause(100)
    if (X == 0 && Y == 0) {
        Random3 = randint(0, 2)
        if (Random3 == 0) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random3 == 1) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += 1
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random3 == 2) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        }
    }
    basic.pause(100)
    if (X == 4 && Y == 4) {
        Random5 = randint(0, 2)
        if (Random5 == 0) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random5 == 1) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += -1
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random5 == 2) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        }
    }
    basic.pause(100)
    if (X == 0 && Y == 2) {
        Random2 = randint(0, 4)
        if (Random2 == 0) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random2 == 1) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random2 == 2) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random2 == 3) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += 1
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random2 == 4) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += -1
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        }
    }
    if (X == 2 && Y == 0) {
        Random6 = randint(0, 4)
        if (Random6 == 0) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random6 == 1) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random6 == 2) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random6 == 3) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += -1
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random6 == 4) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += 1
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        }
    }
    if (X == 4 && Y == 2) {
        Random7 = randint(0, 4)
        if (Random7 == 0) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random7 == 1) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                X += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random7 == 2) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random7 == 3) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += -1
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random7 == 4) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += -1
                Y += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        }
    }
    if (X == 2 && Y == 4) {
        Random8 = randint(0, 4)
        if (Random8 == 0) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random8 == 1) {
            for (let index = 0; index < 4; index++) {
                led.unplot(X, Y)
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random8 == 2) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += 1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random8 == 3) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += -1
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        } else if (Random8 == 4) {
            for (let index = 0; index < 2; index++) {
                led.unplot(X, Y)
                X += 1
                Y += -1
                led.plot(X, Y)
                basic.pause(200)
            }
        }
    }
})
