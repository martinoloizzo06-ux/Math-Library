---
id: analisi-13-tecniche-integrazione
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Tecniche di integrazione (frazioni parziali, sostituzione trigonometrica)
title_en: Integration techniques (partial fractions, trigonometric substitution)
level: blue
order: 13
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 7 — Tecniche di integrazione"
---

## Frazioni parziali

Permette di integrare funzioni razionali $\dfrac{p(x)}{q(x)}$ decomposto in frazioni più semplici.

**Procedura:**
1. Se $\deg p \geq \deg q$: divisione polinomiale.
2. Scomposizione di $q(x)$ in fattori.
3. Decomposizione in frazioni parziali.
4. Determinazione dei coefficienti.

**Caso: fattori lineari distinti.** $\dfrac{p(x)}{(x-a)(x-b)} = \dfrac{A}{x-a}+\dfrac{B}{x-b}$.

**Esempio.** $\displaystyle\int\frac{dx}{x^2-1} = \int\frac{dx}{(x-1)(x+1)} = \int\left(\frac{1/2}{x-1}-\frac{1/2}{x+1}\right)dx = \frac{1}{2}\ln|x-1|-\frac{1}{2}\ln|x+1|+C$

$= \dfrac{1}{2}\ln\left|\dfrac{x-1}{x+1}\right|+C$.

**Caso: fattori ripetuti.** $\dfrac{p(x)}{(x-a)^2} = \dfrac{A}{x-a}+\dfrac{B}{(x-a)^2}$.

**Caso: fattori quadratici irriducibili.** $\dfrac{p(x)}{x^2+bx+c} = \dfrac{Ax+B}{x^2+bx+c}$.

## Sostituzione trigonometrica

Per integrali con $\sqrt{a^2-x^2}$, $\sqrt{a^2+x^2}$, $\sqrt{x^2-a^2}$:

| Espressione | Sostituzione | Identità usata |
|---|---|---|
| $\sqrt{a^2-x^2}$ | $x=a\sin\theta$ | $1-\sin^2\theta=\cos^2\theta$ |
| $\sqrt{a^2+x^2}$ | $x=a\tan\theta$ | $1+\tan^2\theta=\sec^2\theta$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec\theta$ | $\sec^2\theta-1=\tan^2\theta$ |

**Esempio.** $\displaystyle\int\frac{dx}{\sqrt{1-x^2}}$. Posto $x=\sin\theta$, $dx=\cos\theta\,d\theta$:

$$\int\frac{\cos\theta\,d\theta}{\cos\theta} = \int d\theta = \theta+C = \arcsin x+C$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Frazioni parziali</summary>

Calcolare $\displaystyle\int\frac{x+1}{x^2+3x+2}\,dx$.

**Soluzione.**

$x^2+3x+2=(x+1)(x+2)$. $\dfrac{x+1}{(x+1)(x+2)}=\dfrac{1}{x+2}$ (il fattore $(x+1)$ si cancella, per $x\neq -1$).

$$\int\frac{dx}{x+2} = \ln|x+2|+C$$

</details>

<details>
<summary>Esercizio 2 — Frazioni con fattori ripetuti</summary>

Calcolare $\displaystyle\int\frac{x^2+1}{x(x-1)^2}\,dx$.

**Soluzione.**

$\dfrac{x^2+1}{x(x-1)^2}=\dfrac{A}{x}+\dfrac{B}{x-1}+\dfrac{C}{(x-1)^2}$.

Moltiplicando: $x^2+1 = A(x-1)^2+Bx(x-1)+Cx$.

$x=0$: $1=A$. $x=1$: $2=C$. Confronto coefficienti $x^2$: $1=A+B \implies B=0$.

$$\int\left(\frac{1}{x}+\frac{2}{(x-1)^2}\right)dx = \ln|x|-\frac{2}{x-1}+C$$

</details>

<details>
<summary>Esercizio 3 — Sostituzione trig</summary>

Calcolare $\displaystyle\int\frac{dx}{\sqrt{4-x^2}}$.

**Soluzione.**

$x=2\sin\theta$, $dx=2\cos\theta\,d\theta$, $\sqrt{4-x^2}=2\cos\theta$:

$$\int\frac{2\cos\theta\,d\theta}{2\cos\theta} = \int d\theta = \theta+C = \arcsin\frac{x}{2}+C$$

</details>
