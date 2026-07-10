---
id: base-22-geometria-analitica-base
subject: base
topic_it: Geometria analitica
topic_en: Analytic geometry
title_it: Piano cartesiano e distanza tra punti
title_en: Cartesian plane and distance between points
level: green
order: 22
source_book: "MIT OCW 18.01 (Precalcolo)"
source_chapter: "Sezione 8 — Geometria analitica"
---

## 1. Intuizione e motivazione

Immagina di dover dare indicazioni stradali a qualcuno che si trova in una città con una griglia perfetta di strade, come Manhattan a New York. Per localizzare qualsiasi incrocio bastano due numeri: quante strade verso est (o ovest) e quante strade verso nord (o sud) dal centro. Ecco, il **piano cartesiano** è esattamente questo: un sistema per assegnare due numeri — una coppia ordinata — a ogni punto dello spazio bidimensionale.

Questo strumento, inventato da René Descartes nel XVII secolo, ha rivoluzionato la matematica: ha permesso di tradurre problemi geometrici in problemi algebrici (e viceversa), aprendo la strada a tutta l'analisi matematica moderna. Quando un fisico descrive la traiettoria di un proiettile, quando un ingegnere progetta un ponte, quando un programmatore disegna un'interfaccia grafica, usa il piano cartesiano.

---

## 2. Prerequisiti

- Operazioni sui numeri reali: $+$, $-$, $\times$, $\div$
- Radicali: $\sqrt{a}$ e loro proprietà
- Teorema di Pitagora: $a^2 + b^2 = c^2$
- Concetto di valore assoluto $\lvert x \rvert$
- Nozione di coppia ordinata $(x, y)$

---

## 3. Teoria passo-passo

### Il sistema di riferimento cartesiano

Il **piano cartesiano** è il piano dotato di un sistema di riferimento ortogonale formato da due rette perpendicolari:

- **Asse delle ascisse** (asse $x$): la retta orizzontale
- **Asse delle ordinate** (asse $y$): la retta verticale
- **Origine** $O = (0, 0)$: il punto di intersezione

Ogni punto $P$ del piano è identificato da una coppia ordinata $(x, y)$:

- $x$ è l'**ascissa** di $P$: la distanza con segno dall'asse $y$ (positiva a destra, negativa a sinistra)
- $y$ è l'**ordinata** di $P$: la distanza con segno dall'asse $x$ (positiva in su, negativa in giù)

I quattro **quadranti** sono:

| Quadrante | Segno di $x$ | Segno di $y$ |
| --- | --- | --- |
| I (in alto a destra) | $+$ | $+$ |
| II (in alto a sinistra) | $-$ | $+$ |
| III (in basso a sinistra) | $-$ | $-$ |
| IV (in basso a destra) | $+$ | $-$ |

### Distanza tra due punti

Dati $P_1 = (x_1, y_1)$ e $P_2 = (x_2, y_2)$, la distanza $d(P_1, P_2)$ si calcola applicando il teorema di Pitagora al triangolo rettangolo con cateti $\lvert x_2 - x_1 \rvert$ e $\lvert y_2 - y_1 \rvert$:

$$d(P_1, P_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

**Interpretazione:** $(x_2 - x_1)^2$ misura il quadrato dello spostamento orizzontale, $(y_2 - y_1)^2$ quello verticale. La radice quadrata restituisce la lunghezza dell'ipotenusa, cioè la distanza "in linea d'aria".

### Punto medio di un segmento

Il **punto medio** $M$ del segmento $P_1 P_2$ ha coordinate pari alla media aritmetica delle coordinate degli estremi:

$$M = \left(\frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2}\right)$$

**Perché funziona:** il punto medio è equidistante dagli estremi. Nella direzione $x$, la posizione intermedia è $\frac{x_1 + x_2}{2}$; analogamente per $y$.

### Divisione interna di un segmento

Il punto $P$ che divide il segmento $P_1 P_2$ nel rapporto $t : (1-t)$ (con $0 < t < 1$) è:

$$P = \bigl(x_1 + t(x_2 - x_1),\; y_1 + t(y_2 - y_1)\bigr)$$

Per $t = 1/2$ si ottiene il punto medio. Per $t = 1/3$ il punto a un terzo da $P_1$.

### Baricentro di un triangolo

Dato il triangolo con vertici $A = (x_A, y_A)$, $B = (x_B, y_B)$, $C = (x_C, y_C)$, il **baricentro** $G$ (intersezione delle mediane) è:

$$G = \left(\frac{x_A + x_B + x_C}{3},\; \frac{y_A + y_B + y_C}{3}\right)$$

### Simmetrie nel piano

| Trasformazione | Effetto su $(x, y)$ |
| --- | --- |
| Simmetria rispetto all'asse $x$ | $(x, y) \mapsto (x, -y)$ |
| Simmetria rispetto all'asse $y$ | $(x, y) \mapsto (-x, y)$ |
| Simmetria rispetto all'origine | $(x, y) \mapsto (-x, -y)$ |
| Simmetria rispetto a $y = x$ | $(x, y) \mapsto (y, x)$ |

---

## 4. Derivazione commentata

### Dimostrazione della formula della distanza

Siano $P_1 = (x_1, y_1)$ e $P_2 = (x_2, y_2)$ due punti nel piano.

Costruiamo un triangolo rettangolo con:
- ipotenusa = segmento $P_1 P_2$
- cateto orizzontale = segmento da $P_1$ a $Q = (x_2, y_1)$, di lunghezza $\lvert x_2 - x_1 \rvert$
- cateto verticale = segmento da $Q$ a $P_2$, di lunghezza $\lvert y_2 - y_1 \rvert$

Per il teorema di Pitagora:

$$d^2 = \lvert x_2 - x_1 \rvert^2 + \lvert y_2 - y_1 \rvert^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$

Estraendo la radice quadrata (la distanza è positiva):

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \qquad \square$$

Nota: i quadrati eliminano il valore assoluto, quindi $(x_2 - x_1)^2 = (x_1 - x_2)^2$. La formula è **simmetrica**: $d(P_1, P_2) = d(P_2, P_1)$.

---

## 5. Esempi graduati

**Esempio 1 — Distanza base.**
Calcola $d\bigl((0,0),(3,4)\bigr)$.

$$d = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

La coppia $(3, 4, 5)$ è una terna pitagorica: il triangolo è rettangolo.

---

**Esempio 2 — Distanza con coordinate negative.**
Calcola $d\bigl((1, -2),(4, 2)\bigr)$.

$$d = \sqrt{(4-1)^2 + (2-(-2))^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

---

**Esempio 3 — Punto medio.**
Trova il punto medio di $A = (-2, 3)$ e $B = (4, -1)$.

$$M = \left(\frac{-2+4}{2},\; \frac{3+(-1)}{2}\right) = \left(1,\; 1\right)$$

---

**Esempio 4 — Trovare un estremo dato il punto medio.**
Il punto medio di $AB$ è $M = (3, -1)$ e $A = (1, 2)$. Trovare $B$.

Per la definizione di punto medio:
$$\frac{1 + x_B}{2} = 3 \implies x_B = 5$$
$$\frac{2 + y_B}{2} = -1 \implies y_B = -4$$

Quindi $B = (5, -4)$.

---

**Esempio 5 — Triangolo isoscele.**
Verifica che il triangolo $A=(0,0)$, $B=(4,3)$, $C=(0,6)$ sia isoscele.

$$AB = \sqrt{16+9} = 5$$
$$BC = \sqrt{16+9} = 5$$
$$CA = \sqrt{0+36} = 6$$

Poiché $AB = BC = 5$, il triangolo è isoscele rispetto al vertice $B$.

---

**Esempio 6 — Baricentro.**
Trova il baricentro del triangolo $A=(1,0)$, $B=(5,0)$, $C=(3,6)$.

$$G = \left(\frac{1+5+3}{3},\; \frac{0+0+6}{3}\right) = (3,\; 2)$$

---

**Esempio 7 — Divisione di segmento a un terzo.**
Trova il punto $P$ che divide $A=(0,0)$ e $B=(6,3)$ nel rapporto $1:2$ (cioè $t = 1/3$).

$$P = \left(0 + \frac{1}{3}(6-0),\; 0 + \frac{1}{3}(3-0)\right) = (2,\; 1)$$

Verifica: $AP = \sqrt{4+1} = \sqrt{5}$, $PB = \sqrt{16+4} = \sqrt{20} = 2\sqrt{5}$. Rapporto $1:2$ ✓.

---

## 6. Grafico

```plot
{
  "title": "Distanza tra due punti nel piano",
  "fn": "0.75*x",
  "fn2": "-1",
  "domain": [-1, 6],
  "yDomain": [-2, 6],
  "label1": "retta P₁P₂",
  "label2": "y = -1 (riferimento)"
}
```

Il grafico mostra la retta che congiunge $P_1 = (0, 0)$ e $P_2 = (4, 3)$: la pendenza $3/4$ corrisponde al rapporto tra il cateto verticale e quello orizzontale.

---

## 7. Elemento interattivo

```slider
{
  "title": "Punto medio al variare di t (divisione del segmento da (0,0) a (6,4))",
  "fn": "(4/6)*x",
  "domain": [-1, 7],
  "yDomain": [-1, 5],
  "pname": "t",
  "pmin": 0,
  "pmax": 1,
  "pdefault": 0.5,
  "pstep": 0.05,
  "plabel": "Parametro t",
  "label1": "Retta P₁P₂"
}
```

Muovi lo slider per esplorare la divisione del segmento: $t = 0$ corrisponde a $P_1$, $t = 1$ a $P_2$, $t = 0.5$ al punto medio.

---

## 8. Errori comuni

**Errore 1 — Dimenticare la radice quadrata.**
Scrivere $d = (x_2-x_1)^2 + (y_2-y_1)^2$ senza $\sqrt{}$. Questa è $d^2$, non $d$.

**Errore 2 — Confondere punto medio con somma.**
Calcolare $M = (x_1 + x_2, y_1 + y_2)$ senza dividere per 2.

**Errore 3 — Sbagliare il segno nelle sottrazioni.**
Con $P_1 = (1, -2)$ e $P_2 = (4, 2)$: scrivere $(4-1)^2 + (2-2)^2$ invece di $(4-1)^2 + (2-(-2))^2$. L'errore è nel trattare $-(-2)$ come $-2$.

**Errore 4 — Ordine delle coordinate nella coppia.**
Scrivere $(y, x)$ invece di $(x, y)$. La coppia $(3, 5)$ è diversa da $(5, 3)$.

**Errore 5 — Quadrante sbagliato.**
Confondere il III quadrante (entrambe negative) con il IV (solo $y$ negativa).

**Errore 6 — Formula del baricentro con 2 invece di 3.**
Dividere per 2 invece di 3 nella formula del baricentro.

**Errore 7 — Distanza negativa.**
La distanza è sempre $\geq 0$. Se ottieni un valore negativo, hai sbagliato qualcosa prima della radice.

---

## 9. Applicazioni reali

**Navigazione GPS.** I sistemi di navigazione usano coordinate per localizzare punti sulla mappa. La distanza "in linea d'aria" tra due luoghi si calcola esattamente con la formula di distanza (in versione sferica per lunghe distanze, ma il principio è identico). App come Google Maps calcolano rotte ottimizzando distanze tra punti intermedi.

**Computer grafica e videogiochi.** Ogni oggetto su schermo ha coordinate $(x, y)$ (o $(x, y, z)$ in 3D). Il rilevamento di collisioni tra personaggi o oggetti usa la formula della distanza: se la distanza tra due oggetti è inferiore alla somma dei loro raggi, c'è collisione. Anche le animazioni si basano su interpolazione lineare — identica alla divisione di segmento.

**Architettura e ingegneria.** I software CAD (Computer-Aided Design) usano il piano cartesiano per disegnare strutture. Il punto medio è fondamentale per trovare baricentri, equilibri di forze, e posizioni ottimali per supporti strutturali. Il calcolo delle distanze determina la lunghezza di travi, cavi, e strutture.

---

## 10. Riepilogo tabellare

| Concetto | Formula | Note |
| --- | --- | --- |
| Distanza | $d = \sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ | Sempre $\geq 0$ |
| Punto medio | $M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$ | Equidistante dagli estremi |
| Divisione con parametro $t$ | $P = (x_1 + t(x_2-x_1),\; y_1+t(y_2-y_1))$ | $t \in [0,1]$ |
| Baricentro triangolo | $G = \left(\frac{x_A+x_B+x_C}{3}, \frac{y_A+y_B+y_C}{3}\right)$ | Intersezione mediane |
| Simmetria rispetto a $x$ | $(x,y) \mapsto (x,-y)$ | Ribalta verticalmente |
| Simmetria rispetto a $y$ | $(x,y) \mapsto (-x,y)$ | Ribalta orizzontalmente |
| Simmetria rispetto all'origine | $(x,y) \mapsto (-x,-y)$ | Rotazione di 180° |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Distanza e perimetro</summary>

**Testo:** Trovare il perimetro del triangolo $A=(0,0)$, $B=(4,3)$, $C=(0,6)$.

**Soluzione:**

$$AB = \sqrt{(4-0)^2+(3-0)^2} = \sqrt{16+9} = \sqrt{25} = 5$$

$$BC = \sqrt{(0-4)^2+(6-3)^2} = \sqrt{16+9} = \sqrt{25} = 5$$

$$CA = \sqrt{(0-0)^2+(0-6)^2} = \sqrt{0+36} = 6$$

Perimetro $= 5 + 5 + 6 = 16$.

Il triangolo è isoscele ($AB = BC$).

</details>

<details>
<summary>Esercizio 2 — Punto medio incognito</summary>

**Testo:** Il punto medio di $AB$ è $M = (3, -1)$ e $A = (1, 2)$. Trovare $B$.

**Soluzione:**

Dalla definizione di punto medio:

$$\frac{1 + x_B}{2} = 3 \implies x_B = 6 - 1 = 5$$

$$\frac{2 + y_B}{2} = -1 \implies y_B = -2 - 2 = -4$$

Quindi $B = (5, -4)$.

Verifica: $M = \left(\frac{1+5}{2}, \frac{2+(-4)}{2}\right) = (3, -1)$ ✓

</details>

<details>
<summary>Esercizio 3 — Simmetria rispetto a y = x</summary>

**Testo:** Trovare il simmetrico del punto $P = (2, -3)$ rispetto alla retta $y = x$.

**Soluzione:**

La simmetria rispetto a $y = x$ scambia ascissa e ordinata:

$$P' = (-3, 2)$$

Verifica: il punto medio di $PP'$ è $\left(\frac{2+(-3)}{2}, \frac{-3+2}{2}\right) = \left(-\frac{1}{2}, -\frac{1}{2}\right)$, che giace sulla retta $y = x$ ✓.

</details>

<details>
<summary>Esercizio 4 — Triangolo equilatero</summary>

**Testo:** Due vertici di un triangolo equilatero sono $A = (0, 0)$ e $B = (2, 0)$. Trovare le possibili posizioni del terzo vertice $C$.

**Soluzione:**

Il lato è $AB = 2$. Il terzo vertice deve essere a distanza $2$ da entrambi $A$ e $B$.

Da $d(C, A) = 2$: $x_C^2 + y_C^2 = 4$

Da $d(C, B) = 2$: $(x_C - 2)^2 + y_C^2 = 4$

Sottraendo: $x_C^2 - (x_C-2)^2 = 0 \implies 4x_C - 4 = 0 \implies x_C = 1$

Sostituendo: $1 + y_C^2 = 4 \implies y_C = \pm\sqrt{3}$

Le due soluzioni sono $C = (1, \sqrt{3})$ (sopra $AB$) e $C = (1, -\sqrt{3})$ (sotto $AB$).

</details>

<details>
<summary>Esercizio 5 — Baricentro</summary>

**Testo:** Il baricentro di un triangolo è $G = (2, 3)$. Due vertici sono $A = (0, 1)$ e $B = (4, 2)$. Trovare $C$.

**Soluzione:**

$$G = \left(\frac{x_A + x_B + x_C}{3}, \frac{y_A + y_B + y_C}{3}\right)$$

$$2 = \frac{0 + 4 + x_C}{3} \implies x_C = 6 - 4 = 2$$

$$3 = \frac{1 + 2 + y_C}{3} \implies y_C = 9 - 3 = 6$$

Quindi $C = (2, 6)$.

</details>

<details>
<summary>Esercizio 6 — Distanza con parametro</summary>

**Testo:** Trovare il valore di $k$ tale che la distanza tra $P = (k, 1)$ e $Q = (2, 4)$ sia uguale a $5$.

**Soluzione:**

$$d = \sqrt{(2-k)^2 + (4-1)^2} = 5$$

$$(2-k)^2 + 9 = 25$$

$$(2-k)^2 = 16 \implies 2-k = \pm 4$$

$k = -2$ oppure $k = 6$.

</details>

<details>
<summary>Esercizio 7 — Punto a un terzo</summary>

**Testo:** Trovare il punto che divide il segmento da $A = (3, 6)$ a $B = (9, 0)$ in rapporto $2:1$ (cioè a $2/3$ da $A$).

**Soluzione:**

Con $t = 2/3$:

$$P = \left(3 + \frac{2}{3}(9-3),\; 6 + \frac{2}{3}(0-6)\right) = \left(3 + 4,\; 6 - 4\right) = (7,\; 2)$$

Verifica: $AP = \sqrt{16+16} = 4\sqrt{2}$, $PB = \sqrt{4+4} = 2\sqrt{2}$. Rapporto $2:1$ ✓.

</details>
