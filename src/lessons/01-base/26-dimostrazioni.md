---
id: base-26-dimostrazioni
subject: base
topic_it: Ragionamento matematico
topic_en: Mathematical reasoning
title_it: Tecniche di dimostrazione
title_en: Proof techniques
level: green
order: 26
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Appendice — Dimostrazioni"
---

## Cos'è una dimostrazione

Una **dimostrazione** è una catena finita di passi logici che, a partire da ipotesi (assiomi o teoremi già noti), porta alla tesi. Il risultato dimostrato si chiama **teorema**; il metodo usato è la **tecnica di dimostrazione**.

## Dimostrazione diretta

Si parte dalle ipotesi e si perviene alla tesi per deduzioni successive.

**Esempio.** Dimostrare che la somma di due numeri pari è pari.

*Dimostrazione.* Siano $m = 2a$ e $n = 2b$ (con $a, b \in \mathbb{Z}$). Allora:

$$m + n = 2a + 2b = 2(a+b)$$

Poiché $a+b \in \mathbb{Z}$, $m+n$ è pari. $\square$

## Dimostrazione per assurdo (contraddizione)

Si assume la negazione della tesi e si mostra che porta a una contraddizione.

**Esempio.** Dimostrare che $\sqrt{2}$ è irrazionale.

*Dimostrazione.* Supponiamo per assurdo che $\sqrt{2} = p/q$ con $p, q \in \mathbb{Z}$, $q \neq 0$, e $\gcd(p,q)=1$.  
Allora $p^2 = 2q^2$, quindi $p^2$ è pari, e quindi $p$ è pari: $p = 2k$.  
Sostituendo: $4k^2 = 2q^2 \implies q^2 = 2k^2$, quindi $q$ è pari.  
Ma allora $\gcd(p,q) \geq 2$, contraddicendo l'ipotesi. $\square$

## Dimostrazione per contrapposizione

Invece di dimostrare $P \Rightarrow Q$, si dimostra l'equivalente $\lnot Q \Rightarrow \lnot P$.

**Esempio.** "Se $n^2$ è pari, allora $n$ è pari."

*Dimostrazione per contrapposizione.* Supponiamo $n$ dispari: $n = 2k+1$. Allora:

$$n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2+2k) + 1$$

che è dispari. Dunque, per contrapposizione, se $n^2$ è pari allora $n$ è pari. $\square$

## Induzione matematica

Per dimostrare che $P(n)$ vale per ogni $n \geq n_0$:

1. **Base:** verificare $P(n_0)$.
2. **Passo induttivo:** assumere $P(k)$ (ipotesi induttiva) e dimostrare $P(k+1)$.

**Esempio.** Dimostrare che $\displaystyle\sum_{i=1}^{n} i = \dfrac{n(n+1)}{2}$.

*Base:* $n=1$: $\sum = 1 = \dfrac{1 \cdot 2}{2}$ ✓

*Passo:* Supponiamo $\displaystyle\sum_{i=1}^{k} i = \dfrac{k(k+1)}{2}$. Allora:

$$\sum_{i=1}^{k+1} i = \frac{k(k+1)}{2} + (k+1) = (k+1)\left(\frac{k}{2}+1\right) = \frac{(k+1)(k+2)}{2} \quad \square$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Dimostrazione diretta</summary>

Dimostrare che il prodotto di due numeri dispari è dispari.

**Soluzione.**

Siano $m = 2a+1$ e $n = 2b+1$. Allora:

$$mn = (2a+1)(2b+1) = 4ab + 2a + 2b + 1 = 2(2ab+a+b) + 1$$

Poiché $2ab+a+b \in \mathbb{Z}$, il prodotto è dispari. $\square$

</details>

<details>
<summary>Esercizio 2 — Induzione</summary>

Dimostrare per induzione che $\displaystyle\sum_{i=1}^{n} i^2 = \dfrac{n(n+1)(2n+1)}{6}$.

**Soluzione.**

*Base:* $n=1$: $1 = \dfrac{1 \cdot 2 \cdot 3}{6} = 1$ ✓.

*Passo:* Assumiamo vero per $k$.

$$\sum_{i=1}^{k+1}i^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2 = \frac{(k+1)[k(2k+1) + 6(k+1)]}{6}$$
$$= \frac{(k+1)(2k^2+7k+6)}{6} = \frac{(k+1)(k+2)(2k+3)}{6} \quad \square$$

</details>

<details>
<summary>Esercizio 3 — Per assurdo</summary>

Dimostrare che non esistono interi $a, b$ tali che $a^2 - 4b = 2$.

**Soluzione.**

Supponiamo per assurdo che esistano tali $a, b$. Allora $a^2 = 4b + 2 = 2(2b+1)$, quindi $a^2$ è pari, e quindi $a$ è pari: $a = 2c$.

$(2c)^2 = 4c^2 = 4b+2 \implies 4c^2 - 4b = 2 \implies 2(2c^2-2b) = 2 \implies 2c^2-2b = 1$.

Ma il membro sinistro è pari e il destro è dispari: contraddizione. $\square$

</details>
