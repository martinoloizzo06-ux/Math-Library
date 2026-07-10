---
id: base-12-funzione-quadratica
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzione quadratica e parabola
title_en: Quadratic function and parabola
level: green
order: 12
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 5 — Parabola"
---

## Intuizione e motivazione

Lancia una palla in aria: sale, raggiunge un punto massimo, poi ridiscende. Se tracci la traiettoria sul grafico spazio-tempo, ottieni esattamente una parabola. La funzione quadratica descrive questo tipo di curva simmetrica con un punto di massimo o minimo.

La parabola è ovunque nella natura e nell'ingegneria. I cavi dei ponti sospesi (come il Golden Gate Bridge) seguono una forma parabolica. I fari delle auto e i telescopi a riflessione usano parabole perché hanno la proprietà di concentrare i raggi paralleli in un unico punto (il fuoco). In economia, la funzione di profitto spesso ha forma parabolica: cresce all'inizio, raggiunge un massimo, poi decresce per costi crescenti.

Capire la funzione quadratica significa capire come trovare massimi e minimi, trovare le radici di un'equazione di secondo grado e riconoscere le simmetrie di una curva.

## Prerequisiti

- Funzione lineare: $f(x) = mx + q$
- Formula quadratica: $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
- Quadrato di binomio: $(a+b)^2 = a^2 + 2ab + b^2$
- Piano cartesiano e lettura di grafici

## Teoria passo-passo

### Definizione

La **funzione quadratica** ha la forma generale:

$$f(x) = ax^2 + bx + c, \quad a \neq 0$$

dove $a$, $b$, $c \in \mathbb{R}$. Il grafico è una **parabola** con asse di simmetria verticale.

Il parametro $a$ è il più importante:
- $a > 0$: parabola **aperta verso l'alto** ("concava verso l'alto"). Ha un **minimo**.
- $a < 0$: parabola **aperta verso il basso** ("concava verso il basso"). Ha un **massimo**.
- $\lvert a \rvert$ grande: parabola stretta e ripida.
- $\lvert a \rvert$ piccolo: parabola larga e piatta.

### Forma canonica e vertice

Completando il quadrato si ottiene la **forma canonica** (o forma vertice):

$$f(x) = a\!\left(x - h\right)^2 + k$$

dove il **vertice** della parabola è $V = (h, k)$ con:

$$h = -\frac{b}{2a}, \qquad k = f(h) = c - \frac{b^2}{4a}$$

Il vertice è il punto di minimo (se $a > 0$) o di massimo (se $a < 0$) assoluto della funzione.

L'**asse di simmetria** è la retta verticale $x = h = -\dfrac{b}{2a}$.

### Discriminante e radici

Il **discriminante** è:

$$\Delta = b^2 - 4ac$$

Le **radici** (zeri) di $f(x) = ax^2 + bx + c = 0$ si trovano con:

$$x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}$$

Le relazioni tra $\Delta$ e il grafico:

| Discriminante | Interpretazione geometrica | Numero di radici reali |
| --- | --- | --- |
| $\Delta > 0$ | La parabola interseca l'asse $x$ in due punti | 2 radici distinte: $x_1 \neq x_2$ |
| $\Delta = 0$ | La parabola è tangente all'asse $x$ nel vertice | 1 radice doppia: $x_1 = x_2 = -b/(2a)$ |
| $\Delta < 0$ | La parabola non interseca l'asse $x$ | 0 radici reali |

### Relazioni tra radici e coefficienti (formule di Viète)

Se $x_1$ e $x_2$ sono le radici di $ax^2 + bx + c = 0$, allora:

$$x_1 + x_2 = -\frac{b}{a}, \qquad x_1 \cdot x_2 = \frac{c}{a}$$

Questo permette di controllare rapidamente le radici senza calcolarle tutte.

### Intersezioni con gli assi

- **Con l'asse $y$:** sempre nel punto $(0, c)$, perché $f(0) = c$.
- **Con l'asse $x$:** si risolvono le equazioni $f(x) = 0$; esistono (reali) solo se $\Delta \geq 0$.

## Derivazioni commentate

### Come si ricava la forma canonica (completamento del quadrato)

Parto da $f(x) = ax^2 + bx + c$.

**Passo 1 — Raccolgo $a$ dai primi due termini:**
$$f(x) = a\!\left(x^2 + \frac{b}{a}x\right) + c$$

**Passo 2 — Dentro la parentesi, aggiungo e sottraggo il quadrato di metà coefficiente di $x$:**

Il coefficiente di $x$ è $b/a$, la metà è $b/(2a)$, il suo quadrato è $b^2/(4a^2)$.
$$f(x) = a\!\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} - \frac{b^2}{4a^2}\right) + c$$

**Passo 3 — Riconosco il quadrato perfetto:**
$$f(x) = a\!\left[\!\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}\right] + c$$

**Passo 4 — Distribuisco $a$:**
$$f(x) = a\!\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c$$

**Risultato:** $h = -\dfrac{b}{2a}$ e $k = c - \dfrac{b^2}{4a}$.

## Esempi graduati

**Esempio 1 — Leggere un'equazione quadratica**

$f(x) = 2x^2 - 8x + 6$.

$a = 2 > 0$: parabola aperta verso l'alto, ha un minimo.
Vertice: $h = -\dfrac{-8}{2 \cdot 2} = 2$, $k = f(2) = 8 - 16 + 6 = -2$. Vertice: $(2, -2)$.
Intercetta $y$: $(0, 6)$.
Discriminante: $\Delta = 64 - 48 = 16 > 0$ → due radici.
Radici: $x = \dfrac{8 \pm 4}{4}$, quindi $x_1 = 1$ e $x_2 = 3$.

---

**Esempio 2 — Forma canonica**

Scrivere $f(x) = 3x^2 - 6x + 7$ in forma canonica.

$$f(x) = 3(x^2 - 2x) + 7 = 3[(x-1)^2 - 1] + 7 = 3(x-1)^2 + 4$$

Vertice: $V = (1, 4)$. Minimo valore della funzione: $4$ (raggiunto in $x = 1$).

---

**Esempio 3 — Nessuna radice reale**

$f(x) = x^2 + x + 1$. $\Delta = 1 - 4 = -3 < 0$: la parabola non tocca l'asse $x$. Poiché $a = 1 > 0$, la parabola è sempre sopra l'asse $x$, quindi $f(x) > 0$ per ogni $x \in \mathbb{R}$.

---

**Esempio 4 — Radice doppia**

$f(x) = x^2 - 6x + 9 = (x-3)^2$. $\Delta = 36 - 36 = 0$. Radice doppia $x = 3$. Vertice in $(3, 0)$: la parabola è tangente all'asse $x$ nel suo vertice.

---

**Esempio 5 — Ottimizzazione (massimo)**

Un contadino ha 100 m di recinzione e vuole delimitare un rettangolo contro un muro (il lato lungo il muro non viene recintato). Trovare le dimensioni che massimizzano l'area.

Siano $x$ la larghezza e $y$ la lunghezza (parallela al muro). Vincolo: $2x + y = 100 \implies y = 100 - 2x$.

$$A(x) = x \cdot y = x(100 - 2x) = -2x^2 + 100x$$

$a = -2 < 0$: massimo. $h = -\dfrac{100}{2(-2)} = 25$. Area massima: $A(25) = 25 \cdot 50 = 1250$ m².

---

**Esempio 6 — Determinare $a$, $b$, $c$ dal grafico**

Una parabola passa per $(-1, 0)$, $(3, 0)$ e $(0, -6)$.

Le radici sono $x_1 = -1$ e $x_2 = 3$, quindi: $f(x) = a(x+1)(x-3)$.

Con $f(0) = -6$: $a(1)(-3) = -6 \implies a = 2$.

$f(x) = 2(x+1)(x-3) = 2x^2 - 4x - 6$.

---

**Esempio 7 — Disequazione quadratica**

Risolvere $x^2 - 2x - 3 > 0$.

Radici: $(x-3)(x+1) = 0 \implies x = 3$ o $x = -1$.

$a = 1 > 0$: la parabola è sotto l'asse $x$ tra le radici, sopra fuori. L'inequazione è soddisfatta per $x < -1$ o $x > 3$.

$$S = (-\infty, -1) \cup (3, +\infty)$$

## Grafico

```plot
{
  "title": "Parabola f(x) = x² − 4x + 3: vertice, radici e simmetria",
  "fn": "x*x - 4*x + 3",
  "domain": [-1, 5],
  "yDomain": [-2, 6],
  "label1": "f(x) = x² − 4x + 3"
}
```

## Elemento interattivo

```slider
{
  "title": "Effetto del coefficiente a sulla forma della parabola f(x) = a·x²",
  "fn": "a * x * x",
  "domain": [-3, 3],
  "yDomain": [-5, 8],
  "pname": "a",
  "pmin": -2,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.25,
  "plabel": "Coefficiente a",
  "label1": "f(x) = a·x²"
}
```

## Errori comuni

**Errore 1 — Formula del vertice con il segno sbagliato.**
Il vertice è in $h = -\dfrac{b}{2a}$: il segno meno è fondamentale. Per $f(x) = x^2 - 6x + 5$, $h = -\dfrac{-6}{2} = 3$, non $h = \dfrac{-6}{2} = -3$.

**Errore 2 — Confondere $\Delta$ con $\sqrt{\Delta}$.**
Le radici usano $\sqrt{\Delta}$, non $\Delta$. Se $\Delta = 16$, le radici usano $\pm 4$, non $\pm 16$.

**Errore 3 — Dimenticare che $a \neq 0$.**
Se $a = 0$, la funzione non è quadratica ma lineare. La formula del vertice e tutte le proprietà della parabola richiedono $a \neq 0$.

**Errore 4 — Sbagliare la relazione tra segno di $a$ e forma della parabola.**
$a > 0$ = parabola verso l'alto = minimo. $a < 0$ = parabola verso il basso = massimo. L'errore è invertire: molti studenti pensano che "concava verso l'alto" voglia dire "il vertice è in alto", ma è il contrario.

**Errore 5 — Saltare il controllo del discriminante prima di calcolare le radici.**
Se $\Delta < 0$, non ci sono radici reali e la formula quadratica dà una radice quadrata di numero negativo. Calcolare il discriminante prima evita confusione.

**Errore 6 — Applicare erroneamente le formule di Viète.**
Le formule $x_1 + x_2 = -b/a$ e $x_1 x_2 = c/a$ valgono solo se il coefficiente di $x^2$ è $a$ (non 1). Per $2x^2 + 3x - 5 = 0$, la somma è $-3/2$, non $-3$.

**Errore 7 — Non verificare le soluzioni di un'equazione quadratica.**
Dopo aver trovato le radici, è sempre bene sostituirle nell'equazione originale come verifica, specialmente in problemi applicativi dove alcune soluzioni potrebbero non avere senso fisico (es. distanze negative).

## Applicazioni reali

**Fisica — Moto parabolico.** Un proiettile lanciato con velocità iniziale $v_0$ a un angolo $\theta$ ha altezza $h(t) = v_0 \sin\theta \cdot t - \frac{1}{2}g t^2$: una funzione quadratica in $t$. Il vertice dà l'altezza massima. Il tempo di volo si trova ponendo $h(t) = 0$.

**Economia — Ottimizzazione del profitto.** Se il ricavo è $R(q) = pq$ (lineare) e il costo è $C(q) = cq^2 + dq + F$ (quadratico), il profitto $\pi(q) = R(q) - C(q)$ è una parabola verso il basso. Il vertice dà la quantità che massimizza il profitto.

**Ottica — Specchi parabolici.** Uno specchio parabolico $y = \dfrac{x^2}{4f}$ riflette tutti i raggi paralleli all'asse nel fuoco $F = (0, f)$. Questa proprietà è usata nei telescopi, nelle parabole satellitari e nei forni solari. La posizione del fuoco si calcola direttamente dalla forma della parabola.

## Riepilogo tabellare

| Concetto | Formula |
| --- | --- |
| Forma generale | $f(x) = ax^2 + bx + c$, $a \neq 0$ |
| Forma canonica | $f(x) = a(x-h)^2 + k$ |
| Coordinata $x$ del vertice | $h = -b/(2a)$ |
| Coordinata $y$ del vertice | $k = c - b^2/(4a)$ |
| Discriminante | $\Delta = b^2 - 4ac$ |
| Radici (se $\Delta \geq 0$) | $x_{1,2} = (-b \pm \sqrt{\Delta})/(2a)$ |
| Somma delle radici | $x_1 + x_2 = -b/a$ |
| Prodotto delle radici | $x_1 \cdot x_2 = c/a$ |
| Asse di simmetria | $x = -b/(2a)$ |

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Vertice e forma canonica</summary>

Scrivere $f(x) = 2x^2 - 8x + 5$ in forma canonica e trovare il vertice.

**Soluzione:**

$$f(x) = 2(x^2 - 4x) + 5 = 2[(x-2)^2 - 4] + 5 = 2(x-2)^2 - 3$$

Vertice: $V = (2, -3)$. Minimo valore: $-3$ in $x = 2$.

</details>

<details>
<summary>Esercizio 2 — Analisi completa della parabola</summary>

Analizzare $f(x) = -x^2 + 4x + 5$: trovare vertice, intersezioni, determinare massimo.

**Soluzione:**

$a = -1 < 0$: parabola verso il basso, ha un massimo.

Vertice: $h = -\dfrac{4}{-2} = 2$, $k = f(2) = -4+8+5 = 9$. Vertice: $V = (2, 9)$, massimo = 9.

Intercetta $y$: $(0, 5)$.

$\Delta = 16 + 20 = 36 > 0$. Radici: $x = \dfrac{-4 \pm 6}{-2}$, quindi $x_1 = -1$ e $x_2 = 5$.

</details>

<details>
<summary>Esercizio 3 — Discriminante e numero di soluzioni</summary>

Determinare per quali valori di $k$ l'equazione $x^2 - 4x + k = 0$ ha: a) due soluzioni reali distinte, b) una sola soluzione, c) nessuna soluzione reale.

**Soluzione:**

$\Delta = 16 - 4k$.

a) $\Delta > 0 \implies 16 - 4k > 0 \implies k < 4$

b) $\Delta = 0 \implies k = 4$

c) $\Delta < 0 \implies k > 4$

</details>

<details>
<summary>Esercizio 4 — Trovare la parabola</summary>

Trovare la funzione quadratica con vertice $V = (1, -3)$ che passa per $(3, 1)$.

**Soluzione:**

Dalla forma canonica: $f(x) = a(x - 1)^2 - 3$.

Con $f(3) = 1$: $a(3-1)^2 - 3 = 1 \implies 4a = 4 \implies a = 1$.

$$f(x) = (x-1)^2 - 3 = x^2 - 2x - 2$$

</details>

<details>
<summary>Esercizio 5 — Disequazione quadratica</summary>

Risolvere $-x^2 + 5x - 4 \leq 0$.

**Soluzione:**

Radici di $-x^2 + 5x - 4 = 0$: $\Delta = 25 - 16 = 9$. $x_{1,2} = \dfrac{-5 \pm 3}{-2}$, quindi $x_1 = 1$ e $x_2 = 4$.

$a = -1 < 0$: la parabola è sopra l'asse $x$ tra le radici e sotto fuori.

La disequazione $\leq 0$ è soddisfatta fuori dall'intervallo: $x \leq 1$ oppure $x \geq 4$.

$$S = (-\infty, 1] \cup [4, +\infty)$$

</details>

<details>
<summary>Esercizio 6 — Problema di massimo area</summary>

Un rettangolo ha perimetro di 40 cm. Trovare le dimensioni che massimizzano l'area.

**Soluzione:**

Siano $x$ e $y$ i lati. $2x + 2y = 40 \implies y = 20 - x$.

$A(x) = x(20 - x) = -x^2 + 20x$.

$a = -1 < 0$: massimo. $h = -\dfrac{20}{-2} = 10$. Area massima: $A(10) = 100$ cm².

Il rettangolo di massima area con perimetro fissato è un **quadrato**: lato $10$ cm.

</details>

<details>
<summary>Esercizio 7 — Relazione tra radici</summary>

Le radici di $2x^2 - 5x + k = 0$ soddisfano $x_1 - x_2 = 3$. Trovare $k$.

**Soluzione:**

Dalle formule di Viète: $x_1 + x_2 = 5/2$ e $x_1 x_2 = k/2$.

$(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1 x_2 = \dfrac{25}{4} - 2k = 9$

$2k = \dfrac{25}{4} - 9 = \dfrac{25 - 36}{4} = -\dfrac{11}{4} \implies k = -\dfrac{11}{8}$

</details>
