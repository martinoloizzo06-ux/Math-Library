---
id: base-05-frazioni-algebriche
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Frazioni algebriche
title_en: Algebraic fractions
level: green
order: 5
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 3 — Frazioni razionali"
---

## 1. Intuizione e motivazione

Le frazioni numeriche come $\frac{3}{4}$ le conosci bene. Una frazione algebrica è la stessa cosa, ma al posto dei numeri ci sono polinomi: $\frac{x+1}{x^2-1}$, $\frac{3x}{x-2}$.

Perché studiarle? Perché la realtà è piena di rapporti. La velocità media è $\frac{\text{spazio}}{\text{tempo}}$, la concentrazione di una soluzione è $\frac{\text{soluto}}{\text{soluzione}}$, il rendimento di un'investimento è $\frac{\text{guadagno}}{\text{capitale investito}}$. Quando queste grandezze dipendono da variabili, ottieni frazioni algebriche.

In analisi matematica, le frazioni algebriche chiamate **funzioni razionali** ($\frac{p(x)}{q(x)}$) sono tra le più studiate: descrivono fenomeni di saturazione, moti smorzati, circuiti elettrici. Saper semplificare e operare con frazioni algebriche è un prerequisito fondamentale per il calcolo.

---

## 2. Prerequisiti

- Saper fattorizzare polinomi (prodotti notevoli, raccoglimento, trinomio)
- Conoscere le operazioni con le frazioni numeriche ($\frac{a}{b} \cdot \frac{c}{d}$, ecc.)
- Sapere cosa è il MCD tra polinomi
- Condizioni di esistenza: denominatore $\neq 0$

---

## 3. Teoria passo-passo

### Definizione e dominio

Una **frazione algebrica** è un'espressione della forma:
$$\frac{A(x)}{B(x)}$$
dove $A$ e $B$ sono polinomi e $B \not\equiv 0$ (il polinomio $B$ non è identicamente nullo).

La frazione è **definita** (ha senso) solo per i valori di $x$ che rendono $B(x) \neq 0$. L'insieme di questi valori si chiama **dominio** (o campo di esistenza):

$$\text{Dom} = \{x \in \mathbb{R} \mid B(x) \neq 0\}$$

**Esempio:** $\frac{x+1}{x^2-4}$ è definita per $x^2 - 4 \neq 0$, cioè $x \neq \pm 2$.
$$\text{Dom} = \mathbb{R} \setminus \{-2, 2\}$$

### Riduzione ai minimi termini (semplificazione)

Due frazioni algebriche sono **equivalenti** se hanno lo stesso valore (sullo stesso dominio). Per semplificare:
1. Fattorizzare completamente numeratore e denominatore
2. Cancellare i fattori comuni (diversi da zero)

$$\frac{x^2 - 1}{x^2 + 2x + 1} = \frac{(x-1)(x+1)}{(x+1)^2} = \frac{x-1}{x+1}, \quad x \neq -1$$

**Attenzione:** si cancellano solo **fattori** (che si moltiplicano), non **addendi** (che si sommano). Scrivere $\frac{x+3}{x+5} = \frac{3}{5}$ è **sbagliato**.

### Operazioni con le frazioni algebriche

**Moltiplicazione:**
$$\frac{A}{B} \cdot \frac{C}{D} = \frac{A \cdot C}{B \cdot D}$$

**Divisione:**
$$\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C} = \frac{A \cdot D}{B \cdot C}$$

**Addizione e sottrazione** (con lo stesso denominatore):
$$\frac{A}{B} \pm \frac{C}{B} = \frac{A \pm C}{B}$$

**Addizione e sottrazione** (con denominatori diversi): si riduce allo stesso denominatore (mcm dei denominatori).

### Minimo Comune Multiplo (mcm) tra polinomi

Il **mcm** di due polinomi si trova:
1. Fattorizzare entrambi i polinomi
2. Prendere tutti i fattori, con il massimo esponente con cui compaiono

**Esempio:** mcm tra $(x-1)(x+2)^2$ e $(x-1)^2(x+3)$ è $(x-1)^2(x+2)^2(x+3)$.

---

## 4. Derivazione commentata: addizione di frazioni algebriche

Calcoliamo $\frac{2}{x-1} + \frac{3}{x+2}$.

**Passo 1 — Trovare il mcm dei denominatori:**
I denominatori sono $(x-1)$ e $(x+2)$: non hanno fattori comuni, quindi mcm $= (x-1)(x+2)$.

**Passo 2 — Riscrivere ogni frazione con il denominatore comune:**
$$\frac{2}{x-1} = \frac{2(x+2)}{(x-1)(x+2)} \qquad \frac{3}{x+2} = \frac{3(x-1)}{(x-1)(x+2)}$$

*Perché? Moltiplico numeratore e denominatore della prima per $(x+2)$ — non cambio il valore, è come moltiplicare per 1.*

**Passo 3 — Sommare i numeratori:**
$$\frac{2(x+2) + 3(x-1)}{(x-1)(x+2)} = \frac{2x+4+3x-3}{(x-1)(x+2)} = \frac{5x+1}{(x-1)(x+2)}$$

**Passo 4 — Verificare se si può semplificare:**
Il numeratore $5x+1$ e il denominatore $(x-1)(x+2)$ non hanno fattori comuni (le radici di $5x+1 = 0$ sono $x = -\frac{1}{5}$, che non è radice del denominatore). La frazione è già ridotta.

---

## 5. Esempi graduati

**Esempio 1 — Determinare il dominio**

$\frac{3x-1}{x^2-9}$

Denominatore: $x^2 - 9 = (x-3)(x+3) = 0 \implies x = \pm 3$.

Dom $= \mathbb{R} \setminus \{-3, 3\}$.

---

**Esempio 2 — Semplificazione base**

$\frac{4x^2}{2x^3}$

$$\frac{4x^2}{2x^3} = \frac{4}{2} \cdot \frac{x^2}{x^3} = 2 \cdot x^{-1} = \frac{2}{x}, \quad x \neq 0$$

---

**Esempio 3 — Semplificazione con fattorizzazione**

$\frac{x^2 - 4}{x^2 + 4x + 4}$

Numeratore: $x^2 - 4 = (x-2)(x+2)$

Denominatore: $x^2 + 4x + 4 = (x+2)^2$

$$\frac{(x-2)(x+2)}{(x+2)^2} = \frac{x-2}{x+2}, \quad x \neq -2$$

---

**Esempio 4 — Moltiplicazione**

$\frac{x^2-1}{x+3} \cdot \frac{x^2+6x+9}{x-1}$

Fattorizzo prima di moltiplicare:
$$= \frac{(x-1)(x+1)}{(x+3)} \cdot \frac{(x+3)^2}{(x-1)} = \frac{(x-1)(x+1)(x+3)^2}{(x+3)(x-1)} = (x+1)(x+3)$$

(con $x \neq 1$ e $x \neq -3$)

---

**Esempio 5 — Addizione con denominatori diversi**

$\frac{x}{x-2} + \frac{1}{x+1}$

mcm $= (x-2)(x+1)$.

$$= \frac{x(x+1)}{(x-2)(x+1)} + \frac{x-2}{(x-2)(x+1)} = \frac{x^2+x+x-2}{(x-2)(x+1)} = \frac{x^2+2x-2}{(x-2)(x+1)}$$

---

**Esempio 6 — Sottrazione con fattorizzazione del denominatore**

$\frac{3}{x^2-1} - \frac{1}{x-1}$

$x^2 - 1 = (x-1)(x+1)$, quindi mcm $= (x-1)(x+1)$.

$$= \frac{3}{(x-1)(x+1)} - \frac{x+1}{(x-1)(x+1)} = \frac{3 - (x+1)}{(x-1)(x+1)} = \frac{2-x}{(x-1)(x+1)}$$

---

**Esempio 7 — Espressione mista**

$\frac{\dfrac{1}{x} + 1}{\dfrac{1}{x} - 1}$

Moltiplico numeratore e denominatore per $x$:

$$= \frac{x \cdot \left(\dfrac{1}{x} + 1\right)}{x \cdot \left(\dfrac{1}{x} - 1\right)} = \frac{1 + x}{1 - x}, \quad x \neq 0, x \neq 1$$

---

## 6. Grafico — Funzione razionale con asintoto

```plot
{
  "title": "Funzione razionale: f(x) = 1/(x-1)",
  "fn": "1/(x - 1)",
  "domain": [-4, 6],
  "yDomain": [-6, 6],
  "label1": "f(x) = 1/(x-1)"
}
```

Il grafico mostra l'**asintoto verticale** in $x = 1$ (dove il denominatore si annulla) e l'asintoto orizzontale in $y = 0$ (per $x \to \pm\infty$).

---

## 7. Elemento interattivo — Asintoto verticale

```slider
{
  "title": "Frazioni algebriche: asintoto verticale",
  "fn": "1/(x - a)",
  "domain": [-6, 6],
  "yDomain": [-8, 8],
  "pname": "a",
  "pmin": -3,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.5,
  "plabel": "Posizione asintoto a",
  "label1": "f(x) = 1/(x - a)"
}
```

Lo slider sposta l'asintoto verticale. Osserva: la funzione si comporta come $\pm\infty$ vicino ad $x = a$, dove il denominatore si annulla.

---

## 8. Errori comuni

**Errore 1 — Cancellare addendi invece di fattori**

Sbagliato: $\frac{x + 3}{x + 5} = \frac{3}{5}$ (si è "cancellata" la $x$).
Corretto: non si può semplificare perché $x$ è un addendo, non un fattore. La $x$ e le costanti si sommano.

---

**Errore 2 — Dimenticare le condizioni di esistenza**

Sbagliato: "$\frac{x^2-1}{x-1} = x+1$, fine."
Corretto: La semplificazione richiede $x \neq 1$. Scrivere $\frac{x^2-1}{x-1} = x+1$ senza specificare $x \neq 1$ è formalmente impreciso (la funzione originale non è definita in $x = 1$).

---

**Errore 3 — Sommare prima di fattorizzare**

Sbagliato (operazione non necessaria): $\frac{x}{x^2-4} + \frac{1}{x^2-4} = \frac{x+1}{x^2-4}$ e poi moltiplicare complicandosi.
Corretto: sommare frazioni con stesso denominatore è già la cosa giusta. Il punto è **fattorizzare il denominatore prima** di cercare il mcm.

---

**Errore 4 — Errore nel mcm quando ci sono potenze**

Sbagliato: il mcm di $(x-1)^2$ e $(x-1)^3$ è $(x-1)^2$.
Corretto: il mcm prende il fattore con il **massimo** esponente: $(x-1)^3$.

---

**Errore 5 — Distribuire la divisione in modo errato**

Sbagliato: $\frac{a}{b+c} = \frac{a}{b} + \frac{a}{c}$.
Corretto: $\frac{a}{b+c}$ non si può spezzare. Solo il numeratore si distribuisce: $\frac{a+b}{c} = \frac{a}{c} + \frac{b}{c}$.

---

**Errore 6 — Non invertire nella divisione**

Sbagliato: $\frac{A}{B} \div \frac{C}{D} = \frac{A \cdot C}{B \cdot D}$.
Corretto: $\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C} = \frac{A \cdot D}{B \cdot C}$. Dividere per una frazione = moltiplicare per il suo reciproco.

---

## 9. Applicazioni reali

**Fisica — Resistenze in parallelo.** Quando due resistenze $R_1$ e $R_2$ sono collegate in parallelo in un circuito elettrico, la resistenza equivalente soddisfa $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}$. Per trovare $R_{eq}$ si usa esattamente la somma di frazioni algebriche: $R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$. Saper manipolare queste espressioni è essenziale in elettrotecnica.

**Economia — Produttività media e marginale.** In economia, la produttività media di un'impresa è $\frac{Q(L)}{L}$ dove $Q$ è la produzione e $L$ il numero di lavoratori. Se $Q(L) = 10L - 0{,}5L^2$, la produttività media è $\frac{10L - 0{,}5L^2}{L} = 10 - 0{,}5L$ (semplificando). Questa semplificazione algebrica ha significato economico: rivela come la produttività decresce con l'aumentare della forza lavoro (rendimenti decrescenti).

**Calcolo — Limiti di funzioni razionali.** In analisi matematica, il calcolo dei limiti spesso richiede di semplificare frazioni algebriche. Per esempio, $\lim_{x \to 2} \frac{x^2-4}{x-2}$ sembra dare $\frac{0}{0}$, ma fattorizzando: $\frac{(x-2)(x+2)}{x-2} = x+2 \to 4$. La semplificazione algebrica è il primo passo fondamentale.

---

## 10. Riepilogo tabellare

| Operazione | Formula | Esempio |
| --- | --- | --- |
| Dominio | $B(x) \neq 0$ | $\frac{1}{x-3}$: $x \neq 3$ |
| Semplificazione | Cancella fattori comuni | $\frac{(x+1)(x-2)}{(x+1)} = x-2$ |
| Moltiplicazione | $\frac{A}{B} \cdot \frac{C}{D} = \frac{AC}{BD}$ | $\frac{x}{2} \cdot \frac{3}{x^2} = \frac{3}{2x}$ |
| Divisione | $\frac{A}{B} \div \frac{C}{D} = \frac{AD}{BC}$ | $\frac{x}{2} \div \frac{x}{4} = \frac{4x}{2x} = 2$ |
| Somma (denom. uguale) | $\frac{A}{B} + \frac{C}{B} = \frac{A+C}{B}$ | $\frac{x}{x+1} + \frac{1}{x+1} = \frac{x+1}{x+1} = 1$ |
| Somma (denom. diverso) | Ridurre al mcm, poi sommare | $\frac{1}{x} + \frac{1}{y} = \frac{x+y}{xy}$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Dominio e semplificazione</summary>

**Testo:** Trova il dominio e semplifica: $\dfrac{x^2 - 9}{x^2 + x - 6}$.

**Soluzione:**

Fattorizzo:
- Numeratore: $x^2 - 9 = (x-3)(x+3)$
- Denominatore: $x^2 + x - 6 = (x+3)(x-2)$

Dominio: $(x+3)(x-2) \neq 0 \implies x \neq -3$ e $x \neq 2$.

Semplificazione:
$$\frac{(x-3)(x+3)}{(x+3)(x-2)} = \frac{x-3}{x-2}, \quad x \neq -3, x \neq 2$$

</details>

<details>
<summary>Esercizio 2 — Moltiplicazione</summary>

**Testo:** Calcola $\dfrac{x^2-1}{x+2} \cdot \dfrac{x^2+4x+4}{x^2-x}$.

**Soluzione:**

Fattorizzo:
- $x^2 - 1 = (x-1)(x+1)$
- $x+2 = (x+2)$
- $x^2 + 4x + 4 = (x+2)^2$
- $x^2 - x = x(x-1)$

$$\frac{(x-1)(x+1)}{(x+2)} \cdot \frac{(x+2)^2}{x(x-1)} = \frac{(x-1)(x+1)(x+2)^2}{(x+2) \cdot x(x-1)} = \frac{(x+1)(x+2)}{x}$$

(con $x \neq 0, 1, -2$)

</details>

<details>
<summary>Esercizio 3 — Addizione</summary>

**Testo:** Calcola $\dfrac{2}{x^2 - 1} + \dfrac{1}{x + 1}$.

**Soluzione:**

$x^2 - 1 = (x-1)(x+1)$; mcm $= (x-1)(x+1)$.

$$\frac{2}{(x-1)(x+1)} + \frac{x-1}{(x-1)(x+1)} = \frac{2 + x - 1}{(x-1)(x+1)} = \frac{x+1}{(x-1)(x+1)} = \frac{1}{x-1}$$

(con $x \neq \pm 1$)

</details>

<details>
<summary>Esercizio 4 — Sottrazione con tre termini</summary>

**Testo:** Calcola $\dfrac{x}{x-1} - \dfrac{1}{x} - \dfrac{1}{x(x-1)}$.

**Soluzione:**

mcm $= x(x-1)$.

$$= \frac{x \cdot x}{x(x-1)} - \frac{x-1}{x(x-1)} - \frac{1}{x(x-1)} = \frac{x^2 - (x-1) - 1}{x(x-1)} = \frac{x^2 - x + 1 - 1}{x(x-1)} = \frac{x^2 - x}{x(x-1)}$$

$$= \frac{x(x-1)}{x(x-1)} = 1 \quad (x \neq 0, x \neq 1)$$

</details>

<details>
<summary>Esercizio 5 — Espressione fratta composta</summary>

**Testo:** Semplifica $\dfrac{1 - \frac{1}{x}}{1 + \frac{1}{x}}$.

**Soluzione:**

Moltiplico numeratore e denominatore per $x$:

$$= \frac{x\left(1 - \frac{1}{x}\right)}{x\left(1 + \frac{1}{x}\right)} = \frac{x - 1}{x + 1} \quad (x \neq 0, x \neq -1)$$

</details>

<details>
<summary>Esercizio 6 — Applicazione circuiti</summary>

**Testo:** Due resistenze in parallelo: $R_1 = \frac{1}{x}$ e $R_2 = \frac{1}{x+1}$. Trova $R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$.

**Soluzione:**

$$R_1 \cdot R_2 = \frac{1}{x} \cdot \frac{1}{x+1} = \frac{1}{x(x+1)}$$

$$R_1 + R_2 = \frac{1}{x} + \frac{1}{x+1} = \frac{x+1+x}{x(x+1)} = \frac{2x+1}{x(x+1)}$$

$$R_{eq} = \frac{\frac{1}{x(x+1)}}{\frac{2x+1}{x(x+1)}} = \frac{1}{x(x+1)} \cdot \frac{x(x+1)}{2x+1} = \frac{1}{2x+1}$$

</details>
