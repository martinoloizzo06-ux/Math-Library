---
id: statistica-06-test-t
subject: statistica
topic_it: Test di ipotesi
topic_en: Hypothesis testing
title_it: Test t (una e due campioni)
title_en: t-tests (one and two samples)
level: purple
order: 6
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 10 — Test t"
---

## Test t a un campione

**Ipotesi:** $H_0:\mu=\mu_0$ vs $H_1:\mu\neq\mu_0$ (o $>$, $<$).

**Statistica test:**

$$t = \frac{\bar{X}-\mu_0}{S/\sqrt{n}} \sim t(n-1) \text{ sotto } H_0$$

**Regione critica** (livello $\alpha$, test bilaterale): $|t|>t_{n-1,\alpha/2}$.

**p-value:** $2P(T_{n-1}>|t_{\text{obs}}|)$ per test bilaterale.

## Test t a due campioni indipendenti

**Ipotesi:** $H_0:\mu_1=\mu_2$ vs $H_1:\mu_1\neq\mu_2$.

**Con uguale varianza** ($\sigma_1^2=\sigma_2^2=\sigma^2$, stimata da $S_p^2$):

$$S_p^2 = \frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}$$

$$t = \frac{\bar{X}_1-\bar{X}_2}{S_p\sqrt{1/n_1+1/n_2}} \sim t(n_1+n_2-2) \text{ sotto } H_0$$

**Con varianze disuguali** (test di Welch):

$$t = \frac{\bar{X}_1-\bar{X}_2}{\sqrt{S_1^2/n_1+S_2^2/n_2}} \approx t(\nu)$$

dove $\nu$ (gradi di libertà di Welch) si calcola con la formula di Satterthwaite.

## Test t a coppie (paired t-test)

Quando le osservazioni sono appaiate $(X_{1i},X_{2i})$: definire $D_i=X_{1i}-X_{2i}$ e applicare il test t a un campione a $D_i$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Test t a un campione</summary>

$n=25$, $\bar{x}=52$, $s=10$. Testare $H_0:\mu=50$ vs $H_1:\mu>50$ a $\alpha=0.05$.

**Soluzione.**

$t_{\text{obs}}=\dfrac{52-50}{10/5}=\dfrac{2}{2}=1$.

$t_{24,0.05}=1.711$ (unilaterale). Poiché $1<1.711$: **non rifiutare** $H_0$.

$p\text{-value}=P(T_{24}>1)\approx 0.163 > 0.05$.

</details>

<details>
<summary>Esercizio 2 — Due campioni</summary>

Gruppo A: $n_1=10$, $\bar{x}_1=65$, $s_1=8$. Gruppo B: $n_2=12$, $\bar{x}_2=60$, $s_2=7$.

Testare $H_0:\mu_1=\mu_2$ a $\alpha=0.05$.

**Soluzione.**

$S_p^2=\dfrac{9\cdot64+11\cdot49}{20}=\dfrac{576+539}{20}=55.75$. $S_p\approx 7.47$.

$t=\dfrac{65-60}{7.47\sqrt{1/10+1/12}}=\dfrac{5}{7.47\cdot0.4282}\approx\dfrac{5}{3.20}\approx 1.56$.

$t_{20,0.025}=2.086$. Poiché $1.56<2.086$: **non rifiutare** $H_0$.

</details>

<details>
<summary>Esercizio 3 — Test a coppie</summary>

Pressioni arteriose prima/dopo trattamento: differenze $D_i$: $-5,-3,0,-7,2,-4$. Testare se il trattamento riduce la pressione ($H_1:\mu_D<0$) a $\alpha=0.05$.

**Soluzione.**

$\bar{d}=-17/6\approx-2.83$. $s_D\approx 3.13$. $n=6$.

$t=\dfrac{-2.83}{3.13/\sqrt{6}}\approx\dfrac{-2.83}{1.279}\approx -2.21$.

$t_{5,0.05}=2.015$ (unilaterale). Poiché $|-2.21|>2.015$: **rifiutare** $H_0$. Il trattamento riduce la pressione.

</details>
