# Mobin Erteghaie

Security practitioner building practical tools for endpoint triage, threat
hunting, and defensive automation.

I build the kind of tools I would want during an incident: local-first where
sensitive data is involved, explicit about uncertainty, and easy to inspect.
My recent work spans Windows PE analysis, macOS host inspection, and Linux
security research.

## Selected work

### [HORUS](https://github.com/mobinert/HORUS)

A self-contained Windows x64 security triage tool for PE static analysis,
case-level investigation, and opt-in IOC enrichment. Releases include automated
tests, SHA-256 checksums, and artifact attestations.

[Latest release](https://github.com/mobinert/HORUS/releases/latest) ·
[CI](https://github.com/mobinert/HORUS/actions/workflows/ci.yml) ·
[Documentation](https://mobinert.github.io/HORUS/)

### [machunt](https://github.com/mobinert/machunt)

A macOS compromise-assessment script covering persistence, code-signing
signals, network and MITM settings, privacy controls, accounts, and SSH. It
produces terminal, HTML, and JSON reports for review.

[Latest release](https://github.com/mobinert/machunt/releases/latest) ·
[Documentation](https://mobinert.github.io/machunt/)

### [ssh-fortress](https://github.com/mobinert/ssh-fortress)

An experimental Linux security project exploring SSH hardening, brute-force
detection, and SIEM forwarding. It is under active hardening review and is not
currently recommended for production deployment.

## Open-source contributions

- **[pefile #560](https://github.com/erocarrera/pefile/pull/560)** — fixed
  resource parsing for low-alignment PE images and added regression coverage.
  The change was reviewed, passed 25 checks, and was merged upstream.

## Now

_Updated August 2026._

- Expanding hostile-input testing and release trust for HORUS.
- Closing safety gaps in ssh-fortress before recommending wider deployment.
- Following up on test consolidation for
  [pefile #584](https://github.com/erocarrera/pefile/issues/584).

## Contact

[LinkedIn](https://www.linkedin.com/in/mobin-erteghaie) ·
[ORCID](https://orcid.org/0009-0002-5389-7483)

Bug reports and reproducible edge cases are welcome. If you use one of my
tools, tell me what worked and what did not.
