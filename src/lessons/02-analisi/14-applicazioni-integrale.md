---
id: analisi-14-applicazioni-integrale
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Applicazioni dell'integrale (aree, volumi, valor medio)
title_en: Applications of the integral (areas, volumes, average value)
level: blue
order: 14
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 6 — Applicazioni dell'integrale"
---

## Aree tra curve

L'area della regione compresa tra $y=f(x)$ (sopra) e $y=g(x)$ (sotto) per $x\in[a,b]$:

$$A = \int_a^b [f(x)-g(x)]\,dx$$

**Con integrazione rispetto a $y$:** se le curve sono espresse come $x=g(y)$ su $[c,d]$:

$$A = \int_c^d [x_{\text{destra}}(y) - x_{\text{sinistra}}(y)]\,dy$$

## Volumi di solidi di rotazione

**Metodo dei dischi/anelli** (rotazione attorno all'asse $x$):

$$V = \pi\int_a^b [R(x)^2 - r(x)^2]\,dx$$

dove $R(x)$ è il raggio esterno e $r(x)$ quello interno (per un anello).

**Metodo dei gusci cilindrici** (utile quando si ruota attorno all'asse $y$):

$$V = 2\pi\int_a^b x\cdot h(x)\,dx$$

dove $h(x)=f(x)-g(x)$ è l'altezza del guscio.

## Lunghezza d'arco

La lunghezza del grafico di $f$ da $a$ a $b$:

$$L = \int_a^b \sqrt{1+[f'(x)]^2}\,dx$$

## Valor medio di una funzione

Il valore medio di $f$ su $[a,b]$:

$$\bar{f} = \frac{1}{b-a}\int_a^b f(x)\,dx$$

**Teorema del valor medio per gli integrali:** esiste $c\in[a,b]$ con $f(c)=\bar{f}$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Area</summary>

Trovare l'area racchiusa tra $y=\sin x$ e $y=\cos x$ sull'intervallo $[\pi/4,\, 5\pi/4]$.

**Soluzione.**

In $[\pi/4,\,5\pi/4]$: $\sin x \geq \cos x$ (verificare un punto, es. $x=\pi/2$: $1>0$).

$$A = \int_{\pi/4}^{5\pi/4}(\sin x-\cos x)\,dx = \Big[-\cos x-\sin x\Big]_{\pi/4}^{5\pi/4}$$
$$= \left(\frac{\sqrt{2}}{2}+\frac{\sqrt{2}}{2}\right)-\left(-\frac{\sqrt{2}}{2}-\frac{\sqrt{2}}{2}\right) = \sqrt{2}+\sqrt{2} = 2\sqrt{2}$$

</details>

<details>
<summary>Esercizio 2 — Volume</summary>

Trovare il volume del solido generato dalla rotazione attorno all'asse $x$ della regione tra $y=\sqrt{x}$ e $y=x$ per $x\in[0,1]$.

**Soluzione.**

$\sqrt{x}\geq x$ su $[0,1]$. Metodo degli anelli:

$$V = \pi\int_0^1[(\sqrt{x})^2-x^2]\,dx = \pi\int_0^1(x-x^2)\,dx = \pi\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1 = \pi\cdot\frac{1}{6} = \frac{\pi}{6}$$

</details>

<details>
<summary>Esercizio 3 — Valor medio</summary>

Trovare il valor medio di $f(x)=x^2$ su $[0,3]$ e il punto $c$ garantito dal TVM.

**Soluzione.**

$\bar{f} = \dfrac{1}{3}\displaystyle\int_0^3 x^2\,dx = \dfrac{1}{3}\cdot\dfrac{27}{3} = 3$.

$f(c) = 3 \implies c^2 = 3 \implies c = \sqrt{3} \approx 1{,}732 \in [0,3]$. ✓

</details>
