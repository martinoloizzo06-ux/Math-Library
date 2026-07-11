---
id: base-06-equazioni-primo-grado
subject: base
topic_it: Algebra e numeri
topic_en: Algebra and numbers
title_it: Equazioni di primo grado
title_en: Linear equations
level: green
order: 6
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 4 — Equazioni"
stato: da-rielaborare
---

## 1. Intuizione e motivazione

Hai in tasca un portafoglio con un certo numero di euro. Compri un libro da €15 e ti rimangono €27. Quanti euro avevi all'inizio?

Chiunque risponde istintivamente "42". Ma il percorso mentale è: "chiamiamo $x$ i soldi iniziali, allora $x - 15 = 27$, e quindi $x = 42$". Hai appena risolto un'equazione di primo grado.

Le equazioni di primo grado sono lo strumento più antico e più usato della matematica applicata. I Babilonesi le risolvevano già 4000 anni fa su tavolette d'argilla. Oggi compaiono ovunque: calcolare un prezzo scontato, bilanciare un budget, determinare il tempo di percorrenza, trovare il punto di pareggio di un'azienda. Ogni problema in cui cerchi un valore incognito che soddisfa una condizione lineare si riduce a un'equazione di primo grado.

---

## 2. Prerequisiti

- Le quattro operazioni su $\mathbb{R}$
- Conoscere i polinomi e le frazioni algebriche (per equazioni con denominatori)
- Concetto di variabile e di uguaglianza

---

## 3. Teoria passo-passo

### Definizione

Un'**equazione** è un'uguaglianza del tipo $A(x) = B(x)$ che contiene un'incognita $x$. Un valore $x_0$ è una **soluzione** (o **radice**) dell'equazione se la rende vera.

L'**insieme soluzione** $S$ è l'insieme di tutte le soluzioni.

**Classificazione delle equazioni:**
- **Determinata:** $S$ ha esattamente un elemento (una sola soluzione)
- **Indeterminata:** $S = \mathbb{R}$ (vera per ogni valore di $x$), anche detta **identità**
- **Impossibile:** $S = \emptyset$ (nessuna soluzione)

### Principi di equivalenza

Due equazioni sono **equivalenti** se hanno lo stesso insieme soluzione. Le trasformazioni che conservano le soluzioni sono:

**Principio additivo:** aggiungere o sottrarre la stessa espressione a entrambi i membri.
$$A = B \iff A + C = B + C$$

**Principio moltiplicativo:** moltiplicare o dividere entrambi i membri per la stessa espressione **non nulla**.
$$A = B \iff A \cdot k = B \cdot k, \quad k \neq 0$$

### Forma normale e soluzione

Un'equazione di primo grado in $x$ si riduce sempre alla forma:
$$ax = b$$

**Caso 1:** Se $a \neq 0$, l'unica soluzione è $x = \dfrac{b}{a}$ (equazione determinata).

**Caso 2:** Se $a = 0$ e $b = 0$, l'equazione diventa $0 = 0$: vera per ogni $x$ (equazione indeterminata, $S = \mathbb{R}$).

**Caso 3:** Se $a = 0$ e $b \neq 0$, l'equazione diventa $0 = b \neq 0$: mai vera (equazione impossibile, $S = \emptyset$).

### Equazioni con denominatori

Se compaiono frazioni con $x$ al denominatore:
1. Trovare le condizioni di esistenza (denominatori $\neq 0$)
2. Moltiplicare entrambi i membri per il mcm dei denominatori
3. Risolvere l'equazione intera risultante
4. Verificare che le soluzioni trovate rispettino le condizioni di esistenza

### Equazioni con parametri

Un'equazione con parametro $k$ (un numero non specificato) può cambiare tipo al variare di $k$. Bisogna analizzare i diversi casi.

---

## 4. Derivazione commentata: strategia di risoluzione

Risolviamo $\dfrac{x-2}{3} - \dfrac{2x+1}{6} = \dfrac{x}{2} - 1$ passo per passo.

**Passo 1 — Condizioni di esistenza:** i denominatori sono 3, 6, 2 (numeri, non dipendono da $x$). Non ci sono condizioni da aggiungere. Dom $= \mathbb{R}$.

**Passo 2 — Trovare il mcm dei denominatori:** mcm$(3, 6, 2) = 6$.

**Passo 3 — Moltiplicare tutto per 6:**
$$6 \cdot \frac{x-2}{3} - 6 \cdot \frac{2x+1}{6} = 6 \cdot \frac{x}{2} - 6 \cdot 1$$

$$2(x-2) - (2x+1) = 3x - 6$$

*Ogni denominatore si semplifica con 6. Il membro destro va moltiplicato tutto per 6.*

**Passo 4 — Espandere e raccogliere:**
$$2x - 4 - 2x - 1 = 3x - 6$$
$$-5 = 3x - 6$$

**Passo 5 — Isolare $x$:**
$$3x = -5 + 6 = 1$$
$$x = \frac{1}{3}$$

**Verifica:** sostituisco $x = \frac{1}{3}$ nell'equazione originale. Entrambi i membri danno $-\frac{1}{6}$. ✓

---

## 5. Esempi graduati

**Esempio 1 — Equazione semplicissima**

$x + 5 = 12$

Sottraggo 5 da entrambi i membri: $x = 12 - 5 = 7$.

---

**Esempio 2 — Portare termini con $x$ a sinistra**

$3x - 4 = x + 8$

Sottraggo $x$: $2x - 4 = 8$. Sommo 4: $2x = 12$. Divido per 2: $x = 6$.

---

**Esempio 3 — Equazione con parentesi**

$2(x - 3) - (x + 1) = 5$

Espando: $2x - 6 - x - 1 = 5 \implies x - 7 = 5 \implies x = 12$.

---

**Esempio 4 — Equazione con frazioni numeriche**

$\frac{x}{4} + \frac{x}{6} = 5$

mcm$(4,6) = 12$. Moltiplico per 12: $3x + 2x = 60 \implies 5x = 60 \implies x = 12$.

---

**Esempio 5 — Equazione indeterminata**

$3(x + 2) = 3x + 6$

Espando: $3x + 6 = 3x + 6 \implies 0 = 0$. Vero per ogni $x$. $S = \mathbb{R}$ (identità).

---

**Esempio 6 — Equazione impossibile**

$5x + 3 = 5x - 2$

Sottraggo $5x$: $3 = -2$. Falso. $S = \emptyset$ (equazione impossibile).

---

**Esempio 7 — Con denominatori algebrici**

$\frac{x}{x-2} = \frac{3}{x-2} + 1$

C.E.: $x \neq 2$. mcm $= (x-2)$. Moltiplico per $(x-2)$:

$$x = 3 + (x-2) = 3 + x - 2 = x + 1$$
$$0 = 1$$

Impossibile! $S = \emptyset$.

---

**Esempio 8 — Con parametro**

$kx + 2 = k + 3x$

Raccolgo i termini con $x$: $(k-3)x = k - 2$.

- Se $k \neq 3$: $x = \dfrac{k-2}{k-3}$ (unica soluzione)
- Se $k = 3$: $(0)x = 1 \implies 0 = 1$, impossibile. $S = \emptyset$

---

## 6. Grafico — Intersezione di due rette

```plot
{
  "title": "Soluzione come intersezione: 2x - 3 vs x + 1",
  "fn": "2*x - 3",
  "fn2": "x + 1",
  "domain": [-2, 6],
  "yDomain": [-5, 8],
  "label1": "y = 2x - 3 (lato sinistro)",
  "label2": "y = x + 1 (lato destro)"
}
```

La soluzione dell'equazione $2x - 3 = x + 1$ è il valore di $x$ in cui le due rette si intersecano. Qui si intersecano in $x = 4$.

---

## 7. Elemento interattivo — La retta $ax + b = 0$

```slider
{
  "title": "Radice di ax + b = 0: dove la retta taglia l'asse x",
  "fn": "a * x + 2",
  "domain": [-6, 6],
  "yDomain": [-8, 8],
  "pname": "a",
  "pmin": -3,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Coefficiente a",
  "label1": "f(x) = ax + 2"
}
```

La soluzione di $ax + 2 = 0$ è $x = -2/a$ (quando $a \neq 0$): è il punto in cui la retta taglia l'asse $x$. Quando $a = 0$, la retta è orizzontale e non taglia mai l'asse $x$ (se $b \neq 0$).

---

## 8. Errori comuni

**Errore 1 — Non distribuire il segno meno nelle parentesi**

Sbagliato: $3 - (x + 2) = 3 - x + 2 = 5 - x$.
Corretto: $3 - (x + 2) = 3 - x - 2 = 1 - x$. Il meno davanti alla parentesi cambia il segno di **tutti** i termini dentro.

---

**Errore 2 — Dividere per zero**

Sbagliato: dall'equazione $kx = k$ "dividere per $k$" ottenendo sempre $x = 1$.
Corretto: bisogna prima verificare che $k \neq 0$. Se $k = 0$, l'equazione diventa $0 = 0$ (indeterminata).

---

**Errore 3 — Non verificare le soluzioni con denominatori algebrici**

Sbagliato: trovare $x = 2$ da $\frac{1}{x-2} = 0$ e accettarla come soluzione.
Corretto: $x = 2$ rende il denominatore nullo, non è nel dominio. $S = \emptyset$.

---

**Errore 4 — Passare al denominatore cambiando segno**

Sbagliato: da $\frac{x}{3} = 2$, scrivere $x = \frac{3}{2}$ (invertendo numeratore e denominatore).
Corretto: $\frac{x}{3} = 2 \implies x = 2 \cdot 3 = 6$. Si moltiplica entrambi i membri per il denominatore.

---

**Errore 5 — Confondere "indeterminata" con "impossibile"**

$0 = 0$ è **indeterminata** ($S = \mathbb{R}$, infinite soluzioni). $0 = 5$ è **impossibile** ($S = \emptyset$). Sono casi opposti.

---

**Errore 6 — Sommare solo un termine invece di tutto il membro**

Sbagliato: da $x + 3 = 7 + 2x$, "passo $3$ dall'altra parte" ottenendo $x = 7 - 3 + 2x = 4 + 2x$.
Corretto: si devono spostare entrambe le categorie: i termini con $x$ a sinistra, i termini numerici a destra. $x - 2x = 7 - 3 \implies -x = 4 \implies x = -4$.

---

## 9. Applicazioni reali

**Economia — Punto di pareggio.** Un'impresa ha costi fissi di €500 e costi variabili di €8 per unità prodotta. Il ricavo è di €12 per unità. Il profitto è $\pi(q) = 12q - (500 + 8q) = 4q - 500$. Il punto di pareggio (break-even) è quando $\pi = 0$: $4q - 500 = 0 \implies q = 125$ unità. Sotto 125 unità, l'impresa perde; sopra, guadagna.

**Fisica — Moto uniforme.** Due treni partono in direzioni opposte da città distanti 300 km. Il primo viaggia a 80 km/h, il secondo a 70 km/h. Quando si incontrano? Chiamiamo $t$ il tempo: $80t + 70t = 300 \implies 150t = 300 \implies t = 2$ ore. Il modello è esattamente un'equazione di primo grado.

**Statistica — Media.** Se la media di cinque voti è 7,2 e i quattro voti noti sono 6, 8, 7, 7, qual è il quinto voto $x$? Equazione: $\frac{6 + 8 + 7 + 7 + x}{5} = 7{,}2 \implies 28 + x = 36 \implies x = 8$.

---

## 10. Riepilogo tabellare

| Tipo | Forma | Soluzione |
| --- | --- | --- |
| Determinata | $ax = b$, $a \neq 0$ | $x = b/a$ (una sola) |
| Indeterminata | $0 \cdot x = 0$ | $S = \mathbb{R}$ (infinite) |
| Impossibile | $0 \cdot x = b \neq 0$ | $S = \emptyset$ (nessuna) |

| Tecnica | Quando usarla |
| --- | --- |
| Principio additivo | Spostare termini da un membro all'altro |
| Principio moltiplicativo | Eliminare denominatori o coefficienti |
| Moltiplicare per il mcm | Equazioni con frazioni |
| Analisi per casi | Equazioni con parametri |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Risoluzione base</summary>

**Testo:** Risolvi: $4x - 7 = 2x + 9$.

**Soluzione:**

$4x - 2x = 9 + 7 \implies 2x = 16 \implies x = 8$

Verifica: $4(8) - 7 = 25 = 2(8) + 9 = 25$ ✓

</details>

<details>
<summary>Esercizio 2 — Con parentesi</summary>

**Testo:** Risolvi: $3(2x - 1) - 2(x + 4) = 5$.

**Soluzione:**

$6x - 3 - 2x - 8 = 5$
$4x - 11 = 5$
$4x = 16$
$x = 4$

</details>

<details>
<summary>Esercizio 3 — Con frazioni</summary>

**Testo:** Risolvi: $\dfrac{x+1}{2} - \dfrac{x-1}{3} = 2$.

**Soluzione:**

mcm$(2,3) = 6$. Moltiplico per 6:

$3(x+1) - 2(x-1) = 12$
$3x + 3 - 2x + 2 = 12$
$x + 5 = 12$
$x = 7$

</details>

<details>
<summary>Esercizio 4 — Classificare l'equazione</summary>

**Testo:** Determina se è determinata, indeterminata o impossibile: (a) $2(x+3) = 2x + 6$; (b) $x + 1 = x + 2$.

**Soluzione:**

(a) $2x + 6 = 2x + 6 \implies 0 = 0$. **Indeterminata**, $S = \mathbb{R}$.

(b) $x + 1 = x + 2 \implies 1 = 2$. **Impossibile**, $S = \emptyset$.

</details>

<details>
<summary>Esercizio 5 — Con denominatore algebrico</summary>

**Testo:** Risolvi: $\dfrac{2x}{x+1} - 1 = \dfrac{x-1}{x+1}$.

**Soluzione:**

C.E.: $x \neq -1$. Moltiplico per $(x+1)$:

$2x - (x+1) = x - 1$
$2x - x - 1 = x - 1$
$x - 1 = x - 1$
$0 = 0$

Equazione indeterminata (purché rispetti la C.E. $x \neq -1$). Quindi $S = \mathbb{R} \setminus \{-1\}$.

</details>

<details>
<summary>Esercizio 6 — Problema applicato</summary>

**Testo:** Un rettangolo ha il lato lungo il triplo del lato corto. Il perimetro è 56 cm. Trova le dimensioni.

**Soluzione:**

Lato corto $= x$, lato lungo $= 3x$. Perimetro: $2(x + 3x) = 56 \implies 8x = 56 \implies x = 7$.

Dimensioni: $7 \times 21$ cm. Verifica: $2(7 + 21) = 56$ ✓

</details>

<details>
<summary>Esercizio 7 — Con parametro</summary>

**Testo:** Discuti al variare di $m$: $(m-2)x = m^2 - 4$.

**Soluzione:**

Fattorizzo il membro destro: $m^2 - 4 = (m-2)(m+2)$.

$(m-2)x = (m-2)(m+2)$

- Se $m \neq 2$: divido per $(m-2)$: $x = m+2$ (unica soluzione)
- Se $m = 2$: l'equazione diventa $0 = 0$, **indeterminata**. $S = \mathbb{R}$

</details>
