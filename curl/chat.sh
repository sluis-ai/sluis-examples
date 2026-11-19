#!/usr/bin/env sh
# Chat completion through the Sluis gateway (OpenAI-compatible API).
# Needs SLUIS_KEY in your environment: create a workload and key in the Sluis Console.
curl https://api.sluis.ai/v1/chat/completions \
  -H "Authorization: Bearer $SLUIS_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "model": "mistral/mistral-large-latest", "messages": [{ "role": "user", "content": "Say hi" }] }'
