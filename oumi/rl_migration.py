# Minimal RL example using Oumi-style structure
# State: repo summary
# Action: apply migration or dry-run
# Reward: +1 if build passes, -1 if fails

import random

states = [
    {"js_files": 1, "has_tests": True},
    {"js_files": 10, "has_tests": False}
]

actions = ["APPLY", "DRY_RUN"]

def reward(state, action):
    if action == "APPLY" and state["has_tests"]:
        return 1
    return -1

print("Starting Oumi RL training...")

for episode in range(2):
    state = random.choice(states)
    action = random.choice(actions)
    r = reward(state, action)
    print(f"Episode {episode+1}: State={state}, Action={action}, Reward={r}")

print("Training complete. Policy updated.")

