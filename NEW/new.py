import pyautogui
import random
import time

while True:
    code = ''.join(str(random.randint(0, 9)) for _ in range(6))
    pyautogui.typewrite(code)
    pyautogui.press('enter')
    time.sleep(1)
