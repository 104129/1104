basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotatems(BBRobotDirection.Right, 45, 200)
        while (bitbot.readLine(BBLineSensor.Left) == 0 || bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotate(BBRobotDirection.Left, 60)
        }
        if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotate(BBRobotDirection.Left, 20)
        }
        if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotate(BBRobotDirection.Right, 20)
        }
        if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.go(BBDirection.Forward, 100)
        }
        bitbot.stop(BBStopMode.Coast)
    }
})
