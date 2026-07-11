---
id: base-03-espressioni-polinomi
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Espressioni algebriche e polinomi
title_en: Algebraic expressions and polynomials
level: green
order: 3
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 3 — Polinomi"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Quando un ingegnere progetta un ponte, deve calcolare le forze che agiscono su di esso in funzione del carico. Il carico varia: ci possono essere 10 auto, 50 auto, 1000 auto. Invece di fare un calcolo diverso per ogni scenario, l'ingegnere scrive una **formula** con una lettera, per esempio $F(x) = 3x^2 + 150x + 500$, dove $x$ è il numero di auto. Questa è un'espressione algebrica: una ricetta matematica che vale per qualsiasi valore della variabile.

I polinomi sono le espressioni algebriche più semplici e più potenti: non contengono radici, frazioni con la variabile al denominatore, o funzioni trigonometriche. Solo somme, differenze e potenze intere. Eppure con i polinomi si approssima praticamente qualsiasi funzione (teorema di Weierstrass), si descrivono traiettorie fisiche, si modellano andamenti economici e si risolve la maggior parte dei problemi di calcolo.

---

## 2. Prerequisiti

- Conoscere le quattro operazioni su $\mathbb{R}$
- Conoscere le potenze a esponente naturale ($a^n$)
- Comprendere la differenza tra variabile e costante

---

## 3. Teoria passo-passo

### Monomi

Un **monomio** è il prodotto di un numero (detto **coefficiente**) per una o più variabili elevate a potenze intere non negative:

$$5x^3, \quad -\frac{1}{2}a^2b, \quad 7, \quad x$$

Il **grado** di un monomio è la somma degli esponenti di tutte le variabili. Il grado di $5x^3$ è 3; il grado di $-\frac{1}{2}a^2b$ è $2+1 = 3$; il grado di una costante non nulla è 0.

Due monomi si dicono **simili** (o **omogenei**) se hanno identica parte letterale (stesse variabili con stessi esponenti). Solo i monomi simili si possono sommare e sottrarre:
$$5x^2 + 3x^2 = 8x^2 \qquad 4xy - xy = 3xy \qquad 2x^2 + 3x \text{ non si semplifica}$$

### Polinomi: definizione

Un **polinomio** è una somma finita di monomi (chiamati **termini**). In una variabile $x$, la forma generale è:

$$p(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0, \quad a_n \neq 0$$

dove:
- $a_n, a_{n-1}, \ldots, a_0 \in \mathbb{R}$ sono i **coefficienti**
- $n \in \mathbb{N}$ è il **grado** del polinomio (il massimo esponente con coefficiente non nullo)
- $a_n$ è il **coefficiente direttivo** (o **leading coefficient**)
- $a_0$ è il **termine noto**

**Nomi speciali per grado:**
- Grado 0: costante (es. $p(x) = 7$)
- Grado 1: **binomio lineare** (es. $2x + 3$)
- Grado 2: **trinomio quadratico** (es. $x^2 - 3x + 1$)
- Grado 3: **polinomio cubico**

### Operazioni sui polinomi

**Addizione e sottrazione:** si sommano/sottraggono i coefficienti dei termini di stesso grado (monomi simili).

**Moltiplicazione:** si usa la proprietà distributiva:
$$(a + b)(c + d) = ac + ad + bc + bd$$

Generalizzando: ogni termine del primo polinomio moltiplica ogni termine del secondo; poi si raccolgono i simili.

**Divisione:** si usa la divisione euclidea tra polinomi (algoritmo di Ruffini per la divisione per $(x - r)$).

### Teorema del resto e regola di Ruffini

Dato un polinomio $p(x)$ diviso per $(x - r)$:
- Il **resto** della divisione è $p(r)$ (teorema del resto)
- Se $p(r) = 0$, allora $(x - r)$ è un **fattore** di $p(x)$ (teorema fattore)
- In questo caso $r$ si dice **radice** di $p(x)$

---

## 4. Derivazione commentata: la moltiplicazione di polinomi

Dimostriamo che $(a + b + c)(d + e) = ad + ae + bd + be + cd + ce$.

**Passo 1 — Trattare $(a + b + c)$ come un'unica "entità":**
Chiamiamola $P$. Allora $P \cdot (d + e) = P \cdot d + P \cdot e$ per distributività.

**Passo 2 — Espandere $P \cdot d$:**
$(a + b + c) \cdot d = ad + bd + cd$

**Passo 3 — Espandere $P \cdot e$:**
$(a + b + c) \cdot e = ae + be + ce$

**Passo 4 — Sommare:**
$$ad + bd + cd + ae + be + ce$$

Che è uguale al risultato atteso. Il principio è: **ogni termine del primo moltiplica ogni termine del secondo**. Per due polinomi di grado $m$ e $n$, il prodotto ha $(m+1)(n+1)$ termini prima di raccogliere i simili, e grado $m + n$ dopo.

---

## 5. Esempi graduati

**Esempio 1 — Somma di polinomi semplice**

$(3x^2 + 2x - 1) + (x^2 - 5x + 4)$

Raccolgo i termini simili:
$$(3+1)x^2 + (2-5)x + (-1+4) = 4x^2 - 3x + 3$$

---

**Esempio 2 — Differenza di polinomi**

$(5x^3 - 2x + 7) - (x^3 + 3x^2 - 4)$

Cambio segno al secondo polinomio e sommo:
$$5x^3 - 2x + 7 - x^3 - 3x^2 + 4 = 4x^3 - 3x^2 - 2x + 11$$

---

**Esempio 3 — Prodotto di monomio per polinomio**

$3x^2 \cdot (2x^3 - x + 5)$

Distribuisco:
$$3x^2 \cdot 2x^3 + 3x^2 \cdot (-x) + 3x^2 \cdot 5 = 6x^5 - 3x^3 + 15x^2$$

---

**Esempio 4 — Prodotto di binomio per trinomio**

$(x + 2)(x^2 - 3x + 1)$

$$= x \cdot x^2 + x \cdot (-3x) + x \cdot 1 + 2 \cdot x^2 + 2 \cdot (-3x) + 2 \cdot 1$$
$$= x^3 - 3x^2 + x + 2x^2 - 6x + 2$$
$$= x^3 - x^2 - 5x + 2$$

---

**Esempio 5 — Valutazione di un polinomio**

Dato $p(x) = 2x^3 - x^2 + 3x - 7$, calcola $p(2)$ e $p(-1)$.

$$p(2) = 2(8) - 4 + 6 - 7 = 16 - 4 + 6 - 7 = 11$$
$$p(-1) = 2(-1) - 1 - 3 - 7 = -2 - 1 - 3 - 7 = -13$$

---

**Esempio 6 — Trovare una radice con Ruffini**

$p(x) = x^3 - 6x^2 + 11x - 6$. Verificare che $x = 1$ è una radice e dividere per $(x-1)$.

$p(1) = 1 - 6 + 11 - 6 = 0$ ✓ Quindi $(x-1)$ è un fattore.

Schema di Ruffini (coefficienti: 1, -6, 11, -6; divisore: 1):

$$\begin{array}{r|rrrr} 1 & 1 & -6 & 11 & -6 \\ & & 1 & -5 & 6 \\ \hline & 1 & -5 & 6 & 0 \end{array}$$

Quoziente: $x^2 - 5x + 6 = (x-2)(x-3)$.

Quindi: $p(x) = (x-1)(x-2)(x-3)$. Le radici sono $x = 1, 2, 3$.

---

**Esempio 7 — Polinomio in due variabili**

Calcola il grado di $p(x, y) = 3x^2y^3 - xy + 2y^4 - 1$.

- $3x^2y^3$: grado $2 + 3 = 5$
- $-xy$: grado $1 + 1 = 2$
- $2y^4$: grado 4
- $-1$: grado 0

Il grado del polinomio è il massimo: **5**.

---

## 6. Grafico — Polinomi di diverso grado

```plot
{
  "title": "Confronto: lineare, quadratico, cubico",
  "fn": "x*x - 2*x - 3",
  "fn2": "0.5*x*x*x - 2*x",
  "domain": [-3, 4],
  "yDomain": [-6, 8],
  "label1": "p(x) = x² - 2x - 3",
  "label2": "q(x) = 0.5x³ - 2x"
}
```

---

## 7. Elemento interattivo — Effetto del coefficiente direttivo

```slider
{
  "title": "Polinomio quadratico: effetto di a in ax² + bx + c",
  "fn": "a*x*x - 2*x + 1",
  "domain": [-4, 5],
  "yDomain": [-5, 15],
  "pname": "a",
  "pmin": -2,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Coefficiente a",
  "label1": "p(x) = ax² - 2x + 1"
}
```

Osserva: per $a > 0$ la parabola è rivolta verso l'alto; per $a < 0$ verso il basso; per $a = 0$ diventa una retta. Il coefficiente $a$ controlla anche "quanto è stretta" la parabola.

---

## 8. Errori comuni

**Errore 1 — Sommare termini non simili**

Sbagliato: $2x^2 + 3x = 5x^3$.
Corretto: $2x^2$ e $3x$ non sono simili (esponenti diversi). Non si sommano: rimane $2x^2 + 3x$.

---

**Errore 2 — Perdere il segno meno nella sottrazione di polinomi**

Sbagliato: $(3x^2 - x) - (2x^2 + x) = 3x^2 - x - 2x^2 + x = x^2$.
Attenzione al segno: il meno si distribuisce su tutti i termini del secondo polinomio.
Corretto: $(3x^2 - x) - (2x^2 + x) = 3x^2 - x - 2x^2 - x = x^2 - 2x$.

---

**Errore 3 — Calcolare il grado sbagliato**

Sbagliato: "il grado di $3x^2 y^4$ è $2$ perché c'è $x^2$."
Corretto: il grado è $2 + 4 = 6$. Per i monomi in più variabili si somma tutti gli esponenti.

---

**Errore 4 — Dimenticare i termini nel prodotto**

Sbagliato: $(x+2)(x+3) = x^2 + 6$.
Corretto: $(x+2)(x+3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$. Ogni termine del primo per ogni termine del secondo: 4 prodotti parziali, non 2.

---

**Errore 5 — Confondere "radice del polinomio" con "radice quadrata"**

Una radice (o zero) di $p(x)$ è un valore $r$ tale che $p(r) = 0$. Non ha nulla a che fare con la radice quadrata. Per esempio, $r = 3$ è una radice di $p(x) = x - 3$.

---

**Errore 6 — Credere che il grado del prodotto sia il massimo dei gradi**

Sbagliato: "grado di $x^3 \cdot x^2$ è $\max(3,2) = 3$."
Corretto: $x^3 \cdot x^2 = x^5$. Il grado del **prodotto** è la **somma** dei gradi. Il grado della **somma** è al massimo il massimo dei gradi.

---

## 9. Applicazioni reali

**Fisica — traiettorie.** Il moto di un proiettile è descritto da un polinomio quadratico: $y(t) = y_0 + v_0 t - \frac{1}{2}g t^2$, dove $g = 9{,}81\ \text{m/s}^2$ è l'accelerazione di gravità. La variabile $t$ è il tempo; i coefficienti dipendono dalle condizioni iniziali. Trovare quando il proiettile tocca terra significa trovare le radici di un polinomio quadratico.

**Economia — curve di domanda e offerta.** Gli economisti spesso approssimano le curve di domanda con polinomi. Un produttore potrebbe modellare i propri ricavi come $R(q) = -0{,}5q^2 + 100q$, dove $q$ è la quantità prodotta. Massimizzare $R(q)$ richiede la derivata (che è un altro polinomio di grado inferiore).

**Informatica — interpolazione e grafica.** Le curve di Bézier, usate in ogni software di grafica vettoriale (Illustrator, Inkscape, i font dei caratteri tipografici), sono polinomi parametrici. Ogni lettera che leggi è descritta da polinomi cubici o quadratici. Anche l'interpolazione di dati sperimentali avviene spesso tramite polinomi (metodo dei minimi quadrati).

---

## 10. Riepilogo tabellare

| Concetto | Definizione | Esempio |
| --- | --- | --- |
| Monomio | Prodotto di costante e variabili con esponenti naturali | $-4x^2y$ |
| Grado monomio | Somma degli esponenti | $\deg(-4x^2y) = 3$ |
| Polinomio | Somma finita di monomi | $x^3 - 2x + 5$ |
| Grado polinomio | Max esponente con coefficiente $\neq 0$ | $\deg(x^3 - 2x + 5) = 3$ |
| Monomi simili | Stessa parte letterale | $3x^2$ e $-x^2$ |
| Radice di $p(x)$ | Valore $r$ con $p(r) = 0$ | $r=2$ per $p(x)=x-2$ |
| Teorema del resto | Resto di $p(x)/(x-r)$ è $p(r)$ | — |
| Prodotto di polinomi | Distributiva, grado = somma gradi | $(x+1)(x+2) = x^2+3x+2$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Operazioni sui polinomi</summary>

**Testo:** Calcola $(2x^3 - x^2 + 4) + (x^3 + 3x^2 - 2x - 1) - (x^3 - x)$.

**Soluzione:**

$$= 2x^3 - x^2 + 4 + x^3 + 3x^2 - 2x - 1 - x^3 + x$$
$$= (2+1-1)x^3 + (-1+3)x^2 + (-2+1)x + (4-1)$$
$$= 2x^3 + 2x^2 - x + 3$$

</details>

<details>
<summary>Esercizio 2 — Prodotto di polinomi</summary>

**Testo:** Espandi $(2x - 3)(x^2 + x - 5)$.

**Soluzione:**

$$= 2x \cdot x^2 + 2x \cdot x + 2x \cdot (-5) + (-3) \cdot x^2 + (-3) \cdot x + (-3)(-5)$$
$$= 2x^3 + 2x^2 - 10x - 3x^2 - 3x + 15$$
$$= 2x^3 - x^2 - 13x + 15$$

</details>

<details>
<summary>Esercizio 3 — Valutazione e verifica radice</summary>

**Testo:** Verifica che $x = -2$ è radice di $p(x) = x^3 + 4x^2 + x - 6$ e poi scomponi $p(x)$.

**Soluzione:**

$p(-2) = (-2)^3 + 4(4) + (-2) - 6 = -8 + 16 - 2 - 6 = 0$ ✓

Divido per $(x+2)$ con Ruffini (coefficienti: 1, 4, 1, -6; divisore: $-2$):

$$\begin{array}{r|rrrr} -2 & 1 & 4 & 1 & -6 \\ & & -2 & -4 & 6 \\ \hline & 1 & 2 & -3 & 0 \end{array}$$

Quoziente: $x^2 + 2x - 3 = (x+3)(x-1)$.

Quindi $p(x) = (x+2)(x+3)(x-1)$. Radici: $x = -2, -3, 1$.

</details>

<details>
<summary>Esercizio 4 — Grado e coefficienti</summary>

**Testo:** Dato $p(x) = 3x^4 - 0 \cdot x^3 + 2x^2 - x + 5$, indica: grado, coefficiente direttivo, termine noto.

**Soluzione:**

Il termine $0 \cdot x^3$ è nullo, quindi non contribuisce al grado.
- **Grado:** 4 (il termine di grado più alto con coefficiente non nullo è $3x^4$)
- **Coefficiente direttivo:** 3
- **Termine noto:** 5 (il termine senza $x$)

</details>

<details>
<summary>Esercizio 5 — Polinomio da radici</summary>

**Testo:** Scrivi il polinomio monico di grado 3 con radici $x = 0$, $x = 1$, $x = -3$.

**Soluzione:**

Se le radici sono $0, 1, -3$, il polinomio è:
$$p(x) = (x - 0)(x - 1)(x - (-3)) = x(x-1)(x+3)$$
$$= x(x^2 + 3x - x - 3) = x(x^2 + 2x - 3)$$
$$= x^3 + 2x^2 - 3x$$

</details>

<details>
<summary>Esercizio 6 — Applicazione fisica</summary>

**Testo:** La posizione di un oggetto in caduta è $h(t) = 80 - 5t^2$ (in metri, $t$ in secondi). Quando tocca terra? Qual è la posizione a $t = 2$?

**Soluzione:**

Tocca terra quando $h(t) = 0$:
$$80 - 5t^2 = 0 \implies t^2 = 16 \implies t = 4 \text{ s}$$

(prendiamo solo $t > 0$)

Posizione a $t = 2$: $h(2) = 80 - 5 \cdot 4 = 80 - 20 = 60$ m.

</details>
