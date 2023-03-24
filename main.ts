input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("" + input.temperature() + "c")
    led.plotBarGraph(
        8,
        30
    )
    if (8 < input.temperature()) {
        basic.showIcon(IconNames.Yes)
    }
    if (30 < input.temperature()) {
        basic.showIcon(IconNames.Target)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + pins.analogReadPin(AnalogPin.P0) + "h")
    led.plotBarGraph(
        200,
        600
    )
    if (200 < pins.analogReadPin(AnalogPin.P0)) {
        basic.showIcon(IconNames.Yes)
    }
    if (600 < pins.analogReadPin(AnalogPin.P0)) {
        basic.showIcon(IconNames.No)
    } else {
        led.stopAnimation()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("" + input.temperature() + "c")
    led.plotBarGraph(
        8,
        30
    )
    if (8 < input.temperature()) {
        basic.showIcon(IconNames.Yes)
    }
    if (30 < input.temperature()) {
        basic.showIcon(IconNames.Target)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + pins.analogReadPin(AnalogPin.P0) + "h")
    led.plotBarGraph(
        200,
        600
    )
    if (200 < pins.analogReadPin(AnalogPin.P0)) {
        basic.showIcon(IconNames.Yes)
    }
    if (600 < pins.analogReadPin(AnalogPin.P0)) {
        basic.showIcon(IconNames.No)
    } else {
        led.stopAnimation()
    }
})
radio.setGroup(1)
basic.forever(() => {
    radio.sendNumber(0)
})
radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
        Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength) + 42),
        128 - 42
    )
})
