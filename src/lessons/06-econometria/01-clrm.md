---
id: econometria-01-clrm
subject: econometria
topic_it: Regressione OLS
topic_en: OLS regression
title_it: Il modello di regressione lineare classico
title_en: The classical linear regression model
level: purple
order: 1
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Cap. 1–2 — CLRM"
---

## Modello econometrico

$$y_i = \beta_0 + \beta_1 x_{1i} + \cdots + \beta_k x_{ki} + u_i = \mathbf{x}_i'\boldsymbol\beta + u_i$$

- $y_i$: variabile dipendente.
- $x_{ji}$: regressori (variabili esplicative).
- $u_i$: **termine di errore** — cattura tutto ciò che non è nei regressori.
- $\boldsymbol\beta$: parametri da stimare.

## Assunzioni di Gauss-Markov

**OLS.1 (linearità nei parametri):** $y=X\boldsymbol\beta+\mathbf{u}$.

**OLS.2 (campionamento casuale):** le osservazioni sono i.i.d. dalla popolazione.

**OLS.3 (no multicollinearità perfetta):** $X$ ha rango pieno ($k+1$) — nessun regressore è combinazione lineare degli altri.

**OLS.4 (esogeneità):** $E[u_i\mid\mathbf{x}_i]=0$ — l'errore ha media zero condizionata ai regressori.

**OLS.5 (omoschedasticità):** $\text{Var}(u_i\mid\mathbf{x}_i)=\sigma^2$ — varianza costante.

Sotto OLS.1–OLS.5: $\hat{\boldsymbol\beta}_{\text{OLS}}$ è il **BLUE** (Teorema di Gauss-Markov).

## Assunzione aggiuntiva

**OLS.6 (normalità):** $u_i\mid\mathbf{x}_i\sim\mathcal{N}(0,\sigma^2)$ — per l'inferenza esatta con campioni piccoli.

## Interpretazione causale

**Attenzione!** L'OLS stima correlazioni/associazioni. Per interpretazione causale servono:
- Assegnazione randomizzata (RCT), oppure
- Un'appropriata strategia di identificazione (IV, DiD, RDD, ...).

Se OLS.4 è violata (variabili omesse, causalità inversa): lo stimatore OLS è **distorto e inconsistente**.

---

## Esercizi

<details>
<summary>Esercizio 1 — Interpretazione del modello</summary>

Modello salariale: $\ln(\text{salario})=\beta_0+\beta_1\text{istruzione}+\beta_2\text{esperienza}+u$. Interpretare $\beta_1$.

**Soluzione.**

Con variabile dipendente in log: $\beta_1$ è l'**effetto percentuale** approssimato di un anno aggiuntivo di istruzione sul salario, tenuto costante il livello di esperienza.

Se $\beta_1=0.08$: un anno in più di istruzione è associato in media all'8% in più di salario (cet. par.).

</details>

<details>
<summary>Esercizio 2 — Violazione OLS.4</summary>

Nel modello $y=\beta_0+\beta_1 x+u$, si omette una variabile $z$ correlata con $x$. Come viene distorto $\hat\beta_1$?

**Soluzione.**

Se $z$ è nella regressione vera e $\text{Cov}(x,z)\neq 0$: l'omissione causa **bias da variabile omessa**:

$E[\hat\beta_1]=\beta_1+\beta_z\cdot\delta$, dove $\delta=\text{Cov}(x,z)/\text{Var}(x)$.

Il segno del bias dipende dai segni di $\beta_z$ e $\delta$.

</details>

<details>
<summary>Esercizio 3 — Gauss-Markov</summary>

Cosa afferma il teorema di Gauss-Markov e quali assunzioni richiede?

**Soluzione.**

**Enunciato:** sotto OLS.1–OLS.5, lo stimatore OLS è il BLUE — tra tutti gli stimatori lineari non distorti, ha la varianza minima.

**Assunzioni necessarie:** linearità, esogeneità, no multicollinearità perfetta, omoschedasticità. La normalità (OLS.6) non è richiesta per Gauss-Markov, ma è necessaria per l'inferenza esatta con campioni finiti.

</details>
