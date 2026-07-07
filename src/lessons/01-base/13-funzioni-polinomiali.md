---
id: base-13-funzioni-polinomiali
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzioni polinomiali e razionali
title_en: Polynomial and rational functions
level: green
order: 13
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 5 — Funzioni razionali"
---

## Funzioni polinomiali

Una **funzione polinomiale** di grado $n$ è:

$$p(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0, \quad a_n \neq 0$$

**Proprietà chiave:**
- Dominio: $\mathbb{R}$ (sempre definita).
- Continua e liscia su tutto $\mathbb{R}$.
- **Comportamento asintotico:** per $x \to \pm\infty$, il termine dominante $a_n x^n$ governa.

| $n$ pari, $a_n > 0$ | Entrambi i "rami" vanno a $+\infty$ |
|---|---|
| $n$ pari, $a_n < 0$ | Entrambi i rami vanno a $-\infty$ |
| $n$ dispari, $a_n > 0$ | Ramo sx $\to -\infty$, ramo dx $\to +\infty$ |
| $n$ dispari, $a_n < 0$ | Ramo sx $\to +\infty$, ramo dx $\to -\infty$ |

**Radici e fattorizzazione:** ogni polinomio di grado $n$ ha al più $n$ radici reali. Se $x_1, \ldots, x_k$ sono le radici reali distinte:

$$p(x) = a_n(x-x_1)^{m_1}(x-x_2)^{m_2}\cdots(x-x_k)^{m_k} \cdot q(x)$$

dove $m_i$ è la **molteplicità** della radice $x_i$ e $q(x)$ è il prodotto di fattori quadratici irriducibili.

## Funzioni razionali

Una **funzione razionale** è $f(x) = \dfrac{p(x)}{q(x)}$, con $p$ e $q$ polinomi e $q \not\equiv 0$.

**Dominio:** $\{x \in \mathbb{R} : q(x) \neq 0\}$.

### Asintoti

**Asintoto verticale** $x = a$: se $q(a) = 0$ e $p(a) \neq 0$, allora $f(x) \to \pm\infty$ per $x \to a$.

**Asintoto orizzontale:** confronto tra i gradi $n = \deg p$ e $m = \deg q$:
- $n < m$: asintoto $y = 0$.
- $n = m$: asintoto $y = a_n / b_m$ (rapporto dei coefficienti direttori).
- $n > m$: nessun asintoto orizzontale (asintoto obliquo se $n = m+1$).

**Esempio.** $f(x) = \dfrac{2x+1}{x-3}$: asintoto verticale $x=3$, asintoto orizzontale $y = 2$.

**Asintoto obliquo** (quando $n = m+1$): si divide $p(x) \div q(x)$ e l'asintoto è il quoziente lineare.

---

## Esercizi

<details>
<summary>Esercizio 1 — Comportamento di un polinomio</summary>

Per $p(x) = -3x^5 + 2x^3 - x$, descrivere il comportamento per $x \to +\infty$ e $x \to -\infty$.

**Soluzione.**

Termine dominante: $-3x^5$ (grado dispari, $a_n = -3 < 0$).

$x \to +\infty$: $p(x) \to -\infty$

$x \to -\infty$: $p(x) \to +\infty$

</details>

<details>
<summary>Esercizio 2 — Asintoti</summary>

Trovare tutti gli asintoti di $f(x) = \dfrac{x^2 + x - 2}{x^2 - 4}$.

**Soluzione.**

$q(x) = (x-2)(x+2)$. Possibili asintoti verticali: $x = 2$ e $x = -2$.

$p(x) = (x-1)(x+2)$. In $x=-2$: numeratore = 0 anche → buco di discontinuità (non asintoto).  
In $x=2$: $p(2) = 4 \neq 0$ → **asintoto verticale** $x = 2$.

Gradi uguali ($n = m = 2$), rapporto coefficienti direttori = $1/1 = 1$ → **asintoto orizzontale** $y = 1$.

</details>

<details>
<summary>Esercizio 3 — Asintoto obliquo</summary>

Trovare l'asintoto obliquo di $f(x) = \dfrac{x^2 - 1}{x + 2}$.

**Soluzione.**

Divisione: $x^2 - 1 = (x+2)(x-2) + 3$.

$$f(x) = x - 2 + \frac{3}{x+2}$$

Per $x \to \pm\infty$, $\dfrac{3}{x+2} \to 0$, quindi l'asintoto obliquo è $y = x - 2$.

</details>
