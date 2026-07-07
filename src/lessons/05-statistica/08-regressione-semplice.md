---
id: statistica-08-regressione-semplice
subject: statistica
topic_it: Regressione
topic_en: Regression
title_it: Regressione lineare semplice
title_en: Simple linear regression
level: purple
order: 8
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 13 — Regressione lineare"
---

## Modello

$$Y_i = \beta_0 + \beta_1 x_i + \varepsilon_i, \quad \varepsilon_i\sim\mathcal{N}(0,\sigma^2) \text{ i.i.d.}$$

- $\beta_0$: intercetta.
- $\beta_1$: pendenza (effetto di $x$ su $y$).
- $x_i$: variabile esplicativa (non aleatoria).
- $\varepsilon_i$: errore casuale.

## Stima OLS (Ordinary Least Squares)

Minimizzare $\text{RSS}=\sum_{i=1}^n(y_i-\hat{y}_i)^2$:

$$\hat\beta_1 = \frac{\sum(x_i-\bar{x})(y_i-\bar{y})}{\sum(x_i-\bar{x})^2} = \frac{S_{xy}}{S_{xx}}$$

$$\hat\beta_0 = \bar{y}-\hat\beta_1\bar{x}$$

Sotto le assunzioni del modello, OLS = MLE.

## Proprietà degli stimatori OLS

- $\hat\beta_0$, $\hat\beta_1$ sono non distorti: $E[\hat\beta_j]=\beta_j$.
- **Teorema di Gauss-Markov:** sono i BLUE (Best Linear Unbiased Estimators).
- $\hat\beta_1\sim\mathcal{N}\!\left(\beta_1,\dfrac{\sigma^2}{S_{xx}}\right)$.

## Stima di $\sigma^2$ e inferenza

$$\hat\sigma^2 = s_e^2 = \frac{\text{RSS}}{n-2} = \frac{\sum(y_i-\hat{y}_i)^2}{n-2}$$

Test su $\beta_1$: $H_0:\beta_1=0$, $t=\hat\beta_1/\text{SE}(\hat\beta_1)\sim t(n-2)$.

## Bontà di adattamento — $R^2$

$$R^2 = 1-\frac{\text{RSS}}{\text{TSS}} = \frac{\text{ESS}}{\text{TSS}}$$

dove TSS $=\sum(y_i-\bar{y})^2$, ESS $=\sum(\hat{y}_i-\bar{y})^2$.

$R^2\in[0,1]$: proporzione della varianza di $Y$ spiegata dal modello. Uguale a $\hat\rho_{xy}^2$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Stima OLS</summary>

Dati $(x,y)$: $(1,2),(2,4),(3,5),(4,4),(5,5)$. Stimare la retta di regressione.

**Soluzione.**

$\bar{x}=3$, $\bar{y}=4$.

$S_{xx}=(1-3)^2+(2-3)^2+(3-3)^2+(4-3)^2+(5-3)^2=4+1+0+1+4=10$.

$S_{xy}=(1-3)(2-4)+(2-3)(4-4)+0+(4-3)(4-4)+(5-3)(5-4)=4+0+0+0+2=6$.

$\hat\beta_1=6/10=0.6$, $\hat\beta_0=4-0.6\cdot3=2.2$.

Retta: $\hat{y}=2.2+0.6x$.

</details>

<details>
<summary>Esercizio 2 — $R^2$</summary>

Per i dati dell'es. 1, calcolare $R^2$.

**Soluzione.**

TSS $=\sum(y_i-4)^2=4+0+1+0+1=6$.

Residui: $\hat{y}_i=2.8,3.4,4.0,4.6,5.2$. RSS $=(2-2.8)^2+(4-3.4)^2+(5-4)^2+(4-4.6)^2+(5-5.2)^2=0.64+0.36+1+0.36+0.04=2.4$.

$R^2=1-2.4/6=0.6$.

</details>

<details>
<summary>Esercizio 3 — Interpretazione</summary>

In un modello $\hat{y}=30+2.5x$ (salario in k€, anni di esperienza), interpretare i coefficienti.

**Soluzione.**

$\hat\beta_0=30$: un lavoratore con 0 anni di esperienza guadagna in media 30k€.

$\hat\beta_1=2.5$: ogni anno aggiuntivo di esperienza è associato in media a 2.5k€ in più di salario.

</details>
