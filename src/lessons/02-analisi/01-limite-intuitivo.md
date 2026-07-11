---
id: analisi-01-limite-intuitivo
titolo: "Concetto di limite — approccio intuitivo"
materia: analisi
argomento: "Limiti e continuità"
modulo: "Concetto di limite"
livello: universitario
slug: analisi-01-limite-intuitivo

# legacy
subject: analisi
topic_it: "Limiti e continuità"
topic_en: "Limits and continuity"
title_it: "Concetto di limite e definizione intuitiva"
title_en: "The concept of limit — intuitive approach"
level: blue
order: 1
source_book: "OpenStax Calculus Vol. 1; A. Villanacci, Notes for Mathematics 1"
source_chapter: "Cap. 2 — Limiti"

prerequisiti:
  - base-10-funzioni
  - base-09-valore-assoluto
  - base-01-insiemi-numerici

collegamenti:
  - analisi-02-limite-epsilon-delta
  - analisi-03-calcolo-limiti
  - analisi-04-continuita
  - analisi-06-derivata-definizione

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 2.1–2.2"
    note: "impianto intuitivo, tabelle di valori, stima da grafico, limiti unilaterali e infiniti, asintoto verticale"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 4 (intorni, punti di accumulazione), Cap. 6 (definizioni di limite), Cap. 8 (continuità)"
    note: "impostazione rigorosa via intorni e punti di accumulazione; ha priorità per la definizione formale e la notazione da esame"
  - id_fonte: villanacci-successioni
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 1 (successioni in R)"
    note: "la nozione di convergenza di successione come formalizzazione dell'idea di avvicinarsi"

versione: "2.0"
data_ultima_rielaborazione: "2026-07-10"
stato: da-rielaborare

componenti_usati:
  - plot
  - slider

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Immagina di camminare lungo un corridoio buio verso una porta chiusa. Puoi avvicinarti quanto vuoi — un metro, un centimetro, un millesimo di millimetro — ma la porta resta chiusa: non la attraversi mai. Eppure chiunque ti osservi può dire con certezza verso *quale* punto stai tendendo: il bordo della porta. Il valore a cui tendi è ben definito anche se non lo raggiungi, e anche se — al limite — quella porta non esistesse affatto.

Il **limite** funziona esattamente così. Dati un punto $a$ e una funzione $f$, vogliamo sapere verso quale valore tende $f(x)$ quando $x$ si avvicina ad $a$, **indipendentemente da ciò che accade esattamente in $a$**. La porta potrebbe non esistere (la funzione non è definita in $a$), oppure essere spalancata in una posizione anomala (il valore $f(a)$ è "sbagliato"): niente di tutto questo cambia il corridoio che hai percorso. Questa è la distinzione più importante e più rivoluzionaria dell'intera analisi: **il limite descrive un comportamento nelle vicinanze, non un valore puntuale.**

### Perché il concetto esiste: due problemi antichi

Il limite non è nato come curiosità astratta, ma per risolvere due problemi concreti che per secoli erano rimasti senza fondamento rigoroso.

Il **problema della tangente**. Data una curva, come si definisce la retta tangente in un punto? La retta *secante* per due punti distinti si costruisce facilmente. Ma la tangente tocca la curva in un punto solo: per costruirla servirebbero "due punti che coincidono", e la pendenza diventa $\tfrac{0}{0}$, priva di senso. L'idea vincente è far *scorrere* il secondo punto verso il primo e osservare verso quale pendenza tende la secante. Quel valore-limite è la pendenza della tangente — ed è la **derivata**.

Il **problema dell'area**. Come si calcola l'area di una regione dai bordi curvi? I greci la approssimavano con poligoni inscritti, aumentando il numero di lati: più lati, migliore l'approssimazione. L'area esatta è il valore verso cui tendono queste approssimazioni quando il numero di lati cresce senza limite. Questo valore-limite è l'**integrale definito**.

Entrambi i problemi hanno la stessa forma logica: una quantità che non possiamo calcolare direttamente viene ottenuta come *valore verso cui tende* una successione di quantità che sappiamo calcolare. Il limite è lo strumento che dà senso rigoroso a questo "tendere verso". Senza di esso il calcolo differenziale e integrale — e quindi gran parte della fisica, dell'economia e della statistica moderne — semplicemente non esisterebbe.

### Un esempio che chiarisce tutto

Considera la funzione

$$f(x) = \frac{x^2 - 1}{x - 1}.$$

In $x = 1$ questa funzione **non è definita**: sostituendo si ottiene $\tfrac{0}{0}$, che è privo di significato. Eppure, per ogni $x \neq 1$, possiamo semplificare:

$$\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1.$$

Quindi, per tutti i punti *diversi* da $1$, la funzione coincide con $x+1$. Avvicinandoci a $x = 1$ senza mai toccarlo, i valori $f(x)$ si avvicinano a $2$. Scriviamo

$$\lim_{x \to 1} \frac{x^2-1}{x-1} = 2,$$

**anche se $f(1)$ non esiste**. Il limite esiste lo stesso: il corridoio conduce alla porta, anche quando la porta non c'è. Tenere separate queste due domande — "quanto vale $f$ in $a$?" e "verso cosa tende $f$ vicino ad $a$?" — è il primo passo per capire davvero l'analisi.

---

## 2. Prerequisiti

Per seguire questa lezione servono alcune nozioni di base, tutte trattate nella sezione di Matematica di base:

- **Funzione reale** ([Matematica di base, Funzioni](/base/funzioni/base-10-funzioni)): il concetto di $f: D \subseteq \mathbb{R} \to \mathbb{R}$, di dominio $D$ e di grafico. Serve perché il limite è una proprietà di una funzione in relazione a un punto del suo dominio (o del bordo del dominio).
- **Valore assoluto e distanza** ([Matematica di base, Valore assoluto](/base/valore-assoluto/base-09-valore-assoluto)): l'idea che $\lvert x - a \rvert$ misura la **distanza** tra $x$ e $a$ sulla retta reale. Tutta la nozione di "avvicinarsi" si traduce nel rendere piccola questa distanza.
- **Insiemi numerici e intervalli** ([Matematica di base, Insiemi numerici](/base/insiemi-numerici/base-01-insiemi-numerici)): unione, intersezione, intervalli aperti $(a-r,\,a+r)$. Serviranno per definire l'**intorno** di un punto, il "raggio d'azione" entro cui guardiamo la funzione.

Non serve invece conoscere in anticipo la definizione $\varepsilon$–$\delta$: la costruiamo intuitivamente qui e la formalizziamo nella lezione successiva ([Definizione ε-δ del limite](/analisi/limiti-e-continuita/analisi-02-limite-epsilon-delta)).

---

## 3. Teoria completa

### 3.1 Definizione informale di limite

Cominciamo, come fecero i matematici prima dell'Ottocento, con una definizione **intuitiva**. La renderemo rigorosa nella prossima lezione.

**Definizione (informale).** Sia $f$ una funzione definita in un intorno di $a$, tranne eventualmente in $a$ stesso. Diciamo che il **limite di $f(x)$ per $x$ che tende ad $a$ è $L$**, e scriviamo

$$\lim_{x \to a} f(x) = L,$$

se, all'avvicinarsi di $x$ ad $a$ (da sinistra o da destra, con $x \neq a$), i valori $f(x)$ si avvicinano arbitrariamente a $L$ e vi restano vicini.

Leggiamo la scrittura simbolo per simbolo:

- $\displaystyle\lim$ è l'operatore di limite: prende una funzione e un modo di far variare $x$, e restituisce (se esiste) un numero.
- $x \to a$ ("$x$ tende ad $a$") indica **come** facciamo variare $x$: lo avviciniamo indefinitamente ad $a$, senza mai porlo uguale ad $a$.
- $f(x)$ è la quantità che osserviamo mentre $x$ si muove.
- $L$ è il valore verso cui $f(x)$ si stabilizza: il numero letto in fondo al corridoio.

Il punto cruciale è la clausola $x \neq a$. Il limite riguarda il comportamento *attorno* ad $a$, non *in* $a$. Il valore $f(a)$ — ammesso che esista — è del tutto irrilevante per la definizione. Questa è la ragione per cui, nell'esempio della Sezione 1, il limite valeva $2$ pur essendo $f(1)$ inesistente.

L'espressione "si avvicinano arbitrariamente" è il cuore ancora vago della definizione: significa che possiamo rendere $f(x)$ vicino a $L$ *quanto vogliamo*, purché prendiamo $x$ abbastanza vicino ad $a$. Rendere preciso questo "quanto vogliamo / abbastanza vicino" è precisamente il compito della definizione $\varepsilon$–$\delta$ (lezione 2).

### 3.2 Intorno e intorno bucato

Per parlare con precisione di "vicinanza" introduciamo un oggetto elementare.

**Definizione (intorno).** Dato $a \in \mathbb{R}$ e un raggio $r > 0$, l'**intorno** di $a$ di raggio $r$ è l'intervallo aperto

$$I_r(a) = (a - r,\ a + r) = \{\, x \in \mathbb{R} : \lvert x - a \rvert < r \,\}.$$

È l'insieme dei punti a distanza minore di $r$ da $a$: un "cerchietto" attorno ad $a$ sulla retta. Qui $\lvert x - a\rvert < r$ è la traduzione esatta di "$x$ dista da $a$ meno di $r$".

**Definizione (intorno bucato).** L'**intorno bucato** di $a$ di raggio $r$ è lo stesso insieme privato del centro:

$$\mathring{I}_r(a) = (a-r,\ a+r) \setminus \{a\} = \{\, x : 0 < \lvert x - a \rvert < r \,\}.$$

La doppia disuguaglianza $0 < \lvert x - a\rvert < r$ dice due cose insieme: $x$ è vicino ad $a$ (parte $\lvert x-a\rvert < r$) **ma** $x \neq a$ (parte $0 < \lvert x-a\rvert$, perché la distanza è nulla solo quando $x = a$). L'intorno bucato è esattamente il "corridoio senza la porta": è lì che vive il concetto di limite. Ogni volta che scriveremo un limite, la variabile $x$ percorre intorni bucati sempre più piccoli.

### 3.3 Dove ha senso fare un limite: il punto di accumulazione

C'è una condizione tecnica che l'intuizione tende a nascondere ma che è essenziale: perché la frase "$x$ si avvicina ad $a$ restando nel dominio" abbia senso, deve esistere davvero una scorta infinita di punti del dominio arbitrariamente vicini ad $a$. Altrimenti non c'è nessun corridoio da percorrere.

**Definizione (punto di accumulazione).** Sia $D \subseteq \mathbb{R}$. Un punto $a \in \mathbb{R}$ è un **punto di accumulazione** di $D$ se ogni intorno bucato di $a$ contiene almeno un punto di $D$:

$$\forall r > 0 \quad \mathring{I}_r(a) \cap D \neq \varnothing.$$

In parole: comunque piccolo scelga il raggio $r$, dentro il "cerchietto bucato" attorno ad $a$ trovo sempre qualche punto del dominio. Si dimostra che questo equivale a chiedere che ogni intorno di $a$ contenga *infiniti* punti di $D$. Il punto $a$ **non** deve appartenere a $D$: nell'esempio $\tfrac{x^2-1}{x-1}$ il punto $1$ non sta nel dominio, ma è punto di accumulazione, e proprio per questo il limite in $1$ ha senso.

Il concetto opposto è quello di **punto isolato**: $a \in D$ è isolato se esiste un intorno che, tolto $a$, non contiene altri punti di $D$. In un punto isolato non si può parlare di limite (non c'è nessun corridoio), ma — vedremo nella lezione sulla continuità — la funzione risulta automaticamente continua lì.

> **Perché questa condizione conta davvero.** Nella maggior parte degli esempi che incontrerai (funzioni su un intervallo) ogni punto è di accumulazione e la condizione è automatica: puoi ignorarla senza sbagliare. Diventa rilevante quando il dominio ha "buchi" o punti isolati — per esempio funzioni definite solo sugli interi, o su unioni di intervalli separati. È la differenza tra dire "il limite esiste" e "il limite ha senso porlo": la formalizzeremo nella lezione 2.

### 3.4 Limite sinistro e limite destro

Spesso conta *da quale lato* ci avviciniamo ad $a$. Ci si può muovere verso $a$ tenendosi a sinistra ($x < a$) oppure a destra ($x > a$), e la funzione può comportarsi diversamente nei due casi.

**Limite sinistro** (da sinistra, $x < a$):

$$\lim_{x \to a^-} f(x) = L^-.$$

Si legge "limite di $f(x)$ per $x$ che tende ad $a$ da sinistra". Qui $x$ assume solo valori **strettamente minori** di $a$ mentre si avvicina: percorriamo solo la metà sinistra del corridoio bucato.

**Limite destro** (da destra, $x > a$):

$$\lim_{x \to a^+} f(x) = L^+.$$

Si legge "da destra": $x$ assume solo valori **strettamente maggiori** di $a$. Il piccolo apice $-$ o $+$ ricorda da che parte stiamo arrivando (il segno di $x - a$).

### 3.5 Il legame tra limite bilatero e limiti unilaterali

**Teorema (esistenza del limite bilatero).** Sia $a$ un punto di accumulazione sia da sinistra che da destra. Allora il limite bilatero esiste ed è uguale a $L$ **se e solo se** esistono entrambi i limiti unilaterali e coincidono:

$$\lim_{x \to a} f(x) = L \quad\Longleftrightarrow\quad \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L.$$

L'espressione "$\Longleftrightarrow$" è una doppia implicazione: il limite bilatero esiste **esattamente quando** i due unilaterali esistono e sono uguali. Le conseguenze pratiche sono tre:

1. se i due limiti unilaterali esistono ma sono **diversi**, il limite bilatero **non esiste**;
2. se anche uno solo dei due unilaterali non esiste, il bilatero non esiste;
3. per calcolare un limite bilatero difficile (funzioni a tratti, valore assoluto) conviene spezzarlo nei due unilaterali, spesso più semplici.

Questo teorema è lo strumento operativo numero uno per stabilire la *non esistenza* di un limite: basta esibire due lati con comportamenti diversi.

### 3.6 Limiti all'infinito e limiti infiniti

Il concetto di limite si estende naturalmente a due situazioni in cui compare l'infinito. Sono cose diverse e vanno tenute distinte.

**Limite all'infinito** ($x$ cresce o decresce senza limite). Descriviamo il comportamento "in fondo" al grafico:

$$\lim_{x \to +\infty} f(x) = L \quad\text{se } f(x) \to L \text{ quando } x \text{ cresce illimitatamente,}$$

$$\lim_{x \to -\infty} f(x) = L \quad\text{se } f(x) \to L \text{ quando } x \text{ decresce illimitatamente.}$$

Qui il valore-limite $L$ è un numero reale finito; ciò che diventa infinito è la variabile $x$. Graficamente, la retta $y = L$ è un **asintoto orizzontale**.

**Limite infinito** ($f$ cresce o decresce senza limite vicino ad un punto finito $a$):

$$\lim_{x \to a} f(x) = +\infty \quad\text{se } f(x) \text{ supera ogni soglia quando } x \to a.$$

Qui, al contrario, $a$ è finito ma è il *valore* della funzione a divergere. In questo caso il limite **non è un numero reale**: la scrittura "$=+\infty$" è un'abbreviazione per descrivere il comportamento (la funzione cresce senza controllo), non l'affermazione che esista un limite finito. Graficamente, la retta $x = a$ è un **asintoto verticale**.

Una lettura unificata è possibile e molto elegante: introducendo l'idea di "intorno di $+\infty$" come una semiretta $(M, +\infty)$, tutti questi casi (limite finito in un punto, limite finito all'infinito, limite infinito, ecc.) diventano istanze di **un'unica** definizione: *per ogni intorno del valore-limite, esiste un intorno del punto tale che la funzione mandi il secondo dentro il primo*. È l'impostazione degli appunti del corso, e la incontreremo in forma rigorosa nella lezione 2. Vale la pena tenerla a mente fin d'ora perché rivela che "tendere a $2$", "tendere a $+\infty$" e "$x \to -\infty$" sono la stessa idea vista con lenti diverse.

### 3.7 Limite e valore della funzione: le tre possibilità

Torniamo alla distinzione fondamentale della Sezione 1 e cataloghiamola. Sia $a$ un punto di accumulazione del dominio. Possono presentarsi tre scenari:

| Scenario | $f(a)$ | $\lim_{x\to a} f(x)$ | Interpretazione |
|---|---|---|---|
| 1 | non definito | esiste, finito $=L$ | discontinuità **eliminabile**: il limite "riempirebbe il buco" |
| 2 | definito | esiste $=L$, ma $L \neq f(a)$ | il limite esiste ma **non coincide** col valore nel punto |
| 3 | definito | esiste $=f(a)$ | **continuità** in $a$: il caso ideale (lezione 4) |

Il terzo scenario — limite uguale al valore — è così importante da avere un nome tutto suo: **continuità**. È il caso in cui il calcolo del limite si riduce alla semplice sostituzione $x = a$. Ma è un caso *particolare*, non la regola: confondere sistematicamente i primi due scenari col terzo è l'errore concettuale più diffuso (Sezione 8).

---

## 4. Dimostrazioni

In questa sezione dimostriamo tre risultati usando solo la definizione intuitiva e il ragionamento diretto. Le dimostrazioni pienamente formali (con $\varepsilon$ e $\delta$) arriveranno nella lezione 2; qui ci concentriamo sulla logica, che è già completa e corretta.

### 4.1 Unicità del limite

**Enunciato.** Se $\lim_{x\to a} f(x) = L_1$ e $\lim_{x\to a} f(x) = L_2$, allora $L_1 = L_2$. In parole: **il limite, se esiste, è unico.**

**Dimostrazione (per assurdo).** Supponiamo, per assurdo, che i due limiti siano diversi, $L_1 \neq L_2$. Allora la loro distanza $d = \lvert L_1 - L_2 \rvert$ è un numero strettamente positivo. Immaginiamo due "bersagli" attorno a $L_1$ e $L_2$, ciascuno di raggio $d/3$: sono così stretti da **non sovrapporsi**, perché insieme coprono solo $2 \cdot \tfrac{d}{3} = \tfrac{2d}{3} < d$ della distanza $d$ che li separa.

Ora usiamo l'ipotesi. Poiché $f(x) \to L_1$, per $x$ abbastanza vicino ad $a$ (diciamo entro un raggio $r_1$) i valori $f(x)$ cadono nel bersaglio attorno a $L_1$. Poiché *anche* $f(x) \to L_2$, per $x$ abbastanza vicino ad $a$ (entro un raggio $r_2$) gli stessi valori cadono nel bersaglio attorno a $L_2$. Prendiamo allora $x$ nell'intorno bucato di raggio $r = \min(r_1, r_2)$: esiste, perché $a$ è di accumulazione, quindi c'è almeno un punto del dominio lì dentro. Per quel singolo $x$, il valore $f(x)$ dovrebbe stare **contemporaneamente** in entrambi i bersagli. Ma i bersagli sono disgiunti: è impossibile. Contraddizione.

L'assurdo nasce dall'aver supposto $L_1 \neq L_2$. Dunque $L_1 = L_2$. $\square$

Il valore di questa dimostrazione va oltre il risultato: mostra *perché* possiamo scrivere "**il** limite" con l'articolo determinativo, e usa per la prima volta la strategia — che ritroverai ovunque in analisi — di separare due punti con intorni disgiunti.

### 4.2 Limite bilatero tramite i due unilaterali

**Enunciato.** Sia $a$ di accumulazione da entrambi i lati. Allora $\lim_{x\to a} f(x) = L$ se e solo se $\lim_{x\to a^-} f(x) = L$ e $\lim_{x\to a^+} f(x) = L$.

**Dimostrazione.** Trattandosi di un "se e solo se", dimostriamo le due implicazioni separatamente.

*($\Rightarrow$) Se il bilatero vale $L$, allora entrambi gli unilaterali valgono $L$.* Per ipotesi, avvicinando $x$ ad $a$ **da entrambi i lati** i valori $f(x)$ si avvicinano a $L$. In particolare ciò accade quando ci limitiamo ai soli $x < a$ (è un sottoinsieme dei modi di avvicinarsi): dunque il limite sinistro esiste e vale $L$. Identicamente per i soli $x > a$: il limite destro vale $L$. Restringere l'insieme dei punti considerati non può cambiare il valore-limite, quindi entrambi gli unilaterali valgono $L$.

*($\Leftarrow$) Se entrambi gli unilaterali valgono $L$, allora il bilatero vale $L$.* Prendiamo un qualsiasi grado di vicinanza richiesto attorno a $L$. Poiché il limite sinistro vale $L$, esiste un raggio $r^-$ tale che tutti gli $x$ con $a - r^- < x < a$ danno $f(x)$ entro quella vicinanza. Poiché il limite destro vale $L$, esiste un raggio $r^+$ tale che tutti gli $x$ con $a < x < a + r^+$ fanno lo stesso. Scegliendo $r = \min(r^-, r^+)$, **ogni** $x$ nell'intorno bucato di raggio $r$ — sia a sinistra sia a destra — dà $f(x)$ entro la vicinanza richiesta. Questo è esattamente ciò che significa $\lim_{x\to a} f(x) = L$. $\square$

Il passaggio chiave, in entrambe le direzioni, è la scelta $r = \min(r^-, r^+)$: prendere il più piccolo dei due raggi garantisce che *entrambe* le condizioni valgano insieme. È la stessa mossa della dimostrazione precedente.

### 4.3 Un limite che non esiste: $\displaystyle\lim_{x\to 0}\sin\!\left(\tfrac{1}{x}\right)$

**Enunciato.** Il limite $\lim_{x\to 0} \sin\!\left(\tfrac{1}{x}\right)$ **non esiste** (né bilatero, né unilaterale).

**Dimostrazione (per esibizione di due successioni).** L'idea è mostrare che, avvicinandoci a $0$ lungo due "sentieri" diversi, la funzione tende a due valori diversi. Se il limite esistesse, ogni sentiero dovrebbe portare allo stesso numero; esibirne due discordi lo confuta.

Costruiamo il primo sentiero. Scegliamo i punti in cui l'argomento $\tfrac{1}{x}$ vale $\tfrac{\pi}{2} + 2k\pi$, cioè

$$x_k = \frac{1}{\frac{\pi}{2} + 2k\pi}, \qquad k = 1, 2, 3, \dots$$

Quando $k \to \infty$, il denominatore cresce, dunque $x_k \to 0^+$: ci stiamo davvero avvicinando a $0$. Ma in questi punti

$$\sin\!\left(\frac{1}{x_k}\right) = \sin\!\left(\frac{\pi}{2} + 2k\pi\right) = 1 \quad\text{per ogni } k.$$

Lungo questo sentiero la funzione vale costantemente $1$, quindi tende a $1$.

Costruiamo il secondo sentiero. Scegliamo i punti in cui l'argomento vale $-\tfrac{\pi}{2} + 2k\pi$:

$$x_k' = \frac{1}{-\frac{\pi}{2} + 2k\pi}, \qquad k = 1, 2, 3, \dots$$

Di nuovo $x_k' \to 0^+$, ma stavolta

$$\sin\!\left(\frac{1}{x_k'}\right) = \sin\!\left(-\frac{\pi}{2} + 2k\pi\right) = -1 \quad\text{per ogni } k.$$

Lungo questo secondo sentiero la funzione vale costantemente $-1$, quindi tende a $-1$.

Abbiamo due successioni di punti, entrambe convergenti a $0$ da destra, lungo le quali $f$ tende a valori **diversi** ($1$ e $-1$). Se il limite destro esistesse e valesse $L$, ogni successione che tende a $0^+$ dovrebbe portare $f$ verso lo stesso $L$; qui invece ne troviamo due discordi. Dunque $\lim_{x\to 0^+}\sin(1/x)$ non esiste, e a maggior ragione non esiste il bilatero. $\square$

Questo è il prototipo di **discontinuità essenziale** (o oscillante): la funzione non salta e non diverge, ma oscilla sempre più fitta tra $-1$ e $1$, senza mai decidersi. La tecnica delle "due successioni" per confutare un limite è tanto semplice quanto potente, e la riutilizzerai spesso.

---

## 5. Derivazioni

Mentre le dimostrazioni della sezione precedente stabiliscono *verità logiche*, qui costruiamo *strumenti di calcolo*: due procedimenti-tipo che spiegano da dove nascono le tecniche operative delle prossime lezioni.

### 5.1 Dalla tabella al $\delta = \varepsilon/2$: verifica di $\lim_{x\to 3}(2x+1)=7$

Vogliamo capire, passo dopo passo, come l'intuizione del "avvicinarsi" si trasformi in un controllo quantitativo. Prendiamo la funzione lineare $f(x) = 2x + 1$ e il punto $a = 3$.

**Passo 1 — evidenza numerica.** Compiliamo una tabella di valori attorno a $3$, da entrambi i lati:

| $x$ | $2.9$ | $2.99$ | $2.999$ | $\to$ | $3.001$ | $3.01$ | $3.1$ |
|---|---|---|---|---|---|---|---|
| $f(x)$ | $6.8$ | $6.98$ | $6.998$ | $\to$ | $7.002$ | $7.02$ | $7.2$ |

I valori si stringono attorno a $7$ da entrambi i lati. Di più: ogni volta che dimezziamo la distanza di $x$ da $3$, la distanza di $f(x)$ da $7$ si dimezza. Questo suggerisce un legame **quantitativo** preciso tra le due distanze.

**Passo 2 — il legame esatto tra le distanze.** Calcoliamo direttamente la distanza dell'output dal valore sospetto $7$:

$$\lvert f(x) - 7 \rvert = \lvert (2x+1) - 7 \rvert = \lvert 2x - 6 \rvert = 2\,\lvert x - 3 \rvert.$$

Questa uguaglianza è la chiave di tutto: la distanza dell'output da $7$ è **esattamente il doppio** della distanza dell'input da $3$. Non un'approssimazione: un'identità algebrica valida per ogni $x$.

**Passo 3 — la sfida rovesciata.** Immagina che qualcuno ti imponga una tolleranza sull'output: "voglio che $f(x)$ disti da $7$ meno di $\varepsilon$", dove $\varepsilon > 0$ è piccolo a piacere. Dalla relazione del Passo 2, chiedere $\lvert f(x) - 7 \rvert < \varepsilon$ equivale a chiedere $2\lvert x - 3\rvert < \varepsilon$, cioè

$$\lvert x - 3 \rvert < \frac{\varepsilon}{2}.$$

Ecco la risposta: se scelgo l'input entro una distanza $\delta = \tfrac{\varepsilon}{2}$ da $3$, l'output cade automaticamente entro $\varepsilon$ da $7$. Riassumendo in una riga:

$$0 < \lvert x - 3 \rvert < \frac{\varepsilon}{2} \;\Longrightarrow\; \lvert (2x+1) - 7 \rvert = 2\lvert x-3\rvert < 2\cdot\frac{\varepsilon}{2} = \varepsilon.$$

Poiché questo funziona **per ogni** tolleranza $\varepsilon$ scelta dall'avversario, il valore verso cui tende $f$ è proprio $7$: $\lim_{x\to 3}(2x+1) = 7$.

Abbiamo appena *derivato* la struttura della definizione $\varepsilon$–$\delta$: la tolleranza $\varepsilon$ sull'output determina la precisione $\delta = \varepsilon/2$ richiesta sull'input. Il "gioco" input–output tra $\delta$ ed $\varepsilon$ è tutto qui, e sarà formalizzato nella lezione 2.

### 5.2 Regola operativa per i limiti razionali all'infinito

Deriviamo la tecnica standard per limiti del tipo $\lim_{x\to+\infty} \tfrac{P(x)}{Q(x)}$ con $P, Q$ polinomi. Prendiamo come guida

$$\lim_{x \to +\infty} \frac{3x^2 + 2x}{x^2 - 1}.$$

La sostituzione diretta darebbe $\tfrac{\infty}{\infty}$, una forma **indeterminata**: non possiamo concludere nulla senza lavorarci. L'idea derivante è che, per $x$ grande, ciò che conta sono solo i **termini di grado massimo** — gli altri diventano trascurabili. Rendiamolo rigoroso mettendo in evidenza la potenza massima presente, qui $x^2$, a numeratore e a denominatore:

$$\frac{3x^2 + 2x}{x^2 - 1} = \frac{x^2\left(3 + \frac{2}{x}\right)}{x^2\left(1 - \frac{1}{x^2}\right)} = \frac{3 + \frac{2}{x}}{1 - \frac{1}{x^2}}.$$

Il fattore $x^2$ si semplifica (lecito, perché per $x\to+\infty$ è $x\neq 0$). Ora osserviamo i singoli pezzi: quando $x \to +\infty$, i termini $\tfrac{2}{x}$ e $\tfrac{1}{x^2}$ tendono a $0$, perché un numero fisso diviso una quantità che esplode si schiaccia sullo zero. Quindi

$$\lim_{x \to +\infty} \frac{3 + \frac{2}{x}}{1 - \frac{1}{x^2}} = \frac{3 + 0}{1 - 0} = 3.$$

Il limite è $3$: la funzione ha asintoto orizzontale $y = 3$. Da questa derivazione si legge la **regola generale** per i razionali all'infinito, secondo il confronto tra il grado del numeratore $\deg P$ e quello del denominatore $\deg Q$:

- se $\deg P = \deg Q$, il limite è il **rapporto dei coefficienti direttori** (qui $3/1 = 3$);
- se $\deg P < \deg Q$, il limite è $0$ (vince il denominatore);
- se $\deg P > \deg Q$, il limite è $\pm\infty$ (vince il numeratore).

La regola non è una formula da memorizzare a scatola chiusa: è la conseguenza diretta del "mettere in evidenza il grado massimo", e sapere da dove viene ti permette di ricostruirla anche quando la dimentichi.

---

## 6. Esempi

Gli esempi procedono per difficoltà crescente: dal caso più diretto fino ad applicazioni concrete. Per ciascuno indichiamo la **strategia** prima del calcolo.

### Esempio 1 — Sostituzione diretta (il caso più semplice)

Calcolare $\lim_{x \to 2} (x^2 + 3x - 1)$.

*Strategia:* i polinomi sono funzioni continue ovunque (scenario 3 della tabella in §3.7), quindi il limite coincide col valore nel punto e si ottiene per sostituzione.

$$\lim_{x \to 2} (x^2 + 3x - 1) = 2^2 + 3\cdot 2 - 1 = 4 + 6 - 1 = 9.$$

*Commento:* qui limite e valore coincidono. Attenzione a non generalizzare: la sostituzione funziona **perché** la funzione è continua, non perché "si fa sempre così".

### Esempio 2 — Forma $0/0$ con fattorizzazione

Calcolare $\lim_{x \to 1} \dfrac{x^2 - 1}{x - 1}$.

*Strategia:* la sostituzione dà $\tfrac{0}{0}$, forma indeterminata. Si elimina il fattore che annulla il denominatore tramite fattorizzazione.

$$\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1 \quad (x \neq 1),$$

$$\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} (x+1) = 2.$$

*Commento:* la funzione ha un "buco" in $x = 1$ (non è definita lì), ma il limite esiste e vale $2$. È lo scenario 1: discontinuità eliminabile.

### Esempio 3 — Valore assoluto e limiti unilaterali

Calcolare $\lim_{x \to 0} \dfrac{\lvert x \rvert}{x}$.

*Strategia:* il valore assoluto cambia definizione a seconda del segno di $x$; si spezza il limite nei due lati.

- Per $x > 0$: $\lvert x \rvert = x$, quindi $\dfrac{\lvert x\rvert}{x} = 1$, e $\lim_{x\to 0^+} = 1$.
- Per $x < 0$: $\lvert x \rvert = -x$, quindi $\dfrac{\lvert x\rvert}{x} = -1$, e $\lim_{x\to 0^-} = -1$.

I due limiti unilaterali esistono ma sono diversi ($1 \neq -1$): per il teorema di §3.5, il **limite bilatero non esiste**.

*Commento:* un esempio in cui entrambi i pezzi sono semplicissimi, eppure il bilatero non c'è. È il motivo per cui non si può mai "dimenticare un lato".

### Esempio 4 — Limite razionale all'infinito

Calcolare $\lim_{x \to +\infty} \dfrac{3x^2 + 2x}{x^2 - 1}$.

*Strategia:* forma $\tfrac{\infty}{\infty}$; si divide per la potenza massima (§5.2).

$$= \lim_{x \to +\infty} \frac{3 + \frac{2}{x}}{1 - \frac{1}{x^2}} = \frac{3 + 0}{1 - 0} = 3.$$

*Commento:* stesso grado sopra e sotto $\Rightarrow$ rapporto dei coefficienti direttori. Asintoto orizzontale $y = 3$.

### Esempio 5 — Un limite che è già una derivata

Calcolare $\lim_{x \to 2} \dfrac{x^2 - 4}{x - 2}$ e riconoscerne il significato.

*Strategia:* forma $\tfrac{0}{0}$, si fattorizza; poi osserviamo la struttura.

$$\lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2}(x+2) = 4.$$

*Commento:* questo limite ha la forma $\lim_{x\to c}\tfrac{x^n - c^n}{x - c}$, che vale $n\,c^{n-1}$. Con $n = 2$, $c = 2$: $2\cdot 2^{1} = 4$. Non è una coincidenza: è **la definizione della derivata** di $x^2$ nel punto $2$. Il limite è il meccanismo che dà senso alla derivata — filo che riprenderemo nella lezione 6.

### Esempio 6 — Funzione a tratti nel punto di raccordo

Sia $f(x) = \begin{cases} x^2 & x < 2 \\ 3x - 2 & x \geq 2 \end{cases}$. Calcolare $\lim_{x\to 2} f(x)$ e discutere la continuità.

*Strategia:* nel punto di raccordo la funzione cambia regola; si usano i due rami per i due limiti unilaterali.

- Limite sinistro (ramo $x^2$): $\lim_{x\to 2^-} x^2 = 4$.
- Limite destro (ramo $3x-2$): $\lim_{x\to 2^+}(3x-2) = 4$.

I due coincidono, dunque $\lim_{x\to 2} f(x) = 4$. Inoltre $f(2) = 3\cdot 2 - 2 = 4 = \lim$: la funzione è anche **continua** in $2$ (scenario 3).

*Commento:* qui i due lati concordano — caso opposto all'Esempio 3. Il raccordo è "liscio" nel senso del valore.

### Esempio 7 — Discontinuità di salto

Sia $g(x) = \begin{cases} 1 & x < 0 \\ 3 & x \geq 0 \end{cases}$. Studiare il limite in $0$.

- $\lim_{x\to 0^-} g(x) = 1$, $\quad \lim_{x\to 0^+} g(x) = 3$.

Poiché $1 \neq 3$, il bilatero non esiste: la funzione **salta** da $1$ a $3$. Si parla di **discontinuità di salto** di ampiezza $\lvert 3 - 1\rvert = 2$.

*Commento:* a differenza dell'oscillazione ($\sin(1/x)$), qui ciascun limite unilaterale esiste; è la loro discordanza a impedire il bilatero.

### Esempio 8 — Applicazione economica: il costo marginale come limite

In microeconomia, il **costo marginale** misura di quanto aumenta il costo totale $C(q)$ producendo un'unità infinitesima aggiuntiva. Data la funzione di costo $C(q) = q^2 + 5q + 100$ (in migliaia di euro, per $q$ unità), il costo marginale al livello $q$ è

$$CM(q) = \lim_{h \to 0} \frac{C(q+h) - C(q)}{h}.$$

*Strategia:* è un limite $\tfrac{0}{0}$ nella variabile $h$; si sviluppa il numeratore e si semplifica.

$$C(q+h) - C(q) = \big[(q+h)^2 + 5(q+h) + 100\big] - \big[q^2 + 5q + 100\big] = 2qh + h^2 + 5h.$$

$$\frac{C(q+h)-C(q)}{h} = \frac{2qh + h^2 + 5h}{h} = 2q + h + 5 \quad (h\neq 0),$$

$$CM(q) = \lim_{h\to 0}(2q + h + 5) = 2q + 5.$$

*Commento:* al livello $q = 10$, il costo marginale è $2\cdot 10 + 5 = 25$ (migliaia di euro per unità). Senza il concetto di limite, l'analisi marginale — pilastro della teoria del produttore — non avrebbe fondamento: il rapporto $\tfrac{\Delta C}{\Delta q}$ resterebbe una media su intervalli finiti, mai un valore "puntuale". Questo esempio è, ancora una volta, una derivata mascherata.

---

## 7. Visualizzazioni e interattività

I grafici che seguono rendono visibile ciò che le tabelle di §3 suggeriscono numericamente. Ogni figura va "letta" con una domanda in mente: *dove sta andando la funzione, indipendentemente da cosa fa (o non fa) nel punto?*

### 7.1 Il buco che non conta — $\dfrac{x^2-1}{x-1}$ contro $x+1$

La funzione $\tfrac{x^2-1}{x-1}$ non è definita in $x=1$, eppure per ogni altro punto coincide con la retta $x+1$. Il grafico sottostante mostra la retta $x+1$: immagina un piccolo cerchietto vuoto sul punto $(1,2)$. La funzione originale è *questa retta con un solo punto forato*. Osserva che avvicinandoti a $x=1$ da entrambi i lati l'ordinata tende a $2$: quello è il limite, e non dipende dal buco.

```plot
{
  "fn": "x + 1",
  "domain": [-1, 3],
  "title": "y = x+1  (il valore forato in x=1 è y=2: lì sta il limite)"
}
```

### 7.2 Manipolabile: come cambia il limite di $\dfrac{x^a-1}{x-1}$ in $x=1$

Questo è il primo elemento davvero interattivo. La funzione $\dfrac{x^a-1}{x-1}$ ha in $x=1$ una forma $\tfrac{0}{0}$, e il suo limite vale esattamente $a$ (è la derivata di $x^a$ in $x=1$). Muovi lo slider e osserva la pendenza della curva vicino a $x=1$: al crescere di $a$ la curva "punta" verso un'ordinata più alta nel punto forato. Stai vedendo, in diretta, il limite cambiare al variare del parametro — cosa impossibile da cogliere in una figura statica.

```slider
{
  "fn": "(Math.pow(x, a) - 1) / (x - 1)",
  "pname": "a",
  "pmin": 1,
  "pmax": 5,
  "pstep": 1,
  "pdefault": 2,
  "plabel": "Esponente a (limite in x=1 = a)",
  "domain": [0.2, 2.2],
  "title": "y = (x^a − 1)/(x − 1): vicino a x=1 il valore tende ad a"
}
```

### 7.3 Quando i due lati non concordano — $\dfrac{|x|}{x}$

Qui il limite bilatero **non esiste**. Il grafico mostra una funzione che vale $-1$ a sinistra di $0$ e $+1$ a destra: c'è un salto netto. Nessun numero singolo può essere "il valore verso cui tende" da entrambe le parti, perché i due lati puntano a due ordinate diverse. È la traduzione visiva del teorema di §3.5.

```plot
{
  "fn": "Math.abs(x)/x",
  "domain": [-3, 3],
  "title": "y = |x|/x: salto da −1 a +1, limite bilatero assente in x=0"
}
```

### 7.4 L'orizzonte della funzione — asintoto orizzontale $y=3$

L'ultima figura mostra $\tfrac{3x^2+2x}{x^2-1}$ su un intervallo ampio di $x$. Segui la curva verso destra: si appiattisce e si incolla alla retta $y=3$ senza mai staccarsene. Quella retta è l'asintoto orizzontale, la forma geometrica del limite all'infinito calcolato in §5.2.

```plot
{
  "fn": "(3*x*x + 2*x)/(x*x - 1)",
  "fn2": "3",
  "domain": [2, 30],
  "title": "y = (3x²+2x)/(x²−1) tende a y=3 per x→+∞"
}
```

---

## 8. Errori comuni

### ❌ Confondere il limite con il valore della funzione nel punto

**Esempio sbagliato:** "$\lim_{x\to 1}\tfrac{x^2-1}{x-1}$ non esiste perché la funzione non è definita in $x=1$."

**Perché è sbagliato:** il limite descrive il comportamento *vicino* al punto, non *nel* punto. Che $f(1)$ esista o meno è del tutto irrilevante: la definizione richiede $0 < |x - c|$, cioè esclude esplicitamente $x = c$.

**Versione corretta:** il limite vale $2$; la funzione ha un buco in $x=1$ ma vi tende regolarmente da entrambi i lati.

### ❌ Credere che "sostituire" sia sempre lecito

**Esempio sbagliato:** "$\lim_{x\to 0}\tfrac{\sin x}{x} = \tfrac{\sin 0}{0} = \tfrac{0}{0}$, quindi non esiste."

**Perché è sbagliato:** la sostituzione diretta funziona *solo* per le funzioni continue nel punto. Di fronte a una forma indeterminata $\tfrac{0}{0}$ non hai finito: hai solo scoperto che il metodo banale non basta e serve un'altra tecnica.

**Versione corretta:** $\tfrac{0}{0}$ è un segnale di "lavora ancora" (fattorizza, razionalizza, usa limiti notevoli), non una conclusione. Quel limite vale $1$.

### ❌ Dedurre l'esistenza del bilatero da un solo lato

**Esempio sbagliato:** "Per $x\to 0^+$ la funzione $\tfrac{|x|}{x}$ vale $1$, quindi $\lim_{x\to 0}\tfrac{|x|}{x}=1$."

**Perché è sbagliato:** il limite bilatero esiste **solo se** i due limiti unilaterali esistono *e coincidono* (teorema §3.5). Un lato solo non decide.

**Versione corretta:** il limite sinistro è $-1$, il destro è $+1$; essendo diversi, il bilatero non esiste.

### ❌ Trattare $\infty$ come un numero

**Esempio sbagliato:** "$\lim_{x\to +\infty}(x - x) = \infty - \infty = 0$."

**Perché è sbagliato:** $\infty$ non è un numero e non obbedisce alle regole aritmetiche ordinarie; $\infty - \infty$ è una forma indeterminata, non zero. (Nel caso banale $x-x=0$ per ogni $x$, ma il ragionamento "$\infty-\infty=0$" è falso in generale: si pensi a $\lim(x^2 - x) = +\infty$.)

**Versione corretta:** riscrivi l'espressione fino a eliminare l'indeterminazione, poi valuta.

### ❌ Pensare che "il limite esiste" significhi "il limite è finito"

**Esempio sbagliato:** "$\lim_{x\to 0}\tfrac{1}{x^2}$ non esiste."

**Perché è sbagliato:** occorre distinguere due cose diverse. Come limite *finito* non esiste, è vero; ma la funzione ha un comportamento perfettamente determinato, $+\infty$, da entrambi i lati. Si scrive $\lim_{x\to 0}\tfrac{1}{x^2} = +\infty$ e si parla di limite infinito.

**Versione corretta:** precisa sempre il contesto: "non esiste finito, ma diverge a $+\infty$". Ignorare la distinzione fa perdere informazione sul grafico (asintoto verticale).

### ❌ Chiedere il limite in un punto isolato

**Esempio sbagliato:** data $f$ definita solo su $\{0\}\cup[1,2]$, "calcolo $\lim_{x\to 0} f(x)$".

**Perché è sbagliato:** perché il limite in $c$ abbia senso, $c$ deve essere un **punto di accumulazione** del dominio (§3.3): devono esistere punti del dominio arbitrariamente vicini a $c$ ma diversi da $c$. Un punto isolato non lo è, quindi la domanda è mal posta.

**Versione corretta:** verifica sempre che il punto sia di accumulazione del dominio prima di scrivere un limite. È la cautela che gli appunti di Villanacci mettono in primo piano.

---

## 9. Collegamenti e applicazioni

### Nella biblioteca

- **Definizione $\varepsilon$–$\delta$ del limite** (Analisi, lezione 2, `analisi-02-limite-epsilon-delta`): la formalizzazione rigorosa del "gioco" tolleranza–precisione derivato in §5.1. Questa lezione ne è la preparazione intuitiva.
- **Calcolo dei limiti** (Analisi, lezione 3, `analisi-03-calcolo-limiti`): algebra dei limiti, forme indeterminate, limiti notevoli — gli strumenti sistematici per calcolare ciò che qui abbiamo affrontato caso per caso.
- **Continuità** (Analisi, lezione 4, `analisi-04-continuita`): una funzione è continua in $c$ quando $\lim_{x\to c} f(x) = f(c)$; il limite è il mattone con cui si costruisce la definizione di continuità (scenario 3 di §3.7).
- **Derivata — definizione** (Analisi, lezione 6, `analisi-06-derivata-definizione`): la derivata *è* un limite, quello del rapporto incrementale. Gli Esempi 5 e 8 di questa lezione erano già derivate mascherate.

### Nelle discipline

- **Economia — analisi marginale.** Costo marginale, ricavo marginale e utilità marginale sono tutti limiti di rapporti incrementali: $CM(q)=\lim_{h\to 0}\tfrac{C(q+h)-C(q)}{h}$. La teoria del produttore e del consumatore poggia interamente su questo passaggio dal discreto al "puntuale" (Esempio 8).
- **Fisica — velocità istantanea.** La velocità in un istante è $v(t)=\lim_{h\to 0}\tfrac{s(t+h)-s(t)}{h}$: senza limite avremmo solo velocità medie su intervalli, mai la lettura del tachimetro in un dato istante.
- **Statistica e probabilità — convergenza.** La legge dei grandi numeri e la definizione di valore atteso di variabili continue si fondano su limiti (di successioni e di somme di Riemann). L'idea di "avvicinarsi indefinitamente a un valore" è la stessa qui introdotta.
- **Informatica e ML — discesa del gradiente.** L'ottimizzazione tramite gradiente usa derivate, cioè limiti di rapporti incrementali, per decidere la direzione di aggiornamento dei parametri. Il tasso di apprendimento controlla quanto ci si muove lungo quella pendenza limite.

---

## 10. Riepilogo

| Concetto | Definizione / Formula | Note |
|---|---|---|
| Limite (idea) | $\lim_{x\to c} f(x)=L$: $f(x)$ si avvicina a $L$ quanto si vuole se $x$ è abbastanza vicino a $c$ | Riguarda il comportamento *vicino* a $c$, non in $c$ |
| Punto di accumulazione | $c$ tale che ogni suo intorno contiene punti del dominio diversi da $c$ | Precondizione perché il limite abbia senso (Villanacci) |
| Limite sinistro / destro | $\lim_{x\to c^-} f$, $\lim_{x\to c^+} f$ | Comportamento da un solo lato |
| Esistenza del bilatero | $\lim_{x\to c} f = L \iff \lim_{x\to c^-} f = \lim_{x\to c^+} f = L$ | I due lati devono esistere e coincidere |
| Forma indeterminata | $\tfrac{0}{0}$, $\tfrac{\infty}{\infty}$, $\infty-\infty$, ecc. | Segnale di "lavora ancora", non una conclusione |
| Limite infinito | $\lim_{x\to c} f = +\infty$ | Non esiste finito, ma diverge; asintoto verticale |
| Limite all'infinito | $\lim_{x\to \pm\infty} f = L$ | Asintoto orizzontale $y=L$ |
| Razionali all'infinito | confronto $\deg P$ vs $\deg Q$ | $=$: rapporto coeff. direttori; $<$: 0; $>$: $\pm\infty$ |

**Punti chiave da ricordare**

- Il limite descrive una *tendenza*, non un valore raggiunto: $f(c)$ può non esistere.
- Il bilatero esiste solo se i due unilaterali esistono e concordano.
- Una forma indeterminata non è un risultato: obbliga a una tecnica ulteriore.
- "Limite infinito" e "limite che non esiste" non sono sinonimi.
- Ogni derivata è un limite: è il ponte verso il calcolo differenziale.

---

## 11. Esercizi

### Esercizio 1

Calcola $\lim_{x\to 3}(x^2 - 4x + 1)$.

<details>
<summary>Soluzione</summary>

Il polinomio è continuo ovunque, quindi si sostituisce: $3^2 - 4\cdot 3 + 1 = 9 - 12 + 1 = -2$.

$$\lim_{x\to 3}(x^2 - 4x + 1) = -2.$$

</details>

### Esercizio 2

Calcola $\lim_{x\to 2}\dfrac{x^2 - 4}{x - 2}$.

<details>
<summary>Soluzione</summary>

Forma $\tfrac{0}{0}$. Si fattorizza: $\tfrac{(x-2)(x+2)}{x-2}=x+2$ per $x\neq 2$.

$$\lim_{x\to 2}\frac{x^2-4}{x-2}=\lim_{x\to 2}(x+2)=4.$$

</details>

### Esercizio 3

Calcola $\lim_{x\to 0^-}\dfrac{x}{|x|}$ e $\lim_{x\to 0^+}\dfrac{x}{|x|}$. Il limite bilatero esiste?

<details>
<summary>Soluzione</summary>

Per $x<0$: $|x|=-x$, quindi $\tfrac{x}{|x|}=\tfrac{x}{-x}=-1$, e $\lim_{x\to 0^-}=-1$.
Per $x>0$: $|x|=x$, quindi $\tfrac{x}{|x|}=1$, e $\lim_{x\to 0^+}=1$.

I due limiti unilaterali sono diversi ($-1\neq 1$): per il teorema di §3.5 il **bilatero non esiste**.

</details>

### Esercizio 4

Calcola $\lim_{x\to +\infty}\dfrac{5x^3 - x}{2x^3 + 7}$.

<details>
<summary>Soluzione</summary>

Stesso grado ($3$) sopra e sotto: si divide per $x^3$.

$$\lim_{x\to +\infty}\frac{5 - \frac{1}{x^2}}{2 + \frac{7}{x^3}}=\frac{5-0}{2+0}=\frac{5}{2}.$$

Asintoto orizzontale $y=\tfrac{5}{2}$.

</details>

### Esercizio 5

Calcola $\lim_{x\to +\infty}\dfrac{2x + 1}{x^2 - 3}$.

<details>
<summary>Soluzione</summary>

Grado del numeratore ($1$) minore di quello del denominatore ($2$): vince il denominatore.

$$\lim_{x\to +\infty}\frac{2x+1}{x^2-3}=0.$$

Verifica dividendo per $x^2$: $\tfrac{\frac{2}{x}+\frac{1}{x^2}}{1-\frac{3}{x^2}}\to\tfrac{0}{1}=0$.

</details>

### Esercizio 6

Sia $f(x)=\begin{cases} x+1 & x<1 \\ 4-x & x\geq 1\end{cases}$. Calcola i due limiti unilaterali in $x=1$ e stabilisci se il bilatero esiste. La funzione è continua in $1$?

<details>
<summary>Soluzione</summary>

Limite sinistro (ramo $x+1$): $\lim_{x\to 1^-}(x+1)=2$.
Limite destro (ramo $4-x$): $\lim_{x\to 1^+}(4-x)=3$.

I due lati differiscono ($2\neq 3$): il bilatero **non esiste**, e di conseguenza $f$ **non è continua** in $1$ (discontinuità di salto, ampiezza $1$).

</details>

### Esercizio 7

Studia $\lim_{x\to 0}\dfrac{1}{x^2}$ e $\lim_{x\to 0}\dfrac{1}{x}$, distinguendo i comportamenti unilaterali.

<details>
<summary>Soluzione</summary>

Per $\tfrac{1}{x^2}$: il denominatore è positivo da entrambi i lati e tende a $0^+$, quindi la funzione cresce senza limite da entrambe le parti:

$$\lim_{x\to 0}\frac{1}{x^2}=+\infty.$$

Per $\tfrac{1}{x}$: da destra $\lim_{x\to 0^+}\tfrac{1}{x}=+\infty$, da sinistra $\lim_{x\to 0^-}\tfrac{1}{x}=-\infty$. I due lati divergono in direzioni opposte: il limite (nemmeno infinito) non esiste in senso bilatero, sebbene ciascun lato abbia comportamento determinato. Entrambe le funzioni hanno asintoto verticale $x=0$.

</details>

### Esercizio 8

*(Applicativo)* La funzione di costo di un'impresa è $C(q)=3q^2 + 4q + 50$ (migliaia di euro). Ricava il costo marginale $CM(q)=\lim_{h\to 0}\tfrac{C(q+h)-C(q)}{h}$ e valutalo in $q=8$.

<details>
<summary>Soluzione</summary>

Sviluppo del numeratore:

$$C(q+h)-C(q)=\big[3(q+h)^2+4(q+h)+50\big]-\big[3q^2+4q+50\big]=6qh+3h^2+4h.$$

Divido per $h$ (con $h\neq 0$) e passo al limite:

$$\frac{C(q+h)-C(q)}{h}=6q+3h+4 \;\longrightarrow\; CM(q)=6q+4.$$

In $q=8$: $CM(8)=6\cdot 8 + 4 = 52$ (migliaia di euro per unità).

</details>

---

## 12. Fonti

- **OpenStax, Calculus Volume 1** (ruolo: primaria) — sezioni usate: Cap. 2.1–2.2
  Note: fornisce l'impianto intuitivo, le tabelle di valori, la stima del limite dal grafico, la trattazione dei limiti unilaterali e infiniti e degli asintoti. Ordine espositivo e notazione $\lim_{x\to c} f(x)=L$ seguiti come riferimento principale per l'intuizione.

- **A. Villanacci, Notes for Mathematics 1** (ruolo: appunti-prof) — sezioni usate: Cap. 4 (intorni, punti di accumulazione), Cap. 6 (definizioni di limite), Cap. 8 (continuità)
  Note: priorità per il rigore e la notazione da esame. Da qui la centralità del **punto di accumulazione** come precondizione del limite (§3.3, §8), assente o implicita nella trattazione intuitiva di OpenStax.

- **A. Villanacci, Notes on Sequences** (ruolo: appunti-prof) — sezioni usate: Cap. 1 (successioni in $\mathbb{R}$)
  Note: la convergenza di successione come formalizzazione dell'idea di "avvicinarsi"; usata per la caratterizzazione sequenziale nella dimostrazione di non esistenza di $\lim_{x\to 0}\sin(1/x)$ (§4.3).

### Discrepanze tra fonti

C'è una differenza sostanziale, rilevante ai fini dell'apprendimento, nel punto di partenza delle due fonti principali. OpenStax introduce il limite assumendo, di fatto, che la funzione sia definita su un **intervallo** attorno al punto (eventualmente eccetto il punto stesso), e non nomina esplicitamente la nozione di punto di accumulazione. Villanacci parte invece da un dominio qualunque e richiede che il punto sia di **accumulazione** del dominio perché il limite sia definito. Questa non è una differenza di notazione: cambia *quali domande sono lecite*. Con l'impostazione di Villanacci si può parlare del limite in punti di frontiera di domini irregolari e si esclude correttamente il limite nei punti isolati (Errore §8), casi che l'impostazione a intervalli di OpenStax non copre. In questa lezione si adotta la definizione più generale di Villanacci, coerente con le convenzioni d'esame; l'impostazione di OpenStax resta valida come caso particolare quando il dominio è un intervallo.

