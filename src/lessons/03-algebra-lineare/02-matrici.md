---
id: algebra-02-matrici
titolo: "Matrici e operazioni"
materia: algebra-lineare
argomento: "Fondamenti"
modulo: "Vettori, matrici e sistemi lineari"
livello: universitario
slug: algebra-02-matrici

# legacy
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: "Matrici e operazioni"
title_en: "Matrices and operations"
level: blue
order: 2
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Matrici come applicazioni lineari; prodotto matriciale, trasposta, inversa"

prerequisiti:
  - algebra-01-vettori

collegamenti:
  - algebra-01-vettori
  - algebra-03-sistemi-lineari
  - algebra-07-trasformazioni-lineari
  - algebra-08-determinanti

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Matrici, operazioni, prodotto riga-colonna, trasposta, inversa, matrici quadrate notevoli"
    note: "appunti-prof: notazione a_{ij}, convenzioni d'esame; matrice come rappresentazione di un'applicazione lineare"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Il prodotto di matrici come composizione di applicazioni lineari; matrice di un'applicazione rispetto a basi"
    note: "impostazione: la matrice viene DOPO l'applicazione lineare; qui la anticipiamo come motivazione"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Prodotto matrice-vettore come combinazione delle colonne; matrice come trasformazione del piano; esempi (rotazione, shear)"
    note: "visualizzazione geometrica"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Prodotto di matrici, matrici speciali, involuzioni"
    note: "esempi supplementari"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-13"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Nella lezione precedente un vettore era un singolo oggetto: una freccia, una lista di numeri. La matrice nasce quando si vuole *trasformare* i vettori in modo organizzato — ruotarli, scalarli, mescolarli — o quando si vogliono impacchettare molti coefficienti insieme, come nei sistemi di equazioni. È il secondo protagonista dell'algebra lineare, e il modo giusto di guardarla cambia tutto.

Il salto concettuale di questa lezione è uno solo: **una matrice non è (solo) una tabella di numeri; è una trasformazione lineare**, una funzione che prende un vettore e ne restituisce un altro secondo una regola fissa. Il numero $3$ è, di per sé, statico; ma visto come «l'operazione: moltiplica per $3$» diventa dinamico. Allo stesso modo la matrice $\begin{psmallmatrix}0&-1\\1&0\end{psmallmatrix}$ è la tabella di quattro numeri, ma soprattutto è *l'operazione: ruota il piano di $90^\circ$*. Da questa doppia lettura — tabella e trasformazione — discende quasi tutto ciò che segue nel corso.

Perché servono? Tre motivi ricorrenti.

Primo, i **sistemi lineari**. Un sistema di $m$ equazioni in $n$ incognite si scrive in una riga sola come $A\mathbf{x} = \mathbf{b}$: la matrice $A$ raccoglie i coefficienti, e risolvere il sistema significa capire la trasformazione $\mathbf{x} \mapsto A\mathbf{x}$. È il tema della prossima lezione.

Secondo, le **trasformazioni dello spazio**. In grafica 3D ogni rotazione, scalatura o proiezione prospettica è una matrice; comporre due trasformazioni corrisponde a moltiplicare due matrici. Una GPU non fa altro, miliardi di volte al secondo.

Terzo, i **dati in blocco**. Un dataset è una matrice: righe = osservazioni, colonne = variabili. La regressione lineare, la PCA, ogni strato di una rete neurale sono moltiplicazioni di matrici. Quando si dice che allenare un modello linguistico costa miliardi di operazioni, si intende letteralmente miliardi di prodotti riga-per-colonna.

Anche in economia le matrici sono onnipresenti. Il **modello input-output di Leontief** descrive con una matrice quanta parte di ogni settore serve a produrre un'unità di ogni altro settore; le **matrici di transizione** delle catene di Markov descrivono come uno stato (quota di mercato, condizione occupazionale) evolve da un periodo all'altro. In entrambi i casi «applicare la matrice» significa «far passare il sistema al periodo successivo».

Teniamo dunque due immagini in parallelo per tutta la lezione: la matrice come griglia di numeri con cui si calcola, e la matrice come macchina che trasforma vettori. Le operazioni che definiamo adesso hanno senso pieno solo alla luce della seconda.

---

## 2. Teoria

### 2.1 Che cos'è una matrice

Una **matrice** $A$ di tipo $m \times n$ (si legge «$m$ per $n$») è una tabella rettangolare di numeri reali con $m$ righe e $n$ colonne:

$$A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}.$$

L'elemento nella riga $i$ e colonna $j$ si indica $a_{ij}$: il **primo indice è la riga, il secondo la colonna**. L'insieme delle matrici $m\times n$ reali si scrive $\mathbb{R}^{m\times n}$. Una matrice con $m = n$ si dice **quadrata**. Un vettore colonna di $\mathbb{R}^n$ è, in questa ottica, una matrice $n \times 1$; un vettore riga è $1 \times n$.

*Micro-esempio.* Nella matrice $A = \begin{psmallmatrix}5 & -2 & 0 \\ 1 & 3 & 4\end{psmallmatrix}$ (tipo $2\times 3$) si ha $a_{11} = 5$, $a_{13} = 0$, $a_{22} = 3$, $a_{23} = 4$.

### 2.2 Somma e moltiplicazione per scalare

Le prime due operazioni funzionano **elemento per elemento**, come per i vettori. La **somma** è definita solo tra matrici della *stessa dimensione*:

$$(A+B)_{ij} = a_{ij} + b_{ij}, \qquad (cA)_{ij} = c\,a_{ij}\ \ (c \in \mathbb{R}).$$

Con queste operazioni $\mathbb{R}^{m\times n}$ è a sua volta uno spazio vettoriale (i suoi «vettori» sono matrici): valgono le stesse otto proprietà viste nella lezione sui vettori, con la matrice nulla $O$ (tutti zeri) nel ruolo dell'elemento neutro. Nulla di sorprendente: una matrice $m\times n$ è, in fondo, un elenco di $mn$ numeri, e le operazioni sono quelle di $\mathbb{R}^{mn}$ scritte in forma rettangolare.

*Micro-esempio.* $2\begin{psmallmatrix}1&0\\-1&2\end{psmallmatrix} + \begin{psmallmatrix}3&4\\0&1\end{psmallmatrix} = \begin{psmallmatrix}2&0\\-2&4\end{psmallmatrix} + \begin{psmallmatrix}3&4\\0&1\end{psmallmatrix} = \begin{psmallmatrix}5&4\\-2&5\end{psmallmatrix}$.

### 2.3 Il prodotto matrice-vettore: due letture

Qui l'algebra lineare comincia a rivelare la sua struttura. Data $A \in \mathbb{R}^{m\times n}$ e un vettore $\mathbf{x} \in \mathbb{R}^n$, il prodotto $A\mathbf{x}$ è un vettore di $\mathbb{R}^m$. Ci sono due modi di calcolarlo, ed entrambi vanno posseduti.

**Lettura per righe (meccanica).** La $i$-esima componente di $A\mathbf{x}$ è il prodotto scalare della $i$-esima riga di $A$ con $\mathbf{x}$:

$$(A\mathbf{x})_i = \sum_{j=1}^n a_{ij}\, x_j = (\text{riga } i \text{ di } A)\cdot \mathbf{x}.$$

È la ricetta che si usa per calcolare a mano, e mostra che ogni prodotto matrice-vettore è un fascio di prodotti scalari.

**Lettura per colonne (concettuale).** Indicando con $\mathbf{a}_1, \dots, \mathbf{a}_n$ le colonne di $A$,

$$A\mathbf{x} = x_1\,\mathbf{a}_1 + x_2\,\mathbf{a}_2 + \dots + x_n\,\mathbf{a}_n.$$

Cioè: $A\mathbf{x}$ è la **combinazione lineare delle colonne di $A$**, con coefficienti le componenti di $\mathbf{x}$. Questa lettura è più profonda perché collega il prodotto al concetto-seme del corso (le combinazioni lineari) e spiega d'un colpo quali vettori $\mathbf{b}$ si possono ottenere come $A\mathbf{x}$: esattamente le combinazioni lineari delle colonne di $A$. È la ragione per cui la lezione sui sistemi $A\mathbf{x}=\mathbf{b}$ ruota attorno allo «spazio delle colonne».

Le due letture danno lo stesso risultato: sono due modi di riorganizzare la stessa somma $\sum_{i,j} a_{ij} x_j$.

*Micro-esempio.* Con $A = \begin{psmallmatrix}1&3\\2&4\end{psmallmatrix}$ e $\mathbf{x} = (2,-1)$: per colonne, $A\mathbf{x} = 2\begin{psmallmatrix}1\\2\end{psmallmatrix} - \begin{psmallmatrix}3\\4\end{psmallmatrix} = \begin{psmallmatrix}-1\\0\end{psmallmatrix}$. Per righe: prima componente $1\cdot 2 + 3(-1) = -1$, seconda $2\cdot 2 + 4(-1) = 0$. Coincidono.

### 2.4 La matrice è una trasformazione lineare

La lettura per colonne mostra che $\mathbf{x} \mapsto A\mathbf{x}$ è un'applicazione $\mathbb{R}^n \to \mathbb{R}^m$ con due proprietà, dette di **linearità**:

$$A(\mathbf{x} + \mathbf{y}) = A\mathbf{x} + A\mathbf{y}, \qquad A(c\,\mathbf{x}) = c\,(A\mathbf{x}).$$

Entrambe seguono direttamente dalla definizione. Un'applicazione con queste proprietà si chiama **trasformazione lineare**: rispetta somme e multipli, quindi rispetta ogni combinazione lineare. Vale anche il viceversa (lo vedremo nella lezione dedicata): ogni trasformazione lineare da $\mathbb{R}^n$ a $\mathbb{R}^m$ è data da una matrice, e le colonne di quella matrice sono le immagini dei versori della base canonica, $A\mathbf{e}_j = \mathbf{a}_j$. Detto altrimenti: *per conoscere una trasformazione lineare basta sapere dove manda i vettori base*, e quelle immagini sono le colonne della matrice.

Ecco, in modo interattivo, come una matrice deforma lo spazio. La matrice di *shear* $\begin{psmallmatrix}1 & k \\ 0 & 1\end{psmallmatrix}$ «inclina» il piano; osserva come trasforma la retta $y = x$ al crescere di $k$:

```slider
{"title":"La matrice di shear [[1,k],[0,1]] deforma il piano: immagine della retta y = x","fn":"x/(1+a)","fn2":"x","domain":[-3,3],"yDomain":[-3,3],"pname":"a","pmin":0,"pmax":3,"pdefault":0,"pstep":0.1,"plabel":"parametro di shear k","label1":"retta trasformata (pendenza 1/(1+k))","label2":"retta originale y = x"}
```

A $k=0$ la matrice è l'identità e la retta resta $y=x$. Al crescere di $k$ il piano si inclina e la retta si appiattisce verso l'asse orizzontale (pendenza $1/(1+k)$). La matrice non «contiene» la retta: la *muove*. È questa l'immagine da fissare.

*Micro-esempio.* La matrice di rotazione di $90^\circ$ antioraria è $R = \begin{psmallmatrix}0 & -1\\ 1 & 0\end{psmallmatrix}$. Le sue colonne dicono dove finiscono i versori base: $\mathbf{e}_1 = (1,0) \mapsto (0,1)$ e $\mathbf{e}_2 = (0,1) \mapsto (-1,0)$. Ogni altro vettore ruota di conseguenza: $(3,-2) \mapsto (2,3)$.

### 2.5 Il prodotto di matrici è composizione

Se applico prima la trasformazione $B$ e poi la trasformazione $A$, ottengo una nuova trasformazione. La matrice che la rappresenta è, per definizione, il **prodotto** $AB$. Da qui la regola di calcolo. Se $A \in \mathbb{R}^{m\times k}$ e $B \in \mathbb{R}^{k\times n}$ (le **dimensioni interne** devono coincidere), il prodotto $AB \in \mathbb{R}^{m\times n}$ ha elementi

$$(AB)_{ij} = \sum_{\ell=1}^k a_{i\ell}\, b_{\ell j} = (\text{riga } i \text{ di } A)\cdot(\text{colonna } j \text{ di } B).$$

La regola dimensionale in sintesi: $\underbrace{A}_{m\times k}\ \underbrace{B}_{k\times n} = \underbrace{C}_{m\times n}$; le due dimensioni interne ($k$) devono combaciare e spariscono, quelle esterne sopravvivono.

Che il prodotto *sia* la composizione lo cattura l'identità $(AB)\mathbf{x} = A(B\mathbf{x})$: applicare $AB$ a $\mathbf{x}$ equivale a trasformare prima con $B$, poi con $A$ (lo dimostriamo in §3.4). Questa è la ragione dietro due fatti che a prima vista sorprendono:

**Il prodotto non è commutativo:** in generale $AB \neq BA$, e spesso uno solo dei due prodotti è nemmeno definito. È naturale: ruotare e poi riflettere non dà lo stesso risultato di riflettere e poi ruotare. L'ordine delle trasformazioni conta.

**Il prodotto può annullarsi senza fattori nulli:** esistono $A, B \neq O$ con $AB = O$. Due trasformazioni non banali possono comporre nella trasformazione che manda tutto a zero (per esempio proiettare su una retta e poi su una perpendicolare).

*Micro-esempio.* Con $A = \begin{psmallmatrix}1&2\\3&4\end{psmallmatrix}$ e $B = \begin{psmallmatrix}0&1\\1&0\end{psmallmatrix}$ (lo scambio di colonne/righe): $AB = \begin{psmallmatrix}2&1\\4&3\end{psmallmatrix}$ ma $BA = \begin{psmallmatrix}3&4\\1&2\end{psmallmatrix}$. Diversi.

```checkpoint
[domanda] Siano $A$ di tipo $3\times 2$ e $B$ di tipo $2\times 4$. Il prodotto $AB$ è definito? Di che tipo? E $BA$?
[risposta] $AB$: dimensioni interne $2 = 2$, quindi è definito ed è di tipo $3\times 4$. $BA$: le dimensioni interne sarebbero $4$ (colonne di $B$) e $3$ (righe di $A$), che non coincidono, quindi $BA$ non è definito. Conferma che il prodotto dipende dall'ordine.
```

### 2.6 Trasposta

La **trasposta** $A^\top$ di una matrice $m\times n$ è la matrice $n\times m$ ottenuta scambiando il ruolo di righe e colonne:

$$(A^\top)_{ij} = a_{ji}.$$

Le sue proprietà elementari: $(A^\top)^\top = A$, $\ (A+B)^\top = A^\top + B^\top$, $\ (cA)^\top = c\,A^\top$, e la regola con l'ordine invertito $(AB)^\top = B^\top A^\top$ (dimostrata in §3.1). Una matrice quadrata con $A^\top = A$ si dice **simmetrica** ($a_{ij} = a_{ji}$): sono le matrici centrali del modulo finale del corso (teorema spettrale, forme quadratiche). Una con $A^\top = -A$ si dice **antisimmetrica**. La trasposta compare ovunque appaia il prodotto scalare: infatti $\mathbf{u}\cdot\mathbf{v} = \mathbf{u}^\top\mathbf{v}$, il prodotto scalare scritto come prodotto riga-per-colonna.

*Micro-esempio.* Per ogni matrice $A$, il prodotto $A A^\top$ è simmetrico: $(A A^\top)^\top = (A^\top)^\top A^\top = A A^\top$. Con $A = \begin{psmallmatrix}1&2&3\\4&5&6\end{psmallmatrix}$ si ottiene $A A^\top = \begin{psmallmatrix}14&32\\32&77\end{psmallmatrix}$, simmetrica.

### 2.7 Matrice identità e inversa

La **matrice identità** $I_n$ è la matrice quadrata con $1$ sulla diagonale e $0$ altrove; rappresenta la trasformazione «non fare nulla» e soddisfa $AI = IA = A$ per ogni $A$ compatibile. È l'analogo del numero $1$.

Una matrice quadrata $A \in \mathbb{R}^{n\times n}$ è **invertibile** (o non singolare) se esiste una matrice $A^{-1}$ tale che

$$A A^{-1} = A^{-1} A = I_n.$$

L'inversa rappresenta la trasformazione che *annulla* quella di $A$: se $A$ ruota di $90^\circ$, $A^{-1}$ ruota di $-90^\circ$. Quando esiste è **unica** (lo proviamo in §3.2). Non tutte le matrici quadrate sono invertibili: quelle che «schiacciano» lo spazio perdendo informazione (per esempio una proiezione) non si possono annullare. Per il caso $2\times 2$ esiste una formula esplicita:

$$A = \begin{pmatrix}a&b\\c&d\end{pmatrix} \ \Longrightarrow\ A^{-1} = \frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix},$$

valida quando il numero $\det(A) = ad - bc$ è diverso da zero. Quel numero, il **determinante**, misura di quanto la trasformazione dilata le aree; quando è nullo la matrice schiaccia il piano su una retta e l'inversa non può esistere. È il tema di una lezione dedicata.

*Micro-esempio.* Per $A = \begin{psmallmatrix}2&1\\5&3\end{psmallmatrix}$: $\det(A) = 6-5 = 1 \neq 0$, quindi $A^{-1} = \begin{psmallmatrix}3&-1\\-5&2\end{psmallmatrix}$. Controllo: $A A^{-1} = I_2$.

```checkpoint
[domanda] Sappiamo che $A$ e $B$ sono invertibili $n\times n$. Qual è l'inversa di $AB$? È $A^{-1}B^{-1}$?
[risposta] No: $(AB)^{-1} = B^{-1}A^{-1}$, con l'ordine invertito. Verifica: $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = A I A^{-1} = A A^{-1} = I$. Intuizione «vestizione»: per annullare «prima B poi A» si annulla «prima A poi B», nell'ordine inverso — come togliersi prima le scarpe (ultime indossate) e poi i calzini.
```

### 2.8 Alcune matrici quadrate notevoli

| Tipo | Definizione | Ruolo |
| --- | --- | --- |
| Identità $I_n$ | $a_{ii}=1$, $a_{ij}=0$ per $i\neq j$ | elemento neutro del prodotto |
| Nulla $O$ | $a_{ij}=0$ per ogni $i,j$ | elemento neutro della somma |
| Diagonale | $a_{ij}=0$ per $i\neq j$ | scala ogni asse indipendentemente |
| Triangolare superiore | $a_{ij}=0$ per $i>j$ | forma d'arrivo dell'eliminazione di Gauss |
| Triangolare inferiore | $a_{ij}=0$ per $i<j$ | fattore della decomposizione LU |
| Simmetrica | $A^\top = A$ | forme quadratiche, teorema spettrale |
| Antisimmetrica | $A^\top = -A$ | diagonale nulla; rotazioni infinitesime |

---

## 3. Dimostrazioni

### 3.1 La trasposta di un prodotto inverte l'ordine

**Enunciato.** Per $A \in \mathbb{R}^{m\times k}$ e $B \in \mathbb{R}^{k\times n}$ vale $(AB)^\top = B^\top A^\top$.

**Dimostrazione.** Poniamo $C = AB \in \mathbb{R}^{m\times n}$, così $C^\top \in \mathbb{R}^{n\times m}$. Dobbiamo mostrare che $C^\top$ e $B^\top A^\top$ hanno lo stesso elemento in ogni posizione $(i,j)$.

Per la definizione di trasposta e poi di prodotto,
$$(C^\top)_{ij} = C_{ji} = (AB)_{ji} = \sum_{\ell=1}^k a_{j\ell}\, b_{\ell i}.$$

D'altra parte $B^\top \in \mathbb{R}^{n\times k}$ e $A^\top \in \mathbb{R}^{k\times m}$, dunque $B^\top A^\top \in \mathbb{R}^{n\times m}$ (le dimensioni tornano) e
$$(B^\top A^\top)_{ij} = \sum_{\ell=1}^k (B^\top)_{i\ell}\,(A^\top)_{\ell j} = \sum_{\ell=1}^k b_{\ell i}\, a_{j\ell}.$$

I due addendi $a_{j\ell} b_{\ell i}$ e $b_{\ell i} a_{j\ell}$ sono uguali perché il prodotto di numeri reali è commutativo. Quindi le due somme coincidono termine a termine, e $(C^\top)_{ij} = (B^\top A^\top)_{ij}$ per ogni $i, j$. Le due matrici sono perciò uguali. $\qquad\blacksquare$

La regola dell'ordine invertito non è un capriccio notazionale: rispecchia che trasporre «rovescia» la trasformazione, e comporre al rovescio richiede di scambiare l'ordine dei fattori — lo stesso schema dell'inversa in §3.3.

### 3.2 L'inversa, quando esiste, è unica

**Enunciato.** Se $A \in \mathbb{R}^{n\times n}$ ammette un'inversa, questa è unica.

**Dimostrazione.** Supponiamo che $B$ e $C$ siano entrambe inverse di $A$, cioè $AB = BA = I$ e $AC = CA = I$. Consideriamo il prodotto $B A C$ e calcoliamolo in due modi, sfruttando l'associatività del prodotto (valida sempre, dimostrata in §3.4):

$$B(AC) = B\,I = B, \qquad (BA)C = I\,C = C.$$

Poiché $B(AC) = (BA)C$ è lo stesso prodotto $BAC$, i due risultati coincidono: $B = C$. Le due presunte inverse sono in realtà la stessa matrice. $\qquad\blacksquare$

Questa unicità giustifica la notazione $A^{-1}$: «l'» inversa, con l'articolo determinativo, ha senso solo perché ne esiste al più una.

### 3.3 L'inversa di un prodotto inverte l'ordine

**Enunciato.** Se $A, B \in \mathbb{R}^{n\times n}$ sono invertibili, allora $AB$ è invertibile e $(AB)^{-1} = B^{-1}A^{-1}$.

**Dimostrazione.** Basta verificare che $B^{-1}A^{-1}$ funziona da inversa di $AB$, cioè che il prodotto nei due ordini dà $I$. Usando l'associatività:

$$(AB)(B^{-1}A^{-1}) = A\,(B B^{-1})\,A^{-1} = A\,I\,A^{-1} = A A^{-1} = I,$$
$$(B^{-1}A^{-1})(AB) = B^{-1}\,(A^{-1} A)\,B = B^{-1}\,I\,B = B^{-1} B = I.$$

Poiché $B^{-1}A^{-1}$ soddisfa entrambe le condizioni, ed essendo l'inversa unica (§3.2), è *l'*inversa di $AB$. $\qquad\blacksquare$

### 3.4 Il prodotto rappresenta la composizione

<details class="dim-tecnica">
<summary>Dimostrazione di $(AB)\mathbf{x} = A(B\mathbf{x})$ e dell'associatività</summary>

Vogliamo mostrare che applicare la matrice $AB$ al vettore $\mathbf{x}$ dà lo stesso risultato di applicare prima $B$ e poi $A$. Siano $A \in \mathbb{R}^{m\times k}$, $B \in \mathbb{R}^{k\times n}$, $\mathbf{x} \in \mathbb{R}^n$.

Calcoliamo la componente $i$-esima di $A(B\mathbf{x})$. Poniamo $\mathbf{y} = B\mathbf{x}$, con $y_\ell = \sum_{j=1}^n b_{\ell j} x_j$. Allora
$$\big(A(B\mathbf{x})\big)_i = (A\mathbf{y})_i = \sum_{\ell=1}^k a_{i\ell}\, y_\ell = \sum_{\ell=1}^k a_{i\ell}\left(\sum_{j=1}^n b_{\ell j} x_j\right) = \sum_{\ell=1}^k \sum_{j=1}^n a_{i\ell}\, b_{\ell j}\, x_j.$$

Scambiando l'ordine delle due somme finite (lecito perché sono somme di un numero finito di termini) e raccogliendo $x_j$:
$$= \sum_{j=1}^n \left(\sum_{\ell=1}^k a_{i\ell}\, b_{\ell j}\right) x_j = \sum_{j=1}^n (AB)_{ij}\, x_j = \big((AB)\mathbf{x}\big)_i.$$

Le due espressioni coincidono componente per componente, dunque $(AB)\mathbf{x} = A(B\mathbf{x})$. Questo è ciò che significa dire che *il prodotto di matrici è la composizione delle trasformazioni*.

L'**associatività** $(AB)C = A(BC)$ è la stessa identità letta con $C$ al posto del vettore $\mathbf{x}$, colonna per colonna: applicando entrambi i membri a un generico vettore $\mathbf{x}$ e usando due volte quanto appena dimostrato,
$$\big((AB)C\big)\mathbf{x} = (AB)(C\mathbf{x}) = A\big(B(C\mathbf{x})\big) = A\big((BC)\mathbf{x}\big) = \big(A(BC)\big)\mathbf{x},$$
e poiché ciò vale per ogni $\mathbf{x}$, le due matrici $(AB)C$ e $A(BC)$ coincidono. La non commutatività e l'associatività convivono senza contraddizione: l'ordine dei fattori conta, ma il modo di raggrupparli no. $\qquad\blacksquare$

</details>

---

## 4. Esempi

**Esempio 1 (introduttivo) — Prodotto $2\times 2$ e non commutatività.** Con $A = \begin{psmallmatrix}2&-1\\0&3\end{psmallmatrix}$, $B = \begin{psmallmatrix}1&4\\2&-1\end{psmallmatrix}$:
$$AB = \begin{pmatrix}0 & 9\\ 6 & -3\end{pmatrix}, \qquad BA = \begin{pmatrix}2 & 11\\ 4 & -5\end{pmatrix}.$$
I due risultati sono diversi: $AB \neq BA$.

**Esempio 2 (introduttivo) — Combinazione di colonne.** Con $A = \begin{psmallmatrix}3&-1&2\\1&0&4\\2&1&-1\end{psmallmatrix}$ e $\mathbf{x} = (1,2,-1)$, la lettura per colonne dà
$$A\mathbf{x} = 1\begin{psmallmatrix}3\\1\\2\end{psmallmatrix} + 2\begin{psmallmatrix}-1\\0\\1\end{psmallmatrix} - \begin{psmallmatrix}2\\4\\-1\end{psmallmatrix} = \begin{psmallmatrix}-1\\-3\\5\end{psmallmatrix}.$$

**Esempio 3 (intermedio) — Prodotto tra matrici rettangolari.** Con $A$ di tipo $2\times 3$ e $B$ di tipo $3\times 2$, $AB$ è $2\times 2$:
$$A = \begin{pmatrix}1&2&3\\4&5&6\end{pmatrix},\ B = \begin{pmatrix}7&8\\9&10\\11&12\end{pmatrix} \ \Rightarrow\ AB = \begin{pmatrix}58&64\\139&154\end{pmatrix}.$$
Il prodotto $BA$ esisterebbe anch'esso ma sarebbe $3\times 3$: dimensioni diverse, dunque $AB$ e $BA$ non sono neppure confrontabili.

**Esempio 4 (intermedio) — Inversa $2\times 2$ e verifica.** Per $A = \begin{psmallmatrix}3&2\\7&5\end{psmallmatrix}$: $\det(A) = 15 - 14 = 1$, quindi $A^{-1} = \begin{psmallmatrix}5&-2\\-7&3\end{psmallmatrix}$. Il prodotto $A A^{-1}$ dà $\begin{psmallmatrix}15-14 & -6+6\\ 35-35 & -14+15\end{psmallmatrix} = I_2$.

**Esempio 5 (intermedio) — Matrice singolare.** Per $A = \begin{psmallmatrix}1&2\\2&4\end{psmallmatrix}$: $\det(A) = 4 - 4 = 0$. La seconda riga è il doppio della prima; come trasformazione, $A$ schiaccia tutto il piano sulla retta generata dalla colonna $(1,2)$. Perdendo una dimensione non si può tornare indietro: $A^{-1}$ non esiste.

**Esempio 6 (avanzato) — Prodotto nullo senza fattori nulli.** Con $A = B = \begin{psmallmatrix}1&1\\-1&-1\end{psmallmatrix}$: $A^2 = \begin{psmallmatrix}1-1 & 1-1\\ -1+1 & -1+1\end{psmallmatrix} = O$. Nessuno dei fattori è la matrice nulla, eppure il prodotto lo è. Come trasformazioni, $A$ proietta su una retta lungo una direzione che $A$ stessa manda a zero: applicarla due volte annulla tutto.

**Esempio 7 (avanzato) — Le rotazioni si sommano.** La matrice di rotazione di angolo $\theta$ è $R_\theta = \begin{psmallmatrix}\cos\theta & -\sin\theta\\ \sin\theta & \cos\theta\end{psmallmatrix}$. Moltiplicando $R_\theta R_\phi$ e usando le formule di addizione trigonometriche si ottiene $R_{\theta+\phi}$: comporre due rotazioni dà la rotazione con gli angoli sommati. Qui, eccezionalmente, $R_\theta R_\phi = R_\phi R_\theta$: le rotazioni del piano commutano tra loro (ma non con le riflessioni).

**Esempio 8 (applicativo, economia) — Catena di Markov.** In un mercato con due imprese, ogni mese il $90\%$ dei clienti di A resta con A e il $10\%$ passa a B; per B, l'$80\%$ resta e il $20\%$ passa ad A. La **matrice di transizione** è $P = \begin{psmallmatrix}0.9 & 0.2\\ 0.1 & 0.8\end{psmallmatrix}$ (colonna = stato di partenza). Se oggi le quote sono $\mathbf{s}_0 = (0.5, 0.5)$, il mese prossimo saranno
$$\mathbf{s}_1 = P\mathbf{s}_0 = \begin{psmallmatrix}0.9\cdot 0.5 + 0.2\cdot 0.5\\ 0.1\cdot 0.5 + 0.8\cdot 0.5\end{psmallmatrix} = \begin{psmallmatrix}0.55\\ 0.45\end{psmallmatrix}.$$
Dopo $n$ mesi le quote sono $P^n \mathbf{s}_0$: iterare la trasformazione è elevare la matrice a potenza. Sapere verso cosa converge $P^n$ è un problema di autovalori, che affronteremo più avanti.

---

## 5. Collegamenti e riepilogo

**Dove porta questa lezione.** La forma compatta $A\mathbf{x} = \mathbf{b}$ e la lettura per colonne aprono la prossima lezione (Sistemi lineari e metodo di Gauss): risolvere il sistema significa chiedersi se $\mathbf{b}$ è combinazione lineare delle colonne di $A$, e con quali coefficienti. La struttura triangolare menzionata in §2.8 è la forma d'arrivo dell'eliminazione di Gauss e il mattone della decomposizione LU. La visione «matrice = trasformazione lineare» sarà formalizzata nella lezione sulle trasformazioni lineari, dove le colonne di $A$ si riveleranno le immagini dei vettori base. Il determinante $ad-bc$, qui apparso nella formula dell'inversa, avrà la sua lezione. E le matrici simmetriche di §2.6 sono le protagoniste del modulo finale (teorema spettrale, forme quadratiche), quello che sblocca l'ottimizzazione dell'analisi.

**Collegamenti con le altre materie.** In statistica, un dataset è una matrice $X$ (righe = osservazioni, colonne = variabili), la matrice di covarianza è $\tfrac{1}{n}X^\top X$ (di nuovo una trasposta per un prodotto), e la regressione risolve $X^\top X\,\boldsymbol\beta = X^\top\mathbf{y}$. In economia, il modello input-output di Leontief e le catene di Markov usano matrici come «operatori di un periodo». In informatica, ogni strato di una rete neurale è una moltiplicazione matrice-vettore, e la grafica 3D è composizione di matrici di trasformazione.

**Idee da portare via.**

| Operazione | Notazione | Regola dimensionale | Commutativa? |
| --- | --- | --- | --- |
| Somma | $A+B$ | $m\times n$ con $m\times n$ | sì |
| Scalare | $cA$ | invariata | — |
| Prodotto | $AB$ | $(m\times k)(k\times n) = m\times n$ | no |
| Trasposta | $A^\top$ | $m\times n \to n\times m$ | — |
| Inversa | $A^{-1}$ | solo quadrate non singolari | — |

Regole chiave: $(AB)^\top = B^\top A^\top$; $\ (AB)^{-1} = B^{-1}A^{-1}$; $\ (AB)C = A(BC)$ (associativa) ma $AB \neq BA$ in generale; $\ A A^{-1} = A^{-1}A = I$; per le $2\times 2$, $A^{-1} = \tfrac{1}{ad-bc}\begin{psmallmatrix}d&-b\\-c&a\end{psmallmatrix}$.

**Errori comuni da evitare.** Scambiare l'ordine nel prodotto: $AB \neq BA$ (e a volte solo uno è definito). Sommare matrici di dimensioni diverse. Sbagliare la condizione dimensionale del prodotto (devono combaciare le colonne di $A$ con le righe di $B$). Scrivere $(AB)^{-1} = A^{-1}B^{-1}$ o $(AB)^\top = A^\top B^\top$: l'ordine si inverte. Dedurre da $AB = O$ che uno dei due sia nullo (falso per le matrici). Cercare l'inversa di una matrice con determinante nullo.

---

## 6. Esercizi

**E1 (introduttivo).** Calcola $AB$ e $BA$ per $A = \begin{psmallmatrix}2&-1\\0&3\end{psmallmatrix}$, $B = \begin{psmallmatrix}1&4\\2&-1\end{psmallmatrix}$ e verifica che differiscono.

<details class="dim-tecnica"><summary>Soluzione E1</summary>

$AB = \begin{psmallmatrix}2\cdot 1 - 1\cdot 2 & 2\cdot 4 - 1\cdot(-1)\\ 0\cdot 1 + 3\cdot 2 & 0\cdot 4 + 3\cdot(-1)\end{psmallmatrix} = \begin{psmallmatrix}0 & 9\\ 6 & -3\end{psmallmatrix}$; $\ BA = \begin{psmallmatrix}1\cdot 2 + 4\cdot 0 & 1\cdot(-1) + 4\cdot 3\\ 2\cdot 2 - 1\cdot 0 & 2\cdot(-1) - 1\cdot 3\end{psmallmatrix} = \begin{psmallmatrix}2 & 11\\ 4 & -5\end{psmallmatrix}$. Diversi.

</details>

**E2 (introduttivo).** Calcola $A\mathbf{x}$ leggendo il prodotto come combinazione delle colonne, per $A = \begin{psmallmatrix}3&-1&2\\1&0&4\\2&1&-1\end{psmallmatrix}$ e $\mathbf{x} = (1,2,-1)$.

<details class="dim-tecnica"><summary>Soluzione E2</summary>

$A\mathbf{x} = 1(3,1,2) + 2(-1,0,1) - (2,4,-1) = (3-2-2,\ 1+0-4,\ 2+2+1) = (-1,-3,5)$.

</details>

**E3 (introduttivo).** Trova l'inversa di $A = \begin{psmallmatrix}3&2\\7&5\end{psmallmatrix}$ e verificala.

<details class="dim-tecnica"><summary>Soluzione E3</summary>

$\det(A) = 15 - 14 = 1$, quindi $A^{-1} = \begin{psmallmatrix}5&-2\\-7&3\end{psmallmatrix}$. Verifica: $A A^{-1} = \begin{psmallmatrix}15-14 & -6+6\\ 35-35 & -14+15\end{psmallmatrix} = I_2$.

</details>

**E4 (intermedio).** Determina per quale valore di $k$ la matrice $A = \begin{psmallmatrix}k&2\\3&6\end{psmallmatrix}$ è singolare, e interpreta il risultato come trasformazione.

<details class="dim-tecnica"><summary>Soluzione E4</summary>

$\det(A) = 6k - 6 = 0 \iff k = 1$. Per $k=1$ le righe $(1,2)$ e $(3,6) = 3(1,2)$ sono proporzionali: la matrice ha rango $1$ e schiaccia il piano sulla retta generata dalle sue colonne, perciò non è invertibile.

</details>

**E5 (intermedio).** Calcola $A^3$ per la matrice di shear $A = \begin{psmallmatrix}1&1\\0&1\end{psmallmatrix}$ e congettura $A^n$.

<details class="dim-tecnica"><summary>Soluzione E5</summary>

$A^2 = \begin{psmallmatrix}1&2\\0&1\end{psmallmatrix}$, $A^3 = A^2 A = \begin{psmallmatrix}1&3\\0&1\end{psmallmatrix}$. In generale $A^n = \begin{psmallmatrix}1&n\\0&1\end{psmallmatrix}$: applicare $n$ volte lo shear somma gli scorrimenti (si dimostra per induzione).

</details>

**E6 (intermedio).** Verifica che ogni matrice della forma $A A^\top$ è simmetrica e calcolala per $A = \begin{psmallmatrix}1&2&3\\4&5&6\end{psmallmatrix}$.

<details class="dim-tecnica"><summary>Soluzione E6</summary>

$(A A^\top)^\top = (A^\top)^\top A^\top = A A^\top$, quindi è simmetrica. Numericamente: $A A^\top = \begin{psmallmatrix}1+4+9 & 4+10+18\\ 4+10+18 & 16+25+36\end{psmallmatrix} = \begin{psmallmatrix}14 & 32\\ 32 & 77\end{psmallmatrix}$, e l'elemento fuori diagonale coincide ($32 = 32$).

</details>

**E7 (avanzato).** Dimostra che $R_\theta R_\phi = R_{\theta+\phi}$ per le matrici di rotazione $R_\theta = \begin{psmallmatrix}\cos\theta & -\sin\theta\\ \sin\theta & \cos\theta\end{psmallmatrix}$.

<details class="dim-tecnica"><summary>Soluzione E7</summary>

Moltiplicando ed applicando le formule di addizione: elemento $(1,1)$: $\cos\theta\cos\phi - \sin\theta\sin\phi = \cos(\theta+\phi)$; $(2,1)$: $\sin\theta\cos\phi + \cos\theta\sin\phi = \sin(\theta+\phi)$; $(1,2)$: $-(\cos\theta\sin\phi + \sin\theta\cos\phi) = -\sin(\theta+\phi)$; $(2,2)$: $\cos(\theta+\phi)$. Il risultato è $R_{\theta+\phi}$: comporre due rotazioni somma gli angoli.

</details>

**E8 (avanzato).** Ogni matrice quadrata si decompone in modo unico come somma di una simmetrica e di una antisimmetrica. Trova la decomposizione di $A = \begin{psmallmatrix}1&3\\-1&2\end{psmallmatrix}$.

<details class="dim-tecnica"><summary>Soluzione E8</summary>

Parte simmetrica $S = \tfrac12(A + A^\top)$ e antisimmetrica $K = \tfrac12(A - A^\top)$. Con $A^\top = \begin{psmallmatrix}1&-1\\3&2\end{psmallmatrix}$: $S = \tfrac12\begin{psmallmatrix}2&2\\2&4\end{psmallmatrix} = \begin{psmallmatrix}1&1\\1&2\end{psmallmatrix}$, $K = \tfrac12\begin{psmallmatrix}0&4\\-4&0\end{psmallmatrix} = \begin{psmallmatrix}0&2\\-2&0\end{psmallmatrix}$. Verifica: $S + K = A$. L'unicità segue dal fatto che $S$ è forzatamente $\tfrac12(A+A^\top)$ (trasponendo $A = S+K$ si ottiene $A^\top = S - K$, e si risolve).

</details>

**E9 (avanzato).** Trova due matrici $2\times 2$ non nulle $A, B$ con $AB = O$ ma $BA \neq O$.

<details class="dim-tecnica"><summary>Soluzione E9</summary>

Prendi $A = \begin{psmallmatrix}1&0\\0&0\end{psmallmatrix}$ (proiezione sull'asse $x$) e $B = \begin{psmallmatrix}0&0\\1&0\end{psmallmatrix}$. Allora $AB = \begin{psmallmatrix}0&0\\0&0\end{psmallmatrix} = O$, mentre $BA = \begin{psmallmatrix}0&0\\1&0\end{psmallmatrix} \neq O$. Mostra insieme che il prodotto può annullarsi senza fattori nulli e che l'ordine conta.

</details>

**E10 (applicativo).** Con la matrice di transizione $P = \begin{psmallmatrix}0.9 & 0.2\\ 0.1 & 0.8\end{psmallmatrix}$ e stato iniziale $\mathbf{s}_0 = (0.5, 0.5)$, calcola $\mathbf{s}_1 = P\mathbf{s}_0$ e $\mathbf{s}_2 = P\mathbf{s}_1$. Che cosa noti sulla somma delle componenti?

<details class="dim-tecnica"><summary>Soluzione E10</summary>

$\mathbf{s}_1 = (0.9\cdot 0.5 + 0.2\cdot 0.5,\ 0.1\cdot 0.5 + 0.8\cdot 0.5) = (0.55, 0.45)$. $\mathbf{s}_2 = P\mathbf{s}_1 = (0.9\cdot 0.55 + 0.2\cdot 0.45,\ 0.1\cdot 0.55 + 0.8\cdot 0.45) = (0.585, 0.415)$. Le componenti sommano sempre a $1$: $P$ ha colonne che sommano a $1$ (matrice stocastica), quindi conserva la massa totale di probabilità. Le quote stanno lentamente convergendo verso uno stato di equilibrio.

</details>
