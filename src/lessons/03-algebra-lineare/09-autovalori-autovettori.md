---
id: algebra-09-autovalori-autovettori
titolo: "Autovalori e autovettori"
materia: algebra-lineare
argomento: "Autovalori e diagonalizzazione"
modulo: "Autovalori e diagonalizzazione"
livello: universitario
slug: algebra-09-autovalori-autovettori

# legacy
subject: algebra-lineare
topic_it: Autovalori e diagonalizzazione
topic_en: Eigenvalues and diagonalization
title_it: "Autovalori e autovettori"
title_en: "Eigenvalues and eigenvectors"
level: blue
order: 9
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Autovalori, autovettori, polinomio caratteristico, autospazi, molteplicità, matrici simmetriche"

prerequisiti:
  - algebra-07-trasformazioni-lineari
  - algebra-08-determinanti

collegamenti:
  - algebra-06-indipendenza-basi
  - algebra-08-determinanti
  - algebra-10-diagonalizzazione
  - algebra-14-forme-quadratiche

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Autovalori e autovettori, polinomio caratteristico, autospazi, molteplicità algebrica e geometrica, traccia e determinante"
    note: "appunti-prof: definizioni, notazione e criteri come in sede d'esame"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Autovalori come oggetto primario, indipendenza di autovettori con autovalori distinti, matrici simmetriche/operatori autoaggiunti"
    note: "rigore: impostazione operatoriale, dimostrazioni pulite di indipendenza e realtà degli autovalori"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Interpretazione geometrica: direzioni invarianti, scala lungo gli assi propri, sistemi dinamici discreti"
    note: "intuizione: autovettore come direzione che la trasformazione non ruota"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Esempi risolti di calcolo di autovalori e autovettori, autovalori complessi, potenze di matrici"
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

Una trasformazione lineare, lo abbiamo visto, deforma lo spazio: ruota, scala, riflette, proietta. Applicata a un vettore generico, ne cambia in generale sia la lunghezza sia la direzione, e il vettore trasformato punta altrove rispetto a quello di partenza. Ma per moltissime trasformazioni esistono direzioni *privilegiate*, sulle quali l'azione si semplifica drasticamente: un vettore che giace su una di queste direzioni viene solo allungato o accorciato, eventualmente ribaltato, ma **non ruotato**. La sua immagine resta sulla stessa retta da cui è partito. Queste direzioni speciali sono gli **autovettori**, e il fattore di allungamento lungo ciascuna è il corrispondente **autovalore**. Sono, in un certo senso, gli «assi naturali» della trasformazione, il sistema di riferimento in cui essa mostra la sua struttura più semplice.

Perché queste direzioni contano così tanto? Perché lungo di esse una trasformazione complicata diventa una banale moltiplicazione per un numero. E moltiplicare per un numero è qualcosa che sappiamo iterare senza sforzo: se applicare $A$ a un autovettore $\mathbf{v}$ lo moltiplica per $\lambda$, allora applicare $A$ cento volte lo moltiplica per $\lambda^{100}$. Questo è il motivo per cui gli autovalori governano il comportamento a lungo termine di ogni sistema che evolve per iterazione. Un modello di crescita di popolazione, la propagazione di un'onda, l'aggiornamento di un ranking sul web, la stabilità di un ponte sotto vibrazione: in tutti questi casi decomporre lo stato iniziale lungo gli autovettori trasforma un'evoluzione intricata in una somma di crescite esponenziali indipendenti $\lambda_i^k$, e l'autovalore più grande in modulo finisce per dominare la scena. Chi conosce gli autovalori conosce il destino del sistema.

C'è un secondo motivo, più geometrico. Le direzioni invarianti rivelano *cosa fa davvero* una trasformazione, spogliata dal sistema di coordinate in cui la vediamo. Una matrice che agli occhi appare un groviglio di numeri può essere, negli occhi giusti, una semplice dilatazione lungo due assi ben scelti. Trovare gli autovettori significa trovare quegli occhi giusti — l'idea che porterà, nella prossima lezione, alla diagonalizzazione. Nella deformazione di un materiale elastico gli autovettori sono le direzioni principali lungo cui il corpo si comprime o si allunga senza torcersi; in statistica sono le direzioni di massima varianza dei dati. Sempre, l'autovettore è la direzione lungo cui la trasformazione «non fa niente di complicato».

Lo strumento per stanarli lo abbiamo appena costruito. Chiedere che $\mathbf{v}\ne\mathbf{0}$ soddisfi $A\mathbf{v}=\lambda\mathbf{v}$ equivale a chiedere che $(A-\lambda I)\mathbf{v}=\mathbf{0}$ abbia una soluzione non nulla, cioè che la matrice $A-\lambda I$ sia **singolare**. E la singolarità, dalla lezione sui determinanti, ha un test esatto: $\det(A-\lambda I)=0$. Ecco perché il determinante era il passo obbligato prima di questa lezione. Il determinante di $A-\lambda I$, letto come funzione di $\lambda$, è un polinomio le cui radici sono esattamente gli autovalori: gli assi nascosti della trasformazione emergono come soluzioni di un'equazione polinomiale.

---

## 2. Teoria

### 2.1 Definizione e problema agli autovalori

**Definizione (autovalore, autovettore).** Sia $A\in M_{n,n}(\mathbb{R})$. Uno scalare $\lambda\in\mathbb{C}$ è un **autovalore** di $A$ se esiste un vettore $\mathbf{v}\ne\mathbf{0}$, detto **autovettore** associato, tale che
$$A\mathbf{v}=\lambda\mathbf{v}.$$

La richiesta $\mathbf{v}\ne\mathbf{0}$ è essenziale: il vettore nullo soddisfa $A\mathbf{0}=\lambda\mathbf{0}$ per *qualunque* $\lambda$, e includerlo renderebbe la definizione vuota. Ammettiamo $\lambda$ complesso perché, come vedremo, alcune matrici reali (le rotazioni) hanno autovalori che vivono in $\mathbb{C}$.

*Micro-esempio.* Per $A=\begin{psmallmatrix}2&0\\0&3\end{psmallmatrix}$ il vettore $\mathbf{e}_1=(1,0)$ è autovettore: $A\mathbf{e}_1=(2,0)=2\mathbf{e}_1$, autovalore $\lambda=2$. Analogamente $\mathbf{e}_2$ ha autovalore $3$. Gli assi coordinati sono le direzioni invarianti di una matrice diagonale.

L'uguaglianza $A\mathbf{v}=\lambda\mathbf{v}$ si riscrive isolando il vettore:
$$A\mathbf{v}=\lambda\mathbf{v}\iff A\mathbf{v}-\lambda\mathbf{v}=\mathbf{0}\iff(A-\lambda I)\mathbf{v}=\mathbf{0},$$
dove l'identità $I$ serve a poter sottrarre $\lambda$ (uno scalare) da $A$ (una matrice). Cercare un autovettore per $\lambda$ è dunque cercare un vettore **non nullo nel nucleo** di $A-\lambda I$.

### 2.2 Il polinomio caratteristico

Perché $(A-\lambda I)\mathbf{v}=\mathbf{0}$ ammetta soluzioni non nulle, la matrice $A-\lambda I$ deve essere singolare: un sistema omogeneo ha soluzioni oltre a quella banale se e solo se la matrice dei coefficienti non è invertibile. Per il criterio del determinante $[algebra-08-determinanti]$, questo accade esattamente quando

$$p(\lambda)=\det(A-\lambda I)=0.$$

**Definizione (polinomio caratteristico).** La funzione $p(\lambda)=\det(A-\lambda I)$ è un polinomio di grado $n$ nella variabile $\lambda$, detto **polinomio caratteristico** di $A$. Gli autovalori di $A$ sono precisamente le sue radici.

Per una matrice $2\times 2$ il polinomio prende una forma memorabile:
$$p(\lambda)=\det\begin{pmatrix}a-\lambda&b\\c&d-\lambda\end{pmatrix}=\lambda^2-(a+d)\lambda+(ad-bc)=\lambda^2-\operatorname{tr}(A)\,\lambda+\det(A),$$
dove $\operatorname{tr}(A)=a+d$ è la **traccia** (somma degli elementi diagonali). Bastano quindi traccia e determinante per scrivere l'equazione degli autovalori nel caso $2\times 2$.

*Micro-esempio.* Per $A=\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$: $\operatorname{tr}(A)=7$, $\det(A)=10$, quindi $p(\lambda)=\lambda^2-7\lambda+10=(\lambda-2)(\lambda-5)$. Gli autovalori sono $2$ e $5$.

```checkpoint
{"domanda": "Perché gli autovalori di $A$ sono esattamente le radici dell'equazione $\\det(A-\\lambda I)=0$, e non semplicemente i valori che rendono $(A-\\lambda I)\\mathbf{v}=\\mathbf{0}$?", "risposta": "Un autovettore è per definizione un vettore $\\mathbf{v}\\neq\\mathbf{0}$ nel nucleo di $A-\\lambda I$. Il sistema omogeneo $(A-\\lambda I)\\mathbf{v}=\\mathbf{0}$ ha soluzioni non nulle se e solo se $A-\\lambda I$ è singolare, e per il criterio del determinante ciò equivale a $\\det(A-\\lambda I)=0$. Quindi $\\lambda$ è autovalore esattamente quando annulla il polinomio caratteristico."}
```

### 2.3 Autospazi

Una volta trovato un autovalore $\lambda_0$, i suoi autovettori non sono isolati: formano, insieme al vettore nullo, un intero sottospazio.

**Definizione (autospazio).** L'**autospazio** associato a $\lambda_0$ è
$$V_{\lambda_0}=\ker(A-\lambda_0 I)=\{\mathbf{v}\in\mathbb{R}^n:\ A\mathbf{v}=\lambda_0\mathbf{v}\}.$$

È un sottospazio perché nucleo di una matrice $[algebra-07-trasformazioni-lineari]$, e per un autovalore è sempre almeno di dimensione $1$ (contiene un autovettore non nullo). Ogni multiplo non nullo di un autovettore è ancora un autovettore con lo stesso autovalore: gli autovettori sono definiti «a meno di scala», e parlare di *direzione* invariante è più corretto che parlare di un singolo vettore.

*Micro-esempio.* Per $\lambda_2=5$ della matrice precedente, $A-5I=\begin{psmallmatrix}-1&1\\2&-2\end{psmallmatrix}$; il nucleo è la retta $v_1=v_2$, cioè $V_5=\operatorname{span}\{(1,1)\}$, un autospazio di dimensione $1$.

### 2.4 Molteplicità algebrica e geometrica

Un autovalore può «pesare» in due modi diversi, e la loro possibile discrepanza è al cuore della diagonalizzabilità (prossima lezione).

**Definizione.** Per un autovalore $\lambda_0$:

- la **molteplicità algebrica** $m_a(\lambda_0)$ è il numero di volte in cui $\lambda_0$ compare come radice del polinomio caratteristico;
- la **molteplicità geometrica** $m_g(\lambda_0)=\dim V_{\lambda_0}$ è la dimensione dell'autospazio, cioè il numero di autovettori indipendenti associati a $\lambda_0$.

Vale sempre la disuguaglianza
$$1\le m_g(\lambda_0)\le m_a(\lambda_0),$$
la cui parte destra dimostreremo in §3. La geometria non può mai superare l'algebra: un autovalore che compare una sola volta come radice ($m_a=1$) ha necessariamente autospazio di dimensione $1$. Quando invece $m_g<m_a$ l'autovalore è «carente» di autovettori, e la matrice non sarà diagonalizzabile.

*Micro-esempio.* La matrice $J=\begin{psmallmatrix}2&1\\0&2\end{psmallmatrix}$ ha $p(\lambda)=(2-\lambda)^2$, dunque $\lambda=2$ con $m_a=2$. Ma $J-2I=\begin{psmallmatrix}0&1\\0&0\end{psmallmatrix}$ ha nucleo di dimensione $1$ (solo i multipli di $(1,0)$), quindi $m_g=1<2$. È il prototipo di matrice non diagonalizzabile.

```checkpoint
{"domanda": "La matrice $\\begin{pmatrix}5&1\\\\0&5\\end{pmatrix}$ ha un solo autovalore $\\lambda=5$. Quanto valgono $m_a$ e $m_g$? Cosa implica il confronto?", "risposta": "Il polinomio caratteristico è $(5-\\lambda)^2$, quindi $m_a=2$. L'autospazio è il nucleo di $\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, cioè $\\operatorname{span}\\{(1,0)\\}$, di dimensione $1$: dunque $m_g=1$. Poiché $m_g<m_a$, l'autovalore è carente di autovettori e la matrice non è diagonalizzabile."}
```

### 2.5 Traccia, determinante e proprietà delle potenze

Gli autovalori sono legati a due quantità che sappiamo già calcolare direttamente dalla matrice.

Se $\lambda_1,\dots,\lambda_n$ sono gli autovalori di $A$ (contati con molteplicità algebrica, eventualmente complessi), allora
$$\operatorname{tr}(A)=\sum_{i=1}^n\lambda_i,\qquad \det(A)=\prod_{i=1}^n\lambda_i.$$
La somma degli autovalori è la traccia; il loro prodotto è il determinante. Queste due relazioni, dimostrate in §3, danno controlli rapidi e, nel caso $2\times 2$, permettono di trovare gli autovalori senza scrivere il polinomio: si cercano due numeri di somma $\operatorname{tr}(A)$ e prodotto $\det(A)$.

Una conseguenza del prodotto: $\lambda=0$ è autovalore di $A$ se e solo se $\det(A)=0$, cioè se e solo se $A$ è singolare. In tal caso l'autospazio di $0$ è esattamente il nucleo di $A$.

*Micro-esempio.* $A=\begin{psmallmatrix}1&2\\2&4\end{psmallmatrix}$ ha $\det(A)=0$: dunque $0$ è autovalore, con autospazio $\ker(A)=\operatorname{span}\{(2,-1)\}$. Il secondo autovalore è $\operatorname{tr}(A)-0=5$.

**Potenze.** Se $A\mathbf{v}=\lambda\mathbf{v}$, applicando ancora $A$ si trova $A^2\mathbf{v}=A(\lambda\mathbf{v})=\lambda A\mathbf{v}=\lambda^2\mathbf{v}$, e per induzione
$$A^k\mathbf{v}=\lambda^k\mathbf{v}.$$
Gli autovettori di $A$ restano autovettori di ogni potenza $A^k$, con autovalore elevato alla $k$. È questa la proprietà che rende gli autovalori lo strumento naturale per i sistemi iterati $\mathbf{x}_{k+1}=A\mathbf{x}_k$: lungo ciascun autovettore l'evoluzione è la crescita geometrica $\lambda^k$. Lo slider seguente isola proprio questo comportamento, e mostra la soglia critica a $\lambda=1$ che separa decadimento e divergenza.

```slider
{"title": "Evoluzione λᵏ di un sistema iterato lungo un autovettore: per λ>1 diverge, per λ<1 decade a zero, a λ=1 resta costante (parametro: autovalore λ)", "fn": "Math.pow(a, x)", "domain": [0, 12], "yDomain": [-0.5, 8], "pname": "a", "pmin": 0.5, "pmax": 1.5, "pdefault": 1.1, "pstep": 0.05, "plabel": "autovalore λ", "label1": "ampiezza λᵏ dopo k passi"}
```

### 2.6 Matrici simmetriche

Le matrici simmetriche ($A=A^T$) godono di proprietà spettrali eccezionali, che ne fanno le protagoniste delle applicazioni (covarianza in statistica, forme quadratiche, energia in fisica).

Se $A=A^T$ è reale, allora tutti i suoi autovalori sono **reali**, e autovettori associati ad autovalori **distinti** sono **ortogonali** (non solo indipendenti). Questo è un caso particolarissimo: per una matrice generica gli autovettori di autovalori diversi sono indipendenti, ma quasi mai perpendicolari. La dimostrazione dell'ortogonalità è in §3; l'importanza di questo fatto emergerà con il teorema spettrale nella lezione sulle forme quadratiche $[algebra-14-forme-quadratiche]$.

*Micro-esempio.* $A=\begin{psmallmatrix}3&1\\1&3\end{psmallmatrix}$ è simmetrica: autovalori $2$ e $4$ (reali), con autovettori $(1,-1)$ e $(1,1)$; il loro prodotto scalare $1\cdot1+(-1)\cdot1=0$ conferma l'ortogonalità.

---

## 3. Dimostrazioni

### 3.1 Autovettori di autovalori distinti sono linearmente indipendenti

Questo risultato è la chiave della diagonalizzabilità: garantisce che autovalori diversi contribuiscano direzioni genuinamente nuove.

**Enunciato.** Siano $\mathbf{v}_1,\dots,\mathbf{v}_k$ autovettori di $A$ con autovalori $\lambda_1,\dots,\lambda_k$ a due a due **distinti**. Allora $\mathbf{v}_1,\dots,\mathbf{v}_k$ sono linearmente indipendenti.

**Dimostrazione.** Procediamo per assurdo. Se i vettori fossero dipendenti, esisterebbe una relazione di dipendenza non banale; tra tutte, scegliamone una con il **minimo numero** $m$ di autovettori coinvolti, riordinandoli così che siano i primi $m$:
$$c_1\mathbf{v}_1+c_2\mathbf{v}_2+\cdots+c_m\mathbf{v}_m=\mathbf{0},\qquad(\ast)$$
con tutti i $c_i\ne 0$ (se qualche coefficiente fosse nullo, avremmo una relazione più corta, contro la minimalità di $m$). Notiamo che $m\ge 2$: un solo autovettore non nullo non può dare una relazione di dipendenza.

Applichiamo $A$ a entrambi i membri di $(\ast)$ e usiamo $A\mathbf{v}_i=\lambda_i\mathbf{v}_i$:
$$c_1\lambda_1\mathbf{v}_1+c_2\lambda_2\mathbf{v}_2+\cdots+c_m\lambda_m\mathbf{v}_m=\mathbf{0}.\qquad(\ast\ast)$$
Moltiplichiamo ora $(\ast)$ per lo scalare $\lambda_m$ e sottraiamo il risultato da $(\ast\ast)$. Il termine $m$-esimo si cancella ($c_m\lambda_m-c_m\lambda_m=0$) e resta
$$c_1(\lambda_1-\lambda_m)\mathbf{v}_1+c_2(\lambda_2-\lambda_m)\mathbf{v}_2+\cdots+c_{m-1}(\lambda_{m-1}-\lambda_m)\mathbf{v}_{m-1}=\mathbf{0}.$$
Questa è una relazione con soli $m-1$ autovettori. I coefficienti $c_i(\lambda_i-\lambda_m)$ per $i=1,\dots,m-1$ non sono tutti nulli: infatti $c_1\ne 0$ e $\lambda_1-\lambda_m\ne 0$ (gli autovalori sono distinti), quindi il primo coefficiente è diverso da zero. Abbiamo così una relazione di dipendenza non banale più corta di $(\ast)$, in contraddizione con la minimalità di $m$. L'ipotesi di dipendenza è assurda: i vettori sono indipendenti. $\blacksquare$

### 3.2 Traccia e determinante come somma e prodotto degli autovalori

<details class="dim-tecnica"><summary>Dimostrazione: $\operatorname{tr}(A)=\sum_i\lambda_i$ e $\det(A)=\prod_i\lambda_i$ dai coefficienti del polinomio caratteristico</summary>

Il polinomio caratteristico $p(\lambda)=\det(A-\lambda I)$ ha grado $n$ e, sul campo complesso, si fattorizza completamente nelle sue radici (gli autovalori $\lambda_1,\dots,\lambda_n$, contati con molteplicità):
$$p(\lambda)=(\lambda_1-\lambda)(\lambda_2-\lambda)\cdots(\lambda_n-\lambda).\qquad(\dagger)$$
Confrontiamo i coefficienti di questa forma fattorizzata con quelli ottenuti direttamente dal determinante.

**Termine noto ($\lambda=0$).** Da $(\dagger)$, $p(0)=\lambda_1\lambda_2\cdots\lambda_n$. D'altra parte $p(0)=\det(A-0\cdot I)=\det(A)$. Quindi
$$\det(A)=\prod_{i=1}^n\lambda_i.$$

**Coefficiente di $\lambda^{n-1}$.** Sviluppando il prodotto $(\dagger)$, il termine in $\lambda^{n-1}$ nasce scegliendo il fattore $-\lambda$ in $n-1$ parentesi e il termine costante nell'unica rimanente; sommando su quale parentesi contribuisce la costante si ottiene il coefficiente $(-1)^{n-1}(\lambda_1+\cdots+\lambda_n)$. Calcolando invece $\det(A-\lambda I)$ con lo sviluppo di Laplace, il termine di grado $n-1$ proviene solo dal prodotto degli elementi diagonali $\prod_i(a_{ii}-\lambda)$, e ha coefficiente $(-1)^{n-1}(a_{11}+\cdots+a_{nn})=(-1)^{n-1}\operatorname{tr}(A)$. Uguagliando i due coefficienti,
$$\operatorname{tr}(A)=\sum_{i=1}^n\lambda_i.\qquad\blacksquare$$

Queste due identità valgono anche quando gli autovalori sono complessi: comparendo in coppie coniugate per matrici reali, la loro somma e il loro prodotto restano reali, in accordo con traccia e determinante reali.

</details>

### 3.3 La molteplicità geometrica non supera quella algebrica

<details class="dim-tecnica"><summary>Dimostrazione: $m_g(\lambda_0)\le m_a(\lambda_0)$</summary>

Sia $\lambda_0$ un autovalore con molteplicità geometrica $g=m_g(\lambda_0)=\dim V_{\lambda_0}$. Scegliamo una base $\mathbf{w}_1,\dots,\mathbf{w}_g$ dell'autospazio $V_{\lambda_0}$ e completiamola a una base $\mathbf{w}_1,\dots,\mathbf{w}_g,\mathbf{w}_{g+1},\dots,\mathbf{w}_n$ di tutto $\mathbb{R}^n$ (è sempre possibile, per il completamento a base $[algebra-06-indipendenza-basi]$).

Rispetto a questa base, la matrice che rappresenta la trasformazione $\mathbf{x}\mapsto A\mathbf{x}$ ha una struttura a blocchi. Infatti $A\mathbf{w}_j=\lambda_0\mathbf{w}_j$ per $j=1,\dots,g$ (i primi $g$ vettori sono autovettori), quindi le prime $g$ colonne della matrice rappresentativa $B$ contengono $\lambda_0$ sulla diagonale e zeri altrove nelle prime $g$ righe:
$$B=\begin{pmatrix}\lambda_0 I_g & * \\ 0 & C\end{pmatrix},$$
con $I_g$ identità $g\times g$ e $C$ un blocco $(n-g)\times(n-g)$. Poiché il cambio di base non altera il polinomio caratteristico (matrici simili hanno lo stesso $p$, come si vedrà nella lezione sulla diagonalizzazione), calcoliamo $p$ da $B$. Il determinante di una matrice triangolare a blocchi è il prodotto dei determinanti dei blocchi diagonali:
$$p(\lambda)=\det(B-\lambda I)=\det\big((\lambda_0-\lambda)I_g\big)\cdot\det(C-\lambda I)=(\lambda_0-\lambda)^g\cdot\det(C-\lambda I).$$
Dunque $(\lambda_0-\lambda)^g$ divide $p(\lambda)$: la molteplicità algebrica di $\lambda_0$, cioè l'esponente massimo con cui $(\lambda_0-\lambda)$ compare in $p$, è **almeno** $g$. Perciò $m_a(\lambda_0)\ge g=m_g(\lambda_0)$. $\blacksquare$

</details>

### 3.4 Ortogonalità degli autovettori di una matrice simmetrica

<details class="dim-tecnica"><summary>Dimostrazione: se $A=A^T$, autovettori di autovalori distinti sono ortogonali</summary>

Siano $A\mathbf{u}=\lambda\mathbf{u}$ e $A\mathbf{w}=\mu\mathbf{w}$ con $\lambda\ne\mu$ (autovalori reali, distinti). Consideriamo lo scalare $\mathbf{u}^T A\mathbf{w}$ e calcoliamolo in due modi, sfruttando la simmetria $A=A^T$.

Da un lato, usando $A\mathbf{w}=\mu\mathbf{w}$:
$$\mathbf{u}^T A\mathbf{w}=\mathbf{u}^T(\mu\mathbf{w})=\mu\,\mathbf{u}^T\mathbf{w}.$$
Dall'altro, poiché $\mathbf{u}^T A=(A^T\mathbf{u})^T=(A\mathbf{u})^T=(\lambda\mathbf{u})^T=\lambda\mathbf{u}^T$ (qui interviene $A^T=A$):
$$\mathbf{u}^T A\mathbf{w}=(\lambda\mathbf{u}^T)\mathbf{w}=\lambda\,\mathbf{u}^T\mathbf{w}.$$
Uguagliando le due espressioni: $\mu\,\mathbf{u}^T\mathbf{w}=\lambda\,\mathbf{u}^T\mathbf{w}$, cioè $(\mu-\lambda)\,\mathbf{u}^T\mathbf{w}=0$. Poiché $\mu-\lambda\ne 0$, deve essere $\mathbf{u}^T\mathbf{w}=0$: i due autovettori sono ortogonali. $\blacksquare$

Il fatto che gli autovalori di una matrice simmetrica reale siano essi stessi reali si dimostra con un argomento analogo usando i coniugati complessi: se $A\mathbf{v}=\lambda\mathbf{v}$ con $\mathbf{v}\ne\mathbf{0}$, allora $\bar{\mathbf{v}}^T A\mathbf{v}=\lambda\,\bar{\mathbf{v}}^T\mathbf{v}$ e, per simmetria, lo stesso scalare vale $\bar\lambda\,\bar{\mathbf{v}}^T\mathbf{v}$; essendo $\bar{\mathbf{v}}^T\mathbf{v}=\|\mathbf{v}\|^2>0$, segue $\lambda=\bar\lambda$, quindi $\lambda\in\mathbb{R}$.

</details>

---

## 4. Esempi

**Esempio 1 (introduttivo) — $2\times 2$ con autovalori distinti.** $A=\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$. Da $\operatorname{tr}=7$, $\det=10$: $p(\lambda)=\lambda^2-7\lambda+10=(\lambda-2)(\lambda-5)$. Per $\lambda=2$, $A-2I=\begin{psmallmatrix}2&1\\2&1\end{psmallmatrix}$ dà $2v_1+v_2=0$, autovettore $(1,-2)$. Per $\lambda=5$, $A-5I=\begin{psmallmatrix}-1&1\\2&-2\end{psmallmatrix}$ dà $v_1=v_2$, autovettore $(1,1)$. Controllo: $A(1,-2)=(2,-4)=2(1,-2)$ ✓.

**Esempio 2 (introduttivo) — matrice triangolare.** $A=\begin{psmallmatrix}3&5&7\\0&2&4\\0&0&1\end{psmallmatrix}$. Essendo triangolare, $\det(A-\lambda I)=(3-\lambda)(2-\lambda)(1-\lambda)$: gli autovalori sono gli elementi diagonali $3,2,1$. Per una matrice triangolare gli autovalori si leggono direttamente sulla diagonale.

**Esempio 3 (intermedio) — traccia e determinante come scorciatoia.** $A=\begin{psmallmatrix}1&2\\2&1\end{psmallmatrix}$: $\operatorname{tr}=2$, $\det=1-4=-3$. Cerchiamo due numeri di somma $2$ e prodotto $-3$: sono $3$ e $-1$. Quindi $\lambda_1=3$, $\lambda_2=-1$, senza scrivere esplicitamente il polinomio.

**Esempio 4 (intermedio) — matrice simmetrica e ortogonalità.** $A=\begin{psmallmatrix}3&1\\1&3\end{psmallmatrix}$: $p(\lambda)=(3-\lambda)^2-1=(\lambda-2)(\lambda-4)$. Autovettori: per $\lambda=2$, $(1,-1)$; per $\lambda=4$, $(1,1)$. Prodotto scalare $1-1=0$: ortogonali, come garantito dalla simmetria.

**Esempio 5 (intermedio) — autovalore nullo e nucleo.** $A=\begin{psmallmatrix}1&2\\2&4\end{psmallmatrix}$: $\det=0$, quindi $0$ è autovalore, con autospazio $\ker(A)$: da $v_1+2v_2=0$, autovettore $(2,-1)$. Il secondo autovalore è $\operatorname{tr}(A)-0=5$, con autovettore soluzione di $(A-5I)\mathbf{v}=0$, cioè $(1,2)$.

**Esempio 6 (avanzato) — autovalori complessi (rotazione).** $A=\begin{psmallmatrix}0&-1\\1&0\end{psmallmatrix}$ è la rotazione di $90^\circ$. $p(\lambda)=\lambda^2+1=0$ dà $\lambda=\pm i$: nessun autovalore reale, quindi nessuna direzione reale invariante — ed è corretto, perché una rotazione di $90^\circ$ non lascia ferma alcuna retta del piano. Gli autovettori vivono in $\mathbb{C}^2$.

**Esempio 7 (avanzato) — molteplicità geometrica carente.** $A=\begin{psmallmatrix}2&1\\0&2\end{psmallmatrix}$: $p(\lambda)=(2-\lambda)^2$, autovalore $2$ con $m_a=2$. Ma $A-2I=\begin{psmallmatrix}0&1\\0&0\end{psmallmatrix}$ ha nucleo $\operatorname{span}\{(1,0)\}$, quindi $m_g=1$. La disuguaglianza $m_g<m_a$ segnala che la matrice non è diagonalizzabile.

**Esempio 8 (applicativo) — comportamento asintotico di un sistema iterato.** Sia $\mathbf{x}_{k+1}=A\mathbf{x}_k$ con $A$ avente autovettori $\mathbf{v}_1,\mathbf{v}_2$ e autovalori $\lambda_1=3$, $\lambda_2=0{,}5$. Scritto lo stato iniziale come $\mathbf{x}_0=\mathbf{v}_1+\mathbf{v}_2$, dopo $k$ passi $\mathbf{x}_k=A^k\mathbf{x}_0=3^k\mathbf{v}_1+(0{,}5)^k\mathbf{v}_2$. Per $k$ grande il termine $(0{,}5)^k$ svanisce e $\mathbf{x}_k\approx 3^k\mathbf{v}_1$: il sistema si allinea alla direzione dell'autovalore dominante in modulo. È il principio del metodo delle potenze e, in scala planetaria, del calcolo del PageRank.

---

## 5. Collegamenti e riepilogo

Gli autovalori intrecciano tutti i fili dell'algebra lineare costruiti finora. Nascono dal determinante $[algebra-08-determinanti]$, che fornisce il test di singolarità $\det(A-\lambda I)=0$ da cui si estrae il polinomio caratteristico; vivono nei nuclei $\ker(A-\lambda I)$, cioè negli autospazi, ereditando dalla teoria delle trasformazioni lineari $[algebra-07-trasformazioni-lineari]$ il fatto di essere sottospazi; e la loro indipendenza per autovalori distinti si appoggia al concetto di base $[algebra-06-indipendenza-basi]$. Il legame più profondo è però con la lezione successiva: quando gli autovettori sono abbastanza numerosi da formare una base — cioè quando per ogni autovalore $m_g=m_a$ — la matrice si può *diagonalizzare*, riscrivere cioè come una semplice scala lungo assi propri. Il caso $m_g<m_a$ dell'Esempio 7 è precisamente l'ostacolo alla diagonalizzazione. Per le matrici simmetriche, gli autovettori ortogonali di §2.6 conducono al teorema spettrale e alla classificazione delle forme quadratiche $[algebra-14-forme-quadratiche]$, con applicazione diretta all'ottimizzazione multivariata (segno dell'Hessiana) e alla PCA in statistica.

L'essenziale da trattenere. Un autovettore è una direzione che $A$ non ruota, solo scala del fattore $\lambda$ (l'autovalore): $A\mathbf{v}=\lambda\mathbf{v}$ con $\mathbf{v}\ne\mathbf{0}$. Gli autovalori sono le radici del polinomio caratteristico $p(\lambda)=\det(A-\lambda I)$, di grado $n$; per il $2\times 2$, $p(\lambda)=\lambda^2-\operatorname{tr}(A)\lambda+\det(A)$. A ogni autovalore corrisponde l'autospazio $V_\lambda=\ker(A-\lambda I)$, di dimensione $m_g$ compresa fra $1$ e la molteplicità algebrica $m_a$. Somma e prodotto degli autovalori danno traccia e determinante: $\sum\lambda_i=\operatorname{tr}(A)$, $\prod\lambda_i=\det(A)$; in particolare $0$ è autovalore se e solo se $A$ è singolare. Le potenze si iterano senza sforzo: $A^k\mathbf{v}=\lambda^k\mathbf{v}$, e l'autovalore dominante governa l'evoluzione dei sistemi iterati. Autovettori di autovalori distinti sono indipendenti; per le matrici simmetriche sono anche ortogonali e gli autovalori sono reali.

---

## 6. Esercizi

<details class="dim-tecnica"><summary>Esercizio 1 (introduttivo) — autovalori e autovettori completi</summary>

**Testo.** Trovare autovalori e autovettori di $A=\begin{psmallmatrix}4&1\\2&3\end{psmallmatrix}$, verificando con traccia e determinante.

**Soluzione.** $p(\lambda)=\lambda^2-7\lambda+10=(\lambda-2)(\lambda-5)$. Per $\lambda=2$: $A-2I=\begin{psmallmatrix}2&1\\2&1\end{psmallmatrix}$, equazione $2v_1+v_2=0$, autovettore $(1,-2)$. Per $\lambda=5$: $A-5I=\begin{psmallmatrix}-1&1\\2&-2\end{psmallmatrix}$, equazione $v_1=v_2$, autovettore $(1,1)$. Controlli: $\operatorname{tr}=7=2+5$ ✓, $\det=10=2\cdot5$ ✓.

</details>

<details class="dim-tecnica"><summary>Esercizio 2 (introduttivo) — matrice triangolare</summary>

**Testo.** Trovare gli autovalori di $A=\begin{psmallmatrix}5&3&1\\0&-2&7\\0&0&4\end{psmallmatrix}$.

**Soluzione.** La matrice è triangolare superiore, dunque $p(\lambda)=(5-\lambda)(-2-\lambda)(4-\lambda)$ e gli autovalori sono gli elementi diagonali: $\lambda_1=5$, $\lambda_2=-2$, $\lambda_3=4$. Verifica con la traccia: $5+(-2)+4=7=\operatorname{tr}(A)$ ✓.

</details>

<details class="dim-tecnica"><summary>Esercizio 3 (standard) — scorciatoia traccia/determinante</summary>

**Testo.** Trovare gli autovalori di $A=\begin{psmallmatrix}6&2\\2&3\end{psmallmatrix}$ usando traccia e determinante.

**Soluzione.** $\operatorname{tr}(A)=9$, $\det(A)=18-4=14$. Gli autovalori risolvono $\lambda^2-9\lambda+14=0$, cioè $(\lambda-7)(\lambda-2)=0$. Dunque $\lambda_1=7$, $\lambda_2=2$; infatti $7+2=9$ e $7\cdot2=14$.

</details>

<details class="dim-tecnica"><summary>Esercizio 4 (standard) — simmetrica e ortogonalità</summary>

**Testo.** Trovare autovalori e autovettori di $A=\begin{psmallmatrix}2&1\\1&2\end{psmallmatrix}$ e verificarne l'ortogonalità.

**Soluzione.** $p(\lambda)=(2-\lambda)^2-1=(\lambda-1)(\lambda-3)$. Per $\lambda=1$: $A-I=\begin{psmallmatrix}1&1\\1&1\end{psmallmatrix}$, equazione $v_1+v_2=0$, autovettore $(1,-1)$. Per $\lambda=3$: $A-3I=\begin{psmallmatrix}-1&1\\1&-1\end{psmallmatrix}$, equazione $v_1=v_2$, autovettore $(1,1)$. Prodotto scalare $(1)(1)+(-1)(1)=0$: ortogonali, come previsto per una matrice simmetrica.

</details>

<details class="dim-tecnica"><summary>Esercizio 5 (standard) — autovalore nullo</summary>

**Testo.** Mostrare che $A=\begin{psmallmatrix}2&-6\\-1&3\end{psmallmatrix}$ ha $\lambda=0$ come autovalore e trovare entrambi gli autovalori con i relativi autovettori.

**Soluzione.** $\det(A)=6-6=0$, quindi $0$ è autovalore. L'autospazio è $\ker(A)$: da $2v_1-6v_2=0$, cioè $v_1=3v_2$, autovettore $(3,1)$. Il secondo autovalore è $\operatorname{tr}(A)-0=5$; per $\lambda=5$, $A-5I=\begin{psmallmatrix}-3&-6\\-1&-2\end{psmallmatrix}$ dà $v_1=-2v_2$, autovettore $(-2,1)$.

</details>

<details class="dim-tecnica"><summary>Esercizio 6 (standard) — potenza via autovalori</summary>

**Testo.** Con $A=\begin{psmallmatrix}1&2\\2&1\end{psmallmatrix}$ (autovalori $3$ e $-1$, autovettore $(1,1)$ per $\lambda=3$), verificare che $A^2(1,1)=9\,(1,1)$ e spiegare il caso generale.

**Soluzione.** $A(1,1)=(1+2,\ 2+1)=(3,3)=3(1,1)$, dunque $(1,1)$ è autovettore con $\lambda=3$. Allora $A^2(1,1)=A(3\cdot(1,1))=3\,A(1,1)=3\cdot3(1,1)=9(1,1)=3^2(1,1)$. In generale $A^k\mathbf{v}=\lambda^k\mathbf{v}$: sugli autovettori l'azione di $A^k$ è la moltiplicazione per $\lambda^k$.

</details>

<details class="dim-tecnica"><summary>Esercizio 7 (avanzato) — indipendenza di autovettori distinti</summary>

**Testo.** Verificare direttamente che gli autovettori $\mathbf{v}_1=(1,-2)$ (per $\lambda_1=2$) e $\mathbf{v}_2=(1,1)$ (per $\lambda_2=5$) dell'Esercizio 1 sono linearmente indipendenti, e collegare al risultato generale di §3.1.

**Soluzione.** Da $c_1(1,-2)+c_2(1,1)=(0,0)$ si ottiene il sistema $c_1+c_2=0$, $-2c_1+c_2=0$. Sottraendo, $3c_1=0$, quindi $c_1=0$ e $c_2=0$: indipendenti. Equivalentemente, $\det\begin{psmallmatrix}1&1\\-2&1\end{psmallmatrix}=3\ne0$. Il teorema di §3.1 garantisce questa indipendenza a priori, senza calcoli, perché gli autovalori $2$ e $5$ sono distinti.

</details>

<details class="dim-tecnica"><summary>Esercizio 8 (applicativo) — stabilità di un sistema iterato</summary>

**Testo.** Un sistema evolve come $\mathbf{x}_{k+1}=A\mathbf{x}_k$ con $A=\begin{psmallmatrix}1{,}2&0\\0&0{,}8\end{psmallmatrix}$ e $\mathbf{x}_0=(1,1)$. Descrivere il comportamento per $k\to\infty$.

**Soluzione.** $A$ è diagonale, con autovalori $\lambda_1=1{,}2>1$ e $\lambda_2=0{,}8<1$ e autovettori gli assi $\mathbf{e}_1,\mathbf{e}_2$. Allora $\mathbf{x}_k=A^k\mathbf{x}_0=\big((1{,}2)^k,\ (0{,}8)^k\big)$. Per $k\to\infty$ la prima componente diverge ($(1{,}2)^k\to\infty$) e la seconda decade a zero ($(0{,}8)^k\to0$): il sistema si allinea asintoticamente alla direzione $\mathbf{e}_1$ dell'autovalore di modulo maggiore. La presenza di un autovalore $>1$ in modulo rende il sistema instabile.

</details>
