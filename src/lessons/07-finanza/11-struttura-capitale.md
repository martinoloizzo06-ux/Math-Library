---
id: finanza-11-struttura-capitale
subject: finanza
topic_it: Finanza aziendale
topic_en: Corporate finance
title_it: Struttura del capitale e Modigliani-Miller
title_en: Capital structure and Modigliani-Miller
level: purple
order: 11
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. — Struttura del capitale"
---

## Struttura del capitale

La **struttura del capitale** è la combinazione di debito ($D$) ed equity ($E$) con cui l'azienda si finanzia.

**Leva finanziaria:** $L=D/E$ o $D/(D+E)$.

**Costo medio ponderato del capitale (WACC):**

$$r_{\text{WACC}} = \frac{E}{D+E}r_e + \frac{D}{D+E}r_d(1-t)$$

dove $r_e$ è il costo dell'equity, $r_d$ il costo del debito, $t$ l'aliquota fiscale.

## Teoremi di Modigliani-Miller (1958, 1963)

**MM I (senza tasse):** in mercati perfetti (no tasse, no costi di fallimento, info simmetrica), il valore dell'azienda è **indipendente** dalla struttura del capitale.

$$V_L = V_U$$

**MM II (senza tasse):** il costo dell'equity cresce linearmente con la leva:

$$r_e = r_U + (r_U-r_d)\frac{D}{E}$$

**MM I con tasse:** il debito crea uno **scudo fiscale** ($tD$):

$$V_L = V_U + tD$$

Il valore aumenta con il debito per lo scudo fiscale sugli interessi.

## Trade-off theory

$V_L = V_U + tD - PV(\text{costi di dissesto finanziario})$

Struttura ottimale: bilancia scudo fiscale e costi di fallimento.

## Pecking order theory

Le aziende preferiscono: utili non distribuiti → debito → equity. Segnala asimmetrie informative.

---

## Esercizi

<details>
<summary>Esercizio 1 — WACC</summary>

Azienda: $E=600M€$, $D=400M€$, $r_e=12\%$, $r_d=6\%$, $t=30\%$.

**Soluzione.**

$\text{WACC}=\dfrac{600}{1000}\cdot12\%+\dfrac{400}{1000}\cdot6\%\cdot(1-0.3)=7.2\%+1.68\%=\mathbf{8.88\%}$.

</details>

<details>
<summary>Esercizio 2 — MM II senza tasse</summary>

Un'azienda unlevered ha $r_U=10\%$. Si aggiunge debito con $r_d=6\%$, $D/E=0.5$. Calcolare $r_e$ levered.

**Soluzione.**

$r_e=10\%+(10\%-6\%)\cdot0.5=10\%+2\%=\mathbf{12\%}$.

Il costo dell'equity aumenta per compensare il rischio aggiuntivo della leva. Il WACC rimane $10\%$ (MM I senza tasse). ✓

</details>

<details>
<summary>Esercizio 3 — Scudo fiscale</summary>

$V_U=100M€$, $D=40M€$, $t=25\%$. Calcolare $V_L$ con MM con tasse.

**Soluzione.**

$V_L=V_U+tD=100+0.25\cdot40=100+10=\mathbf{110M€}$.

Lo scudo fiscale vale €10M. Questo giustifica il debito, ma non al 100% perché i costi di fallimento aumentano con la leva.

</details>
