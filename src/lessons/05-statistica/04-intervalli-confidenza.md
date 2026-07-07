---
id: statistica-04-intervalli-confidenza
subject: statistica
topic_it: Fondamenti di inferenza
topic_en: Foundations of inference
title_it: Intervalli di confidenza
title_en: Confidence intervals
level: purple
order: 4
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 8 — Intervalli di confidenza"
---

## Definizione

Un **intervallo di confidenza** al livello $1-\alpha$ per $\theta$ è un intervallo aleatorio $[L,U]$ (funzione del campione) tale che:

$$P(\theta\in[L,U])\geq 1-\alpha$$

**Interpretazione frequentista:** se ripetiamo l'esperimento molte volte, la percentuale $1-\alpha$ degli intervalli costruiti conterrà il vero $\theta$.

**Attenzione:** non si dice "$\theta$ ha probabilità $1-\alpha$ di cadere in $[L,U]$" — $\theta$ è fisso, non aleatorio!

## IC per la media — $\sigma$ nota

Con $X_1,\ldots,X_n\sim\mathcal{N}(\mu,\sigma^2)$ e $\sigma$ nota:

$$\bar{X}\pm z_{\alpha/2}\frac{\sigma}{\sqrt{n}}$$

dove $z_{\alpha/2}=\Phi^{-1}(1-\alpha/2)$. Per $\alpha=0.05$: $z_{0.025}=1.96$.

Per $n$ grande e $\sigma$ ignota (TCL): sostituire $\sigma$ con $S$.

## IC per la media — $\sigma$ ignota

Esattamente (con dati normali):

$$\bar{X}\pm t_{n-1,\alpha/2}\frac{S}{\sqrt{n}}$$

dove $t_{n-1,\alpha/2}$ è il quantile $1-\alpha/2$ della $t$ di Student con $n-1$ gradi di libertà.

## IC per la proporzione

$\hat{p}=X/n$ (proporzione campionaria), $X\sim\text{Bin}(n,p)$:

$$\hat{p}\pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

(approssimazione normale, valida per $np\geq 5$, $n(1-p)\geq 5$).

## Ampiezza e numerosità campionaria

Ampiezza $=2z_{\alpha/2}\sigma/\sqrt{n}$. Per ottenere ampiezza $\leq 2e$:

$$n\geq\left(\frac{z_{\alpha/2}\sigma}{e}\right)^2$$

---

## Esercizi

<details>
<summary>Esercizio 1 — IC al 95% con $\sigma$ ignota</summary>

$n=16$, $\bar{x}=50$, $s=8$. Costruire un IC al 95% per $\mu$.

**Soluzione.**

$t_{15,0.025}=2.131$ (tavola $t$ con 15 g.d.l.).

IC: $50\pm 2.131\cdot\dfrac{8}{\sqrt{16}}=50\pm 2.131\cdot 2=50\pm 4.262$.

IC: $\mathbf{[45.74,\;54.26]}$.

</details>

<details>
<summary>Esercizio 2 — IC per proporzione</summary>

In un sondaggio di 400 persone, 220 sono favorevoli. Costruire IC al 95%.

**Soluzione.**

$\hat{p}=220/400=0.55$. $z_{0.025}=1.96$.

$\text{SE}=\sqrt{0.55\cdot0.45/400}=\sqrt{0.000619}\approx 0.02488$.

IC: $0.55\pm1.96\cdot0.02488=0.55\pm0.0487$.

IC: $\mathbf{[0.501,\;0.599]}$.

</details>

<details>
<summary>Esercizio 3 — Numerosità campionaria</summary>

Quanti soggetti servono per stimare la media con errore massimo 2 al 95%, se $\sigma=10$?

**Soluzione.**

$n\geq\left(\dfrac{1.96\cdot10}{2}\right)^2=(9.8)^2=96.04$.

Serve $n\geq\mathbf{97}$.

</details>
