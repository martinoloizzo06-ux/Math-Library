---
id: algebra-04-rango-rouche-capelli
subject: algebra-lineare
topic_it: Fondamenti
topic_en: Foundations
title_it: Rango e teorema di Rouché-Capelli
title_en: Rank and the Rouché-Capelli theorem
level: blue
order: 4
source_book: "G. Strang, Introduction to Linear Algebra; MIT OCW 18.06"
source_chapter: "Cap. 2–3 — Rango e spazio delle soluzioni"
---

## 1. Intuizione — Quante informazioni "effettive" contiene una matrice?

Immagina di avere 5 testimoni che descrivono un incidente. Se tre di loro si copiano a vicenda, le informazioni "reali" sono solo 2. Una matrice è simile: può avere 10 righe ma contenere solo 3 "informazioni indipendenti". Quel numero — la quantità di informazioni genuinamente nuove — è il **rango**.

Il rango risponde a domande fondamentali: quante soluzioni ha un sistema lineare? La matrice trasforma tutto lo spazio o "schiaccia" alcune direzioni? Esistono queste soluzioni?

Il **teorema di Rouché-Capelli** è la risposta definitiva alla domanda più importante dell'algebra lineare: *un sistema ha soluzione?* La risposta è elegante: sì, se e solo se aggiungere il vettore dei termini noti non aumenta il numero di informazioni indipendenti.

---

## 2. Prerequisiti

- Operazioni elementari sulle righe e forma a scalini (lezione precedente)
- Eliminazione di Gauss, nozione di pivot
- Combinazione lineare di vettori
- Nozione di dipendenza e indipendenza lineare (intuitiva)

---

## 3. Teoria

### Rango di una matrice

**Definizione:** Il **rango** di $A \in \mathbb{R}^{m\times n}$, denotato $\text{rk}(A)$ o $r(A)$, è il numero di pivot nella forma a scalini — equivalentemente, il numero massimo di righe (o di colonne) linearmente indipendenti.

$$\text{rk}(A) = \text{numero di pivot in REF}(A)$$

**Proprietà fondamentali:**

| Proprietà | Enunciato |
| --- | --- |
| Limitazione | $\text{rk}(A) \leq \min(m,n)$ |
| Simmetria riga-colonna | $\text{rk}(A) = \text{rk}(A^T)$ |
| Rango pieno per righe | Se $\text{rk}(A)=m$: ogni $\mathbf{b}$ è raggiungibile |
| Rango pieno per colonne | Se $\text{rk}(A)=n$: al più una soluzione |
| Invarianza | Le operazioni elementari non cambiano il rango |

**Rango pieno:** $A$ ha rango pieno se $\text{rk}(A) = \min(m,n)$.

### Spazio delle colonne e spazio delle righe

**Spazio delle colonne** (immagine di $A$):

$$\text{Im}(A) = \text{Col}(A) = \{A\mathbf{x} : \mathbf{x}\in\mathbb{R}^n\} \subseteq \mathbb{R}^m$$

$\text{Im}(A)$ è l'insieme di tutti i vettori $\mathbf{b}$ per cui $A\mathbf{x}=\mathbf{b}$ ha soluzione. La sua dimensione è il rango:

$$\dim(\text{Im}(A)) = \text{rk}(A)$$

**Spazio delle righe:**

$$\text{Row}(A) = \text{Col}(A^T) \subseteq \mathbb{R}^n$$

Dimensione: $\text{rk}(A^T) = \text{rk}(A)$.

### Nucleo (kernel)

**Definizione:** Il **nucleo** di $A$ è l'insieme delle soluzioni del sistema omogeneo:

$$\ker(A) = \{\mathbf{x}\in\mathbb{R}^n : A\mathbf{x} = \mathbf{0}\}$$

Il nucleo è sempre un sottospazio vettoriale di $\mathbb{R}^n$ (contiene $\mathbf{0}$, è chiuso per somma e scalare).

**Nullità:** $\text{null}(A) = \dim(\ker(A)) = $ numero di variabili libere.

### Teorema rango-nullità (fondamentale)

$$\boxed{\text{rk}(A) + \dim(\ker(A)) = n}$$

dove $n$ è il numero di **colonne** di $A$. In parole: il numero di pivot più il numero di variabili libere è sempre uguale al numero di incognite. Non è una coincidenza — ogni colonna è o una colonna-pivot o una colonna-libera.

### Teorema di Rouché-Capelli

**Enunciato:** Il sistema $A\mathbf{x} = \mathbf{b}$ (con $A\in\mathbb{R}^{m\times n}$) è **compatibile** (ammette almeno una soluzione) se e solo se:

$$\text{rk}(A) = \text{rk}([A\mid\mathbf{b}])$$

**Interpretazione:** il vettore $\mathbf{b}$ appartiene allo spazio delle colonne di $A$. Aggiungere la colonna $\mathbf{b}$ alla matrice non aumenta il numero di colonne linearmente indipendenti.

**Struttura completa delle soluzioni:**

$$\begin{cases} \text{rk}(A) < \text{rk}([A\mid\mathbf{b}]) & \implies \text{nessuna soluzione (incompatibile)} \\ \text{rk}(A) = \text{rk}([A\mid\mathbf{b}]) = n & \implies \text{soluzione unica} \\ \text{rk}(A) = \text{rk}([A\mid\mathbf{b}]) < n & \implies \text{infinite soluzioni (dim. }n-r\text{)} \end{cases}$$

### Struttura della soluzione generale

Quando il sistema è compatibile, ogni soluzione ha la forma:

$$\mathbf{x} = \mathbf{x}_p + \mathbf{x}_{\ker}$$

dove:
- $\mathbf{x}_p$ è una **soluzione particolare** qualsiasi di $A\mathbf{x}=\mathbf{b}$
- $\mathbf{x}_{\ker}$ è un elemento qualsiasi di $\ker(A)$ (soluzione del sistema omogeneo $A\mathbf{x}=\mathbf{0}$)

L'insieme delle soluzioni è uno **spazio affine** di dimensione $n - \text{rk}(A)$.

### Invertibilità e rango

Per una matrice quadrata $A \in \mathbb{R}^{n\times n}$, le seguenti affermazioni sono equivalenti:

| Condizione | Significato |
| --- | --- |
| $\text{rk}(A) = n$ | Rango massimo |
| $\ker(A) = \{\mathbf{0}\}$ | Nucleo banale |
| $\det(A) \neq 0$ | Determinante non zero |
| $A\mathbf{x}=\mathbf{b}$ ha soluzione unica $\forall\mathbf{b}$ | Compatibilità universale |
| Esiste $A^{-1}$ tale che $AA^{-1} = I$ | Matrice invertibile |

---

## 4. Derivazione — Perché la struttura della soluzione è "particolare + omogenea"?

**Teorema:** Se $\mathbf{x}_p$ è una soluzione di $A\mathbf{x}=\mathbf{b}$, allora ogni soluzione è della forma $\mathbf{x} = \mathbf{x}_p + \mathbf{z}$ con $\mathbf{z}\in\ker(A)$.

**Dimostrazione:**

Sia $\mathbf{x}$ una soluzione qualsiasi di $A\mathbf{x}=\mathbf{b}$. Definiamo $\mathbf{z} = \mathbf{x} - \mathbf{x}_p$.

Calcoliamo $A\mathbf{z}$:

$$A\mathbf{z} = A(\mathbf{x} - \mathbf{x}_p) = A\mathbf{x} - A\mathbf{x}_p = \mathbf{b} - \mathbf{b} = \mathbf{0}$$

Quindi $\mathbf{z} \in \ker(A)$, e $\mathbf{x} = \mathbf{x}_p + \mathbf{z}$.

**Viceversa:** se $\mathbf{z}\in\ker(A)$, allora $\mathbf{x}_p + \mathbf{z}$ soddisfa:

$$A(\mathbf{x}_p + \mathbf{z}) = A\mathbf{x}_p + A\mathbf{z} = \mathbf{b} + \mathbf{0} = \mathbf{b}$$

Quindi ogni elemento di $\mathbf{x}_p + \ker(A)$ è una soluzione. $\square$

Questo spiega la struttura geometrica: le soluzioni di $A\mathbf{x}=\mathbf{b}$ formano una traslazione del nucleo — un piano affine, non un sottospazio (a meno che $\mathbf{x}_p = \mathbf{0}$, cioè $\mathbf{b}=\mathbf{0}$).

---

## 5. Esempi

**Esempio 1 — Calcolo del rango per righe**

$$A = \begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}$$

$R_2 \leftarrow R_2 - 2R_1$, $R_3 \leftarrow R_3 - R_1$:

$$\begin{pmatrix}1&2&3\\0&0&0\\0&-2&-2\end{pmatrix} \xrightarrow{R_2\leftrightarrow R_3} \begin{pmatrix}1&2&3\\0&-2&-2\\0&0&0\end{pmatrix}$$

Due pivot: $\text{rk}(A) = 2$. Notare: la riga 2 originale era $2\times$ la riga 1 — informazione ridondante.

---

**Esempio 2 — Teorema rango-nullità**

Per la matrice precedente: $n=3$ colonne, $\text{rk}(A)=2$.

$$\dim(\ker(A)) = n - \text{rk}(A) = 3 - 2 = 1$$

Ci aspettiamo una variabile libera nel nucleo. Dalla RREF:

$$A\mathbf{x}=\mathbf{0} \implies \ker(A) = \text{span}\left\{\begin{pmatrix}-1\\-1\\1\end{pmatrix}\right\}$$

Verifica: $\dim = 1$ ✓.

---

**Esempio 3 — Rouché-Capelli: sistema compatibile**

Verificare la compatibilità di $A\mathbf{x}=\mathbf{b}$ con:

$$A = \begin{pmatrix}1&2\\3&6\end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix}2\\6\end{pmatrix}$$

$\text{rk}(A) = 1$ (riga 2 = 3 × riga 1).

Matrice aumentata: $\begin{pmatrix}1&2&2\\3&6&6\end{pmatrix}$; $R_2\leftarrow R_2-3R_1$: $\begin{pmatrix}1&2&2\\0&0&0\end{pmatrix}$.

$\text{rk}([A\mid\mathbf{b}]) = 1 = \text{rk}(A)$ — **compatibile**, infinite soluzioni.

---

**Esempio 4 — Rouché-Capelli: sistema incompatibile**

Stesso $A$, ma $\mathbf{b} = \begin{pmatrix}2\\5\end{pmatrix}$.

Matrice aumentata: $\begin{pmatrix}1&2&2\\3&6&5\end{pmatrix}$; $R_2\leftarrow R_2-3R_1$: $\begin{pmatrix}1&2&2\\0&0&-1\end{pmatrix}$.

$\text{rk}([A\mid\mathbf{b}]) = 2 > 1 = \text{rk}(A)$ — **incompatibile**. (La seconda riga dice $0 = -1$.)

---

**Esempio 5 — Soluzione generale con struttura particolare + omogenea**

Risolvere $A\mathbf{x} = \mathbf{b}$ con:

$$A = \begin{pmatrix}1&1&2\\2&1&3\\1&2&3\end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix}1\\2\\2\end{pmatrix}$$

Eliminazione su $[A\mid\mathbf{b}]$; $R_2\leftarrow R_2-2R_1$, $R_3\leftarrow R_3-R_1$:

$$\left(\begin{array}{ccc|c}1&1&2&1\\0&-1&-1&0\\0&1&1&1\end{array}\right) \xrightarrow{R_3+R_2} \left(\begin{array}{ccc|c}1&1&2&1\\0&-1&-1&0\\0&0&0&1\end{array}\right)$$

$\text{rk}([A\mid\mathbf{b}])=3 > \text{rk}(A)=2$ — **incompatibile**!

Proviamo con $\mathbf{b} = (1,2,3)^T$:

$$\left(\begin{array}{ccc|c}1&1&2&1\\0&-1&-1&0\\0&1&1&2\end{array}\right) \xrightarrow{R_3+R_2} \left(\begin{array}{ccc|c}1&1&2&1\\0&-1&-1&0\\0&0&0&2\end{array}\right)$$

Ancora incompatibile. Proviamo $\mathbf{b}=(1,2,2)^T$... già mostrato. Proviamo $\mathbf{b}=(3,5,4)^T$:

$R_2-2R_1$, $R_3-R_1$: $\left(\begin{array}{ccc|c}1&1&2&3\\0&-1&-1&-1\\0&1&1&1\end{array}\right)$; $R_3+R_2$: $\left(\begin{array}{ccc|c}1&1&2&3\\0&-1&-1&-1\\0&0&0&0\end{array}\right)$

Compatibile! $\text{rk}=2=\text{rk}([A\mid\mathbf{b}])$.

Variabile libera $x_3=t$: $-x_2-x_3=-1\implies x_2=1-t$. $x_1=3-x_2-2x_3=3-(1-t)-2t=2-t$.

Soluzione particolare ($t=0$): $\mathbf{x}_p=(2,1,0)^T$.

Nucleo: $\mathbf{x}=t(-1,1,1)^T\cdot(-1)+t(0,1,0)^T$... da sistema omogeneo: $t(-1,-1,1)$ — verifica $A(-1,-1,1)=(−1-1+2,−2-1+3,−1-2+3)=(0,0,0)^T$ ✓.

**Soluzione generale:** $\mathbf{x} = \begin{pmatrix}2\\1\\0\end{pmatrix} + t\begin{pmatrix}-1\\-1\\1\end{pmatrix}$, $t\in\mathbb{R}$.

---

**Esempio 6 — Rango di matrici rettangolari e rango pieno**

$$A = \begin{pmatrix}1&0&2\\0&1&3\end{pmatrix} \in \mathbb{R}^{2\times 3}$$

Già in REF. Due pivot: $\text{rk}(A)=2=m$. Rango pieno per righe.

Implicazione: per ogni $\mathbf{b}\in\mathbb{R}^2$, il sistema $A\mathbf{x}=\mathbf{b}$ è compatibile (ha soluzioni, infinite: $n-r=3-2=1$ variabile libera).

---

**Esempio 7 — Parametro che cambia il rango**

Per quali $k$ la matrice $A(k) = \begin{pmatrix}1&2&k\\0&1&3\\0&k&9\end{pmatrix}$ ha rango inferiore a 3?

$R_3 \leftarrow R_3 - k\,R_2$: terza riga diventa $(0, 0, 9-3k)$.

$\text{rk}(A) < 3 \iff 9-3k = 0 \iff k = 3$.

Per $k=3$: $\text{rk}(A)=2$, due variabili libere (anzi una, $n-r=3-2=1$). Per $k\neq3$: $\text{rk}(A)=3$, soluzione unica.

---

**Esempio 8 — Verifica del teorema rango-nullità**

$$A = \begin{pmatrix}1&2&1&3\\2&4&2&6\\1&2&0&2\end{pmatrix} \in \mathbb{R}^{3\times 4}$$

$R_2\leftarrow R_2-2R_1$, $R_3\leftarrow R_3-R_1$:

$$\begin{pmatrix}1&2&1&3\\0&0&0&0\\0&0&-1&-1\end{pmatrix} \xrightarrow{R_2\leftrightarrow R_3} \begin{pmatrix}1&2&1&3\\0&0&-1&-1\\0&0&0&0\end{pmatrix}$$

$\text{rk}(A)=2$. Teorema: $\dim(\ker A) = 4-2=2$. Variabili libere: $x_2=s$, $x_4=t$.

Da riga 2: $-x_3-x_4=0\implies x_3=-t$. Da riga 1: $x_1=-2s-x_3-3x_4=-2s+t-3t=-2s-2t$.

$$\ker(A) = \text{span}\left\{\begin{pmatrix}-2\\1\\0\\0\end{pmatrix}, \begin{pmatrix}-2\\0\\-1\\1\end{pmatrix}\right\}$$

Verifica: $\dim=2=4-2$ ✓.

---

## 6. Grafico

```plot
{"title":"Rette come soluzioni: compatibile vs incompatibile","fn":"(3-x)/2","fn2":"(5-x)/2","domain":[-1,5],"yDomain":[-1,4],"label1":"x+2y=3","label2":"x+2y=5 (parallela, incompat.)"}
```

---

## 7. Interattivo — Rango e dipendenza lineare

```slider
{"title":"Retta y=k·x: per k=2 è dipendente dalla retta y=2x","fn":"2*x","fn2":"a*x","domain":[-3,3],"yDomain":[-4,4],"pname":"a","pmin":-3,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"k","label1":"y=2x (fissa)","label2":"y=kx (variabile)"}
```

Quando $k=2$ le due rette coincidono: informazione ridondante, rango 1. Per ogni altro $k$: rango 2.

---

## 8. Errori comuni

**Errore 1 — Confondere rango con numero di righe.**
Una matrice $5\times3$ può avere rango al massimo 3, non 5. Il rango è limitato da $\min(m,n)$.

**Errore 2 — Applicare Rouché-Capelli senza calcolare entrambi i ranghi.**
Il teorema confronta $\text{rk}(A)$ con $\text{rk}([A\mid\mathbf{b}])$. Calcolare solo uno dei due è insufficiente.

**Errore 3 — Credere che rango = numero di righe non nulle dopo l'eliminazione.**
Il rango conta le righe **con un pivot**. Una riga può essere non nulla ma avere tutti i pivot già assegnati a righe precedenti (colonne già occupate).

**Errore 4 — Dimenticare il teorema rango-nullità.**
$\dim(\ker A) = n - \text{rk}(A)$. Trovare il rango implica conoscere anche la dimensione del nucleo — e quindi il numero di variabili libere.

**Errore 5 — Sommare soluzione particolare e omogenea erroneamente.**
$\mathbf{x} = \mathbf{x}_p + \mathbf{x}_{\ker}$ richiede che $\mathbf{x}_p$ sia una soluzione di $A\mathbf{x}=\mathbf{b}$ (non del sistema omogeneo) e $\mathbf{x}_{\ker}$ sia una soluzione di $A\mathbf{x}=\mathbf{0}$ (non del sistema completo).

**Errore 6 — Confondere "rango pieno per righe" con "rango pieno per colonne".**
Rango pieno per righe ($r=m$): il sistema ha sempre soluzione (ma non unica). Rango pieno per colonne ($r=n$): la soluzione, se esiste, è unica (ma potrebbe non esistere).

**Errore 7 — Calcolare il rango senza ridurre a scalini.**
Non basta contare le righe non nulle nella matrice originale — si contano i pivot **dopo** l'eliminazione.

---

## 9. Applicazioni reali

**Compressione di immagini (JPEG, video).** Un'immagine digitale è una matrice di pixel. Se la matrice ha rango basso (molte righe "simili"), si può approssimarla con molto meno dati. La decomposizione SVD (valori singolari) esprime la matrice come somma di $r$ termini di rango 1, e tenere solo i primi $k < r$ permette la compressione con perdita minima. Netflix usa questa tecnica per i suoi algoritmi di raccomandazione.

**Identificabilità nei modelli statistici.** In una regressione lineare, se le variabili esplicative sono perfettamente correlate (multicollinearità), la matrice $X^TX$ ha rango inferiore a pieno e il sistema delle equazioni normali $X^TX\boldsymbol{\beta}=X^T\mathbf{y}$ non ha soluzione unica. Il rango determina se i parametri del modello sono "identificabili" — cioè se i dati contengono abbastanza informazione per stimarli. Questo è fondamentale in econometria, biostatistica e data science.

**Codici correttori di errori.** Le trasmissioni digitali (WiFi, 5G, dischi rigidi) usano codici lineari: messaggi codificati come vettori, trasformati da una matrice generatrice. Il rango di questa matrice determina quanti errori si possono rilevare e correggere. Il codice Reed-Solomon (usato nei CD, QR code e nei sistemi di trasmissione spaziale della NASA) si basa interamente su proprietà del rango di matrici polinomiali.

---

## 10. Riepilogo

| Oggetto | Definizione | Dimensione |
| --- | --- | --- |
| Immagine $\text{Im}(A)$ | $\{A\mathbf{x}: \mathbf{x}\in\mathbb{R}^n\}\subseteq\mathbb{R}^m$ | $\text{rk}(A)$ |
| Nucleo $\ker(A)$ | $\{\mathbf{x}: A\mathbf{x}=\mathbf{0}\}\subseteq\mathbb{R}^n$ | $n - \text{rk}(A)$ |
| Spazio delle righe | $\text{Im}(A^T)\subseteq\mathbb{R}^n$ | $\text{rk}(A)$ |

| Teorema | Enunciato |
| --- | --- |
| Rango-nullità | $\text{rk}(A) + \dim(\ker A) = n$ |
| Rouché-Capelli | $A\mathbf{x}=\mathbf{b}$ compatibile $\iff \text{rk}(A) = \text{rk}([A\mid\mathbf{b}])$ |
| Struttura soluzioni | $\mathbf{x} = \mathbf{x}_p + \ker(A)$ |

| Condizione | Caso |
| --- | --- |
| $\text{rk}(A) < \text{rk}([A\mid\mathbf{b}])$ | Nessuna soluzione |
| $\text{rk}(A) = \text{rk}([A\mid\mathbf{b}]) = n$ | Soluzione unica |
| $\text{rk}(A) = \text{rk}([A\mid\mathbf{b}]) < n$ | Infinite soluzioni ($\infty^{n-r}$) |

---

## 11. Esercizi

<details>
<summary>Esercizio 1 — Calcolo del rango</summary>

Trovare il rango di:

$$A = \begin{pmatrix}2&4&-2\\1&2&-1\\3&6&-3\end{pmatrix}$$

**Soluzione:**

$R_2\leftarrow 2R_2-R_1$, $R_3\leftarrow 2R_3-3R_1$... oppure più direttamente:

$R_1\leftarrow\frac{1}{2}R_1$: $\begin{pmatrix}1&2&-1\\1&2&-1\\3&6&-3\end{pmatrix}$

$R_2\leftarrow R_2-R_1$, $R_3\leftarrow R_3-3R_1$: tutte le righe diventano nulle tranne la prima.

$$\text{rk}(A) = 1$$

Le tre righe sono tutte proporzionali a $(1,2,-1)$: una sola informazione indipendente.

</details>

<details>
<summary>Esercizio 2 — Teorema di Rouché-Capelli</summary>

Per quali valori di $k$ il sistema ha soluzioni?

$$\begin{cases} x + y = 2 \\ 2x + 2y = k \end{cases}$$

**Soluzione:**

$\text{rk}(A) = 1$ (righe proporzionali). Matrice aumentata: $\left(\begin{array}{cc|c}1&1&2\\2&2&k\end{array}\right)$; $R_2\leftarrow R_2-2R_1$: $\left(\begin{array}{cc|c}1&1&2\\0&0&k-4\end{array}\right)$.

$\text{rk}([A\mid\mathbf{b}])=1$ sse $k-4=0 \iff k=4$.

Per $k=4$: infinite soluzioni. Per $k\neq4$: nessuna soluzione.

</details>

<details>
<summary>Esercizio 3 — Nucleo e teorema rango-nullità</summary>

Trovare il nucleo di $A = \begin{pmatrix}1&2&1\\0&0&1\end{pmatrix}$.

**Soluzione:**

Da riga 2: $x_3=0$. Da riga 1: $x_1+2x_2=0\implies x_1=-2x_2$.

Variabile libera: $x_2=t$. Soluzione: $\mathbf{x}=t(-2,1,0)^T$.

$$\ker(A) = \text{span}\left\{\begin{pmatrix}-2\\1\\0\end{pmatrix}\right\}, \quad \dim(\ker A)=1$$

Verifica rango-nullità: $\text{rk}(A)+1=2+1=3=n$ ✓

</details>

<details>
<summary>Esercizio 4 — Soluzione generale</summary>

Trovare tutte le soluzioni di:

$$\begin{pmatrix}1&0&2\\0&1&-1\\1&1&1\end{pmatrix}\mathbf{x} = \begin{pmatrix}1\\2\\3\end{pmatrix}$$

**Soluzione:**

$R_3\leftarrow R_3-R_1-R_2$: $\left(\begin{array}{ccc|c}1&0&2&1\\0&1&-1&2\\0&0&0&0\end{array}\right)$

$\text{rk}=\text{rk}([A\mid\mathbf{b}])=2 < 3$ — compatibile con $\infty^1$ soluzioni. Variabile libera $x_3=t$.

- $x_2=2+t$
- $x_1=1-2t$

Soluzione particolare ($t=0$): $\mathbf{x}_p=(1,2,0)^T$.

$$\mathbf{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t\begin{pmatrix}-2\\1\\1\end{pmatrix}, \quad t\in\mathbb{R}$$

Verifica nucleo: $A(-2,1,1)^T = (-2+2, 1-1, -2+1+1)^T = \mathbf{0}$ ✓

</details>

<details>
<summary>Esercizio 5 — Rango e invertibilità</summary>

Determinare se $A = \begin{pmatrix}1&2&3\\4&5&6\\7&8&9\end{pmatrix}$ è invertibile.

**Soluzione:**

$R_2\leftarrow R_2-4R_1$, $R_3\leftarrow R_3-7R_1$:

$$\begin{pmatrix}1&2&3\\0&-3&-6\\0&-6&-12\end{pmatrix} \xrightarrow{R_3-2R_2} \begin{pmatrix}1&2&3\\0&-3&-6\\0&0&0\end{pmatrix}$$

$\text{rk}(A)=2 < 3$ — **non invertibile** (singolare).

$\dim(\ker A)=1$: la terza colonna $(3,6,9)^T = 3(1,2,3)^T$ è dipendente dalla prima, e c'è un'altra dipendenza.

</details>

<details>
<summary>Esercizio 6 — Parametro critico per la compatibilità</summary>

Trovare i valori di $\lambda$ per cui il sistema è compatibile e discutere il numero di soluzioni:

$$\begin{cases} x + y + z = 1 \\ x + \lambda y + z = \lambda \\ x + y + \lambda z = 1 \end{cases}$$

**Soluzione:**

$R_2\leftarrow R_2-R_1$, $R_3\leftarrow R_3-R_1$:

$$\left(\begin{array}{ccc|c}1&1&1&1\\0&\lambda-1&0&\lambda-1\\0&0&\lambda-1&0\end{array}\right)$$

**Caso $\lambda\neq1$:** $\text{rk}=3$. Le due equazioni non banali danno $y=1$ e $z=0$, poi $x=0$. **Soluzione unica:** $(0,1,0)$.

**Caso $\lambda=1$:** tutte le righe 2 e 3 diventano $[0\;0\;0\mid 0]$. $\text{rk}=1$.

$\text{rk}([A\mid\mathbf{b}])=1$ (la colonna aumentata è $(1,1,1)^T$ = prima riga = proporzionale). Sistema compatibile, **infinite soluzioni** con $n-r=2$ variabili libere: $x+y+z=1$.

</details>

<details>
<summary>Esercizio 7 — Rango di matrici trasposta</summary>

Verificare che $\text{rk}(A) = \text{rk}(A^T)$ per $A = \begin{pmatrix}1&2&0\\3&6&1\end{pmatrix}$.

**Soluzione:**

$R_2\leftarrow R_2-3R_1$: $\begin{pmatrix}1&2&0\\0&0&1\end{pmatrix}$. Due pivot: $\text{rk}(A)=2$.

$A^T = \begin{pmatrix}1&3\\2&6\\0&1\end{pmatrix}$; $R_2\leftarrow R_2-2R_1$: $\begin{pmatrix}1&3\\0&0\\0&1\end{pmatrix}$; $R_2\leftrightarrow R_3$: $\begin{pmatrix}1&3\\0&1\\0&0\end{pmatrix}$. Due pivot: $\text{rk}(A^T)=2$. ✓

</details>

<details>
<summary>Esercizio 8 — Nucleo e immagine di una matrice 2×4</summary>

Per $A = \begin{pmatrix}1&0&-1&2\\2&1&-1&3\end{pmatrix}$, trovare $\text{rk}(A)$, $\ker(A)$ e $\text{Im}(A)$.

**Soluzione:**

$R_2\leftarrow R_2-2R_1$: $\begin{pmatrix}1&0&-1&2\\0&1&1&-1\end{pmatrix}$.

$\text{rk}(A)=2$. Variabili libere: $x_3=s$, $x_4=t$.

- $x_2=-s+t$
- $x_1=s-2t$

$$\ker(A) = \text{span}\left\{\begin{pmatrix}1\\-1\\1\\0\end{pmatrix}, \begin{pmatrix}-2\\1\\0\\1\end{pmatrix}\right\}, \quad \dim=2=4-2 \checkmark$$

$\text{Im}(A) = \text{span}\left\{\begin{pmatrix}1\\2\end{pmatrix}, \begin{pmatrix}0\\1\end{pmatrix}\right\} = \mathbb{R}^2$ (rango pieno per righe: ogni $\mathbf{b}\in\mathbb{R}^2$ è raggiungibile).

</details>
