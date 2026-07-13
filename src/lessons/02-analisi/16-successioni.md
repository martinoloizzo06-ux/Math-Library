---
id: analisi-16-successioni
titolo: "Successioni numeriche e limiti"
materia: analisi
argomento: "Successioni e serie"
modulo: "Successioni numeriche"
livello: universitario
slug: analisi-16-successioni

# legacy
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: "Successioni numeriche e limiti"
title_en: "Numerical sequences and limits"
level: blue
order: 16
source_book: "A. Villanacci, Sequences and Series in ℝ; OpenStax Calculus Vol. 1"
source_chapter: "Successioni reali; convergenza; teorema di convergenza monotòna"

prerequisiti:
  - analisi-03-calcolo-limiti
  - analisi-04-continuita
  - analisi-05-limiti-notevoli-asintoti

collegamenti:
  - analisi-17-serie-numeriche
  - analisi-15-integrali-impropri
  - analisi-05-limiti-notevoli-asintoti
  - analisi-10-taylor

fonti_integrate:
  - id_fonte: villanacci-successioni
    ruolo: primaria
    sezioni_coperte: "Successioni reali: definizione, limitatezza e monotonìa, definizione ε–N di limite, algebra dei limiti, teorema di convergenza monotòna via estremo superiore, sottosuccessioni e Bolzano–Weierstrass, successioni di Cauchy"
    note: "appunti-prof: priorità su notazione e convenzioni d'esame; la completezza di ℝ (sup) è il motore delle dimostrazioni di convergenza"
  - id_fonte: openstax-calculus-1
    ruolo: secondaria
    sezioni_coperte: "Intuizione, esempi di calcolo di limiti di successioni, successioni notevoli e ricorsive"
    note: "struttura espositiva ed esempi introduttivi"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Completezza di ℝ, estremo superiore, principio di induzione a supporto delle dimostrazioni"
    note: "convenzioni notazionali e fondamenti dell'analisi reale"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Immagina un processo che produce un numero a ogni passo: il saldo del tuo conto a fine di ogni mese, l'approssimazione della radice di due che una calcolatrice raffina cifra dopo cifra, la popolazione di una città anno dopo anno. Ognuno di questi è una **lista infinita e ordinata di numeri** — un numero per ogni indice $1, 2, 3, \dots$ — e la domanda che conta quasi sempre non è «quanto vale il termine di posto $37$?», ma «dove sta andando la lista?». Si stabilizza verso un valore? Cresce senza freni? Oscilla per sempre?

Questa domanda — il comportamento **al limite** di una lista infinita — è il mattone su cui poggia tutto il resto del modulo, e per una ragione precisa che vale la pena anticipare. Nella prossima lezione definiremo la somma di infiniti termini, $a_1+a_2+a_3+\cdots$, e la definizione non sarà un atto di fede: sarà semplicemente il **limite della successione delle somme parziali** $s_n=a_1+\cdots+a_n$. Studiare le serie *è* studiare successioni particolari. Chi padroneggia le successioni ha già in mano metà della teoria delle serie.

C'è anche un debito da saldare. Quando in [lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri) abbiamo dimostrato la convergenza di certi integrali impropri, ci siamo appoggiati a un fatto usato «a scatola chiusa»: *una funzione monotòna e limitata ha limite finito*. Quel fatto è, nella sua forma più pura, un teorema sulle successioni — il **teorema di convergenza monotòna** — e in questa lezione lo dimostreremo per bene, a partire dalla proprietà che distingue $\mathbb{R}$ da $\mathbb{Q}$: la completezza.

Due intuizioni-guida, prima di formalizzare. La prima: «convergere a $L$» non vuol dire «raggiungere $L$» né «avvicinarsi monotonamente». Le altezze dei rimbalzi di una palla, $1, \tfrac12, \tfrac14, \tfrac18, \dots$, non toccano mai lo zero, eppure convergono a zero. La seconda: convergere è una promessa di **precisione arbitraria mantenuta definitivamente**. Fissa una tolleranza piccola quanto vuoi; se la successione converge a $L$, da un certo indice in poi *tutti* i termini restano entro quella tolleranza da $L$, e non ne escono più. È questa idea — precisione arbitraria, garantita da un certo punto in avanti — che la definizione $\varepsilon$–$N$ traduce in simboli.


## 2. Teoria

### 2.1 Che cos'è una successione

Una **successione reale** è una funzione $a:\mathbb{N}\to\mathbb{R}$. Invece di scrivere $a(n)$ si scrive $a_n$ (il **termine** di indice $n$), e la successione nel suo complesso si indica con $(a_n)_{n\ge1}$ oppure $\{a_n\}$. La differenza con una comune funzione reale è solo il dominio: qui l'ingresso è discreto, salta di intero in intero, non scorre con continuità. Questa discretezza è la ragione per cui non ha senso chiedersi la «continuità» o la «derivata» di una successione, ma ha invece perfettamente senso chiederne il limite **per $n\to+\infty$** (l'unico punto di accumulazione del dominio $\mathbb{N}$).

Una successione può essere assegnata in due modi. In forma **esplicita** si dà una formula diretta, $a_n=\frac{1}{n}$, e il termine di posto $100$ si legge subito sostituendo. In forma **ricorsiva** si dà il primo termine e una regola che costruisce il successivo dal precedente, per esempio $a_1=1,\ a_{n+1}=\sqrt{2+a_n}$: per conoscere $a_{100}$ bisogna passare per tutti i termini precedenti. La forma ricorsiva è quella naturale dei processi dinamici (interesse composto, iterazioni numeriche, modelli di crescita) ed è spesso più difficile da studiare, perché il limite non si «legge» dalla formula.

*Micro-esempio.* $a_n=\frac{n-1}{n}$ è esplicita: i termini sono $0,\tfrac12,\tfrac23,\tfrac34,\dots$ e si intuisce che salgono verso $1$. La stessa successione in forma ricorsiva richiederebbe una regola meno trasparente — segno che i due linguaggi non sono sempre intercambiabili a costo zero.

### 2.2 Limitatezza e monotonìa

Due proprietà «di forma», che non parlano ancora di limite ma saranno decisive per garantirne l'esistenza.

Una successione è **limitata superiormente** se esiste $M\in\mathbb{R}$ con $a_n\le M$ per ogni $n$; **limitata inferiormente** se esiste $m$ con $a_n\ge m$ per ogni $n$; **limitata** se lo è da entrambi i lati, cioè se esiste $K>0$ con $|a_n|\le K$ per ogni $n$. La limitatezza dice che la successione «non scappa all'infinito», ma da sola non dice dove va: $(-1)^n$ è limitata e non converge.

Una successione è **crescente** se $a_{n+1}\ge a_n$ per ogni $n$ (strettamente crescente se vale $>$), **decrescente** se $a_{n+1}\le a_n$. Una successione crescente o decrescente si dice **monotòna**. La monotonìa dice che la successione «va sempre nella stessa direzione», ma da sola nemmeno lei basta: $a_n=n$ è crescente e non converge (scappa a $+\infty$).

L'osservazione centrale — che dimostreremo in §3 — è che le due proprietà, **da sole insufficienti, insieme bastano**: una successione monotòna *e* limitata converge sempre. È il primo esempio di un fenomeno tipico dell'analisi: due vincoli parziali che, combinati, forzano un risultato forte.

*Micro-esempio.* $a_n=1-\frac1n$ è strettamente crescente ($a_{n+1}-a_n=\frac1n-\frac1{n+1}>0$) e limitata superiormente da $1$. I due ingredienti ci sono: possiamo già essere certi che converge, ancora prima di calcolare che il limite è $1$.

### 2.3 La definizione di limite ($\varepsilon$–$N$)

Ecco la traduzione formale di «precisione arbitraria mantenuta definitivamente».

> **Definizione (convergenza).** La successione $(a_n)$ **converge** al limite $L\in\mathbb{R}$ se
> $$\forall\,\varepsilon>0\ \ \exists\,N\in\mathbb{N}\ :\ \ n>N\ \Longrightarrow\ |a_n-L|<\varepsilon .$$
> Si scrive $\displaystyle\lim_{n\to\infty}a_n=L$ oppure $a_n\to L$. Una successione che converge si dice **convergente**.

Lettura pezzo per pezzo, perché ogni simbolo ha un ruolo insostituibile:

- $\forall\,\varepsilon>0$ — «per ogni tolleranza $\varepsilon$, piccola quanto si vuole». È la sfida: chi dubita sceglie $\varepsilon$.
- $\exists\,N$ — «esiste un indice-soglia $N$». È la risposta: in generale $N$ dipende da $\varepsilon$ (più stretta la tolleranza, più in là bisogna spingersi).
- $n>N\Rightarrow|a_n-L|<\varepsilon$ — «da $N$ in poi, *tutti* i termini distano da $L$ meno di $\varepsilon$». La parola chiave è *tutti*: non basta che qualche termine si avvicini, devono restarci definitivamente.

La quantità $|a_n-L|$ è la **distanza** tra il termine e il candidato limite; chiedere che sia $<\varepsilon$ significa confinare $a_n$ nell'intervallo $(L-\varepsilon,\,L+\varepsilon)$. La definizione dice allora: comunque si stringa una fascia orizzontale attorno a $L$, da un certo indice in poi la successione entra nella fascia e non ne esce più. Fuori dalla fascia possono restare al più i primi $N$ termini — un numero **finito** di eccezioni.

*Micro-esempio.* Verifichiamo con questa lente che $\frac1n\to0$. Dato $\varepsilon>0$, voglio $\big|\frac1n-0\big|=\frac1n<\varepsilon$, cioè $n>\frac1\varepsilon$. Basta scegliere $N=\lceil 1/\varepsilon\rceil$: per ogni $n>N$ la disuguaglianza è soddisfatta. La dipendenza $N\sim1/\varepsilon$ è la traduzione quantitativa di «più precisione chiedi, più in là devi andare».

Accanto alla convergenza servono i comportamenti opposti. $(a_n)$ **diverge a $+\infty$** se $\forall M>0\ \exists N:\ n>N\Rightarrow a_n>M$ (supera definitivamente ogni soglia), e analogamente **diverge a $-\infty$**. Se una successione non converge e non diverge a $\pm\infty$, si dice **irregolare** (o oscillante): è il caso di $(-1)^n$, che salta tra $-1$ e $1$ senza stabilizzarsi.

```checkpoint
[domanda]
Uno studente afferma: «La successione $a_n=(-1)^n\big(1+\frac1n\big)$ non converge, però i suoi termini si avvicinano sempre più a $1$ e a $-1$: possiamo dire che ha *due* limiti, $+1$ e $-1$?». Che cosa risponderesti, e come si concilia con la definizione $\varepsilon$–$N$?

[risposta]
No: una successione convergente ha **un solo** limite, e $a_n$ qui non converge affatto. La definizione richiede che *da un certo $N$ in poi tutti* i termini stiano entro $\varepsilon$ da **un unico** valore $L$. Prova con $L=1$ e $\varepsilon=\tfrac12$: gli infiniti termini di indice dispari valgono circa $-1$, ben fuori dalla fascia $(\tfrac12,\tfrac32)$ — quindi nessun $N$ funziona. Idem con $L=-1$. Ciò che è vero è che $+1$ e $-1$ sono i due **valori di aderenza** (limiti di sottosuccessioni: gli indici pari tendono a $1$, i dispari a $-1$). Avere due valori di aderenza distinti è esattamente ciò che *impedisce* la convergenza. La formula «un solo limite» non è un dogma: si dimostra osservando che se fosse $a_n\to L_1$ e $a_n\to L_2$ con $L_1\ne L_2$, scegliendo $\varepsilon=\frac{|L_1-L_2|}{2}$ le due fasce sarebbero disgiunte, e i termini non potrebbero stare definitivamente in entrambe.
```

### 2.4 Algebra dei limiti

Verificare ogni limite dalla definizione sarebbe estenuante. Per fortuna i limiti di successioni si combinano con le stesse regole dei limiti di funzione ([lez.03](/analisi/limiti-e-continuita/03-calcolo-limiti)), perché la struttura logica ($\varepsilon$, soglia, distanza) è identica. Se $a_n\to A$ e $b_n\to B$ (entrambi finiti), allora:

$$a_n\pm b_n\to A\pm B,\qquad a_n\,b_n\to AB,\qquad \frac{a_n}{b_n}\to\frac{A}{B}\ \ (B\ne0).$$

Queste regole trasformano il calcolo dei limiti in **algebra**: si isola il comportamento dominante e si applicano le operazioni. Restano escluse le **forme indeterminate** ($\infty-\infty$, $\frac{\infty}{\infty}$, $0\cdot\infty$, $\frac00$), dove le regole non si applicano e serve un'analisi caso per caso — di solito riscrivendo l'espressione fino a far emergere il termine che comanda.

*Micro-esempio.* Per $a_n=\frac{3n^2+n}{2n^2-1}$ la forma grezza è $\frac{\infty}{\infty}$. Divido sopra e sotto per la potenza dominante $n^2$: $a_n=\frac{3+1/n}{2-1/n^2}$. Ora numeratore e denominatore hanno limiti finiti ($3$ e $2$) grazie a $\frac1n\to0$ e $\frac1{n^2}\to0$, e l'algebra dei limiti dà $a_n\to\frac32$.

### 2.5 Il teorema di convergenza monotòna

Enunciamo qui il risultato-cardine; la dimostrazione è in §3.1 ed è tra le più istruttive del corso.

> **Teorema (convergenza monotòna).** Ogni successione **monotòna e limitata** converge. Precisamente: se $(a_n)$ è crescente e limitata superiormente, allora $a_n\to \sup_n a_n$; se è decrescente e limitata inferiormente, allora $a_n\to \inf_n a_n$.

La potenza di questo teorema è che permette di **stabilire la convergenza senza conoscere il limite**. Trovare monotonìa e limitatezza è spesso alla portata (una disuguaglianza, un'induzione); il limite, se serve, si calcola *dopo*, sfruttando il fatto che ormai sappiamo che esiste. È esattamente questa la strategia con cui in §3.3 costruiremo il numero $e$ e con cui in lez.17 (criterio integrale, [lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri)) decideremo la convergenza di intere famiglie di serie.

Un avvertimento sull'ipotesi: **entrambe** le condizioni sono indispensabili. Togli la limitatezza e $a_n=n$ (crescente) diverge; togli la monotonìa e $a_n=(-1)^n$ (limitata) oscilla. Il teorema vive nell'intersezione delle due.

### 2.6 Il teorema del confronto (dei due carabinieri)

Un secondo strumento, per stimare successioni «scomode» incastrandole tra due successioni note.

> **Teorema (confronto).** Se definitivamente $b_n\le a_n\le c_n$ e $b_n\to L$, $c_n\to L$ (**stesso** limite), allora $a_n\to L$.

L'idea geometrica è quella di due carabinieri (le successioni $b_n$ e $c_n$) che scortano il prigioniero $a_n$: se entrambi convergono allo stesso punto, il prigioniero non può che finirci anche lui. Il caso più frequente è la stima in valore assoluto: se $|a_n|\le c_n$ e $c_n\to0$, allora $a_n\to0$ (i due carabinieri sono $-c_n$ e $c_n$).

*Micro-esempio.* $a_n=\frac{\sin n}{n}$ non è né monotòna né calcolabile con l'algebra dei limiti (il numeratore oscilla in modo irregolare). Ma $|\sin n|\le1$, quindi $-\frac1n\le\frac{\sin n}{n}\le\frac1n$; i due bordi tendono a $0$, dunque $a_n\to0$. Il confronto ha aggirato del tutto l'oscillazione del numeratore.

### 2.7 Successioni notevoli

Alcune successioni ricorrono così spesso da meritare lo status di «limiti notevoli» discreti, da tenere a mente come mattoni ([lez.05](/analisi/limiti-e-continuita/05-limiti-notevoli-asintoti) per l'analogo continuo). Con $a>1$, $k>0$:

$$r^n\to\begin{cases}0 & |r|<1\\ 1 & r=1\\ \text{diverge/oscilla} & |r|\ge1,\ r\ne1\end{cases}\qquad \frac{n^k}{a^n}\to0,\qquad \frac{a^n}{n!}\to0,\qquad \frac{n!}{n^n}\to0,\qquad \sqrt[n]{a}\to1,\qquad \sqrt[n]{n}\to1.$$

Il messaggio unificante è una **gerarchia di velocità di crescita**: fattoriale $\gg$ esponenziale $\gg$ potenza $\gg$ logaritmo. Ogni volta che il rapporto tra due di questi tende a zero, sta vincendo il più veloce al denominatore. Il criterio pratico per verificarli — il **criterio del rapporto per successioni** — dice che se $\big|\frac{a_{n+1}}{a_n}\big|\to \ell<1$ allora $a_n\to0$ (perché da un certo punto la successione decresce come una geometrica di ragione $<1$).

Sopra tutte c'è la successione che definisce il numero di Nepero:

$$e_n=\Big(1+\frac1n\Big)^n\ \longrightarrow\ e\approx2{,}71828\ldots$$

Non è un limite che si «vede»: è una forma indeterminata $1^\infty$ (la base tende a $1$, l'esponente a $\infty$, e i due effetti si bilanciano). La sua esistenza va dimostrata, ed è proprio un'applicazione del teorema di convergenza monotòna: lo faremo in §3.3. Questa successione è il ponte diretto verso l'interesse composto continuo e, tramite $\big(1+\frac xn\big)^n\to e^x$, verso tutta la famiglia esponenziale.

```checkpoint
[domanda]
Metti in ordine di velocità di crescita, dalla più lenta alla più rapida, le successioni $n^{10}$, $2^n$, $n!$, $\ln n$. Poi, senza calcoli lunghi, di' a quanto tende $\dfrac{n!}{2^n\,n^{10}}$.

[risposta]
Ordine crescente di velocità: $\ln n\ \ll\ n^{10}\ \ll\ 2^n\ \ll\ n!$ (logaritmo, poi potenza, poi esponenziale, poi fattoriale). Per il rapporto: al denominatore c'è $2^n\,n^{10}$, prodotto di un esponenziale e di una potenza, entrambi **battuti** dal fattoriale al numeratore. Quindi $\dfrac{n!}{2^n\,n^{10}}\to+\infty$. In una gara di crescita vince il fattoriale, e vince «alla grande»: nessuna potenza né esponenziale al denominatore riesce a tenerne il passo.
```

### 2.8 Sottosuccessioni, Bolzano–Weierstrass, Cauchy (cenni)

Tre nozioni che chiudono il quadro teorico e torneranno utili nelle serie e nell'analisi più avanzata.

Una **sottosuccessione** di $(a_n)$ si ottiene selezionando un sottoinsieme infinito di indici in ordine crescente, $n_1<n_2<n_3<\cdots$, e leggendo solo quei termini: $(a_{n_k})_k$. Il fatto-chiave è che *se $a_n\to L$, allora ogni sottosuccessione tende allo stesso $L$*. Il contrappositivo è uno strumento potente per dimostrare la **non** convergenza: se due sottosuccessioni tendono a limiti diversi, la successione non converge (è il meccanismo dietro l'irregolarità di $(-1)^n$).

Il **teorema di Bolzano–Weierstrass** afferma che *ogni successione limitata ammette almeno una sottosuccessione convergente*. È un teorema di esistenza tipicamente «non costruttivo» — garantisce che una scorciatoia convergente c'è, senza dire quale — e riposa, ancora una volta, sulla completezza di $\mathbb{R}$.

Infine, una successione è di **Cauchy** se i suoi termini diventano definitivamente vicini *tra loro*: $\forall\varepsilon>0\ \exists N:\ m,n>N\Rightarrow|a_n-a_m|<\varepsilon$. Il **criterio di Cauchy** stabilisce che in $\mathbb{R}$ una successione converge se e solo se è di Cauchy. Il suo pregio è che permette di certificare la convergenza *senza nominare il limite* — decisivo quando il limite è un oggetto nuovo che non sappiamo ancora scrivere. Attenzione: «i termini si avvicinano tra loro» va inteso nel senso forte di Cauchy (tutte le coppie oltre $N$), non nel senso debole $|a_{n+1}-a_n|\to0$, che **non** basta (la successione $a_n=\sqrt n$ ha differenze consecutive infinitesime ma diverge).


## 3. Dimostrazioni

### 3.1 Teorema di convergenza monotòna

**Enunciato.** Se $(a_n)$ è crescente e limitata superiormente, allora converge e $\displaystyle\lim_n a_n=\sup_n a_n$.

**Perché serve la completezza.** L'intero teorema dipende dalla proprietà che caratterizza $\mathbb{R}$: *ogni sottoinsieme non vuoto e limitato superiormente ammette estremo superiore (sup) in $\mathbb{R}$*. In $\mathbb{Q}$ questo è falso — le approssimazioni razionali di $\sqrt2$ formano una successione crescente e limitata *priva di limite razionale* — ed è esattamente ciò che rende $\mathbb{R}$ il terreno giusto per l'analisi.

**Dimostrazione.** Consideriamo l'insieme dei valori $A=\{a_n:n\in\mathbb{N}\}$. È non vuoto e, per ipotesi, limitato superiormente. Per la completezza esiste dunque
$$L=\sup_n a_n\in\mathbb{R}.$$
Dimostriamo che $a_n\to L$ tornando alla definizione $\varepsilon$–$N$. Fissiamo $\varepsilon>0$.

*Passo 1 — esiste un termine oltre $L-\varepsilon$.* Poiché $L$ è il **minimo** dei maggioranti, il numero $L-\varepsilon$ (che è più piccolo di $L$) **non** è un maggiorante di $A$. Esiste quindi un indice $N$ con
$$a_N>L-\varepsilon.$$
Questo passo è il cuore: usa la definizione di sup come *minimo* dei maggioranti, non semplicemente come un maggiorante qualsiasi.

*Passo 2 — la monotonìa propaga la stima a tutti gli indici successivi.* Per ogni $n>N$, la successione è crescente, quindi $a_n\ge a_N$; e $L$ è un maggiorante, quindi $a_n\le L$. Combinando:
$$L-\varepsilon< a_N\le a_n\le L< L+\varepsilon.$$

*Passo 3 — conclusione.* Da $L-\varepsilon<a_n\le L$ segue $|a_n-L|<\varepsilon$ per ogni $n>N$. Abbiamo esibito, per un $\varepsilon>0$ arbitrario, un indice-soglia $N$ oltre il quale la definizione è soddisfatta: dunque $a_n\to L$. $\blacksquare$

Il caso decrescente è speculare, con $\inf$ al posto di $\sup$: basta applicare quanto dimostrato alla successione $(-a_n)$, che è crescente e limitata superiormente.

<details class="dim-tecnica">
<summary>Perché $L-\varepsilon$ non è un maggiorante (dettaglio sul sup)</summary>

Ricordiamo la definizione: $L=\sup A$ significa (i) $L$ è un maggiorante di $A$, cioè $a\le L$ per ogni $a\in A$; (ii) $L$ è il *più piccolo* dei maggioranti, cioè nessun numero $<L$ è maggiorante. Ora $L-\varepsilon<L$, quindi per (ii) $L-\varepsilon$ non può essere un maggiorante. Negare «$L-\varepsilon$ è maggiorante» significa: esiste almeno un elemento di $A$ che lo supera, cioè esiste $a_N\in A$ con $a_N>L-\varepsilon$. Questa è proprio la «proprietà di approssimazione» del sup: si può sempre trovare un elemento dell'insieme arbitrariamente vicino al sup (entro qualunque $\varepsilon$). Senza la completezza il sup potrebbe non esistere in $\mathbb{R}$, e tutta la catena crollerebbe.

</details>

### 3.2 Verifica di un limite dalla definizione

Per non lasciare la definizione $\varepsilon$–$N$ sul piano puramente formale, mostriamo un uso «con le mani»: dimostrare che $\displaystyle\lim_{n\to\infty}\frac{2n+1}{n+3}=2$.

Fissato $\varepsilon>0$, valutiamo la distanza dal candidato limite $L=2$:
$$\Big|\frac{2n+1}{n+3}-2\Big|=\Big|\frac{2n+1-2(n+3)}{n+3}\Big|=\Big|\frac{-5}{n+3}\Big|=\frac{5}{n+3}.$$
Vogliamo $\frac{5}{n+3}<\varepsilon$, che equivale a $n+3>\frac5\varepsilon$, cioè $n>\frac5\varepsilon-3$. Basta allora scegliere come soglia $N=\big\lceil \tfrac5\varepsilon\big\rceil$ (un intero $\ge \frac5\varepsilon-3$): per ogni $n>N$ si ha $\frac{5}{n+3}<\varepsilon$, e quindi $\big|\frac{2n+1}{n+3}-2\big|<\varepsilon$.

Abbiamo prodotto, a partire da un $\varepsilon$ arbitrario, un $N$ esplicito che «funziona»: questo *è* la dimostrazione che il limite vale $2$. Nota il metodo generale, valido quasi sempre: si calcola la distanza $|a_n-L|$, la si maggiora con una quantità semplice che tende a $0$, e da quella si ricava la soglia $N$.

### 3.3 La successione $(1+1/n)^n$ converge, e definisce $e$

**Obiettivo.** Mostrare che $e_n=\big(1+\frac1n\big)^n$ è crescente e limitata superiormente; per il teorema di convergenza monotòna (§3.1) essa converge, e il suo limite si *chiama* $e$.

*Crescente.* Sviluppiamo $e_n$ con il binomio di Newton:
$$e_n=\sum_{k=0}^{n}\binom nk\frac1{n^k}=\sum_{k=0}^{n}\frac{1}{k!}\cdot\frac{n(n-1)\cdots(n-k+1)}{n^k}=\sum_{k=0}^{n}\frac{1}{k!}\prod_{j=1}^{k-1}\Big(1-\frac jn\Big).$$
Passando da $n$ a $n+1$ accadono due cose che fanno *aumentare* la somma: (a) compare un addendo in più (il termine $k=n+1$, positivo); (b) ciascun fattore $\big(1-\frac jn\big)$ diventa $\big(1-\frac{j}{n+1}\big)$, che è **più grande** (si sottrae di meno). Ogni addendo cresce e se ne aggiunge uno: dunque $e_{n+1}>e_n$. La successione è strettamente crescente.

*Limitata superiormente.* Nella stessa espressione ogni prodotto $\prod\big(1-\frac jn\big)$ è $\le1$ (fattori tra $0$ e $1$), quindi
$$e_n\le\sum_{k=0}^{n}\frac{1}{k!}.$$
Maggioriamo i fattoriali: per $k\ge2$ si ha $k!=1\cdot2\cdot3\cdots k\ge 2^{k-1}$, quindi $\frac1{k!}\le\frac1{2^{k-1}}$. Allora
$$e_n\le 1+\sum_{k=1}^{n}\frac{1}{2^{k-1}}=1+\Big(1+\tfrac12+\tfrac14+\cdots+\tfrac1{2^{n-1}}\Big)<1+2=3,$$
dove abbiamo usato che la somma geometrica $\sum_{k\ge1}2^{-(k-1)}=2$ (un risultato che formalizzeremo in lez.17). Dunque $e_n<3$ per ogni $n$: la successione è limitata superiormente.

*Conclusione.* Crescente e limitata superiormente $\Rightarrow$ per §3.1 converge. Il suo limite, compreso tra $e_1=2$ e $3$, è per **definizione** il numero di Nepero:
$$e:=\lim_{n\to\infty}\Big(1+\frac1n\Big)^n\approx2{,}71828.$$
Osserva la struttura dell'argomento: non abbiamo mai «calcolato» il limite: abbiamo garantito che *esiste* con monotonìa+limitatezza, e poi gli abbiamo dato un nome. È il modo tipico in cui l'analisi introduce costanti fondamentali.


## 4. Esempi

**Esempio 1 (algebra dei limiti, introduttivo).** Calcolare $\displaystyle\lim_{n\to\infty}\frac{5n^3-2n+1}{3n^3+n^2}$.
Forma $\frac{\infty}{\infty}$; divido per la potenza dominante $n^3$:
$$\frac{5-2/n^2+1/n^3}{3+1/n}\ \xrightarrow{n\to\infty}\ \frac{5-0+0}{3+0}=\frac53.$$
*Strategia da ricordare:* in un rapporto di polinomi in $n$, comanda il rapporto dei termini di grado massimo.

**Esempio 2 (criterio del rapporto, esponenziale vs fattoriale).** Studiare $a_n=\frac{2^n}{n!}$.
$$\frac{a_{n+1}}{a_n}=\frac{2^{n+1}/(n+1)!}{2^n/n!}=\frac{2}{n+1}\ \to\ 0<1,$$
quindi $a_n\to0$: definitivamente la successione si riduce come una geometrica di ragione $<1$. Conferma la gerarchia: il fattoriale batte l'esponenziale.

**Esempio 3 (confronto/carabinieri).** Calcolare $\displaystyle\lim_{n\to\infty}\frac{\cos(n^2)}{n+1}$.
Il numeratore oscilla, ma $|\cos(n^2)|\le1$, quindi $\big|\frac{\cos(n^2)}{n+1}\big|\le\frac1{n+1}\to0$. Per il confronto in valore assoluto, il limite è $0$. *Errore da evitare:* non serve (e non si può) calcolare $\lim\cos(n^2)$ — l'oscillazione va **incapsulata**, non risolta.

**Esempio 4 (potenza vs esponenziale).** Studiare $a_n=\frac{n^{3}}{3^{n}}$.
$\frac{a_{n+1}}{a_n}=\frac{(n+1)^3}{3^{n+1}}\cdot\frac{3^n}{n^3}=\frac13\big(\tfrac{n+1}{n}\big)^3\to\frac13<1$, dunque $a_n\to0$. L'esponenziale $3^n$ vince su qualunque potenza $n^3$.

**Esempio 5 (successione ricorsiva, uso pieno del teorema).** Sia $a_1=1$, $a_{n+1}=\sqrt{2+a_n}$. Studiare la convergenza e trovare il limite.
*Limitata superiormente ($a_n<2$), per induzione.* Base: $a_1=1<2$. Passo: se $a_n<2$ allora $a_{n+1}=\sqrt{2+a_n}<\sqrt{2+2}=2$.
*Crescente, per induzione.* Base: $a_2=\sqrt3>1=a_1$. Passo: se $a_{n+1}>a_n$ allora $a_{n+2}=\sqrt{2+a_{n+1}}>\sqrt{2+a_n}=a_{n+1}$.
Monotòna e limitata $\Rightarrow$ converge (§2.5): esiste $L=\lim a_n$. Solo *ora*, sapendo che $L$ esiste, passo al limite nella ricorsione (la radice è continua, [lez.04](/analisi/limiti-e-continuita/04-continuita)): $L=\sqrt{2+L}\Rightarrow L^2-L-2=0\Rightarrow(L-2)(L+1)=0$. Poiché i termini sono positivi, $L=2$.
*Errore da evitare:* scrivere «$L=\sqrt{2+L}$» **prima** di aver garantito che il limite esiste è illegittimo — l'equazione avrebbe senso solo se il limite c'è.

**Esempio 6 (limite notevole esponenziale generalizzato).** Calcolare $\displaystyle\lim_{n\to\infty}\big(1+\frac xn\big)^n$ per $x\in\mathbb{R}$ fissato.
Riscrivo, con $m=n/x\to\infty$ (per $x\ne0$): $\big(1+\frac xn\big)^n=\Big[\big(1+\frac1m\big)^{m}\Big]^{x}\to e^{x}$. Per $x=0$ la successione è costante $=1=e^0$. Dunque per ogni $x$: $\big(1+\frac xn\big)^n\to e^{x}$. È il ponte tra la successione di §3.3 e l'intera famiglia esponenziale.

**Esempio 7 (radice $n$-esima).** Calcolare $\displaystyle\lim_{n\to\infty}\sqrt[n]{n^2+n}$.
Incastro tra due potenze: per $n\ge1$, $n^2\le n^2+n\le 2n^2\le n^3$ (l'ultima per $n\ge2$), quindi $\sqrt[n]{n^2}\le\sqrt[n]{n^2+n}\le\sqrt[n]{n^3}$, cioè $(\sqrt[n]{n})^2\le\cdot\le(\sqrt[n]{n})^3$. Poiché $\sqrt[n]{n}\to1$ (successione notevole), entrambi i bordi tendono a $1$; per confronto il limite è $1$.

**Esempio 8 (rapporto di Fibonacci → sezione aurea, applicativo).** Nella successione di Fibonacci $F_1=F_2=1$, $F_{n+1}=F_n+F_{n-1}$, studiare $r_n=\frac{F_{n+1}}{F_n}$.
Ammesso che $L=\lim r_n$ esista (si dimostra che $(r_n)$ ha sottosuccessioni monotòne convergenti allo stesso valore), divido la ricorsione per $F_n$: $r_n=1+\frac{F_{n-1}}{F_n}=1+\frac1{r_{n-1}}$. Al limite: $L=1+\frac1L\Rightarrow L^2-L-1=0\Rightarrow L=\frac{1+\sqrt5}{2}=\varphi\approx1{,}618$, la **sezione aurea**. Un limite ricorsivo che produce una delle costanti più celebri della matematica.


## 5. Collegamenti e riepilogo

**Dove porta questa lezione.** Il collegamento più immediato è alla prossima: in [Serie numeriche](/analisi/successioni-e-serie/17-serie-numeriche) la somma di infiniti termini sarà *definita* come limite della successione delle somme parziali, e il teorema di convergenza monotòna di §3.1 diventerà il motore per decidere la convergenza delle serie a termini positivi (le somme parziali sono crescenti: basta la limitatezza). La successione $(1+\frac1n)^n$ e la gerarchia di crescita di §2.7 ritorneranno nei criteri del rapporto e della radice per le serie.

**Legami trasversali.** In **finanza**, il capitale con interesse composto $m$ volte l'anno al tasso $r$ è $C(1+\frac rm)^m$, che per $m\to\infty$ tende all'interesse continuo $Ce^{r}$: la costante $e$ nasce da un problema economico concreto. In **analisi numerica**, ogni metodo iterativo (Newton, punto fisso) genera una successione ricorsiva la cui convergenza — e la cui *velocità* di convergenza — decide l'efficacia dell'algoritmo; l'Esempio 5 è il prototipo. In **probabilità**, la legge dei grandi numeri afferma la convergenza (in senso opportuno) della successione delle medie campionarie. Il legame con [lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri) è concettuale ma stretto: il criterio integrale per le serie farà dialogare somme discrete e integrali impropri, due facce dello stesso «infinito controllato».

**Idee-chiave da portare via.** Una successione è una funzione su $\mathbb{N}$; convergere a $L$ significa *precisione arbitraria mantenuta definitivamente* ($\varepsilon$–$N$). Monotonìa e limitatezza sono singolarmente insufficienti ma **insieme** garantiscono la convergenza (teorema di convergenza monotòna, radicato nella completezza di $\mathbb{R}$). Il confronto incapsula le successioni oscillanti; l'algebra dei limiti gestisce le forme non indeterminate; la gerarchia fattoriale $\gg$ esponenziale $\gg$ potenza $\gg$ logaritmo risolve la maggior parte dei limiti «di rapporto».

**Formule e fatti chiave.**

| Concetto | Enunciato/criterio | Esempio |
|---|---|---|
| Convergenza ($\varepsilon$–$N$) | $\forall\varepsilon>0\,\exists N:\ n>N\Rightarrow|a_n-L|<\varepsilon$ | $\frac1n\to0$ |
| Divergenza a $+\infty$ | $\forall M>0\,\exists N:\ n>N\Rightarrow a_n>M$ | $n^2\to+\infty$ |
| Irregolare | non converge né diverge a $\pm\infty$ | $(-1)^n$ |
| Convergenza monotòna | monotòna + limitata $\Rightarrow$ converge (a $\sup$/$\inf$) | $(1+\frac1n)^n\to e$ |
| Confronto (carabinieri) | $b_n\le a_n\le c_n,\ b_n,c_n\to L\Rightarrow a_n\to L$ | $\frac{\sin n}{n}\to0$ |
| Rapporto (successioni) | $\big|\frac{a_{n+1}}{a_n}\big|\to\ell<1\Rightarrow a_n\to0$ | $\frac{2^n}{n!}\to0$ |
| Gerarchia di crescita | $n!\gg a^n\gg n^k\gg\ln n$ | $\frac{n^k}{a^n}\to0$ |
| Limite notevole | $(1+\frac xn)^n\to e^{x}$ | $x=1$: $e$ |

### Slider — la definizione $\varepsilon$–$N$ resa manipolabile

Muovi la soglia $\varepsilon$ e osserva: la successione $a_n=1+\frac{\sin n}{n}$ (che converge a $1$) entra definitivamente nella fascia $(1-\varepsilon,\,1+\varepsilon)$. Quanto più stringi $\varepsilon$, tanto più in là si sposta l'indice $N$ da cui in poi tutti i termini restano dentro — mai il contrario. È l'esperienza visiva di «esiste sempre un $N$, per quanto piccolo sia $\varepsilon$».

```slider
{"title":"Definizione ε–N: la fascia attorno a L=1 e la successione 1+sin(n)/n","fn":"1+Math.sin(x)/x","fn2":"1+a","domain":[1,60],"yDomain":[0,2],"pname":"a","pmin":0.02,"pmax":0.6,"pdefault":0.3,"pstep":0.02,"plabel":"ε","label1":"aₙ = 1+sin(n)/n","label2":"bordo L+ε"}
```


## 6. Esercizi

<details>
<summary>Esercizio 1 (introduttivo) — Limite di un rapporto polinomiale</summary>

Calcolare $\displaystyle\lim_{n\to\infty}\frac{4n^2-3n}{2n^2+n+7}$.

**Soluzione.** Divido numeratore e denominatore per $n^2$: $\dfrac{4-3/n}{2+1/n+7/n^2}\to\dfrac{4}{2}=2$. Comanda il rapporto dei termini di grado massimo.

</details>

<details>
<summary>Esercizio 2 (introduttivo) — Verifica dalla definizione</summary>

Dimostrare, dalla definizione $\varepsilon$–$N$, che $\displaystyle\lim_{n\to\infty}\frac{3n}{n+2}=3$.

**Soluzione.** $\big|\frac{3n}{n+2}-3\big|=\big|\frac{3n-3n-6}{n+2}\big|=\frac{6}{n+2}$. Voglio $\frac{6}{n+2}<\varepsilon\iff n>\frac6\varepsilon-2$. Scelgo $N=\lceil 6/\varepsilon\rceil$: per $n>N$ la disuguaglianza vale, quindi il limite è $3$.

</details>

<details>
<summary>Esercizio 3 (standard) — Criterio del rapporto</summary>

Studiare il comportamento di $a_n=\dfrac{3^n}{n!}$.

**Soluzione.** $\dfrac{a_{n+1}}{a_n}=\dfrac{3^{n+1}}{(n+1)!}\cdot\dfrac{n!}{3^n}=\dfrac{3}{n+1}\to0<1$, quindi $a_n\to0$. Il fattoriale batte l'esponenziale.

</details>

<details>
<summary>Esercizio 4 (standard) — Carabinieri con segno alternante</summary>

Dimostrare che $\displaystyle\lim_{n\to\infty}\frac{(-1)^n\,n}{n^2+1}=0$.

**Soluzione.** $\Big|\frac{(-1)^n n}{n^2+1}\Big|=\frac{n}{n^2+1}\le\frac{n}{n^2}=\frac1n\to0$. Poiché $-\frac1n\le\frac{(-1)^n n}{n^2+1}\le\frac1n$ con bordi $\to0$, per confronto il limite è $0$.

</details>

<details>
<summary>Esercizio 5 (standard) — Successione ricorsiva</summary>

Sia $a_1=2$, $a_{n+1}=\frac12\big(a_n+\frac4{a_n}\big)$. Dimostrare che converge e trovare il limite.

**Soluzione.** *Limitata inferiormente:* per la disuguaglianza tra media aritmetica e geometrica, $a_{n+1}=\frac{a_n+4/a_n}{2}\ge\sqrt{a_n\cdot\frac4{a_n}}=2$, quindi $a_n\ge2$ per ogni $n\ge2$. *Decrescente:* $a_{n+1}-a_n=\frac{4/a_n-a_n}{2}=\frac{4-a_n^2}{2a_n}\le0$ poiché $a_n\ge2$. Monotòna e limitata $\Rightarrow$ converge; al limite $L=\frac12(L+\frac4L)\Rightarrow L^2=4\Rightarrow L=2$ (positivo). È l'iterazione di Erone per $\sqrt4$.

</details>

<details>
<summary>Esercizio 6 (standard) — Limite notevole con $e$</summary>

Calcolare $\displaystyle\lim_{n\to\infty}\big(1-\frac3n\big)^n$.

**Soluzione.** Con $x=-3$ nel limite notevole $(1+\frac xn)^n\to e^x$: $\big(1-\frac3n\big)^n=\big(1+\frac{-3}{n}\big)^n\to e^{-3}=\frac1{e^3}$.

</details>

<details>
<summary>Esercizio 7 (standard) — Radice $n$-esima</summary>

Calcolare $\displaystyle\lim_{n\to\infty}\sqrt[n]{3^n+5^n}$.

**Soluzione.** Metto in evidenza la base più grande: $3^n+5^n=5^n\big(1+(3/5)^n\big)$, quindi $\sqrt[n]{3^n+5^n}=5\cdot\sqrt[n]{1+(3/5)^n}$. Poiché $(3/5)^n\to0$, l'argomento della radice tende a $1$ e $\sqrt[n]{\text{qualcosa}\to1}\to1$; dunque il limite è $5$. In generale $\sqrt[n]{a^n+b^n}\to\max(a,b)$ per $a,b>0$.

</details>

<details>
<summary>Esercizio 8 (avanzato) — Successione irregolare</summary>

La successione $a_n=(-1)^n\cdot\frac{n}{n+1}$ converge, diverge o è irregolare? Motivare con le sottosuccessioni.

**Soluzione.** $|a_n|=\frac{n}{n+1}\to1$. La sottosuccessione degli indici pari $a_{2k}=\frac{2k}{2k+1}\to1$; quella degli indici dispari $a_{2k+1}=-\frac{2k+1}{2k+2}\to-1$. Due sottosuccessioni con limiti diversi $\Rightarrow$ la successione **non** converge; poiché resta limitata (non va a $\pm\infty$), è **irregolare**.

</details>

<details>
<summary>Esercizio 9 (avanzato) — Media di Cesàro</summary>

Sia $a_n\to L$. Dimostrare che anche la successione delle medie $m_n=\frac{a_1+a_2+\cdots+a_n}{n}$ tende a $L$.

**Soluzione.** Fissato $\varepsilon>0$, sia $N_0$ tale che $|a_k-L|<\frac\varepsilon2$ per $k>N_0$. Scrivo $m_n-L=\frac1n\sum_{k=1}^n(a_k-L)$ e spezzo: $|m_n-L|\le\frac1n\sum_{k=1}^{N_0}|a_k-L|+\frac1n\sum_{k=N_0+1}^{n}|a_k-L|$. Il secondo pezzo è $<\frac{n-N_0}{n}\cdot\frac\varepsilon2\le\frac\varepsilon2$. Il primo pezzo ha numeratore *costante* (dipende solo dai primi $N_0$ termini), quindi $\to0$: esiste $N_1$ oltre il quale è $<\frac\varepsilon2$. Per $n>\max(N_0,N_1)$: $|m_n-L|<\varepsilon$. Dunque $m_n\to L$. (Il viceversa è falso: $a_n=(-1)^n$ ha medie $\to0$ ma non converge — un motivo per cui le medie «regolarizzano».)

</details>

<details>
<summary>Esercizio 10 (applicativo) — Interesse composto e il numero $e$</summary>

Una banca offre un tasso annuo nominale del $100\%$, capitalizzato $n$ volte l'anno. Partendo da $1$ euro, quanto si ha a fine anno per $n=1,2,12,365$? E al tendere di $n\to\infty$?

**Soluzione.** Il montante è $M_n=\big(1+\frac1n\big)^n$. Numericamente: $n=1\to2$; $n=2\to2{,}25$; $n=12\to\approx2{,}613$; $n=365\to\approx2{,}7146$. Per $n\to\infty$ (capitalizzazione continua) il montante tende a $e\approx2{,}71828$: aumentare la frequenza di capitalizzazione porta un vantaggio, ma **limitato** — non si va all'infinito, ci si ferma a $e$. È la manifestazione economica della successione di §3.3.

</details>
