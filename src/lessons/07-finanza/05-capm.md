---
id: finanza-05-capm
subject: finanza
topic_it: Teoria del portafoglio
topic_en: Portfolio theory
title_it: Capital Asset Pricing Model (CAPM)
title_en: Capital Asset Pricing Model (CAPM)
level: purple
order: 5
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 9 — CAPM"
---

## Il modello CAPM

Il CAPM (Sharpe-Lintner-Mossin, 1964-66) dice che in equilibrio, il rendimento atteso di un asset è:

$$E[R_i] = r_f + \beta_i(E[R_m]-r_f)$$

- $r_f$: tasso privo di rischio.
- $E[R_m]-r_f$: **premio per il rischio di mercato** (market risk premium, MRP).
- $\beta_i$: **beta** dell'asset — misura il rischio sistematico.

## Beta

$$\beta_i = \frac{\text{Cov}(R_i,R_m)}{\text{Var}(R_m)} = \frac{\sigma_{im}}{\sigma_m^2}$$

- $\beta=1$: si muove come il mercato.
- $\beta>1$: **aggressivo** — amplifica i movimenti del mercato.
- $\beta<1$: **difensivo** — meno volatile del mercato.
- $\beta=0$: asset privo di rischio sistematico.

## Security Market Line (SML)

Il CAPM implica che in equilibrio **tutti gli asset si trovano sulla SML** nello spazio $(\beta, E[R])$.

**Alpha di Jensen** $\alpha_i=E[R_i]-[r_f+\beta_i(E[R_m]-r_f)]$:
- $\alpha>0$: l'asset è **sottovalutato** (rende più del dovuto per il suo rischio).
- $\alpha<0$: l'asset è **sopravvalutato**.

## Assunzioni del CAPM

1. Investitori razionali e media-varianza efficienti.
2. Aspettative omogenee.
3. Asset privo di rischio disponibile a tutti.
4. Nessun costo di transazione o imposta.
5. Tutti gli asset sono negoziabili e divisibili.

## Limiti

Il CAPM spiega solo parzialmente i rendimenti empirici — altri fattori (size, value, momentum) spiegano i ritorni anomali (anomalie di mercato).

---

## Esercizi

<details>
<summary>Esercizio 1 — Rendimento atteso CAPM</summary>

$r_f=3\%$, MRP $=6\%$, $\beta_i=1.2$. Calcolare $E[R_i]$.

**Soluzione.**

$E[R_i]=3\%+1.2\cdot6\%=3\%+7.2\%=\mathbf{10.2\%}$.

</details>

<details>
<summary>Esercizio 2 — Alpha di Jensen</summary>

Un'azione ha rendimento storico medio $12\%$, $r_f=3\%$, $\beta=1.5$, MRP $=6\%$. Calcolare l'alpha.

**Soluzione.**

$E[R]_{\text{CAPM}}=3+1.5\cdot6=12\%$. $\alpha=12\%-12\%=0$.

L'azione è sulla SML — correttamente valutata. Se avesse reso $14\%$: $\alpha=2\%>0$ (sottovalutata).

</details>

<details>
<summary>Esercizio 3 — Beta del portafoglio</summary>

Portafoglio: $50\%$ in asset A ($\beta_A=0.8$) e $50\%$ in asset B ($\beta_B=1.4$). Calcolare $\beta_p$.

**Soluzione.**

$\beta_p=\sum w_i\beta_i=0.5\cdot0.8+0.5\cdot1.4=0.4+0.7=\mathbf{1.1}$.

Il beta del portafoglio è la media ponderata dei beta degli asset.

</details>
