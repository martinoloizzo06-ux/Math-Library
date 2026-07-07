---
id: statistica-03-mle-momenti
subject: statistica
topic_it: Fondamenti di inferenza
topic_en: Foundations of inference
title_it: Massima verosimiglianza e metodo dei momenti
title_en: Maximum likelihood and method of moments
level: purple
order: 3
source_book: "L. Wasserman, All of Statistics; Casella & Berger, Statistical Inference"
source_chapter: "Cap. 9 — MLE"
---

## Funzione di verosimiglianza

Dato il campione osservato $\mathbf{x}=(x_1,\ldots,x_n)$, la **funzione di verosimiglianza** è:

$$L(\theta) = \prod_{i=1}^n f(x_i;\theta)$$

(densità o PMF valutata nei dati osservati, vista come funzione di $\theta$).

**Log-verosimiglianza:** $\ell(\theta)=\ln L(\theta)=\sum_{i=1}^n\ln f(x_i;\theta)$ — più semplice da massimizzare.

## Stimatore di massima verosimiglianza (MLE)

$$\hat\theta_{\text{MLE}} = \arg\max_\theta L(\theta) = \arg\max_\theta\ell(\theta)$$

**Condizione del primo ordine:** $\dfrac{\partial\ell}{\partial\theta}=0$ (equazione di verosimiglianza).

**Proprietà dell'MLE:**
- Consistente: $\hat\theta\xrightarrow{P}\theta$.
- Asintoticamente normale: $\sqrt{n}(\hat\theta-\theta)\xrightarrow{d}\mathcal{N}(0,1/I(\theta))$.
- Asintoticamente efficiente: raggiunge il limite di Cramér-Rao asintoticamente.
- **Invarianza:** $\widehat{g(\theta)}=g(\hat\theta_{\text{MLE}})$.

## Metodo dei momenti

Uguagliare i momenti teorici ai momenti campionari.

Per $k$ parametri, risolvere il sistema:

$$E[X^j](\theta) = \frac{1}{n}\sum_{i=1}^n X_i^j, \quad j=1,\ldots,k$$

Più semplice dell'MLE ma generalmente meno efficiente.

---

## Esercizi

<details>
<summary>Esercizio 1 — MLE per la normale</summary>

$X_1,\ldots,X_n\sim\mathcal{N}(\mu,\sigma^2)$. Trovare $\hat\mu_{\text{MLE}}$ e $\hat\sigma^2_{\text{MLE}}$.

**Soluzione.**

$\ell(\mu,\sigma^2)=-\dfrac{n}{2}\ln(2\pi\sigma^2)-\dfrac{1}{2\sigma^2}\sum(x_i-\mu)^2$.

$\partial\ell/\partial\mu=0$: $\hat\mu=\bar{x}$.

$\partial\ell/\partial\sigma^2=0$: $\hat\sigma^2=\dfrac{1}{n}\sum(x_i-\bar{x})^2$.

Nota: $\hat\sigma^2_{\text{MLE}}$ è **distorto** (divisore $n$ invece di $n-1$).

</details>

<details>
<summary>Esercizio 2 — MLE per Poisson</summary>

$X_1,\ldots,X_n\sim\text{Pois}(\lambda)$. Trovare $\hat\lambda_{\text{MLE}}$.

**Soluzione.**

$\ell(\lambda)=\sum x_i\ln\lambda-n\lambda-\sum\ln(x_i!)$.

$\ell'(\lambda)=\dfrac{\sum x_i}{\lambda}-n=0 \Rightarrow \hat\lambda=\bar{x}$.

L'MLE per Poisson è la media campionaria. (Non distorto: $E[\bar{X}]=\lambda$.)

</details>

<details>
<summary>Esercizio 3 — Metodo dei momenti per Gamma</summary>

$X_i\sim\text{Gamma}(\alpha,\beta)$. Stimare $\alpha$ e $\beta$ con il metodo dei momenti.

**Soluzione.**

$E[X]=\alpha/\beta=\bar{x}$, $E[X^2]=(\alpha+\alpha^2)/\beta^2$ e quindi $\text{Var}(X)=\alpha/\beta^2=s^2$.

Da queste due equazioni: $\hat\beta=\bar{x}/s^2$, $\hat\alpha=\bar{x}^2/s^2$.

</details>
