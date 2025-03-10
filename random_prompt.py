import random
from prompts import prompts  # import the prompts list

def random_prompt():
    return random.choice(prompts)

print("\n" + random_prompt() + "\n")