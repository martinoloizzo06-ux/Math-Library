---
id: algebra-14-forme-quadratiche
titolo: "Matrici simmetriche e forme quadratiche"
materia: algebra-lineare
argomento: "Autovalori e diagonalizzazione"
modulo: "Autovalori e diagonalizzazione"
livello: universitario
slug: algebra-14-forme-quadratiche

# legacy
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: "Matrici simmetriche e forme quadratiche"
title_en: "Symmetric matrices and quadratic forms"
level: blue
order: 14

prerequisiti:
  - algebra-09-autovalori-autovettori
  - algebra-10-diagonalizzazione
  - algebra-11-prodotto-scalare
  - algebra-12-ortogonalita-proiezioni
  - algebra-13-gram-schmidt

collegamenti:
  - algebra-08-determinanti
  - algebra-15-svd
  - analisi-20-funzioni-piu-variabili
  - analisi-22-ottimizzazione-lagrange

fonti_integrate:
  - id_fonte: austin-ula
    ruolo: primaria
    sezioni_coperte: "§7.1: matrice ortogonalmente diagonalizzabile (Def. 7.1.4), matrice simmetrica (Def. 7.1.5), teorema spettrale (Thm 7.1.9, solo enunciato: A è ortogonalmente diagonalizzabile se e solo se è simmetrica); §7.2: forma quadratica di una matrice simmetrica e suo valore su un autovettore, massimo e minimo sui versori (Prop. 7.2.5), teorema degli assi principali (Thm 7.2.10), matrici definite, semidefinite e indefinite (Def. 7.2.11, senza la semidefinita negativa) e condizioni sufficienti sugli autovalori (Prop. 7.2.12), Hessiana e test delle derivate seconde (Prop. 7.2.13)"
    note: "copre il nucleo della lezione (forme quadratiche, assi principali, classificazione, legame con l'Hessiana) ma NON dimostra il teorema spettrale: la traccia della dimostrazione viene da cherney-linalg. Non tratta il criterio dei minori principali"
  - id_fonte: axler-ladr
    ruolo: minore
    sezioni_coperte: "7.12 gli autovalori di un operatore autoaggiunto sono reali; 7.29 teorema spettrale reale (dimostrato con il polinomio minimo e la triangolarizzazione in base ortonormale, via non seguita qui); 7.34 e 7.38 operatore positivo e sue caratterizzazioni (autoaggiunto con autovalori non negativi); 9.18–9.20 forme quadratiche e loro scrittura in coordinate"
    note: "verifica del rigore; l'argomento della parte 1 della dimostrazione (autovalori reali) è la versione matriciale di 7.12"
  - id_fonte: cherney-linalg
    ruolo: minore
    sezioni_coperte: "cap. 15 «Diagonalizing Symmetric Matrices»: Example 140 (autovalori reali di una simmetrica 2×2), Thm 15.0.1 (autovettori di autovalori distinti ortogonali), costruzione per induzione con una base ortonormale che contiene un autovettore e Thm 15.0.2 (M simmetrica ⇔ M = PDPᵀ con P ortogonale), Example 142; Review Problem 1 (realtà degli autovalori con il coniugato complesso)"
    note: "fonte della traccia della dimostrazione chiave (parte 1 dal Review Problem 1, parte 2 dalla costruzione del cap. 15); qui l'induzione è scritta per esteso"
  - id_fonte: villanacci-math2
    ruolo: appunti-prof
    sezioni_coperte: "Def. 64 (matrice simmetrica); Def. 935 (matrice simmetrica semidefinita e definita negativa, con la scrittura xAx); §20.2.1: Def. 972 (minori principali e minori principali di testa, simboli D̃ₖ e Dₖ), Thm 975 e Rem. 976 (segni dei minori dell'Hessiana e concavità), Rem. 977 (controesempio: minori di testa nulli senza concavità)"
    note: "NON tratta il teorema spettrale né la diagonalizzazione ortogonale: la notazione del professore è usata solo per matrice simmetrica, definitezza, minori principali e Hessiana D²f; confronto dei simboli in Teoria"

contratto: "3.0"
profondita: essenziale
tipo: teorica
versione: "1.0"
data_ultima_rielaborazione: "2026-10-06"
stato: da-rivedere
componenti_usati:
  - checkpoint
  - slider
---

## Intuizione

Una matrice qualunque deforma il piano in modo complicato: stira, ruota, inclina. Una matrice **simmetrica** ($A=A^T$) fa qualcosa di molto più semplice: esistono sempre $n$ direzioni **perpendicolari tra loro** lungo le quali $A$ si limita a stirare (o a ribaltare) i vettori, ciascuna con il suo fattore. Per una matrice generica non è garantito nemmeno che le direzioni invarianti bastino a formare una base ([Diagonalizzazione di matrici](/algebra-lineare/autovalori-e-diagonalizzazione/10-diagonalizzazione)); per una simmetrica non solo bastano, ma si possono scegliere ortonormali. È il **teorema spettrale**.

La ricompensa si vede sulle **forme quadratiche**, le funzioni come $q(x,y)=5x^2+4xy+2y^2$, fatte solo di termini di secondo grado. Il termine misto $4xy$ rende difficile dire se $q$ sia sempre positiva. Ma se si misura il punto lungo gli assi perpendicolari di $A$ invece che lungo $x$ e $y$, il termine misto sparisce e resta una somma di quadrati pesati dagli autovalori. Il segno degli autovalori decide allora la forma del grafico: tutti positivi, una **ciotola**; tutti negativi, una **cupola**; di segno diverso, una **sella**.

È esattamente la domanda che si pone in un punto critico di una funzione di più variabili: vicino a quel punto la funzione si comporta come una forma quadratica, quella della sua matrice delle derivate seconde, l'**Hessiana**. Classificare forme quadratiche è il passo algebrico che serve all'ottimizzazione.

## Teoria

**Simboli.** $\langle\mathbf{u},\mathbf{v}\rangle$ o $\mathbf{u}^T\mathbf{v}$ è il prodotto scalare standard di $\mathbb{R}^n$, come nelle lezioni 11–13 (gli appunti scrivono $\mathbf{x}\cdot\mathbf{y}$). La forma quadratica si scrive qui $\mathbf{x}^TA\mathbf{x}$; gli appunti scrivono $\mathbf{x}A\mathbf{x}$ (Def. 935) e $D^2f(\mathbf{x})$ per l'Hessiana, che qui è $H_f(\mathbf{x})$. Minori principali di testa: $D_k$, come negli appunti (Def. 972). $\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$ è la matrice diagonale degli autovalori, come nella lezione 10.

**Matrice simmetrica e matrice ortogonale.** $A$ quadrata è **simmetrica** se $A^T=A$, cioè $a_{ij}=a_{ji}$ (appunti Def. 64): la matrice è speculare rispetto alla diagonale. Una matrice quadrata $Q$ è **ortogonale** se $Q^TQ=I$, cioè se le sue colonne sono una base ortonormale di $\mathbb{R}^n$ ([Processo di Gram-Schmidt e fattorizzazione QR](/algebra-lineare/ortogonalita/13-gram-schmidt)); allora $Q^{-1}=Q^T$ e quindi anche $QQ^T=I$. Moltiplicare per $Q$ o per $Q^T$ conserva le lunghezze: $\lVert Q^T\mathbf{x}\rVert^2=\mathbf{x}^TQQ^T\mathbf{x}=\mathbf{x}^T\mathbf{x}=\lVert\mathbf{x}\rVert^2$.

**Teorema spettrale.** Sia $A$ una matrice $n\times n$ reale simmetrica. Allora:

1. tutti gli autovalori di $A$ (le radici del polinomio caratteristico) sono **reali**;
2. esistono una matrice ortogonale $Q$ e una matrice diagonale reale $\Lambda$ tali che

$$
A=Q\Lambda Q^T=\sum_{i=1}^n\lambda_i\,\mathbf{q}_i\mathbf{q}_i^T .
$$

Le colonne $\mathbf{q}_1,\dots,\mathbf{q}_n$ di $Q$ sono una **base ortonormale di autovettori**: $A\mathbf{q}_i=\lambda_i\mathbf{q}_i$. Viceversa, ogni matrice della forma $Q\Lambda Q^T$ è simmetrica, perché $(Q\Lambda Q^T)^T=Q\Lambda^TQ^T=Q\Lambda Q^T$ ($\Lambda$ diagonale è uguale alla sua trasposta). Quindi: *una matrice reale si diagonalizza con una base ortonormale di autovettori se e solo se è simmetrica.*

Lettura. È la diagonalizzazione $A=P\Lambda P^{-1}$ della lezione 10 con un vantaggio: la matrice di passaggio è ortogonale, e $P^{-1}$ si sostituisce con $Q^T$, senza invertire nulla. La somma a destra si ottiene scrivendo il prodotto $(Q\Lambda)Q^T$ come somma di prodotti colonna per riga: la colonna $i$ di $Q\Lambda$ è $\lambda_i\mathbf{q}_i$, la riga $i$ di $Q^T$ è $\mathbf{q}_i^T$. Poiché $\mathbf{q}_i\mathbf{q}_i^T\mathbf{x}$ è la proiezione di $\mathbf{x}$ sulla retta di $\mathbf{q}_i$ ([Ortogonalità e proiezioni ortogonali](/algebra-lineare/ortogonalita/12-ortogonalita-proiezioni)), la formula dice: *$A$ scompone $\mathbf{x}$ lungo $n$ assi perpendicolari, moltiplica ogni componente per il suo autovalore e ricompone.* La dimostrazione è nella sezione Dimostrazioni.

Due conseguenze. Autovettori di autovalori **distinti** sono automaticamente ortogonali (dimostrazione in [Autovalori e autovettori](/algebra-lineare/autovalori-e-diagonalizzazione/09-autovalori-autovettori)); dentro un autospazio di dimensione $\ge2$, invece, una base qualunque va resa ortonormale con Gram-Schmidt (Esempio 3). E per ogni autovalore la molteplicità geometrica $m_g$ è uguale a quella algebrica $m_a$: $\lambda$ compare in $\Lambda$ tante volte quanta è la sua molteplicità algebrica ($A$ e $\Lambda$ sono simili, quindi hanno lo stesso polinomio caratteristico, lezione 10), e le colonne di $Q$ corrispondenti sono altrettanti autovettori indipendenti, quindi $m_g\ge m_a$; poiché vale sempre $m_g\le m_a$ (lezione 09), le due molteplicità coincidono.

**Procedura (diagonalizzazione ortogonale).** (1) Autovalori, dal polinomio caratteristico. (2) Una base di ogni autospazio $\ker(A-\lambda I)$. (3) Gram-Schmidt dentro ogni autospazio, poi normalizzazione. (4) $Q$ ha per colonne questi vettori, $\Lambda$ i rispettivi autovalori nello stesso ordine. Controllo: $Q^TQ=I$ e $AQ=Q\Lambda$.

```checkpoint
[domanda]
$A=\left(\begin{smallmatrix}1&2\\0&1\end{smallmatrix}\right)$ si può scrivere come $Q\Lambda Q^T$, con $Q$ ortogonale e $\Lambda$ diagonale?

[risposta]
No. Ogni $Q\Lambda Q^T$ è simmetrica, e $A\neq A^T$. Di più: $A$ ha il solo autovalore $1$, con autospazio $\ker(A-I)=\operatorname{span}\{(1,0)\}$ di dimensione $1$, quindi non è nemmeno diagonalizzabile con una $P$ invertibile qualunque (lezione 10).
```

**Forma quadratica.** Data $A$ simmetrica $n\times n$, la **forma quadratica** associata è

$$
q(\mathbf{x})=\mathbf{x}^TA\mathbf{x}=\sum_{i=1}^n\sum_{j=1}^n a_{ij}\,x_ix_j .
$$

Per $n=2$, con $A=\left(\begin{smallmatrix}a&b\\b&c\end{smallmatrix}\right)$: $q(x,y)=ax^2+2bxy+cy^2$. I coefficienti dei quadrati stanno sulla diagonale; il coefficiente del termine misto $x_ix_j$ ($i\neq j$) si divide **a metà** tra le posizioni $(i,j)$ e $(j,i)$. Non è lineare: $q(t\mathbf{x})=t^2q(\mathbf{x})$.

*Simmetrizzazione.* Se una forma è scritta come $\mathbf{x}^TM\mathbf{x}$ con $M$ non simmetrica, vale $\mathbf{x}^TM\mathbf{x}=\mathbf{x}^T\tfrac{M+M^T}{2}\mathbf{x}$: infatti $\mathbf{x}^TM^T\mathbf{x}=(\mathbf{x}^TM\mathbf{x})^T$ è un numero, uguale al suo trasposto, quindi la media dei due addendi è $\mathbf{x}^TM\mathbf{x}$. La matrice simmetrica di una forma è unica: la determinano i coefficienti, come detto sopra. D'ora in poi la matrice di una forma è sempre quella simmetrica.

> **Attenzione.** Gli autovalori di una $M$ non simmetrica non dicono nulla sul segno di $\mathbf{x}^TM\mathbf{x}$: si simmetrizza **prima**, poi si calcolano gli autovalori (Esempio 2).

**Assi principali.** Con $A=Q\Lambda Q^T$ si ponga $\mathbf{y}=Q^T\mathbf{x}$, cioè $y_i=\mathbf{q}_i^T\mathbf{x}$: le coordinate di $\mathbf{x}$ lungo gli assi $\mathbf{q}_i$. Allora

$$
q(\mathbf{x})=\mathbf{x}^TQ\Lambda Q^T\mathbf{x}=\mathbf{y}^T\Lambda\mathbf{y}=\lambda_1y_1^2+\dots+\lambda_ny_n^2 ,\qquad \lVert\mathbf{y}\rVert=\lVert\mathbf{x}\rVert .
$$

Nelle coordinate degli autovettori **i termini misti spariscono**. Il cambio $\mathbf{y}=Q^T\mathbf{x}$ è una trasformazione ortogonale (nel piano, una rotazione o una riflessione): conserva lunghezze e angoli, quindi non deforma le figure.

**Classificazione.** $A$ simmetrica (o la sua forma $q$) si dice:

- **definita positiva** se $q(\mathbf{x})>0$ per ogni $\mathbf{x}\neq\mathbf{0}$; **semidefinita positiva** se $q(\mathbf{x})\ge0$ per ogni $\mathbf{x}$;
- **definita negativa** se $q(\mathbf{x})<0$ per ogni $\mathbf{x}\neq\mathbf{0}$; **semidefinita negativa** se $q(\mathbf{x})\le0$ per ogni $\mathbf{x}$ (appunti Def. 935);
- **indefinita** se assume sia valori positivi sia valori negativi.

Con questa convenzione, come negli appunti, una definita è anche semidefinita; «semidefinita ma non definita» vuol dire che $q$ si annulla anche su qualche $\mathbf{x}\neq\mathbf{0}$.

**Teorema (classificazione con gli autovalori).** Siano $\lambda_1,\dots,\lambda_n$ gli autovalori di $A$ simmetrica. $A$ è definita positiva se e solo se tutti i $\lambda_i>0$; semidefinita positiva se e solo se tutti i $\lambda_i\ge0$; definita (semidefinita) negativa se e solo se tutti i $\lambda_i<0$ ($\le0$); indefinita se e solo se c'è almeno un autovalore positivo e almeno uno negativo.

*Perché.* Valore su un autovettore: $q(\mathbf{q}_i)=\mathbf{q}_i^TA\mathbf{q}_i=\lambda_i\,\mathbf{q}_i^T\mathbf{q}_i=\lambda_i$. Quindi se $q>0$ fuori dall'origine, ogni $\lambda_i>0$; e se ci sono $\lambda_i>0$ e $\lambda_j<0$, $q$ assume entrambi i segni. Viceversa, se tutti i $\lambda_i>0$ e $\mathbf{x}\neq\mathbf{0}$, allora $\mathbf{y}=Q^T\mathbf{x}\neq\mathbf{0}$ ($Q^T$ è invertibile), qualche $y_i\neq0$ e $\sum\lambda_iy_i^2>0$. I casi con $\ge$, $<$, $\le$ sono identici. Infine, se $A$ è indefinita non può avere tutti i $\lambda_i\ge0$ (sarebbe semidefinita positiva) né tutti $\le0$: ha autovalori di entrambi i segni. Dalla stessa formula: $\lambda_{\min}\lVert\mathbf{x}\rVert^2\le q(\mathbf{x})\le\lambda_{\max}\lVert\mathbf{x}\rVert^2$, perché ogni $\lambda_i$ sta tra $\lambda_{\min}$ e $\lambda_{\max}$ e $\sum y_i^2=\lVert\mathbf{x}\rVert^2$. Sui vettori di norma $1$ il massimo di $q$ è $\lambda_{\max}$, raggiunto lungo un suo autovettore, e il minimo è $\lambda_{\min}$.

*Caso $2\times2$.* $\det A=\lambda_1\lambda_2$ e $\operatorname{tr}A=\lambda_1+\lambda_2$ (lezione 09). Se $\det A<0$ gli autovalori hanno segni opposti: **indefinita**. Se $\det A>0$ hanno lo stesso segno, quindi $A$ è definita, e il segno si legge da $a_{11}=q(\mathbf{e}_1)$, un valore della forma: definita positiva se $a_{11}>0$, negativa se $a_{11}<0$. Se $\det A=0$ un autovalore è nullo: semidefinita.

**Criterio di Sylvester (minori principali).** Il **minore principale di testa** $D_k$ è il determinante del blocco $k\times k$ in alto a sinistra di $A$ (appunti Def. 972). Per $A$ simmetrica:

$$
A\ \text{definita positiva}\iff D_1>0,\ D_2>0,\ \dots,\ D_n>0 ;\qquad A\ \text{definita negativa}\iff (-1)^kD_k>0\ \text{per ogni }k .
$$

Nel caso negativo i segni alternano: $D_1<0$, $D_2>0$, $D_3<0$, … Serve quando gli autovalori sono scomodi da calcolare (Esercizio 2).

*Idea, solo della necessità.* Se $A$ è definita positiva, si prendano i vettori con soltanto le prime $k$ componenti non nulle, $\mathbf{x}=(\mathbf{z},\mathbf{0})$: per essi $q(\mathbf{x})=\mathbf{z}^TA_k\mathbf{z}$, dove $A_k$ è il blocco $k\times k$ in alto a sinistra (le altre righe e colonne di $A$ incontrano solo zeri). Quindi $\mathbf{z}^TA_k\mathbf{z}>0$ per ogni $\mathbf{z}\neq\mathbf{0}$: anche $A_k$, simmetrica, è definita positiva, i suoi autovalori sono tutti positivi e $D_k=\det A_k$, che è il loro prodotto (lezione 09), è positivo. Per il caso negativo si applica lo stesso a $-A$: $\det(-A_k)=(-1)^kD_k>0$. Questo argomento prova **solo** «definita $\Rightarrow$ segni dei $D_k$». Il viceversa, cioè che i segni dei $D_k$ bastino, richiede una dimostrazione per induzione che è argomento dell'Approfondimento.

> **Attenzione.** Per le **semidefinite** il criterio non si estende sostituendo $>$ con $\ge$. $A=\left(\begin{smallmatrix}0&0\\0&-1\end{smallmatrix}\right)$ ha $D_1=D_2=0$, ma $q=-y^2$ non è semidefinita positiva (Esercizio 4; è il controesempio della Rem. 977 degli appunti, ridotto a $2\times2$ e con i segni scambiati, perché gli appunti lo formulano per la concavità). Il criterio corretto, qui solo enunciato, usa **tutti** i minori principali, cioè quelli ottenuti cancellando righe e colonne con gli stessi indici, non solo quelli di testa: $A$ è semidefinita positiva se e solo se sono tutti $\ge0$, e semidefinita negativa se e solo se ogni minore principale di ordine $k$ è nullo o ha il segno di $(-1)^k$ (appunti Thm 975, Rem. 976).

**Curve di livello.** In $\mathbb{R}^2$, con autovalori $\lambda_1,\lambda_2$ e $c>0$, la curva $q(\mathbf{x})=c$ nelle coordinate degli assi principali è $\lambda_1y_1^2+\lambda_2y_2^2=c$:

- $\lambda_1,\lambda_2>0$: un'**ellisse** con semiassi $\sqrt{c/\lambda_1}$ lungo $\mathbf{q}_1$ e $\sqrt{c/\lambda_2}$ lungo $\mathbf{q}_2$. L'autovalore più grande dà il semiasse più corto: in quella direzione $q$ cresce più in fretta;
- autovalori di segno opposto: un'**iperbole** con gli assi lungo $\mathbf{q}_1$ e $\mathbf{q}_2$;
- un autovalore nullo, per esempio $\lambda_2=0<\lambda_1$: $y_1=\pm\sqrt{c/\lambda_1}$, **due rette parallele** a $\mathbf{q}_2$;
- nessun autovalore positivo (forma definita o semidefinita negativa): la curva $q=c$ con $c>0$ è **vuota**; per una definita negativa si guardano i livelli $c<0$, che sono ellissi (il primo caso applicato a $-q$).

Il grafico della superficie $z=q(x,y)$ si legge dalle stesse curve: definita positiva, una ciotola con il minimo nell'origine; definita negativa, una cupola; indefinita, una sella (sale lungo un asse, scende lungo l'altro); semidefinita non definita, una grondaia, piatta lungo l'autovettore di autovalore $0$.

Nello slider $\lambda_1=1$ è fisso e gli autovettori sono gli assi coordinati: la curva è $x^2+\lambda_2y^2=1$. Osserva come, abbassando $\lambda_2$ verso $0$, l'ellisse si allunga in verticale (semiasse $1/\sqrt{\lambda_2}$) fino a uscire dal riquadro, e per $\lambda_2<0$ si trasforma in un'iperbole. Il valore $\lambda_2=0$, la forma semidefinita con le due rette $x=\pm1$, è il confine fra i due regimi; lo slider lo salta perché quelle rette verticali non sono grafici di funzione.

```slider
{"title": "Curva di livello x² + λ₂y² = 1 (λ₁ = 1): ellisse per λ₂ > 0, iperbole per λ₂ < 0", "fn": "Math.sqrt((1 - x*x)/a)", "fn2": "-Math.sqrt((1 - x*x)/a)", "domain": [-3.5, 3.5], "yDomain": [-1.57, 1.57], "pname": "a", "pmin": -2, "pmax": 1.9, "pdefault": 1, "pstep": 0.15, "plabel": "autovalore λ₂", "label1": "ramo superiore", "label2": "ramo inferiore"}
```

**Il legame con l'Hessiana.** Sia $f:\mathbb{R}^n\to\mathbb{R}$ con derivate seconde continue. La sua **Hessiana** in $\mathbf{x}_0$ è la matrice $H_f(\mathbf{x}_0)$ con elemento $(i,j)$ uguale alla derivata seconda $\partial^2f/\partial x_i\partial x_j$ in $\mathbf{x}_0$; per $n=2$ è $\left(\begin{smallmatrix}f_{xx}&f_{xy}\\f_{yx}&f_{yy}\end{smallmatrix}\right)$. È **simmetrica** per il teorema di Schwarz ($f_{xy}=f_{yx}$ quando le derivate miste sono continue, [Funzioni di più variabili e derivate parziali](/analisi/analisi-multivariata/20-funzioni-piu-variabili)). Vicino a un punto critico ($\nabla f(\mathbf{x}_0)=\mathbf{0}$) vale l'approssimazione di Taylor del secondo ordine $f(\mathbf{x}_0+\mathbf{h})\approx f(\mathbf{x}_0)+\tfrac12\,\mathbf{h}^TH_f(\mathbf{x}_0)\,\mathbf{h}$: lo scostamento di $f$ dal valore nel punto critico è, in prima approssimazione, metà della forma quadratica dell'Hessiana. La lezione [Ottimizzazione libera e vincolata — moltiplicatori di Lagrange](/analisi/analisi-multivariata/22-ottimizzazione-lagrange) dimostrerà che, in un punto critico, autovalori dell'Hessiana tutti positivi danno un minimo locale, tutti negativi un massimo locale, di segni opposti un punto di sella; l'enunciato completo, con le ipotesi e il caso di un autovalore nullo, spetta a quella lezione.

```checkpoint
[domanda]
$q(x,y)=x^2-2xy+y^2$ è definita positiva?

[risposta]
No, è semidefinita positiva ma non definita. $A=\left(\begin{smallmatrix}1&-1\\-1&1\end{smallmatrix}\right)$ ha $\det A=0$ e $\operatorname{tr}A=2$: autovalori $0$ e $2$. Infatti $q=(x-y)^2\ge0$ e $q(1,1)=0$. Con Sylvester: $D_1=1>0$ ma $D_2=0$, quindi i $D_k$ non sono tutti positivi.
```

## Dimostrazioni

**Teorema spettrale.** Enunciato in Teoria.

*Uno strumento: i vettori complessi.* Nella parte 1, e solo lì, usiamo vettori con componenti complesse. Non è un argomento nuovo da studiare: la lezione 09 ammette già autovalori complessi, cioè radici complesse del polinomio caratteristico, e qui ci serve soltanto per escluderle. Per $\mathbf{v}=(v_1,\dots,v_n)\in\mathbb{C}^n$ indichiamo con $\bar{\mathbf{v}}$ il vettore dei coniugati. Due fatti: (i) se $v_k=a_k+ib_k$, allora $\bar v_kv_k=a_k^2+b_k^2$, quindi $\bar{\mathbf{v}}^T\mathbf{v}=\sum_k(a_k^2+b_k^2)$ è un numero reale, positivo se $\mathbf{v}\neq\mathbf{0}$; (ii) il coniugato di una somma o di un prodotto è la somma o il prodotto dei coniugati, quindi, essendo $A$ reale, il coniugato di $A\mathbf{v}$ è $A\bar{\mathbf{v}}$.

*Parte 1: gli autovalori sono reali.*

1. Sia $\lambda\in\mathbb{C}$ una radice del polinomio caratteristico, $\det(A-\lambda I)=0$. Allora il sistema omogeneo $(A-\lambda I)\mathbf{v}=\mathbf{0}$ ha una soluzione $\mathbf{v}\neq\mathbf{0}$ in $\mathbb{C}^n$: è il fatto «determinante nullo $\iff$ autovettore» della lezione 09, e l'eliminazione di Gauss su cui si basa usa solo le quattro operazioni, che valgono anche tra numeri complessi.
2. Consideriamo il numero $s=\bar{\mathbf{v}}^TA\mathbf{v}$. Da $A\mathbf{v}=\lambda\mathbf{v}$: $s=\lambda\,\bar{\mathbf{v}}^T\mathbf{v}$.
3. Il coniugato di $s$, per il fatto (ii), è $\bar s=\mathbf{v}^TA\bar{\mathbf{v}}$. È un numero, cioè una matrice $1\times1$, uguale alla sua trasposta: $\bar s=(\mathbf{v}^TA\bar{\mathbf{v}})^T=\bar{\mathbf{v}}^TA^T\mathbf{v}=\bar{\mathbf{v}}^TA\mathbf{v}=s$. Qui si usa $A^T=A$. Un numero uguale al proprio coniugato è reale.
4. Quindi $\lambda=s/(\bar{\mathbf{v}}^T\mathbf{v})$ è il quoziente di due numeri reali con denominatore non nullo per (i): $\lambda\in\mathbb{R}$. Ora $A-\lambda I$ è una matrice **reale** con determinante nullo, quindi ha nel nucleo un vettore reale non nullo: a ogni autovalore corrisponde un autovettore reale. Da qui in poi tutto è reale.

*Parte 2: la base ortonormale di autovettori.* Per induzione su $n$ dimostriamo $(\mathrm{P}_n)$: *ogni matrice reale simmetrica $n\times n$ si scrive $Q\Lambda Q^T$ con $Q$ ortogonale e $\Lambda$ diagonale.*

1. *Base, $n=1$.* $A=(a)$: si prende $Q=(1)$ e $\Lambda=(a)$.
2. *Un primo asse.* Supponiamo vera $(\mathrm{P}_{n-1})$ e sia $A$ simmetrica $n\times n$. Il suo polinomio caratteristico ha grado $n\ge1$, quindi ha almeno una radice complessa (teorema fondamentale dell'algebra: è il fatto per cui, nella lezione 09, una matrice $n\times n$ ha $n$ autovalori complessi contati con molteplicità). Per la parte 1 questa radice $\lambda_1$ è reale e ha un autovettore reale; dividendolo per la sua norma otteniamo $\mathbf{q}_1$ con $\lVert\mathbf{q}_1\rVert=1$ e $A\mathbf{q}_1=\lambda_1\mathbf{q}_1$.
3. *Completamento.* Estendiamo $\mathbf{q}_1$ a una base di $\mathbb{R}^n$ aggiungendo, uno alla volta, i vettori della base canonica che non stanno nello span dei precedenti ([Indipendenza lineare, basi e dimensione](/algebra-lineare/spazi-vettoriali/06-indipendenza-basi), Esercizio 5) e applichiamo Gram-Schmidt (lezione 13) mettendo $\mathbf{q}_1$ per primo: il primo vettore resta $\mathbf{q}_1$, che ha già norma $1$. Otteniamo una base ortonormale $\mathbf{q}_1,\mathbf{w}_2,\dots,\mathbf{w}_n$ e la matrice ortogonale $P=[\mathbf{q}_1\ W]$, dove $W=[\mathbf{w}_2\ \cdots\ \mathbf{w}_n]$ è $n\times(n-1)$.
4. *Il blocco.* Sia $M=P^TAP$. È simmetrica: $M^T=P^TA^TP=P^TAP=M$. La sua prima colonna è $M\mathbf{e}_1=P^TAP\mathbf{e}_1=P^TA\mathbf{q}_1=\lambda_1P^T\mathbf{q}_1=\lambda_1\mathbf{e}_1$, perché $P^T\mathbf{q}_1$ è il vettore dei prodotti scalari $(\mathbf{q}_1^T\mathbf{q}_1,\mathbf{w}_2^T\mathbf{q}_1,\dots)=(1,0,\dots,0)$ per l'ortonormalità. Per simmetria anche la prima riga è $(\lambda_1,0,\dots,0)$. Dunque

$$
P^TAP=\begin{pmatrix}\lambda_1&\mathbf{0}^T\\ \mathbf{0}&B\end{pmatrix},\qquad B=W^TAW,
$$

con $B$ di tipo $(n-1)\times(n-1)$, simmetrica perché lo è $M$.
5. *Ipotesi induttiva.* Per $(\mathrm{P}_{n-1})$, $B=R\Lambda'R^T$ con $R$ ortogonale e $\Lambda'$ diagonale. Poniamo $S=\left(\begin{smallmatrix}1&\mathbf{0}^T\\ \mathbf{0}&R\end{smallmatrix}\right)$ e $Q=PS$. Moltiplicando a blocchi (righe per colonne, con i blocchi al posto dei numeri: i termini misti contengono un blocco nullo) si ha $S^TS=\left(\begin{smallmatrix}1&\mathbf{0}^T\\ \mathbf{0}&R^TR\end{smallmatrix}\right)=I$, quindi $Q^TQ=S^TP^TPS=S^TS=I$: $Q$ è ortogonale.
6. *Conclusione.* Ancora a blocchi, $Q^TAQ=S^T(P^TAP)S=\left(\begin{smallmatrix}\lambda_1&\mathbf{0}^T\\ \mathbf{0}&R^TBR\end{smallmatrix}\right)$, e $R^TBR=R^TR\Lambda'R^TR=\Lambda'$. Quindi $Q^TAQ=\Lambda$ è diagonale, con $\lambda_1$ e la diagonale di $\Lambda'$. Moltiplicando a sinistra per $Q$ e a destra per $Q^T$ (e usando $QQ^T=I$) si ottiene $A=Q\Lambda Q^T$. Infine $AQ=Q\Lambda$ dice che le colonne di $Q$ sono autovettori (lezione 10). $\blacksquare$

*Dove serve la simmetria.* Due volte: al passo 3 della parte 1 (il numero $s$ è reale) e al passo 4 della parte 2 (la prima riga di $M$ si annulla e $B$ resta simmetrica, così l'induzione si può applicare). Per una matrice non simmetrica la stessa costruzione, con autovalori reali, porta solo a una forma triangolare superiore: è argomento dell'Approfondimento.

## Esempi

**Esempio 1 (diagonalizzazione ortogonale $2\times2$).** $A=\left(\begin{smallmatrix}5&2\\2&2\end{smallmatrix}\right)$.

*Autovalori.* $p(t)=t^2-\operatorname{tr}A\,t+\det A=t^2-7t+6=(t-6)(t-1)$: $\lambda_1=6$, $\lambda_2=1$, reali come previsto.

*Autovettori.* $A-6I=\left(\begin{smallmatrix}-1&2\\2&-4\end{smallmatrix}\right)$ dà $x=2y$, autovettore $(2,1)$; $A-I=\left(\begin{smallmatrix}4&2\\2&1\end{smallmatrix}\right)$ dà $y=-2x$, autovettore $(-1,2)$. Controllo: $(2,1)\cdot(-1,2)=0$, ortogonali senza bisogno di Gram-Schmidt (autovalori distinti). Normalizzando, $\mathbf{q}_1=\tfrac1{\sqrt5}(2,1)$, $\mathbf{q}_2=\tfrac1{\sqrt5}(-1,2)$:

$$
\begin{pmatrix}5&2\\2&2\end{pmatrix}=\frac1{\sqrt5}\begin{pmatrix}2&-1\\1&2\end{pmatrix}\begin{pmatrix}6&0\\0&1\end{pmatrix}\frac1{\sqrt5}\begin{pmatrix}2&1\\-1&2\end{pmatrix}.
$$

*Verifica con la somma.* $6\,\mathbf{q}_1\mathbf{q}_1^T+1\,\mathbf{q}_2\mathbf{q}_2^T=\tfrac65\left(\begin{smallmatrix}4&2\\2&1\end{smallmatrix}\right)+\tfrac15\left(\begin{smallmatrix}1&-2\\-2&4\end{smallmatrix}\right)=\tfrac15\left(\begin{smallmatrix}25&10\\10&10\end{smallmatrix}\right)=A$. Qui $\det Q=\tfrac{4+1}5=1$: $Q$ è una rotazione.

**Esempio 2 (forma con termine misto: simmetrizzare, ruotare, disegnare).** Una forma è data come $q(\mathbf{x})=\mathbf{x}^TM\mathbf{x}$ con $M=\left(\begin{smallmatrix}5&4\\0&2\end{smallmatrix}\right)$, cioè $q(x,y)=5x^2+4xy+2y^2$. Classificarla e disegnare la curva $q=6$.

*Strategia:* simmetrizzare, poi passare agli assi principali. $\tfrac{M+M^T}2=\left(\begin{smallmatrix}5&2\\2&2\end{smallmatrix}\right)$, la matrice dell'Esempio 1: il $4xy$ si divide in $2xy+2yx$. Gli autovalori di $M$ sono $5$ e $2$ ($M$ è triangolare) e **non** sono quelli giusti: la forma ha autovalori $6$ e $1$, entrambi positivi, quindi è **definita positiva**. Qui la conclusione sbagliata coinciderebbe per caso con quella giusta, ma non sempre: $M'=\left(\begin{smallmatrix}1&4\\0&1\end{smallmatrix}\right)$ ha il solo autovalore $1>0$, eppure la sua forma $x^2+4xy+y^2$ vale $-2$ in $(1,-1)$; la matrice simmetrica $\left(\begin{smallmatrix}1&2\\2&1\end{smallmatrix}\right)$ ha autovalori $3$ e $-1$, e la forma è **indefinita**.

*Assi principali.* Con $y_1=\mathbf{q}_1^T\mathbf{x}=\tfrac{2x+y}{\sqrt5}$ e $y_2=\mathbf{q}_2^T\mathbf{x}=\tfrac{-x+2y}{\sqrt5}$: $q=6y_1^2+y_2^2$. Controllo in $(1,0)$: $y_1=\tfrac2{\sqrt5}$, $y_2=-\tfrac1{\sqrt5}$, $6\cdot\tfrac45+\tfrac15=5=q(1,0)$.

*La curva $q=6$.* $6y_1^2+y_2^2=6$, cioè $y_1^2+\tfrac{y_2^2}6=1$: un'ellisse con semiasse $1$ lungo $\mathbf{q}_1=\tfrac1{\sqrt5}(2,1)$ e $\sqrt6$ lungo $\mathbf{q}_2=\tfrac1{\sqrt5}(-1,2)$. Controllo sui vertici: in $\mathbf{q}_1$, $q=\tfrac{20+8+2}5=6$; in $\sqrt6\,\mathbf{q}_2$, $q=\tfrac65(5-8+8)=6$. Sui vettori di norma $1$, $q$ varia fra $1$ (lungo $\mathbf{q}_2$, l'asse lungo) e $6$ (lungo $\mathbf{q}_1$, l'asse corto).

**Esempio 3 ($3\times3$ con autovalore ripetuto).** $A=\left(\begin{smallmatrix}2&1&1\\1&2&1\\1&1&2\end{smallmatrix}\right)$.

*Strategia:* $A-I$ ha tutte le entrate uguali a $1$, quindi rango $1$: $\lambda=1$ ha un autospazio di dimensione $2$, il piano $x+y+z=0$. La traccia è $6=1+1+\lambda_3$, quindi $\lambda_3=4$, con autovettore $(1,1,1)$ (somma delle righe di $A$: $4$ ciascuna).

*Base ortonormale.* $\mathbf{q}_1=\tfrac1{\sqrt3}(1,1,1)$ per $\lambda=4$. Nel piano, la base $\mathbf{a}_1=(1,-1,0)$, $\mathbf{a}_2=(1,0,-1)$ non è ortogonale ($\mathbf{a}_1\cdot\mathbf{a}_2=1$): Gram-Schmidt dà $\mathbf{u}_2=\mathbf{a}_2-\tfrac12\mathbf{a}_1=(\tfrac12,\tfrac12,-1)$, che sostituiamo con $(1,1,-2)$. Quindi $\mathbf{q}_2=\tfrac1{\sqrt2}(1,-1,0)$, $\mathbf{q}_3=\tfrac1{\sqrt6}(1,1,-2)$, ortogonali a $\mathbf{q}_1$ perché di autovalore diverso (controllo: $1+1-2=0$). $Q=[\mathbf{q}_1\ \mathbf{q}_2\ \mathbf{q}_3]$, $\Lambda=\operatorname{diag}(4,1,1)$.

*Classificazione, due modi.* Autovalori $4,1,1>0$: definita positiva. Sylvester: $D_1=2$, $D_2=4-1=3$, $D_3=\det A=4\cdot1\cdot1=4$, tutti positivi. Conferma diretta: $q=2(x^2+y^2+z^2)+2(xy+yz+xz)=x^2+y^2+z^2+(x+y+z)^2$, positiva fuori dall'origine.

**Esempio 4 (Hessiana in due punti critici).** $f(x,y)=x^3-3xy+y^3$.

*Punti critici.* $f_x=3x^2-3y$, $f_y=3y^2-3x$; dal sistema $y=x^2$, $x=y^2$ segue $x=x^4$, cioè $x=0$ o $x=1$ tra i reali: punti $(0,0)$ e $(1,1)$.

*Hessiana.* $f_{xx}=6x$, $f_{xy}=f_{yx}=-3$, $f_{yy}=6y$, quindi $H_f(x,y)=\left(\begin{smallmatrix}6x&-3\\-3&6y\end{smallmatrix}\right)$.

- In $(0,0)$: $H=\left(\begin{smallmatrix}0&-3\\-3&0\end{smallmatrix}\right)$, $\det H=-9<0$: **indefinita**, autovalori $-3$ (autovettore $(1,1)$) e $3$ (autovettore $(1,-1)$). La forma $\tfrac12\mathbf{h}^TH\mathbf{h}=-3h_1h_2$ è negativa lungo $(1,1)$ e positiva lungo $(1,-1)$, e $f$ fa lo stesso: $f(t,t)=2t^3-3t^2<0$ e $f(t,-t)=3t^2>0$ per $t$ piccolo e non nullo.
- In $(1,1)$: $H=\left(\begin{smallmatrix}6&-3\\-3&6\end{smallmatrix}\right)$, $D_1=6>0$, $D_2=36-9=27>0$: **definita positiva**, autovalori $3$ e $9$.

Per la condizione sui segni anticipata in Teoria, $(1,1)$ è un minimo locale (con $f(1,1)=-1$) e $(0,0)$ un punto di sella; la dimostrazione spetta alla lezione 22.

## Esercizi

**Esercizio 1.** Diagonalizza ortogonalmente $A=\left(\begin{smallmatrix}3&4\\4&-3\end{smallmatrix}\right)$, classificala e trova il massimo e il minimo di $q(\mathbf{x})=\mathbf{x}^TA\mathbf{x}$ sui vettori di norma $1$.

<details>
<summary>Soluzione</summary>

$p(t)=(3-t)(-3-t)-16=t^2-25$: autovalori $5$ e $-5$. $A-5I=\left(\begin{smallmatrix}-2&4\\4&-8\end{smallmatrix}\right)$ dà $(2,1)$; $A+5I=\left(\begin{smallmatrix}8&4\\4&2\end{smallmatrix}\right)$ dà $(1,-2)$. $Q=\tfrac1{\sqrt5}\left(\begin{smallmatrix}2&1\\1&-2\end{smallmatrix}\right)$, $\Lambda=\operatorname{diag}(5,-5)$ (qui $\det Q=-1$: $Q$ è una riflessione, ed è comunque ortogonale). Autovalori di segno opposto: **indefinita** (anche $\det A=-25<0$). Sui versori il massimo è $5$, in $\pm\tfrac1{\sqrt5}(2,1)$, e il minimo $-5$, in $\pm\tfrac1{\sqrt5}(1,-2)$. Controllo: $q=3x^2+8xy-3y^2$ in $\tfrac1{\sqrt5}(2,1)$ vale $\tfrac{12+16-3}5=5$.
</details>

**Esercizio 2.** Scrivi la matrice simmetrica di $q(x_1,x_2,x_3)=x_1^2+2x_2^2+3x_3^2+2x_1x_2$ e classificala con Sylvester. Perché qui Sylvester è più comodo degli autovalori?

<details>
<summary>Soluzione</summary>

Il coefficiente $2$ di $x_1x_2$ si divide a metà: $A=\left(\begin{smallmatrix}1&1&0\\1&2&0\\0&0&3\end{smallmatrix}\right)$. $D_1=1$, $D_2=2-1=1$, $D_3=3\cdot D_2=3$ (sviluppando lungo la terza riga): tutti positivi, **definita positiva**. Gli autovalori sono $3$ e $\tfrac{3\pm\sqrt5}2$, irrazionali: Sylvester evita di calcolarli. Conferma completando il quadrato: $q=(x_1+x_2)^2+x_2^2+3x_3^2$, nulla solo se $x_3=x_2=0$ e $x_1=-x_2=0$.
</details>

**Esercizio 3.** Classifica $A=\left(\begin{smallmatrix}1&2\\2&4\end{smallmatrix}\right)$ e descrivi la curva $q(\mathbf{x})=1$.

<details>
<summary>Soluzione</summary>

$\det A=0$, $\operatorname{tr}A=5$: autovalori $0$ e $5$, **semidefinita positiva, non definita**. Infatti $q=x^2+4xy+4y^2=(x+2y)^2$ e $q(-2,1)=0$: $(-2,1)$ è l'autovettore di $\lambda=0$, $(1,2)$ quello di $\lambda=5$. La curva $q=1$ è $x+2y=\pm1$: **due rette parallele** a $(-2,1)$, come previsto dal caso con un autovalore nullo. I minori principali sono $1$, $4$ (ordine $1$) e $0$ (ordine $2$): tutti $\ge0$, coerente con il criterio per le semidefinite; $D_2=0$ esclude che sia definita.
</details>

**Esercizio 4.** Mostra che $A=\left(\begin{smallmatrix}0&0\\0&-1\end{smallmatrix}\right)$ ha i minori principali di testa $\ge0$ ma non è semidefinita positiva. Che cosa segnalano gli altri minori principali?

<details>
<summary>Soluzione</summary>

$D_1=0$ e $D_2=\det A=0$: entrambi $\ge0$. Ma $q(x,y)=-y^2$ e $q(0,1)=-1<0$: non è semidefinita positiva (è semidefinita negativa, con autovalori $0$ e $-1$). I minori principali di ordine $1$ sono $a_{11}=0$ e $a_{22}=-1$: quest'ultimo è negativo, e il criterio con **tutti** i minori principali esclude correttamente la semidefinitezza positiva. I minori di testa non vedono $a_{22}$ da solo.
</details>

**Esercizio 5.** Sia $A$ una matrice reale $m\times n$. Dimostra che $A^TA$ è simmetrica e semidefinita positiva, e che è definita positiva se e solo se le colonne di $A$ sono linearmente indipendenti.

<details>
<summary>Soluzione</summary>

$(A^TA)^T=A^T(A^T)^T=A^TA$: simmetrica. Per ogni $\mathbf{x}\in\mathbb{R}^n$, $\mathbf{x}^TA^TA\mathbf{x}=(A\mathbf{x})^T(A\mathbf{x})=\lVert A\mathbf{x}\rVert^2\ge0$: semidefinita positiva. Il valore è $0$ se e solo se $A\mathbf{x}=\mathbf{0}$. Poiché $A\mathbf{x}$ è la combinazione delle colonne di $A$ con coefficienti $x_1,\dots,x_n$, se le colonne sono indipendenti $A\mathbf{x}=\mathbf{0}$ solo per $\mathbf{x}=\mathbf{0}$, e la forma è definita positiva; se sono dipendenti esiste $\mathbf{x}\neq\mathbf{0}$ con $A\mathbf{x}=\mathbf{0}$, e la forma non è definita. È la matrice delle equazioni normali della lezione 12: con colonne indipendenti è definita positiva, quindi $\det(A^TA)$, prodotto di autovalori positivi, è non nullo e $A^TA$ è invertibile. Gli autovalori di $A^TA$, tutti $\ge0$, torneranno nella SVD ([Decomposizione ai valori singolari (SVD)](/algebra-lineare/autovalori-e-diagonalizzazione/15-svd)).
</details>

**Esercizio 6.** Per quali $k\in\mathbb{R}$ la forma $q(x,y)=x^2+2kxy+4y^2$ è definita positiva? Che cosa succede negli altri casi?

<details>
<summary>Soluzione</summary>

$A=\left(\begin{smallmatrix}1&k\\k&4\end{smallmatrix}\right)$, $D_1=1>0$, $D_2=4-k^2$. Definita positiva se e solo se $4-k^2>0$, cioè $\lvert k\rvert<2$. Per $\lvert k\rvert=2$, $\det A=0$ e $\operatorname{tr}A=5$: autovalori $0$ e $5$, semidefinita positiva non definita (per $k=2$, $q=(x+2y)^2$; per $k=-2$, $q=(x-2y)^2$). Per $\lvert k\rvert>2$, $\det A<0$: autovalori di segno opposto, **indefinita**; per esempio con $k=3$, $q(2,-1)=4-12+4=-4<0$ mentre $q(1,0)=1>0$.
</details>
