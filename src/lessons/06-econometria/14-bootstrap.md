---
id: econometria-14-bootstrap
subject: econometria
topic_it: Modelli non lineari
topic_en: Non-linear models
title_it: Bootstrap e inferenza computazionale
title_en: Bootstrap and computational inference
level: purple
order: 14
source_book: "J.M. Wooldridge, Introductory Econometrics; B.E. Hansen, Econometrics"
source_chapter: "Appendice — Bootstrap"
---

## Motivazione

Il bootstrap è un metodo di ricampionamento per stimare la distribuzione di uno stimatore quando:
- Le formule analitiche per i SE sono complesse o indisponibili.
- Le assunzioni asintotiche non si applicano (es. campioni piccoli, statistiche non standard).
- Si vuole validare l'inferenza classica.

## Bootstrap non parametrico

**Procedura (per SE di $\hat\theta$):**

1. Dal campione originale $(x_1,\ldots,x_n)$, estrarre $B$ campioni bootstrap di dimensione $n$ **con reinserimento**.
2. Per ogni campione bootstrap $b$, calcolare $\hat\theta^{(b)}$.
3. SE bootstrap: $\hat{\text{SE}}_B(\hat\theta)=\sqrt{\dfrac{1}{B-1}\sum_{b=1}^B(\hat\theta^{(b)}-\bar\theta^*)^2}$.

**IC bootstrap percentile:** $[\hat\theta^{(\alpha/2)},\;\hat\theta^{(1-\alpha/2)}]$ (quantili della distribuzione bootstrap).

## IC bootstrap BC$_a$ (accelerated bias-corrected)

Corregge per distorsione e asimmetria della distribuzione bootstrap — più accurato del semplice percentile.

## Bootstrap parametrico

Invece di ricampionare i dati, si genera nuovi campioni dal modello stimato $\hat{f}(x;\hat\theta)$.

## Permutation test

Per testare indipendenza o uguaglianza di distribuzioni: permutare i dati tra i gruppi e calcolare la statistica test, ottenendo la distribuzione nulla empiricamente.

---

## Esercizi

<details>
<summary>Esercizio 1 — Procedura bootstrap</summary>

Campione: $3,5,2,8,6$. Descrivere un campione bootstrap possibile e calcolare la media.

**Soluzione.**

Un possibile campione bootstrap (con reinserimento da $\{3,5,2,8,6\}$): $\{5,5,2,8,3\}$.

Media bootstrap: $(5+5+2+8+3)/5=23/5=4.6$.

Con $B=1000$ ripetizioni, la distribuzione delle medie bootstrap approssima la distribuzione campionaria di $\bar{X}$.

</details>

<details>
<summary>Esercizio 2 — SE bootstrap</summary>

Con $B=4$ (per semplicità), medie bootstrap: $3.8, 4.2, 5.0, 4.4$. Calcolare SE bootstrap.

**Soluzione.**

$\bar\theta^*=(3.8+4.2+5.0+4.4)/4=17.4/4=4.35$.

$s^2=[(3.8-4.35)^2+(4.2-4.35)^2+(5.0-4.35)^2+(4.4-4.35)^2]/3$

$=[0.3025+0.0225+0.4225+0.0025]/3=0.75/3=0.25$.

SE$_B=\sqrt{0.25}=0.5$.

</details>

<details>
<summary>Esercizio 3 — Quando usare il bootstrap</summary>

Elencare tre situazioni in cui il bootstrap è particolarmente utile.

**Soluzione.**

1. **Statistiche complesse** (mediana, correlazioni di Spearman, quantili) senza formula analitica per i SE.
2. **Campioni piccoli** dove le approssimazioni asintotiche sono inaccurate.
3. **Regressione quantilica** — i SE analitici richiedono stima della densità degli errori; il bootstrap evita questo problema.

</details>
