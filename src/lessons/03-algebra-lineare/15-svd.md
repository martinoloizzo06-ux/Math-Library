---
id: algebra-15-svd
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: Decomposizione ai valori singolari (SVD)
title_en: Singular Value Decomposition (SVD)
level: blue
order: 15
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 7 — SVD"
---

## 1. Intuizione

Ogni matrice rettangolare $A$ fa tre cose: ruota, scala, ruota di nuovo. Questa è l'intuizione fondamentale della decomposizione ai valori singolari (SVD). Qualunque sia la forma della matrice — quadrata, rettangolare, singolare, di rango basso — c'è sempre un modo per scomporla in questi tre movimenti elementari.

Pensa a una fotocamera che comprime un'immagine. Un'immagine di $1000 \times 1000$ pixel è una matrice con un milione di numeri. Ma la maggior parte delle immagini naturali hanno struttura: non tutti i pixel sono indipendenti. La SVD trova questa struttura. Il primo valore singolare $\sigma_1$ cattura il "pezzo più importante" dell'immagine, $\sigma_2$ il secondo, e così via. Tenendo solo i primi $k$ valori singolari ottieni un'approssimazione fedele dell'immagine originale con una frazione dello spazio di memoria.

La diagonalizzazione $A = P\Lambda P^{-1}$ funziona solo per matrici quadrate diagonalizzabili, e richiede la stessa base sia per l'input che per l'output. La SVD $A = U\Sigma V^T$ è più generale: usa due basi distinte — una per l'output ($U$), una per l'input ($V$) — e funziona per qualsiasi matrice, anche rettangolare, anche singolare, anche di rango 1.

I **valori singolari** $\sigma_i$ (la diagonale di $\Sigma$) misurano quanto $A$ "allunga" lo spazio in ciascuna direzione. Il più grande, $\sigma_1$, misura il massimo allungamento possibile: $\sigma_1 = \max_{\|\mathbf{x}\|=1}\|A\mathbf{x}\|$. La loro distribuzione rivela tutto sulla struttura geometrica della trasformazione.

La SVD è uno degli strumenti più potenti dell'algebra lineare applicata: riduzione della dimensionalità, risoluzione di sistemi sovradeterminati, analisi del rumore, compressione, machine learning — è ovunque.

## 2. Prerequisiti

- Autovalori e autovettori: $A\mathbf{v} = \lambda\mathbf{v}$
- Teorema spettrale per matrici simmetriche: $A = Q\Lambda Q^T$
- Matrice ortogonale: $Q^T Q = I$
- Norma di un vettore: $\|\mathbf{x}\| = \sqrt{\mathbf{x}^T\mathbf{x}}$
- Prodotto matriciale e trasposta
- Rango di una matrice

## 3. Teoria

### Definizione della SVD

**Teorema (SVD).** Ogni matrice $A \in \mathbb{R}^{m \times n}$ di rango $r$ ammette la decomposizione:

$$A = U \Sigma V^T$$

dove:
- $U \in \mathbb{R}^{m \times m}$: matrice **ortogonale** ($U^T U = I_m$); le colonne $\mathbf{u}_1, \ldots, \mathbf{u}_m$ sono i **vettori singolari sinistri**.
- $\Sigma \in \mathbb{R}^{m \times n}$: matrice "rettangolare diagonale" con $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0 = \sigma_{r+1} = \cdots$ sulla diagonale; i $\sigma_i$ sono i **valori singolari**.
- $V \in \mathbb{R}^{n \times n}$: matrice **ortogonale** ($V^T V = I_n$); le colonne $\mathbf{v}_1, \ldots, \mathbf{v}_n$ sono i **vettori singolari destri**.

**Significato geometrico.** La trasformazione $A$ può essere letta come:

$$A\mathbf{x} = U\Sigma V^T \mathbf{x}$$

1. $V^T$ ruota/riflette l'input (cambia base nella sorgente).
2. $\Sigma$ scala ciascuna componente di $\sigma_i$ (e annulla le componenti nulle).
3. $U$ ruota/riflette l'output (cambia base nel codominio).

### Calcolo della SVD

**Passo 1 — Calcolare $A^T A$.**

$A^T A \in \mathbb{R}^{n \times n}$ è simmetrica e semidefinita positiva (autovalori $\geq 0$). I suoi autovalori non negativi sono $\lambda_1 \geq \cdots \geq \lambda_r > 0 = \lambda_{r+1} = \cdots = \lambda_n$.

**Passo 2 — Valori singolari.**

$$\sigma_i = \sqrt{\lambda_i}, \quad i = 1, \ldots, r$$

**Passo 3 — Vettori singolari destri.**

$\mathbf{v}_1, \ldots, \mathbf{v}_n$: base ortonormale di autovettori di $A^T A$, ordinati per autovalori decrescenti. Le colonne di $V$ sono questi vettori.

**Passo 4 — Vettori singolari sinistri.**

Per $i = 1, \ldots, r$:

$$\mathbf{u}_i = \frac{A\mathbf{v}_i}{\sigma_i}$$

Si verifica che $\|\mathbf{u}_i\| = 1$ e che $\mathbf{u}_i \perp \mathbf{u}_j$ per $i \neq j$. Si completa $\mathbf{u}_{r+1}, \ldots, \mathbf{u}_m$ a una base ortonormale di $\mathbb{R}^m$ (arbitraria nello spazio nullo sinistro di $A$).

**Passo 5 — Costruire $\Sigma$.**

$\Sigma$ ha $\sigma_i$ sulle prime $r$ posizioni diagonali, zeri altrove.

### Relazione tra SVD e autovettori

**$A^T A = V \Sigma^T \Sigma V^T$**: gli autovettori di $A^T A$ sono i vettori singolari destri, gli autovalori sono $\sigma_i^2$.

**$A A^T = U \Sigma \Sigma^T U^T$**: gli autovettori di $A A^T$ sono i vettori singolari sinistri, gli autovalori sono ancora $\sigma_i^2$ (più eventuali zeri aggiuntivi se $m > n$).

### Struttura per sottospazi fondamentali

La SVD rivela i quattro sottospazi fondamentali di $A$:
- **Spazio delle colonne** (immagine): span$(\mathbf{u}_1, \ldots, \mathbf{u}_r)$.
- **Spazio nullo sinistro**: span$(\mathbf{u}_{r+1}, \ldots, \mathbf{u}_m)$.
- **Spazio delle righe**: span$(\mathbf{v}_1, \ldots, \mathbf{v}_r)$.
- **Spazio nullo**: span$(\mathbf{v}_{r+1}, \ldots, \mathbf{v}_n)$.

### Decomposizione di rango basso

La SVD si può scrivere come somma di matrici di rango 1:

$$A = \sum_{i=1}^{r} \sigma_i \mathbf{u}_i \mathbf{v}_i^T$$

ciascun termine $\sigma_i \mathbf{u}_i \mathbf{v}_i^T$ è una matrice di rango 1.

**Teorema di Eckart-Young.** L'approssimazione di rango $k$ ottimale di $A$ (nel senso della norma di Frobenius e della norma spettrale) è:

$$A_k = \sum_{i=1}^{k} \sigma_i \mathbf{u}_i \mathbf{v}_i^T$$

L'errore è $\|A - A_k\|_F^2 = \sigma_{k+1}^2 + \cdots + \sigma_r^2$.

### Pseudoinversa di Moore-Penrose

Per sistemi $A\mathbf{x} = \mathbf{b}$ non quadrati o singolari, la **pseudoinversa** è:

$$A^+ = V \Sigma^+ U^T$$

dove $\Sigma^+$ si ottiene da $\Sigma$ invertendo i valori singolari non nulli: $(\Sigma^+)_{ii} = 1/\sigma_i$ per $\sigma_i \neq 0$, zero altrove.

La soluzione ai minimi quadrati di norma minima è $\mathbf{x}^* = A^+\mathbf{b}$.

### Numero di condizionamento

$$\kappa(A) = \frac{\sigma_1}{\sigma_r}$$

dove $\sigma_1$ è il massimo valore singolare e $\sigma_r$ il minimo positivo. Il numero di condizionamento misura la sensibilità del sistema $A\mathbf{x} = \mathbf{b}$ alle perturbazioni: se $\kappa$ è grande, piccoli errori nei dati causano grandi errori nella soluzione.

## 4. Derivazioni

### Dimostrazione dell'esistenza della SVD

Sia $\mathbf{v}_1$ il vettore unitario che massimizza $\|A\mathbf{v}\|$ (esiste perché la sfera unitaria è compatta). Poniamo $\sigma_1 = \|A\mathbf{v}_1\|$ e $\mathbf{u}_1 = A\mathbf{v}_1/\sigma_1$.

Estendiamo $\mathbf{v}_1$ a una base ortonormale di $\mathbb{R}^n$ e $\mathbf{u}_1$ a una base ortonormale di $\mathbb{R}^m$. Nella nuova base, $A$ si scrive:

$$U_1^T A V_1 = \begin{pmatrix}\sigma_1 & \mathbf{w}^T \\ \mathbf{0} & B\end{pmatrix}$$

Si mostra che $\mathbf{w} = \mathbf{0}$ (per la scelta ottimale di $\mathbf{v}_1$). Procedendo per induzione su $B$, si ottiene la SVD completa. $\square$

### Perché $\mathbf{u}_i$ è ortonormale

$$\mathbf{u}_i^T \mathbf{u}_j = \frac{(A\mathbf{v}_i)^T(A\mathbf{v}_j)}{\sigma_i\sigma_j} = \frac{\mathbf{v}_i^T A^T A \mathbf{v}_j}{\sigma_i\sigma_j} = \frac{\lambda_j \mathbf{v}_i^T \mathbf{v}_j}{\sigma_i\sigma_j}$$

Poiché $\mathbf{v}_i \perp \mathbf{v}_j$ per $i \neq j$: $\mathbf{u}_i^T\mathbf{u}_j = 0$.

Per $i = j$: $\mathbf{u}_i^T\mathbf{u}_i = \lambda_i/\sigma_i^2 = 1$. $\square$

### Derivazione di $A^T A = V\Sigma^T\Sigma V^T$

$$A^T A = (U\Sigma V^T)^T (U\Sigma V^T) = V\Sigma^T U^T U \Sigma V^T = V\Sigma^T\Sigma V^T$$

poiché $U^T U = I$. La matrice $\Sigma^T\Sigma = \text{diag}(\sigma_1^2, \ldots, \sigma_r^2, 0, \ldots, 0)$ è diagonale. Quindi $V\Sigma^T\Sigma V^T$ è la decomposizione spettrale di $A^T A$. $\square$

## 5. Esempi

**Esempio 1 — SVD di una matrice diagonale.**

$$A = \begin{pmatrix}3 & 0 \\ 0 & -2\end{pmatrix}$$

$A^T A = \begin{pmatrix}9 & 0 \\ 0 & 4\end{pmatrix}$. Autovalori: $9, 4$. Valori singolari: $\sigma_1 = 3$, $\sigma_2 = 2$.

$\mathbf{v}_1 = (1,0)$, $\mathbf{v}_2 = (0,1)$.

$\mathbf{u}_1 = A\mathbf{v}_1/3 = (1,0)$. $\mathbf{u}_2 = A\mathbf{v}_2/2 = (0,-1)$.

$$U = \begin{pmatrix}1&0\\0&-1\end{pmatrix}, \quad \Sigma = \begin{pmatrix}3&0\\0&2\end{pmatrix}, \quad V = \begin{pmatrix}1&0\\0&1\end{pmatrix}$$

Verifica: $U\Sigma V^T = \begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}3&0\\0&2\end{pmatrix}\begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}3&0\\0&-2\end{pmatrix} = A$ ✓.

---

**Esempio 2 — SVD di una matrice rettangolare $2\times 3$.**

$$A = \begin{pmatrix}1 & 1 & 0 \\ 0 & 1 & 1\end{pmatrix}$$

$A^T A = \begin{pmatrix}1&1&0\\1&2&1\\0&1&1\end{pmatrix}$. Autovalori: $\lambda_1 = 3$, $\lambda_2 = 1$, $\lambda_3 = 0$.

$\sigma_1 = \sqrt{3}$, $\sigma_2 = 1$. Rango $r = 2$.

Autovettore di $\lambda_1=3$: $\mathbf{v}_1 = (1,2,1)/\sqrt{6}$.

Autovettore di $\lambda_2=1$: $\mathbf{v}_2 = (1,0,-1)/\sqrt{2}$.

Autovettore di $\lambda_3=0$: $\mathbf{v}_3 = (1,-1,1)/\sqrt{3}$ (nucleo di $A$).

$\mathbf{u}_1 = A\mathbf{v}_1/\sqrt{3} = \frac{1}{\sqrt{3}}(3,3)^T/\sqrt{6}\cdot\sqrt{3}$... semplificando: $\mathbf{u}_1 = (1,1)/\sqrt{2}$.

$\mathbf{u}_2 = A\mathbf{v}_2/1 = (1,-1)/\sqrt{2}$.

---

**Esempio 3 — Matrice di rango 1.**

$$A = \begin{pmatrix}2 \\ 1\end{pmatrix}\begin{pmatrix}3 & 1\end{pmatrix} = \begin{pmatrix}6&2\\3&1\end{pmatrix}$$

Rango $r=1$. $A^T A = \begin{pmatrix}45&15\\15&5\end{pmatrix}$. Autovalore non nullo: $\lambda_1 = 50$. $\sigma_1 = \sqrt{50} = 5\sqrt{2}$.

$\mathbf{v}_1 = (3,1)/\sqrt{10}$.

$\mathbf{u}_1 = A\mathbf{v}_1/(5\sqrt{2}) = (2,1)/\sqrt{5}$.

$A = 5\sqrt{2} \cdot (2,1)^T/\sqrt{5} \cdot (3,1)/\sqrt{10} = 5\sqrt{2} \cdot (2,1)^T(3,1)/\sqrt{50} = (2,1)^T(3,1)$ ✓.

---

**Esempio 4 — Pseudoinversa di una matrice singolare.**

$$A = \begin{pmatrix}4 & 0 \\ 0 & 0\end{pmatrix}$$

SVD: $U = V = I$, $\Sigma = A$.

$\Sigma^+ = \begin{pmatrix}1/4 & 0 \\ 0 & 0\end{pmatrix}$, quindi $A^+ = \begin{pmatrix}1/4 & 0 \\ 0 & 0\end{pmatrix}$.

Proprietà della pseudoinversa: $A A^+ A = A$ ✓, $A^+ A A^+ = A^+$ ✓.

Per $A\mathbf{x} = (4, 3)^T$: sistema inconsistente. Soluzione ai minimi quadrati: $\mathbf{x}^* = A^+(4,3)^T = (1,0)^T$.

---

**Esempio 5 — Numero di condizionamento e sensibilità.**

$$A = \begin{pmatrix}10 & 0 \\ 0 & 0.001\end{pmatrix}$$

Valori singolari: $\sigma_1 = 10$, $\sigma_2 = 0.001$.

$\kappa(A) = 10/0.001 = 10000$.

Se il vettore $\mathbf{b}$ ha un errore relativo dell'$1\%$, l'errore relativo nella soluzione $\mathbf{x}$ può essere fino a $\kappa \cdot 1\% = 100$ volte più grande (cioè il $100\%$!). Il sistema è **mal condizionato**.

---

**Esempio 6 — Approssimazione di rango 1 di un'immagine (principio).**

Supponiamo che una matrice $A$ abbia SVD con $\sigma_1 = 100$, $\sigma_2 = 10$, $\sigma_3 = 1$.

L'approssimazione di rango 1 è $A_1 = 100\mathbf{u}_1\mathbf{v}_1^T$.

Errore: $\|A - A_1\|_F^2 = \sigma_2^2 + \sigma_3^2 = 100 + 1 = 101$.

Risparmio: $\|A\|_F^2 = 100^2 + 10^2 + 1^2 = 10101$. La quota catturata è $10000/10101 \approx 99\%$.

---

**Esempio 7 — Connessione SVD-PCA.**

Dati $m$ punti in $\mathbb{R}^n$, organizzati nella matrice $X \in \mathbb{R}^{m\times n}$ (centrata). La SVD di $X$ è:

$$X = U\Sigma V^T$$

Le **componenti principali** (PCA) sono le colonne di $V$ (i vettori singolari destri). I valori singolari $\sigma_i$ sono proporzionali alle deviazioni standard nelle direzioni principali: $\sigma_i^2/(m-1)$ è la varianza lungo $\mathbf{v}_i$.

Proiettare i dati sui primi $k$ vettori: $X_k = U_k \Sigma_k$ (con $U_k$ e $\Sigma_k$ troncati), si ottiene la migliore riduzione $m \times k$.

---

**Esempio 8 — SVD e minimi quadrati.**

Sistema sovradeterminato $A\mathbf{x} \approx \mathbf{b}$ con $A \in \mathbb{R}^{m\times n}$, $m > n$.

Usando la SVD $A = U\Sigma V^T$: la soluzione ai minimi quadrati è $\mathbf{x}^* = A^+\mathbf{b} = V\Sigma^+U^T\mathbf{b}$.

Questo è equivalente a risolvere le equazioni normali $A^T A \mathbf{x} = A^T \mathbf{b}$, ma numericamente molto più stabile: si evitano i problemi di cancellazione numerica presenti quando si forma esplicitamente $A^T A$ (che eleva al quadrato il numero di condizionamento).

## 6. Grafico

```plot
{"title":"Valori singolari: decadimento rapido (tipico di immagini)","fn":"10*Math.pow(0.5,x)","fn2":"10*Math.pow(0.8,x)","domain":[0,10],"yDomain":[-0.5,11],"label1":"decadimento rapido σᵢ≈10·0.5ⁱ","label2":"decadimento lento σᵢ≈10·0.8ⁱ","color":"steelblue","color2":"crimson"}
```

## 7. Interattivo

```slider
{"title":"Approssimazione SVD: energia catturata con k valori singolari","fn":"1 - Math.pow(a, x+1)","domain":[0,9],"yDomain":[-0.05,1.05],"params":[{"name":"a","min":0.1,"max":0.99,"step":0.01,"default":0.5}],"title":"Quota energia catturata vs indice k (tasso di decadimento a)"}
```

## 8. Errori comuni

**Errore 1 — Confondere valori singolari con autovalori.** I valori singolari $\sigma_i = \sqrt{\lambda_i(A^T A)}$ sono radici quadrate degli autovalori di $A^T A$, non gli autovalori di $A$ stessa. Per matrici non simmetriche, autovalori e valori singolari sono completamente diversi (gli autovalori possono essere negativi o complessi; i valori singolari sono sempre reali e non negativi).

**Errore 2 — Credere che la SVD esista solo per matrici quadrate.** La SVD esiste per qualsiasi matrice $m \times n$ (qualunque siano $m$ e $n$, e anche se la matrice è singolare). È una delle ragioni per cui la SVD è più universale della diagonalizzazione.

**Errore 3 — Sbagliare l'ordine in $A = U\Sigma V^T$.** L'ordine corretto è $U\Sigma V^T$, non $U\Sigma^T V$, non $V\Sigma U^T$. Le colonne di $U$ moltiplicano le righe di $\Sigma$; le righe di $V^T$ sono le colonne di $V$.

**Errore 4 — Confondere la SVD con la diagonalizzazione.** Nella diagonalizzazione $A = P\Lambda P^{-1}$ si usa la stessa matrice $P$ (e la sua inversa). Nella SVD $A = U\Sigma V^T$ si usano due matrici ortogonali diverse $U$ e $V$: una per l'output, una per l'input. La SVD vale per tutte le matrici; la diagonalizzazione solo per quelle con $n$ autovettori LI.

**Errore 5 — Calcolare $A^+$ come $(A^T A)^{-1}A^T$ quando $A$ è singolare.** Se $A$ ha rango deficiente, $A^T A$ è singolare e la formula $(A^T A)^{-1}A^T$ non è definita. Si deve usare $A^+ = V\Sigma^+ U^T$ con la pseudoinversa di $\Sigma$.

**Errore 6 — Dimenticare che il rango di $A$ è uguale al numero di valori singolari strettamente positivi.** Questo fornisce un modo numericamente robusto per calcolare il rango: invece di controllare se $\det(A) = 0$ (sensibile agli errori numerici), si conta quanti $\sigma_i > \varepsilon$ per una soglia $\varepsilon$ opportuna.

**Errore 7 — Pensare che l'approssimazione di rango $k$ si ottenga semplicemente mettendo a zero le ultime righe/colonne di $A$.** L'approssimazione ottimale di rango $k$ è $A_k = \sum_{i=1}^k \sigma_i\mathbf{u}_i\mathbf{v}_i^T$: è una combinazione globale di vettori singolari, non un taglio locale. Azzerare righe/colonne non è in generale ottimale.

**Errore 8 — Non normalizzare i vettori singolari.** I vettori singolari $\mathbf{u}_i$ e $\mathbf{v}_i$ devono essere unitari ($\|\mathbf{u}_i\|=\|\mathbf{v}_i\|=1$). Se non si normalizza, la relazione $\mathbf{u}_i = A\mathbf{v}_i/\sigma_i$ non vale e la fattorizzazione è errata.

## 9. Applicazioni reali

**Compressione di immagini.** Un'immagine in scala di grigi è una matrice $A \in \mathbb{R}^{m\times n}$ di valori di pixel. La SVD troncata $A_k = \sum_{i=1}^k \sigma_i\mathbf{u}_i\mathbf{v}_i^T$ approssima l'immagine memorizzando solo $k(m+n+1)$ numeri invece di $mn$. Per $k$ piccolo il risparmio è enorme: un'immagine di $1000\times 1000$ pixel richiede $10^6$ numeri, ma con $k=50$ bastano $\approx 100{,}000$ numeri (fattore $10\times$ di compressione) con qualità visivamente accettabile. Il tasso di decadimento dei valori singolari determina quanto è comprimibile l'immagine: valori singolari che decadono rapidamente indicano immagini molto strutturate (volti, testo), mentre un decadimento lento indica immagini rumorose o casuali.

**Analisi delle componenti principali (PCA).** La PCA è il metodo fondamentale di riduzione della dimensionalità nel machine learning. Dato un dataset $X \in \mathbb{R}^{m\times n}$ (centrato, $m$ campioni in $n$ dimensioni), la SVD di $X$ rivela le direzioni di massima varianza (le componenti principali, cioè le colonne di $V$). Proiettare i dati sulle prime $k$ componenti principali permette di: visualizzare dati ad alta dimensione in 2D/3D, ridurre il rumore (scartando le componenti a bassa varianza), velocizzare algoritmi downstream. Usata in genomica, finanza, elaborazione di immagini e NLP.

**Pseudoinversa e minimi quadrati.** In molti problemi applicati si hanno più equazioni che incognite (sistemi sovradeterminati) o più incognite che equazioni (sistemi sottodeterminati). La SVD fornisce la soluzione ottimale in entrambi i casi tramite la pseudoinversa $A^+ = V\Sigma^+ U^T$. In ingegneria, si usa per calibrare sensori con misurazioni ridondanti; in statistica, per la regressione lineare multipla anche in presenza di multicollinearità (correlazione tra predittori). La soluzione $\mathbf{x}^* = A^+\mathbf{b}$ minimizza $\|A\mathbf{x}-\mathbf{b}\|^2$ e, tra tutte le soluzioni ai minimi quadrati, ha la norma $\|\mathbf{x}\|$ minima.

**Sistemi di raccomandazione (Netflix, Spotify).** Il problema di completamento di matrici (matrix completion) sta alla base dei motori di raccomandazione. La matrice utenti-film $R \in \mathbb{R}^{m\times n}$ ha milioni di righe (utenti) e migliaia di colonne (film), ma solo una piccola frazione delle entrate è osservata (le valutazioni). L'ipotesi è che $R$ abbia rango basso: ci sono relativamente pochi "tipi di gusto" rispetto al numero di utenti. La SVD (e varianti come SVD++, ALS) trovano una fattorizzazione di rango basso che riempie i valori mancanti. Netflix ha offerto un premio di $10M per migliorare il proprio sistema di raccomandazione: la SVD era al cuore delle soluzioni vincenti.

## 10. Riepilogo

| Concetto | Formula / Definizione | Note |
| --- | --- | --- |
| SVD | $A = U\Sigma V^T$ | vale per ogni $A \in \mathbb{R}^{m\times n}$ |
| $U$ | $m\times m$ ortogonale | vettori singolari sinistri |
| $\Sigma$ | $m\times n$ "diagonale" | valori singolari $\sigma_i \geq 0$ decrescenti |
| $V$ | $n\times n$ ortogonale | vettori singolari destri |
| Valori singolari | $\sigma_i = \sqrt{\lambda_i(A^TA)}$ | sempre reali e non negativi |
| Rango | $r = $ numero di $\sigma_i > 0$ | modo robusto per calcolare il rango |
| Decomposizione rango-1 | $A = \sum_i \sigma_i\mathbf{u}_i\mathbf{v}_i^T$ | ogni termine è rango 1 |
| Approssimazione rango $k$ | $A_k = \sum_{i=1}^k \sigma_i\mathbf{u}_i\mathbf{v}_i^T$ | ottimale per Eckart-Young |
| Pseudoinversa | $A^+ = V\Sigma^+ U^T$ | soluzione minimi quadrati di norma min |
| Numero condizionamento | $\kappa(A) = \sigma_1/\sigma_r$ | misura sensibilità numerica |
| $A^T A$ | $V\Sigma^T\Sigma V^T$ | aut. di $A^T A$ sono $\sigma_i^2$ |
| $A A^T$ | $U\Sigma\Sigma^T U^T$ | aut. di $A A^T$ sono $\sigma_i^2$ |

## 11. Esercizi

<details>
<summary>Esercizio 1 — SVD di una matrice $2\times 2$ diagonale</summary>

Calcolare la SVD di $A = \begin{pmatrix}5 & 0 \\ 0 & -3\end{pmatrix}$.

**Soluzione:**

$A^T A = \begin{pmatrix}25&0\\0&9\end{pmatrix}$. Autovalori: $\lambda_1 = 25$, $\lambda_2 = 9$.

Valori singolari: $\sigma_1 = 5$, $\sigma_2 = 3$.

Vettori singolari destri (autovettori di $A^T A$): $\mathbf{v}_1 = (1,0)$, $\mathbf{v}_2 = (0,1)$.

$\mathbf{u}_1 = A\mathbf{v}_1/5 = (1,0)$. $\mathbf{u}_2 = A\mathbf{v}_2/3 = (0,-1)$.

$$U = \begin{pmatrix}1&0\\0&-1\end{pmatrix}, \quad \Sigma = \begin{pmatrix}5&0\\0&3\end{pmatrix}, \quad V = \begin{pmatrix}1&0\\0&1\end{pmatrix}$$

Nota: il segno negativo in $A_{22} = -3$ è assorbito da $U$, non da $V$ o $\Sigma$.

</details>

<details>
<summary>Esercizio 2 — Rango tramite SVD</summary>

Trovare il rango di $A = \begin{pmatrix}1&1\\2&2\\3&3\end{pmatrix}$ tramite SVD.

**Soluzione:**

Le colonne di $A$ sono proporzionali: $A = (1,2,3)^T(1,1)$. Rango = 1.

$A^T A = \begin{pmatrix}14&14\\14&14\end{pmatrix}$. Autovalori: $\lambda_1 = 28$, $\lambda_2 = 0$.

$\sigma_1 = \sqrt{28} = 2\sqrt{7}$, $\sigma_2 = 0$.

Un solo valore singolare non nullo $\Rightarrow$ rango$(A) = 1$. ✓

</details>

<details>
<summary>Esercizio 3 — Pseudoinversa e minimi quadrati</summary>

Trovare la soluzione ai minimi quadrati di $A\mathbf{x} = \mathbf{b}$ con $A = \begin{pmatrix}1\\2\\2\end{pmatrix}$ e $\mathbf{b} = (1,1,1)^T$.

**Soluzione:**

$A^T A = 1+4+4 = 9$ (scalare). $A^T \mathbf{b} = 1+2+2 = 5$.

$A^+ = V\Sigma^+ U^T$. Qui $A$ è un vettore colonna di rango 1: $\sigma_1 = \|A\| = 3$, $\mathbf{v}_1 = 1$ (scalare), $\mathbf{u}_1 = A/3 = (1/3, 2/3, 2/3)^T$.

$A^+ = \mathbf{v}_1 (1/\sigma_1)\mathbf{u}_1^T = (1/3)(1/3, 2/3, 2/3) = (1/9, 2/9, 2/9)$.

$\mathbf{x}^* = A^+\mathbf{b} = (1\cdot 1 + 2\cdot 1 + 2\cdot 1)/9 = 5/9$.

Alternativa: $\mathbf{x}^* = (A^T A)^{-1}A^T\mathbf{b} = 5/9$ ✓.

</details>

<details>
<summary>Esercizio 4 — Approssimazione di rango 1</summary>

Data $A = \begin{pmatrix}3&1\\1&3\\2&2\end{pmatrix}$, trovare l'approssimazione di rango 1.

**Soluzione:**

$A^T A = \begin{pmatrix}3^2+1^2+2^2 & 3\cdot1+1\cdot3+2\cdot2\end{pmatrix} = \begin{pmatrix}14&10\\10&14\end{pmatrix}$.

Autovalori: $\lambda_1 = 24$ (con autovettore $(1,1)/\sqrt{2}$), $\lambda_2 = 4$.

$\sigma_1 = \sqrt{24} = 2\sqrt{6}$, $\mathbf{v}_1 = (1,1)/\sqrt{2}$.

$\mathbf{u}_1 = A\mathbf{v}_1/\sigma_1 = \frac{1}{\sqrt{2}}(4,4,4)^T/(2\sqrt{6}) = (1,1,1)/\sqrt{3}$.

$A_1 = \sigma_1 \mathbf{u}_1 \mathbf{v}_1^T = 2\sqrt{6} \cdot \frac{(1,1,1)^T}{\sqrt{3}} \cdot \frac{(1,1)}{\sqrt{2}} = \frac{2\sqrt{6}}{\sqrt{6}}\begin{pmatrix}1\\1\\1\end{pmatrix}(1,1) = 2\begin{pmatrix}1&1\\1&1\\1&1\end{pmatrix}$.

</details>

<details>
<summary>Esercizio 5 — Numero di condizionamento</summary>

Calcolare il numero di condizionamento di $A = \begin{pmatrix}3&0\\0&0.01\end{pmatrix}$.

**Soluzione:**

$A$ è diagonale: valori singolari $\sigma_1 = 3$, $\sigma_2 = 0.01$.

$\kappa(A) = \sigma_1/\sigma_2 = 3/0.01 = 300$.

Interpretazione: un errore relativo di $\varepsilon$ in $\mathbf{b}$ può causare un errore relativo fino a $300\varepsilon$ in $\mathbf{x}$. Il sistema è moderatamente mal condizionato.

</details>

<details>
<summary>Esercizio 6 — SVD e ortogonalità di $U$ e $V$</summary>

Verificare che $U$ e $V$ sono ortogonali nell'esempio 1 (SVD di $A=\begin{pmatrix}5&0\\0&-3\end{pmatrix}$).

**Soluzione:**

$U = \begin{pmatrix}1&0\\0&-1\end{pmatrix}$: $U^T U = \begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}1&0\\0&-1\end{pmatrix} = \begin{pmatrix}1&0\\0&1\end{pmatrix} = I$ ✓.

$V = \begin{pmatrix}1&0\\0&1\end{pmatrix} = I$: $V^T V = I$ ✓ (banalmente).

Verifica SVD: $U\Sigma V^T = \begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}5&0\\0&3\end{pmatrix}\begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}5&0\\0&-3\end{pmatrix} = A$ ✓.

</details>

<details>
<summary>Esercizio 7 — Eckart-Young e errore di approssimazione</summary>

Una matrice ha SVD con $\sigma_1=10$, $\sigma_2=5$, $\sigma_3=2$, $\sigma_4=0.5$. Calcolare l'errore dell'approssimazione di rango 2 in norma di Frobenius.

**Soluzione:**

$\|A\|_F^2 = \sigma_1^2 + \sigma_2^2 + \sigma_3^2 + \sigma_4^2 = 100+25+4+0.25 = 129.25$.

$\|A - A_2\|_F^2 = \sigma_3^2 + \sigma_4^2 = 4 + 0.25 = 4.25$.

Energia catturata: $(129.25 - 4.25)/129.25 = 125/129.25 \approx 96.7\%$.

L'approssimazione di rango 2 cattura il $96.7\%$ dell'energia della matrice.

</details>

<details>
<summary>Esercizio 8 — SVD e connessione con la diagonalizzazione</summary>

Per $A = \begin{pmatrix}2&1\\1&2\end{pmatrix}$ (simmetrica DP), mostrare che SVD e diagonalizzazione coincidono.

**Soluzione:**

Autovalori di $A$: $\lambda_1 = 3$, $\lambda_2 = 1$ (entrambi positivi). Autovettori ortonormali: $\mathbf{q}_1=(1,1)/\sqrt{2}$, $\mathbf{q}_2=(1,-1)/\sqrt{2}$.

Decomposizione spettrale: $A = Q\Lambda Q^T$ con $Q = \frac{1}{\sqrt{2}}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $\Lambda = \begin{pmatrix}3&0\\0&1\end{pmatrix}$.

SVD: poiché $A$ è simmetrica DP, gli autovalori sono anche valori singolari $\sigma_i = \lambda_i$, e $U = V = Q$.

$$A = U\Sigma V^T = Q\begin{pmatrix}3&0\\0&1\end{pmatrix}Q^T$$

Per matrici simmetriche definite positive, SVD e diagonalizzazione spettrale coincidono esattamente.

</details>
