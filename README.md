# Sluis examples

Minimal examples of calling the [Sluis](https://www.sluis.ai) gateway through its OpenAI-compatible API. Sluis is an EU-hosted AI gateway: you keep your OpenAI client and change the base URL to `https://api.sluis.ai/v1`. Requests are served by providers your organisation's residency policy allows (EU only by default) and every call is recorded in a tamper-evident audit log.

Full documentation: https://www.sluis.ai/docs

## Get a key

1. Open **Workloads** in the [Sluis Console](https://www.sluis.ai/console/workloads) and create a workload.
2. Add an API key to the workload. Its secret is shown once.
3. Put it in your environment, never in source:

```sh
export SLUIS_KEY="sluis-..."
```

## Examples

| Folder | Client | Run |
|---|---|---|
| [`curl/`](curl/chat.sh) | curl | `sh curl/chat.sh` |
| [`python/`](python/chat.py) | [openai](https://pypi.org/project/openai/) for Python | `cd python && pip install -r requirements.txt && python chat.py` |
| [`typescript/`](typescript/chat.ts) | [openai](https://www.npmjs.com/package/openai) for Node | `cd typescript && npm install && npm start` |

The curl example calls `mistral/mistral-large-latest`. The Python and TypeScript examples call `sluis/auto`, a managed alias that picks a model allowed by your residency policy; they print the `x-sluis-model` response header, which names the `provider/model` that served the call. List the models your key can use with:

```sh
curl https://api.sluis.ai/v1/models -H "Authorization: Bearer $SLUIS_KEY"
```

A request for a provider outside your residency policy is refused with HTTP 403 before any data leaves.

All three examples were run against the live API on 19 November 2026.

## Licence

MIT, see [LICENSE](LICENSE).
