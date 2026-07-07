---
id: statistica-10-anova
subject: statistica
topic_it: Regressione
topic_en: Regression
title_it: ANOVA (analisi della varianza)
title_en: ANOVA (analysis of variance)
level: purple
order: 10
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 12 — ANOVA"
---

## ANOVA a una via

**Scopo:** confrontare le medie di $k$ gruppi indipendenti.

**Modello:** $Y_{ij}=\mu_i+\varepsilon_{ij}$, $\varepsilon_{ij}\sim\mathcal{N}(0,\sigma^2)$ i.i.d.

**Ipotesi:** $H_0:\mu_1=\mu_2=\cdots=\mu_k$ vs $H_1$: almeno due medie diverse.

## Scomposizione della varianza

$$\text{TSS} = \text{SSA} + \text{SSE}$$

$$\sum_{i,j}(y_{ij}-\bar{y})^2 = \sum_i n_i(\bar{y}_i-\bar{y})^2 + \sum_{i,j}(y_{ij}-\bar{y}_i)^2$$

- **SSA** (Sum of Squares Among): variabilità **tra** i gruppi.
- **SSE** (Sum of Squares Error): variabilità **dentro** i gruppi.

## Tavola ANOVA

| Sorgente | SS | df | MS | F |
|---|---|---|---|---|
| Tra gruppi | SSA | $k-1$ | MSA = SSA/$(k-1)$ | MSA/MSE |
| Entro gruppi | SSE | $n-k$ | MSE = SSE/$(n-k)$ | |
| Totale | TSS | $n-1$ | | |

**Statistica test:** $F=\text{MSA}/\text{MSE}\sim F(k-1,n-k)$ sotto $H_0$.

## Assunzioni ANOVA

1. **Normalità:** $Y_{ij}\sim\mathcal{N}(\mu_i,\sigma^2)$.
2. **Omoschedasticità:** varianza $\sigma^2$ uguale in tutti i gruppi.
3. **Indipendenza** delle osservazioni.

## Test post-hoc

Se $H_0$ è rifiutata: si vuole sapere **quali** coppie differiscono. Test di Tukey, Bonferroni, ecc. — aggiustano per il problema dei confronti multipli.

---

## Esercizi

<details>
<summary>Esercizio 1 — Tavola ANOVA</summary>

Tre gruppi ($n_1=n_2=n_3=5$), medie $\bar{y}_1=10$, $\bar{y}_2=12$, $\bar{y}_3=14$, media totale $\bar{y}=12$. SSE$=30$. Costruire la tavola ANOVA.

**Soluzione.**

SSA $=5(10-12)^2+5(12-12)^2+5(14-12)^2=20+0+20=40$.

| Sorgente | SS | df | MS | F |
|---|---|---|---|---|
| Tra | 40 | 2 | 20 | 8 |
| Entro | 30 | 12 | 2.5 | |
| Totale | 70 | 14 | | |

$F_{2,12,0.05}=3.89$. $F=8>3.89$: **rifiutare** $H_0$.

</details>

<details>
<summary>Esercizio 2 — Interpretazione</summary>

Spiegare perché ANOVA usa il rapporto F invece di confrontare a coppie con test t.

**Soluzione.**

Con $k$ gruppi ci sono $\binom{k}{2}$ coppie. Fare $\binom{k}{2}$ test t a livello $\alpha$ **gonfia l'errore totale** (problema dei confronti multipli): la probabilità di almeno un falso positivo cresce.

L'ANOVA controlla globalmente l'errore di tipo I al livello $\alpha$ in un unico test.

</details>

<details>
<summary>Esercizio 3 — Assunzioni</summary>

Come verificare l'omoschedasticità nelle ANOVA?

**Soluzione.**

- **Graficamente:** plot dei residui vs valori fittati — devono essere distribuiti uniformemente.
- **Test di Levene** o **test di Bartlett** per uguaglianza delle varianze.
- **Rule of thumb:** se il rapporto tra la deviazione standard massima e minima è $<2$, l'assunzione è ragionevolmente soddisfatta.

</details>
