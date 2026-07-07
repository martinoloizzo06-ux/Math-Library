---
id: statistica-07-test-chi-f
subject: statistica
topic_it: Test di ipotesi
topic_en: Hypothesis testing
title_it: Test chi-quadro e test F
title_en: Chi-square and F tests
level: purple
order: 7
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 10 — Test non parametrici e varianze"
---

## Test chi-quadro di bontà di adattamento

**Ipotesi:** $H_0$: i dati seguono la distribuzione specificata.

**Procedura:** con $k$ categorie, frequenze osservate $O_i$ e attese $E_i=np_i^0$:

$$\chi^2 = \sum_{i=1}^k\frac{(O_i-E_i)^2}{E_i} \approx \chi^2(k-1) \text{ sotto } H_0$$

Rifiutare $H_0$ se $\chi^2>\chi^2_{k-1,\alpha}$.

**Regola pratica:** ogni $E_i\geq 5$.

## Test chi-quadro di indipendenza

Per una tavola di contingenza $r\times c$, testare se le due variabili categoriali sono indipendenti:

$$\chi^2=\sum_{i,j}\frac{(O_{ij}-E_{ij})^2}{E_{ij}}, \quad E_{ij}=\frac{R_i C_j}{n}$$

$\sim\chi^2((r-1)(c-1))$ sotto $H_0$.

## Test F per l'uguaglianza delle varianze

**Ipotesi:** $H_0:\sigma_1^2=\sigma_2^2$ vs $H_1:\sigma_1^2\neq\sigma_2^2$.

$$F = \frac{S_1^2}{S_2^2} \sim F(n_1-1,\,n_2-1) \text{ sotto } H_0$$

Rifiutare $H_0$ se $F<F_{n_1-1,n_2-1,1-\alpha/2}$ o $F>F_{n_1-1,n_2-1,\alpha/2}$.

## Test chi-quadro per la varianza

**Ipotesi:** $H_0:\sigma^2=\sigma_0^2$.

$$\chi^2=\frac{(n-1)S^2}{\sigma_0^2}\sim\chi^2(n-1) \text{ sotto } H_0$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Bontà di adattamento</summary>

Un dado viene lanciato 60 volte. Frequenze osservate: 8, 12, 10, 11, 9, 10. Il dado è equilibrato? ($\alpha=0.05$)

**Soluzione.**

$E_i=60/6=10$ per ogni faccia. $k=6$.

$\chi^2=\dfrac{(8-10)^2}{10}+\dfrac{(12-10)^2}{10}+\cdots=\dfrac{4+4+0+1+1+0}{10}=1$.

$\chi^2_{5,0.05}=11.07$. Poiché $1\ll 11.07$: **non rifiutare** $H_0$. Il dado sembra equilibrato.

</details>

<details>
<summary>Esercizio 2 — Tavola di contingenza</summary>

Testare l'indipendenza tra genere e preferenza politica (tavola $2\times 2$, $n=100$):

|  | Sinistra | Destra |
|---|---|---|
| M | 30 | 20 |
| F | 25 | 25 |

**Soluzione.**

$R_1=50$, $R_2=50$. $C_1=55$, $C_2=45$.

$E_{11}=50\cdot55/100=27.5$, $E_{12}=22.5$, $E_{21}=27.5$, $E_{22}=22.5$.

$\chi^2=\dfrac{(30-27.5)^2}{27.5}+\dfrac{(20-22.5)^2}{22.5}+\dfrac{(25-27.5)^2}{27.5}+\dfrac{(25-22.5)^2}{22.5}$

$=0.227+0.278+0.227+0.278=\mathbf{1.01}$.

$\chi^2_{1,0.05}=3.84$. Non rifiutare $H_0$: non c'è evidenza di dipendenza.

</details>

<details>
<summary>Esercizio 3 — Test F</summary>

Due gruppi: $n_1=10$, $s_1^2=16$; $n_2=15$, $s_2^2=9$. Testare uguaglianza varianze a $\alpha=0.10$.

**Soluzione.**

$F=16/9\approx 1.78$. $F(9,14)_{0.05}=2.65$ (quantile 95%). $1/F=0.563$, $F_{0.95}$ per $(14,9)$=... Si vede che $1.78<2.65$: **non rifiutare** $H_0$.

</details>
