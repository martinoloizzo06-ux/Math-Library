---
id: analisi-08-teoremi-differenziale
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Teoremi del calcolo differenziale (Rolle, Lagrange, de l'Hôpital)
title_en: Theorems of differential calculus (Rolle, MVT, L'Hôpital)
level: blue
order: 8
source_book: "J. Stewart, Calculus; W. Rudin, Principles"
source_chapter: "Cap. 4 — Teorema del valor medio"
---

## Teorema di Rolle

Se $f$ è continua su $[a,b]$, derivabile su $(a,b)$, e $f(a)=f(b)$, allora esiste $c\in(a,b)$ con:

$$f'(c) = 0$$

**Interpretazione:** se una funzione continua parte e arriva allo stesso valore, deve "girare" in mezzo — e nel punto di svolta la derivata è nulla.

## Teorema di Lagrange (Valore Medio)

Se $f$ è continua su $[a,b]$ e derivabile su $(a,b)$, esiste $c\in(a,b)$ con:

$$f'(c) = \frac{f(b)-f(a)}{b-a}$$

**Interpretazione:** la derivata in un punto interno eguaglia il rapporto incrementale globale (la pendenza istantanea uguaglia la pendenza media).

**Corollari importanti:**
- $f'(x)=0$ su $(a,b)$ $\implies$ $f$ costante su $[a,b]$.
- $f'(x)>0$ su $(a,b)$ $\implies$ $f$ strettamente crescente.
- $f'(x)<0$ su $(a,b)$ $\implies$ $f$ strettamente decrescente.

## Regola di de l'Hôpital

Se $\displaystyle\lim_{x\to a}f(x)=\lim_{x\to a}g(x)=0$ (oppure $\pm\infty$) e $g'(x)\neq 0$ in un intorno di $a$:

$$\lim_{x\to a}\frac{f(x)}{g(x)} = \lim_{x\to a}\frac{f'(x)}{g'(x)}$$

(se il secondo limite esiste o è $\pm\infty$).

Si applica ripetutamente fino a uscire dalla forma indeterminata.

**Esempi:**

$$\lim_{x\to 0}\frac{e^x-1-x}{x^2} \stackrel{H}{=} \lim_{x\to 0}\frac{e^x-1}{2x} \stackrel{H}{=} \lim_{x\to 0}\frac{e^x}{2} = \frac{1}{2}$$

$$\lim_{x\to 0^+}x\ln x = \lim_{x\to 0^+}\frac{\ln x}{1/x} \stackrel{H}{=} \lim_{x\to 0^+}\frac{1/x}{-1/x^2} = \lim_{x\to 0^+}(-x) = 0$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Teorema di Rolle</summary>

Verificare che il teorema di Rolle si applica a $f(x)=x^3-3x$ su $[-\sqrt{3},\sqrt{3}]$ e trovare $c$.

**Soluzione.**

$f$ è un polinomio, quindi continua e derivabile. $f(-\sqrt{3})=f(\sqrt{3})=-3\sqrt{3}+3\sqrt{3}=0$... aspetta: $f(\pm\sqrt{3})=\pm 3\sqrt{3}\mp 3\sqrt{3}=0$. ✓

$f'(x)=3x^2-3=0\implies x=\pm 1$. Entrambi in $(-\sqrt{3},\sqrt{3})$.

Quindi $c=1$ e $c=-1$.

</details>

<details>
<summary>Esercizio 2 — de l'Hôpital</summary>

Calcolare: (a) $\displaystyle\lim_{x\to 1}\frac{\ln x}{x-1}$ &ensp; (b) $\displaystyle\lim_{x\to+\infty}\frac{x^2}{e^x}$

**Soluzione.**

(a) Forma $0/0$: $\displaystyle\stackrel{H}{=}\lim_{x\to 1}\frac{1/x}{1} = 1$.

(b) Forma $\infty/\infty$: $\stackrel{H}{=}\displaystyle\lim\frac{2x}{e^x}\stackrel{H}{=}\lim\frac{2}{e^x}=0$.

L'esponenziale cresce più velocemente di qualsiasi polinomio.

</details>

<details>
<summary>Esercizio 3 — Forma $\infty^0$</summary>

Calcolare $\displaystyle\lim_{x\to+\infty}x^{1/x}$.

**Soluzione.**

Sia $L = \lim x^{1/x}$. Allora $\ln L = \lim \dfrac{\ln x}{x} \stackrel{H}{=} \lim \dfrac{1/x}{1} = 0$.

Quindi $L = e^0 = 1$.

</details>
