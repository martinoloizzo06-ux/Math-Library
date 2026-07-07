---
id: base-14-funzione-esponenziale
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzione esponenziale
title_en: Exponential function
level: green
order: 14
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 6 — Esponenziale e logaritmo"
---

## Definizione e grafico

La **funzione esponenziale** di base $a > 0$, $a \neq 1$ è:

$$f(x) = a^x, \quad x \in \mathbb{R}$$

**Proprietà generali:**

| Proprietà | Valore |
|---|---|
| Dominio | $\mathbb{R}$ |
| Codominio | $(0, +\infty)$ |
| Passaggio per $(0,1)$ | sempre, perché $a^0 = 1$ |
| Comportamento | monotona strettamente |

**Se $a > 1$:** funzione **crescente**. Per $x \to +\infty$, $a^x \to +\infty$; per $x \to -\infty$, $a^x \to 0$.

**Se $0 < a < 1$:** funzione **decrescente**. I comportamenti si invertono.

## Il numero di Eulero $e$

Il numero $e \approx 2{,}71828\ldots$ è definito come:

$$e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$$

La funzione $f(x) = e^x$ è la più importante in analisi: è l'unica (a meno di costanti moltiplicative) uguale alla sua derivata. Spesso si scrive $\exp(x)$ invece di $e^x$.

## Proprietà delle potenze (reali)

Le proprietà viste per gli esponenti interi si estendono agli esponenti reali:

$$a^{x+y} = a^x \cdot a^y \qquad a^{x-y} = \frac{a^x}{a^y} \qquad (a^x)^y = a^{xy} \qquad (ab)^x = a^x b^x$$

## Crescita esponenziale e decadimento

Molti fenomeni fisici seguono la legge $N(t) = N_0 \cdot a^t$:

- **Crescita:** popolazione batterica, investimento con interesse composto.
- **Decadimento:** sostanza radioattiva, raffreddamento di un corpo.

Con base $e$: $N(t) = N_0 e^{kt}$. Se $k > 0$: crescita; se $k < 0$: decadimento.

---

## Esercizi

<details>
<summary>Esercizio 1 — Proprietà</summary>

Semplificare $\dfrac{(2^3)^x \cdot 4^{x+1}}{8^x}$.

**Soluzione.**

$2^3)^x = 2^{3x}$, $4^{x+1} = 2^{2(x+1)} = 2^{2x+2}$, $8^x = 2^{3x}$.

$$\frac{2^{3x} \cdot 2^{2x+2}}{2^{3x}} = 2^{2x+2} = 4 \cdot 4^x$$

</details>

<details>
<summary>Esercizio 2 — Grafico</summary>

Confrontare il comportamento di $f(x) = 2^x$ e $g(x) = (0{,}5)^x$ per $x$ grande positivo e grande negativo.

**Soluzione.**

$g(x) = (1/2)^x = 2^{-x}$, quindi $g(x) = f(-x)$: il grafico di $g$ è il riflesso di $f$ rispetto all'asse $y$.

- $x \to +\infty$: $f \to +\infty$, $g \to 0$.
- $x \to -\infty$: $f \to 0$, $g \to +\infty$.

</details>

<details>
<summary>Esercizio 3 — Interesse composto</summary>

Un capitale di 1 000 € viene investito al tasso annuo del 5% con capitalizzazione continua. Quanto vale dopo 10 anni?

**Soluzione.**

Con capitalizzazione continua: $A = P \cdot e^{rt}$.

$$A = 1000 \cdot e^{0{,}05 \times 10} = 1000 \cdot e^{0{,}5} \approx 1000 \cdot 1{,}6487 \approx 1648{,}7 \text{ €}$$

</details>
