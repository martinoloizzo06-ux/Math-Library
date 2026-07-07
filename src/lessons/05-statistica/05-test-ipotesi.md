---
id: statistica-05-test-ipotesi
subject: statistica
topic_it: Test di ipotesi
topic_en: Hypothesis testing
title_it: Test di ipotesi — concetti fondamentali
title_en: Hypothesis testing — fundamental concepts
level: purple
order: 5
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 10 — Test di ipotesi"
---

## Struttura di un test

- **Ipotesi nulla** $H_0$: ipotesi che si vuole confutare (es. $\mu=\mu_0$).
- **Ipotesi alternativa** $H_1$: ciò che si vuole dimostrare (es. $\mu\neq\mu_0$).
- **Statistica test** $T$: funzione del campione con distribuzione nota sotto $H_0$.
- **Regione critica** $C$: valori di $T$ per cui si rifiuta $H_0$.

## Errori e livello del test

| | $H_0$ vera | $H_0$ falsa |
|---|---|---|
| Non rifiutare $H_0$ | ✓ | Errore tipo II ($\beta$) |
| Rifiutare $H_0$ | Errore tipo I ($\alpha$) | ✓ |

- **Livello del test** $\alpha = P(\text{rifiutare }H_0\mid H_0\text{ vera})$ (falso positivo).
- **Potenza** $= 1-\beta = P(\text{rifiutare }H_0\mid H_1\text{ vera})$.

Il test è condotto a livello $\alpha$ prefissato (tipicamente 0.05 o 0.01).

## p-value

$$p\text{-value} = P_{\theta_0}(\text{statistica test} \geq T_{\text{obs}})$$

È la probabilità, assumendo $H_0$ vera, di osservare un risultato almeno così estremo.

**Regola decisionale:** rifiutare $H_0$ se $p\text{-value}\leq\alpha$.

**Interpretazione:** un $p$-value piccolo significa che i dati sono improbabili sotto $H_0$ — non che $H_1$ è "vera" con quella probabilità!

## Test bilaterale vs. unilaterale

- **Bilaterale:** $H_1:\mu\neq\mu_0$ — rifiuto su entrambe le code.
- **Unilaterale:** $H_1:\mu>\mu_0$ — rifiuto solo su una coda.

---

## Esercizi

<details>
<summary>Esercizio 1 — Interpretazione del p-value</summary>

Un test dà $p=0.03$. Con $\alpha=0.05$, cosa si conclude?

**Soluzione.**

$p=0.03<\alpha=0.05$: si **rifiuta** $H_0$ al livello del 5%.

Interpretazione: se $H_0$ fosse vera, ci sarebbe solo il 3% di probabilità di osservare un risultato così estremo o più. C'è evidenza statisticamente significativa contro $H_0$.

</details>

<details>
<summary>Esercizio 2 — Errori</summary>

Un tribunale testa $H_0$: "innocente" vs $H_1$: "colpevole". Descrivere errori tipo I e II.

**Soluzione.**

- **Errore tipo I** ($\alpha$): condannare un innocente (falso positivo, $H_0$ rifiutata quando vera).
- **Errore tipo II** ($\beta$): assolvere un colpevole (falso negativo, $H_0$ non rifiutata quando falsa).

Nel sistema giuridico si punta a minimizzare l'errore tipo I ("oltre ogni ragionevole dubbio").

</details>

<details>
<summary>Esercizio 3 — Potenza</summary>

Spiegare il trade-off tra $\alpha$ e $\beta$.

**Soluzione.**

Per un test con statistica e campione fissati: ridurre $\alpha$ (soglia più severa) aumenta $\beta$ (meno sensibilità a $H_1$), e viceversa.

Per ridurre entrambi contemporaneamente bisogna **aumentare $n$** (più informazione).

</details>
