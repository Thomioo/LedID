import RPi.GPIO as GPIO

def On(x):
        led = x #number of gpio pin in use
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(led, GPIO.OUT)
        GPIO.output(led, True)

def Off(x):
        led = x #number of gpio pin in use
        GPIO.setmode(GPIO.BCM)
        GPIO.setup(led, GPIO.OUT)
        GPIO.output(led, False)

GPIO.cleanup()