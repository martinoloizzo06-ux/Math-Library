---
id: analisi-22-ottimizzazione-lagrange
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: Ottimizzazione libera e vincolata — moltiplicatori di Lagrange
title_en: Free and constrained optimization — Lagrange multipliers
level: blue
order: 22
source_book: "J. Stewart, Calculus; MIT OCW 18.02"
source_chapter: "Cap. 14 — Ottimizzazione"
---

## Punti critici liberi

Un punto $(a,b)$ è **critico** per $f$ se $\nabla f(a,b)=\mathbf{0}$, cioè $f_x(a,b)=f_y(a,b)=0$.

## Classificazione tramite Hessiano

La **matrice hessiana** di $f$ è:

$$H_f = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{pmatrix}$$

Definiamo il **discriminante** $D = f_{xx}f_{yy} - (f_{xy})^2 = \det H_f$.

**Criterio della seconda derivata:**
- $D>0$ e $f_{xx}>0$: **minimo locale**.
- $D>0$ e $f_{xx}<0$: **massimo locale**.
- $D<0$: **punto di sella**.
- $D=0$: criterio non conclusivo.

## Ottimizzazione vincolata — Moltiplicatori di Lagrange

Per ottimizzare $f(x,y)$ soggetta al vincolo $g(x,y)=c$:

**Condizione necessaria del primo ordine:**

$$\nabla f = \lambda\,\nabla g$$

cioè:

$$\begin{cases} f_x = \lambda\,g_x \\ f_y = \lambda\,g_y \\ g(x,y) = c \end{cases}$$

Il parametro $\lambda$ è il **moltiplicatore di Lagrange**.

**Interpretazione:** in un punto di ottimo vincolato, le curve di livello di $f$ e il vincolo $g=c$ sono tangenti tra loro — quindi i loro gradienti sono paralleli.

**Con più variabili:** sistema a $n+1$ equazioni in $n+1$ incognite $(x_1,\ldots,x_n,\lambda)$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Classificazione punti critici</summary>

Trovare e classificare i punti critici di $f(x,y)=x^3-3x+y^2-2y$.

**Soluzione.**

$f_x = 3x^2-3=0 \implies x=\pm 1$. $f_y=2y-2=0 \implies y=1$.

Punti critici: $(1,1)$ e $(-1,1)$.

Hessiano: $f_{xx}=6x$, $f_{xy}=0$, $f_{yy}=2$. $D=12x$.

- $(1,1)$: $D=12>0$, $f_{xx}=6>0$ → **minimo locale**.
- $(-1,1)$: $D=-12<0$ → **punto di sella**.

</details>

<details>
<summary>Esercizio 2 — Lagrange: massimo sul cerchio</summary>

Massimizzare $f(x,y)=xy$ soggetta a $x^2+y^2=1$.

**Soluzione.**

$g=x^2+y^2-1$. Sistema: $y=2\lambda x$, $x=2\lambda y$, $x^2+y^2=1$.

Dalla prima: $y=2\lambda x$. Sostituendo nella seconda: $x=2\lambda(2\lambda x)=4\lambda^2 x$.

Se $x\neq 0$: $4\lambda^2=1 \implies \lambda=\pm 1/2$.

$\lambda=1/2$: $y=x$, e con $x^2+y^2=1$: $x=\pm 1/\sqrt{2}$.

Punti: $(\pm 1/\sqrt{2},\pm 1/\sqrt{2})$ con $f=1/2$ (massimo) e $(\pm 1/\sqrt{2},\mp 1/\sqrt{2})$ con $f=-1/2$ (minimo).

</details>

<details>
<summary>Esercizio 3 — Lagrange a tre variabili</summary>

Minimizzare $f(x,y,z)=x^2+y^2+z^2$ soggetta a $x+y+z=1$.

**Soluzione.**

$\nabla f = (2x,2y,2z) = \lambda\nabla g = \lambda(1,1,1)$.

Quindi $2x=2y=2z=\lambda \implies x=y=z$.

Con il vincolo: $3x=1 \implies x=y=z=1/3$.

Minimo: $f(1/3,1/3,1/3)=3\cdot(1/9)=\mathbf{1/3}$.

(Distanza al quadrato dell'origine dal piano $x+y+z=1$.)

</details>
