---
id: analisi-19-serie-taylor
titolo: "Serie di Taylor e di MacLaurin"
materia: analisi
argomento: "Successioni e serie"
modulo: "Serie di Taylor"
livello: universitario
slug: analisi-19-serie-taylor

# legacy
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: "Serie di Taylor e di MacLaurin"
title_en: "Taylor and Maclaurin series"
level: blue
order: 19
source_book: "A. Villanacci, Mathematics 1 (appunti); A. Villanacci, Sequences and Series in ℝ; OpenStax Calculus Vol. 1"
source_chapter: "Serie di Taylor e MacLaurin: condizione sul resto, sviluppi notevoli, funzioni analitiche e il controesempio e^(−1/x²)"

prerequisiti:
  - analisi-10-taylor
  - analisi-18-serie-potenze
  - analisi-17-serie-numeriche

collegamenti:
  - analisi-10-taylor
  - analisi-18-serie-potenze
  - analisi-17-serie-numeriche
  - analisi-03-calcolo-limiti

fonti_integrate:
  - id_fonte: villanacci-math1
    ruolo: primaria
    sezioni_coperte: "Formula di Taylor con resto di Lagrange (punto intermedio ξ), il passaggio dal polinomio alla serie come limite del resto, la condizione Rₙ→0"
    note: "appunti-prof: continuità di notazione e convenzioni con lez.10 (resto di Lagrange con ξ, dimostrato per iterazione del teorema di Cauchy). La trattazione della serie di Taylor come oggetto convergente ricostruita rigorosamente (opzione A del curriculum: OpenStax Vol.2 assente dal catalogo)"
  - id_fonte: villanacci-successioni
    ruolo: secondaria
    sezioni_coperte: "Il resto Rₙ(x) come successione in n e la sua convergenza a zero; convergenza assoluta e stime; nozione di serie di potenze da lez.18"
    note: "il ponte 'serie di Taylor = serie di potenze con cₙ=f⁽ⁿ⁾(x₀)/n!' e il controllo della convergenza"
  - id_fonte: openstax-calculus-1
    ruolo: secondaria
    sezioni_coperte: "Intuizione, catalogo degli sviluppi notevoli (eˣ, sin, cos, ln(1+x), serie binomiale), applicazioni al calcolo di limiti e approssimazioni"
    note: "struttura espositiva ed esempi; il controesempio e^(−1/x²) di funzione liscia non analitica"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

In [lez.10](/analisi/calcolo-differenziale-una-variabile/10-taylor) abbiamo imparato a *approssimare* una funzione vicino a un punto con un polinomio — il polinomio di Taylor $T_n$ — e a misurare l'errore con il resto. Restava però una domanda sospesa: e se non ci accontentassimo di approssimare, ma pretendessimo di rappresentare la funzione **esattamente**? Il polinomio di Taylor è finito; ha un errore residuo $R_n(x)$ che, per quanto piccolo, non è mai zero. L'idea di questo capitolo — il traguardo dell'intero modulo — è lasciare il grado crescere all'infinito e chiedere: *quando la successione dei polinomi di Taylor converge esattamente alla funzione?* Quando succede, scriviamo un segno di uguale, non un'approssimazione: $f(x)=\sum_{n\ge0}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$. La funzione *è* la sua serie.

Il collegamento con [lez.18](/analisi/successioni-e-serie/18-serie-potenze) è diretto e chiude il cerchio del modulo. Una serie di Taylor **è** una serie di potenze: quella particolare serie di potenze i cui coefficienti $c_n$ non sono numeri qualunque, ma le derivate della funzione nel centro, $c_n=\frac{f^{(n)}(x_0)}{n!}$. Tutto l'apparato di lez.18 — raggio di convergenza, derivazione e integrazione termine a termine — si applica *pari pari*. Ma qui c'è una domanda nuova e più sottile, che lez.18 non poneva. In lez.18 partivamo dai coefficienti e chiedevamo *dove* la serie converge; ora partiamo da una funzione, ne costruiamo la serie, e chiediamo se la serie converge *proprio a quella funzione*. Sono due domande diverse, e — sorprendentemente — la seconda può avere risposta negativa anche quando la prima è positiva: esistono funzioni infinitamente derivabili la cui serie di Taylor converge, ma a una funzione *sbagliata*.

Il cuore concettuale, quindi, si sposta dal polinomio al **resto**. Il ponte è già in nostro possesso, e viene da lez.10: $f(x)=T_n(x)+R_n(x)$. Far tendere $n\to\infty$ significa studiare *la successione dei resti* $R_n(x)$: la serie di Taylor converge a $f$ nel punto $x$ **se e solo se** $R_n(x)\to0$. Ecco perché il resto di Lagrange di lez.10 — che ci sembrava un dettaglio tecnico per stimare errori — diventa qui lo strumento decisivo: è la lente attraverso cui vediamo se la coda del polinomio svanisce. E quando svanisce per ogni $x$ di un intervallo, la funzione si dice **analitica** lì. Il capitolo culmina con un controesempio celebre — la funzione $e^{-1/x^2}$, liscia come il vetro ma *non* analitica — che mostra quanto la proprietà «essere uguale alla propria serie di Taylor» sia più forte, e più preziosa, del semplice «essere derivabile infinite volte». Arco del modulo, completato: *una serie numerica somma costanti; una serie di potenze somma monomi; una funzione analitica è una serie di potenze travestita — ed è la sua stessa serie di Taylor.*


## 2. Teoria

### 2.1 Dal polinomio alla serie

Sia $f$ infinitamente derivabile in un intorno del centro $x_0$. Ricordiamo da [lez.10](/analisi/calcolo-differenziale-una-variabile/10-taylor) il polinomio di Taylor di grado $n$:
$$T_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k.$$
La **serie di Taylor** di $f$ centrata in $x_0$ è la serie di potenze ottenuta lasciando $n\to\infty$:
$$\sum_{n=0}^{\infty}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.$$
Nel caso particolare $x_0=0$ prende il nome di **serie di MacLaurin**.

*Lettura e significato dei simboli.* Il coefficiente $n$-esimo è $c_n=\frac{f^{(n)}(x_0)}{n!}$: la derivata $n$-esima di $f$ nel centro, «normalizzata» dividendo per $n!$. Il fattoriale non è decorativo — compensa esattamente il fatto che, derivando $n$ volte il monomio $(x-x_0)^n$, si produce proprio $n!$; senza quel denominatore i coefficienti non ricostruirebbero le derivate corrette. Questa è la stessa struttura di [lez.18](/analisi/successioni-e-serie/18-serie-potenze), §3.2: se una funzione *è* somma di una serie di potenze, allora i suoi coefficienti *devono* essere $f^{(n)}(x_0)/n!$. La serie di Taylor è dunque l'*unica candidata* possibile a rappresentare $f$ come serie di potenze.

*Attenzione (il nodo del capitolo).* «Candidata» è la parola giusta. Costruire la serie è puramente meccanico — basta saper derivare — e produce sempre *qualcosa*. Ma non è affatto garantito che quel qualcosa (a) converga, né (b) che, convergendo, converga proprio a $f$. La verifica di (b) è il contenuto di §2.2.

*Micro-esempio.* Per $f(x)=e^x$ in $x_0=0$: ogni derivata è $e^x$, che in $0$ vale $1$, quindi $c_n=\frac{1}{n!}$ e la serie di MacLaurin è $\sum_{n\ge0}\frac{x^n}{n!}$. Da [lez.18](/analisi/successioni-e-serie/18-serie-potenze) sappiamo già che ha raggio $R=+\infty$: converge ovunque. Che converga *proprio a $e^x$* lo dimostriamo in §3.1.

### 2.2 La condizione sul resto: quando la serie converge a $f$

Ecco il criterio che governa tutto. Da [lez.10](/analisi/calcolo-differenziale-una-variabile/10-taylor), per ogni $n$ vale la decomposizione esatta
$$f(x)=T_n(x)+R_n(x),$$
dove $R_n(x)$ è il resto. Ma $T_n(x)$ è, per definizione, la $n$-esima **somma parziale** della serie di Taylor. Dire che la serie converge a $f$ nel punto $x$ significa dire che $T_n(x)\to f(x)$, cioè — sottraendo — che $R_n(x)\to0$.

> **Teorema (condizione sul resto).** La serie di Taylor di $f$ centrata in $x_0$ converge a $f(x)$ nel punto $x$ **se e solo se** il resto tende a zero:
> $$\lim_{n\to\infty}R_n(x)=0.$$

*Perché è così.* Non è un teorema profondo, ma un cambio di prospettiva: la convergenza della *serie* (un oggetto con infiniti termini) è tradotta nella convergenza a zero di una *successione*, quella dei resti $\big(R_n(x)\big)_n$ — esattamente il tipo di oggetto che sappiamo maneggiare da [lez.16](/analisi/successioni-e-serie/16-successioni). Il resto è il ponte tra il polinomio di lez.10 e la serie di questo capitolo.

*Come si usa in pratica.* Si prende il **resto di Lagrange** di [lez.10](/analisi/calcolo-differenziale-una-variabile/10-taylor),
$$R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1},\qquad \xi\ \text{tra}\ x_0\ \text{e}\ x,$$
e si cerca di **maggiorarne il valore assoluto** con qualcosa che tende a zero. Il fattore chiave è $\frac{(x-x_0)^{n+1}}{(n+1)!}$: da [lez.16](/analisi/successioni-e-serie/16-successioni) sappiamo che il fattoriale *domina* qualunque potenza (gerarchia di crescita $n!\gg a^n$), quindi questo rapporto tende a zero per ogni $x$ fissato. Se in più le derivate $f^{(n+1)}(\xi)$ restano limitate — o non crescono troppo in fretta — allora $R_n(x)\to0$ e la serie rappresenta $f$. È esattamente ciò che accade per $e^x$, $\sin$, $\cos$ (§3.1).

```checkpoint
[domanda] Una funzione $f$ ha serie di Taylor $\sum c_n x^n$ con raggio di convergenza $R=+\infty$. Segue che $f(x)=\sum c_n x^n$ per ogni $x$?
[risposta] **No.** Che la serie *converga* (il raggio è infinito) è la domanda di [lez.18](/analisi/successioni-e-serie/18-serie-potenze); che converga *proprio a $f$* è una domanda distinta, decisa dalla condizione $R_n(x)\to0$. Le due possono divergere: il controesempio $e^{-1/x^2}$ (§2.4, §3.2) ha serie di MacLaurin identicamente nulla — che converge perfettamente, a $0$ — mentre la funzione non è nulla. Convergenza della serie ≠ rappresentazione della funzione.
```

### 2.3 Il catalogo degli sviluppi notevoli

Quando la condizione sul resto è soddisfatta su tutto un intervallo, otteniamo le rappresentazioni fondamentali. Le seguenti valgono con centro $0$ (MacLaurin); accanto, l'intervallo di validità.

$$e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots\qquad (\forall x\in\mathbb{R})$$
$$\sin x=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}x^{2n+1}=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots\qquad (\forall x\in\mathbb{R})$$
$$\cos x=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n)!}x^{2n}=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots\qquad (\forall x\in\mathbb{R})$$
$$\ln(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}}{n}x^{n}=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots\qquad (-1<x\le1)$$
$$\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n\qquad (-1<x<1)$$
$$(1+x)^{\alpha}=\sum_{n=0}^{\infty}\binom{\alpha}{n}x^n,\quad \binom{\alpha}{n}=\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}\qquad (-1<x<1)$$

*Osservazioni strutturali.* Le prime tre hanno $R=+\infty$: valgono su tutta la retta, perché il fattoriale al denominatore soffoca qualunque crescita. Le ultime tre hanno $R=1$: sono «figlie» del seme geometrico $\frac{1}{1-x}$ (lez.18, §2.6) e ne ereditano il raggio — $\ln(1+x)$ per integrazione, $(1+x)^\alpha$ come generalizzazione del binomio di Newton a esponenti non interi. La **serie binomiale** merita una nota: quando $\alpha$ è un intero positivo, i coefficienti $\binom{\alpha}{n}$ si annullano da $n=\alpha+1$ in poi e la serie *si tronca* nel polinomio di Newton; per $\alpha$ non intero resta infinita, e recupera radici e reciproci (es. $\sqrt{1+x}$ con $\alpha=\tfrac12$).

*Perché tenerle a mente.* Questi sei sviluppi sono la «tavola periodica» dell'analisi applicata: la stragrande maggioranza dei calcoli di limiti, delle approssimazioni numeriche e delle linearizzazioni si riconduce a comporli, derivarli, integrarli o sostituirvi dentro un'espressione (tutte operazioni lecite dentro il raggio, per lez.18).

*Micro-esempio (comporre gli sviluppi).* Per $\cos x$ basta derivare la serie di $\sin x$ termine a termine (lez.18, §2.5): $\frac{d}{dx}\big(x-\frac{x^3}{6}+\cdots\big)=1-\frac{x^2}{2}+\cdots$, che è proprio $\cos x$. Un solo sviluppo genera l'altro senza ricalcolare derivate.

### 2.4 Il controesempio: liscia ma non analitica

Una funzione si dice **analitica** in $x_0$ se coincide con la propria serie di Taylor in un intorno di $x_0$. La tentazione è credere che «infinitamente derivabile» ($C^\infty$) e «analitica» siano la stessa cosa. Non lo sono, e il testimone è
$$g(x)=\begin{cases}e^{-1/x^2} & x\neq0\\ 0 & x=0.\end{cases}$$
Questa funzione è $C^\infty$ su tutta la retta — è liscia come il vetro anche in $0$ — eppure **tutte** le sue derivate in $0$ sono nulle: $g^{(n)}(0)=0$ per ogni $n$ (dimostrato in §3.2). Di conseguenza la sua serie di MacLaurin è $\sum \frac{0}{n!}x^n=0$: la serie converge magnificamente, a $0$, per ogni $x$. Ma $g(x)\neq0$ per $x\neq0$: la serie *non rappresenta la funzione* in nessun intorno dell'origine, tranne che nel solo punto $0$.

*Che cosa insegna.* Le derivate in un punto sono un'informazione *puramente locale*, e possono essere «cieche» a ciò che la funzione fa lontano da lì. $g$ si stacca da zero così lentamente (più lentamente di ogni potenza $x^n$) che nessuna derivata in $0$ se ne accorge. L'analiticità è dunque una proprietà **molto più forte** della liscezza: richiede che l'informazione locale (le derivate nel centro) determini davvero la funzione in tutto un intorno. Le funzioni elementari ($e^x$, $\sin$, $\cos$, polinomi, razionali dove definite) sono analitiche; $g$ è il contrappunto che spiega perché il teorema di §2.2 non si può dare per scontato.

```checkpoint
[domanda] Perché la funzione $g(x)=e^{-1/x^2}$ (con $g(0)=0$) mostra che «$C^\infty$» non implica «analitica»?
[risposta] Perché $g$ è derivabile infinite volte ($C^\infty$) ma ha $g^{(n)}(0)=0$ per ogni $n$: la sua serie di Taylor in $0$ è identicamente nulla e quindi converge a $0\neq g(x)$ per $x\neq0$. La serie esiste e converge, ma non ricostruisce $g$ in alcun intorno dell'origine. Essere analitica richiede *anche* $R_n(x)\to0$, che qui fallisce: il resto $R_n(x)=g(x)-0=g(x)$ non tende a zero. La liscezza è locale; l'analiticità è una condizione più forte.
```

### 2.5 Applicazioni: limiti, approssimazioni, Eulero

Gli sviluppi in serie sono uno strumento di calcolo, non solo un fatto teorico. Tre usi ricorrenti:

**Calcolo di limiti.** Sostituendo una funzione con i primi termini della sua serie (con resto di Peano, [lez.03](/analisi/limiti-e-continuita/03-calcolo-limiti)/[lez.10](/analisi/calcolo-differenziale-una-variabile/10-taylor)) si risolvono forme indeterminate in modo meccanico. *Micro-esempio.* $\lim_{x\to0}\frac{\sin x-x}{x^3}$: poiché $\sin x=x-\frac{x^3}{6}+o(x^3)$, il numeratore è $-\frac{x^3}{6}+o(x^3)$, e il limite vale $-\frac16$. Nessun de l'Hôpital iterato.

**Approssimazioni numeriche certificate.** Troncando la serie a $n$ termini e stimando $R_n$ col resto di Lagrange si ottiene un valore *con barra d'errore*. È così che una calcolatrice valuta $e$, $\sin$, $\ln$: somma pochi termini e conosce l'errore massimo.

**Formula di Eulero (cenno).** Estendendo la serie di $e^x$ all'argomento immaginario $ix$ e riordinando in parti pari e dispari, si ottiene $e^{ix}=\cos x+i\sin x$ — l'identità che unifica esponenziale e trigonometria, alla base dell'analisi in campo complesso e dell'elaborazione dei segnali. **In economia**, gli sviluppi al primo/secondo ordine linearizzano funzioni di utilità e di rendimento attorno a un punto di riferimento (la base dell'analisi marginale) e giustificano l'approssimazione media–varianza quando i termini di ordine superiore sono trascurabili.


## 3. Dimostrazioni

### 3.1 La serie di $e^x$ converge a $e^x$ (per ogni $x$)

Costruire la serie di MacLaurin di $e^x$ è meccanico — ogni derivata di $e^x$ vale $1$ in $0$, dunque $c_n=1/n!$; il contenuto vero sta nel provare che la serie rappresenta davvero la funzione, cioè che $R_n(x)\to0$ per ogni $x$.

**Dimostrazione.** Fissiamo $x\in\mathbb{R}$. Poiché $\frac{d^{n+1}}{dt^{n+1}}e^t=e^t$, il resto di Lagrange di [lez.10](/analisi/calcolo-differenziale-una-variabile/10-taylor) è
$$R_n(x)=\frac{e^{\xi}}{(n+1)!}\,x^{n+1},\qquad \xi\ \text{compreso tra}\ 0\ \text{e}\ x.$$
Maggioriamo il valore assoluto. Poiché $\xi$ sta tra $0$ e $x$, si ha $e^{\xi}\le e^{|x|}$ (l'esponenziale è crescente e $\xi\le|x|$). Dunque
$$|R_n(x)|\le e^{|x|}\cdot\frac{|x|^{n+1}}{(n+1)!}.$$
Il fattore $e^{|x|}$ è una **costante** (non dipende da $n$). Il fattore $\frac{|x|^{n+1}}{(n+1)!}$ tende a $0$ per $n\to\infty$: è la gerarchia di crescita di [lez.16](/analisi/successioni-e-serie/16-successioni), *il fattoriale batte ogni potenza*. Quindi $|R_n(x)|\to0$, cioè $R_n(x)\to0$. Per la condizione sul resto (§2.2), la serie converge a $e^x$:
$$e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}\qquad\text{per ogni }x\in\mathbb{R}.\qquad\blacksquare$$

*Nota di metodo.* La stessa identica strategia funziona per $\sin$ e $\cos$: lì $|f^{(n+1)}(\xi)|\le1$ (sono seni o coseni, sempre limitati da $1$), quindi $|R_n(x)|\le\frac{|x|^{n+1}}{(n+1)!}\to0$ ancora più facilmente. È la limitatezza (o crescita controllata) delle derivate a garantire l'analiticità globale delle funzioni trigonometriche ed esponenziale.

### 3.2 Il controesempio: $g^{(n)}(0)=0$ per ogni $n$

Dimostriamo il fatto che rende $g(x)=e^{-1/x^2}$ (con $g(0)=0$) liscia ma non analitica.

**Dimostrazione.** Per $x\neq0$, derivando ripetutamente si vede per induzione che ogni derivata ha la forma
$$g^{(n)}(x)=P_n\!\left(\tfrac1x\right)e^{-1/x^2},$$
dove $P_n$ è un polinomio (nella variabile $1/x$). *Traccia del passo induttivo:* la derivata di $\frac1x$ è $-\frac1{x^2}$ e la derivata di $e^{-1/x^2}$ è $\frac{2}{x^3}e^{-1/x^2}$; entrambe reintroducono solo potenze di $1/x$ moltiplicate per lo stesso fattore esponenziale, quindi la forma «polinomio in $1/x$ per $e^{-1/x^2}$» si conserva derivando.

Resta da calcolare le derivate **nel punto $0$**, dove la formula sopra non si applica: usiamo la definizione di derivata come limite del rapporto incrementale. Il punto cruciale è il comportamento del fattore esponenziale: ponendo $t=1/x^2\to+\infty$ per $x\to0$,
$$\left|P_n\!\left(\tfrac1x\right)e^{-1/x^2}\right|=\big|P_n(\sqrt t\,)\big|\,e^{-t}\xrightarrow[t\to+\infty]{}0,$$
perché $e^{-t}$ (l'esponenziale che decade) **domina ogni polinomio** — di nuovo la gerarchia di crescita di [lez.16](/analisi/successioni-e-serie/16-successioni), qui nella forma $e^{t}\gg t^k$. Un'induzione su $n$ (dettaglio sotto) trasferisce questo annullamento alle derivate in $0$: partendo da $g(0)=0$, si mostra che se $g^{(n)}(0)=0$ allora anche $g^{(n+1)}(0)=0$, perché il rapporto incrementale $\frac{g^{(n)}(x)-0}{x}=\frac1x P_n(\tfrac1x)e^{-1/x^2}$ è ancora della forma «polinomio in $1/x$ per $e^{-1/x^2}$» e tende quindi a $0$. Conclusione: $g^{(n)}(0)=0$ per ogni $n$, la serie di MacLaurin di $g$ è identicamente nulla, e $g$ non è analitica in $0$. $\blacksquare$

<details class="dim-tecnica">
<summary>Dettaglio tecnico — l'induzione completa su $g^{(n)}(0)=0$</summary>

*Base.* $g(0)=0$ per definizione.

*Passo.* Supponiamo $g^{(n)}(0)=0$ (ipotesi induttiva). Per definizione di derivata,
$$g^{(n+1)}(0)=\lim_{x\to0}\frac{g^{(n)}(x)-g^{(n)}(0)}{x-0}=\lim_{x\to0}\frac{g^{(n)}(x)}{x}.$$
Per $x\neq0$ abbiamo $g^{(n)}(x)=P_n(\tfrac1x)e^{-1/x^2}$, quindi
$$\frac{g^{(n)}(x)}{x}=\frac1x\,P_n\!\left(\tfrac1x\right)e^{-1/x^2}=Q\!\left(\tfrac1x\right)e^{-1/x^2},$$
dove $Q(u)=u\,P_n(u)$ è ancora un polinomio. Ponendo $u=1/x$ (con $|u|\to+\infty$ quando $x\to0$) e $t=u^2$,
$$\left|Q\!\left(\tfrac1x\right)e^{-1/x^2}\right|=|Q(u)|\,e^{-u^2}\le C\,|u|^{d}\,e^{-u^2}\xrightarrow[|u|\to\infty]{}0,$$
essendo $d=\deg Q$ e $C$ una costante, perché $e^{-u^2}$ decade più in fretta di qualunque potenza $|u|^d$ (gerarchia esponenziale $\gg$ polinomiale, [lez.16](/analisi/successioni-e-serie/16-successioni)). Dunque il limite è $0$, cioè $g^{(n+1)}(0)=0$. Per induzione, $g^{(n)}(0)=0$ per ogni $n$.

*Perché è decisivo.* È esattamente il «decadimento più rapido di ogni potenza» a rendere $g$ cieca alle proprie derivate nell'origine: nessun polinomio riesce a «vedere» il fattore $e^{-1/x^2}$, che si appiattisce su zero troppo in fretta. È la stessa gerarchia di crescita che in §3.1 faceva convergere la serie di $e^x$ — qui, però, lavora *contro* la rappresentabilità.

</details>

### 3.3 Perché i coefficienti sono le derivate: coerenza con lez.18

Chiudiamo giustificando la formula $c_n=f^{(n)}(x_0)/n!$, che collega questo capitolo a [lez.18](/analisi/successioni-e-serie/18-serie-potenze). Se $f(x)=\sum_{k\ge0}c_k(x-x_0)^k$ dentro il raggio, allora — potendo derivare termine a termine (lez.18, §3.2) — deriviamo $n$ volte:
$$f^{(n)}(x)=\sum_{k\ge n}c_k\,k(k-1)\cdots(k-n+1)\,(x-x_0)^{k-n}.$$
Valutando in $x=x_0$ tutti i termini con $k>n$ si annullano (contengono $(x-x_0)^{k-n}$ con $k-n\ge1$), e sopravvive solo $k=n$:
$$f^{(n)}(x_0)=c_n\cdot n(n-1)\cdots1=c_n\,n!\quad\Longrightarrow\quad c_n=\frac{f^{(n)}(x_0)}{n!}.$$
Ecco perché la serie di Taylor è l'*unica* serie di potenze che può rappresentare $f$: i coefficienti sono determinati, non scelti. Il fattoriale nel denominatore è precisamente il $n!$ prodotto dalla derivazione ripetuta del monomio.


## 4. Esempi

**Esempio 1 (sviluppo per composizione, introduttivo).** Trovare la serie di MacLaurin di $e^{-x^2}$.

*Strategia.* Sostituire, non riderivare. *Svolgimento.* Nella serie $e^u=\sum\frac{u^n}{n!}$ pongo $u=-x^2$: $e^{-x^2}=\sum_{n\ge0}\frac{(-1)^n}{n!}x^{2n}=1-x^2+\frac{x^4}{2}-\frac{x^6}{6}+\cdots$, valida per ogni $x$ ($R=+\infty$). Questa è la funzione della gaussiana in probabilità: la sua serie permette di integrarla termine a termine (non ha primitiva elementare).

**Esempio 2 (limite con gli sviluppi).** Calcolare $\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x^2}$.

*Svolgimento.* $e^x=1+x+\frac{x^2}{2}+o(x^2)$, quindi $e^x-1-x=\frac{x^2}{2}+o(x^2)$, e il rapporto tende a $\frac12$.

**Esempio 3 (cos per derivazione).** Ricavare la serie di $\cos x$ da quella di $\sin x$.

*Svolgimento.* $\sin x=\sum_{n\ge0}\frac{(-1)^n}{(2n+1)!}x^{2n+1}$; derivo termine a termine (lecito, lez.18): $\cos x=\sum_{n\ge0}\frac{(-1)^n(2n+1)}{(2n+1)!}x^{2n}=\sum_{n\ge0}\frac{(-1)^n}{(2n)!}x^{2n}$. Un solo sviluppo, l'altro gratis.

**Esempio 4 (serie binomiale — radice).** Sviluppare $\sqrt{1+x}$ fino al terzo ordine.

*Svolgimento.* $\alpha=\frac12$: $\binom{1/2}{0}=1$, $\binom{1/2}{1}=\frac12$, $\binom{1/2}{2}=\frac{\frac12(-\frac12)}{2}=-\frac18$, $\binom{1/2}{3}=\frac{\frac12(-\frac12)(-\frac32)}{6}=\frac{1}{16}$. Quindi $\sqrt{1+x}=1+\frac{x}{2}-\frac{x^2}{8}+\frac{x^3}{16}-\cdots$, per $|x|<1$. (Approssimazione utilissima: per $x$ piccolo, $\sqrt{1+x}\approx1+\frac x2$.)

**Esempio 5 (verifica dell'analiticità via resto).** Provare che $\cos x=\sum_{n\ge0}\frac{(-1)^n}{(2n)!}x^{2n}$ per ogni $x$.

*Svolgimento.* Le derivate di $\cos$ sono $\pm\sin,\pm\cos$, tutte limitate: $|f^{(n+1)}(\xi)|\le1$. Il resto di Lagrange soddisfa $|R_n(x)|\le\frac{|x|^{n+1}}{(n+1)!}\to0$ (fattoriale batte potenza, lez.16). Dunque $R_n(x)\to0$ per ogni $x$: la serie rappresenta $\cos$ ovunque.

**Esempio 6 (approssimazione certificata).** Stimare $\ln(1{,}2)$ con i primi tre termini e valutare l'errore.

*Svolgimento.* $\ln(1+x)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots$ con $x=0{,}2$: $T_3=0{,}2-0{,}02+0{,}00267=0{,}18267$. È una serie a segni alterni (Leibniz, lez.17): l'errore è **minore del primo termine trascurato**, $\frac{x^4}{4}=\frac{0{,}0016}{4}=0{,}0004$. Quindi $\ln(1{,}2)=0{,}1827\pm0{,}0004$ (valore vero $0{,}18232$). L'alternanza dà gratis la barra d'errore.

**Esempio 7 (il controesempio in azione).** Mostrare che $g(x)=e^{-1/x^2}$ non coincide con la sua serie di Taylor in $0$ per alcun $x\neq0$.

*Svolgimento.* Per §3.2, $g^{(n)}(0)=0\ \forall n$, quindi la serie di MacLaurin è $\sum 0\cdot x^n=0$. Ma per $x\neq0$, $g(x)=e^{-1/x^2}>0$. La serie (che vale $0$) e la funzione (che vale $>0$) non coincidono: $g$ non è analitica in $0$. Il resto $R_n(x)=g(x)-T_n(x)=g(x)-0=g(x)\not\to0$.

**Esempio 8 (integrare una serie — funzione senza primitiva elementare).** Esprimere $\displaystyle\int_0^{x}e^{-t^2}\,dt$ come serie di potenze.

*Svolgimento.* Da $e^{-t^2}=\sum_{n\ge0}\frac{(-1)^n}{n!}t^{2n}$ (Esempio 1), integro termine a termine da $0$ a $x$ (lez.18, §2.5): $\int_0^x e^{-t^2}dt=\sum_{n\ge0}\frac{(-1)^n}{n!(2n+1)}x^{2n+1}=x-\frac{x^3}{3}+\frac{x^5}{10}-\cdots$, valida per ogni $x$. La funzione degli errori (a meno di costanti), impossibile da integrare in forma chiusa, diventa maneggevole come serie: è così che si tabula la distribuzione normale in statistica.


## 5. Collegamenti e riepilogo

Questa lezione chiude il modulo saldando i tre livelli percorsi. **All'indietro**, la serie di Taylor è la serie di potenze di [lez.18](/analisi/successioni-e-serie/18-serie-potenze) con i coefficienti «giusti» $c_n=f^{(n)}(x_0)/n!$, e la sua convergenza *alla funzione* si decide con il resto di [lez.10](/analisi/calcolo-differenziale-una-variabile/10-taylor) — il polinomio di Taylor era l'approssimazione, la serie ne è il limite esatto quando $R_n\to0$. Lo strumento tecnico che fa svanire il resto è la gerarchia di crescita di [lez.16](/analisi/successioni-e-serie/16-successioni) (fattoriale ed esponenziale battono ogni potenza), la stessa che nel controesempio $e^{-1/x^2}$ agisce in senso opposto rendendo la funzione «cieca» alle proprie derivate. **In avanti e in orizzontale**, gli sviluppi notevoli sono il motore del calcolo dei limiti ([lez.03](/analisi/limiti-e-continuita/03-calcolo-limiti)), delle approssimazioni certificate, della formula di Eulero (analisi complessa), dell'integrazione di funzioni senza primitiva elementare (la gaussiana in statistica) e della linearizzazione delle funzioni economiche (analisi marginale, approssimazione media–varianza).

*Idee da portare a casa.* (i) La **serie di Taylor** di $f$ è $\sum\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$; con $x_0=0$ è la serie di **MacLaurin**. (ii) È l'*unica candidata* serie di potenze per $f$, ma converge a $f$ **se e solo se** $R_n(x)\to0$. (iii) Il **resto di Lagrange** è la lente per verificarlo: se le derivate sono limitate o controllate, il fattore $\frac{(x-x_0)^{n+1}}{(n+1)!}\to0$ chiude la questione. (iv) $C^\infty\not\Rightarrow$ **analitica**: il controesempio $e^{-1/x^2}$ ha serie nulla ma funzione non nulla. (v) Sei sviluppi notevoli ($e^x,\sin,\cos,\ln(1+x),\frac1{1-x},(1+x)^\alpha$) generano, per composizione/derivazione/integrazione, quasi tutto ciò che serve.

*Formule chiave.*
$$f(x)=\sum_{n\ge0}\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n\ \iff\ R_n(x)\to0,\qquad R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1},$$
$$e^x=\sum\frac{x^n}{n!},\quad \sin x=\sum\frac{(-1)^n x^{2n+1}}{(2n+1)!},\quad \cos x=\sum\frac{(-1)^n x^{2n}}{(2n)!}.$$

### Slider — la serie di Taylor «avvolge» $\sin x$: convergenza per grado crescente

A differenza dello slider di [lez.10](/analisi/calcolo-differenziale-una-variabile/10-taylor) (che mostrava un singolo polinomio di ordine fisso), qui l'accento è sulla **convergenza della serie**: aumenta il grado $n$ e osserva il polinomio di MacLaurin $T_n(x)$ (curva blu) aderire a $\sin x$ (curva grigia) su un intervallo *sempre più ampio*. A grado basso $T_n$ segue $\sin$ solo vicino a $0$ e poi «schizza via»; man mano che $n$ cresce, il tratto di aderenza si allarga — la manifestazione visiva di $R_n(x)\to0$ su tutta la retta.

```slider
{"title":"Polinomio di MacLaurin di sin x al crescere del grado n","fn":"x - (a>=3?Math.pow(x,3)/6:0) + (a>=5?Math.pow(x,5)/120:0) - (a>=7?Math.pow(x,7)/5040:0) + (a>=9?Math.pow(x,9)/362880:0) - (a>=11?Math.pow(x,11)/39916800:0) + (a>=13?Math.pow(x,13)/6227020800:0)","fn2":"Math.sin(x)","domain":[-9,9],"yDomain":[-3.5,3.5],"pname":"a","pmin":1,"pmax":13,"pdefault":5,"pstep":2,"plabel":"grado n del polinomio","label1":"Tₙ(x) (MacLaurin di sin)","label2":"sin x"}
```


## 6. Esercizi

<details>
<summary>Esercizio 1 (introduttivo) — Sviluppo per sostituzione</summary>

Trovare la serie di MacLaurin di $\dfrac{1}{1+x^2}$ e il suo raggio.

**Soluzione.** Nella geometrica $\frac{1}{1-u}=\sum u^n$ pongo $u=-x^2$: $\frac{1}{1+x^2}=\sum_{n\ge0}(-1)^n x^{2n}=1-x^2+x^4-\cdots$, per $|x|<1$ ($R=1$).

</details>

<details>
<summary>Esercizio 2 (introduttivo) — Limite con serie</summary>

Calcolare $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$.

**Soluzione.** $\cos x=1-\frac{x^2}{2}+o(x^2)$, quindi $1-\cos x=\frac{x^2}{2}+o(x^2)$ e il limite vale $\frac12$.

</details>

<details>
<summary>Esercizio 3 (standard) — Serie di $\sin$ per composizione</summary>

Trovare i primi tre termini non nulli della serie di MacLaurin di $\sin(x^2)$.

**Soluzione.** Da $\sin u=u-\frac{u^3}{6}+\frac{u^5}{120}-\cdots$ con $u=x^2$: $\sin(x^2)=x^2-\frac{x^6}{6}+\frac{x^{10}}{120}-\cdots$, per ogni $x$.

</details>

<details>
<summary>Esercizio 4 (standard) — Analiticità via resto</summary>

Mostrare che $e^{2x}=\sum_{n\ge0}\frac{2^n}{n!}x^n$ per ogni $x$.

**Soluzione.** Sostituisco $u=2x$ nella serie di $e^u$: $e^{2x}=\sum\frac{(2x)^n}{n!}=\sum\frac{2^n}{n!}x^n$, $R=+\infty$. Alternativamente, resto di Lagrange: $f^{(n+1)}(\xi)=2^{n+1}e^{2\xi}$, quindi $|R_n(x)|\le 2^{n+1}e^{2|x|}\frac{|x|^{n+1}}{(n+1)!}=e^{2|x|}\frac{|2x|^{n+1}}{(n+1)!}\to0$.

</details>

<details>
<summary>Esercizio 5 (standard) — Limite con più sviluppi</summary>

Calcolare $\displaystyle\lim_{x\to0}\frac{\tan x-x}{x^3}$, sapendo che $\tan x=x+\frac{x^3}{3}+o(x^3)$.

**Soluzione.** $\tan x-x=\frac{x^3}{3}+o(x^3)$, quindi il limite vale $\frac13$.

</details>

<details>
<summary>Esercizio 6 (standard) — Serie binomiale</summary>

Sviluppare $\dfrac{1}{\sqrt{1-x}}$ fino al secondo ordine.

**Soluzione.** $\alpha=-\frac12$, argomento $-x$: $\binom{-1/2}{0}=1$, $\binom{-1/2}{1}=-\frac12$, $\binom{-1/2}{2}=\frac{-\frac12\cdot(-\frac32)}{2}=\frac38$. Con $(1+(-x))^{-1/2}$: $\frac{1}{\sqrt{1-x}}=1+\frac{x}{2}+\frac{3x^2}{8}+\cdots$, per $|x|<1$.

</details>

<details>
<summary>Esercizio 7 (avanzato) — Errore di un'approssimazione</summary>

Approssimare $\sqrt e=e^{1/2}$ con i primi quattro termini della serie di $e^x$ e stimare l'errore col resto di Lagrange.

**Soluzione.** $T_3(1/2)=1+\frac12+\frac{1}{2\cdot4}+\frac{1}{6\cdot8}=1+0{,}5+0{,}125+0{,}02083=1{,}64583$. Resto: $R_3=\frac{e^{\xi}}{4!}(1/2)^4$ con $0<\xi<\frac12$, quindi $e^\xi<e^{1/2}<2$: $|R_3|<\frac{2}{24}\cdot\frac1{16}=\frac{2}{384}\approx0{,}0052$. Valore vero $\sqrt e\approx1{,}6487$: errore effettivo $\approx0{,}0029$, entro la stima.

</details>

<details>
<summary>Esercizio 8 (avanzato) — Integrare una serie</summary>

Esprimere $\displaystyle\int_0^x\frac{\sin t}{t}\,dt$ come serie di potenze.

**Soluzione.** $\frac{\sin t}{t}=\sum_{n\ge0}\frac{(-1)^n}{(2n+1)!}t^{2n}$ (divido la serie di $\sin t$ per $t$). Integro termine a termine: $\int_0^x\frac{\sin t}{t}dt=\sum_{n\ge0}\frac{(-1)^n}{(2n+1)!(2n+1)}x^{2n+1}=x-\frac{x^3}{18}+\frac{x^5}{600}-\cdots$, per ogni $x$. È la funzione seno-integrale $\mathrm{Si}(x)$, senza primitiva elementare.

</details>

<details>
<summary>Esercizio 9 (avanzato) — Il controesempio, variante</summary>

Sia $h(x)=e^{-1/x}$ per $x>0$ e $h(x)=0$ per $x\le0$. Che aspetto ha la serie di MacLaurin di $h$? È $h$ analitica in $0$?

**Soluzione.** Come per $e^{-1/x^2}$, tutte le derivate destre in $0$ sono nulle (il decadimento esponenziale $e^{-1/x}\to0$ batte ogni potenza per $x\to0^+$), e le derivate sinistre sono nulle perché $h\equiv0$ a sinistra. Quindi $h^{(n)}(0)=0\ \forall n$ e la serie di MacLaurin è $0$. Ma $h(x)>0$ per $x>0$: $h$ **non** è analitica in $0$. (È la funzione «bump» usata per costruire partizioni dell'unità lisce in geometria differenziale.)

</details>

<details>
<summary>Esercizio 10 (applicativo) — Linearizzazione in economia</summary>

Una funzione di utilità è $u(w)=\ln(1+w)$, dove $w$ è la ricchezza aggiuntiva. Approssimarla al secondo ordine attorno a $w=0$ e interpretare i due termini.

**Soluzione.** $\ln(1+w)=w-\frac{w^2}{2}+o(w^2)$. Il termine lineare $w$ è l'utilità marginale a ricchezza nulla (ogni euro vale un'unità); il termine $-\frac{w^2}{2}$, negativo, cattura l'**avversione al rischio**: l'utilità cresce ma in modo concavo (rendimenti marginali decrescenti). L'approssimazione media–varianza dei modelli di portafoglio nasce esattamente dal troncare qui, considerando trascurabili i termini di ordine $\ge3$.

</details>
