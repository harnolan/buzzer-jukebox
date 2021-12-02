input.onButtonPressed(Button.A, function () {
    music.playTone(988, music.beat(BeatFraction.Breve))
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Forever)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(131, music.beat(BeatFraction.Breve))
})
