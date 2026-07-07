---
id: statistica-12-bayesiana
subject: statistica
topic_it: Metodi avanzati
topic_en: Advanced methods
title_it: Inferenza bayesiana
title_en: Bayesian inference
level: purple
order: 12
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 11 — Inferenza bayesiana"
---

## Paradigma bayesiano

Nella statistica bayesiana, $\theta$ è trattato come una **variabile aleatoria** con distribuzione a priori $\pi(\theta)$.

**Teorema di Bayes per l'inferenza:**

$$\pi(\theta\mid\mathbf{x}) \propto L(\theta;\mathbf{x})\,\pi(\theta)$$

- $\pi(\theta)$: **prior** — credenza su $\theta$ prima di osservare i dati.
- $L(\theta;\mathbf{x})$: **verosimiglianza** dei dati.
- $\pi(\theta\mid\mathbf{x})$: **posterior** — credenza aggiornata dopo aver osservato i dati.

## Stimatori bayesiani

- **MAP** (Maximum A Posteriori): $\hat\theta_{\text{MAP}}=\arg\max\pi(\theta\mid\mathbf{x})$.
- **Media posteriore:** $\hat\theta_{\text{Bayes}}=E[\theta\mid\mathbf{x}]$ — minimizza il rischio quadratico.

## Prior coniugati

Il prior $\pi(\theta)$ è **coniugato** per la verosimiglianza se il posterior ha la stessa forma del prior.

| Modello | Prior coniugato | Posterior |
|---|---|---|
| Binomiale($n$,$p$) | Beta($\alpha,\beta$) | Beta($\alpha+x,\beta+n-x$) |
| Poisson($\lambda$) | Gamma($\alpha,\beta$) | Gamma($\alpha+\sum x_i,\beta+n$) |
| Normale($\mu$,$\sigma^2$) | $\mathcal{N}(\mu_0,\tau^2)$ | Normale (formula combinata) |

## Intervallo di credibilità

Un intervallo di credibilità al $95\%$ è un intervallo $[a,b]$ tale che:

$$P(\theta\in[a,b]\mid\mathbf{x})=0.95$$

**Differenza dall'IC frequentista:** qui $\theta$ è aleatorio — l'intervallo contiene $\theta$ con probabilità 0.95 (dato il prior).

---

## Esercizi

<details>
<summary>Esercizio 1 — Aggiornamento bayesiano</summary>

Lancio una moneta e osservo $x=7$ teste su $n=10$. Prior: $p\sim\text{Beta}(2,2)$. Trovare il posterior.

**Soluzione.**

Posterior: $p\mid x\sim\text{Beta}(\alpha+x,\beta+n-x)=\text{Beta}(2+7,2+3)=\text{Beta}(9,5)$.

Media posteriore: $E[p\mid x]=9/(9+5)=9/14\approx 0.643$.

Confronto: MLE $=7/10=0.7$. Il prior porta la stima verso $0.5$.

</details>

<details>
<summary>Esercizio 2 — Prior non informativo</summary>

Qual è l'effetto di un prior uniforme $p\sim\text{Beta}(1,1)$?

**Soluzione.**

Posterior: $\text{Beta}(1+x,1+n-x)$. Media posteriore $=(x+1)/(n+2)$.

Con $n$ grande, la media posteriore $\to x/n$ = MLE. Il prior uniforme è "non informativo": i dati dominano.

</details>

<details>
<summary>Esercizio 3 — Bayesiana vs Frequentista</summary>

Confrontare l'approccio bayesiano e frequentista per l'intervallo di stima.

**Soluzione.**

**Frequentista:** IC al 95% = in ripetizioni dell'esperimento, il 95% degli IC costruiti conterrà il vero $\theta$ (fisso). Non si può dire che $\theta$ sia nell'IC con probabilità 0.95.

**Bayesiano:** IC di credibilità al 95% = dato il prior e i dati, $P(\theta\in[a,b]\mid\mathbf{x})=0.95$. Interpretazione diretta, ma dipende dal prior scelto.

</details>
