---
id: finanza-12-dcf
subject: finanza
topic_it: Finanza aziendale
topic_en: Corporate finance
title_it: Valutazione aziendale — DCF e multipli
title_en: Business valuation — DCF and multiples
level: purple
order: 12
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. — Valutazione"
---

## Metodo DCF (Discounted Cash Flow)

Il valore dell'impresa = valore attuale dei **Free Cash Flow to Firm (FCFF)**:

$$\text{FCF}_t = \text{EBIT}(1-t)+\text{Ammortamenti}-\Delta\text{CWC}-\text{CapEx}$$

$$V_0 = \sum_{t=1}^T\frac{\text{FCF}_t}{(1+\text{WACC})^t}+\frac{TV}{(1+\text{WACC})^T}$$

**Terminal Value (valore terminale):**

$$TV = \frac{\text{FCF}_{T+1}}{\text{WACC}-g}$$

dove $g$ è il tasso di crescita perpetua (solitamente $\approx$ crescita del PIL nominale).

## Sensibilità del DCF

Il valore è molto sensibile alle ipotesi su:
- Tasso di crescita $g$ del terminal value.
- WACC.
- Proiezione dei FCF.

**Analisi di sensitività:** calcolare il valore con diversi scenari di $g$ e WACC.

## Metodo dei multipli

Si valorizza l'azienda applicando moltiplicatori di mercato da aziende comparabili:

| Multiplo | Formula |
|---|---|
| EV/EBITDA | Enterprise Value / EBITDA |
| EV/Revenues | Enterprise Value / Ricavi |
| P/E | Prezzo / Utile per azione |
| P/B | Prezzo / Patrimonio netto per azione |

**Procedura:** trovare aziende comparabili (same sector, size) → calcolare i loro multipli → applicare alla target.

## Enterprise Value vs Equity Value

$$\text{Equity Value} = \text{Enterprise Value} - \text{Debito netto}$$

$$\text{Enterprise Value} = \text{Capitalizzazione}+\text{Debito}-\text{Liquidità}$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Terminal Value</summary>

WACC $=10\%$, $g=3\%$, FCF all'anno $T+1=€50M$. Calcolare TV.

**Soluzione.**

$TV=\dfrac{50}{0.10-0.03}=\dfrac{50}{0.07}=\mathbf{714.3M€}$.

Il terminal value spesso rappresenta il 60–80% del valore totale in un DCF — estrema sensibilità a $g$ e WACC.

</details>

<details>
<summary>Esercizio 2 — DCF semplificato</summary>

FCF: $€30M$ per 3 anni, poi TV$=€400M$ al $T=3$. WACC $=8\%$. Calcolare $V_0$.

**Soluzione.**

$V_0=\dfrac{30}{1.08}+\dfrac{30}{1.08^2}+\dfrac{30+400}{1.08^3}=27.78+25.72+341.23=\mathbf{394.73M€}$.

</details>

<details>
<summary>Esercizio 3 — Multipli EV/EBITDA</summary>

Azienda target: EBITDA $=€20M$. Comparables: EV/EBITDA medio $=8x$. Debito netto $=€50M$.

**Soluzione.**

$EV=8\times20=€160M$.

$\text{Equity Value}=EV-\text{Debito netto}=160-50=\mathbf{€110M}$.

</details>
