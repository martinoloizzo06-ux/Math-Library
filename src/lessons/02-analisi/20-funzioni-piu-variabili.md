---
id: analisi-20-funzioni-piu-variabili
subject: analisi
topic_it: Analisi multivariata
topic_en: Multivariable analysis
title_it: Funzioni di più variabili e derivate parziali
title_en: Functions of several variables and partial derivatives
level: blue
order: 20
source_book: "J. Stewart, Calculus; MIT OCW 18.02"
source_chapter: "Cap. 14 — Derivate parziali"
---

## Funzioni di più variabili

Una funzione $f:\mathbb{R}^n\to\mathbb{R}$ assegna a ogni punto $(x_1,\ldots,x_n)$ un valore reale.

**Caso più comune:** $f:\mathbb{R}^2\to\mathbb{R}$, scritta $f(x,y)$. Il grafico è una superficie in $\mathbb{R}^3$.

**Curve di livello:** le curve $f(x,y)=c$ (costante) — come le isoipse di una carta geografica.

## Limiti e continuità

$$\lim_{(x,y)\to(a,b)}f(x,y)=L$$

significa che $f(x,y)\to L$ per qualsiasi percorso $(x,y)\to(a,b)$.

**Attenzione:** se il limite dipende dal percorso, non esiste. Tecnica: confrontare il limite lungo $y=0$ e lungo $y=x$.

## Derivate parziali

La **derivata parziale** rispetto a $x$ in $(a,b)$:

$$\frac{\partial f}{\partial x}(a,b) = \lim_{h\to 0}\frac{f(a+h,b)-f(a,b)}{h}$$

Si calcola trattando $y$ come costante e derivando rispetto a $x$.

**Notazione alternativa:** $f_x$, $\partial_x f$, $D_x f$.

**Derivate seconde miste:**

$$\frac{\partial^2 f}{\partial y\,\partial x} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)$$

**Teorema di Schwarz:** se $f_{xy}$ e $f_{yx}$ sono continue, allora $f_{xy}=f_{yx}$.

## Regola della catena

Se $x=x(t)$, $y=y(t)$:

$$\frac{d}{dt}f(x(t),y(t)) = \frac{\partial f}{\partial x}\frac{dx}{dt} + \frac{\partial f}{\partial y}\frac{dy}{dt}$$

Più in generale, se $x=x(s,t)$, $y=y(s,t)$:

$$\frac{\partial f}{\partial s} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial s}$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Calcolo di derivate parziali</summary>

Calcolare $f_x$ e $f_y$ per $f(x,y)=x^3y - y^2\sin x$.

**Soluzione.**

$f_x = 3x^2y - y^2\cos x$ (tratto $y$ come costante).

$f_y = x^3 - 2y\sin x$ (tratto $x$ come costante).

</details>

<details>
<summary>Esercizio 2 — Derivate seconde e teorema di Schwarz</summary>

Per $f(x,y)=e^{xy}$, verificare che $f_{xy}=f_{yx}$.

**Soluzione.**

$f_x = ye^{xy}$. Allora $f_{xy} = \dfrac{\partial}{\partial y}(ye^{xy}) = e^{xy}+xye^{xy}=(1+xy)e^{xy}$.

$f_y = xe^{xy}$. Allora $f_{yx} = \dfrac{\partial}{\partial x}(xe^{xy}) = e^{xy}+xye^{xy}=(1+xy)e^{xy}$.

$f_{xy}=f_{yx}$. ✓

</details>

<details>
<summary>Esercizio 3 — Limite dipendente dal percorso</summary>

Dimostrare che $\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy}{x^2+y^2}$ non esiste.

**Soluzione.**

Lungo $y=0$: $\dfrac{x\cdot 0}{x^2+0}=0 \to 0$.

Lungo $y=x$: $\dfrac{x\cdot x}{x^2+x^2}=\dfrac{x^2}{2x^2}=\dfrac{1}{2}\to\dfrac{1}{2}$.

I due percorsi danno limiti diversi, quindi il limite **non esiste**.

</details>
