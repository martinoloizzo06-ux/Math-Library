---
id: base-07-equazioni-secondo-grado
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Equazioni di secondo grado
title_en: Quadratic equations
level: green
order: 7
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 4 — Equazioni quadratiche"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Un calciatore tira un rigore. Vuoi sapere se il pallone può superare la barriera alta 1 metro posta a 9 metri dalla porta. La traiettoria del pallone è una parabola: $h(x) = -0{,}05x^2 + 0{,}9x$, dove $x$ è la distanza orizzontale e $h$ è l'altezza. Quando $x = 9$: $h(9) = -0{,}05 \cdot 81 + 8{,}1 = -4{,}05 + 8{,}1 = 4{,}05$ m. Il pallone supera la barriera con quasi tre metri di spazio.

Per trovare dove il pallone tocca terra (h = 0), devi risolvere $-0{,}05x^2 + 0{,}9x = 0$: un'equazione di secondo grado. Le equazioni quadratiche appaiono in ogni campo dove c'è un fenomeno con ottimo (massimo o minimo): la traiettoria di un proiettile, il profitto di un'impresa, la forma di un cavo sospeso. Imparare a risolverle è fondamentale.

---

## 2. Prerequisiti

- Saper risolvere equazioni di primo grado
- Conoscere i prodotti notevoli (quadrato del binomio, differenza di quadrati)
- Sapere cosa sono le radici quadrate e le condizioni di esistenza
- Conoscere i numeri irrazionali ($\sqrt{2}$, ecc.)

---

## 3. Teoria passo-passo

### Forma normale

Un'equazione di **secondo grado** in forma normale (o **forma standard**) è:

$$ax^2 + bx + c = 0, \quad a \neq 0$$

dove $a, b, c \in \mathbb{R}$ sono i coefficienti e $a \neq 0$ garantisce che sia davvero di secondo grado.

### Il discriminante

La quantità:
$$\Delta = b^2 - 4ac$$

si chiama **discriminante** e determina completamente quante soluzioni reali esiste l'equazione:

| Condizione | Numero di soluzioni | Tipo |
| --- | --- | --- |
| $\Delta > 0$ | 2 soluzioni reali distinte | $x_{1,2} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ |
| $\Delta = 0$ | 1 soluzione reale doppia | $x_0 = \dfrac{-b}{2a}$ |
| $\Delta < 0$ | 0 soluzioni reali | (soluzioni complesse in $\mathbb{C}$) |

### Formula quadratica (formula risolutiva generale)

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

Questa formula funziona **sempre**, qualunque siano $a$, $b$, $c$.

### Metodi alternativi di soluzione

**Metodo 1 — Scomposizione in fattori:** se si riesce a scrivere $ax^2 + bx + c = a(x - x_1)(x - x_2)$, le radici sono $x_1$ e $x_2$.

**Metodo 2 — Completamento del quadrato:** si riscrive il polinomio come $(x + k)^2 = m$ e si estrae la radice.

**Metodo 3 — Formula ridotta** (quando $b$ è pari, $b = 2b'$):
$$x = \frac{-b' \pm \sqrt{b'^2 - ac}}{a}, \quad \Delta' = b'^2 - ac$$

**Equazioni incomplete:**
- **$b = 0$:** $ax^2 + c = 0 \implies x^2 = -\frac{c}{a}$. Soluzioni reali sse $-\frac{c}{a} \geq 0$.
- **$c = 0$:** $ax^2 + bx = 0 \implies x(ax + b) = 0 \implies x = 0$ o $x = -\frac{b}{a}$.

### Relazioni di Viète

Se $x_1$ e $x_2$ sono le due radici di $ax^2 + bx + c = 0$:
$$x_1 + x_2 = -\frac{b}{a} \qquad x_1 \cdot x_2 = \frac{c}{a}$$

Queste relazioni permettono di verificare le soluzioni o di costruire un'equazione quadratica note le radici.

---

## 4. Derivazione commentata: completamento del quadrato

Deriviamo la formula quadratica partendo da $ax^2 + bx + c = 0$.

**Passo 1 — Dividere per $a$:**
$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0$$

*Possiamo dividere per $a$ perché $a \neq 0$.*

**Passo 2 — Portare la costante a destra:**
$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

**Passo 3 — Completare il quadrato:** aggiungiamo $\left(\frac{b}{2a}\right)^2$ a entrambi i membri.

$$x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^2 = -\frac{c}{a} + \frac{b^2}{4a^2}$$

*Perché questo termine? Perché $(x + \frac{b}{2a})^2 = x^2 + \frac{b}{a}x + \frac{b^2}{4a^2}$. È esattamente il quadrato del binomio.*

**Passo 4 — Riscrivere come quadrato:**
$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2} = \frac{\Delta}{4a^2}$$

**Passo 5 — Estrarre la radice quadrata:**
$$x + \frac{b}{2a} = \pm \frac{\sqrt{\Delta}}{2 \lvert a \rvert} = \pm \frac{\sqrt{\Delta}}{2a}$$

*Il $\pm$ nasce perché $\sqrt{k^2} = \lvert k \rvert$, e sia $+$ che $-$ sono possibili.*

**Passo 6 — Isolare $x$:**
$$x = -\frac{b}{2a} \pm \frac{\sqrt{\Delta}}{2a} = \frac{-b \pm \sqrt{\Delta}}{2a}$$

La formula quadratica è dimostrata.

---

## 5. Esempi graduati

**Esempio 1 — Equazione incompleta con $c = 0$**

$3x^2 - 12x = 0$

Raccolgo $x$: $x(3x - 12) = 0 \implies x = 0$ o $3x - 12 = 0 \implies x = 4$.

$S = \{0, 4\}$.

---

**Esempio 2 — Equazione incompleta con $b = 0$**

$x^2 - 9 = 0$

$x^2 = 9 \implies x = \pm 3$.

$S = \{-3, 3\}$. (Oppure: $x^2 - 9 = (x-3)(x+3) = 0$.)

---

**Esempio 3 — Formula quadratica con $\Delta > 0$**

$2x^2 - 5x + 2 = 0$

$\Delta = 25 - 16 = 9 > 0$.

$$x = \frac{5 \pm 3}{4}: \quad x_1 = \frac{8}{4} = 2, \quad x_2 = \frac{2}{4} = \frac{1}{2}$$

Verifica con Viète: $x_1 + x_2 = 2 + \frac{1}{2} = \frac{5}{2} = -\frac{b}{a} = \frac{5}{2}$ ✓; $x_1 \cdot x_2 = 2 \cdot \frac{1}{2} = 1 = \frac{c}{a} = \frac{2}{2}$ ✓.

---

**Esempio 4 — Soluzione doppia ($\Delta = 0$)**

$x^2 - 6x + 9 = 0$

$\Delta = 36 - 36 = 0$.

$x_0 = \frac{6}{2} = 3$. (Oppure: è $(x-3)^2 = 0$.)

$S = \{3\}$ (radice doppia).

---

**Esempio 5 — Nessuna soluzione reale ($\Delta < 0$)**

$x^2 + x + 1 = 0$

$\Delta = 1 - 4 = -3 < 0$.

$S = \emptyset$ in $\mathbb{R}$. (In $\mathbb{C}$: $x = \frac{-1 \pm i\sqrt{3}}{2}$.)

---

**Esempio 6 — Scomposizione in fattori**

$x^2 + 5x + 6 = 0$

Cerco due numeri con somma 5 e prodotto 6: sono 2 e 3.
$(x+2)(x+3) = 0 \implies x = -2$ o $x = -3$. $S = \{-2, -3\}$.

---

**Esempio 7 — Equazione di grado superiore riducibile**

$x^4 - 5x^2 + 4 = 0$

Pongo $t = x^2$: $t^2 - 5t + 4 = 0 \implies (t-1)(t-4) = 0 \implies t = 1$ o $t = 4$.

- $t = 1 \implies x^2 = 1 \implies x = \pm 1$
- $t = 4 \implies x^2 = 4 \implies x = \pm 2$

$S = \{-2, -1, 1, 2\}$.

---

**Esempio 8 — Costruire un'equazione dalle radici**

Trovare l'equazione quadratica con radici $x_1 = 3$ e $x_2 = -\frac{1}{2}$.

Con Viète: $x_1 + x_2 = \frac{5}{2}$, $x_1 \cdot x_2 = -\frac{3}{2}$.

$x^2 - \frac{5}{2}x - \frac{3}{2} = 0$, cioè (moltiplicando per 2): $2x^2 - 5x - 3 = 0$.

---

## 6. Grafico — La parabola e il discriminante

```plot
{
  "title": "Parabola: x² - 2x - 3 (delta > 0, due radici)",
  "fn": "x*x - 2*x - 3",
  "fn2": "0*x",
  "domain": [-3, 5],
  "yDomain": [-5, 8],
  "label1": "f(x) = x² - 2x - 3",
  "label2": "y = 0 (asse x)"
}
```

La parabola taglia l'asse $x$ in $x = -1$ e $x = 3$ (le due radici). Il vertice è in $x = \frac{2}{2} = 1$, $y = 1 - 2 - 3 = -4$.

---

## 7. Elemento interattivo — Discriminante e radici

```slider
{
  "title": "Effetto di c su x² + x + c (cambia il discriminante)",
  "fn": "x*x + x + c",
  "domain": [-4, 3],
  "yDomain": [-3, 6],
  "pname": "c",
  "pmin": -2,
  "pmax": 1,
  "pdefault": -1,
  "pstep": 0.1,
  "plabel": "Termine noto c",
  "label1": "f(x) = x² + x + c"
}
```

Osserva: per $c < \frac{1}{4}$ la parabola taglia l'asse $x$ due volte ($\Delta > 0$). Per $c = \frac{1}{4}$ la tocca in un punto ($\Delta = 0$). Per $c > \frac{1}{4}$ non taglia mai l'asse ($\Delta < 0$).

---

## 8. Errori comuni

**Errore 1 — Dimenticare la radice $x = 0$ nelle equazioni incomplete**

Sbagliato: da $x^2 - 3x = 0$, raccogliere $x$ e poi "dividere per $x$" ottenendo solo $x = 3$.
Corretto: $x(x-3) = 0 \implies x = 0$ o $x = 3$. Dividere per $x$ equivale a perdere la soluzione $x = 0$.

---

**Errore 2 — Calcolare $\Delta$ con il segno sbagliato**

Sbagliato: per $x^2 - 5x + 6 = 0$, scrivere $\Delta = 25 + 24 = 49$.
Corretto: $\Delta = b^2 - 4ac = 25 - 24 = 1$ (il termine $4ac$ si **sottrae**).

---

**Errore 3 — Prendere solo la radice positiva**

Sbagliato: da $x^2 = 16$, scrivere solo $x = 4$.
Corretto: $x^2 = 16 \implies x = \pm 4$ (ci sono sempre due valori, uno positivo e uno negativo).

---

**Errore 4 — Usare la formula con $a, b, c$ sbagliati**

Prima di applicare la formula, portare sempre l'equazione in forma $ax^2 + bx + c = 0$. Per $2x^2 = 3x - 1$, riscrivere prima come $2x^2 - 3x + 1 = 0$, poi $a=2$, $b=-3$, $c=1$.

---

**Errore 5 — Credere che $\Delta < 0$ significhi "errore"**

Sbagliato: "$\Delta = -7$ è impossibile, ho sbagliato i calcoli."
Corretto: $\Delta < 0$ è un risultato perfettamente valido: significa che l'equazione non ha soluzioni reali (ma ne ha due complesse coniugate).

---

**Errore 6 — Dimenticare che la formula dà due valori**

Sbagliato: scrivere $x = \frac{-b + \sqrt{\Delta}}{2a}$ e fermarsi lì, dimenticando il $-$.
Corretto: $x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}$. Il simbolo $\pm$ dà **due** soluzioni distinte.

---

## 9. Applicazioni reali

**Fisica — Moto parabolico.** Un oggetto lanciato verso l'alto con velocità iniziale $v_0 = 20$ m/s dall'altezza $h_0 = 0$ segue $h(t) = -\frac{1}{2} g t^2 + v_0 t = -4{,}9t^2 + 20t$. Quando tocca terra? $-4{,}9t^2 + 20t = 0 \implies t(20 - 4{,}9t) = 0 \implies t = 0$ (istante iniziale) o $t \approx 4{,}08$ s. L'altezza massima si raggiunge al vertice della parabola: $t^* = \frac{20}{9{,}8} \approx 2{,}04$ s.

**Economia — Massimizzazione del profitto.** Un'impresa con funzione di profitto $\pi(q) = -q^2 + 10q - 16$ vuole sapere per quali quantità ha profitto positivo: $-q^2 + 10q - 16 > 0 \implies q^2 - 10q + 16 < 0$. Le radici sono $q = 2$ e $q = 8$. Il profitto è positivo per $q \in (2, 8)$. Il massimo è al vertice: $q^* = 5$, $\pi(5) = -25 + 50 - 16 = 9$.

**Informatica — Algoritmi.** La complessità di molti algoritmi è $O(n^2)$: il tempo di esecuzione cresce come $n^2$ con la dimensione del problema. Determinare per quale $n$ un algoritmo $O(n^2)$ supera il tempo limite $T$ significa risolvere $an^2 = T$, cioè un'equazione di secondo grado.

---

## 10. Riepilogo tabellare

| Caso | Condizione | Soluzione |
| --- | --- | --- |
| Forma incompleta ($b = 0$) | $ax^2 + c = 0$ | $x = \pm\sqrt{-c/a}$ se $-c/a \geq 0$ |
| Forma incompleta ($c = 0$) | $ax^2 + bx = 0$ | $x = 0$ o $x = -b/a$ |
| $\Delta > 0$ | $b^2 - 4ac > 0$ | $x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}$ |
| $\Delta = 0$ | $b^2 - 4ac = 0$ | $x_0 = -\frac{b}{2a}$ (doppia) |
| $\Delta < 0$ | $b^2 - 4ac < 0$ | $S = \emptyset$ in $\mathbb{R}$ |

| Relazioni di Viète | Formula |
| --- | --- |
| Somma delle radici | $x_1 + x_2 = -b/a$ |
| Prodotto delle radici | $x_1 \cdot x_2 = c/a$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Forma incompleta</summary>

**Testo:** Risolvi: (a) $x^2 - 25 = 0$; (b) $3x^2 + 6x = 0$; (c) $x^2 + 4 = 0$.

**Soluzione:**

(a) $x^2 = 25 \implies x = \pm 5$. $S = \{-5, 5\}$

(b) $3x(x + 2) = 0 \implies x = 0$ o $x = -2$. $S = \{-2, 0\}$

(c) $x^2 = -4$: nessuna soluzione reale ($-4 < 0$). $S = \emptyset$

</details>

<details>
<summary>Esercizio 2 — Formula quadratica</summary>

**Testo:** Risolvi con la formula: $3x^2 - 7x + 2 = 0$.

**Soluzione:**

$\Delta = 49 - 24 = 25 > 0$.

$x_{1,2} = \frac{7 \pm 5}{6}: \quad x_1 = \frac{12}{6} = 2, \quad x_2 = \frac{2}{6} = \frac{1}{3}$

Viète: $2 + \frac{1}{3} = \frac{7}{3} = \frac{7}{3}$ ✓, $2 \cdot \frac{1}{3} = \frac{2}{3} = \frac{2}{3}$ ✓

</details>

<details>
<summary>Esercizio 3 — Discriminante nullo</summary>

**Testo:** Risolvi $4x^2 - 12x + 9 = 0$.

**Soluzione:**

$\Delta = 144 - 144 = 0$.

$x_0 = \frac{12}{8} = \frac{3}{2}$ (radice doppia).

Verifica: $4x^2 - 12x + 9 = (2x - 3)^2 = 0 \implies x = \frac{3}{2}$ ✓

</details>

<details>
<summary>Esercizio 4 — Costruire l'equazione dalle radici</summary>

**Testo:** Scrivi un'equazione quadratica con radici $x_1 = -1$ e $x_2 = 5$.

**Soluzione:**

Somma: $-1 + 5 = 4 = -b/a$. Prodotto: $(-1)(5) = -5 = c/a$.

Con $a = 1$: $b = -4$, $c = -5$.

Equazione: $x^2 - 4x - 5 = 0$.

Verifica: $(x+1)(x-5) = x^2 - 4x - 5$ ✓

</details>

<details>
<summary>Esercizio 5 — Discutere al variare del parametro</summary>

**Testo:** Discuti le soluzioni di $x^2 - 2kx + k = 0$ al variare di $k \in \mathbb{R}$.

**Soluzione:**

$\Delta = 4k^2 - 4k = 4k(k-1)$.

- $\Delta > 0$: $k(k-1) > 0 \implies k < 0$ o $k > 1$ → due radici reali distinte
- $\Delta = 0$: $k = 0$ o $k = 1$ → una radice doppia
- $\Delta < 0$: $0 < k < 1$ → nessuna radice reale

</details>

<details>
<summary>Esercizio 6 — Equazione biquadratica</summary>

**Testo:** Risolvi $x^4 - 10x^2 + 9 = 0$.

**Soluzione:**

Pongo $t = x^2$: $t^2 - 10t + 9 = 0$.

$\Delta = 100 - 36 = 64$. $t_{1,2} = \frac{10 \pm 8}{2}$: $t_1 = 9$, $t_2 = 1$.

- $t_1 = 9 \implies x^2 = 9 \implies x = \pm 3$
- $t_2 = 1 \implies x^2 = 1 \implies x = \pm 1$

$S = \{-3, -1, 1, 3\}$

</details>

<details>
<summary>Esercizio 7 — Applicazione fisica</summary>

**Testo:** Un proiettile segue la traiettoria $h(x) = -x^2 + 6x$ (in metri). A quale distanza $x$ tocca terra? Qual è l'altezza massima?

**Soluzione:**

Tocca terra quando $h(x) = 0$: $-x^2 + 6x = 0 \implies x(-x+6) = 0 \implies x = 0$ o $x = 6$ m.

Altezza massima al vertice: $x^* = \frac{6}{2} = 3$ m. $h(3) = -9 + 18 = 9$ m.

</details>
