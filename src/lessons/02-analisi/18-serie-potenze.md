---
id: analisi-18-serie-potenze
titolo: "Serie di potenze"
materia: analisi
argomento: "Successioni e serie"
modulo: "Serie di potenze"
livello: universitario
slug: analisi-18-serie-potenze

# legacy
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: "Serie di potenze"
title_en: "Power series"
level: blue
order: 18
source_book: "A. Villanacci, Sequences and Series in ℝ; OpenStax Calculus Vol. 1"
source_chapter: "Serie di potenze: raggio e intervallo di convergenza, lemma di Abel, Cauchy–Hadamard, derivazione e integrazione termine a termine"

prerequisiti:
  - analisi-17-serie-numeriche
  - analisi-16-successioni
  - analisi-05-limiti-notevoli-asintoti

collegamenti:
  - analisi-17-serie-numeriche
  - analisi-19-serie-taylor
  - analisi-10-taylor
  - analisi-16-successioni

fonti_integrate:
  - id_fonte: villanacci-successioni
    ruolo: primaria
    sezioni_coperte: "Convergenza assoluta e criteri (rapporto, radice) applicati a termini dipendenti da x; completezza di ℝ come motore dell'esistenza del raggio; nozione di limsup"
    note: "appunti-prof: priorità su notazione e convenzioni d'esame. La trattazione sistematica delle serie di potenze non è in catalogo (OpenStax Vol.2 assente): ricostruzione rigorosa da lemma di Abel e Cauchy–Hadamard secondo l'opzione (A) del curriculum, appoggiata ai criteri di lez.17"
  - id_fonte: openstax-calculus-1
    ruolo: secondaria
    sezioni_coperte: "Intuizione del polinomio infinito, prototipo geometrico ∑xⁿ=1/(1-x), esempi di calcolo del raggio col criterio del rapporto, comportamento agli estremi"
    note: "struttura espositiva ed esempi introduttivi"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Convergenza uniforme (cenno) a supporto della continuità e della derivabilità termine a termine; limsup"
    note: "convenzioni notazionali"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Un polinomio è la funzione più docile che la matematica conosca: per calcolarlo bastano addizioni e moltiplicazioni, si deriva e si integra a occhi chiusi, e il suo grafico non riserva sorprese. Il guaio è che i polinomi sono *pochi*. Funzioni onnipresenti come $e^x$, $\sin x$, $\ln(1+x)$ non sono polinomi, e per valutarle una calcolatrice non può fare altro che… tornare all'aritmetica elementare. La domanda che apre questo capitolo è esattamente questa: *e se lasciassimo crescere il grado di un polinomio all'infinito?* Otterremmo un oggetto — la **serie di potenze** $\sum_{n\ge0} c_n x^n$ — che eredita la maneggevolezza del polinomio ma ha abbastanza «spazio» per rappresentare funzioni vere.

Il salto concettuale rispetto a [lez.17](/analisi/successioni-e-serie/17-serie-numeriche) è che i termini non sono più numeri fissi, ma *dipendono da $x$*. Una serie di potenze non è quindi «una» serie: è un'intera **famiglia** di serie numeriche, una per ogni valore di $x$ che decidiamo di inserire. Per alcuni $x$ la serie converge e produce un numero — il valore della funzione in quel punto; per altri diverge e non definisce nulla. La sorpresa, e la bellezza del capitolo, è che la geografia di questi due insiemi è quanto di più semplice si possa immaginare: c'è un **raggio** $R\ge0$ tale che la serie converge (assolutamente) per $|x|<R$ e diverge per $|x|>R$. Non un insieme frastagliato, non un groviglio: un intervallo simmetrico attorno al centro, con solo i due estremi da esaminare caso per caso.

Perché proprio un intervallo, e non una forma qualunque? La risposta è il cuore teorico della lezione (il **lemma di Abel**, §3.1): la convergenza in *un solo* punto lontano costringe la convergenza in *tutti* i punti più vicini al centro. È un effetto domino unidirezionale — «se reggi qui, allora reggi ovunque più vicino» — e da esso l'intervallo di convergenza nasce quasi da sé. Una volta assicurato il terreno, dentro il raggio la serie di potenze si comporta esattamente come un polinomio: è continua, si deriva e si integra **termine a termine** senza cambiare il raggio. È questa proprietà, apparentemente tecnica, a rendere le serie di potenze lo strumento con cui la lezione successiva rappresenterà le funzioni note come somme infinite: la [serie di Taylor](/analisi/successioni-e-serie/19-serie-taylor) sarà una serie di potenze in cui i coefficienti $c_n$ sono le derivate di $f$. Tenere a mente l'arco: *una serie numerica somma costanti; una serie di potenze somma monomi; una funzione analitica è una serie di potenze travestita.*


## 2. Teoria

### 2.1 Definizione: la serie di potenze

Fissato un centro $x_0\in\mathbb{R}$ e una successione di coefficienti $(c_n)_{n\ge0}$, la **serie di potenze** centrata in $x_0$ è

$$\sum_{n=0}^{\infty} c_n\,(x-x_0)^n \;=\; c_0 + c_1(x-x_0) + c_2(x-x_0)^2 + \cdots$$

*Lettura.* Ogni addendo $c_n(x-x_0)^n$ è un monomio di grado $n$ nella variabile traslata $x-x_0$: il coefficiente $c_n$ pesa il contributo del grado $n$, mentre $(x-x_0)^n$ misura quanto siamo lontani dal centro, elevato alla potenza $n$. Il centro $x_0$ è il punto attorno a cui «cresce» il polinomio infinito: in $x=x_0$ tutti i termini con $n\ge1$ si annullano e la serie vale $c_0$ — l'unico caso in cui la convergenza è garantita per *ogni* serie di potenze. Per non appesantire la notazione, dal §2.2 in poi poniamo $x_0=0$: ogni risultato si trasporta al caso generale sostituendo $x$ con $x-x_0$, cioè traslando tutto di $x_0$.

*Micro-esempio.* La serie geometrica $\sum_{n\ge0} x^n = 1+x+x^2+\cdots$ è la serie di potenze con centro $0$ e tutti i coefficienti $c_n=1$. Da [lez.17](/analisi/successioni-e-serie/17-serie-numeriche) sappiamo già che converge a $\frac{1}{1-x}$ per $|x|<1$ e diverge per $|x|\ge1$: è il **prototipo** di ogni serie di potenze, e ci accompagnerà per tutta la lezione.

### 2.2 Il raggio di convergenza

L'insieme dei punti $x$ in cui $\sum c_n x^n$ converge si chiama **insieme di convergenza**. Il risultato centrale — che dimostreremo in §3.1 — è che questo insieme ha sempre la forma più semplice possibile.

> **Teorema (esistenza del raggio).** Data una serie di potenze $\sum c_n x^n$, esiste un unico $R\in[0,+\infty]$, detto **raggio di convergenza**, tale che:
> - la serie converge **assolutamente** per ogni $x$ con $|x|<R$;
> - la serie diverge per ogni $x$ con $|x|>R$;
> - nei due punti $x=\pm R$ (gli **estremi**) può accadere qualsiasi cosa, e va esaminato caso per caso.

*Significato dei simboli.* $R$ è il «raggio» dell'intervallo $(-R,R)$ — detto **intervallo di convergenza** — centrato in $0$ (in $x_0$ nel caso generale). I due valori limite sono $R=0$ (la serie converge *solo* nel centro: intervallo ridotto a un punto) e $R=+\infty$ (la serie converge su *tutta* la retta reale). Il termine *assolutamente* è cruciale: dentro il raggio non solo $\sum c_n x^n$ converge, ma converge $\sum |c_n x^n|$, e da [lez.17](/analisi/successioni-e-serie/17-serie-numeriche) (assoluta $\Rightarrow$ semplice) questo dà convergenza incondizionata — possiamo riordinare, sommare e moltiplicare le serie senza timori.

*Interpretazione.* L'immagine giusta è un **disco di sicurezza**: entro la distanza $R$ dal centro la serie «regge» in modo robusto; oltre $R$ crolla. La frontiera $|x|=R$ è terra di nessuno — è l'unico luogo in cui l'esito dipende dai dettagli fini dei coefficienti. Perché la geometria è così pulita, con un solo numero $R$ a governare tutto, è precisamente ciò che il lemma di Abel spiega in §3.1.

*Micro-esempio.* Per la geometrica $\sum x^n$ abbiamo $R=1$: converge in $(-1,1)$, diverge in $|x|>1$, e agli estremi $x=1$ (serie $\sum 1$, diverge) e $x=-1$ (serie $\sum(-1)^n$, oscilla e non converge) fallisce in entrambi. Intervallo di convergenza: esattamente $(-1,1)$, estremi esclusi.

### 2.3 Come si calcola $R$: rapporto, radice, Cauchy–Hadamard

I criteri del rapporto e della radice di [lez.17](/analisi/successioni-e-serie/17-serie-numeriche), applicati alla serie dei valori assoluti $\sum |c_n||x|^n$, forniscono $R$ direttamente. Applichiamo il **criterio del rapporto** al termine $a_n=|c_n||x|^n$:

$$\frac{a_{n+1}}{a_n} = \frac{|c_{n+1}|}{|c_n|}\,|x| \;\xrightarrow[n\to\infty]{}\; L\,|x|, \qquad \text{dove } L=\lim_n\frac{|c_{n+1}|}{|c_n|}\ \text{(se esiste).}$$

Il criterio garantisce convergenza assoluta quando $L|x|<1$, cioè $|x|<1/L$, e divergenza quando $L|x|>1$, cioè $|x|>1/L$. Confrontando con la definizione di $R$:

$$\boxed{\,R=\frac{1}{L}=\lim_{n\to\infty}\left|\frac{c_n}{c_{n+1}}\right|\,}\qquad(\text{quando il limite esiste}),$$

con le convenzioni $R=+\infty$ se $L=0$ e $R=0$ se $L=+\infty$.

*Perché questa struttura.* Il fattore $|x|$ esce dal rapporto come costante moltiplicativa, e tutto il peso ricade sul rapporto dei coefficienti $|c_{n+1}|/|c_n|$: è questo tasso di crescita/decrescita dei coefficienti a decidere quanto lontano dal centro la serie può spingersi. Coefficienti che decadono in fretta $\Rightarrow$ $L$ piccolo $\Rightarrow$ $R$ grande; coefficienti che crescono $\Rightarrow$ $R$ piccolo.

*Micro-esempio.* Per $\sum \frac{x^n}{n!}$ si ha $c_n=1/n!$, dunque $\left|\frac{c_n}{c_{n+1}}\right|=\frac{(n+1)!}{n!}=n+1\to+\infty$: quindi $R=+\infty$. La serie converge su tutta la retta — è, non a caso, la serie che rappresenterà $e^x$ in [lez.19](/analisi/successioni-e-serie/19-serie-taylor).

Il **criterio della radice** dà la formula gemella $R=1/\lim_n\sqrt[n]{|c_n|}$, comoda quando $c_n$ contiene potenze $n$-esime. C'è però un difetto comune a entrambe le formule: presuppongono che il limite *esista*. Per coefficienti irregolari (che oscillano, si annullano periodicamente, ecc.) il limite può non esistere, e le formule con $\lim$ vanno in stallo.

> **Formula di Cauchy–Hadamard (cenno).** Sostituendo il limite ordinario con il **limite superiore** $\limsup$ — che esiste *sempre* in $[0,+\infty]$ — si ottiene la formula universale, valida per *ogni* serie di potenze senza ipotesi:
> $$\frac{1}{R}=\limsup_{n\to\infty}\sqrt[n]{|c_n|}.$$
> È questo il vero teorema strutturale; le formule con $\lim$ ne sono i casi comodi. La dimostrazione è nella dim-tecnica di §3.1.

### 2.4 Il comportamento agli estremi

Dentro $(-R,R)$ sappiamo tutto (convergenza assoluta); fuori sappiamo tutto (divergenza). Restano i due punti $x=\pm R$, dove il criterio del rapporto restituisce $L|x|=1$ — il caso *non conclusivo* di [lez.17](/analisi/successioni-e-serie/17-serie-numeriche). Lì la serie di potenze *diventa* una serie numerica concreta, e va studiata con gli strumenti dedicati (Leibniz, confronto, serie campione). I quattro esiti sono tutti possibili, e vanno controllati separatamente perché i due estremi possono comportarsi in modo diverso.

*Micro-esempio.* La serie $\sum_{n\ge1}\frac{x^n}{n}$ ha $R=1$ (rapporto: $\frac{c_n}{c_{n+1}}=\frac{n+1}{n}\to1$). All'estremo $x=1$ diventa la serie armonica $\sum\frac1n$: **diverge**. All'estremo $x=-1$ diventa $\sum\frac{(-1)^n}{n}$: per Leibniz **converge** (semplicemente). Stesso raggio, estremi con destino opposto: l'intervallo di convergenza è $[-1,1)$. Dimenticare di controllare gli estremi è l'errore più comune del capitolo.

```checkpoint
[domanda] La serie $\sum_{n\ge1} n^2\,x^n$ ha coefficienti $c_n=n^2$. Quanto vale il raggio $R$, e cosa succede agli estremi?
[risposta] Col criterio del rapporto: $\left|\frac{c_n}{c_{n+1}}\right|=\frac{n^2}{(n+1)^2}\to1$, quindi $R=1$. Agli estremi $x=\pm1$ il termine generale è $\pm n^2$, che **non tende a zero**: la condizione necessaria di [lez.17](/analisi/successioni-e-serie/17-serie-numeriche) è violata in entrambi, la serie diverge. Intervallo di convergenza: $(-1,1)$, estremi esclusi. Lezione: se agli estremi $c_n(\pm R)^n\not\to0$, non serve nemmeno scomodare Leibniz — basta la condizione necessaria.
```

### 2.5 Dentro il raggio: continuità, derivazione e integrazione termine a termine

Ecco la proprietà che rende le serie di potenze uno strumento e non una curiosità. Sia $f(x)=\sum_{n\ge0}c_n x^n$ con raggio $R>0$. Allora, **per ogni $x$ interno all'intervallo** ($|x|<R$):

1. **Continuità.** $f$ è continua su $(-R,R)$.
2. **Derivazione termine a termine.** $f$ è derivabile e la derivata si ottiene derivando addendo per addendo:
$$f'(x)=\sum_{n=1}^{\infty} n\,c_n\,x^{n-1},$$
e la serie derivata ha **lo stesso raggio $R$**.
3. **Integrazione termine a termine.** Una primitiva si ottiene integrando addendo per addendo:
$$\int_0^x f(t)\,dt=\sum_{n=0}^{\infty}\frac{c_n}{n+1}\,x^{n+1},$$
di nuovo con **lo stesso raggio $R$**.

*Perché è notevole.* Scambiare «somma infinita» e «derivata» (o «integrale») non è un'operazione gratuita: per una serie qualunque di funzioni può fallire clamorosamente. Il fatto che *dentro il raggio* si possa fare senza cautele — mantenendo perfino invariato $R$ — è ciò che permette di trattare $f$ come un polinomio a tutti gli effetti. Che il raggio non cambi è ragionevole: derivare moltiplica il coefficiente $n$-esimo per $n$, un fattore che cresce solo polinomialmente e non intacca il tasso *esponenziale* $\sqrt[n]{|c_n|}$ che governa $R$ (la ragione precisa sta in $\sqrt[n]{n}\to1$, vedi §3.2).

*Micro-esempio (il seme geometrico).* Partiamo dal prototipo $\frac{1}{1-x}=\sum_{n\ge0}x^n$ ($R=1$) e **integriamo** termine a termine da $0$ a $x$: a sinistra $\int_0^x\frac{dt}{1-t}=-\ln(1-x)$, a destra $\sum_{n\ge0}\frac{x^{n+1}}{n+1}=\sum_{k\ge1}\frac{x^k}{k}$. Otteniamo gratis lo sviluppo
$$-\ln(1-x)=\sum_{k=1}^{\infty}\frac{x^k}{k}=x+\frac{x^2}{2}+\frac{x^3}{3}+\cdots,\qquad |x|<1.$$
Una funzione trascendente, $\ln$, catturata da un polinomio infinito — semplicemente integrando la geometrica. Questo è il metodo con cui in [lez.19](/analisi/successioni-e-serie/19-serie-taylor) genereremo intere famiglie di sviluppi a partire da un unico seme.

### 2.6 Operazioni algebriche e il seme geometrico

Dentro il raggio comune, le serie di potenze si sommano, moltiplicano per scalari e moltiplicano tra loro come polinomi (con il **prodotto di Cauchy** per il prodotto). Ma l'operazione più fruttuosa in pratica è la **sostituzione**: rimpiazzare $x$ con un'espressione, purché resti nel raggio.

*Micro-esempio.* Nella geometrica $\frac{1}{1-u}=\sum u^n$ sostituiamo $u=-x^2$: otteniamo $\frac{1}{1+x^2}=\sum_{n\ge0}(-1)^n x^{2n}=1-x^2+x^4-\cdots$, valida per $|x|<1$. Integrando termine a termine da $0$ a $x$ (lecito per §2.5) troviamo lo sviluppo dell'**arcotangente**: $\arctan x=\sum_{n\ge0}\frac{(-1)^n}{2n+1}x^{2n+1}=x-\frac{x^3}{3}+\frac{x^5}{5}-\cdots$. Da un solo seme — la geometrica — e due manovre lecite (sostituzione + integrazione) nasce una funzione trascendente. Questo è, in nuce, tutto il potere delle serie di potenze.

```checkpoint
[domanda] Vero o falso: dalla serie $\frac{1}{1-x}=\sum x^n$, derivando termine a termine, si ottiene $\frac{1}{(1-x)^2}=\sum_{n\ge1} n\,x^{n-1}$, e questa vale ancora per $|x|<1$.
[risposta] **Vero.** La derivata di $\frac{1}{1-x}$ è $\frac{1}{(1-x)^2}$; derivando la serie termine a termine (lecito per §2.5) si ha $\sum_{n\ge1}n x^{n-1}=1+2x+3x^2+\cdots$. Il raggio resta $R=1$, perché la derivazione moltiplica $c_n$ per $n$ e $\sqrt[n]{n}\to1$ non altera $\limsup\sqrt[n]{|c_n|}$. Riscalando ($\sum_{n\ge1}n x^n=\frac{x}{(1-x)^2}$) si ottiene una formula utilissima, ad esempio per sommare $\sum n/2^n$ (poni $x=1/2$: vale $2$).
```


## 3. Dimostrazioni

### 3.1 Esistenza del raggio: il lemma di Abel

L'intera struttura «intervallo simmetrico» poggia su un unico fatto, elementare ma decisivo.

> **Lemma di Abel.** Se la serie $\sum c_n x_1^n$ **converge** in un punto $x_1\neq0$, allora $\sum c_n x^n$ converge **assolutamente** in ogni $x$ con $|x|<|x_1|$.

**Dimostrazione.** Supponiamo che $\sum_n c_n x_1^n$ converga. Per la **condizione necessaria** di [lez.17](/analisi/successioni-e-serie/17-serie-numeriche), il termine generale tende a zero: $c_n x_1^n\to0$. Una successione che converge (a $0$) è **limitata**: esiste dunque $M>0$ tale che
$$|c_n x_1^n|\le M\qquad\text{per ogni }n.$$
Prendiamo ora un qualunque $x$ con $|x|<|x_1|$ e poniamo $q=\dfrac{|x|}{|x_1|}$, così che $0\le q<1$. Stimiamo il termine generale della serie dei valori assoluti in $x$ moltiplicando e dividendo per $x_1^n$:
$$|c_n x^n|=|c_n x_1^n|\cdot\left|\frac{x}{x_1}\right|^n=|c_n x_1^n|\cdot q^n\le M\,q^n.$$
Abbiamo così maggiorato $\sum|c_n x^n|$ **termine a termine** con $M\sum q^n$, che è (a meno del fattore $M$) una **serie geometrica di ragione $q<1$**: converge. Per il **criterio del confronto** di [lez.17](/analisi/successioni-e-serie/17-serie-numeriche), anche $\sum|c_n x^n|$ converge, cioè $\sum c_n x^n$ converge assolutamente in $x$. $\blacksquare$

*Che cosa abbiamo ottenuto.* La convergenza in *un solo* punto $x_1$ si «propaga» automaticamente a tutto il disco più vicino al centro. Definiamo allora
$$R=\sup\{\,|x|:\ \sum c_n x^n \text{ converge}\,\}.$$
Il lemma garantisce esattamente le tre proprietà del teorema di §2.2: se $|x|<R$, per definizione di estremo superiore esiste un punto di convergenza $x_1$ con $|x|<|x_1|\le R$, e il lemma dà convergenza assoluta in $x$; se $|x|>R$, la serie non può convergere (altrimenti $R$ non sarebbe l'estremo superiore). L'intervallo simmetrico non è un'ipotesi: è una **conseguenza forzata** del fatto che il controllo di una serie geometrica «vince» su tutto ciò che sta più vicino al centro.

<details class="dim-tecnica">
<summary>Dettaglio tecnico — la formula di Cauchy–Hadamard $1/R=\limsup\sqrt[n]{|c_n|}$</summary>

Il valore di $R$ appena definito come estremo superiore si calcola esplicitamente col limite superiore. Sia $\ell=\limsup_n\sqrt[n]{|c_n|}\in[0,+\infty]$. Applichiamo il criterio della radice di [lez.17](/analisi/successioni-e-serie/17-serie-numeriche) alla serie $\sum|c_n x^n|$, il cui termine generale ha radice $n$-esima
$$\sqrt[n]{|c_n x^n|}=\sqrt[n]{|c_n|}\cdot|x|.$$
Il $\limsup$ del primo membro è $\ell\,|x|$. Il criterio della radice (nella sua forma con $\limsup$) dà:
- se $\ell\,|x|<1$, cioè $|x|<1/\ell$, la serie converge assolutamente;
- se $\ell\,|x|>1$, cioè $|x|>1/\ell$, il termine generale non tende a zero (la radice $n$-esima supera $1$ infinite volte, quindi $|c_n x^n|\ge1$ infinite volte) e la serie diverge.

Confrontando con la definizione di raggio: $R=1/\ell=1/\limsup_n\sqrt[n]{|c_n|}$, con le convenzioni $1/0=+\infty$ e $1/(+\infty)=0$. Il pregio del $\limsup$ è che esiste sempre — anche quando i coefficienti oscillano o si annullano periodicamente, così che i limiti ordinari del §2.3 falliscono. È per questo che Cauchy–Hadamard, e non le formule col $\lim$, è *il* teorema strutturale.

*Esempio in cui serve davvero.* Per $\sum c_n x^n$ con $c_n=2^n$ se $n$ pari e $c_n=3^n$ se $n$ dispari, il rapporto $|c_{n+1}/c_n|$ oscilla e non ha limite; ma $\sqrt[n]{|c_n|}$ vale $2$ o $3$ a seconda della parità, con $\limsup=3$, quindi $R=1/3$ senza ambiguità.

</details>

### 3.2 La derivazione termine a termine conserva il raggio

> **Proposizione.** Se $f(x)=\sum_{n\ge0}c_n x^n$ ha raggio $R$, allora la serie derivata $\sum_{n\ge1}n\,c_n x^{n-1}$ ha **lo stesso raggio $R$** (e la sua somma è $f'$ su $(-R,R)$).

**Dimostrazione (uguaglianza dei raggi).** La serie derivata ha, a meno di un fattore $x$ irrilevante per il raggio, coefficienti $n\,c_n$. Per Cauchy–Hadamard (§3.1) il suo raggio $R'$ soddisfa
$$\frac{1}{R'}=\limsup_n\sqrt[n]{|n\,c_n|}=\limsup_n\Big(\sqrt[n]{n}\cdot\sqrt[n]{|c_n|}\Big).$$
Ora invochiamo un limite notevole già dimostrato in [lez.16](/analisi/successioni-e-serie/16-successioni): $\sqrt[n]{n}\to1$. Poiché uno dei due fattori converge a $1$, il $\limsup$ del prodotto è il $\limsup$ dell'altro fattore:
$$\frac{1}{R'}=\limsup_n\sqrt[n]{|c_n|}=\frac{1}{R}\quad\Longrightarrow\quad R'=R.$$
Il fattore $n$ introdotto dalla derivazione cresce troppo lentamente (la sua radice $n$-esima tende a $1$) per spostare la soglia esponenziale che fissa il raggio. $\blacksquare$

*Sul fatto che la somma derivata sia proprio $f'$.* L'uguaglianza $R'=R$ garantisce che la serie derivata converge dove serve; che la sua somma coincida con la derivata di $f$ richiede la **convergenza uniforme** su ogni intervallo chiuso $[-r,r]$ con $r<R$ (che a sua volta segue dalla maggiorazione geometrica del lemma di Abel). Iterando la proposizione si ottiene un corollario di enorme portata: *una serie di potenze è infinitamente derivabile dentro il suo intervallo di convergenza*, e derivando $k$ volte e valutando in $0$ si legge il coefficiente, $c_k=f^{(k)}(0)/k!$. È esattamente il ponte che apre la [lezione sulle serie di Taylor](/analisi/successioni-e-serie/19-serie-taylor).

### 3.3 Il raggio della geometrica, per confronto diretto

Chiudiamo con il calcolo che fonda tutti gli esempi: il raggio di $\sum_{n\ge0}x^n$ vale esattamente $1$. Per $|x|<1$, la somma parziale è nota da [lez.17](/analisi/successioni-e-serie/17-serie-numeriche): $s_N=\frac{1-x^{N+1}}{1-x}$, e poiché $x^{N+1}\to0$ (perché $|x|<1$) si ha $s_N\to\frac{1}{1-x}$: la serie converge. Per $|x|\ge1$ il termine generale $x^n$ ha modulo $\ge1$ e non tende a zero, dunque la **condizione necessaria** è violata e la serie diverge. Quindi $R=1$ e la somma è $\frac{1}{1-x}$ su $(-1,1)$. Da questo unico mattone, per derivazione, integrazione e sostituzione (§2.5–2.6), si costruisce buona parte del catalogo degli sviluppi notevoli.


## 4. Esempi

**Esempio 1 (raggio col rapporto, introduttivo).** Trovare l'intervallo di convergenza di $\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n}$.

*Strategia.* Rapporto sui coefficienti per $R$, poi estremi a parte. *Svolgimento.* $c_n=1/n$, $\left|\frac{c_n}{c_{n+1}}\right|=\frac{n+1}{n}\to1$, quindi $R=1$. Estremo $x=1$: $\sum\frac1n$ armonica, **diverge**. Estremo $x=-1$: $\sum\frac{(-1)^n}{n}$, per Leibniz **converge**. Intervallo: $[-1,1)$.

**Esempio 2 (raggio infinito).** Studiare $\displaystyle\sum_{n=0}^{\infty}\frac{x^n}{n!}$.

*Svolgimento.* $\left|\frac{c_n}{c_{n+1}}\right|=\frac{(n+1)!}{n!}=n+1\to+\infty$, quindi $R=+\infty$: converge per ogni $x\in\mathbb{R}$. Nessun estremo da controllare. È la serie di $e^x$.

**Esempio 3 (raggio nullo).** Studiare $\displaystyle\sum_{n=0}^{\infty} n!\,x^n$.

*Svolgimento.* $\left|\frac{c_n}{c_{n+1}}\right|=\frac{n!}{(n+1)!}=\frac{1}{n+1}\to0$, quindi $R=0$: la serie converge **solo** in $x=0$. Coefficienti che esplodono $\Rightarrow$ nessun disco di sicurezza. Utile come monito: non tutte le serie di potenze sono utili funzioni.

**Esempio 4 (centro diverso da zero).** Trovare dove converge $\displaystyle\sum_{n=1}^{\infty}\frac{(x-2)^n}{n\,3^n}$.

*Strategia.* È centrata in $x_0=2$; poniamo $u=x-2$. *Svolgimento.* $c_n=\frac{1}{n3^n}$, $\left|\frac{c_n}{c_{n+1}}\right|=\frac{(n+1)3^{n+1}}{n3^n}=3\cdot\frac{n+1}{n}\to3$, quindi $R=3$ nella variabile $u$: converge per $|x-2|<3$, cioè $x\in(-1,5)$. Estremo $x=5$ ($u=3$): $\sum\frac1n$, diverge. Estremo $x=-1$ ($u=-3$): $\sum\frac{(-1)^n}{n}$, converge. Intervallo: $[-1,5)$.

**Esempio 5 (criterio della radice).** Studiare $\displaystyle\sum_{n=1}^{\infty}\Big(\frac{2n+1}{n}\Big)^n x^n$.

*Svolgimento.* I coefficienti hanno forma di potenza $n$-esima: uso la radice. $\sqrt[n]{|c_n|}=\frac{2n+1}{n}\to2$, quindi $R=\frac12$: converge per $|x|<\frac12$. Agli estremi $x=\pm\frac12$ il termine è $\big(\frac{2n+1}{n}\big)^n(\pm\frac12)^n=\big(\pm\frac{2n+1}{2n}\big)^n$, il cui modulo $\big(1+\frac{1}{2n}\big)^n\to\sqrt e\ne0$: condizione necessaria violata, diverge in entrambi. Intervallo: $(-\tfrac12,\tfrac12)$.

**Esempio 6 (solo potenze pari — attenzione alla formula).** Studiare $\displaystyle\sum_{n=0}^{\infty}\frac{x^{2n}}{4^n}$.

*Strategia.* Compaiono solo esponenti pari: i coefficienti dei gradi dispari sono nulli, e la formula $|c_n/c_{n+1}|$ è mal posta (divisioni per zero). Conviene trattarla come serie geometrica in $u=x^2/4$, oppure usare la radice. *Svolgimento (geometrica).* $\sum_n\big(\frac{x^2}{4}\big)^n$ converge $\iff\frac{x^2}{4}<1\iff|x|<2$. Quindi $R=2$. Agli estremi $x=\pm2$: $\sum 1$, diverge. Intervallo $(-2,2)$. *Morale:* con serie «lacunose» (solo pari o solo dispari) si applica un criterio direttamente al termine $|a_n(x)|$, non la formula dei coefficienti.

**Esempio 7 (generare uno sviluppo per integrazione).** Ricavare lo sviluppo di $\ln(1+x)$ e il suo intervallo.

*Svolgimento.* Parto dalla geometrica con $u=-x$: $\frac{1}{1+x}=\sum_{n\ge0}(-1)^n x^n$, valida per $|x|<1$. Integro termine a termine da $0$ a $x$ (§2.5): $\ln(1+x)=\sum_{n\ge0}\frac{(-1)^n}{n+1}x^{n+1}=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots$, con $R=1$. All'estremo $x=1$: $\sum\frac{(-1)^{n}}{n+1}$ (armonica alternata), **converge** per Leibniz, e in effetti dà $\ln2$. All'estremo $x=-1$: la serie diventa $-\sum\frac1{n+1}$, armonica, **diverge**. Intervallo: $(-1,1]$.

**Esempio 8 (sommare una serie numerica via serie di potenze).** Calcolare $\displaystyle\sum_{n=1}^{\infty}\frac{n}{2^n}$.

*Strategia.* Riconosco la serie numerica come valore in un punto di una serie di potenze nota. *Svolgimento.* Dal checkpoint di §2.6, $\sum_{n\ge1}n x^n=\frac{x}{(1-x)^2}$ per $|x|<1$. Pongo $x=\frac12$ (dentro il raggio): $\sum_{n\ge1}\frac{n}{2^n}=\frac{1/2}{(1/2)^2}=\frac{1/2}{1/4}=2$. Una somma numerica «difficile» risolta trasformandola nel valore di una funzione nota — l'uso più tipico delle serie di potenze in probabilità (valore atteso di una geometrica) ed economia.


## 5. Collegamenti e riepilogo

Le serie di potenze sono la cerniera del modulo. **All'indietro**, sono serie numeriche di [lez.17](/analisi/successioni-e-serie/17-serie-numeriche) con un parametro: ogni valore di $x$ ne fissa una, e i criteri del rapporto e della radice — più la condizione necessaria per gli estremi — sono l'unico armamentario necessario per calcolare $R$ e chiudere l'intervallo. Il lemma di Abel, a sua volta, è puro confronto con la serie geometrica, il prototipo che percorre tutta la lezione. **In avanti**, aprono la [lezione sulle serie di Taylor](/analisi/successioni-e-serie/19-serie-taylor): la derivabilità infinita dentro il raggio (§3.2) permette di leggere i coefficienti come $c_n=f^{(n)}(0)/n!$, trasformando il [polinomio di Taylor di lez.10](/analisi/calcolo-differenziale-una-variabile/10-taylor) (finito, con resto) in una serie (infinita, esatta). **Fuori dall'analisi**, la derivazione e integrazione termine a termine sono il motore con cui si risolvono equazioni differenziali per serie, si sommano serie numeriche in probabilità (valore atteso di distribuzioni discrete) e si linearizzano funzioni di utilità in economia.

*Idee da portare a casa.* (i) Una serie di potenze converge su un **intervallo simmetrico** $(-R,R)$ attorno al centro, più eventualmente gli estremi da esaminare a parte. (ii) Il raggio si calcola con $R=\lim|c_n/c_{n+1}|$ o $R=1/\lim\sqrt[n]{|c_n|}$, e in generale con **Cauchy–Hadamard** $1/R=\limsup\sqrt[n]{|c_n|}$. (iii) La forma a intervallo è forzata dal **lemma di Abel** (confronto geometrico). (iv) *Dentro* il raggio la serie è continua, derivabile e integrabile **termine a termine**, con raggio invariato. (v) Il **seme geometrico** $\frac{1}{1-x}=\sum x^n$ genera, per sostituzione + derivazione + integrazione, buona parte degli sviluppi notevoli.

*Formule chiave.*
$$R=\lim_n\left|\frac{c_n}{c_{n+1}}\right|,\qquad \frac1R=\limsup_n\sqrt[n]{|c_n|},\qquad \frac{1}{1-x}=\sum_{n\ge0}x^n\ (|x|<1),$$
$$f'(x)=\sum_{n\ge1}n\,c_n x^{n-1},\qquad \int_0^x f=\sum_{n\ge0}\frac{c_n}{n+1}x^{n+1}\quad(\text{stesso }R).$$

### Slider — dentro e fuori il raggio: $\sum_{n=0}^{N}x^n$ contro $\frac{1}{1-x}$

Muovi il numero di termini $N$ e osserva la somma parziale $s_N(x)=\sum_{n=0}^{N}x^n$ (curva blu) inseguire la funzione limite $\frac{1}{1-x}$ (curva grigia). *Dentro* il raggio ($|x|<1$) la somma parziale aderisce sempre meglio alla funzione all'aumentare di $N$; *fuori* ($x<-1$) se ne allontana violentemente, oscillando — è la divergenza resa visibile. La frontiera $x=-1$ è il bordo tra i due regimi.

```slider
{"title":"Somma parziale della geometrica sₙ(x) vs 1/(1-x)","fn":"(1-Math.pow(x,a+1))/(1-x)","fn2":"1/(1-x)","domain":[-1.4,0.95],"yDomain":[-2,6],"pname":"a","pmin":1,"pmax":25,"pdefault":5,"pstep":1,"plabel":"N (numero di termini)","label1":"sₙ(x) = Σₙ₌₀ᴺ xⁿ","label2":"1/(1-x) (limite)"}
```


## 6. Esercizi

<details>
<summary>Esercizio 1 (introduttivo) — Raggio col rapporto</summary>

Trovare il raggio di convergenza di $\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n^2}$.

**Soluzione.** $c_n=1/n^2$, $\left|\frac{c_n}{c_{n+1}}\right|=\frac{(n+1)^2}{n^2}\to1$, quindi $R=1$. (Agli estremi $x=\pm1$: $\sum\frac{1}{n^2}$ e $\sum\frac{(-1)^n}{n^2}$ convergono entrambe — serie campione $p=2>1$ — quindi l'intervallo è $[-1,1]$, estremi inclusi.)

</details>

<details>
<summary>Esercizio 2 (introduttivo) — Raggio infinito</summary>

Mostrare che $\displaystyle\sum_{n=0}^{\infty}\frac{x^n}{(2n)!}$ converge per ogni $x$.

**Soluzione.** $\left|\frac{c_n}{c_{n+1}}\right|=\frac{(2n+2)!}{(2n)!}=(2n+1)(2n+2)\to+\infty$, quindi $R=+\infty$: converge su tutta la retta reale.

</details>

<details>
<summary>Esercizio 3 (standard) — Intervallo completo con estremi</summary>

Determinare l'intervallo di convergenza di $\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n\,2^n}$.

**Soluzione.** $c_n=\frac{1}{n2^n}$, $\left|\frac{c_n}{c_{n+1}}\right|=\frac{(n+1)2^{n+1}}{n2^n}=2\cdot\frac{n+1}{n}\to2$, quindi $R=2$: converge per $|x|<2$. Estremo $x=2$: $\sum\frac1n$ armonica, **diverge**. Estremo $x=-2$: $\sum\frac{(-1)^n}{n}$, per Leibniz **converge**. Intervallo: $[-2,2)$.

</details>

<details>
<summary>Esercizio 4 (standard) — Centro diverso da zero</summary>

Trovare dove converge $\displaystyle\sum_{n=0}^{\infty}\frac{(x+1)^n}{n^2+1}$.

**Soluzione.** Centro $x_0=-1$, $u=x+1$. $\left|\frac{c_n}{c_{n+1}}\right|=\frac{(n+1)^2+1}{n^2+1}\to1$, quindi $R=1$: converge per $|x+1|<1$, cioè $x\in(-2,0)$. Agli estremi $u=\pm1$ il termine $\frac{(\pm1)^n}{n^2+1}$ dà serie che convergono assolutamente ($\sum\frac{1}{n^2+1}$ converge, confronto con $1/n^2$). Intervallo: $[-2,0]$, estremi inclusi.

</details>

<details>
<summary>Esercizio 5 (standard) — Serie lacunosa</summary>

Studiare $\displaystyle\sum_{n=1}^{\infty}\frac{x^{3n}}{n}$.

**Soluzione.** Solo esponenti multipli di $3$: pongo $u=x^3$ e ottengo $\sum_{n\ge1}\frac{u^n}{n}$, che converge per $|u|<1$ (e in $u=-1$). Dunque $|x^3|<1\iff|x|<1$: $R=1$. Estremo $x=1$ ($u=1$): $\sum\frac1n$ diverge. Estremo $x=-1$ ($u=-1$): $\sum\frac{(-1)^n}{n}$ converge. Intervallo: $[-1,1)$.

</details>

<details>
<summary>Esercizio 6 (standard) — Criterio della radice</summary>

Trovare il raggio di $\displaystyle\sum_{n=1}^{\infty}\frac{x^n}{n^n}$.

**Soluzione.** $\sqrt[n]{|c_n|}=\sqrt[n]{\frac{1}{n^n}}=\frac1n\to0$, quindi $R=1/0=+\infty$: converge per ogni $x$. (I coefficienti decadono più in fretta di qualunque esponenziale, dunque nessuna limitazione sul dominio.)

</details>

<details>
<summary>Esercizio 7 (avanzato) — Generare uno sviluppo</summary>

Usando la geometrica, trovare lo sviluppo in serie di potenze di $\dfrac{1}{(1-x)^2}$ e il suo raggio.

**Soluzione.** Da $\frac{1}{1-x}=\sum_{n\ge0}x^n$ ($R=1$), derivo termine a termine (§2.5): $\frac{1}{(1-x)^2}=\sum_{n\ge1}n\,x^{n-1}=\sum_{k\ge0}(k+1)x^{k}=1+2x+3x^2+\cdots$. Il raggio si conserva: $R=1$. (Agli estremi $x=\pm1$ i coefficienti $k+1\to\infty$ non tendono a zero: diverge, intervallo $(-1,1)$.)

</details>

<details>
<summary>Esercizio 8 (avanzato) — Sommare una serie numerica</summary>

Calcolare $\displaystyle\sum_{n=1}^{\infty}\frac{n}{3^n}$.

**Soluzione.** Da $\sum_{n\ge1}n x^n=\frac{x}{(1-x)^2}$ (valida per $|x|<1$), pongo $x=\frac13$: $\sum_{n\ge1}\frac{n}{3^n}=\frac{1/3}{(2/3)^2}=\frac{1/3}{4/9}=\frac{9}{12}=\frac34$.

</details>

<details>
<summary>Esercizio 9 (avanzato) — Cauchy–Hadamard indispensabile</summary>

Trovare il raggio di $\sum c_n x^n$ con $c_n=2^n$ se $n$ è pari e $c_n=1$ se $n$ è dispari.

**Soluzione.** Il rapporto $|c_{n+1}/c_n|$ oscilla ($2^{n+1}/1$ oppure $1/2^n$) e non ha limite: la formula col $\lim$ non si applica. Uso Cauchy–Hadamard: $\sqrt[n]{|c_n|}$ vale $\sqrt[n]{2^n}=2$ sui pari e $\sqrt[n]{1}=1$ sui dispari, quindi $\limsup=2$ e $R=1/2$. La serie converge per $|x|<1/2$.

</details>

<details>
<summary>Esercizio 10 (applicativo) — Valore atteso di una geometrica</summary>

In probabilità, il numero di lanci di una moneta (con probabilità $p$ di testa) fino alla prima testa è una variabile geometrica con $P(N=n)=(1-p)^{n-1}p$. Il valore atteso è $E[N]=\sum_{n\ge1} n(1-p)^{n-1}p$. Calcolarlo.

**Soluzione.** Pongo $q=1-p$ (con $0\le q<1$) e riconosco la serie di potenze derivata della geometrica: $\sum_{n\ge1}n q^{n-1}=\frac{1}{(1-q)^2}$ (è la derivata di $\sum q^n=\frac{1}{1-q}$, valida per $|q|<1$). Quindi $E[N]=p\cdot\frac{1}{(1-q)^2}=p\cdot\frac{1}{p^2}=\frac1p$. Con moneta equa ($p=1/2$) servono in media $2$ lanci: risultato intuitivo, ottenuto sommando una serie di potenze in un punto.

</details>
