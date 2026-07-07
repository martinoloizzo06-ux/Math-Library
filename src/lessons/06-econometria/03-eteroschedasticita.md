---
id: econometria-03-eteroschedasticita
subject: econometria
topic_it: Violazioni del CLRM
topic_en: CLRM violations
title_it: Eteroschedasticità
title_en: Heteroskedasticity
level: purple
order: 3
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 8 — Eteroschedasticità"
---

## Definizione e conseguenze

**Eteroschedasticità:** $\text{Var}(u_i\mid\mathbf{x}_i)=\sigma_i^2$ non costante (varia con le covariate).

**Conseguenze:**
- Lo stimatore OLS rimane **non distorto e consistente** (OLS.4 è soddisfatta).
- Ma **non è più BLUE** (violazione di OLS.5).
- Gli **standard error classici** sono **distorti** → test t e F non sono validi.

## Rilevamento

**Graficamente:** plot dei residui quadratici $\hat{u}_i^2$ vs $\hat{y}_i$ o vs $x_i$.

**Test di Breusch-Pagan:** regressione di $\hat{u}_i^2$ su $\mathbf{x}_i$. Statistica $LM=nR^2\sim\chi^2(k)$ sotto $H_0$ (omoschedasticità).

**Test di White:** come Breusch-Pagan ma con termini quadratici e incrociati dei regressori.

## Correzione

**Standard error robusti (di White/HC):** validi asintoticamente anche con eteroschedasticità — non cambiano $\hat{\boldsymbol\beta}$ ma correggono i SE.

**GLS (Generalized Least Squares):** se la forma di $\sigma_i^2$ è nota ($\sigma_i^2=\sigma^2 h(\mathbf{x}_i)$):

$$\tilde{\boldsymbol\beta} = (X^T\Omega^{-1}X)^{-1}X^T\Omega^{-1}\mathbf{y}$$

con $\Omega=\text{diag}(\sigma_1^2,\ldots,\sigma_n^2)$.

**WLS (Weighted Least Squares):** caso speciale di GLS — pesa le osservazioni per $1/\sigma_i^2$. Osservazioni più precise pesano di più.

---

## Esercizi

<details>
<summary>Esercizio 1 — Conseguenze</summary>

Un modello OLS stimato con eteroschedasticità dà $\hat\beta_1=2.5$, $t=3.1$, $p=0.002$. Con SE robusti, $t=1.8$, $p=0.07$. Cosa cambia?

**Soluzione.**

$\hat\beta_1=2.5$ è invariato (OLS è non distorto anche con eteroschedasticità).

Ma la significatività cambia: con SE classici si rifiutava $H_0$ al 5%; con SE robusti no ($p=0.07>0.05$).

Il test classico era **spuriamente significativo** per eteroschedasticità.

</details>

<details>
<summary>Esercizio 2 — Test di Breusch-Pagan</summary>

Dopo regressione OLS con $n=100$ e $k=2$ regressori, si regredisce $\hat{u}^2$ su $x_1,x_2$: $R^2=0.08$. Testare omoschedasticità a $\alpha=0.05$.

**Soluzione.**

$LM=nR^2=100\cdot0.08=8$.

$\chi^2_{2,0.05}=5.99$. Poiché $8>5.99$: **rifiutare** $H_0$. Evidenza di eteroschedasticità.

</details>

<details>
<summary>Esercizio 3 — WLS</summary>

Si sa che $\text{Var}(u_i)=\sigma^2 x_i$. Come applicare WLS?

**Soluzione.**

Pesare ogni osservazione per $w_i=1/x_i$ (radice: $1/\sqrt{x_i}$). Equivalente a moltiplicare il modello per $1/\sqrt{x_i}$:

$$\frac{y_i}{\sqrt{x_i}} = \frac{\beta_0}{\sqrt{x_i}}+\beta_1\sqrt{x_i}+\frac{u_i}{\sqrt{x_i}}$$

Il termine di errore trasformato $u_i/\sqrt{x_i}$ ha varianza $\sigma^2$ — il modello è omoschedastico e OLS standard è BLUE.

</details>
