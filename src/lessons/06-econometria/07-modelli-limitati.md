---
id: econometria-07-probit-logit
subject: econometria
topic_it: Modelli non lineari
topic_en: Non-linear models
title_it: Modelli con variabile dipendente binaria — Probit e Logit
title_en: Binary dependent variable models — Probit and Logit
level: purple
order: 7
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 17 — Variabile dipendente limitata"
---

## Il problema del modello lineare di probabilità

Il **LPM** (Linear Probability Model): $P(y=1\mid\mathbf{x})=\mathbf{x}'\boldsymbol\beta$.

**Problema:** le probabilità possono uscire da $[0,1]$. Usato solo per approssimazioni locali e semplicità interpretativa.

## Modelli Probit e Logit

Specificare $P(y=1\mid\mathbf{x})=G(\mathbf{x}'\boldsymbol\beta)$ con $G:[- \infty,+\infty]\to(0,1)$.

**Logit:** $G(z)=\Lambda(z)=\dfrac{e^z}{1+e^z}=\dfrac{1}{1+e^{-z}}$ (CDF logistica).

**Probit:** $G(z)=\Phi(z)$ (CDF della normale standard).

## Stima: massima verosimiglianza

Log-verosimiglianza:

$$\ell(\boldsymbol\beta)=\sum_{i:y_i=1}\ln G(\mathbf{x}_i'\boldsymbol\beta)+\sum_{i:y_i=0}\ln[1-G(\mathbf{x}_i'\boldsymbol\beta)]$$

Non esiste soluzione in forma chiusa: si usano algoritmi iterativi (Newton-Raphson).

## Effetti marginali

I coefficienti $\beta_j$ **non** misurano direttamente l'effetto su $P(y=1\mid\mathbf{x})$ come in OLS.

**Effetto marginale medio (AME):**

$$\text{AME}_j = \frac{1}{n}\sum_i g(\mathbf{x}_i'\hat{\boldsymbol\beta})\cdot\hat\beta_j$$

dove $g=G'$ (densità). Per il logit: $g(z)=\Lambda(z)(1-\Lambda(z))$.

## Odds ratio (Logit)

$$\frac{P(y=1\mid\mathbf{x})}{P(y=0\mid\mathbf{x})} = e^{\mathbf{x}'\boldsymbol\beta}$$

$e^{\beta_j}$: moltiplicatore degli odds per un'unità aggiuntiva di $x_j$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Probabilità predetta (Logit)</summary>

Modello logit: $\hat\beta_0=-2$, $\hat\beta_1=0.5$. Per $x=4$, calcolare $\hat P(y=1\mid x=4)$.

**Soluzione.**

$z=-2+0.5\cdot4=0$. $\hat P=\Lambda(0)=1/(1+e^0)=1/2=\mathbf{0.5}$.

</details>

<details>
<summary>Esercizio 2 — Effetto marginale</summary>

Nello stesso modello, calcolare l'effetto marginale di $x$ in $x=4$.

**Soluzione.**

$g(0)=\Lambda(0)(1-\Lambda(0))=0.5\cdot0.5=0.25$.

AME (in $x=4$): $0.25\cdot\hat\beta_1=0.25\cdot0.5=\mathbf{0.125}$.

Un'unità aggiuntiva di $x$ aumenta la probabilità di circa 12.5 pp (valutato in $x=4$).

</details>

<details>
<summary>Esercizio 3 — LPM vs Logit</summary>

Quando usare LPM e quando Logit/Probit?

**Soluzione.**

**LPM:** preferibile quando si vuole l'effetto medio causale (ATT/ATE) in grandi campioni, o si usano variabili strumentali (più semplice). Robusto agli errori di specificazione della forma funzionale. Problemi: probabilità fuori $[0,1]$, eteroschedasticità meccanica.

**Logit/Probit:** necessari se si vuole prevedere probabilità individuali o si lavora con probabilità vicine a 0 o 1. Più efficienti se il modello è correttamente specificato.

</details>
