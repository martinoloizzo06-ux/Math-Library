---
id: analisi-10-taylor
titolo: "Polinomio di Taylor, sviluppi di MacLaurin e formula del resto"
materia: analisi
argomento: "Calcolo differenziale (una variabile)"
modulo: "Approssimazione polinomiale"
livello: universitario
slug: analisi-10-taylor

subject: analisi
topic_it: "Calcolo differenziale (una variabile)"
topic_en: "Differential calculus (single variable)"
title_it: "Polinomio di Taylor, sviluppi di MacLaurin e formula del resto"
title_en: "Taylor polynomial, MacLaurin expansions and the remainder formula"
level: blue
order: 10
source_book: "OpenStax, Calculus Volume 1 (linearizzazione, differenziale, approssimazione); A. Villanacci, Notes for Mathematics 1 (formula di Taylor col resto)"
source_chapter: "OpenStax Vol.1: 3.9 (approssimazione lineare e differenziale), 4.x (approssimazione di ordine superiore); Villanacci: analisi reale introduttiva, formula di Taylor e resto"

prerequisiti:
  - analisi-06-derivata-definizione
  - analisi-07-regole-derivazione
  - analisi-08-teoremi-differenziale
  - analisi-09-studio-funzione

collegamenti:
  - analisi-03-calcolo-limiti
  - analisi-08-teoremi-differenziale
  - analisi-18-serie-potenze
  - analisi-19-serie-taylor

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Approssimazione lineare e differenziale (Vol.1, 3.9); estensione all'approssimazione polinomiale di ordine superiore; interpretazione geometrica dei termini di ordine 1 e 2."
    note: "Il Vol.2 (serie di Taylor) non è nel catalogo: qui l'argomento è trattato come approssimazione polinomiale locale (calcolo differenziale), non come serie. La parte su convergenza/serie di potenze è rinviata alle lezioni 18–19. Notazione o-piccolo e differenziale coerente con la linearizzazione del Vol.1."
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Formula di Taylor con resto di Peano e di Lagrange; simbolo o-piccolo; dimostrazione del resto di Lagrange tramite il teorema di Cauchy."
    note: "Priorità su notazione e convenzioni d'esame: resto di Peano scritto come o((x-a)^n), resto di Lagrange con punto intermedio ξ; dimostrazione del resto di Lagrange per iterazione del teorema di Cauchy (coerente con la lezione 08)."

componenti_usati:
  - plot
  - slider

versione: "2.0"
data_ultima_rielaborazione: "2026-07-11"
stato: completa
sezioni_omesse: []
---

# Polinomio di Taylor, sviluppi di MacLaurin e formula del resto

## 1. Motivazione e intuizione

Prova a calcolare $\sin(0{,}1)$ senza calcolatrice. Oppure $e^{0{,}5}$, o $\ln(1{,}2)$. Sono numeri perfettamente definiti, ma le funzioni che li producono — seno, esponenziale, logaritmo — non si valutano con le quattro operazioni: non esiste una formula finita fatta di somme, prodotti e divisioni che dia $\sin(0{,}1)$ esatto. Eppure una calcolatrice sputa la cifra in un microsecondo. Come fa?

La risposta è l'idea centrale di questa lezione: **una funzione liscia si può sostituire, vicino a un punto, con un polinomio** — e i polinomi si calcolano con le sole quattro operazioni. Il polinomio giusto approssima $\sin(0{,}1)$ con un errore inferiore a $10^{-15}$ usando appena quattro o cinque termini. La calcolatrice non conosce il seno: conosce un polinomio che gli somiglia moltissimo lì dove serve.

L'intuizione portante l'hai già incontrata studiando la derivata. La retta tangente in un punto $a$,
$$y = f(a) + f'(a)(x-a),$$
è la *migliore approssimazione lineare* di $f$ vicino ad $a$: tocca il grafico e ne condivide la pendenza. Ma una retta è cieca alla curvatura — non sa se la funzione piega verso l'alto o verso il basso. Se aggiungiamo un termine quadratico che riproduce anche la derivata seconda, otteniamo una parabola che condivide con $f$ valore, pendenza *e* concavità: approssima meglio, e su un tratto più ampio. Continuando — un termine cubico per la derivata terza, uno di quarto grado per la quarta — costruiamo polinomi che aderiscono alla funzione sempre più stretti attorno ad $a$.

Questa è la mossa di Brook Taylor (1715): **imporre a un polinomio di avere, nel punto $a$, le stesse derivate della funzione fino a un certo ordine $n$**. Più alto è $n$, più il polinomio "assomiglia" a $f$ in un intorno di $a$. La domanda guida di tutta la lezione è duplice:

> Qual è il polinomio di grado $n$ che meglio approssima $f$ vicino ad $a$, e **quanto grande** è l'errore che commettiamo sostituendo la funzione con esso?

La seconda metà della domanda è cruciale e distingue la matematica dall'ingegneria a occhio: non basta approssimare, bisogna sapere *di quanto* si sbaglia. La formula del resto — il cuore rigoroso di questa lezione — risponde esattamente a questo. E il guadagno va ben oltre il calcolo di numeri: gli sviluppi di Taylor sono lo strumento standard per risolvere forme indeterminate nei limiti, per confrontare la velocità con cui due infinitesimi tendono a zero, per classificare punti critici, per linearizzare modelli in fisica ed economia. È uno degli attrezzi più usati dell'intera analisi.

## 2. Teoria

### 2.1 Costruzione del polinomio di Taylor

Fissiamo un punto $a$ e supponiamo $f$ derivabile $n$ volte in $a$. Cerchiamo un polinomio $T_n$ di grado $\le n$ che riproduca $f$ e le sue prime $n$ derivate nel punto $a$:
$$T_n^{(k)}(a) = f^{(k)}(a), \qquad k = 0, 1, 2, \ldots, n.$$

La condizione $k=0$ chiede che i due grafici passino per lo stesso punto; $k=1$ che abbiano la stessa pendenza; $k=2$ la stessa concavità; e così via. Conviene scrivere il polinomio incognito in **potenze di $(x-a)$**, non di $x$, proprio perché le condizioni sono imposte nel punto $a$:
$$T_n(x) = c_0 + c_1(x-a) + c_2(x-a)^2 + \cdots + c_n(x-a)^n.$$

Perché questa scelta di base rende tutto immediato? Deriviamo $k$ volte e valutiamo in $x=a$. Ogni derivazione abbassa di uno l'esponente e moltiplica per l'esponente corrente; quando poniamo $x=a$ tutti i termini con $(x-a)$ a esponente positivo si annullano, e sopravvive **solo** il termine $c_k(x-a)^k$, derivato $k$ volte:
$$T_n^{(k)}(a) = k!\,c_k.$$

(Il fattore $k! = k\,(k-1)\cdots 2\cdot 1$ è ciò che resta dopo aver derivato $k$ volte $ (x-a)^k$.) Imponendo $T_n^{(k)}(a) = f^{(k)}(a)$ si ricava subito ogni coefficiente:
$$\boxed{\,c_k = \dfrac{f^{(k)}(a)}{k!}\,}$$

Sostituendo, otteniamo la definizione centrale.

> **Definizione (polinomio di Taylor di ordine $n$ centrato in $a$).**
> $$T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x-a)^n.$$

**Lettura in linguaggio naturale.** Il valore di $f$ vicino ad $a$ si ricostruisce accumulando contributi: il valore in $a$, più una correzione lineare data dalla pendenza, più una correzione quadratica data dalla curvatura, più correzioni di ordine sempre più fine.

**Significato dei simboli.** $f^{(k)}(a)$ è la derivata $k$-esima calcolata nel centro $a$ (un *numero*, non una funzione); $(x-a)^k$ misura quanto ci si allontana dal centro, elevato alla potenza $k$; il denominatore $k!$ è il fattore di normalizzazione che nasce dalle derivazioni ripetute e senza il quale le condizioni sulle derivate non tornerebbero.

**Perché quella struttura.** Ogni addendo $\frac{f^{(k)}(a)}{k!}(x-a)^k$ è responsabile di *una sola* derivata: è costruito apposta perché, derivato $k$ volte in $a$, dia $f^{(k)}(a)$ e, derivato un numero diverso di volte, dia $0$. I contributi non si disturbano a vicenda — è questo che rende i coefficienti calcolabili uno per uno.

**Ipotesi.** Serve solo che $f$ sia derivabile $n$ volte in $a$ (per il resto di Peano, §2.4, basta l'esistenza di $f^{(n)}(a)$). Nessuna ipotesi di convergenza: qui $T_n$ è un *polinomio* fisso, non una serie infinita — la questione della convergenza per $n\to\infty$ appartiene alle lezioni sulle serie di potenze e sulla serie di Taylor.

**Interpretazione geometrica.** $T_1$ è la retta tangente; $T_2$ è la parabola osculatrice, che tocca il grafico condividendone anche la concavità; all'aumentare di $n$ il polinomio "abbraccia" la curva su un intorno via via più esteso.

I casi $n=1$ e $n=2$ meritano un nome, perché sono i più usati:
$$\underbrace{f(x)\approx f(a)+f'(a)(x-a)}_{\text{approssimazione lineare}},\qquad \underbrace{f(x)\approx f(a)+f'(a)(x-a)+\tfrac{1}{2}f''(a)(x-a)^2}_{\text{approssimazione quadratica}}.$$
La prima è la linearizzazione (il *differenziale*): sostituire la funzione con la sua tangente. La seconda aggiunge la correzione di curvatura ed è alla base, per esempio, del test della derivata seconda per i punti critici.

### 2.2 Sviluppi di MacLaurin

Quando il centro è $a=0$ la formula si alleggerisce e prende un nome proprio.

> **Definizione (polinomio di MacLaurin).** È il polinomio di Taylor centrato in $a=0$:
> $$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(0)}{k!}\,x^k + (\text{resto}).$$

Non è un concetto nuovo: è solo il caso $a=0$, il più frequente perché molte funzioni elementari sono "naturalmente centrate" nell'origine. Ricaviamo gli sviluppi fondamentali, che conviene conoscere a memoria come si conoscono le tabelline.

**Esponenziale.** Poiché $f(x)=e^x$ ha $f^{(k)}(x)=e^x$ per ogni $k$, si ha $f^{(k)}(0)=1$ per ogni $k$, dunque tutti i coefficienti valgono $1/k!$:
$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + o(x^n).$$

**Seno e coseno.** Le derivate di $\sin x$ ciclano con periodo 4 ($\sin,\cos,-\sin,-\cos,\dots$); valutate in $0$ danno $0,1,0,-1,\dots$. Sopravvivono solo le potenze dispari, con segni alternati:
$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots + (-1)^{k}\frac{x^{2k+1}}{(2k+1)!} + o(x^{2k+2}).$$
Analogamente, per $\cos x$ sopravvivono le potenze pari:
$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots + (-1)^{k}\frac{x^{2k}}{(2k)!} + o(x^{2k+1}).$$

**Logaritmo.** Per $f(x)=\ln(1+x)$ si ha $f^{(k)}(0) = (-1)^{k-1}(k-1)!$, da cui:
$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots + (-1)^{n-1}\frac{x^n}{n} + o(x^n).$$

**Binomiale (serie di Newton).** Per $f(x)=(1+x)^\alpha$, con $\alpha\in\mathbb{R}$ qualsiasi:
$$(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \cdots + \binom{\alpha}{k}x^k + o(x^k),\qquad \binom{\alpha}{k}=\frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!}.$$
Due casi particolari utilissimi:
$$\frac{1}{1+x} = 1 - x + x^2 - x^3 + \cdots \ (\alpha=-1),\qquad \sqrt{1+x} = 1 + \frac{x}{2} - \frac{x^2}{8} + \cdots \ (\alpha=\tfrac12).$$

Il grafico qui sotto mostra concretamente cosa significa "il polinomio segue la funzione vicino al centro e poi la abbandona": confrontiamo $\sin x$ con il suo polinomio di MacLaurin di ordine 3.

```plot
{
  "title": "sin(x) e il suo polinomio di MacLaurin di ordine 3: x − x³/6",
  "fn": "Math.sin(x)",
  "fn2": "x - x*x*x/6",
  "domain": [-4, 4],
  "yDomain": [-2, 2],
  "label1": "sin(x)",
  "label2": "T₃(x) = x − x³/6",
  "color": "#2563eb",
  "color2": "#dc2626"
}
```

Vicino a $x=0$ le due curve sono indistinguibili; già per $|x|>1{,}5$ il polinomio si stacca e "esplode" (è un cubo). Morale: **Taylor è locale**. Per allargare la zona di buona approssimazione non basta spostarsi, bisogna alzare il grado $n$.

### 2.3 Il resto: definizione e ruolo

Il polinomio non è la funzione: la differenza si chiama **resto**.

> **Definizione (resto di ordine $n$).** $\displaystyle R_n(x) = f(x) - T_n(x)$, cioè $f(x) = T_n(x) + R_n(x)$.

Tutta la sostanza sta nel controllare $R_n$. Servono due letture complementari, che rispondono a due domande diverse.

- **Quanto vale l'errore in un punto lontano fissato?** → risponde il **resto di Lagrange**, che dà una stima quantitativa esatta.
- **Come si comporta l'errore quando $x\to a$?** → risponde il **resto di Peano**, che dà l'ordine di infinitesimo ed è lo strumento per i limiti.

### 2.4 Resto di Peano (formula asintotica)

> **Teorema (formula di Taylor con resto di Peano).** Se $f$ è derivabile $n$ volte in $a$, allora
> $$f(x) = T_n(x) + o\big((x-a)^n\big) \qquad (x\to a).$$

**Lettura.** Il resto è un infinitesimo *di ordine superiore* a $(x-a)^n$: dividendo per $(x-a)^n$ e mandando $x\to a$, il resto svanisce. Il simbolo $o\big((x-a)^n\big)$ (o-piccolo) significa esattamente
$$\lim_{x\to a}\frac{R_n(x)}{(x-a)^n}=0.$$

**A cosa serve.** Questa è la forma che si usa nei limiti: sostituendo una funzione con il suo polinomio di Taylor "più un $o$", i termini scritti bastano a determinare il comportamento dominante, e l'$o$ raccoglie tutto il resto trascurabile. Il prezzo è che il resto di Peano dice *che* l'errore è piccolo, non *quanto*: per una stima numerica serve Lagrange.

Una conseguenza operativa: **il primo termine non nullo dello sviluppo rivela l'ordine dell'infinitesimo**. Diciamo che $g(x)\to 0$ è infinitesimo di ordine $p$ per $x\to a$ se $\lim_{x\to a} g(x)/(x-a)^p = L\neq 0$. Guardando lo sviluppo:
$$\sin x = x + o(x)\ \Rightarrow\ \sin x \sim x\ (\text{ordine }1),\qquad 1-\cos x = \tfrac{x^2}{2}+o(x^2)\ \Rightarrow\ 1-\cos x \sim \tfrac{x^2}{2}\ (\text{ordine }2).$$

### 2.5 Resto di Lagrange (stima quantitativa)

> **Teorema (formula di Taylor con resto di Lagrange).** Se $f$ è derivabile $n+1$ volte sull'intervallo tra $a$ e $x$, esiste un punto $\xi$ compreso tra $a$ e $x$ tale che
> $$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}.$$

**Lettura e struttura.** Il resto ha *la forma del primo termine mancante* — quello di grado $n+1$ — ma con la derivata calcolata non nel centro $a$, bensì in un punto intermedio incognito $\xi$. È l'esatta generalizzazione del teorema di Lagrange (che è il caso $n=0$: $f(x)=f(a)+f'(\xi)(x-a)$, il valor medio già visto nella lezione 08).

**Perché è utile pur non conoscendo $\xi$.** Non serve individuare $\xi$: basta *maggiorare* la derivata $(n+1)$-esima. Se $|f^{(n+1)}(t)|\le M$ per ogni $t$ nell'intervallo, allora
$$\boxed{\ |R_n(x)| \le \frac{M}{(n+1)!}\,|x-a|^{n+1}\ }$$
Questa disuguaglianza è ciò che rende Taylor uno strumento di calcolo affidabile: dà un tetto certo all'errore. Due osservazioni ne spiegano la potenza. Primo, il fattore $|x-a|^{n+1}$: più si sta vicino al centro, più l'errore crolla (con potenza alta). Secondo, il fattore $1/(n+1)!$: il fattoriale a denominatore cresce vertiginosamente, quindi alzare il grado abbatte l'errore molto rapidamente — è la ragione per cui pochi termini bastano per una precisione altissima.

Vediamo la stima all'opera. Per $\sin x\approx x - x^3/6$ su $x\in[0,\,0{,}1]$, il primo termine trascurato è di ordine 5; la derivata quinta di $\sin$ è $\cos$, con $|\cos t|\le 1$, quindi
$$|R_4(0{,}1)| \le \frac{1}{5!}(0{,}1)^5 = \frac{10^{-5}}{120}\approx 8{,}3\times 10^{-8}.$$
Con due soli termini otteniamo otto cifre corrette: è così che nasce il calcolo dei valori "trascendenti".

Lo slider seguente mostra il ruolo del centro/parametro: come cambia la qualità dell'approssimazione quadratica di $e^{ax}$ al variare di $a$.

```slider
{
  "title": "e^(a·x) e la sua approssimazione quadratica 1 + a·x + (a·x)²/2",
  "fn": "Math.exp(a*x)",
  "fn2": "1 + a*x + (a*x)*(a*x)/2",
  "domain": [-3, 3],
  "yDomain": [-1, 10],
  "pname": "a",
  "pmin": 0.2,
  "pmax": 2,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "parametro a",
  "label1": "e^(a·x)",
  "label2": "T₂(x) = 1 + ax + (ax)²/2",
  "color": "#2563eb",
  "color2": "#dc2626"
}
```

Per $a$ piccolo la parabola segue $e^{ax}$ su un tratto ampio; per $a$ grande la funzione cresce più in fretta e l'approssimazione si deteriora prima. La regola della catena spiega il fenomeno: lo sviluppo di $e^{ax}$ si ottiene sostituendo $x\to ax$ in quello di $e^x$, e l'errore, che è di ordine $(ax)^3$, cresce come $a^3$.

## 3. Dimostrazioni

### 3.1 Unicità del polinomio di Taylor

**Enunciato.** Se un polinomio $P$ di grado $\le n$ soddisfa $f(x) = P(x) + o((x-a)^n)$ per $x\to a$, allora $P = T_n$. In altre parole, il polinomio di Taylor è l'*unico* polinomio di grado $\le n$ che approssima $f$ con errore $o((x-a)^n)$.

**Perché conta.** Questo teorema è la licenza per calcolare gli sviluppi "con i trucchi" (sostituzione, somma, prodotto, derivazione di sviluppi noti) anziché con la definizione: qualunque strada porti a un polinomio con resto $o((x-a)^n)$, quel polinomio *è* Taylor. Lo useremo continuamente negli esempi.

**Dimostrazione.** Scriviamo $P$ e $T_n$ in potenze di $(x-a)$:
$$P(x)=\sum_{k=0}^n p_k (x-a)^k,\qquad T_n(x)=\sum_{k=0}^n t_k (x-a)^k,$$
e poniamo $D(x)=P(x)-T_n(x)=\sum_{k=0}^n d_k(x-a)^k$ con $d_k=p_k-t_k$. Poiché sia $P$ sia $T_n$ approssimano $f$ con resto $o((x-a)^n)$, sottraendo le due relazioni si ottiene
$$D(x)=o\big((x-a)^n\big)\qquad (x\to a).$$
Mostriamo che tutti i $d_k$ sono nulli, procedendo dal grado più basso. Dividiamo per $(x-a)^0=1$ e mandiamo $x\to a$: il membro di destra tende a $0$ (è $o((x-a)^n)$ con $n\ge 0$, dunque anche $o(1)$), mentre $D(x)\to d_0$. Quindi $d_0=0$.

Supponiamo ora, per induzione, di aver dimostrato $d_0=\cdots=d_{j-1}=0$ per un certo $j\le n$. Allora $D(x)=\sum_{k\ge j} d_k(x-a)^k$; dividiamo per $(x-a)^j$:
$$\frac{D(x)}{(x-a)^j}=d_j + d_{j+1}(x-a)+\cdots+d_n(x-a)^{\,n-j}.$$
Per $x\to a$ il membro di destra tende a $d_j$. Il membro di sinistra è $\dfrac{o((x-a)^n)}{(x-a)^j}=o\big((x-a)^{\,n-j}\big)$, che tende a $0$ perché $n-j\ge 0$. Dunque $d_j=0$. Per induzione $d_k=0$ per ogni $k=0,\dots,n$, cioè $P=T_n$. $\qquad\blacksquare$

### 3.2 Formula di Taylor con resto di Peano

**Enunciato.** Se $f$ è derivabile $n$ volte in $a$, allora $f(x)-T_n(x)=o((x-a)^n)$ per $x\to a$.

**Strategia.** Poniamo $R(x)=f(x)-T_n(x)$ e dimostriamo che $\lim_{x\to a} R(x)/(x-a)^n=0$. Il polinomio $T_n$ è costruito perché $R$ e le sue prime $n$ derivate si annullino in $a$; applicheremo ripetutamente il teorema di de l'Hôpital (lezione 08) sfruttando proprio questi annullamenti.

**Dimostrazione.** Per costruzione $T_n^{(k)}(a)=f^{(k)}(a)$ per $k=0,\dots,n$, quindi
$$R(a)=R'(a)=\cdots=R^{(n)}(a)=0.$$
Consideriamo il rapporto $\dfrac{R(x)}{(x-a)^n}$: per $x\to a$ è una forma $\tfrac{0}{0}$. Applichiamo de l'Hôpital, lecito perché numeratore e denominatore sono derivabili e il denominatore ha derivata non nulla vicino ad $a$ (ma $\ne a$):
$$\lim_{x\to a}\frac{R(x)}{(x-a)^n}=\lim_{x\to a}\frac{R'(x)}{n(x-a)^{n-1}},$$
di nuovo $\tfrac00$ perché $R'(a)=0$. Iteriamo: dopo $n-1$ passaggi arriviamo a
$$\lim_{x\to a}\frac{R^{(n-1)}(x)}{n!\,(x-a)}.$$
A questo punto **fermiamoci**: per l'ultimo passo non serve de l'Hôpital (che richiederebbe $R^{(n)}$ in un intorno, mentre l'ipotesi dà solo $R^{(n)}(a)$), basta la *definizione* di derivata. Poiché $R^{(n-1)}(a)=0$,
$$\lim_{x\to a}\frac{R^{(n-1)}(x)}{n!\,(x-a)}=\frac{1}{n!}\lim_{x\to a}\frac{R^{(n-1)}(x)-R^{(n-1)}(a)}{x-a}=\frac{R^{(n)}(a)}{n!}=0.$$
Dunque il rapporto di partenza tende a $0$, cioè $R(x)=o((x-a)^n)$. $\qquad\blacksquare$

### 3.3 Formula di Taylor con resto di Lagrange

**Enunciato.** Se $f$ è derivabile $n+1$ volte sull'intervallo chiuso tra $a$ e $x$, esiste $\xi$ tra $a$ e $x$ con $R_n(x)=\dfrac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$.

**Strategia.** Fissiamo $x$ e confrontiamo due funzioni della variabile ausiliaria $t$: il resto "che parte da $t$", $g(t)=f(x)-\sum_{k=0}^n \frac{f^{(k)}(t)}{k!}(x-t)^k$, e la potenza $h(t)=(x-t)^{n+1}$. Applicheremo il teorema di Cauchy (lezione 08) alla coppia $(g,h)$ sull'intervallo di estremi $a$ e $x$.

**Dimostrazione.** Definiamo, per $t$ tra $a$ e $x$,
$$g(t)=f(x)-\sum_{k=0}^{n}\frac{f^{(k)}(t)}{k!}(x-t)^k,\qquad h(t)=(x-t)^{n+1}.$$
Agli estremi: $g(x)=f(x)-f(x)=0$ e $g(a)=f(x)-T_n(x)=R_n(x)$; inoltre $h(x)=0$ e $h(a)=(x-a)^{n+1}$.

Calcoliamo $g'(t)$. Derivando la somma rispetto a $t$ (regola del prodotto su ciascun addendo) si ha una **cancellazione telescopica**: la derivata del termine $k$-esimo produce un pezzo che elide un pezzo del termine $(k{+}1)$-esimo. Scriviamo il generico addendo $u_k(t)=\frac{f^{(k)}(t)}{k!}(x-t)^k$; allora
$$u_k'(t)=\frac{f^{(k+1)}(t)}{k!}(x-t)^k-\frac{f^{(k)}(t)}{(k-1)!}(x-t)^{k-1}\quad(k\ge 1),\qquad u_0'(t)=f'(t).$$
Nella somma $-\sum_k u_k'(t)$ il primo pezzo del livello $k$ cancella il secondo pezzo del livello $k+1$; sopravvive solo l'ultimo termine, quello con $k=n$:
$$g'(t)=-\Big(\text{somma telescopica}\Big)=-\frac{f^{(n+1)}(t)}{n!}(x-t)^n.$$
Inoltre $h'(t)=-(n+1)(x-t)^n$, che non si annulla per $t$ strettamente tra $a$ e $x$. Sono soddisfatte le ipotesi del teorema di Cauchy: esiste $\xi$ tra $a$ e $x$ con
$$\frac{g(a)-g(x)}{h(a)-h(x)}=\frac{g'(\xi)}{h'(\xi)}.$$
Sostituiamo i valori. A sinistra: $\dfrac{R_n(x)-0}{(x-a)^{n+1}-0}=\dfrac{R_n(x)}{(x-a)^{n+1}}$. A destra:
$$\frac{g'(\xi)}{h'(\xi)}=\frac{-\frac{f^{(n+1)}(\xi)}{n!}(x-\xi)^n}{-(n+1)(x-\xi)^n}=\frac{f^{(n+1)}(\xi)}{(n+1)!}.$$
Uguagliando e moltiplicando per $(x-a)^{n+1}$:
$$R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}. \qquad\blacksquare$$

Osserva che per $n=0$ tutto si riduce a $f(x)-f(a)=f'(\xi)(x-a)$: il resto di Lagrange è, letteralmente, il teorema del valor medio esteso agli ordini superiori.

## 4. Esempi

**Esempio 1 (introduttivo — costruzione diretta).** Scriviamo $T_2$ di $f(x)=e^x$ centrato in $a=0$.
Strategia: applicare la definizione, $c_k=f^{(k)}(0)/k!$. Poiché ogni derivata di $e^x$ è $e^x$, si ha $f(0)=f'(0)=f''(0)=1$, quindi
$$T_2(x)=1+x+\frac{x^2}{2}.$$
Verifica numerica in $x=0{,}5$: $T_2(0{,}5)=1+0{,}5+0{,}125=1{,}625$, contro $e^{0{,}5}\approx 1{,}6487$; errore $\approx 0{,}024$, coerente con un resto di ordine $x^3$.
*Attenzione:* il denominatore fattoriale è obbligatorio. Scrivere $e^x\approx 1+x+x^2+x^3$ è l'errore più comune in assoluto: la forma corretta è $1+x+\frac{x^2}{2}+\frac{x^3}{6}$.

**Esempio 2 (introduttivo — centro diverso da 0).** Sviluppiamo $f(x)=\ln x$ attorno ad $a=1$ fino all'ordine 3.
Derivate: $f(1)=0$, $f'(x)=1/x\Rightarrow f'(1)=1$, $f''(x)=-1/x^2\Rightarrow f''(1)=-1$, $f'''(x)=2/x^3\Rightarrow f'''(1)=2$. Quindi
$$T_3(x)=(x-1)-\frac{(x-1)^2}{2}+\frac{(x-1)^3}{3}.$$
Ponendo $h=x-1$ ritroviamo esattamente lo sviluppo di $\ln(1+h)$: coerente, perché $\ln x=\ln(1+h)$.
*Errore da evitare:* non confondere il centro con la variabile. Per sviluppare $\ln(2+x)$ attorno a $x=0$ si scrive $\ln(2+x)=\ln 2+\ln\!\big(1+\tfrac{x}{2}\big)$ e si sviluppa $\ln(1+u)$ con $u=x/2$; sviluppare "come se il centro fosse $-2$" è sbagliato.

**Esempio 3 (intermedio — limite $0/0$ con Peano).** Calcoliamo $\displaystyle\lim_{x\to0}\frac{e^x-1-x}{x^2}$.
Strategia: sviluppare il numeratore fino all'ordine che rende il rapporto determinato. Con $e^x=1+x+\frac{x^2}{2}+o(x^2)$:
$$\frac{e^x-1-x}{x^2}=\frac{\frac{x^2}{2}+o(x^2)}{x^2}=\frac12+o(1)\to \frac12.$$
Qui l'unicità (§3.1) garantisce che possiamo fidarci dello sviluppo noto di $e^x$ senza ricalcolare le derivate.

**Esempio 4 (intermedio — scegliere l'ordine giusto).** Calcoliamo $\displaystyle\lim_{x\to0}\frac{x-\sin x}{x^3}$.
Se sviluppiamo solo $\sin x\approx x$ otteniamo $\frac{0}{x^3}$: forma $\tfrac00$ **non risolta**, perché abbiamo buttato via il termine che serve. Bisogna arrivare all'ordine 3: $\sin x = x-\frac{x^3}{6}+o(x^3)$, dunque $x-\sin x=\frac{x^3}{6}+o(x^3)$ e
$$\frac{x-\sin x}{x^3}=\frac16+o(1)\to\frac16.$$
*Errore da evitare:* troncare troppo presto. La regola pratica: sviluppare finché il primo termine non nullo del numeratore ha lo stesso ordine del denominatore.

**Esempio 5 (intermedio — confronto tra infinitesimi).** Confrontiamo $\sin x$ e $\arctan x$ per $x\to 0$.
$\sin x = x-\frac{x^3}{6}+o(x^3)$, $\arctan x = x-\frac{x^3}{3}+o(x^3)$. Entrambi hanno primo termine $x$: sono infinitesimi *dello stesso ordine* (ordine 1) e anzi equivalenti,
$$\frac{\sin x}{\arctan x}=\frac{1-\frac{x^2}{6}+o(x^2)}{1-\frac{x^2}{3}+o(x^2)}\to 1,\qquad \text{cioè }\ \sin x\sim\arctan x.$$
La differenza emerge solo al terzo ordine: $\sin x-\arctan x=\big(-\tfrac16+\tfrac13\big)x^3+o(x^3)=\tfrac{x^3}{6}+o(x^3)$.

**Esempio 6 (avanzato — sviluppo di una composta per sostituzione).** Sviluppiamo $f(x)=e^{\sin x}$ fino all'ordine 3.
Strategia: partire da $u=\sin x=x-\frac{x^3}{6}+o(x^3)$ e sostituirlo in $e^u=1+u+\frac{u^2}{2}+\frac{u^3}{6}+o(u^3)$, tenendo solo i termini fino a $x^3$.
- $u = x-\frac{x^3}{6}+o(x^3)$,
- $u^2 = x^2+o(x^3)$ (il doppio prodotto $2\cdot x\cdot(-\frac{x^3}{6})$ è di ordine 4),
- $u^3 = x^3+o(x^3)$.
Sommando: $e^{\sin x}=1+\big(x-\tfrac{x^3}{6}\big)+\tfrac12 x^2+\tfrac16 x^3+o(x^3)=1+x+\tfrac{x^2}{2}+\big(-\tfrac16+\tfrac16\big)x^3+o(x^3)$, cioè
$$e^{\sin x}=1+x+\frac{x^2}{2}+o(x^3).$$
I termini cubici si cancellano esattamente. L'unicità (§3.1) legittima questo calcolo "a incastro": il risultato *è* il polinomio di MacLaurin di $e^{\sin x}$.
*Attenzione:* nel maneggiare $u^2,u^3$ bisogna tracciare l'ordine di ogni pezzo e scartare subito ciò che è oltre $x^3$, altrimenti si trascinano termini inutili e si rischia l'errore.

**Esempio 7 (avanzato — stima quantitativa con Lagrange).** Approssimiamo $e^{0{,}1}$ con $T_3$ e certifichiamo l'errore.
$T_3(0{,}1)=1+0{,}1+\frac{0{,}01}{2}+\frac{0{,}001}{6}=1{,}105167$. Stima del resto con $M=\max_{[0,0{,}1]}e^t=e^{0{,}1}<1{,}11$:
$$|R_3(0{,}1)|\le\frac{1{,}11}{4!}(0{,}1)^4=\frac{1{,}11}{24}\cdot10^{-4}\approx 4{,}6\times10^{-6}.$$
Valore vero $e^{0{,}1}\approx 1{,}10517092$: l'errore effettivo $\approx 9\times10^{-7}$ rispetta il tetto. Questo è il punto di forza rispetto a Peano: qui abbiamo un *numero* che limita l'errore, non solo la certezza che è "piccolo".

**Esempio 8 (applicativo — economia, elasticità e approssimazione di variazioni).** In economia una funzione di utilità o di produzione si linearizza spesso attorno a un punto di riferimento. Sia $U(w)=\ln w$ l'utilità (logaritmica) della ricchezza $w$, e supponiamo $w$ vicino a un livello base $w_0$. L'approssimazione di Taylor al secondo ordine dà
$$U(w)\approx \ln w_0 + \frac{1}{w_0}(w-w_0) - \frac{1}{2w_0^2}(w-w_0)^2.$$
Il termine lineare, con coefficiente $U'(w_0)=1/w_0$, è l'utilità marginale; il termine quadratico, con $U''(w_0)=-1/w_0^2<0$, cattura l'**avversione al rischio**: la concavità di $U$ fa sì che una perdita pesi più di un guadagno di pari entità. Numericamente, per $w_0=100$ e una variazione del $10\%$ ($w=110$): esatto $\ln 110-\ln 100=\ln 1{,}1\approx 0{,}09531$; approssimazione $\frac{10}{100}-\frac12\frac{100}{100^2}=0{,}1-0{,}005=0{,}095$. Due cifre corrette con due termini, e il termine quadratico spiega *perché* il guadagno di utilità ($0{,}095$) è minore della variazione relativa di ricchezza ($0{,}1$).
*Attenzione:* l'approssimazione è affidabile solo per variazioni piccole rispetto a $w_0$; per uno shock del $50\%$ il termine quadratico non basta più e servirebbero ordini superiori (o la formula esatta).

## 5. Collegamenti e riepilogo

**Collegamenti interni.** Questa lezione poggia interamente sul **calcolo differenziale**: i coefficienti sono derivate di ordine superiore (lezione 07) e le dimostrazioni del resto usano de l'Hôpital e il teorema di Cauchy della lezione 08 — il resto di Lagrange *è* il valor medio esteso. L'approssimazione quadratica formalizza il test della derivata seconda incontrato nello studio di funzione (lezione 09): il segno di $f''(a)$ decide se la parabola osculatrice apre verso l'alto (minimo) o verso il basso (massimo). Verso valle, Taylor è la porta d'accesso alle **serie**: facendo $n\to\infty$ e studiando *se* il resto tende a zero si passa dal polinomio alla **serie di Taylor** e alle **serie di potenze** (lezioni 18–19), dove entra in gioco la convergenza — qui deliberatamente assente, perché $T_n$ è un polinomio finito. Nei **limiti** (lezione 03), gli sviluppi con resto di Peano sono l'alternativa sistematica a de l'Hôpital, spesso più rapida quando compaiono più funzioni trascendenti.

**Collegamenti applicati.** In **fisica** Taylor è ovunque: l'energia relativistica $E=mc^2/\sqrt{1-v^2/c^2}$ sviluppata per $v\ll c$ dà $E\approx mc^2+\frac12 mv^2+\cdots$, riunendo energia a riposo ed energia cinetica classica; il pendolo si "linearizza" con $\sin\theta\approx\theta$. In **analisi numerica** il metodo di Eulero ($y(t+h)\approx y(t)+h\,y'(t)$) e i metodi di Runge–Kutta sono approssimazioni di Taylor di ordine crescente, e le regole di quadratura (trapezi, Simpson) nascono dall'integrare polinomi approssimanti. In **economia e finanza** la coppia *duration–convexity* di un'obbligazione è esattamente lo sviluppo del prezzo al secondo ordine nel tasso; l'avversione al rischio è la concavità dell'utilità (Esempio 8); la linearizzazione di modelli DSGE attorno allo stato stazionario è uno sviluppo di Taylor. In **machine learning** la discesa del gradiente usa l'approssimazione lineare della funzione di perdita, e i metodi di Newton quella quadratica.

**Riepilogo — idee fondamentali.** (1) Il polinomio di Taylor $T_n$ è l'unico polinomio di grado $\le n$ che copia $f$ e le sue derivate fino all'ordine $n$ nel centro $a$, ed è l'unico che approssima $f$ con errore $o((x-a)^n)$. (2) Taylor è *locale*: ottimo vicino al centro, inaffidabile lontano; per allargare la zona buona si alza $n$. (3) Il resto ha due volti: **Peano** ($o((x-a)^n)$, per i limiti e l'ordine di infinitesimo) e **Lagrange** (stima quantitativa con $\xi$, per certificare l'errore numerico).

**Formule chiave.**
$$T_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k,\qquad R_n^{\text{Peano}}=o\big((x-a)^n\big),\qquad R_n^{\text{Lagrange}}=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1},$$
$$|R_n(x)|\le\frac{M}{(n+1)!}|x-a|^{n+1}\quad\text{con }|f^{(n+1)}|\le M.$$

**Sviluppi di MacLaurin da memorizzare** (per $x\to0$):

| Funzione | Sviluppo | Primo termine |
| --- | --- | --- |
| $e^x$ | $1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots$ | $1+x$ |
| $\sin x$ | $x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots$ | $x$ |
| $\cos x$ | $1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots$ | $1$ |
| $\ln(1+x)$ | $x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots$ | $x$ |
| $(1+x)^\alpha$ | $1+\alpha x+\frac{\alpha(\alpha-1)}{2}x^2+\cdots$ | $1+\alpha x$ |
| $\frac{1}{1+x}$ | $1-x+x^2-x^3+\cdots$ | $1-x$ |
| $\arctan x$ | $x-\frac{x^3}{3}+\frac{x^5}{5}-\cdots$ | $x$ |

## 6. Esercizi

**Esercizio 1 (introduttivo).** Scrivi il polinomio di MacLaurin di $f(x)=\cos x$ fino all'ordine 6.

<details>
<summary>Soluzione</summary>

Le derivate di $\cos$ in $0$ valgono $1,0,-1,0,1,0,-1$ per $k=0,\dots,6$ (nulle in ordine dispari). Quindi
$$T_6(x)=1-\frac{x^2}{2}+\frac{x^4}{24}-\frac{x^6}{720}.$$
</details>

**Esercizio 2 (introduttivo).** Calcola $\displaystyle\lim_{x\to0}\frac{\ln(1+x)-x}{x^2}$.

<details>
<summary>Soluzione</summary>

$\ln(1+x)=x-\frac{x^2}{2}+o(x^2)$, dunque $\ln(1+x)-x=-\frac{x^2}{2}+o(x^2)$ e
$$\frac{\ln(1+x)-x}{x^2}=-\frac12+o(1)\to-\frac12.$$
</details>

**Esercizio 3 (introduttivo).** Determina l'ordine dell'infinitesimo di $f(x)=e^x-1-x-\frac{x^2}{2}$ per $x\to0$.

<details>
<summary>Soluzione</summary>

$e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+o(x^3)$, quindi $f(x)=\frac{x^3}{6}+o(x^3)$: infinitesimo di **ordine 3**, con $f(x)\sim x^3/6$.
</details>

**Esercizio 4 (standard).** Scrivi $T_2$ di $f(x)=\sqrt{x}$ centrato in $a=4$.

<details>
<summary>Soluzione</summary>

$f(4)=2$; $f'(x)=\frac{1}{2\sqrt x}\Rightarrow f'(4)=\frac14$; $f''(x)=-\frac{1}{4x^{3/2}}\Rightarrow f''(4)=-\frac{1}{32}$. Quindi
$$T_2(x)=2+\frac14(x-4)-\frac{1}{64}(x-4)^2.$$
</details>

**Esercizio 5 (standard).** Calcola $\displaystyle\lim_{x\to0}\frac{\sin x-x\cos x}{x^3}$.

<details>
<summary>Soluzione</summary>

$\sin x=x-\frac{x^3}{6}+o(x^3)$ e $x\cos x=x\big(1-\frac{x^2}{2}+o(x^2)\big)=x-\frac{x^3}{2}+o(x^3)$. Perciò
$$\sin x-x\cos x=\Big(x-\frac{x^3}{6}\Big)-\Big(x-\frac{x^3}{2}\Big)+o(x^3)=\frac{x^3}{3}+o(x^3),$$
e il limite vale $\frac13$.
</details>

**Esercizio 6 (standard).** Approssima $\sqrt{1{,}04}$ con lo sviluppo binomiale di ordine 2 e stima l'errore con Lagrange.

<details>
<summary>Soluzione</summary>

Con $(1+x)^{1/2}=1+\frac{x}{2}-\frac{x^2}{8}+o(x^2)$ e $x=0{,}04$:
$$\sqrt{1{,}04}\approx 1+0{,}02-\frac{(0{,}04)^2}{8}=1+0{,}02-0{,}0002=1{,}0198.$$
La derivata terza di $(1+x)^{1/2}$ è $\frac38(1+x)^{-5/2}$, maggiorata da $M=\frac38$ su $[0,\,0{,}04]$. Quindi $|R_2|\le\frac{3/8}{3!}(0{,}04)^3=\frac{1}{16}\cdot6{,}4\times10^{-5}=4\times10^{-6}$. (Valore vero $1{,}019804$; errore effettivo $\approx 4\times10^{-6}$.)
</details>

**Esercizio 7 (avanzato).** Sviluppa $f(x)=\dfrac{1}{\cos x}$ fino all'ordine 2 usando lo sviluppo di $\cos x$ e quello di $\frac{1}{1+u}$.

<details>
<summary>Soluzione</summary>

$\cos x=1-\frac{x^2}{2}+o(x^2)$. Poniamo $u=-\frac{x^2}{2}+o(x^2)$, così $\frac{1}{\cos x}=\frac{1}{1+u}=1-u+o(u)$ (nota: $u^2=o(x^2)$). Dunque
$$\frac{1}{\cos x}=1-\Big(-\frac{x^2}{2}\Big)+o(x^2)=1+\frac{x^2}{2}+o(x^2).$$
*Controllo:* $\frac{1}{\cos x}=\sec x$ ha in effetti sviluppo $1+\frac{x^2}{2}+\frac{5x^4}{24}+\cdots$. ✓
</details>

**Esercizio 8 (avanzato).** Classifica il punto critico di $f(x)=1-\cos(x^2)$ in $x=0$ usando Taylor.

<details>
<summary>Soluzione</summary>

$f'(x)=2x\sin(x^2)\Rightarrow f'(0)=0$: punto critico. Con $\cos u=1-\frac{u^2}{2}+o(u^2)$ e $u=x^2$:
$$1-\cos(x^2)=\frac{x^4}{2}+o(x^4)>0\quad\text{per }x\ne0,$$
quindi $x=0$ è un **minimo locale** (e assoluto). Nota: il test della derivata seconda "standard" fallisce ($f''(0)=0$); è lo sviluppo a rivelare che il primo termine non nullo è di ordine 4, positivo.
</details>

**Esercizio 9 (avanzato).** Calcola $\displaystyle\lim_{x\to0}\frac{\cos x-e^{-x^2/2}}{x^4}$.

<details>
<summary>Soluzione</summary>

$\cos x=1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4)$. Per $e^{-x^2/2}$ poni $u=-\frac{x^2}{2}$: $e^u=1+u+\frac{u^2}{2}+o(u^2)=1-\frac{x^2}{2}+\frac{x^4}{8}+o(x^4)$. Sottraendo:
$$\cos x-e^{-x^2/2}=\Big(\frac{1}{24}-\frac{1}{8}\Big)x^4+o(x^4)=-\frac{1}{12}x^4+o(x^4),$$
poiché $\frac{1}{24}-\frac{3}{24}=-\frac{2}{24}=-\frac{1}{12}$. Il limite vale $-\dfrac{1}{12}$.
</details>

**Esercizio 10 (applicativo).** Un'obbligazione ha prezzo $P(y)$ in funzione del rendimento $y$. Attorno a $y_0$ vale lo sviluppo $P(y)\approx P(y_0)+P'(y_0)(y-y_0)+\frac12 P''(y_0)(y-y_0)^2$. Sapendo che, per definizione, la *duration modificata* è $D=-P'(y_0)/P(y_0)$ e la *convexity* è $C=P''(y_0)/P(y_0)$, esprimi la variazione relativa di prezzo $\Delta P/P$ per una variazione $\Delta y=y-y_0$ e commenta il segno dei due contributi.

<details>
<summary>Soluzione</summary>

Dividendo lo sviluppo per $P(y_0)$ e usando le definizioni:
$$\frac{\Delta P}{P}=\frac{P(y)-P(y_0)}{P(y_0)}\approx -D\,\Delta y+\frac12 C\,(\Delta y)^2.$$
Il termine di **duration** è lineare e negativo (prezzi e rendimenti si muovono in direzioni opposte: se $y$ sale, $P$ scende). Il termine di **convexity** è quadratico e, per obbligazioni ordinarie, positivo ($C>0$): corregge la stima lineare *sempre verso l'alto*, sia per rialzi sia per ribassi del tasso. Ecco perché la sola duration sottostima il prezzo per grandi variazioni, e la convexity — cioè il termine di Taylor del secondo ordine — è il correttivo. È lo stesso meccanismo dell'approssimazione quadratica di §2.1, applicato al prezzo di un titolo.
</details>
