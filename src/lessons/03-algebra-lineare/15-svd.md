---
id: algebra-15-svd
titolo: "Decomposizione ai valori singolari (SVD)"
materia: algebra-lineare
argomento: "Autovalori e diagonalizzazione"
modulo: "Autovalori e diagonalizzazione"
livello: universitario
slug: algebra-15-svd

# legacy
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: "Decomposizione ai valori singolari (SVD)"
title_en: "Singular value decomposition (SVD)"
level: blue
order: 15

prerequisiti:
  - algebra-09-autovalori-autovettori
  - algebra-10-diagonalizzazione
  - algebra-11-prodotto-scalare
  - algebra-12-ortogonalita-proiezioni
  - algebra-13-gram-schmidt
  - algebra-14-forme-quadratiche

collegamenti:
  - algebra-04-rango-rouche-capelli
  - algebra-08-determinanti
  - probabilita-08-vettori-aleatori
  - statistica-09-regressione-multipla
  - econometria-01-clrm

fonti_integrate:
  - id_fonte: austin-ula
    ruolo: primaria
    sezioni_coperte: "§7.4: valori singolari come massimo e minimo di ‖Ax‖ sui versori tramite la matrice di Gram AᵀA, costruzione uᵢ = Avᵢ/σᵢ (Example 7.4.2, 7.4.4), teorema SVD (Thm 7.4.5, solo enunciato), SVD di Aᵀ (Prop. 7.4.6), rango uguale al numero di valori singolari non nulli e basi ortonormali dei quattro sottospazi fondamentali (Thm 7.4.9), SVD ridotta (Prop. 7.4.10); §7.5: minimi quadrati con la SVD ridotta, soluzione di norma minima e pseudoinversa di Moore-Penrose (Prop. 7.5.1), approssimazioni di rango k come somma di prodotti esterni, PCA con la SVD, compressione di immagini, numero di condizionamento σ₁/σₙ; §7.1 e §7.3: covarianza di dati demediati (Prop. 7.1.17), componenti principali, frazione di varianza spiegata"
    note: "copre il nucleo della lezione ma enuncia il teorema SVD senza dimostrazione generale (la traccia viene da axler-ladr 7.70) e dice solo che Aₖ è «in a sense» la più vicina (l'enunciato di Eckart–Young viene da axler-ladr 7.92). Austin mette i dati per colonne (componenti principali = vettori singolari sinistri); qui i dati sono per righe, come in econometria, e le componenti principali sono le colonne di V: confronto in Teoria"
  - id_fonte: axler-ladr
    ruolo: minore
    sezioni_coperte: "7.64 (T*T positivo, null T*T = null T), 7.65 definizione dei valori singolari, 7.68 numero dei valori singolari positivi = dim range T, 7.70 esistenza della SVD dal teorema spettrale applicato a T*T, 7.75 e 7.78 pseudoinversa scritta con la SVD, 7.80 versione matriciale (ridotta) e conteggio m(p+m+n) dei numeri da memorizzare, 7.82–7.86 ‖Tv‖ ≤ s₁‖v‖, massimo uguale a s₁ e norma di un'applicazione lineare, 7.92 migliore approssimazione di rango ≤ k in norma operatoriale (Eckart–Young), 7.99 un operatore invertibile manda la palla in un ellissoide; 6.68–6.70 pseudoinversa come migliore soluzione approssimata e di norma minima"
    note: "fonte della traccia della dimostrazione chiave (7.70 e 7.80, qui in forma matriciale con U completata a matrice ortogonale) e dell'enunciato di Eckart–Young; Axler lavora su F = R o C, qui solo il caso reale"
  - id_fonte: cherney-linalg
    ruolo: minore
    sezioni_coperte: "§17.2 «Singular Value Decomposition»: valori singolari da MᵀM e MMᵀ (con l'ipotesi ker L = {0}), vettori Luᵢ ortogonali di lunghezza √λᵢ, completamento a base ortonormale del codominio, Example 155 (matrice 3×2)"
    note: "esempi e verifica del completamento di U"
  - id_fonte: villanacci-math2
    ruolo: appunti-prof
    sezioni_coperte: "Def. 63 (trasposta Aᵀ di A ∈ M(m,n)); Prop. 204 (rango per righe = rango per colonne); Def. 220 (rango come ordine massimo di una sottomatrice quadrata non singolare); Def. 247 (nucleo)"
    note: "NON tratta la SVD, la pseudoinversa né le componenti principali: la notazione del professore è usata solo per trasposta, M(m,n), rango e nucleo; confronto dei simboli in Teoria"

contratto: "3.0"
profondita: essenziale
tipo: teorica
versione: "1.0"
data_ultima_rielaborazione: "2026-10-06"
stato: completa
componenti_usati:
  - checkpoint
  - plot
---

## Intuizione

La diagonalizzazione ([Diagonalizzazione di matrici](/algebra-lineare/autovalori-e-diagonalizzazione/10-diagonalizzazione)) cerca una base in cui una matrice si limita a stirare gli assi. Ha due limiti: vale solo per matrici **quadrate**, e non per tutte; e usa la **stessa** base per il vettore che entra e per quello che esce. Il teorema spettrale ([Matrici simmetriche e forme quadratiche](/algebra-lineare/autovalori-e-diagonalizzazione/14-forme-quadratiche)) aggiunge che per le simmetriche quella base si può scegliere ortonormale: un privilegio di poche matrici.

La **decomposizione ai valori singolari** (SVD, *singular value decomposition*) toglie entrambi i limiti, a un prezzo: due basi ortonormali diverse, una nello spazio di partenza e una in quello di arrivo. Per **ogni** matrice $A$ di tipo $m\times n$ esistono direzioni perpendicolari $\mathbf{v}_1,\dots,\mathbf{v}_n$ di $\mathbb{R}^n$ che $A$ manda in direzioni perpendicolari $\mathbf{u}_1,\mathbf{u}_2,\dots$ di $\mathbb{R}^m$, allungandole dei fattori $\sigma_1\ge\sigma_2\ge\dots\ge0$: i **valori singolari**. Ogni trasformazione lineare è dunque una trasformazione ortogonale (nel piano, una rotazione o una riflessione), seguita da una dilatazione lungo gli assi, seguita da un'altra trasformazione ortogonale; la sfera unitaria diventa un ellissoide con semiassi $\sigma_i$, schiacciato nelle direzioni con $\sigma_i=0$.

Per un economista il motivo è concreto: i dati sono matrici rettangolari. $n$ osservazioni di $p$ variabili formano una matrice $n\times p$, che non ha autovalori. La SVD ne rivela la struttura: quante direzioni contano davvero, quale soluzione dei minimi quadrati scegliere quando i regressori sono collineari, quali combinazioni di variabili spiegano quasi tutta la variabilità (componenti principali).

## Teoria

**Simboli.** $A$ è una matrice reale $m\times n$ (negli appunti $A\in M(m,n)$, con trasposta $A^T$, Def. 63). $\lVert\mathbf{x}\rVert$ è la norma euclidea della lezione 11. Il rango $r=\operatorname{rk}A$ è la dimensione di $\operatorname{Im}A$ ([Rango e teorema di Rouché-Capelli](/algebra-lineare/fondamenti/04-rango-rouche-capelli)); negli appunti è l'ordine massimo di una sottomatrice quadrata non singolare (Def. 220), e le due definizioni coincidono. $Q$ quadrata è ortogonale se $Q^TQ=I$ (lezione 14). La pseudoinversa si scrive $A^+$ (Axler usa $T^\dagger$).

**La matrice $A^TA$ e i valori singolari.** $A^TA$ è $n\times n$, simmetrica e semidefinita positiva, perché $\mathbf{x}^TA^TA\mathbf{x}=\lVert A\mathbf{x}\rVert^2\ge0$ (Esercizio 5 della lezione 14). Per il teorema spettrale ha una base ortonormale di autovettori $\mathbf{v}_1,\dots,\mathbf{v}_n$, con autovalori $\lambda_1\ge\dots\ge\lambda_n\ge0$. I **valori singolari** di $A$ sono

$$
\sigma_i=\sqrt{\lambda_i}\qquad(i=1,\dots,n),\qquad \sigma_1\ge\sigma_2\ge\dots\ge\sigma_n\ge0 ,
$$

contati con la loro molteplicità. Lettura: $\sigma_i=\lVert A\mathbf{v}_i\rVert$, perché $\lVert A\mathbf{v}_i\rVert^2=\mathbf{v}_i^TA^TA\mathbf{v}_i=\lambda_i\,\mathbf{v}_i^T\mathbf{v}_i=\lambda_i$. Il valore singolare dice **di quanto $A$ allunga** il vettore $\mathbf{v}_i$.

**Teorema (decomposizione ai valori singolari).** Ogni matrice reale $A$ di tipo $m\times n$ si scrive

$$
A=U\Sigma V^T ,
$$

dove $V$ ($n\times n$) è ortogonale e le sue colonne $\mathbf{v}_i$ sono i **vettori singolari destri**; $U$ ($m\times m$) è ortogonale e le sue colonne $\mathbf{u}_i$ sono i **vettori singolari sinistri**; $\Sigma$, di tipo $m\times n$ come $A$, ha $\Sigma_{ii}=\sigma_i$ per $i\le\min(m,n)$ e zero altrove. Il numero di valori singolari positivi è il rango $r$, e $\mathbf{u}_i=A\mathbf{v}_i/\sigma_i$ per $i\le r$. (Se $n>m$, i $\sigma_i$ con $i>m$ sono nulli, perché $r\le m$.) Dimostrazione nella sezione Dimostrazioni.

Moltiplicando a destra per $V$ si ottiene $AV=U\Sigma$, cioè, colonna per colonna,

$$
A\mathbf{v}_i=\sigma_i\mathbf{u}_i\quad(i\le r),\qquad A\mathbf{v}_i=\mathbf{0}\quad(i>r);
$$

trasponendo, $A^T=V\Sigma^TU^T$ e $A^T\mathbf{u}_i=\sigma_i\mathbf{v}_i$ per $i\le r$. Scrivendo il prodotto come somma di colonne per righe, come $Q\Lambda Q^T$ nella lezione 14, e tenendo solo i $\sigma_i>0$:

$$
A=\sum_{i=1}^{r}\sigma_i\,\mathbf{u}_i\mathbf{v}_i^T=U_r\Sigma_rV_r^T ,
$$

con $U_r$ ($m\times r$) e $V_r$ ($n\times r$) formate dalle prime $r$ colonne e $\Sigma_r=\operatorname{diag}(\sigma_1,\dots,\sigma_r)$: è la **SVD ridotta**. Ogni $\mathbf{u}_i\mathbf{v}_i^T$ è una matrice di rango $1$ (le sue righe sono multipli di $\mathbf{v}_i^T$): $A$ è una somma di $r$ strati di rango $1$, in ordine di importanza.

**Lettura geometrica.** $A\mathbf{x}=U\big(\Sigma(V^T\mathbf{x})\big)$ in tre passi: (1) $\mathbf{c}=V^T\mathbf{x}$ sono le coordinate di $\mathbf{x}$ nella base dei $\mathbf{v}_i$ (trasformazione ortogonale: conserva lunghezze e angoli); (2) $\Sigma$ moltiplica ogni $c_i$ per $\sigma_i$, cancella le coordinate con $\sigma_i=0$ o con $i>m$ e, se $m>n$, aggiunge zeri; (3) $U$ ricompone il vettore $\sum_i\sigma_ic_i\mathbf{u}_i$ di $\mathbb{R}^m$ (altra trasformazione ortogonale).

*La sfera diventa un ellissoide.* Sia $A$ quadrata invertibile ($r=n$). Se $\lVert\mathbf{x}\rVert=1$, allora $\sum c_i^2=\lVert V^T\mathbf{x}\rVert^2=1$ e $A\mathbf{x}=\sum y_i\mathbf{u}_i$ con $y_i=\sigma_ic_i$, quindi

$$
\frac{y_1^2}{\sigma_1^2}+\dots+\frac{y_n^2}{\sigma_n^2}=1 :
$$

l'immagine della sfera unitaria è l'ellissoide con semiassi $\sigma_i$ lungo le direzioni $\mathbf{u}_i$. Ogni punto dell'ellissoide è raggiunto, con $c_i=y_i/\sigma_i$. Se il rango scende a $r<n$, le direzioni con $\sigma_i=0$ si schiacciano: per $\lVert\mathbf{x}\rVert=1$ resta $\sum_{i\le r}y_i^2/\sigma_i^2=\sum_{i\le r}c_i^2\le1$, e l'immagine è l'ellissoide **pieno** di dimensione $r$ dentro $\operatorname{Im}A$ (nel piano, l'ellisse degenera in un segmento; nello spazio, una sfera può diventare un'ellisse piena). Se invece $r=n<m$, l'immagine è la superficie di un ellissoide di dimensione $n$ dentro $\operatorname{Im}A$.

```checkpoint
[domanda]
$R=\left(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right)$ ruota il piano di $90^\circ$. Quali sono i suoi autovalori reali e i suoi valori singolari?

[risposta]
Il polinomio caratteristico è $t^2+1$: nessun autovalore reale (sono $\pm i$), perché nessuna direzione resta su sé stessa. Invece $R^TR=I$ ha l'autovalore $1$ doppio, quindi $\sigma_1=\sigma_2=1$: una rotazione non allunga nulla. Una SVD è $R=R\,I\,I^T$, con $U=R$ e $\Sigma=V=I$.
```

> **Attenzione.** I valori singolari **non** sono gli autovalori: sono reali e $\ge0$, esistono anche per matrici rettangolari e si calcolano da $A^TA$, non da $A$. Nell'Esempio 1, $A$ ha autovalori $3$ e $5$ e valori singolari $3\sqrt5$ e $\sqrt5$. Per una simmetrica $\sigma_i=\lvert\lambda_i\rvert$, e i due elenchi coincidono solo se è semidefinita positiva (Esercizio 3).

**Procedura.** (1) Calcola $A^TA$ e i suoi autovalori in ordine decrescente; $\sigma_i=\sqrt{\lambda_i}$. (2) Trova una base ortonormale di autovettori $\mathbf{v}_i$ (Gram-Schmidt dentro gli autospazi di dimensione $\ge2$, come nella lezione 14). (3) Per $\sigma_i>0$ poni $\mathbf{u}_i=A\mathbf{v}_i/\sigma_i$. (4) Se $r<m$, completa con una base ortonormale di $\ker A^T$, che è $\operatorname{Im}(A)^\perp$ ([Ortogonalità e proiezioni ortogonali](/algebra-lineare/ortogonalita/12-ortogonalita-proiezioni)). (5) $\Sigma$ è $m\times n$ con i $\sigma_i$ sulla diagonale. Controllo finale: $AV=U\Sigma$.

> **Attenzione.** I $\mathbf{u}_i$ sono autovettori di $AA^T$ ($AA^T\mathbf{u}_i=A(A^TA\mathbf{v}_i)/\sigma_i=\sigma_i^2\mathbf{u}_i$), ma se si calcolano **a parte**, come autovettori normalizzati di $AA^T$, il segno di ciascuno (e, con valori singolari ripetuti, la base dell'autospazio) è arbitrario: con $-\mathbf{u}_1$ al posto di $\mathbf{u}_1$, $U\Sigma V^T$ non è più $A$. Si ricavano da $\mathbf{u}_i=A\mathbf{v}_i/\sigma_i$. E $U$ e $V$ sono matrici diverse, di dimensioni diverse se $m\neq n$; $\Sigma$ ha la forma di $A$, non è quadrata.

**Rango e i quattro sottospazi.** $r=\operatorname{rk}A$ è il numero di valori singolari positivi, e:

- $\mathbf{u}_1,\dots,\mathbf{u}_r$ è una base ortonormale di $\operatorname{Im}A$, e $\mathbf{u}_{r+1},\dots,\mathbf{u}_m$ di $\ker A^T=\operatorname{Im}(A)^\perp$;
- $\mathbf{v}_{r+1},\dots,\mathbf{v}_n$ è una base ortonormale di $\ker A$, e $\mathbf{v}_1,\dots,\mathbf{v}_r$ di $\operatorname{Im}A^T=(\ker A)^\perp$, lo spazio delle righe.

Per il nucleo: con $\mathbf{x}=\sum c_i\mathbf{v}_i$ si ha $A\mathbf{x}=\sum_{i\le r}\sigma_ic_i\mathbf{u}_i$, nullo se e solo se $c_1=\dots=c_r=0$, perché gli $\mathbf{u}_i$ sono indipendenti. Le dimensioni rispettano nullità più rango: $\dim\ker A=n-r$. Per lo spazio delle righe: $A^T\mathbf{u}_i=\sigma_i\mathbf{v}_i$ dice che $\mathbf{v}_1,\dots,\mathbf{v}_r$ stanno in $\operatorname{Im}A^T$, che ha dimensione $r$ (rango per righe uguale a rango per colonne, appunti Prop. 204): ne sono quindi una base ortonormale.

```checkpoint
[domanda]
$A$ è $5\times3$ con valori singolari $4,2,0$. Quanto valgono il rango, le dimensioni di $U$, $\Sigma$, $V$, e quelle di $\ker A$ e $\ker A^T$?

[risposta]
Rango $2$ (due valori singolari positivi). $U$ è $5\times5$, $\Sigma$ è $5\times3$ come $A$, con diagonale $4,2,0$, $V$ è $3\times3$. $\dim\ker A=3-2=1$, generato da $\mathbf{v}_3$; $\dim\ker A^T=5-2=3$, generato da $\mathbf{u}_3,\mathbf{u}_4,\mathbf{u}_5$.
```

**Valori singolari e norma.** $\lVert A\mathbf{x}\rVert^2=\mathbf{x}^TA^TA\mathbf{x}$ è la forma quadratica di $A^TA$, quindi, per la stima $\lambda_{\min}\lVert\mathbf{x}\rVert^2\le q(\mathbf{x})\le\lambda_{\max}\lVert\mathbf{x}\rVert^2$ della lezione 14,

$$
\sigma_n\lVert\mathbf{x}\rVert\le\lVert A\mathbf{x}\rVert\le\sigma_1\lVert\mathbf{x}\rVert ,
$$

con uguaglianza in $\mathbf{x}=\mathbf{v}_n$ e in $\mathbf{x}=\mathbf{v}_1$. Dunque $\sigma_1=\max_{\lVert\mathbf{x}\rVert=1}\lVert A\mathbf{x}\rVert$, il massimo allungamento: si chiama **norma** (operatoriale) di $A$, $\lVert A\rVert$. Per $A$ quadrata, $\lvert\det A\rvert=\sigma_1\cdots\sigma_n$ (Esercizio 5): il fattore di area o volume della [lezione sui determinanti](/algebra-lineare/spazi-vettoriali/08-determinanti) è il prodotto degli allungamenti. Il rapporto $\sigma_1/\sigma_n$, **numero di condizionamento**, misura quanto $A$ è vicina a una matrice singolare: se è grande, piccoli errori in $\mathbf{b}$ possono spostare molto la soluzione di $A\mathbf{x}=\mathbf{b}$.

**Pseudoinversa e minimi quadrati.** La **pseudoinversa** (di Moore-Penrose) di $A$ è la matrice $n\times m$

$$
A^+=V\Sigma^+U^T=\sum_{i=1}^{r}\frac1{\sigma_i}\,\mathbf{v}_i\mathbf{u}_i^T ,
$$

dove $\Sigma^+$ ($n\times m$, la forma di $\Sigma^T$) ha $(\Sigma^+)_{ii}=1/\sigma_i$ per $i\le r$ e zero altrove. Lettura: $A$ manda $\mathbf{v}_i$ in $\sigma_i\mathbf{u}_i$; $A^+$ rimanda $\mathbf{u}_i$ in $\mathbf{v}_i/\sigma_i$ e annulla $\ker A^T$, la parte di $\mathbb{R}^m$ che $A$ non raggiunge.

**Teorema.** Per ogni $\mathbf{b}\in\mathbb{R}^m$, $\mathbf{x}^+=A^+\mathbf{b}$ è una soluzione ai minimi quadrati di $A\mathbf{x}=\mathbf{b}$ (minimizza $\lVert A\mathbf{x}-\mathbf{b}\rVert$, lezione 12) e, fra tutte, quella di **norma minima**.

*Perché.* Si passa alle coordinate singolari $\mathbf{y}=V^T\mathbf{x}$ e $\mathbf{c}=U^T\mathbf{b}$. Moltiplicare per $U^T$ conserva la norma, quindi

$$
\lVert A\mathbf{x}-\mathbf{b}\rVert^2=\lVert U^T(U\Sigma V^T\mathbf{x}-\mathbf{b})\rVert^2=\lVert\Sigma\mathbf{y}-\mathbf{c}\rVert^2=\sum_{i=1}^{r}(\sigma_iy_i-c_i)^2+\sum_{i=r+1}^{m}c_i^2 .
$$

La seconda somma non dipende da $\mathbf{x}$; la prima vale $0$, il suo minimo, se e solo se $y_i=c_i/\sigma_i$ per $i\le r$, mentre $y_{r+1},\dots,y_n$ restano liberi. Tra queste soluzioni $\lVert\mathbf{x}\rVert^2=\lVert\mathbf{y}\rVert^2=\sum y_i^2$ è minima con i liberi nulli: $\mathbf{y}=\Sigma^+\mathbf{c}$, cioè $\mathbf{x}=V\Sigma^+U^T\mathbf{b}=A^+\mathbf{b}$. La soluzione ai minimi quadrati di norma minima è una sola, e l'insieme delle soluzioni ai minimi quadrati non dipende dalla SVD scelta: quindi $A^+\mathbf{b}$ è la stessa qualunque SVD si usi, e $A^+$ è ben definita anche se $U$ e $V$ non sono uniche.

Casi noti. Se le colonne di $A$ sono indipendenti ($r=n$) non ci sono coordinate libere e $A^+=(A^TA)^{-1}A^T$, la matrice delle equazioni normali della lezione 12: infatti $(A^TA)^{-1}A^T=V(\Sigma^T\Sigma)^{-1}V^TV\Sigma^TU^T$ e $(\Sigma^T\Sigma)^{-1}\Sigma^T=\Sigma^+$ (Esempio 2). Se $A$ è quadrata invertibile, $A^+=A^{-1}$. Se le colonne sono dipendenti, le equazioni normali hanno infinite soluzioni e $A^+$ sceglie la più corta (Esempio 3). In ogni caso $AA^+\mathbf{b}=\sum_{i\le r}c_i\mathbf{u}_i$ è la proiezione di $\mathbf{b}$ su $\operatorname{Im}A$.

**Approssimazione di rango basso.** Tenendo i primi $k<r$ strati si ottiene

$$
A_k=\sum_{i=1}^{k}\sigma_i\,\mathbf{u}_i\mathbf{v}_i^T ,\qquad \operatorname{rk}A_k=k ,\qquad \lVert A-A_k\rVert=\sigma_{k+1} ,
$$

perché $A-A_k=\sum_{i>k}\sigma_i\mathbf{u}_i\mathbf{v}_i^T$ è ancora scritta nella forma della SVD ridotta, con valore singolare massimo $\sigma_{k+1}$. **Teorema di Eckart–Young.** Nessuna matrice di rango $\le k$ fa meglio: $\lVert A-B\rVert\ge\sigma_{k+1}$ per ogni $B$ con $\operatorname{rk}B\le k$, nella norma operatoriale definita sopra. *Perché.* I $k+1$ vettori $B\mathbf{v}_1,\dots,B\mathbf{v}_{k+1}$ stanno in $\operatorname{Im}B$, che ha dimensione $\le k$, quindi sono dipendenti ([Indipendenza lineare, basi e dimensione](/algebra-lineare/spazi-vettoriali/06-indipendenza-basi)): esistono $a_1,\dots,a_{k+1}$ non tutti nulli con $B(a_1\mathbf{v}_1+\dots+a_{k+1}\mathbf{v}_{k+1})=\mathbf{0}$. Dividendo per $\sqrt{a_1^2+\dots+a_{k+1}^2}\neq0$ si ottiene un versore $\mathbf{x}=\sum_{i\le k+1}c_i\mathbf{v}_i$, con $\sum c_i^2=1$ e $B\mathbf{x}=\mathbf{0}$. Allora $\lVert A-B\rVert\ge\lVert(A-B)\mathbf{x}\rVert=\lVert A\mathbf{x}\rVert$, e $\lVert A\mathbf{x}\rVert^2=\sum_{i\le k+1}\sigma_i^2c_i^2\ge\sigma_{k+1}^2\sum_{i\le k+1}c_i^2=\sigma_{k+1}^2$, perché $\sigma_i\ge\sigma_{k+1}$ per $i\le k+1$.

*Compressione.* $A_k$ si memorizza con $k(m+n+1)$ numeri invece di $mn$: una foto $1000\times1000$ approssimata con $k=50$ richiede $100\,050$ numeri invece di un milione.

**Componenti principali.** Sia $X$ una matrice di dati $n\times p$ (qui $n$ conta le osservazioni e $p$ le variabili), con le osservazioni per riga e ogni colonna **demediata** (media zero). La covarianza campionaria è $S=\frac1{n-1}X^TX$ (Austin divide per il numero di dati: cambia solo un fattore costante). I suoi autovettori sono i vettori singolari destri $\mathbf{v}_i$ di $X$, con autovalori $\sigma_i^2/(n-1)$: la varianza dei dati proiettati su $\mathbf{v}_i$ è $\mathbf{v}_i^TS\mathbf{v}_i=\sigma_i^2/(n-1)$. $\mathbf{v}_1$ è la **prima componente principale**, la direzione di massima variabilità, e la quota della varianza totale (la traccia di $S$, somma degli autovalori, lezione 09) che spiega è

$$
\frac{\sigma_1^2}{\sigma_1^2+\sigma_2^2+\dots+\sigma_p^2} .
$$

Le coordinate dei dati lungo $\mathbf{v}_i$ (i punteggi) sono $X\mathbf{v}_i=\sigma_i\mathbf{u}_i$, e $X_q$ raccoglie le osservazioni proiettate sulle prime $q$ componenti. Austin mette i dati per colonne: lì le componenti principali sono i vettori singolari **sinistri**; si scambiano solo i ruoli di $U$ e $V$. La matrice di covarianza di un vettore aleatorio è in [Vettori aleatori — covarianza e correlazione](/probabilita/variabili-aleatorie/08-vettori-aleatori).

## Dimostrazioni

**Esistenza della SVD.** Sia $A$ una matrice reale $m\times n$.

1. *Gli assi di partenza.* $A^TA$ è simmetrica e semidefinita positiva (Esercizio 5 della lezione 14). Per il teorema spettrale, dimostrato nella lezione 14, esiste una base ortonormale $\mathbf{v}_1,\dots,\mathbf{v}_n$ di $\mathbb{R}^n$ con $A^TA\mathbf{v}_i=\lambda_i\mathbf{v}_i$. Gli autovalori sono $\ge0$ perché $\lambda_i=\lambda_i\mathbf{v}_i^T\mathbf{v}_i=\mathbf{v}_i^TA^TA\mathbf{v}_i=\lVert A\mathbf{v}_i\rVert^2$; li ordiniamo in modo decrescente, riordinando i $\mathbf{v}_i$ allo stesso modo (resta una base ortonormale). Poniamo $\sigma_i=\sqrt{\lambda_i}$ e chiamiamo $r$ il numero di $\lambda_i>0$.
2. *Quali vettori vanno a zero.* Lo stesso calcolo dà $\lVert A\mathbf{v}_i\rVert=\sigma_i$: quindi $A\mathbf{v}_i=\mathbf{0}$ esattamente per $i>r$.
3. *Gli assi di arrivo sono perpendicolari.* Per $i\le r$ poniamo $\mathbf{u}_i=A\mathbf{v}_i/\sigma_i$, lecito perché $\sigma_i>0$. Per $i,j\le r$, usando $A^TA\mathbf{v}_j=\lambda_j\mathbf{v}_j$:

$$
\mathbf{u}_i^T\mathbf{u}_j=\frac{(A\mathbf{v}_i)^T(A\mathbf{v}_j)}{\sigma_i\sigma_j}=\frac{\mathbf{v}_i^TA^TA\mathbf{v}_j}{\sigma_i\sigma_j}=\frac{\lambda_j\,\mathbf{v}_i^T\mathbf{v}_j}{\sigma_i\sigma_j},
$$

che vale $0$ se $i\neq j$ (i $\mathbf{v}$ sono ortogonali) e $\lambda_i/\sigma_i^2=1$ se $i=j$. Dunque $\mathbf{u}_1,\dots,\mathbf{u}_r$ sono ortonormali. È il cuore della prova: l'ortogonalità dei $\mathbf{v}_i$ passa alle loro immagini perché sono autovettori di $A^TA$; per due vettori ortogonali qualunque non varrebbe.
4. *$r$ è il rango.* $\ker(A^TA)=\ker A$: se $A^TA\mathbf{x}=\mathbf{0}$, allora $\lVert A\mathbf{x}\rVert^2=\mathbf{x}^TA^TA\mathbf{x}=0$, cioè $A\mathbf{x}=\mathbf{0}$; il viceversa si ottiene moltiplicando $A\mathbf{x}=\mathbf{0}$ per $A^T$. D'altra parte, scrivendo $\mathbf{x}=\sum c_i\mathbf{v}_i$ si ha $A^TA\mathbf{x}=\sum\lambda_ic_i\mathbf{v}_i$, nullo se e solo se $c_i=0$ per ogni $i\le r$ (i $\mathbf{v}_i$ sono indipendenti e $\lambda_i>0$ per $i\le r$): quindi $\ker(A^TA)=\operatorname{span}\{\mathbf{v}_{r+1},\dots,\mathbf{v}_n\}$ ha dimensione $n-r$. Per nullità più rango, $\operatorname{rk}A=n-\dim\ker A=n-\dim\ker(A^TA)=r$. In più, ogni $A\mathbf{x}$ con $\mathbf{x}=\sum c_i\mathbf{v}_i$ è $\sum_{i\le r}c_i\sigma_i\mathbf{u}_i$ (passi 2 e 3): $\mathbf{u}_1,\dots,\mathbf{u}_r$ è una base ortonormale di $\operatorname{Im}A$.
5. *Completamento.* Se $r<m$, estendiamo $\mathbf{u}_1,\dots,\mathbf{u}_r$ a una base ortonormale $\mathbf{u}_1,\dots,\mathbf{u}_m$ di $\mathbb{R}^m$ come al passo 3 della dimostrazione della lezione 14: si aggiungono vettori della base canonica fuori dallo span e si applica Gram-Schmidt ([Processo di Gram-Schmidt e fattorizzazione QR](/algebra-lineare/ortogonalita/13-gram-schmidt)), che lascia invariati i primi $r$ vettori, perché ciascuno è già ortogonale ai precedenti e di norma $1$. $U=[\mathbf{u}_1\ \cdots\ \mathbf{u}_m]$ e $V=[\mathbf{v}_1\ \cdots\ \mathbf{v}_n]$ sono ortogonali.
6. *Verifica.* Sia $\Sigma$ la matrice $m\times n$ con $\Sigma_{ii}=\sigma_i$ per $i\le\min(m,n)$ e zero altrove. Confrontiamo $AV$ e $U\Sigma$ colonna per colonna. La colonna $i$ di $AV$ è $A\mathbf{v}_i$; quella di $U\Sigma$ è $U$ per la colonna $i$ di $\Sigma$, cioè $\sigma_i\mathbf{u}_i$ se $i\le m$ e $\mathbf{0}$ se $i>m$. Per $i\le r$ le due coincidono per definizione di $\mathbf{u}_i$. Per $i>r$, $A\mathbf{v}_i=\mathbf{0}$ (passo 2) e anche la colonna di $U\Sigma$ è nulla, perché $i>m$ oppure $\sigma_i=0$. Quindi $AV=U\Sigma$; moltiplicando a destra per $V^T$ e usando $VV^T=I$ si ottiene $A=U\Sigma V^T$. $\blacksquare$

*Che cosa è unico.* I valori singolari sì: da qualunque SVD, $A^TA=V\Sigma^T\Sigma V^T$, quindi i $\sigma_i^2$ sono per forza gli autovalori di $A^TA$. I vettori singolari no: si può cambiare segno a una coppia $(\mathbf{u}_i,\mathbf{v}_i)$ insieme, con valori singolari ripetuti si può cambiare la base ortonormale dell'autospazio di $A^TA$ scelta per i $\mathbf{v}_i$, e gli $\mathbf{u}_i=A\mathbf{v}_i/\sigma_i$ cambiano di conseguenza; $\mathbf{v}_{r+1},\dots,\mathbf{v}_n$ sono una base ortonormale qualunque di $\ker A$, e $\mathbf{u}_{r+1},\dots,\mathbf{u}_m$ di $\ker A^T$.

## Esempi

**Esempio 1 (una $2\times2$ non simmetrica: costruzione e geometria).** $A=\left(\begin{smallmatrix}3&0\\4&5\end{smallmatrix}\right)$.

*Strategia:* la procedura passo per passo, poi l'immagine del cerchio. $A^TA=\left(\begin{smallmatrix}25&20\\20&25\end{smallmatrix}\right)$ ha traccia $50$ e determinante $225$: $p(t)=t^2-50t+225=(t-45)(t-5)$, quindi $\sigma_1=\sqrt{45}=3\sqrt5\approx6{,}71$ e $\sigma_2=\sqrt5\approx2{,}24$. $A^TA-45I=\left(\begin{smallmatrix}-20&20\\20&-20\end{smallmatrix}\right)$ dà $\mathbf{v}_1=\tfrac1{\sqrt2}(1,1)$; per $\lambda=5$, $\mathbf{v}_2=\tfrac1{\sqrt2}(-1,1)$. Poi $A\mathbf{v}_1=\tfrac1{\sqrt2}(3,9)$, quindi $\mathbf{u}_1=\tfrac1{3\sqrt5}\cdot\tfrac1{\sqrt2}(3,9)=\tfrac1{\sqrt{10}}(1,3)$, e $A\mathbf{v}_2=\tfrac1{\sqrt2}(-3,1)$, quindi $\mathbf{u}_2=\tfrac1{\sqrt{10}}(-3,1)$. Controllo: $\mathbf{u}_1\cdot\mathbf{u}_2=\tfrac{-3+3}{10}=0$.

$$
\begin{pmatrix}3&0\\4&5\end{pmatrix}=\frac1{\sqrt{10}}\begin{pmatrix}1&-3\\3&1\end{pmatrix}\begin{pmatrix}3\sqrt5&0\\0&\sqrt5\end{pmatrix}\frac1{\sqrt2}\begin{pmatrix}1&1\\-1&1\end{pmatrix}
$$

$\det U=\det V=1$: due rotazioni. Gli autovalori di $A$, triangolare, sono $3$ e $5$, diversi dai valori singolari; ma $\lvert\det A\rvert=15=3\sqrt5\cdot\sqrt5$.

*Geometria.* Se $\mathbf{y}=A\mathbf{x}$ con $\lVert\mathbf{x}\rVert=1$, allora $\mathbf{x}=A^{-1}\mathbf{y}$ e $1=\mathbf{x}^T\mathbf{x}=\mathbf{y}^T(AA^T)^{-1}\mathbf{y}$. Con $AA^T=\left(\begin{smallmatrix}9&12\\12&41\end{smallmatrix}\right)$, di determinante $225$, l'immagine del cerchio unitario è l'ellisse $41y_1^2-24y_1y_2+9y_2^2=225$, cioè $y_2=\tfrac13\big(4y_1\pm5\sqrt{9-y_1^2}\big)$ per $\lvert y_1\rvert\le3$, con semiasse $3\sqrt5$ lungo $\mathbf{u}_1$ e $\sqrt5$ lungo $\mathbf{u}_2$.

| $\mathbf{x}$ (versore) | $A\mathbf{x}$ | $\lVert A\mathbf{x}\rVert$ |
|---|---|---|
| $\mathbf{v}_1=\tfrac1{\sqrt2}(1,1)$ | $\tfrac1{\sqrt2}(3,9)\approx(2{,}12;\ 6{,}36)$ | $3\sqrt5\approx6{,}71$, massimo |
| $\mathbf{v}_2=\tfrac1{\sqrt2}(-1,1)$ | $\tfrac1{\sqrt2}(-3,1)\approx(-2{,}12;\ 0{,}71)$ | $\sqrt5\approx2{,}24$, minimo |
| $\mathbf{e}_1=(1,0)$ | $(3,4)$ | $5$ |
| $\mathbf{e}_2=(0,1)$ | $(0,5)$ | $5$ |

Nel grafico ($x=y_1$, $y=y_2$), con la stessa scala sui due assi, osserva l'ellisse inclinata: il semiasse lungo punta verso $(1,3)$, la direzione di $\mathbf{u}_1$, quello corto verso $(-3,1)$. I punti $(3,4)$ e $(0,5)$, immagini dei vettori della base canonica, stanno sull'ellisse ma **non** ne sono i vertici: gli assi li decidono i $\mathbf{v}_i$, non $\mathbf{e}_1$ ed $\mathbf{e}_2$. Il cerchio unitario di partenza non è disegnato.

```plot
{"title": "Immagine del cerchio unitario mediante A: 41x² − 24xy + 9y² = 225 (stessa scala sui due assi)", "fn": "Math.abs(x) <= 3.0001 ? (4*x + 5*Math.sqrt(Math.max(0, 9 - x*x)))/3 : NaN", "fn2": "Math.abs(x) <= 3.0001 ? (4*x - 5*Math.sqrt(Math.max(0, 9 - x*x)))/3 : NaN", "domain": [-15, 15], "yDomain": [-6.73, 6.73], "label1": "ramo superiore", "label2": "ramo inferiore"}
```

**Esempio 2 (una $3\times2$: $\Sigma$ rettangolare, completamento, pseudoinversa).** $A=\left(\begin{smallmatrix}1&1\\0&1\\1&0\end{smallmatrix}\right)$.

*Destri.* $A^TA=\left(\begin{smallmatrix}2&1\\1&2\end{smallmatrix}\right)$, autovalori $3$ e $1$: $\sigma_1=\sqrt3$, $\sigma_2=1$, rango $2$; $\mathbf{v}_1=\tfrac1{\sqrt2}(1,1)$, $\mathbf{v}_2=\tfrac1{\sqrt2}(1,-1)$. *Sinistri.* $\mathbf{u}_1=A\mathbf{v}_1/\sqrt3=\tfrac1{\sqrt6}(2,1,1)$ e $\mathbf{u}_2=A\mathbf{v}_2=\tfrac1{\sqrt2}(0,-1,1)$. Per completare serve un versore di $\ker A^T$: $A^T\mathbf{y}=\mathbf{0}$ dà $y_1+y_3=0$ e $y_1+y_2=0$, quindi $\mathbf{u}_3=\tfrac1{\sqrt3}(1,-1,-1)$, ortogonale a $\mathbf{u}_1$ ($2-1-1=0$) e a $\mathbf{u}_2$ ($0+1-1=0$).

$$
A=\underbrace{\begin{pmatrix}\tfrac2{\sqrt6}&0&\tfrac1{\sqrt3}\\ \tfrac1{\sqrt6}&-\tfrac1{\sqrt2}&-\tfrac1{\sqrt3}\\ \tfrac1{\sqrt6}&\tfrac1{\sqrt2}&-\tfrac1{\sqrt3}\end{pmatrix}}_{U\ (3\times3)}\underbrace{\begin{pmatrix}\sqrt3&0\\0&1\\0&0\end{pmatrix}}_{\Sigma\ (3\times2)}\underbrace{\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}}_{V^T}
$$

$\Sigma$ ha la forma di $A$; $\mathbf{u}_3$ moltiplica la riga nulla di $\Sigma$ e non contribuisce, quindi la SVD ridotta usa solo $\mathbf{u}_1,\mathbf{u}_2$. $\operatorname{Im}A$ è il piano ortogonale a $(1,-1,-1)$ e $\ker A=\{\mathbf{0}\}$.

*Pseudoinversa.* $A^+=\tfrac1{\sqrt3}\mathbf{v}_1\mathbf{u}_1^T+\mathbf{v}_2\mathbf{u}_2^T=\tfrac16\left(\begin{smallmatrix}2&1&1\\2&1&1\end{smallmatrix}\right)+\tfrac12\left(\begin{smallmatrix}0&-1&1\\0&1&-1\end{smallmatrix}\right)=\tfrac13\left(\begin{smallmatrix}1&-1&2\\1&2&-1\end{smallmatrix}\right)$. Le colonne sono indipendenti, quindi deve coincidere con la matrice delle equazioni normali: $(A^TA)^{-1}A^T=\tfrac13\left(\begin{smallmatrix}2&-1\\-1&2\end{smallmatrix}\right)\left(\begin{smallmatrix}1&0&1\\1&1&0\end{smallmatrix}\right)=\tfrac13\left(\begin{smallmatrix}1&-1&2\\1&2&-1\end{smallmatrix}\right)$.

**Esempio 3 (multicollinearità perfetta: la soluzione più corta).** In un modello senza intercetta la stessa variabile $\mathbf{x}=(1,2,2)$ entra due volte, per esempio registrata sotto due voci: $X=\left(\begin{smallmatrix}1&1\\2&2\\2&2\end{smallmatrix}\right)$, con $\mathbf{y}=(1,1,1)$. Si cerca $\boldsymbol\beta=(\beta_1,\beta_2)$ che minimizza $\lVert X\boldsymbol\beta-\mathbf{y}\rVert$.

*Perché le equazioni normali non bastano.* $X^TX=\left(\begin{smallmatrix}9&9\\9&9\end{smallmatrix}\right)$ è singolare: $X^TX\boldsymbol\beta=X^T\mathbf{y}=(5,5)$ dà la sola condizione $\beta_1+\beta_2=\tfrac59$, una retta di soluzioni ai minimi quadrati, tutte con gli stessi valori stimati. La lezione 12 toglieva la colonna ridondante; la SVD sceglie invece una soluzione precisa.

*SVD.* Gli autovalori di $X^TX$ sono $18$ e $0$: $\sigma_1=3\sqrt2$ con $\mathbf{v}_1=\tfrac1{\sqrt2}(1,1)$ e $\mathbf{u}_1=X\mathbf{v}_1/(3\sqrt2)=\tfrac13(1,2,2)$; $\sigma_2=0$, e $\mathbf{v}_2=\tfrac1{\sqrt2}(1,-1)$ genera $\ker X$. Quindi

$$
X^+=\frac1{3\sqrt2}\,\mathbf{v}_1\mathbf{u}_1^T=\frac1{18}\begin{pmatrix}1&2&2\\1&2&2\end{pmatrix},\qquad \boldsymbol\beta^+=X^+\mathbf{y}=\Big(\frac5{18},\ \frac5{18}\Big).
$$

*Verifica.* $\beta_1+\beta_2=\tfrac59$: è una soluzione ai minimi quadrati. Sulla retta $\boldsymbol\beta=(\tfrac59-t,\ t)$ si ha $\lVert\boldsymbol\beta\rVert^2=2t^2-\tfrac{10}9t+\tfrac{25}{81}$, minima in $t=\tfrac5{18}$: proprio $\boldsymbol\beta^+$. Il residuo $\mathbf{y}-X\boldsymbol\beta^+=(1,1,1)-\tfrac59(1,2,2)=(\tfrac49,-\tfrac19,-\tfrac19)$ è ortogonale a $(1,2,2)$.

Lettura: i dati identificano solo la somma degli effetti, non i singoli coefficienti. La pseudoinversa divide l'effetto a metà perché è la scelta di norma minima, non perché i dati lo dicano. È la multicollinearità perfetta della regressione ([Regressione lineare multipla](/statistica/regressione/09-regressione-multipla), [Il modello di regressione lineare classico](/econometria/regressione-ols/01-clrm)).

**Esempio 4 (rango basso e componenti principali: due tassi d'interesse).** In quattro mesi si registrano gli scarti dalla media di un tasso a breve e di uno a lungo termine, in punti base; righe = mesi, colonne = tassi:

$$
X=\begin{pmatrix}7&5\\5&7\\-5&-7\\-7&-5\end{pmatrix}\qquad(\text{medie di colonna nulle}).
$$

*SVD.* $X^TX=\left(\begin{smallmatrix}148&140\\140&148\end{smallmatrix}\right)$ ha autovalori $288$ e $8$: $\sigma_1=12\sqrt2\approx16{,}97$ e $\sigma_2=2\sqrt2\approx2{,}83$, con $\mathbf{v}_1=\tfrac1{\sqrt2}(1,1)$ e $\mathbf{v}_2=\tfrac1{\sqrt2}(1,-1)$. Poi $\mathbf{u}_1=X\mathbf{v}_1/\sigma_1=\tfrac12(1,1,-1,-1)$ e $\mathbf{u}_2=X\mathbf{v}_2/\sigma_2=\tfrac12(1,-1,1,-1)$.

*Lettura da economista.* $\mathbf{v}_1$ pesa i due tassi allo stesso modo: è il **livello**, i tassi che salgono e scendono insieme. $\mathbf{v}_2$ ne fa la differenza: la **pendenza** della curva dei tassi (il segno di $\mathbf{v}_2$ è arbitrario; con $-\mathbf{v}_2$ si legge lungo meno breve, come d'uso). La prima componente spiega $\tfrac{288}{288+8}=\tfrac{36}{37}\approx97{,}3\%$ della varianza totale. I punteggi sul livello sono $X\mathbf{v}_1=\sigma_1\mathbf{u}_1=6\sqrt2\,(1,1,-1,-1)$: due mesi sopra la media, due sotto.

*Rango 1.* $X_1=\sigma_1\mathbf{u}_1\mathbf{v}_1^T=\left(\begin{smallmatrix}6&6\\6&6\\-6&-6\\-6&-6\end{smallmatrix}\right)$ riduce ogni mese al solo livello. L'errore $X-X_1=\left(\begin{smallmatrix}1&-1\\-1&1\\1&-1\\-1&1\end{smallmatrix}\right)=\sigma_2\mathbf{u}_2\mathbf{v}_2^T$ ha norma $\sigma_2=2\sqrt2$, e per Eckart–Young nessuna matrice di rango $1$ è più vicina a $X$. Con due variabili non si risparmia memoria; con $50$ tassi per $200$ mesi, tre componenti richiedono $3\cdot(200+50+1)=753$ numeri invece di $10\,000$.

## Esercizi

**Esercizio 1.** Trova una SVD di $A=\left(\begin{smallmatrix}2&0\\0&-3\end{smallmatrix}\right)$. In che cosa differiscono valori singolari e autovalori?

<details>
<summary>Soluzione</summary>

$A^TA=\operatorname{diag}(4,9)$. In ordine decrescente: $\sigma_1=3$ con $\mathbf{v}_1=\mathbf{e}_2$, $\sigma_2=2$ con $\mathbf{v}_2=\mathbf{e}_1$. Poi $\mathbf{u}_1=A\mathbf{e}_2/3=(0,-1)$ e $\mathbf{u}_2=A\mathbf{e}_1/2=(1,0)$. Quindi $U=\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$, $\Sigma=\operatorname{diag}(3,2)$, $V=\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$. Controllo: $U\Sigma=\left(\begin{smallmatrix}0&2\\-3&0\end{smallmatrix}\right)$ e $U\Sigma V^T=\left(\begin{smallmatrix}2&0\\0&-3\end{smallmatrix}\right)$. Gli autovalori sono $2$ e $-3$; i valori singolari sono i loro moduli, riordinati: il segno meno finisce in $U$, e l'ordine decrescente scambia le colonne.
</details>

**Esercizio 2.** Sia $A=\left(\begin{smallmatrix}1&2&2\\1&2&2\end{smallmatrix}\right)$. Trova una SVD ridotta, il rango e basi di $\operatorname{Im}A$ e di $\ker A$.

<details>
<summary>Soluzione</summary>

Le righe sono uguali: $A=\mathbf{a}\mathbf{w}^T$ con $\mathbf{a}=(1,1)$ e $\mathbf{w}=(1,2,2)$. Normalizzando, $A=\lVert\mathbf{a}\rVert\lVert\mathbf{w}\rVert\,\mathbf{u}_1\mathbf{v}_1^T=3\sqrt2\,\mathbf{u}_1\mathbf{v}_1^T$, con $\mathbf{u}_1=\tfrac1{\sqrt2}(1,1)$ e $\mathbf{v}_1=\tfrac13(1,2,2)$: è già una SVD ridotta, con $\sigma_1=3\sqrt2$. Controllo: $A^TA=2\mathbf{w}\mathbf{w}^T$ e $A^TA\mathbf{v}_1=\tfrac23\mathbf{w}(\mathbf{w}^T\mathbf{w})=6\mathbf{w}=18\,\mathbf{v}_1$; gli altri due autovalori sono $0$. Rango $1$, $\operatorname{Im}A=\operatorname{span}\{(1,1)\}$, $\ker A$ è il piano $x_1+2x_2+2x_3=0$, con base $(-2,1,0)$, $(-2,0,1)$. Per la SVD piena servono una base ortonormale di quel piano, per esempio $\tfrac1{\sqrt2}(0,1,-1)$ e $\tfrac1{3\sqrt2}(4,-1,-1)$, e $\mathbf{u}_2=\tfrac1{\sqrt2}(1,-1)$; $\Sigma$ è $2\times3$ con la sola entrata $3\sqrt2$.
</details>

**Esercizio 3.** Dimostra che: (a) se $A$ è simmetrica con autovalori $\lambda_i$, i suoi valori singolari sono i $\lvert\lambda_i\rvert$; (b) se $Q$ è ortogonale, i suoi valori singolari valgono tutti $1$. (c) Quando valori singolari e autovalori di una simmetrica coincidono?

<details>
<summary>Soluzione</summary>

(a) $A=Q\Lambda Q^T$ (lezione 14), quindi $A^TA=A^2=Q\Lambda^2Q^T$: gli autovalori di $A^TA$ sono i $\lambda_i^2$ e $\sigma_i=\sqrt{\lambda_i^2}=\lvert\lambda_i\rvert$. (b) $Q^TQ=I$ ha solo l'autovalore $1$. (c) Quando tutti i $\lambda_i\ge0$, cioè $A$ è semidefinita positiva: allora $Q\Lambda Q^T$, con gli autovalori in ordine decrescente, è già una SVD con $U=V=Q$.
</details>

**Esercizio 4.** Sia $A=\left(\begin{smallmatrix}1&1\\1&1\end{smallmatrix}\right)$ e $\mathbf{b}=(1,3)$. Calcola $A^+$ e $\mathbf{x}^+=A^+\mathbf{b}$; descrivi tutte le soluzioni ai minimi quadrati e verifica che $\mathbf{x}^+$ è la più corta.

<details>
<summary>Soluzione</summary>

$A^TA=\left(\begin{smallmatrix}2&2\\2&2\end{smallmatrix}\right)$ ha autovalori $4$ e $0$: $\sigma_1=2$, $\mathbf{v}_1=\tfrac1{\sqrt2}(1,1)$, $\mathbf{u}_1=A\mathbf{v}_1/2=\tfrac1{\sqrt2}(1,1)$. $A^+=\tfrac12\mathbf{v}_1\mathbf{u}_1^T=\tfrac14\left(\begin{smallmatrix}1&1\\1&1\end{smallmatrix}\right)$ e $\mathbf{x}^+=(1,1)$. $A\mathbf{x}^+=(2,2)$ è la proiezione di $\mathbf{b}$ sulla retta di $(1,1)$; il residuo $(-1,1)$ le è ortogonale. Le soluzioni ai minimi quadrati sono quelle con $A\mathbf{x}=(2,2)$, cioè $x_1+x_2=2$; sulla retta $(2-t,t)$ la norma al quadrato $(2-t)^2+t^2$ è minima in $t=1$, cioè in $\mathbf{x}^+$.
</details>

**Esercizio 5.** Dimostra che per $A$ quadrata $\lvert\det A\rvert=\sigma_1\cdots\sigma_n$ e deduci che $A$ è invertibile se e solo se $\sigma_n>0$. Verifica sull'Esempio 1.

<details>
<summary>Soluzione</summary>

Per la moltiplicatività del determinante, $\det(AB)=\det A\det B$ (teorema di Binet, lezione 08), $\det A=\det U\cdot\det\Sigma\cdot\det V^T$. Per una $Q$ ortogonale $(\det Q)^2=\det(Q^TQ)=\det I=1$, quindi $\det Q=\pm1$; e $\det\Sigma=\sigma_1\cdots\sigma_n\ge0$. Quindi $\lvert\det A\rvert=\sigma_1\cdots\sigma_n$. $A$ è invertibile se e solo se $\det A\neq0$, cioè se nessun $\sigma_i$ è nullo; poiché $\sigma_n$ è il più piccolo, basta $\sigma_n>0$. Esempio 1: $3\sqrt5\cdot\sqrt5=15=3\cdot5-0\cdot4$.
</details>

**Esercizio 6.** Trova la migliore approssimazione di rango $1$ di $A=\left(\begin{smallmatrix}3&0\\4&5\end{smallmatrix}\right)$ (Esempio 1) e la norma dell'errore.

<details>
<summary>Soluzione</summary>

$A_1=\sigma_1\mathbf{u}_1\mathbf{v}_1^T=3\sqrt5\cdot\tfrac1{\sqrt{10}\sqrt2}\left(\begin{smallmatrix}1&1\\3&3\end{smallmatrix}\right)=\tfrac32\left(\begin{smallmatrix}1&1\\3&3\end{smallmatrix}\right)$, perché $\sqrt{10}\sqrt2=2\sqrt5$. L'errore è $A-A_1=\tfrac12\left(\begin{smallmatrix}3&-3\\-1&1\end{smallmatrix}\right)=\sigma_2\mathbf{u}_2\mathbf{v}_2^T$, con norma $\sigma_2=\sqrt5\approx2{,}24$; per Eckart–Young nessuna matrice di rango $1$ fa meglio. L'immagine di $A_1$ è la retta di $\mathbf{u}_1$: $A_1$ schiaccia l'ellisse dell'Esempio 1 sul suo asse maggiore.
</details>
