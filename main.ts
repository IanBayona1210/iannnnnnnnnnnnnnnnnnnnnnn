input.onButtonPressed(Button.A, function () {
    basic.showNumber(12)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Ghost)
    basic.showString("IAN")
    for (let index = 0; index < 6; index++) {
        music.play(music.stringPlayable("C D F B E G C5 B ", 200), music.PlaybackMode.UntilDone)
    }
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("ianianian")
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Chessboard)
    music.play(music.stringPlayable("A F G B E D F C ", 204), music.PlaybackMode.UntilDone)
})
