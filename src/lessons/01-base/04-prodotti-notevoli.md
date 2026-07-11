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
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Immagina di dover calcolare mentalmente $98^2$. Fare $98 \times 98$ colonna per colonna è lento. Ma se riconosci che $98 = 100 - 2$, puoi usare la formula del quadrato del binomio:
$$98^2 = (100 - 2)^2 = 10000 - 400 + 4 = 9604$$

In pochi secondi, senza carta. Questo è il potere dei prodotti notevoli: identità algebriche che hai memorizzato una volta e che velocizzano i calcoli per sempre.

La scomposizione in fattori (fattorizzazione) è l'operazione inversa: parto da un polinomio complesso e lo scrivo come prodotto di polinomi più semplici. È fondamentale per semplificare frazioni algebriche, risolvere equazioni, trovare zeri di funzioni. È come scomporre un numero nei suoi fattori primi: $12 = 2^2 \cdot 3$ rivela la struttura interna.

---

## 2. Prerequisiti

- Saper eseguire la moltiplicazione di polinomi (distributiva)
- Conoscere monomi, polinomi e il concetto di grado
- Conoscere le proprietà delle potenze ($a^n$)

---

## 3. Teoria passo-passo

### Prodotti notevoli fondamentali

**Quadrato del binomio somma:**
$$(a + b)^2 = a^2 + 2ab + b^2$$

**Quadrato del binomio differenza:**
$$(a - b)^2 = a^2 - 2ab + b^2$$

**Differenza di quadrati (o prodotto della somma per la differenza):**
$$(a + b)(a - b) = a^2 - b^2$$

**Cubo del binomio:**
$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

**Somma e differenza di cubi:**
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

### Tecniche di scomposizione (fattorizzazione)

**1. Raccoglimento totale:** si porta fuori il fattore comune a tutti i termini.
$$6x^3 - 4x^2 + 2x = 2x(3x^2 - 2x + 1)$$

**2. Raccoglimento parziale:** si raggruppa a coppie.
$$ax + ay + bx + by = a(x+y) + b(x+y) = (a+b)(x+y)$$

**3. Riconoscimento di prodotti notevoli:** si riconosce il pattern.
$$x^2 - 6x + 9 = (x-3)^2 \qquad 4x^2 - 25 = (2x+5)(2x-5)$$

**4. Trinomio quadratico:** $x^2 + bx + c = (x + r)(x + s)$ dove $r + s = b$ e $r \cdot s = c$.

**5. Uso di Ruffini:** per polinomi di grado $\geq 3$, si trova una radice razionale e si divide.

---

## 4. Derivazione commentata: il quadrato del binomio

Dimostriamo $(a + b)^2 = a^2 + 2ab + b^2$ in due modi.

**Modo 1 — Moltiplicazione diretta:**

$$(a + b)^2 = (a + b)(a + b)$$

Applico la distributiva (ogni termine del primo per ogni termine del secondo):

$$= a \cdot a + a \cdot b + b \cdot a + b \cdot b = a^2 + ab + ba + b^2$$

Poiché $ab = ba$ (commutatività):
$$= a^2 + 2ab + b^2$$

**Modo 2 — Interpretazione geometrica:**

Considera un quadrato di lato $(a + b)$. La sua area è $(a + b)^2$. Ma puoi dividerlo in 4 rettangoli:
- Un quadrato di lato $a$: area $a^2$
- Un quadrato di lato $b$: area $b^2$
- Due rettangoli di lati $a$ e $b$: area $2 \cdot ab$

Totale: $a^2 + 2ab + b^2$. L'algebra e la geometria concordano.

---

## 5. Esempi graduati

**Esempio 1 — Applicazione diretta del quadrato del binomio**

$(3x + 2)^2$

Identifico: $a = 3x$, $b = 2$.
$$(3x + 2)^2 = (3x)^2 + 2(3x)(2) + 2^2 = 9x^2 + 12x + 4$$

---

**Esempio 2 — Differenza di quadrati**

$(5y - 3)(5y + 3)$

Identifico: $a = 5y$, $b = 3$.
$$(5y - 3)(5y + 3) = (5y)^2 - 3^2 = 25y^2 - 9$$

---

**Esempio 3 — Cubo del binomio**

$(x - 2)^3$

$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$ con $a = x$, $b = 2$:
$$(x - 2)^3 = x^3 - 3x^2(2) + 3x(4) - 8 = x^3 - 6x^2 + 12x - 8$$

---

**Esempio 4 — Fattorizzare un trinomio**

$x^2 + 5x + 6$

Cerco $r, s$ tali che $r + s = 5$ e $r \cdot s = 6$. I candidati sono coppie di divisori di 6: $(1,6), (2,3), (-1,-6), (-2,-3)$. La coppia $(2, 3)$ funziona: $2 + 3 = 5$ e $2 \cdot 3 = 6$.

$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

Verifica: $(x+2)(x+3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$ ✓

---

**Esempio 5 — Riconoscere il quadrato perfetto**

$4x^2 - 20x + 25$

Verifico se è un quadrato perfetto: $4x^2 = (2x)^2$, $25 = 5^2$, $20x = 2 \cdot (2x) \cdot 5$. Sì!

$$4x^2 - 20x + 25 = (2x - 5)^2$$

---

**Esempio 6 — Differenza di cubi**

$x^3 - 8$

$x^3 - 8 = x^3 - 2^3 = (x-2)(x^2 + 2x + 4)$ (formula differenza di cubi con $a = x$, $b = 2$)

Verifica: $(x-2)(x^2+2x+4) = x^3 + 2x^2 + 4x - 2x^2 - 4x - 8 = x^3 - 8$ ✓

---

**Esempio 7 — Scomposizione complessa**

$2x^3 - 8x$

**Passo 1:** Raccoglimento totale: $2x^3 - 8x = 2x(x^2 - 4)$

**Passo 2:** Riconosco la differenza di quadrati: $x^2 - 4 = (x+2)(x-2)$

**Risultato:** $2x^3 - 8x = 2x(x+2)(x-2)$

---

**Esempio 8 — Applicazione al calcolo rapido**

Calcola $47 \times 53$ senza calcolatrice.

$47 = 50 - 3$ e $53 = 50 + 3$. Differenza di quadrati!
$$47 \times 53 = (50-3)(50+3) = 50^2 - 3^2 = 2500 - 9 = 2491$$

---

## 6. Grafico — Differenza di quadrati

```plot
{
  "title": "Differenza di quadrati: x² - 4 = (x-2)(x+2)",
  "fn": "x*x - 4",
  "fn2": "(x - 2) * (x + 2)",
  "domain": [-4, 4],
  "yDomain": [-6, 12],
  "label1": "f(x) = x² - 4",
  "label2": "g(x) = (x-2)(x+2)"
}
```

Le due espressioni sono identiche (le curve si sovrappongono). Il grafico mostra le radici $x = \pm 2$.

---

## 7. Elemento interattivo — Quadrato del binomio

```slider
{
  "title": "Quadrato del binomio: (x + b)²",
  "fn": "(x + b) * (x + b)",
  "domain": [-6, 6],
  "yDomain": [-2, 20],
  "pname": "b",
  "pmin": -4,
  "pmax": 4,
  "pdefault": 2,
  "pstep": 0.5,
  "plabel": "Valore di b",
  "label1": "f(x) = (x + b)²"
}
```

Osserva come il vertice della parabola si sposta al variare di $b$. Il vertice è sempre in $x = -b$, $y = 0$.

---

## 8. Errori comuni

**Errore 1 — Il classico errore del quadrato del binomio**

Sbagliato: $(a + b)^2 = a^2 + b^2$.
Corretto: $(a + b)^2 = a^2 + 2ab + b^2$. Manca sempre il doppio prodotto. Questo è probabilmente l'errore algebrico più frequente in assoluto.

---

**Errore 2 — Sbagliare il segno nel cubo**

Sbagliato: $(a - b)^3 = a^3 - 3a^2b - 3ab^2 - b^3$.
Corretto: $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$. Il terzo termine è $+3ab^2$ (negativo per negativo fa positivo).

---

**Errore 3 — Confondere somma di quadrati con differenza**

$a^2 + b^2$ **non si scompone** in $\mathbb{R}$ (non è un prodotto notevole).
$a^2 - b^2 = (a+b)(a-b)$ si scompone. Non confonderli.

---

**Errore 4 — Fattorizzazione incompleta**

Sbagliato: "Ho scomposto $4x^3 - 16x = 4x(x^2 - 4)$, sono a posto."
Corretto: $x^2 - 4 = (x+2)(x-2)$, quindi la scomposizione completa è $4x(x+2)(x-2)$. Si continua finché ogni fattore è irriducibile.

---

**Errore 5 — Errore nella somma di cubi**

Sbagliato: $a^3 + b^3 = (a+b)^3$.
Corretto: $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 \neq a^3 + b^3$. La formula corretta è $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$.

---

**Errore 6 — Non cercare il MCD prima di fattorizzare**

Prima di applicare qualsiasi formula, cercare sempre il fattore comune a tutti i termini. $2x^4 - 8x^2 = 2x^2(x^2 - 4) = 2x^2(x+2)(x-2)$. Saltare il raccoglimento rende tutto più difficile.

---

## 9. Applicazioni reali

**Calcolo rapido e mentale.** I prodotti notevoli non sono solo strumenti algebrici: permettono calcoli veloci. Ogni volta che devi moltiplicare due numeri "simmetrici" attorno a un valore rotondo (come $48 \times 52 = (50-2)(50+2) = 2500 - 4 = 2496$), la differenza di quadrati ti salva. I trader finanziari e i matematici usano questi trucchi quotidianamente.

**Algoritmi crittografici.** La fattorizzazione di numeri in fattori primi è alla base della crittografia RSA, che protegge le comunicazioni su internet (banche, e-mail, acquisti online). Il fatto che fattorizzare grandi numeri sia difficile è ciò che rende sicura la crittografia. La fattorizzazione polinomiale è il modello teorico su cui si basa questa difficoltà computazionale.

**Fisica — energia cinetica relativa.** In fisica relativistica, la differenza di quadrati appare nella formula $E^2 = (pc)^2 + (mc^2)^2$, che si scompone come $(E - mc^2)(E + mc^2) = (pc)^2$. Riconoscere i prodotti notevoli nelle equazioni fisiche permette di semplificarle e interpretarle.

---

## 10. Riepilogo tabellare

| Prodotto notevole | Formula | Scomposizione inversa |
| --- | --- | --- |
| Quadrato binomio somma | $(a+b)^2 = a^2 + 2ab + b^2$ | $a^2 + 2ab + b^2 = (a+b)^2$ |
| Quadrato binomio differenza | $(a-b)^2 = a^2 - 2ab + b^2$ | $a^2 - 2ab + b^2 = (a-b)^2$ |
| Differenza di quadrati | $(a+b)(a-b) = a^2 - b^2$ | $a^2 - b^2 = (a+b)(a-b)$ |
| Cubo binomio somma | $(a+b)^3 = a^3+3a^2b+3ab^2+b^3$ | — |
| Cubo binomio differenza | $(a-b)^3 = a^3-3a^2b+3ab^2-b^3$ | — |
| Somma di cubi | — | $a^3+b^3=(a+b)(a^2-ab+b^2)$ |
| Differenza di cubi | — | $a^3-b^3=(a-b)(a^2+ab+b^2)$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Espandere con prodotti notevoli</summary>

**Testo:** Espandi: (a) $(2x + 5)^2$; (b) $(3a - 1)^2$; (c) $(x+4)(x-4)$.

**Soluzione:**

(a) $(2x+5)^2 = 4x^2 + 20x + 25$

(b) $(3a-1)^2 = 9a^2 - 6a + 1$

(c) $(x+4)(x-4) = x^2 - 16$

</details>

<details>
<summary>Esercizio 2 — Riconoscere e scomporre</summary>

**Testo:** Scomponi: (a) $9x^2 - 12x + 4$; (b) $16y^2 - 49$; (c) $x^2 + 8x + 16$.

**Soluzione:**

(a) $9x^2 - 12x + 4 = (3x)^2 - 2(3x)(2) + 2^2 = (3x - 2)^2$

(b) $16y^2 - 49 = (4y)^2 - 7^2 = (4y+7)(4y-7)$

(c) $x^2 + 8x + 16 = x^2 + 2 \cdot 4 \cdot x + 4^2 = (x+4)^2$

</details>

<details>
<summary>Esercizio 3 — Scomposizione per raccoglimento</summary>

**Testo:** Scomponi completamente: (a) $3x^4 - 12x^2$; (b) $x^3 + x^2 - x - 1$.

**Soluzione:**

(a) $3x^4 - 12x^2 = 3x^2(x^2 - 4) = 3x^2(x+2)(x-2)$

(b) Raggruppo: $x^2(x+1) - 1(x+1) = (x^2-1)(x+1) = (x+1)(x-1)(x+1) = (x+1)^2(x-1)$

</details>

<details>
<summary>Esercizio 4 — Somma e differenza di cubi</summary>

**Testo:** Scomponi: (a) $8x^3 + 27$; (b) $x^3 - 64$.

**Soluzione:**

(a) $8x^3 + 27 = (2x)^3 + 3^3 = (2x+3)((2x)^2 - 2x \cdot 3 + 9) = (2x+3)(4x^2 - 6x + 9)$

(b) $x^3 - 64 = x^3 - 4^3 = (x-4)(x^2 + 4x + 16)$

</details>

<details>
<summary>Esercizio 5 — Calcolo rapido</summary>

**Testo:** Calcola senza calcolatrice: (a) $103^2$; (b) $99 \times 101$.

**Soluzione:**

(a) $103^2 = (100+3)^2 = 10000 + 600 + 9 = 10609$

(b) $99 \times 101 = (100-1)(100+1) = 100^2 - 1 = 10000 - 1 = 9999$

</details>

<details>
<summary>Esercizio 6 — Trinomio con coefficiente</summary>

**Testo:** Scomponi $6x^2 + 7x - 3$.

**Soluzione:**

Con $a = 6$, $c = -3$, cerco $r \cdot s = a \cdot c = -18$ e $r + s = b = 7$.

Coppie di divisori di $-18$ con somma $7$: $9 \cdot (-2) = -18$ e $9 + (-2) = 7$. ✓

Riscrivere: $6x^2 + 9x - 2x - 3 = 3x(2x+3) - 1(2x+3) = (3x-1)(2x+3)$

</details>

<details>
<summary>Esercizio 7 — Espressione mista</summary>

**Testo:** Semplifica $(a+b)^2 - (a-b)^2$.

**Soluzione:**

$(a+b)^2 = a^2 + 2ab + b^2$

$(a-b)^2 = a^2 - 2ab + b^2$

Differenza: $(a^2 + 2ab + b^2) - (a^2 - 2ab + b^2) = 4ab$

</details>
