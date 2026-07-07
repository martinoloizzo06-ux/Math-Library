---
id: statistica-11-non-parametrici
subject: statistica
topic_it: Metodi avanzati
topic_en: Advanced methods
title_it: Metodi non parametrici
title_en: Non-parametric methods
level: purple
order: 11
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 14 — Metodi non parametrici"
---

## Quando usarli

I metodi non parametrici non assumono una distribuzione specifica per i dati. Utili quando:
- I dati non sono normali e $n$ è piccolo.
- Si lavora con variabili ordinali o ranghi.
- Le assunzioni dei test parametrici sono violate.

## Test di Wilcoxon (test dei ranghi con segno)

**Alternativa non parametrica al test t a un campione.**

**Procedura:**
1. Calcolare $d_i=x_i-\mu_0$.
2. Ordinare i $|d_i|$ e assegnare i ranghi.
3. Statistica $W^+=$ somma dei ranghi dei $d_i>0$.

Sotto $H_0$: distribuzione tabulata; per $n$ grande: approssimazione normale.

## Test di Mann-Whitney (Wilcoxon a due campioni)

**Alternativa non parametrica al test t a due campioni indipendenti.**

Combina i due campioni, assegna i ranghi globali, e testa se la distribuzione dei ranghi è la stessa nei due gruppi.

Statistica $U$ (o $W$) con distribuzione tabulata.

## Test di Kruskal-Wallis

**Alternativa non parametrica all'ANOVA a una via.**

$$H = \frac{12}{n(n+1)}\sum_{i=1}^k\frac{R_i^2}{n_i} - 3(n+1) \approx \chi^2(k-1)$$

dove $R_i$ è la somma dei ranghi nel gruppo $i$.

## Correlazione di Spearman

Misura l'associazione **monotonica** (non necessariamente lineare):

$$r_s = 1-\frac{6\sum d_i^2}{n(n^2-1)}$$

dove $d_i$ = differenza tra i ranghi di $x_i$ e $y_i$.

$r_s\in[-1,1]$: robusto agli outlier, valido per dati ordinali.

---

## Esercizi

<details>
<summary>Esercizio 1 — Test di Wilcoxon</summary>

Differenze: $-2, 3, 1, -4, 5, -1$. Testare $H_0:\text{mediana}=0$ a $\alpha=0.05$.

**Soluzione.**

$|d_i|=2,3,1,4,5,1$. Ranghi di $|d_i|$ (medi per pari): $|d|=1,1,2,3,4,5$ → ranghi $1.5,1.5,3,4,5,6$.

$d>0$: $3(r=4),1(r=1.5),5(r=6)$. $W^+=4+1.5+6=11.5$.

Per $n=6$, $\alpha=0.05$: valore critico $W^+=2$ (unilaterale) o $0,21$ (bilaterale). $W^+=11.5$ nell'area di non rifiuto: **non rifiutare** $H_0$.

</details>

<details>
<summary>Esercizio 2 — Correlazione di Spearman</summary>

Calcolare $r_s$ per $(x,y)$: ranghi $x$: $1,2,3,4,5$; ranghi $y$: $2,1,4,3,5$.

**Soluzione.**

$d_i=(-1,1,-1,1,0)$. $\sum d_i^2=1+1+1+1+0=4$.

$r_s=1-\dfrac{6\cdot4}{5\cdot24}=1-\dfrac{24}{120}=1-0.2=\mathbf{0.8}$.

</details>

<details>
<summary>Esercizio 3 — Confronto con parametrico</summary>

Vantaggi e svantaggi dei metodi non parametrici.

**Soluzione.**

**Vantaggi:** nessuna assunzione distributiva; robusti agli outlier; applicabili a dati ordinali; validi per $n$ piccoli.

**Svantaggi:** minore potenza rispetto ai test parametrici quando le assunzioni sono soddisfatte; meno efficienti; più difficili da estendere a modelli complessi.

</details>
