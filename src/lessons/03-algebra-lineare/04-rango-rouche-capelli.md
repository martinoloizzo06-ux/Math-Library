---
id: algebra-04-rango-rouche-capelli
titolo: "Rango e teorema di Rouché-Capelli"
materia: algebra-lineare
argomento: "Fondamenti"
modulo: "Vettori, matrici e sistemi lineari"
livello: universitario
slug: algebra-04-rango-rouche-capelli

# legacy
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: "Rango e teorema di Rouché-Capelli"
title_en: "Rank and the Rouché-Capelli theorem"
level: blue
order: 4
source_book: "A. Villanacci, Basic Linear Algebra, Metric Spaces, Differential Calculus and Nonlinear Programming (appunti); S. Axler, Linear Algebra Done Right (4ª ed.); D. Austin, Understanding Linear Algebra"
source_chapter: "Rango, spazio delle colonne, nucleo, teorema di nullità più rango, Rouché-Capelli"

prerequisiti:
  - algebra-02-matrici
  - algebra-03-sistemi-lineari

collegamenti:
  - algebra-03-sistemi-lineari
  - algebra-05-spazi-vettoriali
  - algebra-06-indipendenza-basi
  - algebra-07-trasformazioni-lineari
  - algebra-08-determinanti

fonti_integrate:
  - id_fonte: villanacci-math2
    ruolo: primaria
    sezioni_coperte: "Rango, teorema di Rouché-Capelli, discussione dei sistemi al variare di parametri, invertibilità"
    note: "appunti-prof: enunciato e uso di Rouché-Capelli come in sede d'esame"
  - id_fonte: axler-ladr
    ruolo: secondaria
    sezioni_coperte: "Teorema fondamentale delle applicazioni lineari (nullità più rango), eguaglianza rango righe = rango colonne"
    note: "rigore: rank-nullity come proprietà dell'applicazione, non solo conteggio di pivot"
  - id_fonte: austin-ula
    ruolo: secondaria
    sezioni_coperte: "Spazio delle colonne come immagine, lettura geometrica del rango, pivot e variabili libere"
    note: "intuizione: rango = numero di direzioni indipendenti nell'immagine"
  - id_fonte: cherney-linalg
    ruolo: secondaria
    sezioni_coperte: "Calcolo del rango, sistemi parametrici, esempi risolti"
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

Nella lezione precedente abbiamo imparato a risolvere un sistema lineare, e abbiamo notato che il numero di soluzioni dipende da quanti pivot compaiono nella forma a scalini. Quel conteggio di pivot è talmente centrale da meritare un nome e uno studio a sé: è il **rango** della matrice. Il rango misura *quanta informazione genuinamente indipendente* contiene una matrice, ed è il numero che, da solo, governa l'esistenza e l'unicità delle soluzioni di ogni sistema.

L'analogia dei testimoni chiarisce l'idea. Immagina cinque testimoni che descrivono lo stesso incidente. Se tre di loro ripetono parola per parola ciò che ha detto il primo, i resoconti «reali» non sono cinque ma tre: gli altri due non aggiungono nulla. Le righe di una matrice sono come questi testimoni. Una matrice può avere dieci righe e tuttavia contenere solo tre righe genuinamente diverse, nel senso che le altre sette si ottengono combinando quelle tre. Il rango è il numero di righe (equivalentemente, come vedremo, di colonne) veramente indipendenti — il contenuto informativo effettivo, ripulito dalle ridondanze.

Perché ci interessa tanto? Perché tutte le domande cruciali sui sistemi si traducono in domande sul rango. *Un sistema $A\mathbf{x}=\mathbf{b}$ ha soluzione?* La risposta, che è il **teorema di Rouché–Capelli**, è di una semplicità sorprendente: sì, se e solo se aggiungere il vettore $\mathbf{b}$ alla matrice non fa aumentare la quantità di informazione indipendente. In termini geometrici, $\mathbf{b}$ deve poter essere «costruito» combinando le colonne di $A$: se ci riesce, il sistema è risolvibile; se $\mathbf{b}$ punta in una direzione che le colonne non sanno raggiungere, non c'è alcuna soluzione. Il rango è esattamente lo strumento che quantifica «le direzioni raggiungibili».

C'è poi un secondo teorema, altrettanto fondamentale, che lega il rango al numero di variabili libere: il **teorema di nullità più rango**. Dice che i pivot e le variabili libere si spartiscono esattamente le colonne — ogni colonna o porta un pivot, o corrisponde a una variabile libera, senza eccezioni. Da qui discende immediatamente la dimensione dell'insieme delle soluzioni. Questi due teoremi trasformano l'intera teoria dei sistemi lineari, che nella lezione precedente sembrava una collezione di casi, in due enunciati puliti e universali. Sono anche il ponte concettuale verso gli spazi vettoriali: le nozioni di immagine, nucleo e dimensione che introduciamo qui in forma operativa saranno il cuore dei prossimi moduli.

## 2. Teoria

### 2.1 Rango: definizione e invarianza

**Definizione.** Il **rango** di una matrice $A \in \mathbb{R}^{m\times n}$, indicato $\operatorname{rk}(A)$, è il numero di pivot che compaiono quando $A$ è portata in forma a scalini mediante eliminazione di Gauss.

Perché questa definizione è ben posta? Perché una stessa matrice si può ridurre a scalini per strade diverse, ma il *numero* di pivot che si ottiene è sempre lo stesso. Questo dipende dal fatto, dimostrato nella lezione precedente, che le operazioni elementari non cambiano l'insieme delle soluzioni; qui aggiungiamo che non cambiano nemmeno le relazioni di dipendenza tra le righe e tra le colonne, e quindi non cambiano il rango. Il rango è dunque un **invariante** della matrice, non un artefatto del particolare cammino di calcolo.

*Micro-esempio.* La matrice $\begin{psmallmatrix}1&2\\ 2&4\end{psmallmatrix}$ ha la seconda riga uguale al doppio della prima. Un solo passo, $R_2 \leftarrow R_2 - 2R_1$, la riduce a $\begin{psmallmatrix}1&2\\ 0&0\end{psmallmatrix}$: un solo pivot, quindi $\operatorname{rk} = 1$. Le due righe portano una sola informazione.

Due proprietà seguono subito dalla definizione. Primo, il rango non può superare né il numero di righe né quello di colonne, perché ogni pivot occupa una riga distinta e una colonna distinta: $\operatorname{rk}(A) \le \min(m,n)$. Si dice che $A$ ha **rango pieno** quando vale l'uguaglianza. Secondo — e questo è meno ovvio — il numero di righe indipendenti coincide sempre col numero di colonne indipendenti, cioè $\operatorname{rk}(A) = \operatorname{rk}(A^\top)$. Ne parliamo nella parte tecnica della Sezione 3.

### 2.2 Colonne, immagine e la lettura di $A\mathbf{x}=\mathbf{b}$

Ricordiamo la lettura *per colonne* del prodotto matrice-vettore: $A\mathbf{x}$ è la combinazione lineare delle colonne di $A$ con pesi le componenti di $\mathbf{x}$. Se indichiamo con $\mathbf{a}_1, \ldots, \mathbf{a}_n$ le colonne di $A$, allora
$$A\mathbf{x} = x_1\mathbf{a}_1 + x_2\mathbf{a}_2 + \cdots + x_n\mathbf{a}_n.$$
L'insieme di *tutti* i vettori ottenibili al variare di $\mathbf{x}$ è lo **spazio delle colonne** o **immagine** di $A$:
$$\operatorname{Im}(A) = \{A\mathbf{x} : \mathbf{x}\in\mathbb{R}^n\} = \{\text{tutte le combinazioni lineari delle colonne di } A\} \subseteq \mathbb{R}^m.$$
Questa è precisamente la lista dei termini noti $\mathbf{b}$ per cui il sistema $A\mathbf{x}=\mathbf{b}$ è risolvibile: risolvere il sistema significa esprimere $\mathbf{b}$ come combinazione delle colonne, cosa possibile esattamente quando $\mathbf{b}\in\operatorname{Im}(A)$. La dimensione di questo spazio — cioè il numero di direzioni indipendenti che le colonne sanno generare — è di nuovo il rango:
$$\dim\big(\operatorname{Im}(A)\big) = \operatorname{rk}(A).$$

*Micro-esempio.* Per $A = \begin{psmallmatrix}1&2\\ 2&4\end{psmallmatrix}$ le due colonne $\begin{psmallmatrix}1\\2\end{psmallmatrix}$ e $\begin{psmallmatrix}2\\4\end{psmallmatrix}$ sono l'una il doppio dell'altra: puntano nella stessa direzione. Le loro combinazioni riempiono solo una retta di $\mathbb{R}^2$, non tutto il piano — coerente con $\operatorname{rk} = 1$. Il sistema $A\mathbf{x}=\mathbf{b}$ ha soluzione solo se $\mathbf{b}$ giace su quella retta.

### 2.3 Nucleo e nullità

Dall'altra parte c'è l'insieme dei vettori che $A$ manda nello zero. Il **nucleo** (o *kernel*) di $A$ è
$$\ker(A) = \{\mathbf{x}\in\mathbb{R}^n : A\mathbf{x} = \mathbf{0}\} \subseteq \mathbb{R}^n,$$
cioè l'insieme delle soluzioni del sistema omogeneo. Contiene sempre $\mathbf{0}$ ed è chiuso rispetto a somme e multipli scalari: se $A\mathbf{u}=\mathbf{0}$ e $A\mathbf{v}=\mathbf{0}$ allora $A(\alpha\mathbf{u}+\beta\mathbf{v}) = \alpha A\mathbf{u} + \beta A\mathbf{v} = \mathbf{0}$. Questa proprietà di chiusura — che discende direttamente dalla linearità del prodotto — è ciò che rende il nucleo un **sottospazio vettoriale**, nozione che formalizzeremo in [algebra-05-spazi-vettoriali]. La sua dimensione si chiama **nullità**:
$$\operatorname{null}(A) = \dim\big(\ker(A)\big) = \text{numero di variabili libere del sistema } A\mathbf{x}=\mathbf{0}.$$

### 2.4 Il teorema di nullità più rango

Mettendo insieme pivot e variabili libere si ottiene la prima relazione fondamentale.

$$\boxed{\;\operatorname{rk}(A) + \dim\big(\ker(A)\big) = n\;}$$

dove $n$ è il numero di **colonne** di $A$ (cioè di incognite). A parole: il numero di pivot più il numero di variabili libere è sempre uguale al numero di incognite. La ragione, che renderemo rigorosa nella Sezione 3, è che nella forma a scalini ogni colonna ricade in esattamente una di due categorie — colonna con pivot, che vincola un'incognita, oppure colonna senza pivot, che corrisponde a una variabile libera — senza sovrapposizioni né buchi. Il teorema è un bilancio contabile perfetto tra le colonne.

*Micro-esempio.* Una matrice $3\times 5$ con $\operatorname{rk}=3$ ha $\dim\ker = 5 - 3 = 2$: due variabili libere, dunque il sistema omogeneo ha un'infinità di soluzioni descritta da due parametri.

### 2.5 Il teorema di Rouché–Capelli

Veniamo alla domanda centrale: *quando $A\mathbf{x}=\mathbf{b}$ ha soluzione?*

**Teorema (Rouché–Capelli).** Il sistema $A\mathbf{x}=\mathbf{b}$, con $A\in\mathbb{R}^{m\times n}$, è **compatibile** (ammette almeno una soluzione) se e solo se il rango della matrice dei coefficienti eguaglia il rango della matrice aumentata:
$$\operatorname{rk}(A) = \operatorname{rk}\big([A\mid\mathbf{b}]\big).$$

L'idea, che la dimostrazione renderà precisa, è che aggiungere la colonna $\mathbf{b}$ ai coefficienti non deve introdurre una nuova direzione indipendente: se $\mathbf{b}$ è già combinazione delle colonne di $A$, il rango non cresce e il sistema è risolvibile; se invece $\mathbf{b}$ porta informazione nuova, il rango aumenta di uno e il sistema è impossibile. Combinando Rouché–Capelli col teorema di nullità più rango si ottiene la classificazione completa, che riformula in linguaggio di rango la trichotomia della lezione precedente:

| Confronto dei ranghi | Numero di soluzioni |
| --- | --- |
| $\operatorname{rk}(A) < \operatorname{rk}([A\mid\mathbf{b}])$ | nessuna (incompatibile) |
| $\operatorname{rk}(A) = \operatorname{rk}([A\mid\mathbf{b}]) = n$ | esattamente una |
| $\operatorname{rk}(A) = \operatorname{rk}([A\mid\mathbf{b}]) < n$ | infinite, con $n - \operatorname{rk}(A)$ variabili libere |

```checkpoint
{"domanda":"Un sistema ha $A\\in\\mathbb{R}^{4\\times 3}$ (quattro equazioni, tre incognite) con $\\operatorname{rk}(A)=3$ e $\\operatorname{rk}([A\\mid\\mathbf{b}])=3$. Quante soluzioni ha?","risposta":"Poiché $\\operatorname{rk}(A)=\\operatorname{rk}([A\\mid\\mathbf{b}])=3$, il sistema è compatibile (Rouché-Capelli). Inoltre il rango eguaglia il numero di incognite $n=3$, quindi non ci sono variabili libere: $\\dim\\ker=3-3=0$. La soluzione è **unica**. Il fatto che le equazioni siano quattro (più delle incognite) non crea problemi: una delle quattro righe è combinazione delle altre e non aggiunge un vincolo nuovo."}
```

### 2.6 Struttura della soluzione generale

Quando il sistema è compatibile e indeterminato, la lezione precedente ci ha già dato la forma dell'insieme delle soluzioni; qui la riscriviamo nel linguaggio del nucleo. Se $\mathbf{x}_p$ è una soluzione particolare di $A\mathbf{x}=\mathbf{b}$, allora *tutte* le soluzioni sono
$$\mathbf{x} = \mathbf{x}_p + \mathbf{x}_h, \qquad \mathbf{x}_h \in \ker(A).$$
L'insieme delle soluzioni è quindi il nucleo $\ker(A)$ traslato del vettore $\mathbf{x}_p$: un oggetto geometrico che si chiama **spazio affine**, di dimensione $n - \operatorname{rk}(A)$. Non è un sottospazio (non passa per l'origine, tranne quando $\mathbf{b}=\mathbf{0}$), ma è «parallelo» al nucleo. Ne segue un criterio di unicità limpido: un sistema compatibile ha soluzione unica se e solo se $\ker(A) = \{\mathbf{0}\}$, ossia se e solo se il suo omogeneo associato ammette solo la soluzione banale.

### 2.7 Rango e invertibilità (caso quadrato)

Per una matrice **quadrata** $A\in\mathbb{R}^{n\times n}$, il rango pieno è la chiave dell'invertibilità. Le seguenti affermazioni sono tutte equivalenti — o sono vere tutte insieme, o sono false tutte insieme:

| Condizione | Lettura |
| --- | --- |
| $\operatorname{rk}(A) = n$ | rango pieno, $n$ pivot |
| $\ker(A) = \{\mathbf{0}\}$ | solo la soluzione banale dell'omogeneo |
| $A\mathbf{x}=\mathbf{b}$ ha soluzione unica per ogni $\mathbf{b}$ | compatibilità e unicità universali |
| esiste $A^{-1}$ con $AA^{-1}=A^{-1}A=I$ | $A$ è invertibile |
| $\det(A)\neq 0$ | determinante non nullo |

L'ultima riga anticipa il **determinante**, il tema di [algebra-08-determinanti], che fornirà un test numerico diretto per il rango pieno delle matrici quadrate. Per ora osserviamo che tutte queste condizioni sono facce diverse dello stesso fatto: la trasformazione $\mathbf{x}\mapsto A\mathbf{x}$ non «schiaccia» nessuna direzione (nucleo banale) e raggiunge tutto lo spazio (immagine piena), quindi è invertibile.

### 2.8 Un elemento interattivo: quando due righe diventano dipendenti

Il cursore mostra due rette per l'origine, $y = 2x$ (fissa) e $y = kx$ (variabile). Ciascuna corrisponde a una riga della matrice $\begin{psmallmatrix}2 & -1\\ k & -1\end{psmallmatrix}$ (l'equazione $y = mx$ si scrive $mx - y = 0$). Muovendo $k$ si vede quando le due righe portano informazione indipendente e quando invece collassano su una sola direzione.

```slider
{"title":"Rette y=2x (fissa) e y=k·x: dipendenza tra le righe e caduta del rango (parametro: pendenza k)","fn":"2*x","fn2":"a*x","domain":[-3,3],"yDomain":[-6,6],"pname":"a","pmin":-3,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"pendenza k della seconda retta","label1":"retta y = 2x (prima riga)","label2":"retta y = k·x (seconda riga)"}
```

Per $k = 2$ le due rette coincidono: le righe sono proporzionali, portano una sola informazione, e il rango scende a $1$. Per ogni altro valore di $k$ le due rette sono distinte, le righe indipendenti, e il rango è $2$ (rango pieno). È la visualizzazione diretta di che cosa misura il rango: il numero di direzioni davvero diverse contenute nelle righe.

## 3. Dimostrazioni

### 3.1 Teorema di nullità più rango

**Enunciato.** Per ogni $A\in\mathbb{R}^{m\times n}$ vale $\operatorname{rk}(A) + \dim\ker(A) = n$.

*Dimostrazione.* Portiamo $A$ in forma ridotta a scalini $R$ (RREF) tramite operazioni elementari; queste non cambiano né il rango né il nucleo (non alterano l'insieme delle soluzioni di $A\mathbf{x}=\mathbf{0}$), quindi basta dimostrare l'identità per $R$. Sia $r = \operatorname{rk}(A)$ il numero di pivot di $R$. Le $n$ colonne si dividono in due gruppi disgiunti: le $r$ **colonne con pivot** e le $n-r$ **colonne senza pivot**. Vogliamo mostrare che $\dim\ker(A) = n - r$, cioè che il nucleo ha dimensione pari al numero di colonne senza pivot.

Le colonne senza pivot corrispondono alle variabili libere; chiamiamole $x_{j_1}, \ldots, x_{j_{n-r}}$. Risolvendo $R\mathbf{x}=\mathbf{0}$, ogni variabile con pivot resta espressa in funzione delle variabili libere. Costruiamo allora $n-r$ soluzioni speciali: la soluzione $\mathbf{v}_k$ si ottiene ponendo la $k$-esima variabile libera uguale a $1$ e tutte le altre variabili libere uguali a $0$, poi completando con i valori forzati delle variabili con pivot. Dobbiamo verificare due cose: che $\{\mathbf{v}_1, \ldots, \mathbf{v}_{n-r}\}$ genera tutto il nucleo e che è un insieme linearmente indipendente.

**Generano il nucleo.** Sia $\mathbf{x}$ una qualunque soluzione di $R\mathbf{x}=\mathbf{0}$, con valori $t_1, \ldots, t_{n-r}$ nelle variabili libere. Consideriamo $\mathbf{x} - (t_1\mathbf{v}_1 + \cdots + t_{n-r}\mathbf{v}_{n-r})$. Questo vettore è ancora nel nucleo (differenza di soluzioni dell'omogeneo), ma in ciascuna posizione libera vale $t_k - t_k = 0$: ha tutte le variabili libere nulle. Poiché in una soluzione dell'omogeneo le variabili con pivot sono completamente determinate da quelle libere, avere tutte le libere nulle forza anche tutte quelle con pivot a zero. Dunque quel vettore è $\mathbf{0}$, cioè $\mathbf{x} = t_1\mathbf{v}_1 + \cdots + t_{n-r}\mathbf{v}_{n-r}$: ogni soluzione è combinazione dei $\mathbf{v}_k$.

**Sono indipendenti.** Supponiamo $c_1\mathbf{v}_1 + \cdots + c_{n-r}\mathbf{v}_{n-r} = \mathbf{0}$. Guardiamo la componente corrispondente alla $k$-esima variabile libera: nel vettore $\mathbf{v}_k$ vale $1$, mentre in tutti gli altri $\mathbf{v}_i$ ($i\neq k$) vale $0$ per costruzione. Quindi quella componente della combinazione è esattamente $c_k$, che deve valere $0$. Ripetendo per ogni $k$ si ottiene $c_1 = \cdots = c_{n-r} = 0$: l'unica combinazione nulla è quella banale.

I vettori $\mathbf{v}_1, \ldots, \mathbf{v}_{n-r}$ formano quindi una base del nucleo, che ha perciò dimensione $n-r$. Sommando: $\operatorname{rk}(A) + \dim\ker(A) = r + (n-r) = n$. $\blacksquare$

### 3.2 Teorema di Rouché–Capelli

**Enunciato.** $A\mathbf{x}=\mathbf{b}$ è compatibile se e solo se $\operatorname{rk}(A) = \operatorname{rk}([A\mid\mathbf{b}])$.

*Dimostrazione.* La chiave è la lettura per colonne. Dire che $\mathbf{x}$ risolve $A\mathbf{x}=\mathbf{b}$ equivale a dire che $x_1\mathbf{a}_1 + \cdots + x_n\mathbf{a}_n = \mathbf{b}$, cioè che $\mathbf{b}$ è una combinazione lineare delle colonne di $A$. Quindi:
$$A\mathbf{x}=\mathbf{b}\ \text{è compatibile} \iff \mathbf{b}\in\operatorname{Im}(A) \iff \mathbf{b}\ \text{è combinazione delle colonne di } A. \qquad (\ast)$$

Ora colleghiamo questo al rango. Il rango di una matrice è la dimensione dello spazio generato dalle sue colonne. La matrice aumentata $[A\mid\mathbf{b}]$ ha le stesse colonne di $A$ più la colonna extra $\mathbf{b}$; il suo spazio delle colonne è quindi lo spazio generato dalle colonne di $A$ *insieme a* $\mathbf{b}$. Distinguiamo i due casi.

Se $\mathbf{b}\in\operatorname{Im}(A)$, allora $\mathbf{b}$ è già combinazione delle colonne di $A$: aggiungerlo non amplia lo spazio generato, che resta lo stesso. Dunque $\operatorname{rk}([A\mid\mathbf{b}]) = \operatorname{rk}(A)$.

Se invece $\mathbf{b}\notin\operatorname{Im}(A)$, allora $\mathbf{b}$ non è combinazione delle colonne di $A$: aggiungendolo si introduce una direzione indipendente da tutte le precedenti, e la dimensione dello spazio generato cresce esattamente di uno. Dunque $\operatorname{rk}([A\mid\mathbf{b}]) = \operatorname{rk}(A) + 1 > \operatorname{rk}(A)$.

Mettendo insieme con $(\ast)$: il sistema è compatibile $\iff \mathbf{b}\in\operatorname{Im}(A) \iff \operatorname{rk}([A\mid\mathbf{b}]) = \operatorname{rk}(A)$. E poiché aggiungere una colonna non può mai diminuire il rango, l'unica alternativa alla compatibilità è $\operatorname{rk}([A\mid\mathbf{b}]) = \operatorname{rk}(A)+1$, che segnala l'incompatibilità. $\blacksquare$

<details class="dim-tecnica">
<summary>Perché rango per righe = rango per colonne, e perché il rango è la dimensione dello spazio delle colonne</summary>

Nella dimostrazione di Rouché–Capelli abbiamo usato che «il rango è la dimensione dello spazio generato dalle colonne». Ma il rango l'abbiamo definito contando i pivot, che nascono da operazioni sulle *righe*. Occorre giustificare che i due punti di vista coincidono. Mostriamo che, per ogni $A$, il numero di righe indipendenti, il numero di colonne indipendenti e il numero di pivot sono lo stesso intero.

**Le operazioni elementari sulle righe non cambiano le relazioni di dipendenza tra le colonne.** Una relazione di dipendenza tra le colonne è un vettore $\mathbf{x}$ con $A\mathbf{x}=\mathbf{0}$ (esprime che una certa combinazione delle colonne dà zero). Poiché le operazioni elementari non alterano l'insieme delle soluzioni di $A\mathbf{x}=\mathbf{0}$, esse conservano *esattamente* le relazioni di dipendenza tra le colonne. Di conseguenza, quante colonne sono indipendenti in $A$ tante lo sono nella ridotta $R$.

**Nella RREF, righe e colonne indipendenti coincidono col numero di pivot.** In $R$ le righe non nulle sono esattamente le $r$ righe con pivot, e sono indipendenti (ciascuna ha un $1$ in una posizione di pivot dove tutte le altre righe hanno $0$), mentre le righe nulle non contano: il rango per righe di $R$ è $r$. Quanto alle colonne, le $r$ colonne con pivot in $R$ sono i vettori della base canonica $\mathbf{e}_1, \ldots, \mathbf{e}_r$ (in RREF ogni colonna-pivot ha un solo $1$ sulla riga del proprio pivot e zeri altrove), quindi sono indipendenti; ogni colonna senza pivot è invece combinazione di quelle con pivot alla sua sinistra. Perciò anche il rango per colonne di $R$ è $r$.

**Conclusione.** Il rango per righe si conserva perché le operazioni sulle righe non cambiano lo spazio generato dalle righe; il rango per colonne si conserva per l'argomento sulle dipendenze appena visto. Entrambi valgono $r$ in $R$, quindi valgono $r$ anche in $A$. Ne segue $\operatorname{rk}(A) = \operatorname{rk}(A^\top)$ e che il rango è tanto il numero di pivot quanto la dimensione dello spazio delle colonne — l'anello mancante usato nella dimostrazione principale.

</details>

## 4. Esempi

**Esempio 1 — Calcolo del rango e righe ridondanti.** Per $A = \begin{psmallmatrix}1&2&3\\ 2&4&6\\ 1&0&1\end{psmallmatrix}$, con $R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - R_1$ e poi $R_2 \leftrightarrow R_3$:
$$\begin{psmallmatrix}1&2&3\\ 0&-2&-2\\ 0&0&0\end{psmallmatrix}.$$
Due pivot: $\operatorname{rk}(A) = 2$. La seconda riga originale era il doppio della prima — informazione ridondante, che l'eliminazione azzera.

**Esempio 2 — Nullità dal teorema.** Per la matrice dell'Esempio 1, $n = 3$ e $\operatorname{rk} = 2$, quindi $\dim\ker(A) = 3 - 2 = 1$: una variabile libera. Risolvendo $A\mathbf{x}=\mathbf{0}$ dalla forma ridotta si trova $\ker(A) = \operatorname{span}\{(-1,-1,1)\}$, di dimensione $1$, in accordo col teorema. (Verifica: $A(-1,-1,1)^\top = (-1-2+3,\,-2-4+6,\,-1+0+1)^\top = \mathbf{0}$.)

**Esempio 3 — Rouché–Capelli, sistema compatibile.** Per $A = \begin{psmallmatrix}1&2\\ 3&6\end{psmallmatrix}$ e $\mathbf{b} = \begin{psmallmatrix}2\\6\end{psmallmatrix}$: la riga 2 è tre volte la riga 1, quindi $\operatorname{rk}(A)=1$. Riducendo $[A\mid\mathbf{b}]$ con $R_2\leftarrow R_2-3R_1$ si ottiene $\begin{psmallmatrix}1&2&\mid&2\\ 0&0&\mid&0\end{psmallmatrix}$, dunque $\operatorname{rk}([A\mid\mathbf{b}])=1=\operatorname{rk}(A)$. **Compatibile**, e con $\operatorname{rk}=1<2=n$ ha infinite soluzioni ($x = 2 - 2t$, $y = t$).

**Esempio 4 — Rouché–Capelli, sistema incompatibile.** Stesso $A$ ma $\mathbf{b} = \begin{psmallmatrix}2\\5\end{psmallmatrix}$. Con $R_2\leftarrow R_2-3R_1$ la matrice aumentata diventa $\begin{psmallmatrix}1&2&\mid&2\\ 0&0&\mid&-1\end{psmallmatrix}$, cioè $\operatorname{rk}([A\mid\mathbf{b}])=2 > 1 = \operatorname{rk}(A)$. **Incompatibile**: la riga finale dice $0 = -1$. Geometricamente, $\mathbf{b}=(2,5)$ non giace sulla retta generata dalla colonna $(1,3)$.

**Esempio 5 — Soluzione generale = particolare + nucleo.** Risolviamo $A\mathbf{x}=\mathbf{b}$ con $A = \begin{psmallmatrix}1&1&2\\ 2&1&3\\ 1&2&3\end{psmallmatrix}$ e $\mathbf{b} = \begin{psmallmatrix}3\\5\\4\end{psmallmatrix}$. Con $R_2\leftarrow R_2-2R_1$, $R_3\leftarrow R_3-R_1$, poi $R_3\leftarrow R_3+R_2$:
$$\left(\begin{array}{ccc|c}1&1&2&3\\ 0&-1&-1&-1\\ 0&0&0&0\end{array}\right).$$
Qui $\operatorname{rk}(A) = \operatorname{rk}([A\mid\mathbf{b}]) = 2 < 3$: compatibile con una variabile libera $x_3 = t$. Dalla seconda riga $-x_2 - t = -1 \Rightarrow x_2 = 1 - t$; dalla prima $x_1 = 3 - x_2 - 2t = 2 - t$. Particolare (con $t=0$): $\mathbf{x}_p = (2,1,0)$. Nucleo: $t(-1,-1,1)$ (si verifica $A(-1,-1,1)^\top=\mathbf{0}$). **Soluzione generale:**
$$\mathbf{x} = \begin{psmallmatrix}2\\1\\0\end{psmallmatrix} + t\begin{psmallmatrix}-1\\-1\\1\end{psmallmatrix},\quad t\in\mathbb{R}.$$

**Esempio 6 — Rango pieno per righe di una matrice rettangolare.** Per $A = \begin{psmallmatrix}1&0&2\\ 0&1&3\end{psmallmatrix}\in\mathbb{R}^{2\times 3}$, già a scalini, ci sono due pivot: $\operatorname{rk}(A)=2=m$. Rango pieno per righe significa $\operatorname{Im}(A)=\mathbb{R}^2$: per **ogni** $\mathbf{b}\in\mathbb{R}^2$ il sistema è compatibile. E poiché $\operatorname{rk}=2<3=n$, la soluzione non è mai unica: c'è sempre $3-2=1$ variabile libera.

**Esempio 7 — Un parametro che fa cadere il rango.** Per $A(k) = \begin{psmallmatrix}1&2&k\\ 0&1&3\\ 0&k&9\end{psmallmatrix}$, con $R_3 \leftarrow R_3 - k\,R_2$ la terza riga diventa $(0,\,0,\,9-3k)$. Quindi $\operatorname{rk}(A)<3 \iff 9-3k=0 \iff k=3$. Per $k=3$ si ha $\operatorname{rk}=2$ (una variabile libera); per $k\neq 3$ si ha $\operatorname{rk}=3$, rango pieno, e nel corrispondente sistema quadrato la soluzione è unica per ogni termine noto.

**Esempio 8 — Verifica del teorema di nullità più rango su una $3\times 4$.** Per $A = \begin{psmallmatrix}1&2&1&3\\ 2&4&2&6\\ 1&2&0&2\end{psmallmatrix}$, con $R_2\leftarrow R_2-2R_1$, $R_3\leftarrow R_3-R_1$, poi $R_2\leftrightarrow R_3$:
$$\begin{psmallmatrix}1&2&1&3\\ 0&0&-1&-1\\ 0&0&0&0\end{psmallmatrix}.$$
Pivot nelle colonne 1 e 3: $\operatorname{rk}(A)=2$, quindi $\dim\ker(A)=4-2=2$. Le colonne 2 e 4 sono libere ($x_2=s$, $x_4=t$); risolvendo, $x_3=-t$ e $x_1=-2s-2t$, da cui
$$\ker(A) = \operatorname{span}\left\{\begin{psmallmatrix}-2\\1\\0\\0\end{psmallmatrix},\ \begin{psmallmatrix}-2\\0\\-1\\1\end{psmallmatrix}\right\},$$
di dimensione $2 = 4 - 2$, come previsto.

## 5. Collegamenti e riepilogo

Questa lezione chiude il modulo dei fondamenti trasformando la casistica dei sistemi in due teoremi universali. Il conteggio dei pivot introdotto in [algebra-03-sistemi-lineari] diventa qui il **rango**, e la trichotomia geometrica di quella lezione si riformula come confronto di ranghi (Rouché–Capelli). Le nozioni di **immagine** e **nucleo** introdotte operativamente saranno riconosciute come sottospazi in [algebra-05-spazi-vettoriali], mentre la loro dimensione — cioè il rango e la nullità — è il tema centrale di [algebra-06-indipendenza-basi], dove il teorema di nullità più rango riapparirà come «teorema fondamentale delle applicazioni lineari». La lettura del prodotto come combinazione delle colonne, che qui è il motore della dimostrazione di Rouché–Capelli, prepara la visione di una matrice come **trasformazione lineare** di [algebra-07-trasformazioni-lineari]: immagine e nucleo diventeranno le due caratteristiche geometriche di quella trasformazione. Infine, per le matrici quadrate, la catena di equivalenze del rango pieno si completa col **determinante** in [algebra-08-determinanti].

Fuori dall'algebra lineare, il rango è ovunque si parli di ridondanza e di informazione effettiva. Nella **compressione** di immagini e nei sistemi di raccomandazione, una matrice di dati con rango basso si approssima con pochi termini (idea alla base della SVD, tema del modulo finale). In **econometria** e statistica, la multicollinearità tra regressori fa cadere il rango della matrice di disegno e rende i parametri non identificabili: il rango decide se i dati contengono abbastanza informazione per stimare il modello. Nei **codici correttori di errori** delle trasmissioni digitali, il rango della matrice generatrice determina quanti errori si possono rilevare e correggere.

**Idee chiave da ricordare.** Il rango è il numero di pivot, uguale al numero di righe indipendenti e al numero di colonne indipendenti, e coincide con $\dim\operatorname{Im}(A)$. Vale sempre $\operatorname{rk}(A) + \dim\ker(A) = n$ (nullità più rango). Un sistema è compatibile se e solo se $\operatorname{rk}(A) = \operatorname{rk}([A\mid\mathbf{b}])$ (Rouché–Capelli); se compatibile, la soluzione è unica quando $\operatorname{rk}(A)=n$ e altrimenti c'è un'infinità con $n - \operatorname{rk}(A)$ gradi di libertà. La soluzione generale è una particolare più il nucleo. Per una matrice quadrata, rango pieno, nucleo banale, invertibilità e determinante non nullo sono la stessa cosa.

| Oggetto | Definizione | Dimensione |
| --- | --- | --- |
| Immagine $\operatorname{Im}(A)$ | $\{A\mathbf{x} : \mathbf{x}\in\mathbb{R}^n\} \subseteq \mathbb{R}^m$ | $\operatorname{rk}(A)$ |
| Nucleo $\ker(A)$ | $\{\mathbf{x} : A\mathbf{x}=\mathbf{0}\} \subseteq \mathbb{R}^n$ | $n - \operatorname{rk}(A)$ |

| Teorema | Enunciato |
| --- | --- |
| Nullità più rango | $\operatorname{rk}(A) + \dim\ker(A) = n$ |
| Rouché–Capelli | $A\mathbf{x}=\mathbf{b}$ compatibile $\iff \operatorname{rk}(A) = \operatorname{rk}([A\mid\mathbf{b}])$ |
| Struttura soluzioni | $\mathbf{x} = \mathbf{x}_p + \ker(A)$ (spazio affine di dim. $n-\operatorname{rk}(A)$) |

## 6. Esercizi

<details class="dim-tecnica">
<summary>Esercizio 1 — Calcolo del rango</summary>

Trovare il rango di $A = \begin{psmallmatrix}2&4&-2\\ 1&2&-1\\ 3&6&-3\end{psmallmatrix}$.

**Soluzione.** Tutte le righe sono multipli di $(1,2,-1)$: la prima è $2\times$, la terza è $3\times$. Con $R_1\leftarrow\tfrac12 R_1$, poi $R_2\leftarrow R_2 - R_1$ e $R_3\leftarrow R_3 - 3R_1$, le righe 2 e 3 si annullano e resta un solo pivot. **$\operatorname{rk}(A)=1$**: una sola informazione indipendente.

</details>

<details class="dim-tecnica">
<summary>Esercizio 2 — Discussione con Rouché–Capelli</summary>

Per quali $k$ il sistema $\begin{cases}x + y = 2\\ 2x + 2y = k\end{cases}$ ha soluzioni?

**Soluzione.** Le righe dei coefficienti sono proporzionali, quindi $\operatorname{rk}(A)=1$. Con $R_2\leftarrow R_2 - 2R_1$ sulla matrice aumentata: $\left(\begin{smallmatrix}1&1&\mid&2\\ 0&0&\mid&k-4\end{smallmatrix}\right)$. Allora $\operatorname{rk}([A\mid\mathbf{b}])=1$ se e solo se $k-4=0$, cioè $k=4$. **Per $k=4$**: compatibile con infinite soluzioni; **per $k\neq 4$**: incompatibile.

</details>

<details class="dim-tecnica">
<summary>Esercizio 3 — Nucleo e verifica del teorema</summary>

Trovare $\ker(A)$ per $A = \begin{psmallmatrix}1&2&1\\ 0&0&1\end{psmallmatrix}$ e verificare nullità più rango.

**Soluzione.** Dalla riga 2, $x_3 = 0$; dalla riga 1, $x_1 = -2x_2$. Variabile libera $x_2 = t$: $\mathbf{x} = t(-2,1,0)$, quindi $\ker(A) = \operatorname{span}\{(-2,1,0)\}$, $\dim=1$. Verifica: $\operatorname{rk}(A)=2$ e $2 + 1 = 3 = n$ ✓.

</details>

<details class="dim-tecnica">
<summary>Esercizio 4 — Soluzione generale</summary>

Risolvere $\begin{psmallmatrix}1&0&2\\ 0&1&-1\\ 1&1&1\end{psmallmatrix}\mathbf{x} = \begin{psmallmatrix}1\\2\\3\end{psmallmatrix}$.

**Soluzione.** Con $R_3\leftarrow R_3 - R_1 - R_2$: $\left(\begin{smallmatrix}1&0&2&\mid&1\\ 0&1&-1&\mid&2\\ 0&0&0&\mid&0\end{smallmatrix}\right)$, quindi $\operatorname{rk}=\operatorname{rk}([A\mid\mathbf{b}])=2<3$: compatibile con $x_3=t$ libera. Allora $x_2 = 2+t$, $x_1 = 1-2t$. Particolare $\mathbf{x}_p=(1,2,0)$; nucleo $t(-2,1,1)$ (verifica: $A(-2,1,1)^\top=\mathbf{0}$). **Generale:** $\mathbf{x} = (1,2,0) + t(-2,1,1)$, $t\in\mathbb{R}$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 5 — Rango e invertibilità</summary>

$A = \begin{psmallmatrix}1&2&3\\ 4&5&6\\ 7&8&9\end{psmallmatrix}$ è invertibile?

**Soluzione.** Con $R_2\leftarrow R_2-4R_1$, $R_3\leftarrow R_3-7R_1$, poi $R_3\leftarrow R_3-2R_2$:
$$\begin{psmallmatrix}1&2&3\\ 0&-3&-6\\ 0&0&0\end{psmallmatrix}.$$
$\operatorname{rk}(A)=2<3$: **non invertibile** (singolare). Per la catena di equivalenze, $\ker(A)\neq\{\mathbf{0}\}$ e $\det(A)=0$. La terza riga è due volte la seconda meno la prima — una dipendenza nascosta.

</details>

<details class="dim-tecnica">
<summary>Esercizio 6 — Parametro critico per la compatibilità</summary>

Discutere, al variare di $\lambda$, il sistema $\begin{cases} x + y + z = 1 \\ x + \lambda y + z = \lambda \\ x + y + \lambda z = 1.\end{cases}$

**Soluzione.** Con $R_2\leftarrow R_2 - R_1$ e $R_3\leftarrow R_3 - R_1$:
$$\left(\begin{array}{ccc|c}1&1&1&1\\ 0&\lambda-1&0&\lambda-1\\ 0&0&\lambda-1&0\end{array}\right).$$
**Se $\lambda\neq 1$:** dividendo le righe 2 e 3 per $\lambda-1$ si ha $y=1$, $z=0$, poi $x=0$. Rango $3$, **soluzione unica** $(0,1,0)$. **Se $\lambda=1$:** le righe 2 e 3 diventano nulle, $\operatorname{rk}(A)=1$; anche $\operatorname{rk}([A\mid\mathbf{b}])=1$ (la colonna dei termini noti è proporzionale alla prima riga), quindi compatibile con $n-r=2$ variabili libere — **infinite soluzioni** date da $x+y+z=1$.

</details>

<details class="dim-tecnica">
<summary>Esercizio 7 — Rango della trasposta</summary>

Verificare $\operatorname{rk}(A)=\operatorname{rk}(A^\top)$ per $A = \begin{psmallmatrix}1&2&0\\ 3&6&1\end{psmallmatrix}$.

**Soluzione.** Con $R_2\leftarrow R_2-3R_1$: $\begin{psmallmatrix}1&2&0\\ 0&0&1\end{psmallmatrix}$, due pivot, $\operatorname{rk}(A)=2$. Per la trasposta $A^\top=\begin{psmallmatrix}1&3\\ 2&6\\ 0&1\end{psmallmatrix}$, con $R_2\leftarrow R_2-2R_1$ e $R_2\leftrightarrow R_3$ si arriva a $\begin{psmallmatrix}1&3\\ 0&1\\ 0&0\end{psmallmatrix}$, due pivot: $\operatorname{rk}(A^\top)=2$ ✓, in accordo con l'uguaglianza rango-righe = rango-colonne.

</details>

<details class="dim-tecnica">
<summary>Esercizio 8 — Nucleo e immagine di una $2\times 4$</summary>

Per $A = \begin{psmallmatrix}1&0&-1&2\\ 2&1&-1&3\end{psmallmatrix}$, trovare $\operatorname{rk}(A)$, $\ker(A)$ e $\operatorname{Im}(A)$.

**Soluzione.** Con $R_2\leftarrow R_2-2R_1$: $\begin{psmallmatrix}1&0&-1&2\\ 0&1&1&-1\end{psmallmatrix}$, due pivot, $\operatorname{rk}(A)=2$. Variabili libere $x_3=s$, $x_4=t$: dalla riga 2 $x_2=-s+t$, dalla riga 1 $x_1=s-2t$, quindi
$$\ker(A)=\operatorname{span}\left\{\begin{psmallmatrix}1\\-1\\1\\0\end{psmallmatrix},\ \begin{psmallmatrix}-2\\1\\0\\1\end{psmallmatrix}\right\},\quad \dim=2=4-2.$$
Poiché $\operatorname{rk}(A)=2=m$, il rango è pieno per righe: $\operatorname{Im}(A)=\mathbb{R}^2$, cioè ogni $\mathbf{b}\in\mathbb{R}^2$ è raggiungibile.

</details>
