# FAQ

## What databases does ProteinClaw integrate?

Currently 10+: UniProt, BLAST, ClinVar, gnomAD, GTEx, cBioPortal, PDB, AlphaFold, STRING, OMIM. The full list and API coverage evolves with each release — see the [repository README](https://github.com/shuaizengMU/ProteinClaw) for the current state.

## Do I need API keys?

No. ProteinClaw ships with the public endpoints pre-configured. If you later need higher rate limits for a specific database, you can add your own key in the settings.

## Is my data sent anywhere?

The agent reasoning runs through a language model (configurable). Database queries go directly to the public endpoints listed above. No research data is uploaded to ProteinClaw's servers (there are none).

## How do I cite ProteinClaw?

See the citation metadata in the repository root. A DOI will be provided for releases tagged `v1.0+`.

## The app won't open on macOS — "unidentified developer"

This is standard Gatekeeper behavior for unsigned apps. Right-click the app → **Open** → **Open** again when warned. Or: **System Settings → Privacy & Security → Open Anyway** after the first attempt.

## Can I use it on Linux / Windows?

Not yet as a desktop app. The Python core runs on any platform — clone the [repo](https://github.com/shuaizengMU/ProteinClaw) and use the CLI.

## How do I contribute?

Pull requests welcome. See the `CONTRIBUTING.md` in the repo (if absent, open an issue first to discuss).
