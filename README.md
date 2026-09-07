<!-- markdownlint-disable MD013 MD033 MD041 -->

<p align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&amp;color=gradient&amp;customColorList=6,11,20&amp;height=220&amp;section=header&amp;text=Mobin%20Erteghaie&amp;fontSize=52&amp;fontColor=ffffff&amp;animation=fadeIn&amp;fontAlignY=38&amp;desc=Security%20Engineering%20%C2%B7%20Threat%20Hunting%20%C2%B7%20Open%20Source&amp;descSize=18&amp;descColor=ff9999&amp;descAlignY=64" alt="Mobin Erteghaie — Security Engineering, Threat Hunting, Open Source">
</p>

<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&amp;weight=600&amp;size=19&amp;pause=1100&amp;color=FF5C5C&amp;center=true&amp;vCenter=true&amp;width=760&amp;lines=Windows+PE+triage;macOS+compromise+assessment;Linux+hardening+research;Inspectable+tools.+Reproducible+results." alt="Windows PE triage, macOS compromise assessment, Linux hardening research">

  <br>

  <strong>I want to be the reason your pager stays silent.</strong><br>
  <sub>Building security tools for the moments when evidence matters.</sub>

  <br><br>

  <a href="https://www.linkedin.com/in/mobin-erteghaie"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="LinkedIn"></a>
  <a href="https://orcid.org/0009-0002-5389-7483"><img src="https://img.shields.io/badge/ORCID-0009--0002--5389--7483-A6CE39?style=for-the-badge&amp;logo=orcid&amp;logoColor=white" alt="ORCID"></a>
  <a href="https://github.com/mobinert?tab=repositories"><img src="https://img.shields.io/badge/Open_Source-Projects-FF3333?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Open-source projects"></a>

</div>

---

## About

I build the kind of tools I would want during an incident: local-first where
sensitive data is involved, explicit about uncertainty, and easy to inspect.
My work spans Windows PE analysis, macOS host inspection, and Linux security
research.

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <h3>🎯 What I build</h3>
      <p>Focused utilities for endpoint triage, threat hunting, compromise assessment, and defensive automation.</p>
    </td>
    <td width="50%" valign="top">
      <h3>🧭 How I work</h3>
      <p>Reproducible evidence, clear limitations, reviewable code, and verifiable release artifacts.</p>
    </td>
  </tr>
</table>

---

## Featured work

<div align="center">

  <a href="https://github.com/mobinert/HORUS"><img width="100%" src="https://raw.githubusercontent.com/mobinert/HORUS/master/assets/banner.svg" alt="HORUS — Windows PE triage and IOC enrichment"></a>

  <p>Single-file Windows malware triage for PE static analysis, case investigation, and opt-in IOC enrichment.</p>

  <p>
    <img src="https://img.shields.io/github/v/release/mobinert/HORUS?style=flat-square&amp;color=FF3333&amp;label=release" alt="HORUS latest release">
    <img src="https://img.shields.io/github/actions/workflow/status/mobinert/HORUS/ci.yml?branch=master&amp;style=flat-square&amp;label=build" alt="HORUS build status">
    <img src="https://img.shields.io/badge/C%2B%2B-Windows-0078D4?style=flat-square&amp;logo=cplusplus&amp;logoColor=white" alt="C++ for Windows">
    <img src="https://img.shields.io/badge/license-MIT-2EA44F?style=flat-square" alt="MIT license">
  </p>

  <p><a href="https://github.com/mobinert/HORUS">Source</a> · <a href="https://mobinert.github.io/HORUS/">Documentation</a> · <a href="https://github.com/mobinert/HORUS/releases/latest">Latest release</a></p>

</div>

<table width="100%">
  <tr>
    <td width="50%" align="center" valign="top">
      <h3><a href="https://github.com/mobinert/machunt">🛡️ machunt</a></h3>
      <p>Read-only macOS compromise assessment across 24 inspection modules with terminal, HTML, and JSON reports.</p>
      <p>
        <img src="https://img.shields.io/github/v/release/mobinert/machunt?style=flat-square&amp;color=FF3333&amp;label=release" alt="machunt latest release">
        <img src="https://img.shields.io/badge/Bash-macOS-4EAA25?style=flat-square&amp;logo=gnubash&amp;logoColor=white" alt="Bash for macOS">
      </p>
      <p><a href="https://github.com/mobinert/machunt">Source</a> · <a href="https://mobinert.github.io/machunt/">Docs</a> · <a href="https://github.com/mobinert/machunt/releases/latest">Release</a></p>
    </td>
    <td width="50%" align="center" valign="top">
      <h3><a href="https://github.com/mobinert/ssh-fortress">🏰 ssh-fortress</a></h3>
      <p>Experimental Linux security research around SSH hardening, brute-force detection, and SIEM forwarding.</p>
      <p>
        <img src="https://img.shields.io/badge/status-experimental-F59E0B?style=flat-square" alt="Experimental status">
        <img src="https://img.shields.io/badge/Python-Linux-3776AB?style=flat-square&amp;logo=python&amp;logoColor=white" alt="Python for Linux">
      </p>
      <p><a href="https://github.com/mobinert/ssh-fortress">Source</a> · <a href="https://mobinert.github.io/ssh-fortress/">Docs</a> · <a href="https://github.com/mobinert/ssh-fortress/releases/latest">Research release</a></p>
    </td>
  </tr>
</table>

<div align="center">
  <sub>HORUS and machunt are released tools. ssh-fortress remains experimental and is not recommended for production deployment.</sub>
</div>

---

## Open-source contribution

<table width="100%">
  <tr>
    <td align="center">
      <p><img src="https://img.shields.io/badge/pefile-MERGED-8957E5?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Merged into pefile"></p>
      <h3><a href="https://github.com/erocarrera/pefile/pull/560">Fix low-alignment PE resource parsing — PR #560</a></h3>
      <p>Corrected resource parsing for low-alignment PE images and added regression coverage. Reviewed and merged upstream.</p>
      <p><sub>Follow-up: <a href="https://github.com/erocarrera/pefile/issues/584">test-suite consolidation in issue #584</a>.</sub></p>
    </td>
  </tr>
</table>

---

## Working stack

<div align="center">

  <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&amp;logo=cplusplus&amp;logoColor=white" alt="C++">
  <img src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&amp;logo=gnubash&amp;logoColor=white" alt="Bash">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&amp;logo=python&amp;logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/CMake-064F8C?style=for-the-badge&amp;logo=cmake&amp;logoColor=white" alt="CMake">
  <img src="https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&amp;logo=powershell&amp;logoColor=white" alt="PowerShell">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&amp;logo=githubactions&amp;logoColor=white" alt="GitHub Actions">

  <br>

  <img src="https://img.shields.io/badge/Windows-0078D4?style=flat-square&amp;logo=windows11&amp;logoColor=white" alt="Windows">
  <img src="https://img.shields.io/badge/macOS-000000?style=flat-square&amp;logo=apple&amp;logoColor=white" alt="macOS">
  <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&amp;logo=linux&amp;logoColor=black" alt="Linux">
  <img src="https://img.shields.io/badge/DFIR-27272A?style=flat-square" alt="DFIR">
  <img src="https://img.shields.io/badge/Threat_Hunting-7C3AED?style=flat-square" alt="Threat hunting">

</div>

---

## Current focus

_Updated September 2026._

```text
[active]   HORUS        hostile-input testing
[next]     machunt      output redaction
[review]   ssh-fortress safety hardening
[upstream] pefile #584  test consolidation
```

---

## Contact

Bug reports and reproducible edge cases are welcome. If you use one of my
tools, tell me what worked, what failed, and what evidence helped.

<div align="center">

  <a href="https://www.linkedin.com/in/mobin-erteghaie">LinkedIn</a> ·
  <a href="https://orcid.org/0009-0002-5389-7483">ORCID</a> ·
  <a href="https://github.com/mobinert?tab=repositories">Repositories</a>

</div>

<p align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&amp;color=gradient&amp;customColorList=6,11,20&amp;height=140&amp;section=footer&amp;text=Inspect%20the%20evidence.%20Reduce%20the%20uncertainty.&amp;fontSize=22&amp;fontColor=ff9999&amp;animation=fadeIn&amp;fontAlignY=72" alt="Inspect the evidence. Reduce the uncertainty.">
</p>
