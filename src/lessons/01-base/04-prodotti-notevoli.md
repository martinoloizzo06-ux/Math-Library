---
id: base-04-prodotti-notevoli
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Prodotti notevoli e scomposizione
title_en: Notable products and factoring
level: green
order: 4
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 3 — Fattorizzazione"
---

## Prodotti notevoli

I **prodotti notevoli** sono identità algebriche che si incontrano così spesso da valere la pena memorizzare.

### Quadrato del binomio

$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$

**Esempio.** $(3x + 2)^2 = 9x^2 + 12x + 4$

### Differenza di quadrati

$$(a + b)(a - b) = a^2 - b^2$$

**Esempio.** $(x+5)(x-5) = x^2 - 25$

### Cubo del binomio

$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

### Somma e differenza di cubi

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

## Scomposizione in fattori (Fattorizzazione)

**Scomporre** un polinomio significa scriverlo come prodotto di polinomi di grado inferiore irriducibili.

### 1. Raccoglimento a fattor comune

Si estrae il massimo comun divisore di tutti i termini:

$$6x^3 - 4x^2 + 2x = 2x(3x^2 - 2x + 1)$$

### 2. Riconoscimento di prodotti notevoli

$$x^2 - 9 = (x-3)(x+3)$$
$$x^2 + 4x + 4 = (x+2)^2$$

### 3. Trinomio di secondo grado

Dato $x^2 + bx + c$, cercare due numeri $p, q$ tali che $p+q = b$ e $p \cdot q = c$:

$$x^2 + bx + c = (x+p)(x+q)$$

**Esempio.** $x^2 - 5x + 6$: cerco $p+q=-5$, $pq=6$ → $p=-2$, $q=-3$.
$$x^2 - 5x + 6 = (x-2)(x-3)$$

### 4. Combinare i metodi

$$2x^3 - 8x = 2x(x^2 - 4) = 2x(x+2)(x-2)$$

---

## Esercizi

<details>
<summary>Esercizio 1 — Prodotti notevoli</summary>

Espandere e semplificare: $(2x - 3)^2 - (2x+3)(2x-3)$.

**Soluzione.**

$(2x-3)^2 = 4x^2 - 12x + 9$

$(2x+3)(2x-3) = 4x^2 - 9$

Differenza: $4x^2 - 12x + 9 - 4x^2 + 9 = -12x + 18 = 6(3 - 2x)$

</details>

<details>
<summary>Esercizio 2 — Scomposizione</summary>

Scomporre completamente $x^4 - 16$.

**Soluzione.**

$$x^4 - 16 = (x^2)^2 - 4^2 = (x^2+4)(x^2-4) = (x^2+4)(x+2)(x-2)$$

$(x^2+4)$ è irriducibile su $\mathbb{R}$ (discriminante $< 0$).

</details>

<details>
<summary>Esercizio 3 — Trinomio</summary>

Scomporre $6x^2 + x - 2$.

**Soluzione.**

Moltiplichiamo il coefficiente di $x^2$ per il termine noto: $6 \cdot (-2) = -12$.  
Cerco due numeri con prodotto $-12$ e somma $+1$: sono $4$ e $-3$.

$$6x^2 + x - 2 = 6x^2 + 4x - 3x - 2 = 2x(3x+2) - 1(3x+2) = (2x-1)(3x+2)$$

Verifica: $(2x-1)(3x+2) = 6x^2 + 4x - 3x - 2 = 6x^2 + x - 2$ ✓

</details>
