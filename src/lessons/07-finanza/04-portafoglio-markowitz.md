---
id: finanza-04-markowitz
subject: finanza
topic_it: Teoria del portafoglio
topic_en: Portfolio theory
title_it: Teoria del portafoglio di Markowitz
title_en: Markowitz portfolio theory
level: purple
order: 4
source_book: "Bodie, Kane & Marcus, Investments; J.C. Hull, Options, Futures and Other Derivatives"
source_chapter: "Cap. 7–8 — Portafoglio"
---

## Rendimento e rischio del portafoglio

Per un portafoglio di $n$ asset con pesi $w_i$ ($\sum w_i=1$):

**Rendimento atteso:**

$$E[R_p]=\sum_{i=1}^n w_i E[R_i]=\mathbf{w}'\boldsymbol\mu$$

**Varianza (rischio):**

$$\sigma_p^2=\sum_i\sum_j w_i w_j\sigma_{ij}=\mathbf{w}'\Sigma\mathbf{w}$$

dove $\sigma_{ij}=\text{Cov}(R_i,R_j)$.

**Con due asset:**

$$\sigma_p^2=w_1^2\sigma_1^2+w_2^2\sigma_2^2+2w_1w_2\rho_{12}\sigma_1\sigma_2$$

## Diversificazione

Se $\rho_{12}<1$: la varianza del portafoglio è **minore** della media ponderata delle varianze.

**Portafoglio a varianza minima** (due asset):

$$w_1^* = \frac{\sigma_2^2-\rho_{12}\sigma_1\sigma_2}{\sigma_1^2+\sigma_2^2-2\rho_{12}\sigma_1\sigma_2}$$

## Frontiera efficiente

L'insieme dei portafogli con **rendimento atteso massimo per ogni livello di rischio** (o rischio minimo per ogni livello di rendimento) forma la **frontiera efficiente** nello spazio $(\sigma,E[R])$.

**Portafogli efficienti:** dominano tutti gli altri per le preferenze di un investitore razionale.

## Tangency portfolio

Se esiste un **asset privo di rischio** con rendimento $r_f$: la **Capital Market Line (CML)** è la retta tangente alla frontiera efficiente che parte da $(0,r_f)$.

Il punto di tangenza è il **market portfolio** (con asset rischiosi); gli investitori scelgono una combinazione di $r_f$ e market portfolio.

---

## Esercizi

<details>
<summary>Esercizio 1 — Portafoglio di due asset</summary>

Asset A: $E[R_A]=8\%$, $\sigma_A=10\%$. Asset B: $E[R_B]=12\%$, $\sigma_B=20\%$, $\rho_{AB}=0.3$. Portafoglio $50\%/50\%$: calcolare $E[R_p]$ e $\sigma_p$.

**Soluzione.**

$E[R_p]=0.5\cdot8+0.5\cdot12=10\%$.

$\sigma_p^2=0.25\cdot100+0.25\cdot400+2\cdot0.25\cdot0.3\cdot10\cdot20=25+100+30=155$.

$\sigma_p=\sqrt{155}\approx\mathbf{12.45\%}$ — minore della media $15\%$: beneficio della diversificazione. ✓

</details>

<details>
<summary>Esercizio 2 — Varianza minima</summary>

Con i dati dell'es. 1, trovare il portafoglio a varianza minima.

**Soluzione.**

$w_A^*=\dfrac{400-0.3\cdot10\cdot20}{100+400-2\cdot0.3\cdot10\cdot20}=\dfrac{400-60}{500-120}=\dfrac{340}{380}\approx 89.5\%$.

$w_B^*=10.5\%$.

Quasi tutto in A (meno rischioso).

</details>

<details>
<summary>Esercizio 3 — Diversificazione</summary>

Con $n$ asset i.i.d. ($\sigma^2$ ciascuno, $\text{Cov}=0$) e pesi uguali: come si comporta $\sigma_p^2$ per $n\to\infty$?

**Soluzione.**

$\sigma_p^2=n\cdot(1/n)^2\cdot\sigma^2=\sigma^2/n\to 0$.

La diversificazione elimina completamente il rischio se le covarianze sono nulle (rischio idiosincratico). Con covarianze positive, rimane un **rischio sistematico** non diversificabile.

</details>
