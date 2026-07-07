---
id: statistica-09-regressione-multipla
subject: statistica
topic_it: Regressione
topic_en: Regression
title_it: Regressione lineare multipla
title_en: Multiple linear regression
level: purple
order: 9
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 13 — Regressione multipla"
---

## Modello matriciale

Con $p$ predittori e $n$ osservazioni:

$$\mathbf{Y} = X\boldsymbol\beta + \boldsymbol\varepsilon, \quad \boldsymbol\varepsilon\sim\mathcal{N}(\mathbf{0},\sigma^2 I_n)$$

- $\mathbf{Y}\in\mathbb{R}^n$: vettore delle risposte.
- $X\in\mathbb{R}^{n\times(p+1)}$: matrice del disegno (prima colonna = 1 per intercetta).
- $\boldsymbol\beta\in\mathbb{R}^{p+1}$: coefficienti da stimare.

## Stimatore OLS

$$\hat{\boldsymbol\beta} = (X^TX)^{-1}X^T\mathbf{Y}$$

Proprietà: $E[\hat{\boldsymbol\beta}]=\boldsymbol\beta$, $\text{Cov}(\hat{\boldsymbol\beta})=\sigma^2(X^TX)^{-1}$.

I **valori fittati**: $\hat{\mathbf{Y}}=X\hat{\boldsymbol\beta}=H\mathbf{Y}$ dove $H=X(X^TX)^{-1}X^T$ è la matrice cappello (hat matrix) — una proiezione ortogonale.

## Inferenza

**Test F globale** — $H_0:\beta_1=\cdots=\beta_p=0$:

$$F = \frac{\text{ESS}/p}{\text{RSS}/(n-p-1)}\sim F(p,\,n-p-1) \text{ sotto }H_0$$

**Test t su singolo coefficiente** $H_0:\beta_j=0$:

$$t_j=\frac{\hat\beta_j}{\text{SE}(\hat\beta_j)}\sim t(n-p-1)$$

## $R^2$ aggiustato

$$R^2_{\text{adj}}=1-\frac{\text{RSS}/(n-p-1)}{\text{TSS}/(n-1)}$$

Penalizza l'aggiunta di predittori non informativi — non aumenta necessariamente con $p$.

## Multicollinearità

Se i predittori sono fortemente correlati: $(X^TX)$ è quasi singolare, $\hat{\boldsymbol\beta}$ è instabile e i SE esplodono.

**VIF** (Variance Inflation Factor): $\text{VIF}_j=1/(1-R_j^2)$, dove $R_j^2$ è il $R^2$ di regredire $X_j$ sugli altri predittori. VIF $>10$ indica multicollinearità grave.

---

## Esercizi

<details>
<summary>Esercizio 1 — Interpretazione coefficienti</summary>

Modello: $\hat{y}=5+3x_1-2x_2$ (ore di studio, ore di TV, voto). Interpretare $\hat\beta_1=3$.

**Soluzione.**

Tenendo costante $x_2$ (ore di TV), un'ora in più di studio ($x_1$) è associata in media a 3 punti in più nel voto.

L'interpretazione "a parità di altri regressori" è cruciale in regressione multipla.

</details>

<details>
<summary>Esercizio 2 — $R^2$ aggiustato</summary>

Modello A ($p=2$): $R^2=0.80$, $n=30$. Modello B ($p=5$): $R^2=0.82$.

Calcolare $R^2_{\text{adj}}$ per entrambi.

**Soluzione.**

A: $R^2_{\text{adj}}=1-\dfrac{0.20\cdot29}{27}=1-0.215=\mathbf{0.785}$.

B: $R^2_{\text{adj}}=1-\dfrac{0.18\cdot29}{24}=1-0.218=\mathbf{0.782}$.

Nonostante $R^2$ più alto, il modello B è marginalmente peggiore aggiustato: i 3 predittori aggiuntivi non giustificano la complessità.

</details>

<details>
<summary>Esercizio 3 — Test F</summary>

$n=50$, $p=3$, RSS$=40$, TSS$=100$. Testare $H_0:\beta_1=\beta_2=\beta_3=0$ a $\alpha=0.05$.

**Soluzione.**

ESS$=60$, $R^2=0.6$.

$F=\dfrac{60/3}{40/46}=\dfrac{20}{0.869}\approx 23.02$.

$F_{3,46,0.05}\approx 2.81$. Poiché $23.02\gg 2.81$: **rifiutare** $H_0$. Il modello spiega significativamente la variabilità.

</details>
