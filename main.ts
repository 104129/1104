let 開始時間 = 0
let 結束時間 = 0
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        basic.showNumber(0)
        bitbot.stop(BBStopMode.Coast)
        bitbot.rotate(BBRobotDirection.Right, 40)
        開始時間 = input.runningTime()
        while (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1 && input.runningTime() - 開始時間 <= 350 || input.runningTime() - 開始時間 > 350) {
            bitbot.rotate(BBRobotDirection.Right, 40)
            結束時間 = input.runningTime() - 開始時間
        }
    }
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        basic.showNumber(1)
        bitbot.rotate(BBRobotDirection.Left, 20)
    }
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        basic.showNumber(2)
        bitbot.rotate(BBRobotDirection.Right, 20)
    }
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        basic.showNumber(3)
        bitbot.go(BBDirection.Forward, 100)
    }
    bitbot.stop(BBStopMode.Coast)
})
