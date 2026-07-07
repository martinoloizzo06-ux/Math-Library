---
id: analisi-23-integrali-multipli
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: Integrali doppi e tripli
title_en: Double and triple integrals
level: blue
order: 23
source_book: "J. Stewart, Calculus; MIT OCW 18.02"
source_chapter: "Cap. 15 — Integrali multipli"
---

## Integrale doppio

L'**integrale doppio** di $f$ su una regione $D\subset\mathbb{R}^2$:

$$\iint_D f(x,y)\,dA$$

è il volume (con segno) del solido tra il grafico $z=f(x,y)$ e il piano $xy$.

## Teorema di Fubini

Se $D = [a,b]\times[c,d]$ (rettangolo) e $f$ è continua:

$$\iint_D f(x,y)\,dA = \int_a^b\left(\int_c^d f(x,y)\,dy\right)dx = \int_c^d\left(\int_a^b f(x,y)\,dx\right)dy$$

Gli integrali iterati possono essere calcolati nell'ordine più conveniente.

## Regioni non rettangolari

**Regione di tipo I** ($x$ varia in $[a,b]$, $y$ tra due curve di $x$):

$$\iint_D f\,dA = \int_a^b\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\,dx$$

**Regione di tipo II** ($y$ varia in $[c,d]$, $x$ tra due curve di $y$):

$$\iint_D f\,dA = \int_c^d\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\,dy$$

## Cambio di variabili — Coordinate polari

Per regioni circolari, poni $x=r\cos\theta$, $y=r\sin\theta$, $dA=r\,dr\,d\theta$:

$$\iint_D f(x,y)\,dA = \int_{\theta_1}^{\theta_2}\int_{r_1}^{r_2} f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta$$

## Integrale triplo

$$\iiint_E f(x,y,z)\,dV = \int_a^b\int_{g_1(x)}^{g_2(x)}\int_{u_1(x,y)}^{u_2(x,y)} f\,dz\,dy\,dx$$

**Coordinate sferiche:** $x=\rho\sin\phi\cos\theta$, $y=\rho\sin\phi\sin\theta$, $z=\rho\cos\phi$, $dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta$.

**Coordinate cilindriche:** $x=r\cos\theta$, $y=r\sin\theta$, $z=z$, $dV=r\,dr\,d\theta\,dz$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Integrale su rettangolo</summary>

Calcolare $\displaystyle\iint_D (x+2y)\,dA$ su $D=[0,1]\times[0,2]$.

**Soluzione.**

$$\int_0^1\int_0^2(x+2y)\,dy\,dx = \int_0^1\Big[xy+y^2\Big]_0^2 dx = \int_0^1(2x+4)\,dx = \Big[x^2+4x\Big]_0^1 = 5$$

</details>

<details>
<summary>Esercizio 2 — Regione triangolare</summary>

Calcolare $\displaystyle\int_0^1\int_0^x e^{x^2}\,dy\,dx$.

**Soluzione.**

Integrando prima in $y$ (da $0$ a $x$):

$$\int_0^1\int_0^x e^{x^2}\,dy\,dx = \int_0^1 x\,e^{x^2}\,dx = \left[\frac{e^{x^2}}{2}\right]_0^1 = \frac{e-1}{2}$$

</details>

<details>
<summary>Esercizio 3 — Coordinate polari</summary>

Calcolare $\displaystyle\iint_D e^{x^2+y^2}\,dA$ su $D=\{x^2+y^2\leq 1\}$.

**Soluzione.**

In coordinate polari ($0\leq r\leq 1$, $0\leq\theta\leq 2\pi$):

$$\int_0^{2\pi}\int_0^1 e^{r^2}\,r\,dr\,d\theta = 2\pi\int_0^1 r\,e^{r^2}\,dr = 2\pi\left[\frac{e^{r^2}}{2}\right]_0^1 = \pi(e-1)$$

</details>
