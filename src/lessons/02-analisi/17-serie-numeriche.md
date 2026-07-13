---
id: analisi-17-serie-numeriche
titolo: "Serie numeriche e criteri di convergenza"
materia: analisi
argomento: "Successioni e serie"
modulo: "Serie numeriche"
livello: universitario
slug: analisi-17-serie-numeriche

# legacy
subject: analisi
topic_it: Successioni e serie
topic_en: Sequences and series
title_it: "Serie numeriche e criteri di convergenza"
title_en: "Numerical series and convergence criteria"
level: blue
order: 17
source_book: "A. Villanacci, Sequences and Series in ℝ; OpenStax Calculus Vol. 1"
source_chapter: "Serie numeriche; criteri di convergenza; serie a segni alterni"

prerequisiti:
  - analisi-16-successioni
  - analisi-05-limiti-notevoli-asintoti
  - analisi-15-integrali-impropri

collegamenti:
  - analisi-16-successioni
  - analisi-15-integrali-impropri
  - analisi-13-tecniche-integrazione
  - analisi-18-serie-potenze

fonti_integrate:
  - id_fonte: villanacci-successioni
    ruolo: primaria
    sezioni_coperte: "Serie numeriche: somme parziali, convergenza, serie geometrica, condizione necessaria, criteri per serie a termini positivi (confronto, confronto asintotico, rapporto, radice, integrale), serie campione, serie a segni alterni e criterio di Leibniz, convergenza assoluta e semplice"
    note: "appunti-prof: priorità su notazione e convenzioni d'esame; le somme parziali come successione e la completezza di ℝ come motore della convergenza"
  - id_fonte: openstax-calculus-1
    ruolo: secondaria
    sezioni_coperte: "Intuizione (Zenone), esempi di applicazione dei criteri, criterio integrale in forma geometrica"
    note: "struttura espositiva ed esempi; la trattazione delle serie sta in OpenStax Vol.2 (non in catalogo) — qui integrata da villanacci-successioni (opzione A del curriculum)"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Completezza di ℝ, monotonìa e limitatezza a supporto delle dimostrazioni di convergenza"
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

Si possono sommare infiniti numeri e ottenere un risultato **finito**? L'istinto dice di no — aggiungere sempre qualcosa dovrebbe portare all'infinito — eppure l'esperienza quotidiana lo smentisce. Cammini verso una porta e ogni volta copri **metà** della distanza che ti resta: i tratti percorsi sono $\tfrac12,\tfrac14,\tfrac18,\dots$, infiniti passi, ma la distanza totale è esattamente $1$. È il paradosso di Zenone, e la matematica lo scioglie osservando che $\tfrac12+\tfrac14+\tfrac18+\cdots=1$: una somma di infiniti addendi *positivi* che vale un numero finito.

Ma non tutte le somme infinite si comportano così bene. La **serie armonica** $1+\tfrac12+\tfrac13+\tfrac14+\cdots$ cresce senza limite — lentissimamente, ma inesorabilmente — pur avendo termini che tendono a zero. Qui sta il cuore concettuale del capitolo: *il fatto che gli addendi diventino piccoli non garantisce affatto che la loro somma sia finita*. Distinguere i due casi — quando la somma converge e quando esplode — è precisamente il mestiere di questa lezione.

L'idea tecnica che rende tutto rigoroso è già nelle nostre mani, e viene dalla lezione precedente. Non definiamo la «somma infinita» per magia: la definiamo come il **limite della successione delle somme parziali**. Sommo i primi $N$ termini, ottengo un numero $s_N$; questi numeri formano una successione $(s_N)$; se questa successione converge (nel senso $\varepsilon$–$N$ di [lez.16](/analisi/successioni-e-serie/16-successioni)), diciamo che la serie converge, e chiamiamo il suo limite «la somma». Studiare le serie *è* studiare una particolare successione — quella delle somme parziali. Tutto l'arsenale di [lez.16](/analisi/successioni-e-serie/16-successioni) (teorema di convergenza monotòna, confronto, gerarchia di crescita) si riversa qui.

C'è infine un ponte che vale la pena tenere d'occhio fin dall'inizio: **serie e integrali impropri sono due modi di controllare lo stesso infinito**. In [lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri) abbiamo chiesto quando $\int_1^{+\infty}f$ è finito; qui chiediamo quando $\sum a_n$ è finito. Il *criterio integrale* (§2.5, §3.2) farà dialogare le due domande in modo esplicito, e la **serie campione** $\sum 1/n^p$ avrà la stessa soglia $p=1$ dell'**integrale campione** — non per coincidenza, ma perché somma discreta e area continua misurano lo stesso decadimento.


## 2. Teoria

### 2.1 Serie come limite delle somme parziali

Data una successione $(a_n)_{n\ge1}$, chiamiamo **serie** di termine generale $a_n$ l'oggetto
$$\sum_{n=1}^{\infty} a_n = a_1+a_2+a_3+\cdots$$
Questa scrittura, presa alla lettera, è solo un'intenzione: non abbiamo ancora detto *che cosa significhi* sommare infiniti termini. Il significato lo dà la **successione delle somme parziali**:
$$s_N=\sum_{n=1}^{N}a_n=a_1+a_2+\cdots+a_N.$$
Ogni $s_N$ è una somma *finita*, quindi perfettamente definita. La serie è, per definizione, il comportamento al limite di questa successione:

> **Definizione.** La serie $\sum a_n$ **converge** (con somma $S$) se la successione delle somme parziali converge: $\displaystyle\lim_{N\to\infty}s_N=S\in\mathbb{R}$. Si scrive allora $\sum_{n=1}^\infty a_n=S$. La serie **diverge** se $s_N\to\pm\infty$, ed è **irregolare** (oscillante) se $(s_N)$ non ha limite.

Il messaggio da interiorizzare: **la serie non è una nuova entità misteriosa, è una successione travestita**. Ogni domanda sulle serie si ritraduce in una domanda sulla successione $(s_N)$, e per quella abbiamo già la teoria di [lez.16](/analisi/successioni-e-serie/16-successioni).

*Micro-esempio.* Per la serie $\sum_{n\ge1}\big(\tfrac12\big)^n$, la somma parziale è $s_N=\tfrac12+\tfrac14+\cdots+\tfrac1{2^N}=1-\tfrac1{2^N}$ (somma geometrica finita). La successione $s_N=1-2^{-N}$ tende a $1$: la serie converge e la sua somma è $1$. Il paradosso di Zenone è risolto in una riga.

Un'osservazione strutturale utile: **cambiare, togliere o aggiungere un numero finito di termini non altera il carattere** (convergente/divergente) di una serie — sposta al più il valore della somma, non la sua esistenza. Il carattere dipende solo dalla «coda» $a_N,a_{N+1},\dots$.

### 2.2 La serie geometrica e le serie telescopiche

Due famiglie che si sommano *esattamente*, e che useremo come metro di paragone per tutto il resto.

La **serie geometrica** $\sum_{n=0}^\infty r^n$ è l'esempio-madre. Come dimostreremo in §3.1,
$$\sum_{n=0}^{\infty} r^n=\frac{1}{1-r}\quad\text{se } |r|<1,\qquad\text{diverge se } |r|\ge1.$$
La ragione $r$ è il «fattore di decadimento»: se $|r|<1$ i termini si smorzano abbastanza in fretta da lasciare somma finita; se $|r|\ge1$ non si smorzano affatto e la somma esplode. Questa serie è il seme di tutta la teoria: molti criteri (rapporto, radice) funzionano proprio perché *confrontano* una serie data con una geometrica.

Le **serie telescopiche** sono quelle in cui $a_n=b_n-b_{n+1}$: nella somma parziale i termini interni si cancellano a catena, e $s_N=b_1-b_{N+1}$. La convergenza si riduce allora a quella della successione $(b_{N+1})$.

*Micro-esempio.* $\sum_{n\ge1}\frac{1}{n(n+1)}$. Con le frazioni parziali ([lez.13](/analisi/calcolo-integrale-una-variabile/13-tecniche-integrazione)), $\frac{1}{n(n+1)}=\frac1n-\frac1{n+1}$, quindi $s_N=\big(1-\tfrac12\big)+\big(\tfrac12-\tfrac13\big)+\cdots+\big(\tfrac1N-\tfrac1{N+1}\big)=1-\tfrac1{N+1}\to1$. La serie vale esattamente $1$.

### 2.3 La condizione necessaria (e la sua insufficienza)

C'è un unico controllo che si fa *sempre per primo*, perché è a costo zero e può chiudere la questione subito.

> **Condizione necessaria.** Se $\sum a_n$ converge, allora $a_n\to0$.

La ragione è breve: se $s_N\to S$, allora anche $s_{N-1}\to S$, e $a_N=s_N-s_{N-1}\to S-S=0$. In pratica si usa nella forma **contrapposta**, come test di divergenza: *se $a_n\not\to0$, la serie diverge* (le somme parziali non possono stabilizzarsi se continuo ad aggiungere quantità che non svaniscono).

Il punto delicato — e la trappola più diffusa dell'intero capitolo — è che **la condizione è necessaria ma non sufficiente**: $a_n\to0$ *non* garantisce la convergenza. Il controesempio è la serie armonica $\sum\frac1n$: i termini $\frac1n$ tendono a zero, eppure la serie diverge (lo dimostriamo in §3.3). Tenere separate le due implicazioni — «converge $\Rightarrow a_n\to0$» è vera, «$a_n\to0\Rightarrow$ converge» è **falsa** — è forse la singola cosa più importante da portare a casa.

```checkpoint
[domanda]
Uno studente scrive: «La serie $\displaystyle\sum_{n=1}^{\infty}\frac{1}{\sqrt{n}}$ ha termini $\frac{1}{\sqrt n}\to0$, quindi converge». E per $\displaystyle\sum_{n=1}^{\infty}\frac{n}{n+1}$ scrive: «i termini tendono a $1$, non a $0$, ma sono comunque limitati, quindi la serie converge lentamente». Entrambe le conclusioni sono sbagliate: perché?

[risposta]
Sono sbagliate per motivi opposti, e insieme illustrano che la condizione $a_n\to0$ va usata con precisione. Per $\sum\frac{n}{n+1}$: il termine generale tende a $1\ne0$, quindi la **condizione necessaria è violata** e la serie **diverge** senz'altro (le somme parziali crescono almeno come $N$). «Limitati» non c'entra nulla: contano gli addendi, non che siano piccoli. Per $\sum\frac1{\sqrt n}$: qui $a_n\to0$, quindi la condizione necessaria è *soddisfatta*, ma questo **non basta** a concludere la convergenza — è esattamente l'errore fatale. In effetti $\frac1{\sqrt n}=\frac1{n^{1/2}}$ è la serie campione con $p=\tfrac12\le1$, che **diverge** (§2.6). Morale: $a_n\to0$ è un semaforo verde per *procedere con l'analisi*, mai un certificato di convergenza.
```

### 2.4 Criteri per serie a termini positivi: confronto, confronto asintotico, integrale

Quando i termini sono $a_n\ge0$, la successione delle somme parziali è **crescente** (ogni nuovo addendo la fa salire). Per il teorema di convergenza monotòna di [lez.16](/analisi/successioni-e-serie/16-successioni), una tale successione converge *se e solo se è limitata superiormente*. Ecco perché per le serie a termini positivi vale una dicotomia netta — **o convergono, o divergono a $+\infty$**, mai oscillano — e perché tutti i criteri seguenti si riducono, in fondo, a controllare la limitatezza delle somme parziali per confronto.

**Criterio del confronto.** Se $0\le a_n\le b_n$ definitivamente, allora:
$$\sum b_n \text{ converge}\ \Rightarrow\ \sum a_n \text{ converge};\qquad \sum a_n \text{ diverge}\ \Rightarrow\ \sum b_n \text{ diverge}.$$
In parole: una serie più piccola di una convergente converge; una più grande di una divergente diverge. La direzione dell'implicazione è cruciale e va nel verso «giusto» — schiacciata sotto una convergente, o spinta sopra una divergente.

**Criterio del confronto asintotico.** Se $a_n,b_n>0$ e $\displaystyle\lim_{n}\frac{a_n}{b_n}=\ell$ con $0<\ell<+\infty$ (in particolare se $a_n\sim b_n$, [lez.05](/analisi/limiti-e-continuita/05-limiti-notevoli-asintoti)), allora $\sum a_n$ e $\sum b_n$ hanno lo **stesso** carattere. È il criterio più comodo in pratica: si sostituisce $a_n$ con un equivalente asintotico semplice — quasi sempre una serie campione — e si legge il carattere da quello.

*Micro-esempio.* $\sum\frac{n+2}{n^3+1}$: per $n$ grande $\frac{n+2}{n^3+1}\sim\frac{n}{n^3}=\frac1{n^2}$. Poiché $\sum\frac1{n^2}$ converge ($p=2>1$), per confronto asintotico anche la serie data converge.

**Criterio integrale.** Se $f$ è positiva, decrescente e continua su $[1,+\infty)$ e $a_n=f(n)$, allora
$$\sum_{n=1}^\infty a_n\ \text{converge}\iff \int_1^{+\infty} f(x)\,dx\ \text{converge}.$$
È il ponte con [lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri): la serie e l'integrale improprio sono incastrati l'una nell'altro come somme superiori e inferiori (la dimostrazione, §3.2, è tutta in un disegno). Da qui si legge *senza ulteriore lavoro* la serie campione.

### 2.5 Criteri del rapporto e della radice

Due criteri che confrontano la serie data con una geometrica «ideale», usando l'informazione locale sul tasso di decrescita dei termini.

**Criterio del rapporto (d'Alembert).** Se $a_n>0$ e $\displaystyle\lim_n\frac{a_{n+1}}{a_n}=\ell$, allora:
$$\ell<1\ \Rightarrow\ \text{converge};\qquad \ell>1\ \Rightarrow\ \text{diverge};\qquad \ell=1\ \Rightarrow\ \text{non conclusivo}.$$
L'idea: se il rapporto tra termini consecutivi tende a $\ell<1$, allora definitivamente $a_{n+1}\lesssim \ell\,a_n$, e la serie è schiacciata sotto una geometrica di ragione $\ell<1$, che converge. È il criterio d'elezione quando compaiono **fattoriali ed esponenziali**, perché nel rapporto si semplificano splendidamente.

**Criterio della radice (Cauchy).** Se $\displaystyle\lim_n\sqrt[n]{a_n}=\ell$, valgono le stesse conclusioni ($\ell<1$ converge, $\ell>1$ diverge, $\ell=1$ non conclusivo). È il criterio giusto quando il termine generale ha la forma $(\,\cdots)^n$, dove la radice $n$-esima annulla l'esponente.

Il caso $\ell=1$ è il tallone d'Achille di entrambi: non decide nulla, e bisogna ripiegare su confronto asintotico o criterio integrale. Non è un dettaglio marginale: proprio la serie campione $\sum 1/n^p$ dà $\ell=1$ per *ogni* $p$ con entrambi i criteri — quindi il rapporto e la radice sono ciechi esattamente sulla famiglia che discrimina la soglia di convergenza.

### 2.6 La serie campione $\sum 1/n^p$

Come per gli integrali impropri, esiste una famiglia di riferimento che fissa la **soglia** tra convergenza e divergenza e contro cui si confrontano quasi tutte le altre:
$$\sum_{n=1}^{\infty}\frac1{n^p}\quad\begin{cases}\text{converge} & p>1\\[2pt]\text{diverge} & p\le1.\end{cases}$$
Il caso $p=1$ è la serie armonica (diverge); $p=2$ dà $\sum\frac1{n^2}=\frac{\pi^2}{6}$ (converge, celebre problema di Basilea). La soglia $p=1$ è **identica** a quella dell'integrale campione $\int_1^\infty x^{-p}\,dx$ di [lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri), e non è un caso: il criterio integrale (§3.2 applicato a $f(x)=x^{-p}$) *è* la dimostrazione della serie campione. Discreto e continuo condividono la stessa frontiera perché misurano lo stesso decadimento $n^{-p}$.

Interiorizzare questa famiglia è ciò che rende rapido il confronto asintotico: quasi ogni serie «ragionevole» a termini positivi si comporta, per $n$ grande, come un $1/n^p$, e basta leggere l'esponente $p$ per conoscerne il destino.

```checkpoint
[domanda]
Di queste quattro serie, quali convergono? (a) $\displaystyle\sum\frac1n$; (b) $\displaystyle\sum\frac1{n^2}$; (c) $\displaystyle\sum\frac1{n\sqrt n}$; (d) $\displaystyle\sum\frac{1}{n^{0{,}99}}$. Prova a rispondere «a colpo d'occhio», poi giustifica.

[risposta]
Sono tutte serie campione $\sum 1/n^p$: basta leggere $p$ e confrontarlo con la soglia $1$. (a) $p=1$: **diverge** (è l'armonica — il caso limite sta dalla parte della divergenza). (b) $p=2>1$: **converge**. (c) $\frac1{n\sqrt n}=\frac1{n^{3/2}}$, $p=\tfrac32>1$: **converge**. (d) $p=0{,}99<1$: **diverge** — e questo è il punto che spesso sorprende: anche se $0{,}99$ è vicinissimo a $1$ e i termini decrescono in modo quasi indistinguibile dall'armonica, la soglia è netta e $p<1$ significa divergenza. La convergenza si gioca sul filo dell'esponente: non c'è «quasi converge», o $p>1$ o niente.
```

### 2.7 Serie a segni alterni, convergenza assoluta e semplice

Finora termini positivi. Quando i segni si alternano, entra in gioco un meccanismo nuovo: le cancellazioni tra addendi di segno opposto possono salvare una serie che, presa in valore assoluto, divergerebbe.

**Criterio di Leibniz.** Una serie a segni alterni $\sum(-1)^{n+1}b_n$ (con $b_n>0$) **converge** se: (i) $b_n$ è **decrescente**, e (ii) $b_n\to0$. In tal caso, di più, l'errore commesso fermandosi al termine $N$-esimo è in modulo minore del primo termine trascurato: $|S-s_N|\le b_{N+1}$ — una stima preziosa in pratica.

L'esempio-guida è la **serie armonica a segni alterni** $\sum\frac{(-1)^{n+1}}{n}=1-\tfrac12+\tfrac13-\tfrac14+\cdots$: soddisfa Leibniz ($\frac1n$ decresce a $0$), quindi **converge** (la sua somma è $\ln2$). Ma se prendo i valori assoluti ottengo l'armonica, che **diverge**. Questa serie converge *grazie* alle cancellazioni, non nonostante esse.

Questo fenomeno impone di distinguere due qualità di convergenza:

- $\sum a_n$ **converge assolutamente** se $\sum|a_n|$ converge. È la forma «robusta»: vale il teorema che *la convergenza assoluta implica la convergenza* (§dim-tecnica), e le somme si possono riordinare e manipolare come somme finite.
- $\sum a_n$ **converge semplicemente** (o condizionatamente) se converge ma $\sum|a_n|$ diverge. È la forma «fragile»: la convergenza dipende dall'ordine preciso dei termini.

Quanto fragile? Il **teorema di Riemann-Dini** afferma che una serie a convergenza semplice si può **riordinare** in modo da farla convergere a *qualsiasi* valore reale prefissato (o da farla divergere). Riordinare gli addendi — operazione innocua per una somma finita — può cambiare completamente il risultato di una somma infinita a convergenza semplice. È il segnale più netto che l'infinito attuale non obbedisce all'intuizione aritmetica, e la ragione per cui, ogni volta che è possibile, si preferisce la convergenza assoluta.


## 3. Dimostrazioni

### 3.1 Somma della serie geometrica

**Enunciato.** Per $|r|<1$, $\displaystyle\sum_{n=0}^{\infty}r^n=\frac1{1-r}$; per $|r|\ge1$ la serie diverge o oscilla.

**Dimostrazione.** La chiave è avere una formula *chiusa* per la somma parziale. Poniamo $s_N=\sum_{n=0}^{N}r^n=1+r+r^2+\cdots+r^N$ e moltiplichiamo per $r$:
$$r\,s_N=r+r^2+\cdots+r^{N+1}.$$
Sottraendo, quasi tutto si cancella (è la stessa idea telescopica): $s_N-r\,s_N=1-r^{N+1}$, cioè $s_N(1-r)=1-r^{N+1}$. Per $r\ne1$:
$$s_N=\frac{1-r^{N+1}}{1-r}.$$
Ora passiamo al limite $N\to\infty$. Se $|r|<1$, la successione notevole $r^{N+1}\to0$ ([lez.16](/analisi/successioni-e-serie/16-successioni), §2.7), quindi
$$s_N\ \longrightarrow\ \frac{1-0}{1-r}=\frac1{1-r}.$$
Se $|r|>1$, allora $|r^{N+1}|\to+\infty$ e $s_N$ non ha limite finito: diverge. Se $r=1$, $s_N=N+1\to+\infty$ (diverge). Se $r=-1$, $s_N$ vale alternativamente $1$ e $0$: oscilla. $\blacksquare$

Nota il metodo — «moltiplica per la ragione e sottrai» — che riduce una somma di $N+1$ termini a una differenza di due: è la versione algebrica della cancellazione telescopica.

### 3.2 Criterio integrale

**Enunciato.** Sia $f:[1,+\infty)\to[0,+\infty)$ continua, positiva e decrescente, e $a_n=f(n)$. Allora $\sum_{n\ge1}a_n$ converge se e solo se $\int_1^{+\infty}f(x)\,dx$ converge.

**Dimostrazione (in un disegno).** Poiché $f$ è decrescente, su ogni intervallo $[n,n+1]$ il valore più alto è $f(n)$ (a sinistra) e il più basso è $f(n+1)$ (a destra). Confrontando l'area sotto $f$ con i rettangoli di base $1$:
$$f(n+1)\le\int_{n}^{n+1}f(x)\,dx\le f(n).$$
Il rettangolo «basso» (altezza $f(n+1)$) sta sotto la curva, il rettangolo «alto» (altezza $f(n)$) la sovrasta. Sommiamo da $n=1$ a $N-1$. La somma centrale telescopa negli integrali: $\sum_{n=1}^{N-1}\int_n^{n+1}f=\int_1^{N}f$. Otteniamo la doppia stima
$$\underbrace{\sum_{n=2}^{N}a_n}_{s_N-a_1}\ \le\ \int_1^{N}f(x)\,dx\ \le\ \sum_{n=1}^{N-1}a_n=s_{N-1}.$$
Ora leggiamo le due implicazioni. Se **l'integrale converge** (a un valore $I$ finito), la disuguaglianza di sinistra dà $s_N\le a_1+\int_1^N f\le a_1+I$ per ogni $N$: le somme parziali (crescenti, termini positivi) sono limitate, dunque per il teorema di convergenza monotòna la serie **converge**. Se **l'integrale diverge**, la disuguaglianza di destra dà $s_{N-1}\ge\int_1^N f\to+\infty$: le somme parziali esplodono, la serie **diverge**. I due caratteri coincidono. $\blacksquare$

**Serie campione come corollario.** Applichiamo a $f(x)=x^{-p}$ (positiva e decrescente per $p>0$). In [lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri) abbiamo visto che $\int_1^\infty x^{-p}\,dx$ converge se e solo se $p>1$. Per il criterio integrale, allora, $\sum 1/n^p$ converge se e solo se $p>1$: la soglia $p=1$ della serie campione *è* la soglia dell'integrale campione, ora spiegata.

### 3.3 Divergenza della serie armonica

**Enunciato.** $\displaystyle\sum_{n=1}^{\infty}\frac1n=+\infty$.

**Dimostrazione (raggruppamento di Oresme, XIV secolo).** L'idea è raggruppare i termini in blocchi di lunghezza raddoppiata e mostrare che ogni blocco pesa almeno $\tfrac12$. Consideriamo:
$$1+\underbrace{\frac12}_{\ge\,1/2}+\underbrace{\frac13+\frac14}_{\ge\,1/2}+\underbrace{\frac15+\frac16+\frac17+\frac18}_{\ge\,1/2}+\cdots$$
Il $k$-esimo blocco (per $k\ge1$) va dall'indice $2^{k-1}+1$ all'indice $2^k$: contiene $2^{k-1}$ termini, e il più piccolo di essi è $\frac1{2^k}$. Perciò la somma del blocco è
$$\ge 2^{k-1}\cdot\frac1{2^{k}}=\frac12.$$
Prendendo la somma parziale fino a $N=2^k$, essa contiene il termine iniziale $1$ e i primi $k$ blocchi, quindi
$$s_{2^k}\ \ge\ 1+k\cdot\frac12\ \xrightarrow[k\to\infty]{}\ +\infty.$$
Le somme parziali contengono una sottosuccessione che diverge; essendo $(s_N)$ crescente, l'intera successione diverge a $+\infty$. $\blacksquare$

**Perché è istruttiva.** I termini $\frac1n\to0$ (condizione necessaria soddisfatta), eppure la serie diverge: la dimostrazione mostra *dove* si nasconde l'infinito — nel fatto che, per quanto piccoli, i termini non decrescono abbastanza in fretta (più lenti di ogni geometrica). È il controesempio che dà sostanza all'avvertimento di §2.3.

<details class="dim-tecnica">
<summary>La convergenza assoluta implica la convergenza (dimostrazione)</summary>

**Enunciato.** Se $\sum|a_n|$ converge, allora $\sum a_n$ converge.

**Dimostrazione via criterio di Cauchy.** Poiché $\sum|a_n|$ converge, la successione delle sue somme parziali $t_N=\sum_{n=1}^N|a_n|$ è di Cauchy ([lez.16](/analisi/successioni-e-serie/16-successioni), §2.8): $\forall\varepsilon>0\ \exists N$ tale che per $M>N$ si ha $t_M-t_N=\sum_{n=N+1}^{M}|a_n|<\varepsilon$. Consideriamo ora le somme parziali $s_N=\sum_{n=1}^N a_n$ della serie originale. Per la disuguaglianza triangolare, per $M>N$:
$$|s_M-s_N|=\Big|\sum_{n=N+1}^{M}a_n\Big|\le\sum_{n=N+1}^{M}|a_n|<\varepsilon.$$
Dunque anche $(s_N)$ è di Cauchy, e in $\mathbb{R}$ (completo) ogni successione di Cauchy converge: $\sum a_n$ converge. $\blacksquare$

Il viceversa è falso, e il controesempio è la serie armonica a segni alterni ($\sum\frac{(-1)^{n+1}}{n}$ converge, $\sum\frac1n$ no): la convergenza assoluta è strettamente più forte della convergenza semplice.

</details>


## 4. Esempi

**Esempio 1 (geometrica, introduttivo).** Calcolare $\displaystyle\sum_{n=0}^{\infty}\big(\tfrac23\big)^n$.
Geometrica con $r=\tfrac23$, $|r|<1$: la somma è $\frac1{1-2/3}=3$.

**Esempio 2 (geometrica sfasata).** Calcolare $\displaystyle\sum_{n=3}^{\infty}\big(\tfrac13\big)^n$.
Parto dalla serie completa e tolgo i primi tre termini: $\frac1{1-1/3}-1-\tfrac13-\tfrac19=\tfrac32-\tfrac{13}{9}=\frac1{18}$. *Strategia:* riportare sempre una geometrica sfasata alla forma $\sum_{n\ge0}$ nota.

**Esempio 3 (test del termine generale).** Studiare $\displaystyle\sum_{n=1}^{\infty}\frac{n^2}{n^2+1}$.
$a_n=\frac{n^2}{n^2+1}\to1\ne0$: la condizione necessaria è violata, la serie **diverge**. *Il controllo a costo zero chiude la questione.*

**Esempio 4 (rapporto, fattoriale).** Studiare $\displaystyle\sum_{n=1}^{\infty}\frac{n!}{3^n}$.
$\frac{a_{n+1}}{a_n}=\frac{(n+1)!}{3^{n+1}}\cdot\frac{3^n}{n!}=\frac{n+1}{3}\to+\infty>1$: **diverge**. Il fattoriale batte l'esponenziale, e i termini non tendono nemmeno a zero.

**Esempio 5 (radice).** Studiare $\displaystyle\sum_{n=1}^{\infty}\big(\tfrac{n}{2n+1}\big)^n$.
Termine della forma $(\cdots)^n$: uso la radice. $\sqrt[n]{a_n}=\frac{n}{2n+1}\to\frac12<1$: **converge** (assolutamente).

**Esempio 6 (confronto asintotico).** Studiare $\displaystyle\sum_{n=1}^{\infty}\frac{2n^2+3n}{n^4-1}$.
Per $n\to\infty$: $\frac{2n^2+3n}{n^4-1}\sim\frac{2n^2}{n^4}=\frac{2}{n^2}$. Poiché $\sum\frac2{n^2}$ converge ($p=2$), per confronto asintotico la serie **converge**. *Strategia:* isolare i termini dominanti di numeratore e denominatore e leggere l'esponente della campione.

**Esempio 7 (criterio integrale, caso non ovvio).** Studiare $\displaystyle\sum_{n=2}^{\infty}\frac1{n\ln n}$.
Il confronto asintotico con $1/n$ è inconcludente (i due non sono equivalenti), e rapporto/radice danno $\ell=1$. Uso il criterio integrale con $f(x)=\frac1{x\ln x}$ (positiva, decrescente su $[2,\infty)$): con la sostituzione $u=\ln x$, $\int_2^{\infty}\frac{dx}{x\ln x}=\int_{\ln2}^{\infty}\frac{du}{u}=+\infty$ (diverge). Dunque la serie **diverge** — pur decrescendo *più in fretta* dell'armonica, non abbastanza. *È il caso che mostra perché serve il criterio integrale: gli altri sono ciechi qui.*

**Esempio 8 (Leibniz e convergenza semplice).** Studiare $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^n}{\sqrt n}$.
*Convergenza:* $b_n=\frac1{\sqrt n}$ decresce a $0$, quindi per Leibniz la serie **converge**. *Assoluta?* $\sum\frac1{\sqrt n}$ è la campione con $p=\tfrac12\le1$: **diverge**. Dunque la convergenza è **semplice (condizionata)**: sopravvive solo grazie alle cancellazioni tra segni opposti. *Errore da evitare:* concludere «converge assolutamente» dopo aver verificato solo Leibniz — sono due domande distinte.


## 5. Collegamenti e riepilogo

**Dove porta questa lezione.** Il passo successivo generalizza tutto: nelle [serie di potenze](/analisi/successioni-e-serie/18-serie-potenze) i termini non saranno più numeri ma funzioni $c_n x^n$, e il **criterio del rapporto** di §2.5 diventerà lo strumento per calcolare il *raggio di convergenza* — l'intervallo di $x$ dove la serie definisce una funzione. Da lì, le [serie di Taylor](/analisi/successioni-e-serie/19-serie-taylor) rappresenteranno funzioni note ($e^x$, $\sin x$, $\ln(1+x)$) come somme infinite, chiudendo il cerchio con il polinomio di Taylor già incontrato nel calcolo differenziale.

**Legami trasversali.** In **probabilità**, ogni variabile aleatoria discreta ha una distribuzione $\sum_n p_n=1$: è una serie a termini positivi convergente, e il valore atteso $\sum_n n\,p_n$ è un'altra serie di cui va studiata la convergenza (esistono distribuzioni senza media, proprio perché la serie diverge). In **economia e finanza**, il valore attuale di un flusso di pagamenti futuri è una serie geometrica: una rendita costante scontata al tasso $i$ vale $\sum_{n\ge1}\frac{C}{(1+i)^n}=\frac{C}{i}$ — la stessa formula della rendita perpetua vista negli integrali impropri, qui in versione discreta. In **fisica e ingegneria**, le serie di Fourier decompongono un segnale periodico in armoniche $\sum$ seni/coseni, e la loro convergenza decide quante armoniche servono per ricostruire il segnale.

**Idee-chiave da portare via.** Una serie è il limite della successione delle somme parziali — una successione travestita. Il primo controllo è sempre la condizione necessaria $a_n\to0$ (se fallisce, diverge; se vale, *non conclude nulla*). Per i termini positivi, le somme parziali crescono e vale la dicotomia converge/diverge: si decide per confronto (diretto o asintotico) con la **serie campione** $\sum 1/n^p$ (soglia $p=1$), o con rapporto/radice (ciechi quando $\ell=1$), o con il criterio integrale (il ponte con [lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri)). Per i segni alterni, Leibniz; e la distinzione tra convergenza **assoluta** (robusta) e **semplice** (fragile, riordinabile a piacere per Riemann-Dini).

**Strategia operativa (in che ordine provare i criteri).**

1. $a_n\to0$? Se no, **diverge**. Se sì, prosegui.
2. È geometrica o telescopica? Se sì, sommala esattamente.
3. Termini positivi con un equivalente asintotico $\sim 1/n^p$? **Confronto asintotico** con la campione.
4. Compaiono fattoriali/esponenziali? **Rapporto**. Termine $(\cdots)^n$? **Radice**.
5. Rapporto/radice danno $\ell=1$? **Criterio integrale** o confronto più fine.
6. Segni alterni? **Leibniz**, poi verifica separatamente l'assoluta.

**Tavola dei criteri.**

| Criterio | Condizione | Conclusione |
|---|---|---|
| Termine generale | $a_n\not\to0$ | diverge |
| Geometrica | $\sum r^n$, $|r|<1$ | converge a $\frac1{1-r}$ |
| Serie campione | $\sum 1/n^p$, $p>1$ | converge (diverge se $p\le1$) |
| Confronto | $0\le a_n\le b_n$, $\sum b_n$ conv. | $\sum a_n$ converge |
| Confronto asintotico | $a_n/b_n\to\ell\in(0,\infty)$ | stesso carattere |
| Integrale | $f\ge0$ decrescente, $a_n=f(n)$ | come $\int_1^\infty f$ |
| Rapporto | $a_{n+1}/a_n\to\ell$ | $\ell<1$ conv., $\ell>1$ div., $\ell=1$ ? |
| Radice | $\sqrt[n]{a_n}\to\ell$ | $\ell<1$ conv., $\ell>1$ div., $\ell=1$ ? |
| Leibniz | segni alterni, $b_n\searrow0$ | converge |

### Slider — la serie campione $\sum 1/n^p$ e la soglia $p=1$

Muovi l'esponente $p$ e osserva le somme parziali di $\sum_{n\ge1}1/n^p$. Per $p>1$ la curva delle somme parziali si appiattisce verso un valore finito (converge); per $p\le1$ continua a salire senza stabilizzarsi (diverge). La soglia è netta e cade esattamente in $p=1$: è la stessa frontiera dell'integrale campione di [lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri).

```slider
{"title":"Somme parziali di ∑1/nᵖ al variare di p (soglia p=1)","fn":"Math.abs(a-1)<0.03 ? Math.log(x)+1 : (Math.pow(x,1-a)-1)/(1-a)+1","domain":[1,80],"yDomain":[0,12],"pname":"a","pmin":0.4,"pmax":3,"pdefault":1,"pstep":0.1,"plabel":"p","label1":"andamento somme parziali ∑1/nᵖ"}
```


## 6. Esercizi

<details>
<summary>Esercizio 1 (introduttivo) — Geometrica</summary>

Calcolare $\displaystyle\sum_{n=1}^{\infty}\frac{5}{4^n}$.

**Soluzione.** $\sum_{n=1}^\infty\frac{5}{4^n}=5\sum_{n=1}^\infty\big(\tfrac14\big)^n=5\cdot\frac{1/4}{1-1/4}=5\cdot\frac13=\frac53$. (Somma geometrica a partire da $n=1$: $\sum_{n\ge1}r^n=\frac{r}{1-r}$.)

</details>

<details>
<summary>Esercizio 2 (introduttivo) — Test del termine generale</summary>

Studiare $\displaystyle\sum_{n=1}^{\infty}\cos\!\frac1n$.

**Soluzione.** $\cos\frac1n\to\cos0=1\ne0$: condizione necessaria violata, la serie **diverge**.

</details>

<details>
<summary>Esercizio 3 (standard) — Rapporto</summary>

Studiare $\displaystyle\sum_{n=1}^{\infty}\frac{n^2\,2^n}{n!}$.

**Soluzione.** $\frac{a_{n+1}}{a_n}=\frac{(n+1)^2 2^{n+1}}{(n+1)!}\cdot\frac{n!}{n^2 2^n}=\frac{(n+1)^2}{n^2}\cdot\frac{2}{n+1}=\frac{2(n+1)}{n^2}\to0<1$: **converge assolutamente**.

</details>

<details>
<summary>Esercizio 4 (standard) — Confronto asintotico</summary>

Studiare $\displaystyle\sum_{n=1}^{\infty}\frac{1}{\sqrt{n^3+2n}}$.

**Soluzione.** Per $n\to\infty$: $\frac1{\sqrt{n^3+2n}}\sim\frac1{\sqrt{n^3}}=\frac1{n^{3/2}}$. Campione con $p=\tfrac32>1$: **converge**.

</details>

<details>
<summary>Esercizio 5 (standard) — Telescopica</summary>

Calcolare $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+2)}$.

**Soluzione.** $\frac1{n(n+2)}=\frac12\big(\frac1n-\frac1{n+2}\big)$. Le somme parziali telescopano: $s_N=\frac12\big(1+\frac12-\frac1{N+1}-\frac1{N+2}\big)\to\frac12\cdot\frac32=\frac34$.

</details>

<details>
<summary>Esercizio 6 (standard) — Radice</summary>

Studiare $\displaystyle\sum_{n=1}^{\infty}\big(\tfrac{3n}{4n-1}\big)^n$.

**Soluzione.** $\sqrt[n]{a_n}=\frac{3n}{4n-1}\to\frac34<1$: per il criterio della radice **converge**.

</details>

<details>
<summary>Esercizio 7 (standard) — Serie alternata, convergenza condizionata</summary>

Studiare $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}$ e stabilire il tipo di convergenza.

**Soluzione.** *Leibniz:* $b_n=\frac1n\searrow0$, quindi **converge** (la somma è $\ln2$). *Assoluta?* $\sum\frac1n$ diverge (armonica). Dunque **convergenza semplice/condizionata**.

</details>

<details>
<summary>Esercizio 8 (avanzato) — Criterio integrale con $\ell=1$</summary>

Studiare $\displaystyle\sum_{n=2}^{\infty}\frac1{n(\ln n)^2}$.

**Soluzione.** Rapporto e radice danno $\ell=1$ (non conclusivi). Criterio integrale con $f(x)=\frac1{x(\ln x)^2}$ (positiva, decrescente): sostituendo $u=\ln x$, $\int_2^{\infty}\frac{dx}{x(\ln x)^2}=\int_{\ln2}^{\infty}\frac{du}{u^2}=\big[-\frac1u\big]_{\ln2}^{\infty}=\frac1{\ln2}<\infty$: l'integrale converge, quindi la serie **converge**. (Confronta con l'Esempio 7: l'esponente $2$ sul logaritmo fa la differenza tra convergenza e divergenza.)

</details>

<details>
<summary>Esercizio 9 (avanzato) — Test multipli sulla stessa serie</summary>

Studiare $\displaystyle\sum_{n=1}^{\infty}(-1)^n\,\frac{n}{n^2+1}$.

**Soluzione.** *Assoluta?* $|a_n|=\frac{n}{n^2+1}\sim\frac1n$, e $\sum\frac1n$ diverge: **non** converge assolutamente. *Leibniz:* $b_n=\frac{n}{n^2+1}$; la derivata $b'(x)=\frac{1-x^2}{(x^2+1)^2}<0$ per $x>1$, quindi $b_n$ decresce (per $n\ge2$) e $b_n\to0$: la serie **converge condizionatamente**.

</details>

<details>
<summary>Esercizio 10 (applicativo) — Valore attuale di una rendita perpetua</summary>

Un titolo paga una cedola costante $C$ alla fine di ogni anno, per sempre. Con tasso di sconto annuo $i>0$, il valore attuale è $V=\sum_{n=1}^{\infty}\frac{C}{(1+i)^n}$. Calcolarlo e interpretarlo.

**Soluzione.** È una serie geometrica di ragione $r=\frac1{1+i}$, con $|r|<1$ perché $i>0$: $V=C\sum_{n\ge1}r^n=C\cdot\frac{r}{1-r}=C\cdot\frac{1/(1+i)}{1-1/(1+i)}=C\cdot\frac{1/(1+i)}{i/(1+i)}=\frac{C}{i}$. *Interpretazione:* un flusso infinito di cedole ha valore finito perché le cedole lontane, scontate, pesano sempre meno (proprio come i passi di Zenone). Con $C=100$ e $i=5\%$: $V=100/0{,}05=2000$. È la versione discreta della rendita perpetua incontrata negli integrali impropri ([lez.15](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri)).

</details>
