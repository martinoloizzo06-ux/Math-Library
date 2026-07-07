---
id: analisi-11-integrale-indefinito
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: Integrale indefinito e primitive
title_en: Indefinite integral and antiderivatives
level: blue
order: 11
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 5 — Integrali"
---

## Primitiva e integrale indefinito

Una funzione $F(x)$ è una **primitiva** di $f(x)$ se $F'(x) = f(x)$ per ogni $x$ nel dominio.

Se $F$ è una primitiva di $f$, tutte le primitive hanno la forma $F(x) + C$, dove $C$ è una costante arbitraria. L'**integrale indefinito** è:

$$\int f(x)\,dx = F(x) + C$$

## Tavola degli integrali fondamentali

| $f(x)$ | $\int f(x)\,dx$ |
|---|---|
| $x^n$ ($n\neq -1$) | $\dfrac{x^{n+1}}{n+1}+C$ |
| $1/x$ | $\ln|x|+C$ |
| $e^x$ | $e^x+C$ |
| $a^x$ | $\dfrac{a^x}{\ln a}+C$ |
| $\sin x$ | $-\cos x+C$ |
| $\cos x$ | $\sin x+C$ |
| $1/\cos^2 x$ | $\tan x+C$ |
| $1/\sqrt{1-x^2}$ | $\arcsin x+C$ |
| $1/(1+x^2)$ | $\arctan x+C$ |

## Proprietà

$$\int[af(x)+bg(x)]\,dx = a\int f(x)\,dx + b\int g(x)\,dx$$

## Integrazione per sostituzione

Se $u=g(x)$, allora $du=g'(x)\,dx$:

$$\int f(g(x))g'(x)\,dx = \int f(u)\,du$$

**Esempio.** $\displaystyle\int 2x\cos(x^2)\,dx$. Posto $u=x^2$, $du=2x\,dx$:

$$\int \cos u\,du = \sin u + C = \sin(x^2)+C$$

## Integrazione per parti

$$(uv)' = u'v + uv' \implies \int u\,dv = uv - \int v\,du$$

**Regola LIATE** per scegliere $u$: Logaritmi, Inversi trig., Algebrici, Trigonometrici, Esponenziali.

**Esempio.** $\displaystyle\int x e^x\,dx$. $u=x$, $dv=e^x\,dx$:

$$xe^x - \int e^x\,dx = xe^x - e^x + C = e^x(x-1)+C$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Sostituzione</summary>

Calcolare: (a) $\displaystyle\int\frac{x}{1+x^2}\,dx$ &ensp; (b) $\displaystyle\int e^{\sin x}\cos x\,dx$

**Soluzione.**

(a) $u=1+x^2$, $du=2x\,dx$: $\displaystyle\int\frac{1}{2u}\,du = \frac{1}{2}\ln|u|+C = \frac{1}{2}\ln(1+x^2)+C$.

(b) $u=\sin x$, $du=\cos x\,dx$: $\displaystyle\int e^u\,du = e^u+C = e^{\sin x}+C$.

</details>

<details>
<summary>Esercizio 2 — Per parti</summary>

Calcolare $\displaystyle\int x^2\ln x\,dx$.

**Soluzione.**

$u=\ln x$, $dv=x^2\,dx$ → $du=\frac{1}{x}\,dx$, $v=\frac{x^3}{3}$.

$$\frac{x^3}{3}\ln x - \int\frac{x^3}{3}\cdot\frac{1}{x}\,dx = \frac{x^3}{3}\ln x - \frac{1}{3}\int x^2\,dx = \frac{x^3}{3}\ln x - \frac{x^3}{9}+C = \frac{x^3}{9}(3\ln x-1)+C$$

</details>

<details>
<summary>Esercizio 3 — Combinazione</summary>

Calcolare $\displaystyle\int\frac{\ln x}{x}\,dx$.

**Soluzione.**

$u=\ln x$, $du=\frac{1}{x}\,dx$: $\displaystyle\int u\,du = \frac{u^2}{2}+C = \frac{(\ln x)^2}{2}+C$.

</details>
