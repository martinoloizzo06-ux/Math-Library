---
id: base-16-equazioni-esponenziali-logaritmiche
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Equazioni e disequazioni esponenziali e logaritmiche
title_en: Exponential and logarithmic equations and inequalities
level: green
order: 16
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 6 — Equazioni trascendenti"
---

## Equazioni esponenziali

### Tipo 1: stessa base

Se $a^{f(x)} = a^{g(x)}$ con $a > 0$, $a \neq 1$, allora $f(x) = g(x)$.

**Esempio.** $4^{x-1} = 8^x$: riscrivo come potenze di 2.

$$2^{2(x-1)} = 2^{3x} \implies 2x - 2 = 3x \implies x = -2$$

### Tipo 2: logaritmazione

Si applica $\log$ a entrambi i membri.

**Esempio.** $3^x = 7$:

$$x = \log_3 7 = \frac{\ln 7}{\ln 3} \approx 1{,}771$$

### Tipo 3: sostituzione

Si pone $t = a^x$ e si risolve l'equazione in $t$.

**Esempio.** $4^x - 3 \cdot 2^x - 4 = 0$. Poiché $4^x = (2^x)^2$, posto $t = 2^x > 0$:

$$t^2 - 3t - 4 = 0 \implies (t-4)(t+1) = 0$$

$t = 4$ (accettabile) o $t = -1$ (no, $2^x > 0$). Quindi $2^x = 4 \implies x = 2$.

## Equazioni logaritmiche

Si usano le proprietà dei logaritmi per ricondurre a $\log_a f(x) = k$ o $\log_a f(x) = \log_a g(x)$.

**Regola:** $\log_a f(x) = \log_a g(x)$ implica $f(x) = g(x)$, ma si deve verificare che le condizioni di esistenza ($f(x) > 0$, $g(x) > 0$) siano soddisfatte.

## Disequazioni esponenziali

$a^{f(x)} > a^{g(x)}$:
- Se $a > 1$: $f(x) > g(x)$.
- Se $0 < a < 1$: $f(x) < g(x)$ (si inverte il verso).

## Disequazioni logaritmiche

$\log_a f(x) > \log_a g(x)$ (con dominio $f(x) > 0$, $g(x) > 0$):
- Se $a > 1$: $f(x) > g(x)$.
- Se $0 < a < 1$: $f(x) < g(x)$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Equazione esponenziale</summary>

Risolvere $5^{2x} - 6 \cdot 5^x + 5 = 0$.

**Soluzione.**

Posto $t = 5^x > 0$: $t^2 - 6t + 5 = 0 \implies (t-1)(t-5) = 0$.

$t = 1 \implies 5^x = 1 \implies x = 0$.
$t = 5 \implies 5^x = 5 \implies x = 1$.

$S = \{0, 1\}$

</details>

<details>
<summary>Esercizio 2 — Equazione logaritmica</summary>

Risolvere $\ln(x+1) - \ln(x-1) = \ln 3$.

**Soluzione.**

$\ln\dfrac{x+1}{x-1} = \ln 3 \implies \dfrac{x+1}{x-1} = 3 \implies x+1 = 3x-3 \implies x = 2$.

Verifica: $\ln 3 - \ln 1 = \ln 3$ ✓ (e $x-1 = 1 > 0$).

</details>

<details>
<summary>Esercizio 3 — Disequazione</summary>

Risolvere $\log_{0{,}5}(2x-1) < \log_{0{,}5}(x+3)$.

**Soluzione.**

Base $0{,}5 < 1$, quindi si inverte: $2x-1 > x+3$, cioè $x > 4$.

Dominio: $2x-1 > 0 \implies x > 1/2$ e $x+3 > 0 \implies x > -3$.

Intersezione con $x > 4$: $S = (4, +\infty)$.

</details>
