---
id: analisi-21-gradiente-differenziabilita
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: Gradiente, differenziabilità e piano tangente
title_en: Gradient, differentiability, and tangent plane
level: blue
order: 21
source_book: "J. Stewart, Calculus; MIT OCW 18.02"
source_chapter: "Cap. 14 — Gradiente e differenziale"
---

## Gradiente

Il **gradiente** di $f(x,y)$ è il vettore delle derivate parziali:

$$\nabla f = \left(\frac{\partial f}{\partial x},\, \frac{\partial f}{\partial y}\right)$$

Per $f:\mathbb{R}^n\to\mathbb{R}$: $\nabla f = \left(\dfrac{\partial f}{\partial x_1},\ldots,\dfrac{\partial f}{\partial x_n}\right)$.

**Proprietà geometriche del gradiente:**
- $\nabla f(a,b)$ punta nella direzione di **massima crescita** di $f$ in $(a,b)$.
- È **perpendicolare** alle curve di livello $f=c$ che passano per $(a,b)$.
- $|\nabla f(a,b)|$ è la **tasso di variazione massimo**.

## Derivata direzionale

La derivata di $f$ nella direzione del vettore unitario $\mathbf{u}=(u_1,u_2)$:

$$D_{\mathbf{u}}f(a,b) = \nabla f(a,b)\cdot\mathbf{u} = f_x\,u_1 + f_y\,u_2$$

Massima per $\mathbf{u}=\nabla f/|\nabla f|$ (direzione del gradiente).

## Differenziabilità

$f$ è **differenziabile** in $(a,b)$ se esiste un'approssimazione lineare:

$$f(a+h,b+k) \approx f(a,b) + f_x(a,b)\,h + f_y(a,b)\,k$$

cioè se l'errore è $o(\|(h,k)\|)$.

**Condizione sufficiente:** se $f_x$ e $f_y$ esistono e sono continue in un intorno di $(a,b)$, allora $f$ è differenziabile.

**Differenziale totale:**

$$df = \frac{\partial f}{\partial x}\,dx + \frac{\partial f}{\partial y}\,dy$$

## Piano tangente

Il piano tangente alla superficie $z=f(x,y)$ nel punto $(a,b,f(a,b))$:

$$z = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)$$

È l'approssimazione lineare (linearizzazione) di $f$ vicino a $(a,b)$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo del gradiente</summary>

Calcolare $\nabla f$ per $f(x,y)=x^2+3xy-y^3$ e valutarlo in $(1,-1)$.

**Soluzione.**

$f_x = 2x+3y$, $f_y = 3x-3y^2$.

$\nabla f(1,-1) = (2\cdot1+3\cdot(-1),\; 3\cdot1-3\cdot(-1)^2) = (2-3,\; 3-3) = (-1,\,0)$.

</details>

<details>
<summary>Esercizio 2 — Piano tangente</summary>

Trovare il piano tangente a $f(x,y)=\sqrt{x^2+y^2}$ nel punto $(3,4,5)$.

**Soluzione.**

$f_x = \dfrac{x}{\sqrt{x^2+y^2}}$, $f_y = \dfrac{y}{\sqrt{x^2+y^2}}$.

In $(3,4)$: $f_x=3/5$, $f_y=4/5$.

Piano tangente: $z = 5 + \dfrac{3}{5}(x-3) + \dfrac{4}{5}(y-4) = \dfrac{3x+4y}{5}$.

</details>

<details>
<summary>Esercizio 3 — Derivata direzionale</summary>

Calcolare $D_{\mathbf{u}}f(0,0)$ per $f(x,y)=e^x\sin y$, nella direzione $\mathbf{u}=(1/\sqrt{2},\,1/\sqrt{2})$.

**Soluzione.**

$f_x=e^x\sin y$, $f_y=e^x\cos y$.

In $(0,0)$: $\nabla f = (e^0\sin 0,\;e^0\cos 0)=(0,\,1)$.

$D_{\mathbf{u}}f = (0,1)\cdot(1/\sqrt{2},1/\sqrt{2}) = 0 + 1/\sqrt{2} = \dfrac{\sqrt{2}}{2}$.

</details>
