---
id: algebra-03-sistemi-lineari
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: Sistemi lineari e metodo di Gauss
title_en: Linear systems and Gaussian elimination
level: blue
order: 3
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 2 — Eliminazione di Gauss"
---

## 1. Intuizione — Il problema fondamentale

Hai 3 incognite ($x$, $y$, $z$) e 3 condizioni (equazioni). Quand'è che riesci a trovare i valori? La risposta non è sempre "sì": a volte le condizioni si contraddicono (impossibile), a volte si sovrappongono (infinite soluzioni), a volte c'è esattamente una via d'uscita (soluzione unica).

Pensa a tre piani nello spazio tridimensionale. Ogni equazione lineare in $x,y,z$ descrive un piano. Il "punto soluzione" è dove i tre piani si incrociano. Se i piani si incrociano in un punto solo: una soluzione. Se tutti e tre contengono la stessa retta: infinite soluzioni. Se due sono paralleli: nessuna soluzione.

L'**eliminazione di Gauss** è il metodo sistematico per risolvere qualsiasi sistema lineare, indipendentemente dal numero di equazioni e incognite. È l'algoritmo fondamentale dell'algebra lineare — inventato da Gauss nel 1800 e ancora oggi al cuore di ogni software di calcolo numerico.

---

## 2. Prerequisiti

- Operazioni elementari su numeri reali (somme, prodotti, divisioni)
- Matrici: nozione di riga, colonna, elemento $a_{ij}$ (lezione precedente)
- Prodotto matrice-vettore $A\mathbf{x}$
- Nozione di variabile e incognita

---

## 3. Teoria

### Sistema lineare: definizione

Un **sistema di $m$ equazioni in $n$ incognite** $x_1, x_2, \ldots, x_n$ ha la forma:

$$\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}$$

I numeri $a_{ij}$ sono i **coefficienti**, i numeri $b_i$ sono i **termini noti**, e $x_j$ sono le **incognite**.

**Forma matriciale compatta:** $A\mathbf{x} = \mathbf{b}$, con $A \in \mathbb{R}^{m\times n}$, $\mathbf{x} \in \mathbb{R}^n$, $\mathbf{b} \in \mathbb{R}^m$.

**Sistema omogeneo:** $A\mathbf{x} = \mathbf{0}$ — il termine noto è il vettore zero. Ha sempre almeno la soluzione banale $\mathbf{x} = \mathbf{0}$.

### Matrice aumentata

Per l'eliminazione di Gauss si lavora sulla **matrice aumentata**, che combina la matrice dei coefficienti e il vettore dei termini noti:

$$[A\mid\mathbf{b}] = \left(\begin{array}{cccc|c} a_{11} & a_{12} & \cdots & a_{1n} & b_1 \\ a_{21} & a_{22} & \cdots & a_{2n} & b_2 \\ \vdots & & \ddots & \vdots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} & b_m \end{array}\right)$$

### Operazioni elementari sulle righe

Le seguenti operazioni non modificano le soluzioni del sistema:

| Operazione | Notazione | Descrizione |
| --- | --- | --- |
| Scambio | $R_i \leftrightarrow R_j$ | Scambia la riga $i$ con la riga $j$ |
| Scalatura | $R_i \leftarrow c\,R_i$, $c\neq 0$ | Moltiplica la riga $i$ per uno scalare non zero |
| Eliminazione | $R_i \leftarrow R_i + c\,R_j$ | Somma alla riga $i$ un multiplo della riga $j$ |

### Forma a scalini (Row Echelon Form — REF)

Una matrice è in **forma a scalini** se:
1. Tutte le righe nulle (se presenti) stanno in fondo.
2. Il primo elemento non zero di ogni riga (**pivot**) si trova a destra del pivot della riga precedente.

$$\begin{pmatrix} \bullet & * & * & * \\ 0 & \bullet & * & * \\ 0 & 0 & \bullet & * \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

dove $\bullet$ indica un pivot (non zero) e $*$ indica un elemento qualsiasi.

### Forma ridotta a scalini (RREF)

La **forma ridotta** (Reduced Row Echelon Form) richiede in più:
- Ogni pivot è uguale a $1$.
- Ogni pivot è l'unico elemento non zero nella sua colonna.

La RREF è **unica** per ogni matrice.

### Algoritmo di eliminazione di Gauss

**Fase 1 — Eliminazione in avanti** (porta alla REF):
1. Trova il pivot nella colonna più a sinistra.
2. Usa scambi di righe se necessario per portare il pivot in cima.
3. Elimina gli elementi sotto il pivot con operazioni $R_i \leftarrow R_i - \frac{a_{ij}}{a_{jj}}R_j$.
4. Ripeti per la sottomatrice rimanente.

**Fase 2 — Sostituzione all'indietro** (trova le soluzioni):
Dalla forma a scalini, risolvi dall'ultima equazione verso la prima.

Alternativa: **Gauss-Jordan** — porta tutto in RREF eliminando anche sopra i pivot, poi la soluzione si legge direttamente.

### Classificazione dei sistemi

Dopo l'eliminazione, si verificano tre casi:

**Caso 1 — Soluzione unica:** ogni colonna delle incognite contiene un pivot. Il sistema è compatibile e determinato. $\text{rk}(A) = n$.

**Caso 2 — Infinite soluzioni:** alcune colonne non hanno pivot. Le incognite corrispondenti a colonne senza pivot si chiamano **variabili libere** (o parametriche) e possono assumere qualsiasi valore reale. Il numero di variabili libere è $n - \text{rk}(A)$.

**Caso 3 — Nessuna soluzione (sistema incompatibile):** compare una riga nella forma aumentata del tipo:

$$[0 \; 0 \; \cdots \; 0 \mid c], \quad c \neq 0$$

Questa corrisponde all'equazione $0 = c$: contraddizione.

---

## 4. Derivazione — Perché le operazioni elementari preservano le soluzioni?

Dimostriamo per l'operazione più importante: $R_i \leftarrow R_i + c\,R_j$.

La riga $i$ del sistema originale corrisponde all'equazione:

$$a_{i1}x_1 + a_{i2}x_2 + \cdots + a_{in}x_n = b_i \qquad (*)$$

La riga $j$ corrisponde a:

$$a_{j1}x_1 + a_{j2}x_2 + \cdots + a_{jn}x_n = b_j \qquad (**)$$

Dopo l'operazione $R_i \leftarrow R_i + c\,R_j$, la nuova riga $i$ corrisponde a:

$$(a_{i1}+c\,a_{j1})x_1 + \cdots + (a_{in}+c\,a_{jn})x_n = b_i + c\,b_j$$

**Direzione $\Rightarrow$:** Sia $\mathbf{x}^*$ soluzione del sistema originale (soddisfa sia $(*)$ che $(**)$). Allora soddisfa anche la nuova equazione, perché sommando $c$ volte l'equazione $(**)$ all'equazione $(*)$ otteniamo un'equazione ancora vera.

**Direzione $\Leftarrow$:** Sia $\mathbf{x}^*$ soluzione del sistema modificato (soddisfa la nuova riga $i$ e la riga $j$ invariata). Allora soddisfa anche la riga $i$ originale, perché sottraendo $c$ volte l'equazione $(**)$ dalla nuova riga $i$ si recupera l'equazione $(*)$.

Quindi i due sistemi hanno **esattamente le stesse soluzioni**. $\square$

---

## 5. Esempi

**Esempio 1 — Sistema con soluzione unica (3×3)**

$$\begin{cases} x + 2y + z = 2 \\ 3x + 8y + z = 12 \\ 4y + z = 2 \end{cases}$$

Matrice aumentata:

$$\left(\begin{array}{ccc|c}1&2&1&2\\3&8&1&12\\0&4&1&2\end{array}\right)$$

$R_2 \leftarrow R_2 - 3R_1$:

$$\left(\begin{array}{ccc|c}1&2&1&2\\0&2&-2&6\\0&4&1&2\end{array}\right)$$

$R_3 \leftarrow R_3 - 2R_2$:

$$\left(\begin{array}{ccc|c}1&2&1&2\\0&2&-2&6\\0&0&5&-10\end{array}\right)$$

Sostituzione all'indietro:

- Riga 3: $5z = -10 \implies z = -2$
- Riga 2: $2y - 2(-2) = 6 \implies 2y = 2 \implies y = 1$
- Riga 1: $x + 2(1) + (-2) = 2 \implies x = 2$

**Soluzione unica:** $(x, y, z) = (2, 1, -2)$

---

**Esempio 2 — Sistema con infinite soluzioni**

$$\begin{cases} x + 2y - z = 1 \\ 2x + 4y - 2z = 2 \\ x - y + z = 0 \end{cases}$$

Matrice aumentata, dopo $R_2 \leftarrow R_2 - 2R_1$ e $R_3 \leftarrow R_3 - R_1$:

$$\left(\begin{array}{ccc|c}1&2&-1&1\\0&0&0&0\\0&-3&2&-1\end{array}\right)$$

Scambio $R_2 \leftrightarrow R_3$:

$$\left(\begin{array}{ccc|c}1&2&-1&1\\0&-3&2&-1\\0&0&0&0\end{array}\right)$$

Due pivot: colonne 1 e 2. La colonna 3 non ha pivot: $z = t$ è **variabile libera**.

- Riga 2: $-3y + 2t = -1 \implies y = \frac{1+2t}{3}$
- Riga 1: $x = 1 - 2y + t = 1 - \frac{2(1+2t)}{3} + t = \frac{3-2-4t+3t}{3} = \frac{1-t}{3}$

**Infinite soluzioni:** $\left(\frac{1-t}{3},\; \frac{1+2t}{3},\; t\right)$ per $t \in \mathbb{R}$.

---

**Esempio 3 — Sistema incompatibile**

$$\begin{cases} x + y = 1 \\ 2x + 2y = 5 \end{cases}$$

$R_2 \leftarrow R_2 - 2R_1$:

$$\left(\begin{array}{cc|c}1&1&1\\0&0&3\end{array}\right)$$

La seconda riga dà $0 = 3$: **contraddizione**. Nessuna soluzione.

---

**Esempio 4 — Sistema $2\times 3$ con 1 variabile libera**

$$\begin{cases} x + 2y + 3z = 4 \\ 2x + 5y + 8z = 11 \end{cases}$$

$R_2 \leftarrow R_2 - 2R_1$:

$$\left(\begin{array}{ccc|c}1&2&3&4\\0&1&2&3\end{array}\right)$$

Pivot in colonne 1 e 2. Variabile libera: $z = t$.

- $y = 3 - 2t$
- $x = 4 - 2y - 3z = 4 - 2(3-2t) - 3t = -2 + t$

**Soluzione:** $(-2+t,\; 3-2t,\; t)$ per $t\in\mathbb{R}$.

---

**Esempio 5 — Metodo Gauss-Jordan (RREF)**

Risolvere $\begin{cases}2x + y = 5\\ x + 3y = 10\end{cases}$.

Matrice aumentata: $\left(\begin{array}{cc|c}2&1&5\\1&3&10\end{array}\right)$

$R_1 \leftrightarrow R_2$: $\left(\begin{array}{cc|c}1&3&10\\2&1&5\end{array}\right)$

$R_2 \leftarrow R_2 - 2R_1$: $\left(\begin{array}{cc|c}1&3&10\\0&-5&-15\end{array}\right)$

$R_2 \leftarrow -\frac{1}{5}R_2$: $\left(\begin{array}{cc|c}1&3&10\\0&1&3\end{array}\right)$

$R_1 \leftarrow R_1 - 3R_2$: $\left(\begin{array}{cc|c}1&0&1\\0&1&3\end{array}\right)$ ← RREF

**Soluzione:** $x=1$, $y=3$ (leggibile direttamente).

---

**Esempio 6 — Sistema omogeneo**

$$A = \begin{pmatrix}1&2&-1\\2&4&-2\end{pmatrix}, \quad A\mathbf{x} = \mathbf{0}$$

$R_2 \leftarrow R_2 - 2R_1$: $\begin{pmatrix}1&2&-1\\0&0&0\end{pmatrix}$

Una sola equazione non banale: $x_1 + 2x_2 - x_3 = 0$.

Variabili libere: $x_2 = s$, $x_3 = t$. Allora $x_1 = -2s + t$.

$$\mathbf{x} = s\begin{pmatrix}-2\\1\\0\end{pmatrix} + t\begin{pmatrix}1\\0\\1\end{pmatrix}, \quad s,t\in\mathbb{R}$$

---

**Esempio 7 — Sistema parametrico**

Per quale valore di $k$ il sistema ha soluzioni infinite?

$$\begin{cases} x + ky = 2 \\ kx + y = 2 \end{cases}$$

Matrice aumentata, $R_2 \leftarrow R_2 - kR_1$:

$$\left(\begin{array}{cc|c}1&k&2\\0&1-k^2&2-2k\end{array}\right)$$

Infinite soluzioni: il secondo pivot è zero e il termine noto è zero:

$1-k^2 = 0$ e $2-2k = 0 \implies k=1$.

(Per $k=-1$: $1-k^2=0$ ma $2-2(-1)=4\neq0$ — sistema incompatibile.)

---

**Esempio 8 — Sistema sovradeterminato ($m > n$)**

$$\begin{cases} x + y = 1 \\ x - y = 3 \\ 2x + y = 5 \end{cases}$$

Matrice aumentata, applicando $R_2 \leftarrow R_2 - R_1$ e $R_3 \leftarrow R_3 - 2R_1$:

$$\left(\begin{array}{cc|c}1&1&1\\0&-2&2\\0&-1&3\end{array}\right)$$

$R_3 \leftarrow R_3 - \frac{1}{2}R_2$: $\left(\begin{array}{cc|c}1&1&1\\0&-2&2\\0&0&2\end{array}\right)$

Riga 3: $0=2$ — **nessuna soluzione**.

Le 3 rette non passano per un punto comune.

---

## 6. Grafico

```plot
{"title":"Intersezione di due rette (soluzione unica)","fn":"(5-2*x)/3","fn2":"(10-x)/3","domain":[-2,6],"yDomain":[-1,5],"label1":"2x+3y=5","label2":"x+3y=10"}
```

---

## 7. Interattivo — Rette parallele vs intersecanti

```slider
{"title":"Sistema: x+y=2, x+ay=3 (a varia)","fn":"2-x","fn2":"(3-x)/a","domain":[-1,4],"yDomain":[-2,4],"pname":"a","pmin":0.5,"pmax":2,"pdefault":1.5,"pstep":0.1,"plabel":"a","label1":"x+y=2","label2":"x+ay=3"}
```

Osserva: quando le due rette si avvicinano al parallelo ($a \to 1$), il punto d'intersezione si allontana verso l'infinito.

---

## 8. Errori comuni

**Errore 1 — Sbagliare il segno nell'eliminazione.**
Quando si fa $R_i \leftarrow R_i - c\,R_j$, il segno del termine noto segue la stessa operazione. Esempio: $R_2 \leftarrow R_2 - 3R_1$ va applicata anche al termine noto, non solo ai coefficienti.

**Errore 2 — Dimenticare di aggiornare tutti gli elementi della riga.**
L'operazione $R_i \leftarrow R_i + c\,R_j$ modifica **tutti** gli elementi della riga $i$, incluso il termine noto. Spesso si aggiorna solo il coefficiente target.

**Errore 3 — Confondere "matrice coefficienti" con "matrice aumentata".**
Il teorema di Rouché-Capelli confronta i ranghi di $A$ e $[A\mid\mathbf{b}]$. Dimenticare di augmentare la matrice porta a conclusioni errate sulla compatibilità.

**Errore 4 — Dichiarare infinite soluzioni senza identificare le variabili libere.**
Trovare infinite soluzioni non basta: bisogna parametrizzare esplicitamente la soluzione generale usando le variabili libere.

**Errore 5 — Dividere per un'espressione che potrebbe essere zero.**
Nei sistemi parametrici, dividere per $(k-2)$ durante l'eliminazione è valido solo se $k \neq 2$. Il caso $k=2$ va trattato separatamente.

**Errore 6 — Fermarsi alla forma a scalini invece della RREF.**
La forma a scalini mostra la struttura ma richiede sostituzione all'indietro. Se si vuole la soluzione direttamente, portare in RREF (Gauss-Jordan).

**Errore 7 — Credere che un sistema $m \times n$ con $m > n$ sia sempre compatibile.**
Avere più equazioni che incognite non garantisce una soluzione: le equazioni extra potrebbero essere incompatibili con le altre.

---

## 9. Applicazioni reali

**Bilanciamento di equazioni chimiche.** Bilanciare $\text{CH}_4 + O_2 \to CO_2 + H_2O$ significa trovare coefficienti interi positivi che soddisfino la conservazione degli atomi — un sistema lineare nelle incognite (i coefficienti). L'eliminazione di Gauss trova automaticamente la soluzione minima.

**Calcolo strutturale in ingegneria.** Una struttura (ponte, edificio, aereo) è modellata come rete di elementi. L'equilibrio di ogni nodo produce un'equazione lineare in termini delle forze interne. Con centinaia di nodi, il sistema ha centinaia di equazioni e va risolto numericamente con Gauss. Ogni calcolo strutturale che garantisce la sicurezza di un edificio usa questo algoritmo.

**Tomografia computerizzata (TAX/CT scan).** Il corpo umano viene attraversato da raggi X da migliaia di angolazioni diverse. Ogni raggio misura l'assorbimento totale lungo la sua traiettoria — un'equazione lineare nelle densità dei tessuti. Ricostruire l'immagine 3D significa risolvere un sistema gigantesco (milioni di equazioni). L'algoritmo di Gauss è alla base della medicina moderna.

---

## 10. Riepilogo

| Forma della matrice | Descrizione |
| --- | --- |
| Matrice aumentata $[A\mid\mathbf{b}]$ | Sistema nella forma tabellare |
| Forma a scalini (REF) | Pivot sotto-diagonali eliminati |
| Forma ridotta (RREF) | Pivot = 1, azzerati sopra e sotto |

| Caso | Condizione | Soluzioni |
| --- | --- | --- |
| Compatibile determinato | $\text{rk}(A) = \text{rk}([A\mid\mathbf{b}]) = n$ | Una sola |
| Compatibile indeterminato | $\text{rk}(A) = \text{rk}([A\mid\mathbf{b}]) < n$ | Infinite ($\infty^{n-r}$) |
| Incompatibile | $\text{rk}(A) < \text{rk}([A\mid\mathbf{b}])$ | Nessuna |

| Operazione sulle righe | Effetto sulle soluzioni |
| --- | --- |
| $R_i \leftrightarrow R_j$ | Invariate |
| $R_i \leftarrow c\,R_i$, $c\neq 0$ | Invariate |
| $R_i \leftarrow R_i + c\,R_j$ | Invariate |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Eliminazione di Gauss (sistema 3×3)</summary>

Risolvere:

$$\begin{cases} x + y - z = 2 \\ 2x + y + z = 7 \\ x - y + 2z = 3 \end{cases}$$

**Soluzione:**

Matrice aumentata; $R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - R_1$:

$$\left(\begin{array}{ccc|c}1&1&-1&2\\0&-1&3&3\\0&-2&3&1\end{array}\right)$$

$R_3 \leftarrow R_3 - 2R_2$:

$$\left(\begin{array}{ccc|c}1&1&-1&2\\0&-1&3&3\\0&0&-3&-5\end{array}\right)$$

Sostituzione all'indietro:
- $-3z = -5 \implies z = \frac{5}{3}$
- $-y + 3\cdot\frac{5}{3} = 3 \implies -y = -2 \implies y = 2$
- $x + 2 - \frac{5}{3} = 2 \implies x = \frac{5}{3}$

**Soluzione:** $(x,y,z) = \left(\frac{5}{3},\; 2,\; \frac{5}{3}\right)$

</details>

<details>
<summary>Esercizio 2 — Sistema con variabile libera</summary>

Trovare la soluzione generale di:

$$\begin{cases} x + 2y - z = 3 \\ 2x + 4y - 2z = 6 \end{cases}$$

**Soluzione:**

$R_2 \leftarrow R_2 - 2R_1$: $\left(\begin{array}{ccc|c}1&2&-1&3\\0&0&0&0\end{array}\right)$

Una sola equazione: $x = 3 - 2y + z$. Variabili libere: $y = s$, $z = t$.

**Soluzione:** $(3-2s+t,\; s,\; t)$ per $s, t \in \mathbb{R}$.

Infinità di tipo $\infty^2$ (due variabili libere).

</details>

<details>
<summary>Esercizio 3 — Verifica incompatibilità</summary>

Mostrare che il sistema è incompatibile:

$$\begin{cases} x - y + z = 2 \\ 2x - 2y + 2z = 5 \\ 3x - 3y + 3z = 7 \end{cases}$$

**Soluzione:**

$R_2 \leftarrow R_2 - 2R_1$: riga $[0\;0\;0\mid 1]$ — contraddizione, sistema incompatibile.

Il sistema ha tutte le equazioni proporzionali tra i coefficienti ma termini noti non proporzionali (la retta descrivibile dall'equazione $x-y+z=c$ non può avere $c=2,5/2,7/3$ contemporaneamente).

</details>

<details>
<summary>Esercizio 4 — Gauss-Jordan (RREF)</summary>

Portare in RREF e trovare la soluzione di:

$$\begin{cases} x + 2y = 5 \\ 3x + y = 10 \end{cases}$$

**Soluzione:**

$\left(\begin{array}{cc|c}1&2&5\\3&1&10\end{array}\right) \xrightarrow{R_2-3R_1} \left(\begin{array}{cc|c}1&2&5\\0&-5&-5\end{array}\right) \xrightarrow{-\frac{1}{5}R_2} \left(\begin{array}{cc|c}1&2&5\\0&1&1\end{array}\right) \xrightarrow{R_1-2R_2} \left(\begin{array}{cc|c}1&0&3\\0&1&1\end{array}\right)$

**Soluzione:** $x = 3$, $y = 1$.

</details>

<details>
<summary>Esercizio 5 — Sistema omogeneo</summary>

Trovare il nucleo (soluzione del sistema omogeneo) per:

$$A = \begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}$$

**Soluzione:**

$R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - R_1$:

$$\begin{pmatrix}1&2&3\\0&0&0\\0&-2&-2\end{pmatrix} \xrightarrow{R_2\leftrightarrow R_3} \begin{pmatrix}1&2&3\\0&-2&-2\\0&0&0\end{pmatrix}$$

Pivot in colonne 1 e 2. Variabile libera: $z = t$.

- Riga 2: $-2y - 2t = 0 \implies y = -t$
- Riga 1: $x + 2(-t) + 3t = 0 \implies x = -t$

$$\ker(A) = \text{span}\left\{\begin{pmatrix}-1\\-1\\1\end{pmatrix}\right\}$$

$\dim(\ker A) = 1 = n - \text{rk}(A) = 3 - 2 = 1$ ✓

</details>

<details>
<summary>Esercizio 6 — Sistema con parametro</summary>

Per quali valori di $k$ il sistema ha: (a) soluzione unica, (b) infinite soluzioni, (c) nessuna soluzione?

$$\begin{cases} x + y = 3 \\ x + ky = 5 \end{cases}$$

**Soluzione:**

$R_2 \leftarrow R_2 - R_1$: $\left(\begin{array}{cc|c}1&1&3\\0&k-1&2\end{array}\right)$

(a) **Soluzione unica:** $k-1 \neq 0 \implies k \neq 1$. Allora $y = \frac{2}{k-1}$, $x = 3 - y$.

(b) **Infinite soluzioni:** $k-1=0$ e $2=0$ — impossibile, non esiste $k$ per questo caso.

(c) **Nessuna soluzione:** $k=1$ (allora $k-1=0$ ma $2\neq 0$).

</details>

<details>
<summary>Esercizio 7 — Soluzione generale = particolare + omogenea</summary>

Trovare la soluzione generale di $A\mathbf{x} = \mathbf{b}$ per:

$$A = \begin{pmatrix}1&-1&2\\2&-2&4\end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix}3\\6\end{pmatrix}$$

**Soluzione:**

$R_2 \leftarrow R_2 - 2R_1$: $\left(\begin{array}{ccc|c}1&-1&2&3\\0&0&0&0\end{array}\right)$

Una equazione: $x_1 = 3 + x_2 - 2x_3$. Variabili libere: $x_2 = s$, $x_3 = t$.

Soluzione particolare (con $s=t=0$): $\mathbf{x}_p = (3, 0, 0)$.

Soluzione omogenea: $s(1,1,0) + t(-2,0,1)$.

**Soluzione generale:**

$$\mathbf{x} = \begin{pmatrix}3\\0\\0\end{pmatrix} + s\begin{pmatrix}1\\1\\0\end{pmatrix} + t\begin{pmatrix}-2\\0\\1\end{pmatrix}, \quad s,t\in\mathbb{R}$$

</details>

<details>
<summary>Esercizio 8 — Sistema 4×4</summary>

Risolvere:

$$\begin{cases} x_1 + x_2 + x_3 + x_4 = 4 \\ x_1 + 2x_2 + x_3 = 3 \\ x_1 + x_3 + x_4 = 3 \\ 2x_1 + x_2 + x_4 = 4 \end{cases}$$

**Soluzione:**

Matrice aumentata, eliminazione completa (ometto i passaggi intermedi):

$R_2 \leftarrow R_2-R_1$: $[0,1,0,-1\mid -1]$

$R_3 \leftarrow R_3-R_1$: $[0,0,0,0\mid -1]$ — **contraddizione!**

Il sistema è incompatibile.

(Verifica: le righe 1 e 3 differiscono solo per $x_2 - x_2 = 0$ a sinistra ma $4-3=1$ a destra — assurdo se $x_2$ contribuisce diversamente.)

</details>
