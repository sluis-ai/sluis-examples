# Chat completion through the Sluis gateway with the official openai package.
# pip install -r requirements.txt, then: SLUIS_KEY=... python chat.py
import os

from openai import OpenAI

client = OpenAI(
    base_url="https://api.sluis.ai/v1",
    api_key=os.environ["SLUIS_KEY"],
)

# sluis/auto is a managed alias: Sluis picks a model allowed by your residency policy.
resp = client.chat.completions.with_raw_response.create(
    model="sluis/auto",
    messages=[{"role": "user", "content": "Say hi"}],
)
print("served by:", resp.headers.get("x-sluis-model"))
print(resp.parse().choices[0].message.content)
