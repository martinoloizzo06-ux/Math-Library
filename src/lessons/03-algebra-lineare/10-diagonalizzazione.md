---
id: algebra-10-diagonalizzazione
titolo: "Diagonalizzazione di matrici"
materia: algebra-lineare
argomento: "Autovalori e diagonalizzazione"
modulo: "Autovalori e diagonalizzazione"
livello: universitario
slug: algebra-10-diagonalizzazione

# legacy
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: "Diagonalizzazione di matrici"
title_en: "Matrix diagonalization"
level: blue
order: 10
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Similitudine, diagonalizzazione, criterio di diagonalizzabilità, potenze e funzioni di matrice"

prerequisiti:
  - algebra-06-indipendenza-basi
  - algebra-09-autovalori-autovettori

collegamenti:
  - algebra-07-trasformazioni-lineari
  - algebra-09-autovalori-autovettori
  - algebra-14-forme-quadratiche
  - analisi-24-serie-taylor-maclaurin

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Similitudine, matrici diagonalizzabili, criterio molteplicità, procedura, potenze di matrici"
    note: "appunti-prof: definizioni, notazione e criteri come in sede d'esame"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Diagonalizzabilità come esistenza di base di autovettori, invarianza del polinomio caratteristico per similitudine"
    note: "rigore: impostazione operatoriale, criterio autovettori indipendenti"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Cambio di base verso gli assi propri, sistemi dinamici discreti e continui, comportamento asintotico"
    note: "intuizione: diagonalizzare = guardare la trasformazione dagli occhi giusti"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Esempi risolti di diagonalizzazione, potenze, ricorrenze lineari (Fibonacci) e sistemi differenziali"
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

Tra tutte le matrici quadrate, le diagonali sono le più docili. Moltiplicare un vettore per una matrice diagonale significa scalare ciascuna coordinata per il proprio numero, senza che le coordinate si mescolino tra loro: nessuna interazione, nessun accoppiamento. Elevare a potenza una matrice diagonale è banale — si elevano a potenza i numeri sulla diagonale — e così pure calcolarne l'esponenziale, l'inversa, o qualunque funzione. Se ogni matrice fosse diagonale, l'algebra lineare computazionale sarebbe quasi priva di difficoltà. Il problema è che la stragrande maggioranza delle matrici *non* è diagonale: le coordinate si intrecciano, e una potenza come $A^{100}$ sembra richiedere novantanove faticose moltiplicazioni matriciali.

La diagonalizzazione è la scoperta che quella difficoltà è spesso solo apparente, un artefatto del sistema di coordinate in cui guardiamo la matrice. La domanda che apre la lezione è: *esiste un sistema di coordinate in cui $A$ diventa diagonale?* La lezione precedente ci ha già consegnato i candidati naturali per quelle coordinate — gli autovettori, le direzioni lungo cui $A$ agisce come semplice scalatura. Se gli autovettori di $A$ sono abbastanza numerosi da formare una base dello spazio, allora scegliendo *loro* come nuovi assi la trasformazione si rivela per quello che è: una dilatazione indipendente lungo ciascun asse, con fattore l'autovalore. La matrice, negli occhi giusti, è diagonale.

Questa idea si condensa nella formula $A=P\Lambda P^{-1}$, che va letta come un viaggio di andata e ritorno. La matrice $P$ ha per colonne gli autovettori: la sua inversa $P^{-1}$ è il traduttore che porta un vettore dalle coordinate standard alle coordinate degli autovettori. In quelle coordinate agisce $\Lambda$, la matrice diagonale degli autovalori, che si limita a scalare. Poi $P$ ritraduce il risultato nelle coordinate di partenza. Tre passi — traduci, scala, ritraduci — al posto di una moltiplicazione matriciale opaca. E il vantaggio si moltiplica quando la si itera: $A^k=P\Lambda^k P^{-1}$, perché tutti i passaggi intermedi di andata e ritorno si annullano a vicenda, lasciando in mezzo solo la potenza banale $\Lambda^k$.

Il guadagno non è solo calcolistico, è concettuale. Diagonalizzare significa **disaccoppiare**. Un sistema che evolve nel tempo — una popolazione, un circuito, un ecosistema, una successione ricorsiva come quella di Fibonacci — appare in coordinate standard come un groviglio di variabili che si influenzano a vicenda. Nelle coordinate degli autovettori quelle stesse dinamiche si separano in modi indipendenti, ciascuno con la propria legge di crescita $\lambda_i^k$ (nel tempo discreto) o $e^{\lambda_i t}$ (nel tempo continuo). Capire un sistema complicato si riduce allora a capire tante crescite esponenziali scalari, e l'autovalore dominante detta il comportamento a lungo termine. La diagonalizzazione è, in questo senso, l'arte di trovare le variabili che non parlano tra loro.

---

## 2. Teoria

### 2.1 Similitudine: la stessa trasformazione in coordinate diverse

Prima di diagonalizzare, chiariamo cosa significa «cambiare coordinate» per una matrice. Se $P$ è invertibile, le sue colonne formano una base, e $P^{-1}\mathbf{x}$ sono le coordinate del vettore $\mathbf{x}$ rispetto a quella base $[algebra-06-indipendenza-basi]$.

**Definizione (similitudine).** Due matrici $A,B\in M_{n,n}(\mathbb{R})$ sono **simili** se esiste una matrice invertibile $P$ tale che
$$B=P^{-1}AP.$$

Matrici simili rappresentano la **stessa** trasformazione lineare, viste in due basi diverse: $A$ nella base standard, $B$ nella base data dalle colonne di $P$. Per questo la similitudine conserva tutte le grandezze intrinseche della trasformazione — traccia, determinante, autovalori — che non dipendono dal sistema di coordinate. In particolare, matrici simili hanno lo **stesso polinomio caratteristico** (dimostrato in §3), il fatto che avevamo usato senza prova nella lezione sugli autovalori.

*Micro-esempio.* $A=\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$ e la sua futura forma diagonale $\Lambda=\begin{psmallmatrix}2&0\\0&5\end{psmallmatrix}$ sono simili: rappresentano la stessa trasformazione, l'una nella base canonica, l'altra nella base dei due autovettori. Entrambe hanno traccia $7$ e determinante $10$.

### 2.2 Definizione di matrice diagonalizzabile

**Definizione (diagonalizzabile).** Una matrice $A\in M_{n,n}(\mathbb{R})$ è **diagonalizzabile** se è simile a una matrice diagonale, cioè se esistono una matrice invertibile $P$ e una diagonale $\Lambda$ con
$$A=P\Lambda P^{-1}.$$

Il legame con gli autovettori è diretto e obbligato: come dimostreremo in §3, in ogni fattorizzazione di questo tipo le **colonne di $P$ sono autovettori** di $A$ e gli elementi diagonali di $\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$ sono i **corrispondenti autovalori**, posti nell'ordine con cui gli autovettori compaiono in $P$. Diagonalizzare $A$ è dunque la stessa cosa che trovare una base dello spazio fatta interamente di autovettori di $A$.

### 2.3 Il criterio di diagonalizzabilità

Non ogni matrice è diagonalizzabile: serve avere «abbastanza» autovettori. Il criterio precisa quanti.

**Teorema (criterio fondamentale).** $A\in M_{n,n}(\mathbb{R})$ è diagonalizzabile se e solo se possiede $n$ autovettori linearmente indipendenti (cioè una base di autovettori).

Riletto attraverso le molteplicità della lezione precedente, il criterio diventa operativo. Poiché autovettori di autovalori distinti sono automaticamente indipendenti, e per ciascun autovalore si possono avere fino a $m_g$ autovettori indipendenti, il numero totale di autovettori indipendenti è $\sum_i m_g(\lambda_i)$. Questo raggiunge $n$ esattamente quando ogni autospazio è «pieno»:

**Corollario (criterio delle molteplicità).** $A$ è diagonalizzabile se e solo se per **ogni** autovalore $\lambda_i$ vale $m_g(\lambda_i)=m_a(\lambda_i)$, e la somma delle molteplicità algebriche è $n$ (cioè il polinomio caratteristico si fattorizza completamente sul campo considerato).

**Condizione sufficiente comoda.** Se $A$ ha $n$ autovalori **distinti**, allora è diagonalizzabile: ciascuno porta $m_a=1$, quindi $m_g=1=m_a$, e i relativi autovettori sono indipendenti. È una condizione sufficiente, non necessaria: una matrice può avere autovalori ripetuti ed essere ugualmente diagonalizzabile, purché ogni autospazio sia pieno.

*Micro-esempio.* $\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$ ha autovalori distinti $2$ e $5$: diagonalizzabile. Invece $\begin{psmallmatrix}2&1\\0&2\end{psmallmatrix}$ ha $\lambda=2$ con $m_a=2$ ma $m_g=1$: **non** diagonalizzabile, le manca un autovettore.

```checkpoint
{"domanda": "Una matrice $3\\times 3$ ha autovalori $2, 2, 5$; l'autospazio di $\\lambda=2$ ha dimensione $1$. La matrice è diagonalizzabile?", "risposta": "No. Per $\\lambda=2$ si ha $m_a=2$ (compare due volte come radice) ma $m_g=1$ (autospazio di dimensione $1$). Poiché $m_g<m_a$, l'autospazio non è pieno: si contano solo $1+1=2$ autovettori indipendenti in totale, meno dei $3$ necessari. Non c'è una base di autovettori, quindi la matrice non è diagonalizzabile."}
```

### 2.4 La procedura

Il criterio si traduce in un algoritmo in quattro passi.

Primo, si calcola il polinomio caratteristico $p(\lambda)=\det(A-\lambda I)$ e se ne trovano le radici, gli autovalori $\lambda_1,\dots,\lambda_k$. Secondo, per ciascun $\lambda_i$ si determina una base dell'autospazio $V_{\lambda_i}=\ker(A-\lambda_i I)$, risolvendo il sistema omogeneo. Terzo, si raccolgono tutti gli autovettori così ottenuti: se sono in tutto $n$ (cioè ogni $m_g=m_a$), si dispongono come colonne di $P$, ponendo sulla diagonale di $\Lambda$ i corrispondenti autovalori nello stesso ordine. Quarto, si verifica l'uguaglianza nella forma comoda $AP=P\Lambda$, che evita di calcolare $P^{-1}$.

*Micro-esempio.* Per $\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$: autovettori $(1,-2)$ per $\lambda=2$ e $(1,1)$ per $\lambda=5$, quindi $P=\begin{psmallmatrix}1&1\\-2&1\end{psmallmatrix}$, $\Lambda=\begin{psmallmatrix}2&0\\0&5\end{psmallmatrix}$. Controllo: $AP=\begin{psmallmatrix}2&5\\-4&5\end{psmallmatrix}=P\Lambda$.

### 2.5 A cosa serve: potenze, funzioni ed esponenziale di matrice

Il vero potere della diagonalizzazione emerge nel calcolo. Da $A=P\Lambda P^{-1}$ segue, per ogni intero $k\ge 1$,
$$A^k=P\Lambda^k P^{-1},\qquad\Lambda^k=\operatorname{diag}(\lambda_1^k,\dots,\lambda_n^k),$$
perché nei prodotti ripetuti i fattori interni $P^{-1}P=I$ si elidono a catena (dimostrazione in §3). Elevare a potenza una matrice diventa elevare a potenza $n$ numeri scalari.

Questo si estende a qualunque funzione esprimibile come serie di potenze $[analisi-24-serie-taylor-maclaurin]$: se $f$ è una tale funzione, allora
$$f(A)=P\,f(\Lambda)\,P^{-1},\qquad f(\Lambda)=\operatorname{diag}\big(f(\lambda_1),\dots,f(\lambda_n)\big).$$
Il caso più importante è l'**esponenziale di matrice**, definito dalla serie $e^{tA}=\sum_{k\ge0}\frac{t^k A^k}{k!}$, che diagonalizzato dà
$$e^{tA}=P\,\operatorname{diag}\big(e^{t\lambda_1},\dots,e^{t\lambda_n}\big)\,P^{-1}.$$
È lo strumento che risolve i sistemi di equazioni differenziali lineari $\dot{\mathbf{x}}=A\mathbf{x}$, la cui soluzione è $\mathbf{x}(t)=e^{tA}\mathbf{x}(0)$: diagonalizzare disaccoppia il sistema in $n$ equazioni scalari indipendenti $\dot y_i=\lambda_i y_i$, ciascuna con soluzione $y_i(t)=y_i(0)e^{\lambda_i t}$. Il segno della parte reale degli autovalori decide la stabilità: tutti negativi, il sistema decade verso l'equilibrio; anche uno solo positivo, diverge.

Lo slider mostra il principio del disaccoppiamento in tempo discreto: lo stato $A^k\mathbf{x}_0$ come somma di modi indipendenti $\lambda_i^k$, e il ruolo dominante del modo con autovalore maggiore in modulo.

```slider
{"title": "Dopo la diagonalizzazione, A^k·x₀ è somma di modi indipendenti λᵢᵏ: qui un modo con autovalore λ variabile e un modo smorzato 0.5ᵏ. Per λ>1 il primo modo domina l'evoluzione (parametro: λ)", "fn": "Math.pow(a, x)", "fn2": "Math.pow(0.5, x)", "domain": [0, 12], "yDomain": [-0.5, 8], "pname": "a", "pmin": 0.5, "pmax": 2.0, "pdefault": 1.4, "pstep": 0.05, "plabel": "autovalore λ del modo dominante", "label1": "modo λᵏ", "label2": "modo smorzato 0.5ᵏ"}
```

```checkpoint
{"domanda": "Perché $A^k=P\\Lambda^k P^{-1}$ e non $A^k=(P\\Lambda)^k$?", "risposta": "Perché $A^k=(P\\Lambda P^{-1})(P\\Lambda P^{-1})\\cdots(P\\Lambda P^{-1})$ con $k$ fattori: ogni coppia interna $P^{-1}P$ vale $I$ e si elide, lasciando $P\\Lambda^k P^{-1}$. Restano solo la $P$ iniziale e la $P^{-1}$ finale, con $\\Lambda^k$ in mezzo. La forma $(P\\Lambda)^k$ sarebbe sbagliata perché non tiene conto delle traduzioni di ritorno intermedie."}
```

---

## 3. Dimostrazioni

### 3.1 Le colonne di $P$ sono autovettori: $A=P\Lambda P^{-1}\iff AP=P\Lambda$

Mostriamo che la fattorizzazione diagonalizzante equivale a possedere una base di autovettori, chiarendo perché le colonne di $P$ debbano essere proprio autovettori.

Sia $P=[\mathbf{p}_1\mid\cdots\mid\mathbf{p}_n]$ invertibile e $\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$. Confrontiamo le due matrici $AP$ e $P\Lambda$ colonna per colonna.

La $i$-esima colonna di $AP$ si ottiene applicando $A$ alla $i$-esima colonna di $P$, cioè è $A\mathbf{p}_i$. La $i$-esima colonna di $P\Lambda$ è invece $P$ applicata all'$i$-esima colonna di $\Lambda$, che è $\lambda_i\mathbf{e}_i$; dunque quella colonna vale $P(\lambda_i\mathbf{e}_i)=\lambda_i\,P\mathbf{e}_i=\lambda_i\mathbf{p}_i$. Pertanto
$$AP=P\Lambda\iff A\mathbf{p}_i=\lambda_i\mathbf{p}_i\ \text{ per ogni }i.$$
Cioè $AP=P\Lambda$ significa esattamente che ogni colonna $\mathbf{p}_i$ è un autovettore di $A$ con autovalore $\lambda_i$. Poiché $P$ è invertibile, le sue colonne sono $n$ autovettori indipendenti; e moltiplicando $AP=P\Lambda$ a destra per $P^{-1}$ si ottiene $A=P\Lambda P^{-1}$. Viceversa, se $A=P\Lambda P^{-1}$ allora $AP=P\Lambda$, e le colonne di $P$ sono autovettori indipendenti. $\blacksquare$

Questo dimostra il **criterio fondamentale** (§2.3): $A$ è diagonalizzabile se e solo se esiste una base di $n$ autovettori indipendenti, da mettere come colonne di $P$.

### 3.2 Matrici simili hanno lo stesso polinomio caratteristico

<details class="dim-tecnica"><summary>Dimostrazione: se $B=P^{-1}AP$ allora $\det(B-\lambda I)=\det(A-\lambda I)$</summary>

Scriviamo il polinomio caratteristico di $B$ e sostituiamo $B=P^{-1}AP$. Poiché $\lambda I=P^{-1}(\lambda I)P$ (l'identità commuta con tutto), possiamo raccogliere:
$$B-\lambda I=P^{-1}AP-P^{-1}(\lambda I)P=P^{-1}(A-\lambda I)P.$$
Applichiamo ora la moltiplicatività del determinante $[algebra-08-determinanti]$ e la regola $\det(P^{-1})=1/\det(P)$:
$$\det(B-\lambda I)=\det(P^{-1})\det(A-\lambda I)\det(P)=\frac{1}{\det(P)}\det(A-\lambda I)\det(P)=\det(A-\lambda I).$$
I due polinomi coincidono. $\blacksquare$

Ne discendono, come corollari, l'invarianza per similitudine di tutti gli oggetti costruiti dal polinomio caratteristico: gli autovalori con le loro molteplicità algebriche, la traccia (somma degli autovalori) e il determinante (loro prodotto). È il fatto che avevamo anticipato nella lezione sugli autovalori, ora giustificato.

</details>

### 3.3 Potenze e funzioni: $A^k=P\Lambda^k P^{-1}$

<details class="dim-tecnica"><summary>Dimostrazione per induzione e sua estensione alle funzioni analitiche</summary>

Procediamo per induzione su $k\ge 1$. Il caso $k=1$ è la definizione $A=P\Lambda P^{-1}$. Supponiamo valga $A^k=P\Lambda^k P^{-1}$; allora
$$A^{k+1}=A\cdot A^k=(P\Lambda P^{-1})(P\Lambda^k P^{-1})=P\Lambda\,(P^{-1}P)\,\Lambda^k P^{-1}=P\Lambda\,\Lambda^k\,P^{-1}=P\Lambda^{k+1}P^{-1},$$
dove il fattore centrale $P^{-1}P=I$ si è eliso. Questo chiude l'induzione. Inoltre $\Lambda^{k}=\operatorname{diag}(\lambda_1^k,\dots,\lambda_n^k)$, perché il prodotto di matrici diagonali si fa componente per componente. $\blacksquare$

*Estensione alle serie di potenze.* Se $f(z)=\sum_{k\ge0}c_k z^k$ è una funzione analitica, si applica la formula termine a termine:
$$f(A)=\sum_{k\ge0}c_k A^k=\sum_{k\ge0}c_k P\Lambda^k P^{-1}=P\Big(\sum_{k\ge0}c_k\Lambda^k\Big)P^{-1}=P\,f(\Lambda)\,P^{-1},$$
dove si è portato $P$ e $P^{-1}$ fuori dalla somma (leciti perché costanti rispetto a $k$) e $f(\Lambda)=\operatorname{diag}(f(\lambda_1),\dots,f(\lambda_n))$ agisce sui singoli autovalori. In particolare, per $f(z)=e^{tz}$ si ottiene l'esponenziale di matrice $e^{tA}=P\operatorname{diag}(e^{t\lambda_i})P^{-1}$, chiave dei sistemi differenziali lineari.

</details>

---

## 4. Esempi

**Esempio 1 (introduttivo) — diagonalizzazione completa $2\times 2$.** $A=\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$, autovalori $2,5$ con autovettori $(1,-2),(1,1)$. Allora $P=\begin{psmallmatrix}1&1\\-2&1\end{psmallmatrix}$, $\Lambda=\begin{psmallmatrix}2&0\\0&5\end{psmallmatrix}$, $P^{-1}=\tfrac13\begin{psmallmatrix}1&-1\\2&1\end{psmallmatrix}$. Verifica rapida: $AP=\begin{psmallmatrix}2&5\\-4&5\end{psmallmatrix}=P\Lambda$ ✓.

**Esempio 2 (introduttivo) — matrice non diagonalizzabile.** $A=\begin{psmallmatrix}3&1\\0&3\end{psmallmatrix}$: $p(\lambda)=(3-\lambda)^2$, autovalore $3$ con $m_a=2$. Ma $A-3I=\begin{psmallmatrix}0&1\\0&0\end{psmallmatrix}$ ha autospazio $\operatorname{span}\{(1,0)\}$, dunque $m_g=1<2$. Non esistono due autovettori indipendenti: $A$ non è diagonalizzabile.

**Esempio 3 (intermedio) — potenza elevata $A^{10}$.** $A=\begin{psmallmatrix}1&2\\2&1\end{psmallmatrix}$, autovalori $3,-1$, autovettori $(1,1),(1,-1)$. Con $P=\begin{psmallmatrix}1&1\\1&-1\end{psmallmatrix}$, $P^{-1}=\tfrac12\begin{psmallmatrix}1&1\\1&-1\end{psmallmatrix}$ e $\Lambda^{10}=\operatorname{diag}(3^{10},1)=\operatorname{diag}(59049,1)$:
$$A^{10}=P\Lambda^{10}P^{-1}=\tfrac12\begin{pmatrix}59050&59048\\59048&59050\end{pmatrix}.$$
Il calcolo diretto avrebbe richiesto nove moltiplicazioni matriciali.

**Esempio 4 (intermedio) — sistema differenziale disaccoppiato.** Per $\dot{\mathbf{x}}=A\mathbf{x}$ con $A=\begin{psmallmatrix}-1&0\\0&-3\end{psmallmatrix}$ e $\mathbf{x}(0)=(2,1)$: la matrice è già diagonale, quindi $\mathbf{x}(t)=\big(2e^{-t},\,e^{-3t}\big)$. Entrambe le componenti decadono ($\lambda<0$): sistema asintoticamente stabile, con la seconda che svanisce tre volte più in fretta.

**Esempio 5 (intermedio) — autovalore ripetuto ma diagonalizzabile.** $A=\begin{psmallmatrix}2&0&0\\0&3&1\\0&1&3\end{psmallmatrix}$. Il blocco $\begin{psmallmatrix}3&1\\1&3\end{psmallmatrix}$ dà autovalori $2$ e $4$; con il $2$ del primo blocco, gli autovalori sono $2$ (con $m_a=2$) e $4$. Per $\lambda=2$, $A-2I$ impone $v_2+v_3=0$ senza vincolare $v_1$: autospazio $\operatorname{span}\{(1,0,0),(0,1,-1)\}$ di dimensione $2=m_a$. Poiché ogni autospazio è pieno, $A$ è diagonalizzabile pur avendo un autovalore ripetuto.

**Esempio 6 (avanzato) — Fibonacci e formula di Binet.** La ricorrenza $F_{n+1}=F_n+F_{n-1}$ si scrive $\begin{psmallmatrix}F_{n+1}\\F_n\end{psmallmatrix}=A\begin{psmallmatrix}F_n\\F_{n-1}\end{psmallmatrix}$ con $A=\begin{psmallmatrix}1&1\\1&0\end{psmallmatrix}$. Gli autovalori sono $\varphi=\tfrac{1+\sqrt5}{2}$ e $\psi=\tfrac{1-\sqrt5}{2}$. Diagonalizzando e leggendo la prima componente si ottiene la formula di Binet $F_n=\dfrac{\varphi^n-\psi^n}{\sqrt5}$. Poiché $|\psi|<1$, il termine $\psi^n$ svanisce e $F_n\approx\varphi^n/\sqrt5$: la successione cresce come la sezione aurea.

**Esempio 7 (avanzato) — comportamento asintotico di un ecosistema.** Un sistema $\mathbf{x}_{k+1}=A\mathbf{x}_k$ con autovalori $|\lambda_1|>1>|\lambda_2|$ e autovettori $\mathbf{v}_1,\mathbf{v}_2$. Scritto $\mathbf{x}_0=c_1\mathbf{v}_1+c_2\mathbf{v}_2$, si ha $\mathbf{x}_k=c_1\lambda_1^k\mathbf{v}_1+c_2\lambda_2^k\mathbf{v}_2$. Per $k$ grande il secondo termine svanisce e $\mathbf{x}_k\approx c_1\lambda_1^k\mathbf{v}_1$: la popolazione si allinea alla direzione dell'autovettore dominante, la cui composizione descrive la proporzione stabile tra le specie.

**Esempio 8 (applicativo) — catena di Markov e distribuzione stazionaria.** Una catena con matrice di transizione $M$ (colonne che sommano a $1$) ha sempre autovalore $1$, il cui autovettore, normalizzato, è la distribuzione stazionaria $\boldsymbol\pi$. Diagonalizzando $M$, l'evoluzione $\mathbf{p}_k=M^k\mathbf{p}_0$ vede il modo con $\lambda=1$ sopravvivere e tutti gli altri (con $|\lambda|<1$) decadere: $\mathbf{p}_k\to\boldsymbol\pi$. La rapidità della convergenza è governata dal secondo autovalore in modulo, il «gap spettrale»: più $|\lambda_2|$ è piccolo, più veloce è il mescolamento.

---

## 5. Collegamenti e riepilogo

La diagonalizzazione è il punto in cui gli autovalori $[algebra-09-autovalori-autovettori]$ smettono di essere un calcolo isolato e diventano un cambio di prospettiva. Poggia sull'idea di base $[algebra-06-indipendenza-basi]$ — diagonalizzare significa trovare una base di autovettori — e sul cambio di coordinate delle trasformazioni lineari $[algebra-07-trasformazioni-lineari]$, di cui la similitudine $B=P^{-1}AP$ è l'espressione matriciale. Il criterio di diagonalizzabilità rende operativa la distinzione tra molteplicità algebrica e geometrica: il caso $m_g<m_a$ è precisamente l'ostacolo, la «carenza di autovettori» che manda alla forma di Jordan. Guardando avanti, per le matrici simmetriche il teorema spettrale garantirà non solo la diagonalizzabilità ma la possibilità di scegliere $P$ ortogonale, con conseguenze sulle forme quadratiche e sulla classificazione dei punti critici in ottimizzazione $[algebra-14-forme-quadratiche]$. L'estensione alle funzioni di matrice, in particolare all'esponenziale, poggia sulle serie di potenze $[analisi-24-serie-taylor-maclaurin]$ e apre la porta ai sistemi differenziali lineari, ai processi di Markov e a ogni modello di evoluzione lineare.

L'essenziale da trattenere. $A$ è diagonalizzabile quando è simile a una diagonale, $A=P\Lambda P^{-1}$: le colonne di $P$ sono autovettori, la diagonale di $\Lambda$ i corrispondenti autovalori. Ciò accade se e solo se esiste una base di $n$ autovettori indipendenti, equivalentemente se per ogni autovalore $m_g=m_a$ e le molteplicità sommano a $n$; condizione sufficiente comoda è avere $n$ autovalori distinti. Matrici simili condividono polinomio caratteristico, autovalori, traccia e determinante. Il vantaggio pratico è il calcolo: $A^k=P\Lambda^k P^{-1}$ e, più in generale, $f(A)=Pf(\Lambda)P^{-1}$ per ogni funzione analitica, con l'esponenziale $e^{tA}=P\operatorname{diag}(e^{t\lambda_i})P^{-1}$ che risolve $\dot{\mathbf{x}}=A\mathbf{x}$. In ogni sistema evolutivo, diagonalizzare disaccoppia le variabili in modi indipendenti e l'autovalore dominante in modulo ne governa il destino a lungo termine.

---

## 6. Esercizi

<details class="dim-tecnica"><summary>Esercizio 1 (introduttivo) — diagonalizzazione completa</summary>

**Testo.** Diagonalizzare $A=\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$, scrivendo esplicitamente $P$, $\Lambda$, $P^{-1}$ e verificando.

**Soluzione.** Autovalori $2,5$; autovettori $(1,-2),(1,1)$. Quindi $P=\begin{psmallmatrix}1&1\\-2&1\end{psmallmatrix}$, $\Lambda=\begin{psmallmatrix}2&0\\0&5\end{psmallmatrix}$, e $\det P=3$ dà $P^{-1}=\tfrac13\begin{psmallmatrix}1&-1\\2&1\end{psmallmatrix}$. Verifica: $P\Lambda P^{-1}=\tfrac13\begin{psmallmatrix}1&1\\-2&1\end{psmallmatrix}\begin{psmallmatrix}2&0\\0&5\end{psmallmatrix}\begin{psmallmatrix}1&-1\\2&1\end{psmallmatrix}=\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$ ✓.

</details>

<details class="dim-tecnica"><summary>Esercizio 2 (introduttivo) — riconoscere la non diagonalizzabilità</summary>

**Testo.** Stabilire se $A=\begin{psmallmatrix}3&1\\0&3\end{psmallmatrix}$ è diagonalizzabile.

**Soluzione.** $p(\lambda)=(3-\lambda)^2$, unico autovalore $3$ con $m_a=2$. L'autospazio è $\ker\begin{psmallmatrix}0&1\\0&0\end{psmallmatrix}=\operatorname{span}\{(1,0)\}$, quindi $m_g=1$. Essendo $m_g<m_a$, la matrice non è diagonalizzabile: manca un secondo autovettore indipendente.

</details>

<details class="dim-tecnica"><summary>Esercizio 3 (standard) — potenza tramite diagonalizzazione</summary>

**Testo.** Calcolare $A^{10}$ per $A=\begin{psmallmatrix}1&2\\2&1\end{psmallmatrix}$.

**Soluzione.** Autovalori $3,-1$, autovettori $(1,1),(1,-1)$. Con $P=\begin{psmallmatrix}1&1\\1&-1\end{psmallmatrix}$, $P^{-1}=\tfrac12\begin{psmallmatrix}1&1\\1&-1\end{psmallmatrix}$ e $\Lambda^{10}=\operatorname{diag}(3^{10},(-1)^{10})=\operatorname{diag}(59049,1)$:
$$A^{10}=\tfrac12\begin{psmallmatrix}1&1\\1&-1\end{psmallmatrix}\begin{psmallmatrix}59049&0\\0&1\end{psmallmatrix}\begin{psmallmatrix}1&1\\1&-1\end{psmallmatrix}=\tfrac12\begin{pmatrix}59050&59048\\59048&59050\end{pmatrix}.$$

</details>

<details class="dim-tecnica"><summary>Esercizio 4 (standard) — sistema differenziale lineare</summary>

**Testo.** Risolvere $\dot{\mathbf{x}}=A\mathbf{x}$ con $A=\begin{psmallmatrix}2&1\\0&-1\end{psmallmatrix}$ e $\mathbf{x}(0)=(1,2)$.

**Soluzione.** Autovalori $2,-1$ (triangolare); autovettori $(1,0)$ per $\lambda=2$ e, da $(A+I)\mathbf{v}=0$ cioè $3v_1+v_2=0$, $(1,-3)$ per $\lambda=-1$. Scomponiamo $\mathbf{x}(0)=c_1(1,0)+c_2(1,-3)$: da $-3c_2=2$ segue $c_2=-\tfrac23$ e $c_1=\tfrac53$. Quindi
$$\mathbf{x}(t)=\tfrac53 e^{2t}\begin{psmallmatrix}1\\0\end{psmallmatrix}-\tfrac23 e^{-t}\begin{psmallmatrix}1\\-3\end{psmallmatrix}.$$
Il modo $e^{2t}$ domina per $t\to+\infty$: sistema instabile.

</details>

<details class="dim-tecnica"><summary>Esercizio 5 (standard) — ricorrenza lineare in forma chiusa</summary>

**Testo.** Per $a_{n+2}=5a_{n+1}-6a_n$ con $a_0=0$, $a_1=1$, trovare la formula chiusa di $a_n$.

**Soluzione.** La matrice di aggiornamento $A=\begin{psmallmatrix}5&-6\\1&0\end{psmallmatrix}$ ha $p(\lambda)=\lambda^2-5\lambda+6=(\lambda-2)(\lambda-3)$. La soluzione generale è combinazione dei modi: $a_n=c_1\,2^n+c_2\,3^n$. Le condizioni iniziali danno $c_1+c_2=0$ e $2c_1+3c_2=1$, quindi $c_1=-1$, $c_2=1$: $a_n=3^n-2^n$. Verifica: $a_2=9-4=5=5\cdot1-6\cdot0$ ✓.

</details>

<details class="dim-tecnica"><summary>Esercizio 6 (standard) — stabilità in tempo discreto</summary>

**Testo.** Il sistema $\mathbf{x}_{k+1}=A\mathbf{x}_k$ con $A=\begin{psmallmatrix}0{,}5&0{,}2\\0&0{,}3\end{psmallmatrix}$ è stabile?

**Soluzione.** $A$ è triangolare superiore: autovalori $0{,}5$ e $0{,}3$, entrambi con modulo $<1$. Dunque $A^k\mathbf{x}_0\to\mathbf{0}$ per ogni stato iniziale: il sistema è asintoticamente stabile. La velocità di convergenza è dettata dall'autovalore maggiore in modulo, $0{,}5$ (all'incirca un dimezzamento a ogni passo).

</details>

<details class="dim-tecnica"><summary>Esercizio 7 (avanzato) — invarianza del polinomio caratteristico</summary>

**Testo.** Verificare su un esempio che matrici simili hanno lo stesso polinomio caratteristico: prese $A=\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$ e la sua diagonale $\Lambda=\begin{psmallmatrix}2&0\\0&5\end{psmallmatrix}$, confrontare i due polinomi.

**Soluzione.** Per $A$: $p_A(\lambda)=\lambda^2-\operatorname{tr}(A)\lambda+\det(A)=\lambda^2-7\lambda+10$. Per $\Lambda$: $p_\Lambda(\lambda)=(2-\lambda)(5-\lambda)=\lambda^2-7\lambda+10$. Coincidono, come garantito dal risultato di §3.2, essendo $A=P\Lambda P^{-1}$ con $P$ la matrice degli autovettori. Anche traccia ($7$) e determinante ($10$) sono uguali.

</details>

<details class="dim-tecnica"><summary>Esercizio 8 (avanzato) — diagonalizzazione 3×3</summary>

**Testo.** Diagonalizzare $A=\begin{psmallmatrix}1&0&0\\0&3&1\\0&1&3\end{psmallmatrix}$.

**Soluzione.** Il blocco $\begin{psmallmatrix}3&1\\1&3\end{psmallmatrix}$ ha autovalori $2$ e $4$; con l'$1$ del primo blocco, gli autovalori di $A$ sono $1,2,4$, distinti: diagonalizzabile. Autovettori: $\lambda=1\to(1,0,0)$; $\lambda=2$, da $(A-2I)\mathbf{v}=0$ con $v_2+v_3=0\to(0,1,-1)$; $\lambda=4$, da $-v_2+v_3=0\to(0,1,1)$. Quindi
$$P=\begin{pmatrix}1&0&0\\0&1&1\\0&-1&1\end{pmatrix},\qquad\Lambda=\begin{pmatrix}1&0&0\\0&2&0\\0&0&4\end{pmatrix}.$$

</details>
