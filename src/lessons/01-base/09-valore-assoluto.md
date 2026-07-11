---
id: base-09-valore-assoluto
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Valore assoluto
title_en: Absolute value
level: green
order: 9
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 4 — Valore assoluto"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Due città sono a 100 km di distanza. Se percorri 130 km nella direzione sbagliata, la distanza dalla città di partenza è 130 km — non importa in che direzione sei andato. La **distanza è sempre positiva**.

Questo è esattamente il valore assoluto: misura la distanza da zero sulla retta numerica, ignorando la direzione (il segno). $\lvert 5 \rvert = 5$, $\lvert -5 \rvert = 5$: entrambi i numeri distano 5 da zero.

Il valore assoluto è fondamentale in analisi matematica (definizione di limite e continuità), in statistica (errore assoluto, deviazione dalla media), in fisica (la distanza percorsa è il valore assoluto dello spostamento), in informatica (norma di un vettore, distanza di Hamming). Non è solo un trucco algebrico: è un modo di misurare la "grandezza" di una quantità indipendentemente dal suo segno.

---

## 2. Prerequisiti

- Conoscere la retta numerica e gli intervalli
- Saper risolvere equazioni e disequazioni di primo e secondo grado
- Comprendere il concetto di distanza geometrica

---

## 3. Teoria passo-passo

### Definizione analitica

Il **valore assoluto** (o **modulo**) di un numero reale $x$ è:

$$\lvert x \rvert = \begin{cases} x & \text{se } x \geq 0 \\ -x & \text{se } x < 0 \end{cases}$$

**Interpretazione geometrica:** $\lvert x \rvert$ è la distanza di $x$ dall'origine sulla retta numerica. Più in generale:
$$\lvert x - a \rvert = \text{distanza tra } x \text{ e } a$$

### Proprietà fondamentali

Per ogni $a, b \in \mathbb{R}$:

| Proprietà | Formula | Significato |
| --- | --- | --- |
| Non negatività | $\lvert a \rvert \geq 0$ | La distanza non è mai negativa |
| Uguaglianza | $\lvert a \rvert = 0 \iff a = 0$ | Solo l'origine dista 0 da sé stessa |
| Simmetria | $\lvert -a \rvert = \lvert a \rvert$ | $a$ e $-a$ distano uguale dall'origine |
| Prodotto | $\lvert ab \rvert = \lvert a \rvert \cdot \lvert b \rvert$ | Il modulo distribuisce sul prodotto |
| Quoziente | $\left\lvert \dfrac{a}{b} \right\rvert = \dfrac{\lvert a \rvert}{\lvert b \rvert}$ ($b \neq 0$) | Distribuzione sulla divisione |
| Potenza | $\lvert a^2 \rvert = a^2$ | Il quadrato è sempre positivo |
| Radice | $\sqrt{a^2} = \lvert a \rvert$ | Non è uguale a $a$ se $a < 0$! |

### Disuguaglianza triangolare

$$\lvert a + b \rvert \leq \lvert a \rvert + \lvert b \rvert$$

Questa è una delle disuguaglianze più importanti della matematica. Il nome viene dalla geometria: la lunghezza di un lato di un triangolo non supera la somma delle lunghezze degli altri due lati.

Una forma equivalente (disuguaglianza triangolare inversa):
$$\lvert \lvert a \rvert - \lvert b \rvert \rvert \leq \lvert a - b \rvert$$

### Equazioni con il valore assoluto

**Forma base:** $\lvert f(x) \rvert = k$ con $k \geq 0$.

$$\lvert f(x) \rvert = k \iff f(x) = k \text{ oppure } f(x) = -k$$

Se $k < 0$: $\lvert f(x) \rvert = k$ è impossibile (il modulo è sempre $\geq 0$).

### Disequazioni con il valore assoluto

**Forma "minore di"** ($\lvert f(x) \rvert < k$, con $k > 0$):
$$\lvert f(x) \rvert < k \iff -k < f(x) < k$$

Geometricamente: l'insieme dei punti a distanza **minore di $k$** dal punto di simmetria.

**Forma "maggiore di"** ($\lvert f(x) \rvert > k$, con $k > 0$):
$$\lvert f(x) \rvert > k \iff f(x) < -k \text{ oppure } f(x) > k$$

Geometricamente: l'insieme dei punti a distanza **maggiore di $k$** dal punto di simmetria.

**Schema mnemonica:**

| Tipo | Formula | Soluzione |
| --- | --- | --- |
| $\lvert x \rvert < k$ | distanza $< k$ | $(-k, k)$ (intervallo centrato) |
| $\lvert x \rvert \leq k$ | distanza $\leq k$ | $[-k, k]$ (intervallo chiuso) |
| $\lvert x \rvert > k$ | distanza $> k$ | $(-\infty,-k) \cup (k,+\infty)$ |
| $\lvert x \rvert \geq k$ | distanza $\geq k$ | $(-\infty,-k] \cup [k,+\infty)$ |

---

## 4. Derivazione commentata: prova della disuguaglianza triangolare

Dimostriamo $\lvert a + b \rvert \leq \lvert a \rvert + \lvert b \rvert$.

**Passo 1 — Osservazione chiave:** per ogni numero reale $t$, vale $t \leq \lvert t \rvert$ (se $t \geq 0$ allora $t = \lvert t \rvert$; se $t < 0$ allora $t < 0 < \lvert t \rvert$). Analogamente, $-t \leq \lvert t \rvert$.

**Passo 2 — Applicare a $a$ e $b$:**
$$a \leq \lvert a \rvert, \quad b \leq \lvert b \rvert$$
Sommando: $a + b \leq \lvert a \rvert + \lvert b \rvert$.

**Passo 3 — Applicare anche a $-a$ e $-b$:**
$$-a \leq \lvert a \rvert, \quad -b \leq \lvert b \rvert$$
Sommando: $-(a+b) \leq \lvert a \rvert + \lvert b \rvert$.

**Passo 4 — Concludere:** dai passaggi 2 e 3, sia $a+b$ che $-(a+b)$ sono $\leq \lvert a \rvert + \lvert b \rvert$. Quindi:
$$\lvert a + b \rvert = \max(a+b, -(a+b)) \leq \lvert a \rvert + \lvert b \rvert \quad \square$$

---

## 5. Esempi graduati

**Esempio 1 — Calcolo diretto del valore assoluto**

$\lvert -7 \rvert = 7$, $\lvert 3{,}14 \rvert = 3{,}14$, $\lvert 0 \rvert = 0$, $\lvert \pi - 4 \rvert = \lvert -0{,}858\ldots \rvert = 4 - \pi$.

---

**Esempio 2 — Interpretazione come distanza**

$\lvert x - 3 \rvert$ è la distanza di $x$ dal punto 3 sulla retta.
$\lvert x - 3 \rvert = 5$ significa: $x$ dista 5 da 3, quindi $x = 3 + 5 = 8$ o $x = 3 - 5 = -2$.

---

**Esempio 3 — Equazione base**

$\lvert 2x - 1 \rvert = 5$

Due casi:
- $2x - 1 = 5 \implies x = 3$
- $2x - 1 = -5 \implies x = -2$

$S = \{-2, 3\}$.

---

**Esempio 4 — Equazione impossibile**

$\lvert x - 3 \rvert = -2$

Il modulo è sempre $\geq 0$, non può essere uguale a $-2$. $S = \emptyset$.

---

**Esempio 5 — Disequazione del tipo "$< k$"**

$\lvert x - 2 \rvert < 3$

$-3 < x - 2 < 3 \implies -1 < x < 5$. $S = (-1, 5)$.

Geometricamente: tutti i punti a distanza $< 3$ dal punto 2.

---

**Esempio 6 — Disequazione del tipo "$> k$"**

$\lvert 2x + 1 \rvert \geq 5$

Due casi:
- $2x + 1 \geq 5 \implies x \geq 2$
- $2x + 1 \leq -5 \implies x \leq -3$

$S = (-\infty, -3] \cup [2, +\infty)$.

---

**Esempio 7 — Equazione con due valori assoluti**

$\lvert x - 1 \rvert = \lvert x + 3 \rvert$

Questo significa: $x$ equidista da 1 e da $-3$. Il punto medio è $\frac{1 + (-3)}{2} = -1$. Quindi $x = -1$.

Verifica algebrica: eleviamo al quadrato entrambi i membri ($\lvert A \rvert = \lvert B \rvert \iff A^2 = B^2$):
$(x-1)^2 = (x+3)^2$
$x^2 - 2x + 1 = x^2 + 6x + 9$
$-8x = 8 \implies x = -1$ ✓

---

**Esempio 8 — Applicazione alla disuguaglianza triangolare**

Verifica che $\lvert 3 + (-5) \rvert \leq \lvert 3 \rvert + \lvert -5 \rvert$.

$\lvert 3 - 5 \rvert = \lvert -2 \rvert = 2 \leq 3 + 5 = 8$ ✓.

(L'uguaglianza si raggiungerebbe se $3$ e $-5$ avessero lo stesso segno.)

---

## 6. Grafico — La funzione valore assoluto

```plot
{
  "title": "f(x) = |x| e g(x) = |x - 2|",
  "fn": "Math.abs(x)",
  "fn2": "Math.abs(x - 2)",
  "domain": [-5, 7],
  "yDomain": [-1, 6],
  "label1": "f(x) = |x|",
  "label2": "g(x) = |x - 2|"
}
```

La funzione $\lvert x \rvert$ ha il vertice nell'origine. La funzione $\lvert x - 2 \rvert$ è traslata di 2 unità a destra: il vertice è in $x = 2$.

---

## 7. Elemento interattivo — Traslazione del valore assoluto

```slider
{
  "title": "Valore assoluto traslato: |x - a|",
  "fn": "Math.abs(x - a)",
  "domain": [-6, 6],
  "yDomain": [-1, 7],
  "pname": "a",
  "pmin": -4,
  "pmax": 4,
  "pdefault": 0,
  "pstep": 0.5,
  "plabel": "Centro a",
  "label1": "f(x) = |x - a|"
}
```

Il vertice della "V" si trova sempre in $x = a$, dove $f(a) = 0$. Spostandoti a sinistra o a destra di $a$, la funzione cresce linearmente.

---

## 8. Errori comuni

**Errore 1 — $\sqrt{a^2} = a$ invece di $\lvert a \rvert$**

Sbagliato: $\sqrt{(-3)^2} = -3$.
Corretto: $\sqrt{(-3)^2} = \sqrt{9} = 3 = \lvert -3 \rvert$. La radice quadrata è per definizione non negativa.

---

**Errore 2 — Aprire le parentesi del modulo senza analizzare il segno**

Sbagliato: $\lvert 2x - 6 \rvert = 2x - 6$ sempre.
Corretto: $\lvert 2x - 6 \rvert = 2x - 6$ solo se $2x - 6 \geq 0$ (cioè $x \geq 3$). Per $x < 3$, vale $\lvert 2x - 6 \rvert = -(2x-6) = 6 - 2x$.

---

**Errore 3 — Dimenticare una delle due equazioni nella risoluzione**

Sbagliato: da $\lvert x + 1 \rvert = 4$, scrivere solo $x + 1 = 4 \implies x = 3$.
Corretto: anche $x + 1 = -4 \implies x = -5$. Le soluzioni sono $\{-5, 3\}$.

---

**Errore 4 — Invertire i simboli nella disequazione con il modulo**

Sbagliato: $\lvert x \rvert > 3 \implies -3 < x < 3$.
Corretto: $\lvert x \rvert > 3$ significa distanza da 0 maggiore di 3: $x < -3$ oppure $x > 3$.

L'intervallo $(-3, 3)$ è la soluzione di $\lvert x \rvert < 3$, non $> 3$.

---

**Errore 5 — Usare $\lvert a - b \rvert = \lvert a \rvert - \lvert b \rvert$ (falso in generale)**

Sbagliato: $\lvert 3 - 7 \rvert = \lvert 3 \rvert - \lvert 7 \rvert = 3 - 7 = -4$.
Corretto: $\lvert 3 - 7 \rvert = \lvert -4 \rvert = 4$. Vale solo $\lvert \lvert a \rvert - \lvert b \rvert \rvert \leq \lvert a - b \rvert$ (disuguaglianza, non uguaglianza).

---

**Errore 6 — Non verificare le soluzioni nelle equazioni con moduli**

Nelle equazioni con moduli, specialmente quelle che si risolvono elevando al quadrato, si possono introdurre soluzioni spurie. Verificare sempre sostituendo nell'equazione originale.

---

## 9. Applicazioni reali

**Statistica — Errore medio assoluto.** In statistica, l'errore assoluto medio (MAE, *Mean Absolute Error*) è $\text{MAE} = \frac{1}{n}\sum_{i=1}^{n} \lvert y_i - \hat{y}_i \rvert$, dove $y_i$ sono i valori reali e $\hat{y}_i$ le previsioni. Usare il valore assoluto invece del quadrato rende la misura meno sensibile agli outlier. Il MAE è usato per valutare la bontà di previsioni in finanza, meteorologia e machine learning.

**Fisica — Oscillazioni e tolleranze.** Un pendolo oscilla attorno alla posizione di equilibrio. La condizione "$\lvert x(t) \rvert \leq A$" (l'oscillazione non supera l'ampiezza $A$) è una disequazione con valore assoluto. In ingegneria meccanica, le tolleranze di produzione si esprimono con disequazioni del tipo $\lvert d - d_0 \rvert \leq \epsilon$ ("il diametro $d$ non si discosta dal valore nominale $d_0$ per più di $\epsilon$ mm").

**Informatica — Convergenza degli algoritmi.** Molti algoritmi numerici si fermano quando la variazione di un parametro diventa piccola: $\lvert x_{n+1} - x_n \rvert < \epsilon$, dove $\epsilon$ è una tolleranza prefissata. Questo criterio di arresto usa esattamente il valore assoluto. Il metodo di Newton-Raphson per trovare zeri di funzioni usa proprio questa condizione.

---

## 10. Riepilogo tabellare

| Tipo | Equazione/Disequazione | Soluzione |
| --- | --- | --- |
| Equazione | $\lvert f(x) \rvert = k$ ($k > 0$) | $f(x) = k$ oppure $f(x) = -k$ |
| Equazione impossibile | $\lvert f(x) \rvert = k$ ($k < 0$) | $S = \emptyset$ |
| Disequazione $<$ | $\lvert f(x) \rvert < k$ ($k > 0$) | $-k < f(x) < k$ |
| Disequazione $\leq$ | $\lvert f(x) \rvert \leq k$ ($k > 0$) | $-k \leq f(x) \leq k$ |
| Disequazione $>$ | $\lvert f(x) \rvert > k$ ($k > 0$) | $f(x) < -k$ oppure $f(x) > k$ |
| Disequazione $\geq$ | $\lvert f(x) \rvert \geq k$ ($k > 0$) | $f(x) \leq -k$ oppure $f(x) \geq k$ |
| Doppio modulo | $\lvert A \rvert = \lvert B \rvert$ | $A = B$ oppure $A = -B$ |
| Proprietà chiave | $\sqrt{a^2} = \lvert a \rvert$ | Non è $a$ se $a < 0$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Calcolo e interpretazione</summary>

**Testo:** Calcola e interpreta geometricamente: $\lvert 7 - 10 \rvert$, $\lvert -3 - 2 \rvert$, $\lvert \sqrt{2} - 1{,}5 \rvert$.

**Soluzione:**

- $\lvert 7 - 10 \rvert = \lvert -3 \rvert = 3$: distanza tra 7 e 10 sulla retta reale
- $\lvert -3 - 2 \rvert = \lvert -5 \rvert = 5$: distanza tra $-3$ e $2$
- $\lvert \sqrt{2} - 1{,}5 \rvert = \lvert 1{,}414\ldots - 1{,}5 \rvert = \lvert -0{,}086\ldots \rvert \approx 0{,}086$: distanza tra $\sqrt{2}$ e $1{,}5$

</details>

<details>
<summary>Esercizio 2 — Equazione con modulo</summary>

**Testo:** Risolvi: $\lvert 3x + 2 \rvert = 7$.

**Soluzione:**

Caso 1: $3x + 2 = 7 \implies 3x = 5 \implies x = \frac{5}{3}$

Caso 2: $3x + 2 = -7 \implies 3x = -9 \implies x = -3$

$S = \left\{-3, \frac{5}{3}\right\}$

</details>

<details>
<summary>Esercizio 3 — Disequazione "minore"</summary>

**Testo:** Risolvi: $\lvert 2x - 3 \rvert \leq 1$.

**Soluzione:**

$-1 \leq 2x - 3 \leq 1$

$2 \leq 2x \leq 4$

$1 \leq x \leq 2$

$S = [1, 2]$

</details>

<details>
<summary>Esercizio 4 — Disequazione "maggiore"</summary>

**Testo:** Risolvi: $\lvert x + 4 \rvert > 2$.

**Soluzione:**

Caso 1: $x + 4 > 2 \implies x > -2$

Caso 2: $x + 4 < -2 \implies x < -6$

$S = (-\infty, -6) \cup (-2, +\infty)$

</details>

<details>
<summary>Esercizio 5 — Equazione con due moduli</summary>

**Testo:** Risolvi: $\lvert x - 2 \rvert = \lvert 2x + 1 \rvert$.

**Soluzione:**

$\lvert A \rvert = \lvert B \rvert \iff A = B$ o $A = -B$.

Caso 1: $x - 2 = 2x + 1 \implies -x = 3 \implies x = -3$

Caso 2: $x - 2 = -(2x + 1) = -2x - 1 \implies 3x = 1 \implies x = \frac{1}{3}$

Verifica $x = -3$: $\lvert -3-2 \rvert = 5$, $\lvert -6+1 \rvert = 5$ ✓

Verifica $x = \frac{1}{3}$: $\lvert \frac{1}{3}-2 \rvert = \frac{5}{3}$, $\lvert \frac{2}{3}+1 \rvert = \frac{5}{3}$ ✓

$S = \left\{-3, \frac{1}{3}\right\}$

</details>

<details>
<summary>Esercizio 6 — Applicazione alla tolleranza</summary>

**Testo:** Una barra di metallo deve avere lunghezza $(50 \pm 0{,}2)$ mm. Trova l'intervallo di valori accettabili e scrivi la condizione con il valore assoluto.

**Soluzione:**

Condizione: $\lvert L - 50 \rvert \leq 0{,}2$.

$-0{,}2 \leq L - 50 \leq 0{,}2 \implies 49{,}8 \leq L \leq 50{,}2$ mm.

L'intervallo accettabile è $[49{,}8; 50{,}2]$ mm.

</details>

<details>
<summary>Esercizio 7 — Disuguaglianza triangolare</summary>

**Testo:** Usando la disuguaglianza triangolare, dimostra che $\lvert x \rvert \leq \lvert x - y \rvert + \lvert y \rvert$.

**Soluzione:**

Scrivo $x = (x - y) + y$.

Per la disuguaglianza triangolare:
$$\lvert x \rvert = \lvert (x-y) + y \rvert \leq \lvert x - y \rvert + \lvert y \rvert \quad \square$$

</details>
