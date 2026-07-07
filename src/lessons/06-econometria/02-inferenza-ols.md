---
id: econometria-02-inferenza
subject: econometria
topic_it: Regressione OLS
topic_en: OLS regression
title_it: Inferenza nella regressione OLS
title_en: Inference in OLS regression
level: purple
order: 2
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 3–4 — Inferenza OLS"
---

## Varianze degli stimatori OLS

Sotto le assunzioni classiche (OLS.1–OLS.5):

$$\text{Var}(\hat\beta_j\mid X) = \frac{\sigma^2}{\text{SST}_j(1-R_j^2)}$$

dove:
- $\text{SST}_j=\sum(x_{ji}-\bar{x}_j)^2$: variabilità del regressore $j$.
- $R_j^2$: $R^2$ della regressione di $x_j$ sugli altri regressori.
- $(1-R_j^2)$: termine di **inflazione** per multicollinearità.

**Standard error:** $\text{SE}(\hat\beta_j)=\hat\sigma/\sqrt{\text{SST}_j(1-R_j^2)}$, con $\hat\sigma=\sqrt{\text{RSS}/(n-k-1)}$.

## Test t (significatività del singolo coefficiente)

$$t = \frac{\hat\beta_j - \beta_j^0}{\text{SE}(\hat\beta_j)} \sim t(n-k-1) \text{ sotto }H_0:\beta_j=\beta_j^0$$

**Regola pratica:** per $n$ grande, $|t|>2$ indica significatività al 5%.

## Test F (restrizioni lineari)

Per testare $q$ restrizioni lineari su $\boldsymbol\beta$:

$$F = \frac{(\text{RSS}_r-\text{RSS}_u)/q}{\text{RSS}_u/(n-k-1)} \sim F(q,n-k-1)$$

dove RSS$_r$ = residui del modello ristretto, RSS$_u$ = residui del modello non ristretto.

## IC asintotici robusti

Con errori eteroschedastici, usare la **varianza HC (Heteroskedasticity-Consistent)**:

$$\hat{V}_{\text{HC}}(\hat{\boldsymbol\beta}) = (X^TX)^{-1}\left(\sum_i\hat{u}_i^2\mathbf{x}_i\mathbf{x}_i^T\right)(X^TX)^{-1}$$

(Standard error di White). Validi asintoticamente senza assunzione di omoschedasticità.

---

## Esercizi

<details>
<summary>Esercizio 1 — Test t</summary>

$\hat\beta_1=0.5$, $\text{SE}(\hat\beta_1)=0.2$, $n=100$, $k=3$. Testare $H_0:\beta_1=0$ a $\alpha=0.05$.

**Soluzione.**

$t=0.5/0.2=2.5$. Gradi di libertà: $n-k-1=96$.

$t_{96,0.025}\approx 1.984$. Poiché $2.5>1.984$: **rifiutare** $H_0$.

$p\text{-value}\approx 2\cdot P(T_{96}>2.5)\approx 2\cdot0.0073\approx 0.015$.

</details>

<details>
<summary>Esercizio 2 — Test F su restrizioni</summary>

Testare $H_0:\beta_1=\beta_2$ nel modello $y=\beta_0+\beta_1x_1+\beta_2x_2+u$.

**Soluzione.**

Equivalente a $H_0:\beta_1-\beta_2=0$. Modello ristretto: $y=\beta_0+\beta_1(x_1+x_2)+u$ (sostituendo $\beta_2=\beta_1$).

Si stima il modello ristretto, si calcola RSS$_r$, si calcola $F$ con $q=1$ restrizione.

Alternativa: test t su $\hat\beta_1-\hat\beta_2$ con $\text{SE}(\hat\beta_1-\hat\beta_2)=\sqrt{\hat\text{Var}(\hat\beta_1)+\hat\text{Var}(\hat\beta_2)-2\widehat{\text{Cov}}(\hat\beta_1,\hat\beta_2)}$.

</details>

<details>
<summary>Esercizio 3 — Effetto della multicollinearità</summary>

Come cambia $\text{SE}(\hat\beta_j)$ se aggiungo un regressore molto correlato a $x_j$?

**Soluzione.**

$R_j^2$ (coefficiente di determinazione di $x_j$ sugli altri regressori) **aumenta**, il termine $(1-R_j^2)$ **diminuisce**, quindi $\text{Var}(\hat\beta_j)$ **aumenta**.

Gli SE diventano grandi: i coefficienti sono stimati imprecisamente e i test t possono non rifiutare anche quando i parametri veri sono lontani da zero.

</details>
