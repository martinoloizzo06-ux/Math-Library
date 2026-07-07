---
id: probabilita-10-tcl
subject: probabilita
topic_it: Leggi dei grandi numeri
topic_en: Laws of large numbers
title_it: Teorema centrale del limite
title_en: Central limit theorem
level: blue
order: 10
source_book: "Blitzstein & Hwang, Introduction to Probability; MIT OCW 6.041"
source_chapter: "Cap. 9 — Teorema centrale del limite"
---

## Enunciato

Siano $X_1,X_2,\ldots$ variabili aleatorie i.i.d. con $E[X_i]=\mu$ e $\text{Var}(X_i)=\sigma^2<\infty$. Allora la somma standardizzata converge in distribuzione alla normale standard:

$$Z_n = \frac{\bar{X}_n-\mu}{\sigma/\sqrt{n}} = \frac{S_n-n\mu}{\sigma\sqrt{n}} \xrightarrow{d} \mathcal{N}(0,1)$$

cioè per ogni $z$: $\displaystyle\lim_{n\to\infty}P(Z_n\leq z)=\Phi(z)$.

**Forma pratica:** per $n$ grande, $\bar{X}_n\approx\mathcal{N}\!\left(\mu,\dfrac{\sigma^2}{n}\right)$.

## Approssimazione normale della binomiale

Per $X\sim\text{Bin}(n,p)$ con $n$ grande:

$$\frac{X-np}{\sqrt{np(1-p)}} \approx \mathcal{N}(0,1)$$

**Correzione di continuità:** $P(X\leq k)\approx\Phi\!\left(\dfrac{k+0.5-np}{\sqrt{np(1-p)}}\right)$ (migliora l'approssimazione).

Regola pratica: usare l'approssimazione quando $np\geq 5$ e $n(1-p)\geq 5$.

## Velocità di convergenza

**Teorema di Berry-Esseen:** l'errore nell'approssimazione è $O(1/\sqrt{n})$:

$$\sup_z |P(Z_n\leq z)-\Phi(z)|\leq \frac{C\,E[|X-\mu|^3]}{\sigma^3\sqrt{n}}$$

## Significato del TCL

Il TCL spiega perché la normale appare ovunque: qualsiasi grandezza che sia somma di molti contributi indipendenti e piccoli è approssimativamente normale — altezze, errori di misura, rendimenti finanziari aggregati, ecc.

---

## Esercizi

<details>
<summary>Esercizio 1 — Applicazione del TCL</summary>

Un'azienda lancia 400 monete. Qual è la probabilità che il numero di teste sia tra 180 e 220?

**Soluzione.**

$X\sim\text{Bin}(400,0.5)$. $\mu=200$, $\sigma=\sqrt{400\cdot0.5\cdot0.5}=10$.

$P(180\leq X\leq 220)=P\!\left(\dfrac{180-200}{10}\leq Z\leq\dfrac{220-200}{10}\right)=P(-2\leq Z\leq 2)$.

$=2\Phi(2)-1\approx 2\cdot0.9772-1\approx\mathbf{95.4\%}$.

</details>

<details>
<summary>Esercizio 2 — Somma di VA</summary>

$X_1,\ldots,X_{100}$ i.i.d. con $E[X_i]=2$, $\text{Var}(X_i)=9$. Calcolare $P(S_{100}\geq 225)$.

**Soluzione.**

$E[S_{100}]=200$, $\text{Var}(S_{100})=900$, $\sigma_{S}=30$.

$P(S_{100}\geq 225)=P\!\left(Z\geq\dfrac{225-200}{30}\right)=P(Z\geq 5/6)=1-\Phi(0.833)\approx 1-0.7977\approx\mathbf{20.2\%}$.

</details>

<details>
<summary>Esercizio 3 — Approssimazione binomiale</summary>

Una fabbrica produce componenti difettosi con probabilità $5\%$. Su 200 componenti, qual è la prob. di avere più di 15 difettosi?

**Soluzione.**

$X\sim\text{Bin}(200,0.05)$. $\mu=10$, $\sigma=\sqrt{200\cdot0.05\cdot0.95}=\sqrt{9.5}\approx 3.08$.

$P(X>15)\approx P\!\left(Z>\dfrac{15.5-10}{3.08}\right)=P(Z>1.786)=1-\Phi(1.786)\approx\mathbf{3.7\%}$.

(Usata la correzione di continuità: $X>15$ diventa $X\geq 15.5$.)

</details>
