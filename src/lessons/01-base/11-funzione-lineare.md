---
id: base-11-funzione-lineare
subject: base
topic_it: Funzioni elementari
topic_en: Elementary functions
title_it: Funzione lineare e retta
title_en: Linear function and line
level: green
order: 11
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 5 — Rette"
stato: da-rielaborare
---

## Intuizione e motivazione

Immagina di guidare in autostrada a velocità costante: ogni ora percorri la stessa distanza. Se vai a 120 km/h, dopo 1 ora sei a 120 km, dopo 2 ore a 240 km, dopo 3 ore a 360 km. La relazione tra il tempo $t$ e la distanza $d$ è esattamente una funzione lineare: $d = 120 \cdot t$.

La funzione lineare è la più semplice e la più ubiqua in matematica. Descrive ogni fenomeno in cui la variazione dell'output è proporzionale alla variazione dell'input: costi fissi più variabili, conversioni di unità di misura (gradi Celsius in Fahrenheit), relazioni prezzo-quantità, ammortamento lineare di un macchinario. In fisica appare nella legge di Hooke (forza elastica), in economia nelle funzioni di costo e ricavo, in chimica nella legge di Beer-Lambert.

Capire la funzione lineare significa capire il concetto di "tasso di variazione", che è la base del calcolo differenziale.

## Prerequisiti

- Piano cartesiano: assi $x$ e $y$, coordinate di un punto $(x_0, y_0)$
- Operazioni con frazioni e proporzioni
- Concetto di funzione, dominio e codominio
- Equazioni di primo grado in una e due variabili

## Teoria passo-passo

### Definizione

La **funzione lineare** (più precisamente: funzione affine) ha la forma:

$$f(x) = mx + q$$

dove:
- $m \in \mathbb{R}$ è la **pendenza** (o **coefficiente angolare**): misura di quanto cresce $f(x)$ per ogni incremento unitario di $x$.
- $q \in \mathbb{R}$ è l'**intercetta sull'asse $y$** (o termine noto): il valore di $f$ quando $x = 0$.

Il grafico di $f(x) = mx + q$ è una **retta** nel piano cartesiano. Per questo si parla anche di "equazione della retta in forma esplicita".

> Nota terminologica: in senso stretto, "lineare" significa $f(x) = mx$ (senza termine costante). La forma $f(x) = mx + q$ con $q \neq 0$ è tecnicamente "affine". In contesto scolastico i due termini vengono spesso usati come sinonimi.

### Significato geometrico della pendenza

$$m = \frac{\Delta y}{\Delta x} = \frac{f(x_2) - f(x_1)}{x_2 - x_1}$$

per qualsiasi coppia di punti distinti $(x_1, y_1)$ e $(x_2, y_2)$ sul grafico.

Interpretazione:
- $m > 0$: la retta sale da sinistra a destra.
- $m < 0$: la retta scende da sinistra a destra.
- $m = 0$: la retta è orizzontale, $f(x) = q$ (funzione costante).
- $\lvert m \rvert$ grande: la retta è ripida.
- $\lvert m \rvert$ piccolo: la retta è quasi piatta.

La pendenza $m$ rappresenta anche l'angolo $\alpha$ che la retta forma con l'asse $x$: $m = \tan\alpha$.

### Forme dell'equazione della retta

**Forma esplicita:** $y = mx + q$ (pendenza e intercetta subito leggibili).

**Forma punto-pendenza:** la retta con pendenza $m$ passante per $(x_0, y_0)$:
$$y - y_0 = m(x - x_0)$$

**Forma per due punti:** la retta passante per $(x_1, y_1)$ e $(x_2, y_2)$ con $x_1 \neq x_2$:
$$\frac{y - y_1}{x - x_1} = \frac{y_2 - y_1}{x_2 - x_1}$$

**Forma implicita (cartesiana):** $ax + by + c = 0$ con $a, b$ non entrambi zero. Se $b \neq 0$ si può ricavare la forma esplicita: $y = -\dfrac{a}{b}x - \dfrac{c}{b}$.

**Retta verticale:** $x = k$. Non è il grafico di una funzione (non supera il test della retta verticale), ma è una retta nel piano.

**Retta orizzontale:** $y = q$, con $m = 0$.

### Rette parallele e perpendicolari

Due rette $y = m_1 x + q_1$ e $y = m_2 x + q_2$ sono:
- **Parallele** se $m_1 = m_2$ (stessa inclinazione, intercette diverse).
- **Coincidenti** se $m_1 = m_2$ e $q_1 = q_2$.
- **Perpendicolari** se $m_1 \cdot m_2 = -1$, ovvero:
$$m_2 = -\frac{1}{m_1}$$

Una retta verticale ($x = k$) è perpendicolare a qualsiasi retta orizzontale ($y = q$).

### Distanza punto-retta

La distanza dal punto $P = (x_0, y_0)$ alla retta $ax + by + c = 0$ è:

$$d = \frac{\lvert ax_0 + by_0 + c \rvert}{\sqrt{a^2 + b^2}}$$

## Derivazioni commentate

### Da dove viene la formula punto-pendenza?

Voglio trovare l'equazione della retta con pendenza $m$ che passa per il punto fisso $(x_0, y_0)$.

**Passo 1:** prendo un punto generico $(x, y)$ sulla retta.

**Passo 2:** per definizione di pendenza, il rapporto $\dfrac{y - y_0}{x - x_0}$ deve essere uguale a $m$ (per qualsiasi punto sulla retta):
$$\frac{y - y_0}{x - x_0} = m$$

**Passo 3:** moltiplico entrambi i membri per $(x - x_0)$:
$$y - y_0 = m(x - x_0)$$

**Passo 4:** sviluppo e ottengo la forma esplicita:
$$y = mx - mx_0 + y_0 = mx + (y_0 - mx_0)$$

Il termine $q = y_0 - mx_0$ è l'intercetta della retta.

Questa derivazione mostra che la forma punto-pendenza è direttamente la definizione di pendenza riscritta come equazione.

## Esempi graduati

**Esempio 1 — Leggere pendenza e intercetta**

$f(x) = -2x + 5$: pendenza $m = -2$ (retta che scende), intercetta $q = 5$ (il grafico taglia l'asse $y$ in $(0, 5)$).

Intersezione con l'asse $x$: $-2x + 5 = 0 \implies x = 2{,}5$. Punto: $(2{,}5, 0)$.

---

**Esempio 2 — Retta per due punti**

Trovare la retta passante per $A = (2, -1)$ e $B = (-4, 5)$.

$$m = \frac{5-(-1)}{-4-2} = \frac{6}{-6} = -1$$

Equazione punto-pendenza con $A$: $y - (-1) = -1(x - 2) \implies y + 1 = -x + 2 \implies y = -x + 1$.

Verifica con $B$: $-(-4) + 1 = 5$ ✓

---

**Esempio 3 — Rette parallele e perpendicolari**

Data $y = 3x - 2$, trovare le rette parallela e perpendicolare passanti per $(1, 4)$.

**Parallela** (stessa pendenza $m = 3$):
$y - 4 = 3(x - 1) \implies y = 3x + 1$

**Perpendicolare** (pendenza $m = -\frac{1}{3}$):
$y - 4 = -\frac{1}{3}(x - 1) \implies y = -\frac{1}{3}x + \frac{13}{3}$

---

**Esempio 4 — Distanza punto-retta**

Distanza di $P = (3, 1)$ dalla retta $4x - 3y + 2 = 0$.

$$d = \frac{\lvert 4(3) - 3(1) + 2 \rvert}{\sqrt{16+9}} = \frac{\lvert 12 - 3 + 2 \rvert}{5} = \frac{11}{5} = 2{,}2$$

---

**Esempio 5 — Applicazione economica**

Un artigiano ha costi fissi di 200 € al mese e costi variabili di 15 € per ogni oggetto prodotto. La funzione di costo è $C(q) = 15q + 200$.

Pendenza $m = 15$: ogni oggetto aggiuntivo costa 15 €. Intercetta $q = 200$: anche senza produrre nulla, il costo mensile è 200 €.

Per quante unità il costo supera 500 €? $15q + 200 > 500 \implies q > 20$.

---

**Esempio 6 — Forma implicita a forma esplicita**

$3x - 2y + 6 = 0$. Ricavo $y$:

$-2y = -3x - 6 \implies y = \frac{3}{2}x + 3$

Pendenza: $\frac{3}{2}$, intercetta: $3$.

---

**Esempio 7 — Intersezione di due rette**

Trovare il punto di intersezione tra $y = 2x + 1$ e $y = -x + 7$.

Eguaglio: $2x + 1 = -x + 7 \implies 3x = 6 \implies x = 2$.

$y = 2(2) + 1 = 5$. Punto di intersezione: $(2, 5)$.

## Grafico

```plot
{
  "title": "Rette con pendenze diverse: crescente, decrescente, orizzontale",
  "fn": "2 * x - 1",
  "fn2": "-1.5 * x + 3",
  "domain": [-3, 4],
  "yDomain": [-5, 8],
  "label1": "f(x) = 2x − 1",
  "label2": "g(x) = −1.5x + 3"
}
```

## Elemento interattivo

```slider
{
  "title": "Effetto della pendenza m su f(x) = mx + 1",
  "fn": "a * x + 1",
  "domain": [-4, 4],
  "yDomain": [-6, 6],
  "pname": "a",
  "pmin": -3,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.25,
  "plabel": "Pendenza m",
  "label1": "f(x) = m·x + 1"
}
```

## Errori comuni

**Errore 1 — Invertire numeratore e denominatore nella pendenza.**
La pendenza è $m = \dfrac{\Delta y}{\Delta x}$ (variazione di $y$ divisa variazione di $x$), non il contrario. Scrivere $m = \dfrac{x_2 - x_1}{y_2 - y_1}$ è un errore frequente.

**Errore 2 — Usare la pendenza sbagliata per rette perpendicolari.**
La pendenza perpendicolare è il reciproco cambiato di segno: $m_\perp = -\dfrac{1}{m}$. Non basta cambiare il segno (quel darebbe la retta opposta, non perpendicolare), né prendere solo il reciproco.

**Errore 3 — Confondere rette parallele e coincidenti.**
Due rette con la stessa pendenza sono parallele solo se hanno intercette diverse. Se $m_1 = m_2$ e $q_1 = q_2$, le rette sono coincidenti (la stessa retta).

**Errore 4 — Credere che la retta verticale sia una funzione.**
$x = 3$ non è il grafico di una funzione: per $x = 3$ esisterebbero infiniti valori di $y$. La retta verticale non supera il test della retta verticale.

**Errore 5 — Sbagliare il segno dell'intercetta nella forma implicita.**
Dalla forma $ax + by + c = 0$, l'intercetta è $-c/b$, non $c/b$. Attenzione al segno: $2x - 3y + 6 = 0 \implies y = \frac{2}{3}x + 2$ (non $y = \frac{2}{3}x - 2$).

**Errore 6 — Applicare la formula della distanza senza portare la retta in forma implicita.**
La formula $d = \dfrac{\lvert ax_0 + by_0 + c\rvert}{\sqrt{a^2+b^2}}$ richiede la forma $ax + by + c = 0$. Se la retta è in forma esplicita $y = mx + q$, bisogna prima riscriverla come $mx - y + q = 0$.

**Errore 7 — Dimenticare che due rette non parallele si intersecano sempre.**
Due rette nel piano con pendenze diverse si intersecano in esattamente un punto. Non è necessario "verificare" se si intersecano: se $m_1 \neq m_2$, il punto esiste sempre.

## Applicazioni reali

**Fisica — Moto rettilineo uniforme.** La posizione di un oggetto in moto a velocità costante $v$ è $s(t) = vt + s_0$, dove $s_0$ è la posizione iniziale. La pendenza è la velocità: più è ripida la retta, più veloce è il moto. Il grafico spazio-tempo è una retta.

**Economia — Funzione di costo lineare.** L'impresa con costi fissi $F$ e costo variabile unitario $c$ ha costo totale $C(q) = cq + F$. La pendenza $c$ è il costo marginale (costo di un'unità aggiuntiva). L'intersezione del costo con la funzione di ricavo $R(q) = pq$ dà il punto di pareggio (break-even): $pq = cq + F \implies q^* = \frac{F}{p-c}$.

**Conversioni di unità.** La conversione da Celsius a Fahrenheit è $F = \frac{9}{5}C + 32$: funzione lineare con pendenza $9/5$ e intercetta $32$. La conversione da km a miglia è $m = 0{,}621 \cdot k$: funzione lineare con intercetta zero.

## Riepilogo tabellare

| Concetto | Formula | Note |
| --- | --- | --- |
| Forma esplicita | $y = mx + q$ | $m$ = pendenza, $q$ = intercetta $y$ |
| Pendenza | $m = \dfrac{y_2 - y_1}{x_2 - x_1}$ | Rapporto incrementi |
| Forma punto-pendenza | $y - y_0 = m(x - x_0)$ | Passa per $(x_0, y_0)$ con pendenza $m$ |
| Intercetta $y$ | $q = f(0)$ | Porre $x = 0$ |
| Intercetta $x$ | $x = -q/m$ | Porre $f(x) = 0$ |
| Rette parallele | $m_1 = m_2$, $q_1 \neq q_2$ | Stessa inclinazione |
| Rette perpendicolari | $m_1 \cdot m_2 = -1$ | $m_2 = -1/m_1$ |
| Distanza punto-retta | $d = \dfrac{\lvert ax_0 + by_0 + c\rvert}{\sqrt{a^2+b^2}}$ | Retta in forma $ax+by+c=0$ |

## Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Trovare l'equazione della retta</summary>

Trovare la retta passante per $A = (1, 3)$ e $B = (4, -3)$.

**Soluzione:**

$$m = \frac{-3 - 3}{4 - 1} = \frac{-6}{3} = -2$$

Forma punto-pendenza con $A = (1, 3)$:
$$y - 3 = -2(x - 1) \implies y = -2x + 5$$

Verifica con $B$: $-2(4) + 5 = -3$ ✓

</details>

<details>
<summary>Esercizio 2 — Rette parallele e perpendicolari</summary>

Trovare la retta parallela a $y = -4x + 1$ e la retta perpendicolare, entrambe passanti per $(-1, 2)$.

**Soluzione:**

Pendenza della retta data: $m = -4$.

**Parallela** ($m = -4$): $y - 2 = -4(x + 1) \implies y = -4x - 2$

**Perpendicolare** ($m = 1/4$): $y - 2 = \frac{1}{4}(x + 1) \implies y = \frac{1}{4}x + \frac{9}{4}$

</details>

<details>
<summary>Esercizio 3 — Distanza punto-retta</summary>

Calcolare la distanza del punto $P = (2, -1)$ dalla retta $3x + 4y - 5 = 0$.

**Soluzione:**

$$d = \frac{\lvert 3(2) + 4(-1) - 5 \rvert}{\sqrt{9 + 16}} = \frac{\lvert 6 - 4 - 5 \rvert}{5} = \frac{\lvert -3 \rvert}{5} = \frac{3}{5} = 0{,}6$$

</details>

<details>
<summary>Esercizio 4 — Intersezione di rette</summary>

Trovare il punto di intersezione di $y = \frac{1}{2}x + 3$ e $y = -2x + 8$.

**Soluzione:**

$\frac{1}{2}x + 3 = -2x + 8 \implies \frac{5}{2}x = 5 \implies x = 2$

$y = \frac{1}{2}(2) + 3 = 4$. Punto: $(2, 4)$.

Verifica: $-2(2) + 8 = 4$ ✓

</details>

<details>
<summary>Esercizio 5 — Applicazione economica</summary>

Un'impresa ha costi fissi di 500 € e costo variabile di 8 € per unità prodotta. Il prezzo di vendita è 20 € per unità. Trovare il punto di pareggio.

**Soluzione:**

Costo: $C(q) = 8q + 500$. Ricavo: $R(q) = 20q$.

Pareggio: $20q = 8q + 500 \implies 12q = 500 \implies q = 41{,}67 \approx 42$ unità.

Dall'unità 42 in poi l'impresa è in profitto.

</details>

<details>
<summary>Esercizio 6 — Interpretare la pendenza</summary>

Un tassista applica un fisso di 3 € alla partenza e 1,80 € per chilometro. Scrivere la funzione costo e interpretare pendenza e intercetta.

**Soluzione:**

$C(d) = 1{,}80 \cdot d + 3$

Pendenza $m = 1{,}80$: ogni chilometro in più costa 1,80 €.
Intercetta $q = 3$: il costo minimo (anche a distanza zero) è 3 €.

Per una corsa di 10 km: $C(10) = 18 + 3 = 21$ €.

</details>
