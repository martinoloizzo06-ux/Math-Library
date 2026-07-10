---
id: algebra-01-vettori
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: Vettori e operazioni fondamentali
title_en: Vectors and fundamental operations
level: blue
order: 1
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 1 — Vettori"
---

## 1. Intuizione — Cosa sono i vettori?

Immagina di dover dare indicazioni stradali a qualcuno: "vai 3 km verso est, poi 4 km verso nord". Non basta dire "percorri 7 km" — serve specificare **quante** distanza **in quale direzione**. Questo è esattamente un vettore: una grandezza con modulo, direzione e verso.

Un vettore in fisica è una freccia. In matematica è una lista ordinata di numeri. In informatica è un array. Tutti e tre i punti di vista si rivelano utili.

La potenza dell'algebra lineare nasce dal fatto che le frecce obbediscono a regole aritmetiche precise: puoi sommarle (metti le frecce testa-coda), moltiplicarle per un numero (allungarle o accorciarle), e misurare quanto sono "allineate" tra loro (prodotto scalare). Queste operazioni elementari, applicate a spazi con milioni di dimensioni, sono il cuore del machine learning, della grafica 3D e della fisica quantistica.

---

## 2. Prerequisiti

- Nozioni di geometria analitica nel piano ($\mathbb{R}^2$)
- Trigonometria di base: $\sin\theta$, $\cos\theta$, relazione $\sin^2\theta + \cos^2\theta = 1$
- Somme e prodotti di numeri reali
- Nozione di radice quadrata e valore assoluto $\lvert x \rvert$

---

## 3. Teoria

### Definizione formale

Un **vettore** in $\mathbb{R}^n$ è una $n$-upla ordinata di numeri reali disposta in colonna:

$$\mathbf{v} = \begin{pmatrix}v_1\\v_2\\\vdots\\v_n\end{pmatrix} \in \mathbb{R}^n$$

I numeri $v_1, v_2, \ldots, v_n$ si chiamano **componenti** del vettore. Due vettori sono **uguali** se e solo se hanno tutte le componenti uguali.

### Spazio vettoriale $\mathbb{R}^n$

L'insieme $\mathbb{R}^n$ dotato di due operazioni diventa uno **spazio vettoriale**:

**Somma vettoriale:**

$$\mathbf{u} + \mathbf{v} = \begin{pmatrix}u_1 + v_1\\u_2 + v_2\\\vdots\\u_n + v_n\end{pmatrix}$$

**Moltiplicazione per uno scalare** $c \in \mathbb{R}$:

$$c\,\mathbf{v} = \begin{pmatrix}c\,v_1\\c\,v_2\\\vdots\\c\,v_n\end{pmatrix}$$

**Proprietà fondamentali** (assiomi di spazio vettoriale):

| Proprietà | Formula |
| --- | --- |
| Commutatività della somma | $\mathbf{u}+\mathbf{v} = \mathbf{v}+\mathbf{u}$ |
| Associatività della somma | $(\mathbf{u}+\mathbf{v})+\mathbf{w} = \mathbf{u}+(\mathbf{v}+\mathbf{w})$ |
| Elemento neutro | $\mathbf{v}+\mathbf{0} = \mathbf{v}$ |
| Opposto | $\mathbf{v}+(-\mathbf{v}) = \mathbf{0}$ |
| Distributività | $c(\mathbf{u}+\mathbf{v}) = c\mathbf{u}+c\mathbf{v}$ |

### Prodotto scalare (dot product)

Il **prodotto scalare** di due vettori in $\mathbb{R}^n$ è il numero reale:

$$\mathbf{u} \cdot \mathbf{v} = \sum_{i=1}^n u_i v_i = u_1 v_1 + u_2 v_2 + \cdots + u_n v_n$$

**Interpretazione geometrica** (fondamentale):

$$\mathbf{u} \cdot \mathbf{v} = \lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert\cos\theta$$

dove $\theta \in [0, \pi]$ è l'angolo tra i due vettori. Il prodotto scalare misura **quanto i due vettori puntano nella stessa direzione**.

**Casi particolari:**
- $\theta = 0°$: stessa direzione, $\mathbf{u}\cdot\mathbf{v} = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ (massimo)
- $\theta = 90°$: perpendicolari, $\mathbf{u}\cdot\mathbf{v} = 0$
- $\theta = 180°$: direzioni opposte, $\mathbf{u}\cdot\mathbf{v} = -\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ (minimo)

**Ortogonalità:** $\mathbf{u} \perp \mathbf{v} \iff \mathbf{u} \cdot \mathbf{v} = 0$.

### Norma (lunghezza del vettore)

$$\lVert\mathbf{v}\rVert = \sqrt{\mathbf{v}\cdot\mathbf{v}} = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}$$

Un vettore con norma 1 si chiama **vettore unitario** (o versore). Per ottenere un versore nella direzione di $\mathbf{v}$:

$$\hat{\mathbf{v}} = \frac{\mathbf{v}}{\lVert\mathbf{v}\rVert}$$

### Disuguaglianze fondamentali

**Cauchy-Schwarz:**

$$\lvert \mathbf{u}\cdot\mathbf{v} \rvert \leq \lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert$$

Segue direttamente da $\cos\theta \in [-1,1]$. È la diseguaglianza più importante dell'algebra lineare.

**Triangolare:**

$$\lVert\mathbf{u}+\mathbf{v}\rVert \leq \lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert$$

Il percorso diretto è sempre più breve (o uguale) della somma dei due percorsi.

### Proiezione ortogonale

La **proiezione di $\mathbf{u}$ su $\mathbf{v}$** è il vettore nella direzione di $\mathbf{v}$ "più vicino" a $\mathbf{u}$:

$$\text{proj}_{\mathbf{v}}\,\mathbf{u} = \frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{v}\rVert^2}\,\mathbf{v}$$

Il coefficiente $\frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{v}\rVert^2}$ è detto **coordinata di Fourier** di $\mathbf{u}$ rispetto a $\mathbf{v}$.

### Prodotto vettoriale (solo in $\mathbb{R}^3$)

Dati $\mathbf{u} = (u_1, u_2, u_3)$ e $\mathbf{v} = (v_1, v_2, v_3)$:

$$\mathbf{u}\times\mathbf{v} = \begin{vmatrix}\mathbf{i}&\mathbf{j}&\mathbf{k}\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix} = \begin{pmatrix}u_2 v_3 - u_3 v_2\\u_3 v_1 - u_1 v_3\\u_1 v_2 - u_2 v_1\end{pmatrix}$$

**Proprietà geometriche:**
- $\mathbf{u}\times\mathbf{v}$ è **perpendicolare** a entrambi $\mathbf{u}$ e $\mathbf{v}$
- $\lVert\mathbf{u}\times\mathbf{v}\rVert = \lVert\mathbf{u}\rVert\,\lVert\mathbf{v}\rVert\sin\theta$ = area del parallelogramma generato
- **Non commutativo:** $\mathbf{u}\times\mathbf{v} = -(\mathbf{v}\times\mathbf{u})$

---

## 4. Derivazione — Perché $\mathbf{u}\cdot\mathbf{v} = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta$?

Partiamo dal **teorema del coseno**, noto dalla geometria elementare: in un triangolo con lati $a$, $b$, $c$ e angolo $\gamma$ opposto al lato $c$:

$$c^2 = a^2 + b^2 - 2ab\cos\gamma$$

Consideriamo il triangolo formato da $\mathbf{u}$, $\mathbf{v}$ e $\mathbf{u}-\mathbf{v}$ (il vettore differenza). Allora:

$$\lVert\mathbf{u}-\mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2 + \lVert\mathbf{v}\rVert^2 - 2\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta \quad \text{(teorema del coseno)}$$

Ma d'altro canto, sviluppando algebricamente (con la definizione di norma):

$$\lVert\mathbf{u}-\mathbf{v}\rVert^2 = (\mathbf{u}-\mathbf{v})\cdot(\mathbf{u}-\mathbf{v}) = \lVert\mathbf{u}\rVert^2 - 2\,\mathbf{u}\cdot\mathbf{v} + \lVert\mathbf{v}\rVert^2$$

Uguagliando i due risultati:

$$\lVert\mathbf{u}\rVert^2 - 2\,\mathbf{u}\cdot\mathbf{v} + \lVert\mathbf{v}\rVert^2 = \lVert\mathbf{u}\rVert^2 + \lVert\mathbf{v}\rVert^2 - 2\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta$$

Semplificando $\lVert\mathbf{u}\rVert^2$ e $\lVert\mathbf{v}\rVert^2$ da entrambi i lati:

$$-2\,\mathbf{u}\cdot\mathbf{v} = -2\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta$$

$$\boxed{\mathbf{u}\cdot\mathbf{v} = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta}$$

Questo mostra che la formula algebrica "somma di prodotti componente per componente" e la formula geometrica "prodotto di lunghezze per coseno dell'angolo" sono esattamente la stessa cosa. Notevole!

---

## 5. Esempi

**Esempio 1 — Somma e scalare (base)**

Dati $\mathbf{u} = (1, 2, -1)$ e $\mathbf{v} = (3, 0, 2)$, calcolare $\mathbf{u}+\mathbf{v}$ e $3\mathbf{u} - 2\mathbf{v}$.

$$\mathbf{u}+\mathbf{v} = (1+3,\; 2+0,\; -1+2) = (4, 2, 1)$$

$$3\mathbf{u} - 2\mathbf{v} = (3-6,\; 6-0,\; -3-4) = (-3, 6, -7)$$

---

**Esempio 2 — Norma e versore**

Calcolare $\lVert\mathbf{u}\rVert$ per $\mathbf{u} = (3, 4)$ e trovare il versore $\hat{\mathbf{u}}$.

$$\lVert\mathbf{u}\rVert = \sqrt{3^2 + 4^2} = \sqrt{9+16} = \sqrt{25} = 5$$

$$\hat{\mathbf{u}} = \frac{1}{5}\begin{pmatrix}3\\4\end{pmatrix} = \begin{pmatrix}0.6\\0.8\end{pmatrix}$$

Verifica: $\lVert\hat{\mathbf{u}}\rVert = \sqrt{0.36 + 0.64} = \sqrt{1} = 1$. ✓

---

**Esempio 3 — Prodotto scalare e angolo**

Trovare l'angolo tra $\mathbf{u} = (1, 1)$ e $\mathbf{v} = (1, -1)$.

$$\mathbf{u}\cdot\mathbf{v} = 1\cdot1 + 1\cdot(-1) = 0$$

Il prodotto scalare è zero, dunque i vettori sono **ortogonali**: $\theta = 90°$.

---

**Esempio 4 — Prodotto scalare e angolo non banale**

Trovare l'angolo tra $\mathbf{u} = (1, 0)$ e $\mathbf{v} = (1, 1)$.

$$\mathbf{u}\cdot\mathbf{v} = 1\cdot1 + 0\cdot1 = 1, \quad \lVert\mathbf{u}\rVert = 1, \quad \lVert\mathbf{v}\rVert = \sqrt{2}$$

$$\cos\theta = \frac{1}{1\cdot\sqrt{2}} = \frac{1}{\sqrt{2}} \implies \theta = 45°$$

---

**Esempio 5 — Proiezione ortogonale**

Proiettare $\mathbf{u} = (4, 2)$ su $\mathbf{v} = (1, 3)$.

$$\mathbf{u}\cdot\mathbf{v} = 4+6 = 10, \quad \lVert\mathbf{v}\rVert^2 = 1+9 = 10$$

$$\text{proj}_{\mathbf{v}}\,\mathbf{u} = \frac{10}{10}(1,3) = (1,3)$$

La componente di $\mathbf{u}$ ortogonale a $\mathbf{v}$ è $(4,2)-(1,3) = (3,-1)$.

Verifica: $(3,-1)\cdot(1,3) = 3-3 = 0$. ✓

---

**Esempio 6 — Disuguaglianza di Cauchy-Schwarz**

Verificare Cauchy-Schwarz per $\mathbf{u} = (1, 2, 3)$ e $\mathbf{v} = (4, 0, -1)$.

$$\lvert \mathbf{u}\cdot\mathbf{v} \rvert = \lvert 4 + 0 - 3 \rvert = 1$$

$$\lVert\mathbf{u}\rVert = \sqrt{14}, \quad \lVert\mathbf{v}\rVert = \sqrt{17}$$

$$\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert = \sqrt{14\cdot17} = \sqrt{238} \approx 15.43$$

Chiaramente $1 \leq 15.43$. ✓

---

**Esempio 7 — Prodotto vettoriale**

Calcolare $\mathbf{u}\times\mathbf{v}$ per $\mathbf{u} = (1, 0, 0)$ e $\mathbf{v} = (0, 1, 0)$ (versori $\mathbf{i}$ e $\mathbf{j}$).

$$\mathbf{i}\times\mathbf{j} = \begin{pmatrix}0\cdot0 - 0\cdot1\\0\cdot0 - 1\cdot0\\1\cdot1 - 0\cdot0\end{pmatrix} = \begin{pmatrix}0\\0\\1\end{pmatrix} = \mathbf{k}$$

Il risultato è il versore $\mathbf{k}$, perpendicolare al piano $xy$. Area del parallelogramma: $\lVert\mathbf{k}\rVert = 1$ (quadrato unitario).

---

**Esempio 8 — Combinazione lineare e interpretazione**

Scrivere $(5, 1)$ come combinazione lineare di $\mathbf{e}_1 = (1, 0)$ e $\mathbf{e}_2 = (0, 1)$.

$$(5, 1) = 5\,(1,0) + 1\,(0,1) = 5\,\mathbf{e}_1 + 1\,\mathbf{e}_2$$

I versori coordinati $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ formano la **base canonica** di $\mathbb{R}^n$.

---

## 6. Grafico

```plot
{"title":"Vettori nel piano: somma e proiezione","fn":"x","fn2":"3*x","domain":[-3,3],"yDomain":[-4,4],"label1":"direzione (1,1)","label2":"direzione (1,3)"}
```

---

## 7. Interattivo — Effetto dello scalare

```slider
{"title":"Scaling di un vettore: c·(1, 0.5)","fn":"0.5*a","domain":[-4,4],"yDomain":[-4,4],"pname":"a","pmin":-3,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"c","label1":"c·v"}
```

Muovi il cursore: per $c > 0$ il vettore punta nella stessa direzione, per $c < 0$ si inverte, per $c = 0$ collassa nell'origine.

---

## 8. Errori comuni

**Errore 1 — Sommare vettori con dimensioni diverse.**
$\mathbf{u}\in\mathbb{R}^2$ e $\mathbf{v}\in\mathbb{R}^3$ non si possono sommare. Le dimensioni devono coincidere.

**Errore 2 — Confondere prodotto scalare e prodotto vettoriale.**
Il prodotto scalare $\mathbf{u}\cdot\mathbf{v}$ dà un **numero**. Il prodotto vettoriale $\mathbf{u}\times\mathbf{v}$ dà un **vettore** (e funziona solo in $\mathbb{R}^3$).

**Errore 3 — Dimenticare che il prodotto scalare può essere negativo.**
Se $\theta > 90°$, allora $\cos\theta < 0$, quindi $\mathbf{u}\cdot\mathbf{v} < 0$. La norma invece è sempre $\geq 0$.

**Errore 4 — Pensare che $\lVert\mathbf{u}+\mathbf{v}\rVert = \lVert\mathbf{u}\rVert + \lVert\mathbf{v}\rVert$ sempre.**
Vale l'uguaglianza solo se i vettori sono paralleli e concordi ($\theta = 0$). In generale vale la disuguaglianza triangolare.

**Errore 5 — Calcolare la proiezione usando $\lVert\mathbf{v}\rVert$ al posto di $\lVert\mathbf{v}\rVert^2$.**
La formula corretta è $\text{proj}_{\mathbf{v}}\,\mathbf{u} = \frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{v}\rVert^2}\mathbf{v}$, non $\frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{v}\rVert}\mathbf{v}$.

**Errore 6 — Credere che ortogonale significhi perpendicolare solo in $\mathbb{R}^2$.**
L'ortogonalità è definita in qualsiasi $\mathbb{R}^n$ tramite $\mathbf{u}\cdot\mathbf{v} = 0$. Non è necessario visualizzarla geometricamente.

**Errore 7 — Scambiare $\mathbf{u}\times\mathbf{v}$ con $\mathbf{v}\times\mathbf{u}$.**
$\mathbf{u}\times\mathbf{v} = -(\mathbf{v}\times\mathbf{u})$: il prodotto vettoriale è **anticommutativo**, non commutativo.

---

## 9. Applicazioni reali

**Grafica 3D e videogiochi.** Ogni oggetto 3D è descritto da vettori di posizione, direzione e normale alle superfici. Il prodotto scalare è usato per calcolare l'illuminazione: più la luce "punta" verso una superficie ($\mathbf{l}\cdot\mathbf{n}$ grande), più la superficie appare luminosa. Il prodotto vettoriale calcola le normali alle facce dei poligoni.

**Machine Learning.** In un modello di classificazione, ogni punto dati è un vettore in $\mathbb{R}^n$ (dove $n$ può essere milioni, come nel caso delle immagini). La similarità tra documenti di testo è spesso misurata con il **cosine similarity**: $\frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert}$. Reti neurali come i Transformer calcolano prodotti scalari milioni di volte per ogni token generato.

**Fisica e ingegneria.** Forze, velocità, campi elettrici e magnetici sono vettori. Il lavoro compiuto da una forza $\mathbf{F}$ lungo uno spostamento $\mathbf{d}$ è $W = \mathbf{F}\cdot\mathbf{d}$. Il momento di una forza (torque) è $\boldsymbol{\tau} = \mathbf{r}\times\mathbf{F}$.

---

## 10. Riepilogo

| Concetto | Formula / Definizione | Note |
| --- | --- | --- |
| Vettore in $\mathbb{R}^n$ | $\mathbf{v} = (v_1,\ldots,v_n)^T$ | $n$-upla ordinata di reali |
| Somma | $(u_i + v_i)$ componente per componente | Stessa dimensione |
| Scalare | $(c\,v_i)$ componente per componente | $c \in \mathbb{R}$ |
| Norma | $\lVert\mathbf{v}\rVert = \sqrt{\sum v_i^2}$ | Sempre $\geq 0$ |
| Versore | $\hat{\mathbf{v}} = \mathbf{v}/\lVert\mathbf{v}\rVert$ | Norma = 1 |
| Dot product | $\mathbf{u}\cdot\mathbf{v} = \sum u_i v_i$ | Risultato: numero reale |
| Interpretazione geometrica | $\mathbf{u}\cdot\mathbf{v} = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert\cos\theta$ | Angolo tra i vettori |
| Ortogonalità | $\mathbf{u}\cdot\mathbf{v} = 0$ | $\theta = 90°$ |
| Proiezione | $\frac{\mathbf{u}\cdot\mathbf{v}}{\lVert\mathbf{v}\rVert^2}\mathbf{v}$ | Componente nella dir. di $\mathbf{v}$ |
| Cross product | Solo in $\mathbb{R}^3$, risultato vettore | Perp. a entrambi |
| Cauchy-Schwarz | $\lvert\mathbf{u}\cdot\mathbf{v}\rvert \leq \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ | Disug. fondamentale |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Operazioni di base</summary>

Dati $\mathbf{u} = (2, -1, 3)$ e $\mathbf{v} = (-1, 4, 2)$, calcolare:
(a) $\mathbf{u} + \mathbf{v}$
(b) $3\mathbf{u} - 2\mathbf{v}$
(c) $\lVert\mathbf{u}\rVert$

**Soluzione:**

(a) $\mathbf{u} + \mathbf{v} = (2-1,\; -1+4,\; 3+2) = (1, 3, 5)$

(b) $3\mathbf{u} - 2\mathbf{v} = (6-(-2),\; -3-8,\; 9-4) = (8, -11, 5)$

(c) $\lVert\mathbf{u}\rVert = \sqrt{4+1+9} = \sqrt{14}$

</details>

<details>
<summary>Esercizio 2 — Prodotto scalare e angolo</summary>

Calcolare il prodotto scalare e l'angolo tra $\mathbf{u} = (3, 4)$ e $\mathbf{v} = (-4, 3)$.

**Soluzione:**

$\mathbf{u}\cdot\mathbf{v} = 3\cdot(-4) + 4\cdot3 = -12 + 12 = 0$

L'angolo è $\theta = 90°$. I vettori sono ortogonali.

Nota: $(3,4)$ e $(-4,3)$ sono sempre ortogonali — ruotando un vettore di $90°$ si ottiene $(-v_2, v_1)$.

</details>

<details>
<summary>Esercizio 3 — Versore e normalizzazione</summary>

Trovare il versore nella direzione di $\mathbf{v} = (1, -2, 2)$.

**Soluzione:**

$\lVert\mathbf{v}\rVert = \sqrt{1+4+4} = \sqrt{9} = 3$

$\hat{\mathbf{v}} = \frac{1}{3}(1,-2,2) = \left(\frac{1}{3},\; -\frac{2}{3},\; \frac{2}{3}\right)$

Verifica: $\lVert\hat{\mathbf{v}}\rVert = \frac{1}{3}\sqrt{1+4+4} = \frac{3}{3} = 1$ ✓

</details>

<details>
<summary>Esercizio 4 — Proiezione ortogonale</summary>

Proiettare $\mathbf{u} = (5, 2)$ sulla direzione di $\mathbf{v} = (3, 1)$. Trovare anche la componente ortogonale.

**Soluzione:**

$\mathbf{u}\cdot\mathbf{v} = 15 + 2 = 17$

$\lVert\mathbf{v}\rVert^2 = 9+1 = 10$

$\text{proj}_{\mathbf{v}}\,\mathbf{u} = \frac{17}{10}(3,1) = \left(\frac{51}{10},\; \frac{17}{10}\right)$

Componente ortogonale: $\mathbf{u} - \text{proj} = \left(5-\frac{51}{10},\; 2-\frac{17}{10}\right) = \left(-\frac{1}{10},\; \frac{3}{10}\right)$

Verifica ortogonalità: $\left(-\frac{1}{10},\frac{3}{10}\right)\cdot(3,1) = -\frac{3}{10}+\frac{3}{10} = 0$ ✓

</details>

<details>
<summary>Esercizio 5 — Cauchy-Schwarz con uguaglianza</summary>

Per quali vettori vale l'uguaglianza in Cauchy-Schwarz? Dare un esempio.

**Soluzione:**

L'uguaglianza $\lvert\mathbf{u}\cdot\mathbf{v}\rvert = \lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert$ vale se e solo se $\cos\theta = \pm 1$, cioè $\theta = 0°$ o $\theta = 180°$: i vettori sono **paralleli** (uno è multiplo scalare dell'altro).

Esempio: $\mathbf{u} = (1,2)$, $\mathbf{v} = (3,6) = 3\mathbf{u}$.

$\lvert\mathbf{u}\cdot\mathbf{v}\rvert = \lvert 3+12 \rvert = 15$

$\lVert\mathbf{u}\rVert\lVert\mathbf{v}\rVert = \sqrt{5}\cdot\sqrt{45} = \sqrt{225} = 15$ ✓

</details>

<details>
<summary>Esercizio 6 — Prodotto vettoriale e area</summary>

Calcolare il prodotto vettoriale $\mathbf{u}\times\mathbf{v}$ per $\mathbf{u} = (2, 1, 0)$ e $\mathbf{v} = (0, 1, 2)$. Trovare l'area del parallelogramma generato.

**Soluzione:**

$$\mathbf{u}\times\mathbf{v} = \begin{pmatrix}1\cdot2 - 0\cdot1\\0\cdot0 - 2\cdot2\\2\cdot1 - 1\cdot0\end{pmatrix} = \begin{pmatrix}2\\-4\\2\end{pmatrix}$$

Area $= \lVert\mathbf{u}\times\mathbf{v}\rVert = \sqrt{4+16+4} = \sqrt{24} = 2\sqrt{6}$

</details>

<details>
<summary>Esercizio 7 — Combinazione lineare e coefficienti</summary>

Scrivere $\mathbf{w} = (7, 1)$ come combinazione lineare di $\mathbf{a} = (2, 1)$ e $\mathbf{b} = (1, -1)$.

**Soluzione:**

Cercare $\alpha, \beta$ tali che $\alpha\mathbf{a} + \beta\mathbf{b} = \mathbf{w}$:

$$\begin{cases}2\alpha + \beta = 7\\\alpha - \beta = 1\end{cases}$$

Sommando le due equazioni: $3\alpha = 8 \implies \alpha = \frac{8}{3}$.

Dalla seconda: $\beta = \alpha - 1 = \frac{5}{3}$.

$\mathbf{w} = \frac{8}{3}(2,1) + \frac{5}{3}(1,-1) = \left(\frac{16+5}{3},\; \frac{8-5}{3}\right) = (7, 1)$ ✓

</details>

<details>
<summary>Esercizio 8 — Angolo in un triangolo</summary>

Un triangolo ha vertici $A = (0,0)$, $B = (4,0)$, $C = (1,3)$. Calcolare l'angolo in $A$.

**Soluzione:**

I due lati uscenti da $A$ sono i vettori $\overrightarrow{AB} = (4,0)$ e $\overrightarrow{AC} = (1,3)$.

$\overrightarrow{AB}\cdot\overrightarrow{AC} = 4\cdot1 + 0\cdot3 = 4$

$\lVert\overrightarrow{AB}\rVert = 4$, $\lVert\overrightarrow{AC}\rVert = \sqrt{1+9} = \sqrt{10}$

$\cos\theta = \frac{4}{4\sqrt{10}} = \frac{1}{\sqrt{10}}$

$\theta = \arccos\!\left(\frac{1}{\sqrt{10}}\right) \approx 71.6°$

</details>
