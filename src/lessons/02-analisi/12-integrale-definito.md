---
id: analisi-12-integrale-definito
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Integrale definito e teorema fondamentale
title_en: Definite integral and the fundamental theorem of calculus
level: blue
order: 12
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 5 — Il teorema fondamentale"
---

## Costruzione dell'integrale di Riemann

Per integrare $f$ su $[a,b]$:
1. Si divide $[a,b]$ in $n$ sottointervalli di ampiezza $\Delta x = (b-a)/n$.
2. Si scelgono punti campione $x_i^*$ in ogni sottointervallo.
3. Si forma la **somma di Riemann**: $S_n = \displaystyle\sum_{i=1}^n f(x_i^*)\Delta x$.
4. L'**integrale definito** è il limite (se esiste): $\displaystyle\int_a^b f(x)\,dx = \lim_{n\to\infty}S_n$.

Geometricamente: l'integrale definito è l'**area con segno** tra il grafico di $f$ e l'asse $x$.

## Teorema Fondamentale del Calcolo (TFC)

**Parte 1:** Se $f$ è continua su $[a,b]$ e $F(x)=\displaystyle\int_a^x f(t)\,dt$, allora $F'(x)=f(x)$.

**Parte 2 (Regola di Newton-Leibniz):** Se $F$ è una primitiva di $f$:

$$\int_a^b f(x)\,dx = F(b)-F(a) = \Big[F(x)\Big]_a^b$$

Questo è il ponte tra le due grandi costruzioni dell'analisi: differenziazione e integrazione.

## Proprietà

$$\int_a^b[f(x)\pm g(x)]\,dx = \int_a^b f\,dx\pm\int_a^b g\,dx$$
$$\int_a^b cf\,dx = c\int_a^b f\,dx$$
$$\int_a^b f\,dx = \int_a^c f\,dx + \int_c^b f\,dx$$
$$\int_a^a f\,dx = 0 \qquad \int_a^b f\,dx = -\int_b^a f\,dx$$

**Valore medio:** $\bar{f} = \dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,dx$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo di integrali</summary>

Calcolare: (a) $\displaystyle\int_0^1(3x^2-2x+1)\,dx$ &ensp; (b) $\displaystyle\int_0^{\pi/2}\sin x\,dx$

**Soluzione.**

(a) $\Big[x^3-x^2+x\Big]_0^1 = (1-1+1)-0 = 1$.

(b) $\Big[-\cos x\Big]_0^{\pi/2} = -\cos(\pi/2)+\cos 0 = 0+1 = 1$.

</details>

<details>
<summary>Esercizio 2 — TFC parte 1</summary>

Calcolare $\dfrac{d}{dx}\displaystyle\int_1^{x^2}\ln t\,dt$.

**Soluzione.**

Sia $G(u)=\displaystyle\int_1^u \ln t\,dt$. Per la catena:

$$\frac{d}{dx}G(x^2) = G'(x^2)\cdot 2x = \ln(x^2)\cdot 2x = 4x\ln x$$

</details>

<details>
<summary>Esercizio 3 — Area tra curve</summary>

Trovare l'area tra $y=x^2$ e $y=x+2$.

**Soluzione.**

Intersezioni: $x^2=x+2 \implies x^2-x-2=0 \implies x=-1,\,x=2$.

Nell'intervallo $[-1,2]$: $x+2 \geq x^2$.

$$A = \int_{-1}^2(x+2-x^2)\,dx = \left[\frac{x^2}{2}+2x-\frac{x^3}{3}\right]_{-1}^2$$
$$= \left(2+4-\frac{8}{3}\right)-\left(\frac{1}{2}-2+\frac{1}{3}\right) = \frac{10}{3}+\frac{7}{6} = \frac{9}{2}$$

</details>
