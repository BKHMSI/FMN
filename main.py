import json
import time

data = {
    "Hello": 1,
    "Again": 2,
    "World": 3,
    "!": 4
}

def foo(x):
    time.sleep(10)
    return json.dumps(data)

