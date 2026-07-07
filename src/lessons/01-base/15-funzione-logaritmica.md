---
id: base-15-funzione-logaritmica
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzione logaritmica e proprietà dei logaritmi
title_en: Logarithmic function and properties of logarithms
level: green
order: 15
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 6 — Logaritmi"
---

## Definizione

Il **logaritmo in base $a$** di $x$ è l'esponente a cui bisogna elevare $a$ per ottenere $x$:

$$\log_a x = y \iff a^y = x \quad (a > 0,\; a \neq 1,\; x > 0)$$

Il logaritmo è la **funzione inversa** dell'esponenziale: $\log_a(a^x) = x$ e $a^{\log_a x} = x$.

**Casi speciali:**
- $\log_e x = \ln x$ (logaritmo naturale, base $e$).
- $\log_{10} x = \log x$ (logaritmo decimale, base 10).

## Grafico e proprietà

| Proprietà | Valore |
|---|---|
| Dominio | $(0, +\infty)$ |
| Codominio | $\mathbb{R}$ |
| Passaggio per $(1, 0)$ | sempre, perché $\log_a 1 = 0$ |
| Passaggio per $(a, 1)$ | sempre, perché $\log_a a = 1$ |

- Se $a > 1$: **crescente**.
- Se $0 < a < 1$: **decrescente**.

## Proprietà dei logaritmi

Per $a > 0$, $a \neq 1$ e $x, y > 0$:

| Proprietà | Formula |
|---|---|
| Logaritmo del prodotto | $\log_a(xy) = \log_a x + \log_a y$ |
| Logaritmo del quoziente | $\log_a\!\left(\dfrac{x}{y}\right) = \log_a x - \log_a y$ |
| Logaritmo della potenza | $\log_a(x^k) = k \log_a x$ |
| Logaritmo di 1 | $\log_a 1 = 0$ |
| Logaritmo della base | $\log_a a = 1$ |

## Formula del cambio di base

$$\log_a x = \frac{\log_b x}{\log_b a} = \frac{\ln x}{\ln a}$$

Permette di calcolare qualsiasi logaritmo usando $\ln$ o $\log_{10}$.

**Esempio.** $\log_2 7 = \dfrac{\ln 7}{\ln 2} \approx \dfrac{1{,}9459}{0{,}6931} \approx 2{,}807$.

---

## Esercizi

<details>
<summary>Esercizio 1 — Proprietà</summary>

Semplificare $\ln\!\left(\dfrac{e^3 \sqrt{x}}{y^2}\right)$.

**Soluzione.**

$$= \ln(e^3) + \ln(\sqrt{x}) - \ln(y^2) = 3 + \frac{1}{2}\ln x - 2\ln y$$

</details>

<details>
<summary>Esercizio 2 — Cambio di base</summary>

Calcolare $\log_4 32$.

**Soluzione.**

$32 = 2^5$ e $4 = 2^2$, quindi:

$$\log_4 32 = \frac{\log_2 32}{\log_2 4} = \frac{5}{2} = 2{,}5$$

Verifica: $4^{2{,}5} = (2^2)^{5/2} = 2^5 = 32$ ✓

</details>

<details>
<summary>Esercizio 3 — Equazione logaritmica</summary>

Risolvere $\log_3(x+2) + \log_3(x-2) = 3$, con $x > 2$.

**Soluzione.**

$$\log_3[(x+2)(x-2)] = 3 \implies (x+2)(x-2) = 3^3 = 27$$
$$x^2 - 4 = 27 \implies x^2 = 31 \implies x = \sqrt{31}$$

(Solo $x = \sqrt{31} > 0$; poiché $\sqrt{31} \approx 5{,}57 > 2$, la condizione è soddisfatta.)

</details>
