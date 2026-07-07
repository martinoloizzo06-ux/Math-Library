---
id: base-02-potenze-radici
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Potenze, radici e notazione scientifica
title_en: Powers, roots and scientific notation
level: green
order: 2
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 2 — Operazioni e proprietà"
---

## Potenze

Dato un numero reale $a$ e un intero positivo $n$, la **potenza** $a^n$ è il prodotto di $n$ fattori uguali ad $a$:

$$a^n = \underbrace{a \cdot a \cdot \cdots \cdot a}_{n \text{ volte}}$$

Si chiama $a$ **base** e $n$ **esponente**.

**Casi particolari:**

$$a^1 = a \qquad a^0 = 1 \quad (a \neq 0) \qquad a^{-n} = \frac{1}{a^n} \quad (a \neq 0)$$

### Proprietà delle potenze

Per $a, b \in \mathbb{R}$ con $a,b \neq 0$ e $m, n \in \mathbb{Z}$:

| Proprietà | Formula |
|---|---|
| Prodotto di potenze con stessa base | $a^m \cdot a^n = a^{m+n}$ |
| Quoziente di potenze con stessa base | $\dfrac{a^m}{a^n} = a^{m-n}$ |
| Potenza di potenza | $(a^m)^n = a^{mn}$ |
| Prodotto di potenze con stesso esponente | $a^n \cdot b^n = (ab)^n$ |
| Quoziente con stesso esponente | $\dfrac{a^n}{b^n} = \left(\dfrac{a}{b}\right)^n$ |

**Esempio.** Semplificare $\dfrac{(2^3)^2 \cdot 2^{-1}}{2^4}$:

$$\frac{(2^3)^2 \cdot 2^{-1}}{2^4} = \frac{2^6 \cdot 2^{-1}}{2^4} = \frac{2^5}{2^4} = 2^1 = 2$$

## Radici e potenze con esponente razionale

La **radice $n$-esima** di $a \geq 0$ è il numero non negativo $r$ tale che $r^n = a$:

$$r = \sqrt[n]{a} \iff r^n = a, \quad r \geq 0$$

Il legame con le potenze a esponente razionale è:

$$\sqrt[n]{a} = a^{1/n} \qquad \sqrt[n]{a^m} = a^{m/n}$$

Questo consente di estendere le proprietà delle potenze a esponenti razionali.

**Esempio.** Semplificare $\sqrt[3]{8} \cdot \sqrt{4}$:

$$\sqrt[3]{8} \cdot \sqrt{4} = 8^{1/3} \cdot 4^{1/2} = (2^3)^{1/3} \cdot (2^2)^{1/2} = 2^1 \cdot 2^1 = 4$$

### Razionalizzazione del denominatore

È convenzione scrivere le frazioni con denominatore privo di radici. Per eliminare $\sqrt{b}$ dal denominatore si moltiplica numeratore e denominatore per $\sqrt{b}$:

$$\frac{a}{\sqrt{b}} = \frac{a \cdot \sqrt{b}}{\sqrt{b} \cdot \sqrt{b}} = \frac{a\sqrt{b}}{b}$$

Se il denominatore è della forma $\sqrt{a} - \sqrt{b}$, si usa il **coniugo** $\sqrt{a} + \sqrt{b}$:

$$\frac{1}{\sqrt{3}-\sqrt{2}} = \frac{\sqrt{3}+\sqrt{2}}{(\sqrt{3})^2 - (\sqrt{2})^2} = \frac{\sqrt{3}+\sqrt{2}}{3-2} = \sqrt{3}+\sqrt{2}$$

## Notazione scientifica

La **notazione scientifica** esprime ogni numero reale nella forma:

$$a \times 10^n \qquad \text{con } 1 \leq |a| < 10,\; n \in \mathbb{Z}$$

È indispensabile in fisica e ingegneria per gestire scale molto diverse.

**Esempi:**

$$602{,}214 \times 10^{21} = 6{,}02214 \times 10^{23} \quad \text{(numero di Avogadro)}$$

$$0{,}000\,000\,000\,911 \text{ kg} = 9{,}11 \times 10^{-31} \text{ kg} \quad \text{(massa dell'elettrone)}$$

**Operazioni:** si calcolano separatamente la parte numerica e la potenza di 10.

$$\frac{4{,}8 \times 10^7}{1{,}6 \times 10^3} = \frac{4{,}8}{1{,}6} \times 10^{7-3} = 3 \times 10^4$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Semplificazione di potenze</summary>

Semplificare le seguenti espressioni, lasciando il risultato come potenza intera di 2, 3 o 5.

**(a)** $\dfrac{3^5 \cdot 9}{27^2}$ &ensp; **(b)** $\left(\dfrac{2^3}{4}\right)^2 \cdot 8^{-1}$ &ensp; **(c)** $5^3 \cdot 25^{-2} \cdot 125$

**Soluzione.**

**(a)** Notiamo che $9 = 3^2$ e $27 = 3^3$:
$$\frac{3^5 \cdot 3^2}{(3^3)^2} = \frac{3^7}{3^6} = 3^1 = 3$$

**(b)** $4 = 2^2$, quindi $2^3/4 = 2^3/2^2 = 2$; poi $(2)^2 = 4$ e $8^{-1} = 2^{-3}$:
$$2^2 \cdot 2^{-3} = 2^{-1} = \frac{1}{2}$$

**(c)** $25 = 5^2$, $125 = 5^3$:
$$5^3 \cdot (5^2)^{-2} \cdot 5^3 = 5^3 \cdot 5^{-4} \cdot 5^3 = 5^{3-4+3} = 5^2 = 25$$

</details>

<details>
<summary>Esercizio 2 — Radici e razionalizzazione</summary>

Semplificare e razionalizzare: $\dfrac{\sqrt{12} - \sqrt{3}}{\sqrt{3}}$

**Soluzione.**

$$\frac{\sqrt{12} - \sqrt{3}}{\sqrt{3}} = \frac{\sqrt{12}}{\sqrt{3}} - \frac{\sqrt{3}}{\sqrt{3}} = \sqrt{\frac{12}{3}} - 1 = \sqrt{4} - 1 = 2 - 1 = 1$$

</details>

<details>
<summary>Esercizio 3 — Notazione scientifica</summary>

La distanza Terra–Sole è circa $149{,}6 \times 10^6$ km. La luce percorre $3 \times 10^5$ km/s. Quanto tempo impiega la luce a raggiungere la Terra?

**Soluzione.**

$$t = \frac{d}{v} = \frac{1{,}496 \times 10^8 \text{ km}}{3 \times 10^5 \text{ km/s}} = \frac{1{,}496}{3} \times 10^{8-5} \text{ s} \approx 0{,}499 \times 10^3 \text{ s} \approx 499 \text{ s}$$

Circa **8 minuti e 19 secondi**.

</details>
