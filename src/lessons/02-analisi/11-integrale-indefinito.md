---
id: analisi-11-integrale-indefinito
titolo: "Integrale indefinito e primitive"
materia: analisi
argomento: "Calcolo integrale (una variabile)"
modulo: "Primitive e integrale indefinito"
livello: universitario
slug: analisi-11-integrale-indefinito

# legacy
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: "Integrale indefinito e primitive"
title_en: "Indefinite integral and antiderivatives"
level: blue
order: 11
source_book: "OpenStax, Calculus Vol. 1; A. Villanacci, Notes for Mathematics 1"
source_chapter: "OpenStax Cap. 4.10; Villanacci Cap. 8"

prerequisiti:
  - analisi-06-derivata-definizione
  - analisi-07-regole-derivazione
  - analisi-08-teoremi-differenziale
  - analisi-04-continuita

collegamenti:
  - analisi-12-integrale-definito
  - analisi-13-tecniche-integrazione
  - analisi-14-applicazioni-integrale

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 4.10 — Antiderivatives (definizione di primitiva, forma F+C, tavola delle primitive elementari, integrale indefinito, problemi ai valori iniziali)"
    note: "struttura e ordine di esposizione; tavola delle primitive letta come derivazione all'indietro; motivazione cinematica (accelerazione → velocità → posizione)"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 8 — Derivazione (regole usate al contrario) e convenzioni notazionali d'esame"
    note: "priorità su notazione (x₀, y₀, C) e convenzioni d'esame; il teorema 'primitive differiscono per una costante' come corollario del teorema del valor medio di Lagrange (lez.08)"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - plot
  - slider
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Il calcolo differenziale ha risposto a una domanda: *data una funzione $F$, quanto velocemente cambia?* La risposta è la derivata $f = F'$. Questa lezione apre la domanda inversa, che è altrettanto naturale e molto più frequente nelle applicazioni: *data la velocità di cambiamento $f$, come si ricostruisce la funzione $F$ da cui proviene?*

L'esempio più concreto è il moto. Un tachimetro registra la velocità $v(t)$ dell'auto in ogni istante — cioè il tasso di variazione della posizione, $v = s'$. Se voglio sapere *dove* si trova l'auto, devo risalire da $v$ a $s$. Ma c'è un'ambiguità inevitabile: il tachimetro non dice **da dove** l'auto è partita. Se una funzione $s(t)$ ha derivata $v(t)$, allora anche $s(t) + 100$ (l'intero viaggio traslato di $100$ metri più avanti) ha la stessa derivata, perché la costante additiva sparisce nella derivazione. Conoscere il tasso di variazione fissa la *forma* della funzione, non la sua *quota di partenza*.

Questa ambiguità non è un difetto: è il contenuto informativo mancante. Il tasso $f$ ci dà tutto tranne una costante; per fissarla serve un dato in più — la posizione a un istante noto. È esattamente lo schema di ogni problema di ricostruzione: dal costo marginale $C'(q)$ si risale al costo totale $C(q)$, ma solo a meno del **costo fisso**; dall'accelerazione $a(t)$ si risale alla velocità, ma solo a meno della **velocità iniziale**.

L'operazione «da $f$ risalgo a una $F$ con $F' = f$» si chiama **antiderivazione**, e la funzione $F$ è una **primitiva** di $f$. La domanda guida di tutta la lezione è duplice:

> Data $f$, quali funzioni $F$ soddisfano $F' = f$, e **quante** sono?

Vedremo che, se ne esiste una, ne esistono infinite, ma tutte differiscono tra loro solo per una costante: è la traduzione rigorosa dell'ambiguità «non so da dove sono partito». Il simbolo che raccoglie questa intera famiglia è l'**integrale indefinito** $\int f\,dx$, dove il segno $\int$ è una «S» allungata introdotta da Leibniz per *summa* (il perché di quel nome — l'integrale come somma di contributi infinitesimi — diventa chiaro solo con l'integrale definito e il [Teorema Fondamentale del Calcolo](/analisi/calcolo-integrale-una-variabile/12-integrale-definito), lez.12).

Un'avvertenza di onestà didattica. In questa lezione l'antiderivazione appare come un *gioco algebrico di inversione*: leggere all'indietro la tabella delle derivate. Il motivo per cui è uno strumento potente — calcolare aree, accumuli, valori medi — non è ancora visibile qui: emerge con il TFC (lez.12), che rivela che «invertire la derivata» e «sommare infiniti contributi infinitesimi» sono la stessa cosa. Per ora costruiamo il linguaggio e le regole di base.

## 2. Teoria

### 2.1 Primitiva: definizione

**Definizione (primitiva).** Sia $I \subseteq \mathbb{R}$ un **intervallo**. Una funzione $F: I \to \mathbb{R}$ è una **primitiva** (o *antiderivata*) di $f: I \to \mathbb{R}$ su $I$ se $F$ è derivabile su $I$ e

$$F'(x) = f(x) \qquad \text{per ogni } x \in I.$$

Lettura in linguaggio naturale: $F$ è una primitiva di $f$ quando derivando $F$ si riottiene esattamente $f$, in ogni punto dell'intervallo. La primitiva è dunque l'oggetto «un gradino sopra» $f$ nella scala della derivazione: $f$ è la derivata di $F$, e $F$ è ciò da cui $f$ discende.

L'ipotesi che il dominio sia un **intervallo** non è un dettaglio decorativo: è ciò che rende vero il teorema di struttura del prossimo paragrafo (in §3.1 vedremo esattamente dove interviene e cosa accade se cade). Il termine «derivabile su $I$» va inteso nel senso della [derivata](/analisi/calcolo-differenziale-una-variabile/06-derivata-definizione) (lez.06); agli estremi eventualmente inclusi si intende la derivata unilaterale.

*Micro-esempio.* $F(x) = \dfrac{x^2}{2}$ è una primitiva di $f(x) = x$ su $\mathbb{R}$, perché $\left(\dfrac{x^2}{2}\right)' = \dfrac{2x}{2} = x$. Ma anche $\dfrac{x^2}{2} + 7$ lo è: la sua derivata è ancora $x$, dato che la costante $7$ ha derivata nulla. Già da questo caso si intravede che le primitive non sono uniche.

### 2.2 Quante primitive? Il teorema di struttura

Il micro-esempio suggerisce la risposta alla domanda «quante sono?». La enunciamo come teorema; la dimostrazione completa è in §3.1.

**Teorema (struttura dell'insieme delle primitive).** Sia $f: I \to \mathbb{R}$ definita su un intervallo $I$, e supponiamo che $f$ ammetta almeno una primitiva $F$ su $I$. Allora:

1. per ogni costante $C \in \mathbb{R}$, la funzione $F + C$ è ancora una primitiva di $f$;
2. **ogni** primitiva $G$ di $f$ su $I$ è della forma $G = F + C$ per un'opportuna costante $C \in \mathbb{R}$.

In altre parole, l'insieme di tutte le primitive di $f$ su un intervallo è esattamente

$$\{\, F + C \;:\; C \in \mathbb{R} \,\}.$$

Il significato è quello anticipato: conoscere una sola primitiva $F$ significa conoscerle **tutte**, perché le altre si ottengono da $F$ facendola scorrere verso l'alto o verso il basso di una quantità costante. Il grado di libertà è **uno solo**: la costante $C$. È la controparte esatta dell'ambiguità «non so da dove sono partito».

*Micro-esempio.* Tutte le primitive di $f(x) = \cos x$ su $\mathbb{R}$ sono le funzioni $\sin x + C$, perché $(\sin x)' = \cos x$ e per il teorema non ce ne sono altre: non esistono primitive del coseno «di forma diversa» da un seno traslato verticalmente.

Il grado di libertà si *vede* facendo variare $C$. Il grafico seguente mostra la famiglia $F(x) = \dfrac{x^2}{2} + C$ (primitive di $f(x)=x$): muovendo lo slider di $C$, l'intera curva si trasla in verticale senza cambiare forma — ogni membro della famiglia è una scelta diversa della quota di partenza.

```slider
{
  "title": "Famiglia delle primitive di f(x)=x:  F(x)=x²/2 + C",
  "fn": "x*x/2 + C",
  "domain": [-3, 3],
  "yDomain": [-4, 8],
  "pname": "C",
  "pmin": -4,
  "pmax": 4,
  "pdefault": 0,
  "pstep": 0.5,
  "plabel": "C",
  "label1": "x²/2 + C",
  "color": "#2563eb"
}
```

```checkpoint
[domanda]
Due primitive della stessa funzione $f$ su un intervallo hanno grafici che si intersecano in un punto. Cosa puoi concludere?

[risposta]
Che sono la **stessa** primitiva. Per il teorema di struttura, due primitive $F$ e $G$ di $f$ differiscono per una costante: $G = F + C$. Se i loro grafici si toccano in un punto $x_0$, allora $G(x_0) = F(x_0)$, cioè $F(x_0) + C = F(x_0)$, da cui $C = 0$ e quindi $G = F$ ovunque. Due primitive *distinte* sono grafici traslati verticalmente: non si incontrano mai.
```

### 2.3 L'integrale indefinito: notazione

Poiché le primitive di $f$ formano una famiglia a un parametro, conviene un simbolo che le raccolga tutte in un colpo solo.

**Definizione (integrale indefinito).** L'**integrale indefinito** di $f$ è la famiglia di tutte le sue primitive, e si scrive

$$\int f(x)\,dx = F(x) + C,$$

dove $F$ è una qualunque primitiva di $f$ e $C \in \mathbb{R}$ è la **costante di integrazione**, che rappresenta il grado di libertà.

Significato di ogni simbolo:

- $\displaystyle\int$ — il **segno di integrale**, una «S» allungata (da *summa*); indica l'operazione di antiderivazione applicata a ciò che segue.
- $f(x)$ — la **funzione integranda**: la funzione di cui cerchiamo le primitive.
- $dx$ — indica **rispetto a quale variabile** si integra (qui la $x$); serve a disambiguare quando compaiono più lettere (parametri e variabile). Il suo significato più profondo — un contributo infinitesimo da sommare — appartiene all'integrale definito (lez.12).
- $F(x) + C$ — l'**intera famiglia** delle primitive.

Un'avvertenza concettuale importante, da tenere presente per non confondersi con la lezione successiva: il membro sinistro $\int f(x)\,dx$ **non è un numero, è una famiglia di funzioni**. È un abuso comodo scrivere «$=$» tra un simbolo di integrale e un'espressione con $C$: significa «l'insieme a sinistra coincide con l'insieme delle funzioni della forma a destra». L'[integrale *definito*](/analisi/calcolo-integrale-una-variabile/12-integrale-definito) $\int_a^b f(x)\,dx$, che introdurremo in lez.12, sarà invece un **numero**: stessa parola «integrale», oggetti diversi.

*Micro-esempio.* $\displaystyle\int x^2\,dx = \frac{x^3}{3} + C$, perché $\left(\dfrac{x^3}{3}\right)' = \dfrac{3x^2}{3} = x^2$. Verificare derivando è sempre il modo più rapido per controllare un integrale indefinito.

### 2.4 La tavola delle primitive elementari

Poiché derivare è l'operazione inversa dell'antiderivare, ogni riga della tabella delle derivate, **letta al contrario**, fornisce una primitiva. La tabella seguente è precisamente la [tavola delle derivate](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07) capovolta; la verifica riga per riga (derivare la colonna centrale e riottenere $f$) è raccolta nella dimostrazione tecnica §3.3.

| $f(x)$ | $\displaystyle\int f(x)\,dx$ | Validità |
| --- | --- | --- |
| $x^{n}\ \ (n \ne -1)$ | $\dfrac{x^{n+1}}{n+1} + C$ | $n \in \mathbb{R},\ n\neq -1$ (per $n$ non intero: $x>0$) |
| $\dfrac{1}{x}$ | $\ln\lvert x\rvert + C$ | $x \neq 0$ (caso $n=-1$) |
| $e^{x}$ | $e^{x} + C$ | $\mathbb{R}$ |
| $a^{x}\ \ (a>0,\ a\neq 1)$ | $\dfrac{a^{x}}{\ln a} + C$ | $\mathbb{R}$ |
| $\sin x$ | $-\cos x + C$ | $\mathbb{R}$ |
| $\cos x$ | $\sin x + C$ | $\mathbb{R}$ |
| $\dfrac{1}{\cos^{2}x}$ | $\tan x + C$ | $x \neq \tfrac{\pi}{2}+k\pi$ |
| $\dfrac{1}{\sin^{2}x}$ | $-\cot x + C$ | $x \neq k\pi$ |
| $\dfrac{1}{\sqrt{1-x^{2}}}$ | $\arcsin x + C$ | $-1<x<1$ |
| $\dfrac{1}{1+x^{2}}$ | $\arctan x + C$ | $\mathbb{R}$ |

Due righe meritano attenzione perché sono quelle in cui l'inversione «all'indietro» nasconde una sottigliezza.

**La riga della potenza e l'eccezione $n=-1$.** La formula $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1}+C$ nasce dall'invertire la regola $\left(x^{m}\right)' = m\,x^{m-1}$: per ottenere $x^n$ come derivata serve un esponente $m = n+1$, e per correggere il fattore $m$ che scende si divide per $n+1$. Il procedimento richiede $n+1 \neq 0$, cioè $n \neq -1$: proprio per $n=-1$ la formula produrrebbe una divisione per zero. Quel caso è coperto dalla riga successiva.

**La riga di $1/x$ e il valore assoluto.** Il caso mancante $n=-1$ è $\displaystyle\int \frac{1}{x}\,dx$. La primitiva **non** è $\ln x$ ma $\ln\lvert x\rvert$. Il motivo: $\dfrac1x$ è definita e integrabile sia per $x>0$ sia per $x<0$, mentre $\ln x$ esiste solo per $x>0$. La funzione $\ln\lvert x\rvert$ estende la primitiva anche ai negativi, e la sua derivata è $\dfrac1x$ su tutto il dominio $x\neq 0$: per $x>0$ è $(\ln x)'=\tfrac1x$; per $x<0$ è $\big(\ln(-x)\big)' = \dfrac{-1}{-x} = \dfrac1x$ (regola della catena). Il dettaglio, con tutti i passaggi, è in §3.3.

*Micro-esempio.* $\displaystyle\int \big(e^x + \cos x\big)\,dx = e^x + \sin x + C$: si legge la tabella su due righe e si somma. La legittimità del «sommare le primitive» è la linearità del prossimo paragrafo.

```checkpoint
[domanda]
$\displaystyle\int \frac{1}{x}\,dx$ è $\ln x + C$ oppure $\ln\lvert x\rvert + C$? E perché la distinzione conta?

[risposta]
È $\ln\lvert x\rvert + C$. La funzione integranda $\tfrac1x$ è definita per ogni $x\neq 0$, inclusi i negativi; se scrivessimo $\ln x$ perderemmo tutta la metà $x<0$ del dominio, dove $\ln x$ non esiste. Con il valore assoluto la primitiva copre entrambi i rami: $\big(\ln\lvert x\rvert\big)' = \tfrac1x$ sia per $x>0$ sia per $x<0$. Dimenticare le barre è l'errore più comune di tutta la tavola.
```

### 2.5 Linearità dell'integrale indefinito

**Proprietà (linearità).** Se $f$ e $g$ ammettono primitive su un intervallo $I$ e $\alpha,\beta \in \mathbb{R}$, allora

$$\int \big[\alpha f(x) + \beta g(x)\big]\,dx = \alpha \int f(x)\,dx + \beta \int g(x)\,dx.$$

Lettura: l'integrale di una combinazione lineare è la combinazione lineare degli integrali. In particolare le costanti moltiplicative «escono» dall'integrale e le somme si spezzano. La ragione profonda è che l'antiderivazione eredita la linearità dalla [derivazione](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07), che è a sua volta lineare; la dimostrazione con la contabilità corretta delle costanti è in §3.2.

Una nota sulla costante: a rigore, ciascun integrale a destra porterebbe una propria costante, ma la somma di due costanti arbitrarie è di nuovo una costante arbitraria. Per questo, nella pratica, si scrive **un solo** $+C$ alla fine del calcolo, non uno per ogni termine.

*Micro-esempio.* $\displaystyle\int \big(3x^2 - 5x + 2\big)\,dx = 3\cdot\frac{x^3}{3} - 5\cdot\frac{x^2}{2} + 2x + C = x^3 - \frac{5x^2}{2} + 2x + C$. Ogni monomio si integra con la riga della potenza; i coefficienti escono per linearità; un unico $C$ chiude il conto.

```checkpoint
[domanda]
Vale $\displaystyle\int f(x)\,g(x)\,dx = \left(\int f(x)\,dx\right)\left(\int g(x)\,dx\right)$? Prova a controllare su $f(x)=g(x)=x$.

[risposta]
No, non esiste una regola del genere. La linearità riguarda somme e multipli, **non** prodotti. Controllo diretto con $f=g=x$: a sinistra $\int x\cdot x\,dx = \int x^2\,dx = \tfrac{x^3}{3}+C$; a destra $\left(\int x\,dx\right)^2 = \left(\tfrac{x^2}{2}\right)^2 = \tfrac{x^4}{4}$, che ha derivata $x^3\neq x^2$. I due risultati sono diversi, e il secondo non è nemmeno una primitiva di $x^2$. Per integrare un prodotto servono le tecniche di lez.13 (sostituzione, per parti), non un'inesistente «regola del prodotto per gli integrali».
```

### 2.6 Il $+C$ non è un fastidio: problemi ai valori iniziali

La costante $C$ non è un residuo da tollerare: è il posto dove si inserisce l'informazione mancante. Molte situazioni concrete richiedono di trovare la **primitiva specifica** che passa per un punto assegnato. Il problema si formula così: trovare $F$ tale che

$$F'(x) = f(x), \qquad F(x_0) = y_0.$$

La prima equazione fissa la famiglia $F(x) = (\text{una primitiva}) + C$; la seconda — la **condizione iniziale** — fissa il valore di $C$, e quindi seleziona **un unico** membro della famiglia. Un'equazione che coinvolge una funzione incognita e la sua derivata è una **equazione differenziale**; questa, con $F'$ assegnata esplicitamente, è la più semplice possibile, e il dato $F(x_0)=y_0$ la rende un **problema ai valori iniziali** con soluzione unica (l'unicità è garantita proprio dal teorema di struttura §2.2: fissato un punto, la costante è determinata).

Il legame tra tasso e funzione si vede bene mettendo a confronto i due grafici. Nel piano seguente, $F(x)=\dfrac{x^2}{2}$ è una primitiva di $f(x)=x$: dove $f>0$ (cioè $x>0$) la primitiva **cresce**; dove $f<0$ (cioè $x<0$) la primitiva **decresce**; nel punto in cui $f=0$ (cioè $x=0$) la primitiva ha tangente orizzontale, qui il suo minimo. Il segno del tasso governa la monotonia della funzione ricostruita — l'osservazione centrale che il TFC renderà quantitativa.

```plot
{
  "title": "Il tasso f e la funzione ricostruita F:  F'(x)=f(x)",
  "fn": "x*x/2",
  "fn2": "x",
  "domain": [-3, 3],
  "yDomain": [-3, 5],
  "label1": "F(x)=x²/2",
  "label2": "f(x)=x",
  "color": "#2563eb",
  "color2": "#dc2626"
}
```

*Micro-esempio.* Trovare $F$ con $F'(x) = 2x$ e $F(0)=3$. La famiglia è $F(x)=x^2+C$; imponendo $F(0)=0^2+C=3$ si ottiene $C=3$, quindi l'unica soluzione è $F(x)=x^2+3$. La condizione iniziale ha «alzato» la parabola fino a farla passare per $(0,3)$.

## 3. Dimostrazioni

### 3.1 Le primitive differiscono per una costante

Dimostriamo il teorema di struttura di §2.2. Il punto (1) richiede una sola derivazione; il cuore è il punto (2), che è ciò che rende *utile* conoscere una sola primitiva.

**Punto (1): se $F$ è una primitiva, lo è anche $F+C$.** Sia $C$ una costante qualsiasi. Deriviamo $F+C$ usando la [linearità della derivata](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07) e il fatto che la derivata di una costante è nulla:

$$(F+C)'(x) = F'(x) + (C)' = F'(x) + 0 = F'(x) = f(x),$$

dove nell'ultimo passaggio si è usata l'ipotesi che $F$ è primitiva di $f$. Dunque $F+C$ soddisfa la definizione di primitiva. $\quad\blacksquare$

**Punto (2): ogni primitiva $G$ ha la forma $F+C$.** Siano $F$ e $G$ due primitive di $f$ sull'intervallo $I$. Definiamo la funzione differenza

$$H(x) := G(x) - F(x), \qquad x \in I.$$

*Passo 1 — la derivata di $H$ è nulla ovunque.* Per la linearità della derivata (lez.07):

$$H'(x) = G'(x) - F'(x).$$

Ma $G$ e $F$ sono entrambe primitive di $f$, quindi $G'(x) = f(x)$ e $F'(x) = f(x)$ per ogni $x\in I$ (definizione di primitiva). Sostituendo:

$$H'(x) = f(x) - f(x) = 0 \qquad \text{per ogni } x \in I.$$

*Passo 2 — una funzione con derivata nulla su un intervallo è costante.* Questo è esattamente il **corollario del [teorema di Lagrange](/analisi/calcolo-differenziale-una-variabile/08-teoremi-differenziale)** (lez.08): se una funzione ha derivata identicamente nulla su un *intervallo*, allora è costante su quell'intervallo. È qui che l'ipotesi «$I$ è un intervallo» diventa indispensabile — il corollario si appoggia al teorema del valor medio, che richiede di poter congiungere due punti qualsiasi del dominio restando dentro il dominio, cosa garantita solo su un intervallo. Applicandolo a $H$: esiste una costante $C \in \mathbb{R}$ tale che

$$H(x) = C \qquad \text{per ogni } x \in I.$$

*Passo 3 — conclusione.* Ricordando la definizione di $H$: $G(x) - F(x) = C$, cioè $G(x) = F(x) + C$ per ogni $x\in I$. $\quad\blacksquare$

**Perché serve l'intervallo (controesempio).** Se il dominio *non* è un intervallo, il punto (2) può fallire. Si consideri $f(x) = \dfrac1x$ sul dominio $\mathbb{R}\setminus\{0\}$, che è unione di due intervalli disgiunti $(-\infty,0)$ e $(0,+\infty)$. La funzione

$$G(x) = \begin{cases} \ln\lvert x\rvert + 1 & x>0 \\[4pt] \ln\lvert x\rvert - 2 & x<0 \end{cases}$$

ha derivata $\dfrac1x$ su tutto il dominio, quindi è una primitiva; ma **non** differisce da $\ln\lvert x\rvert$ per una singola costante — su un ramo la differenza è $+1$, sull'altro $-2$. Sul dominio spezzato la «costante» può essere diversa su ogni pezzo connesso. Questo non contraddice il teorema, che parla di intervalli: su ciascuno dei due intervalli separatamente la differenza è costante, in accordo con l'enunciato. È il motivo per cui, con $\ln\lvert x\rvert$, il $+C$ va inteso con cautela sui domini disconnessi.

### 3.2 Linearità dell'integrale indefinito

Dimostriamo la proprietà di §2.5. Siano $F$ una primitiva di $f$ e $G$ una primitiva di $g$ sull'intervallo $I$, e siano $\alpha,\beta\in\mathbb{R}$.

*Passo 1 — $\alpha F + \beta G$ è una primitiva di $\alpha f + \beta g$.* Deriviamo la combinazione, usando la [linearità della derivata](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07), che permette di portare la derivata dentro somme e fuori dai fattori costanti:

$$(\alpha F + \beta G)'(x) = \alpha F'(x) + \beta G'(x).$$

Poiché $F'=f$ e $G'=g$ per definizione di primitiva:

$$(\alpha F + \beta G)'(x) = \alpha f(x) + \beta g(x).$$

Quindi $\alpha F + \beta G$ è una primitiva di $\alpha f + \beta g$, il che dà almeno una funzione al membro destro dell'uguaglianza da dimostrare.

*Passo 2 — le due famiglie coincidono.* Dobbiamo mostrare che l'insieme a sinistra, $\displaystyle\int(\alpha f+\beta g)\,dx$, e l'espressione a destra, $\alpha\displaystyle\int f\,dx + \beta\displaystyle\int g\,dx$, descrivono la **stessa** famiglia di funzioni. Per il teorema di struttura §2.2, applicato a $\alpha f + \beta g$ (che per il Passo 1 ha la primitiva $\alpha F+\beta G$), il membro sinistro è

$$\int (\alpha f + \beta g)\,dx = \alpha F + \beta G + C, \qquad C\in\mathbb{R}.$$

Il membro destro, scrivendo $\displaystyle\int f\,dx = F + C_1$ e $\displaystyle\int g\,dx = G + C_2$, è

$$\alpha(F + C_1) + \beta(G + C_2) = \alpha F + \beta G + \underbrace{(\alpha C_1 + \beta C_2)}_{=:\,C'}.$$

Resta da verificare che $C$ e $C'$ percorrono lo stesso insieme, cioè tutto $\mathbb{R}$. A sinistra $C$ è una costante arbitraria, quindi copre $\mathbb{R}$. A destra, purché almeno uno tra $\alpha,\beta$ sia non nullo, al variare di $C_1,C_2\in\mathbb{R}$ la quantità $\alpha C_1+\beta C_2$ assume ogni valore reale (basta, ad esempio con $\alpha\neq 0$, scegliere $C_1 = C'/\alpha$ e $C_2=0$). Dunque le due famiglie coincidono. $\quad\blacksquare$

Questo passo 2 chiarisce anche la nota pratica di §2.5: le costanti separate $\alpha C_1+\beta C_2$ si fondono in un unico $C'$ arbitrario, ed è per questo che nel calcolo si scrive un solo $+C$.

### 3.3 Verifica della tavola delle primitive elementari

<details class="dim-tecnica">
<summary>Dettaglio tecnico — verifica riga per riga per derivazione</summary>

Ogni riga della tavola di §2.4 si verifica derivando la primitiva proposta e controllando di riottenere l'integranda. Si usano le [regole di derivazione](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07), senza saltare passaggi.

**Potenza $x^n$ ($n\neq-1$).** Deriviamo $\dfrac{x^{n+1}}{n+1}$ trattando $\dfrac1{n+1}$ come costante moltiplicativa e applicando la regola $(x^m)'=m\,x^{m-1}$ con $m=n+1$:
$$\left(\frac{x^{n+1}}{n+1}\right)' = \frac{1}{n+1}\cdot(n+1)\,x^{n+1-1} = x^n. \checkmark$$
Il passaggio richiede $n+1\neq 0$, cioè $n\neq -1$, altrimenti si dividerebbe per zero.

**Caso $1/x$.** Verifichiamo $\big(\ln\lvert x\rvert\big)' = \dfrac1x$ separando i due segni, perché $\lvert x\rvert$ è definita a tratti.
- Per $x>0$: $\lvert x\rvert = x$, quindi $\big(\ln x\big)' = \dfrac1x$ (derivata del logaritmo, lez.07). $\checkmark$
- Per $x<0$: $\lvert x\rvert = -x$, quindi per la regola della catena $\big(\ln(-x)\big)' = \dfrac{1}{-x}\cdot(-x)' = \dfrac{1}{-x}\cdot(-1) = \dfrac1x$. $\checkmark$

In entrambi i rami la derivata è $\dfrac1x$, il che giustifica il valore assoluto.

**Esponenziale $e^x$.** $\big(e^x\big)' = e^x$ (la funzione esponenziale coincide con la propria derivata). $\checkmark$

**Esponenziale $a^x$ ($a>0,a\neq1$).** Scriviamo $a^x = e^{x\ln a}$; per la catena, $\big(e^{x\ln a}\big)' = e^{x\ln a}\cdot\ln a = a^x\ln a$. Dunque, dividendo per la costante $\ln a$ (non nulla perché $a\neq1$):
$$\left(\frac{a^x}{\ln a}\right)' = \frac{a^x\ln a}{\ln a} = a^x. \checkmark$$

**$\sin x$ e $\cos x$.** $\big(-\cos x\big)' = -(-\sin x) = \sin x$; $\big(\sin x\big)' = \cos x$. $\checkmark$

**$1/\cos^2 x$.** $\big(\tan x\big)' = \dfrac{1}{\cos^2 x}$ (derivata della tangente, dal quoziente $\sin/\cos$, lez.07). $\checkmark$

**$1/\sin^2 x$.** $\big(-\cot x\big)' = -\left(-\dfrac{1}{\sin^2 x}\right) = \dfrac{1}{\sin^2 x}$. $\checkmark$

**$1/\sqrt{1-x^2}$.** $\big(\arcsin x\big)' = \dfrac{1}{\sqrt{1-x^2}}$ (derivata dell'arcoseno dalla funzione inversa, lez.07), valida per $-1<x<1$. $\checkmark$

**$1/(1+x^2)$.** $\big(\arctan x\big)' = \dfrac{1}{1+x^2}$ (derivata dell'arcotangente dall'inversa, lez.07). $\checkmark$

Ogni riga è così ricondotta a una derivata nota: la tavola delle primitive **è** la tavola delle derivate letta da destra a sinistra.
</details>

## 4. Esempi

**Esempio 1 (introduttivo — polinomio).** Calcolare $\displaystyle\int (4x^3 - 6x + 1)\,dx$.

*Strategia:* linearità (§2.5) + riga della potenza (§2.4), termine per termine.

$$\int (4x^3 - 6x + 1)\,dx = 4\cdot\frac{x^4}{4} - 6\cdot\frac{x^2}{2} + 1\cdot x + C = x^4 - 3x^2 + x + C.$$

*Verifica:* $\big(x^4 - 3x^2 + x\big)' = 4x^3 - 6x + 1$. Corretto.

> ⚠️ **Errore da evitare — dimenticare il $+C$.** Scrivere «$\int(4x^3-6x+1)\,dx = x^4-3x^2+x$» è incompleto: l'integrale indefinito è una *famiglia*, non una singola funzione. Senza $+C$ si sta indicando una sola primitiva tra le infinite, e nei problemi ai valori iniziali (§2.6) si perderebbe proprio il parametro da determinare.

---

**Esempio 2 (introduttivo — riscrittura in potenze).** Calcolare $\displaystyle\int \left(\frac{2}{\sqrt{x}} + 3e^x\right)dx$.

*Strategia:* la riga della potenza si applica solo a $x$ elevato a un esponente esplicito; occorre prima riscrivere $\dfrac{2}{\sqrt{x}} = 2x^{-1/2}$.

$$\int 2x^{-1/2}\,dx = 2\cdot\frac{x^{-1/2+1}}{-1/2+1} = 2\cdot\frac{x^{1/2}}{1/2} = 4x^{1/2} = 4\sqrt{x}.$$

Aggiungendo l'esponenziale per linearità:

$$\int \left(\frac{2}{\sqrt{x}} + 3e^x\right)dx = 4\sqrt{x} + 3e^x + C.$$

> ⚠️ **Attenzione — riscrivere prima di applicare la regola.** Radici, frazioni con $x$ al denominatore e prodotti vanno tradotti in potenze $x^\alpha$ *prima* di usare $\int x^n\,dx$. Qui l'esponente è $n=-\tfrac12\neq-1$, quindi la regola della potenza vale; se l'esponente fosse stato $-1$ si sarebbe dovuto passare a $\ln\lvert x\rvert$ (Esempio 3).

---

**Esempio 3 (intermedio — il caso $n=-1$ e $\arctan$).** Calcolare $\displaystyle\int \left(\frac{3}{x} + \frac{5}{1+x^2}\right)dx$.

*Strategia:* riconoscere le due righe «speciali» della tavola: $\tfrac1x \to \ln\lvert x\rvert$ e $\tfrac{1}{1+x^2}\to\arctan x$.

$$\int \left(\frac{3}{x} + \frac{5}{1+x^2}\right)dx = 3\ln\lvert x\rvert + 5\arctan x + C.$$

> ⚠️ **Errore da evitare — «power-rule» su $1/x$.** Tentare $\int \tfrac3x\,dx = 3\cdot\tfrac{x^{0}}{0}$ è una divisione per zero: la regola della potenza è esclusa proprio per $n=-1$. Il caso $\tfrac1x$ ha una primitiva di natura diversa, il logaritmo — e sempre con il valore assoluto, $\ln\lvert x\rvert$.

---

**Esempio 4 (intermedio — semplificare una funzione razionale).** Calcolare $\displaystyle\int \frac{x^3 - 2x^2 + 1}{x^2}\,dx$.

*Strategia:* non esiste una regola per l'integrale di un quoziente; si divide prima termine a termine, ottenendo una somma di potenze.

$$\frac{x^3 - 2x^2 + 1}{x^2} = \frac{x^3}{x^2} - \frac{2x^2}{x^2} + \frac{1}{x^2} = x - 2 + x^{-2}.$$

Ora si integra per linearità (con $\int x^{-2}\,dx = \dfrac{x^{-1}}{-1} = -\dfrac1x$, applicando la potenza con $n=-2\neq-1$):

$$\int (x - 2 + x^{-2})\,dx = \frac{x^2}{2} - 2x - \frac{1}{x} + C.$$

> ⚠️ **Errore da evitare — integrare un quoziente «a pezzi separati».** $\int \tfrac{\text{num}}{\text{den}}\,dx \neq \tfrac{\int \text{num}\,dx}{\int \text{den}\,dx}$: non c'è alcuna regola del quoziente per gli integrali, così come non c'è quella del prodotto (checkpoint §2.5). La via corretta è *semplificare algebricamente* finché non compaiono solo forme della tavola.

---

**Esempio 5 (intermedio — identità trigonometrica).** Calcolare $\displaystyle\int \tan^2 x\,dx$.

*Strategia:* $\tan^2 x$ non è nella tavola, ma l'identità $\tan^2 x = \dfrac{1}{\cos^2 x} - 1$ (da $\sin^2 x + \cos^2 x = 1$ diviso per $\cos^2 x$) lo riporta a righe note.

$$\int \tan^2 x\,dx = \int \left(\frac{1}{\cos^2 x} - 1\right)dx = \tan x - x + C.$$

*Verifica:* $\big(\tan x - x\big)' = \dfrac{1}{\cos^2 x} - 1 = \tan^2 x$. Corretto.

> ⚠️ **Errore da evitare — «elevare» la primitiva.** $\int \tan^2 x\,dx$ **non** è $\tfrac{\tan^3 x}{3}$: la regola della potenza vale per $x^n$, non per una funzione composta come $\tan x$. Quando l'integranda è una potenza di una funzione, prima si cerca un'identità che la riconduca alla tavola (qui) o, dalla lez.13, una tecnica dedicata.

---

**Esempio 6 (avanzato — problema ai valori iniziali).** Trovare la funzione $F$ tale che $F'(x) = 3x^2 - 4$ e $F(1) = 2$.

*Strategia:* prima la famiglia di tutte le primitive, poi si impone la condizione iniziale per fissare $C$ (§2.6).

Famiglia: $\displaystyle F(x) = \int (3x^2 - 4)\,dx = x^3 - 4x + C$.

Condizione iniziale: $F(1) = 1 - 4 + C = 2$, da cui $-3 + C = 2$, quindi $C = 5$.

Soluzione unica: $\boxed{F(x) = x^3 - 4x + 5}$.

*Verifica:* $F'(x) = 3x^2 - 4$ e $F(1) = 1 - 4 + 5 = 2$. Entrambe le condizioni soddisfatte.

---

**Esempio 7 (applicativo — economia: dal costo marginale al costo totale).** Il costo marginale di un'impresa è $C'(q) = 3q^2 + 2q + 5$ (in €/unità), e il costo fisso è $C(0) = 100$ €. Determinare la funzione di costo totale $C(q)$.

*Strategia:* il costo totale è una primitiva del costo marginale; il costo fisso è la condizione iniziale che fissa $C$.

$$C(q) = \int (3q^2 + 2q + 5)\,dq = q^3 + q^2 + 5q + K,$$

dove ho chiamato $K$ la costante di integrazione per non confonderla con la funzione $C(q)$. Imponendo $C(0) = 0 + 0 + 0 + K = 100$ si ha $K = 100$, quindi

$$C(q) = q^3 + q^2 + 5q + 100.$$

Il significato economico è netto: la costante di integrazione **è** il costo fisso — ciò che si spende anche producendo zero unità.

> ⚠️ **Attenzione — la costante ha un significato, non è un dettaglio formale.** Qui trascurare il $+K$ equivarrebbe a dimenticare i $100$ € di costo fisso, cioè a sbagliare il costo totale a ogni livello di produzione. La condizione iniziale porta informazione economica reale.

---

**Esempio 8 (applicativo — fisica: doppia antiderivazione).** Un corpo cade con accelerazione costante $a(t) = -g$ (con $g = 9{,}8\ \text{m/s}^2$, asse verticale rivolto verso l'alto), partendo con velocità iniziale $v(0) = v_0$ e quota iniziale $s(0) = s_0$. Determinare velocità e posizione.

*Strategia:* si antiderivano *due volte*, ricavando ogni costante da una condizione iniziale (questo è lo schema che sta dietro le equazioni del moto).

Prima antiderivazione (accelerazione → velocità):
$$v(t) = \int (-g)\,dt = -g\,t + C_1, \qquad v(0) = C_1 = v_0 \ \Rightarrow\ v(t) = -g\,t + v_0.$$

Seconda antiderivazione (velocità → posizione):
$$s(t) = \int (-g\,t + v_0)\,dt = -\frac{g}{2}\,t^2 + v_0\,t + C_2, \qquad s(0) = C_2 = s_0.$$

Quindi

$$s(t) = -\frac{1}{2}g\,t^2 + v_0\,t + s_0,$$

la nota legge del moto uniformemente accelerato. Ogni costante di integrazione corrisponde a un dato iniziale: $v_0$ dalla prima, $s_0$ dalla seconda.

> ⚠️ **Attenzione — una costante per ogni antiderivazione.** Integrando due volte si introducono *due* costanti, e servono *due* condizioni iniziali (velocità e posizione di partenza) per determinarle entrambe. Fermarsi a una sola condizione lascerebbe indeterminata metà della soluzione.

## 5. Collegamenti e riepilogo

**Da dove viene, dove porta.** La tavola delle primitive (§2.4) è la [tavola delle derivate](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07) letta al contrario, e il teorema di struttura (§3.1) poggia interamente sul [corollario del teorema di Lagrange](/analisi/calcolo-differenziale-una-variabile/08-teoremi-differenziale) (lez.08): senza il calcolo differenziale, l'antiderivazione non avrebbe né regole né unicità. Guardando avanti, questa lezione è deliberatamente incompleta in due direzioni. Primo, sappiamo antiderivare solo ciò che «si riconosce» nella tavola: le tecniche per primitive non immediate — sostituzione, integrazione per parti, frazioni parziali — sono la [cassetta degli attrezzi di lez.13](/analisi/calcolo-integrale-una-variabile/13-tecniche-integrazione). Secondo, e più importante, *non abbiamo ancora visto a cosa serva davvero* una primitiva: la risposta è il [Teorema Fondamentale del Calcolo](/analisi/calcolo-integrale-una-variabile/12-integrale-definito) (lez.12), che collega la primitiva $F$ al calcolo di aree e accumuli tramite $\int_a^b f = F(b) - F(a)$. È lì che l'inversione algebrica di oggi diventa uno strumento di misura.

**Applicazioni.** Lo schema «dal tasso alla grandezza» ricorre ovunque. In **economia**, dal costo marginale $C'(q)$ si risale al costo totale con il costo fisso come costante (Esempio 7); analogamente da ricavo marginale a ricavo, o da propensione marginale al consumo alla funzione di consumo. In **fisica**, le equazioni del moto sono doppie antiderivazioni con le condizioni iniziali a fissare le costanti (Esempio 8). In **probabilità**, la funzione di ripartizione è una primitiva della densità — un legame che diventerà rigoroso con l'integrale definito. Il filo comune è sempre la **condizione iniziale** che trasforma una famiglia a un parametro nell'unica funzione cercata.

**Riepilogo — idee e formule chiave.**

- **Primitiva:** $F$ è primitiva di $f$ su un intervallo $I$ se $F'(x)=f(x)$ per ogni $x\in I$.
- **Struttura:** su un intervallo, tutte e sole le primitive di $f$ sono $F+C$ al variare di $C\in\mathbb{R}$ (un solo grado di libertà). *Serve l'intervallo:* su domini spezzati la costante può cambiare da un pezzo all'altro.
- **Integrale indefinito:** $\displaystyle\int f(x)\,dx = F(x) + C$ — una **famiglia di funzioni**, non un numero.
- **Linearità:** $\displaystyle\int(\alpha f + \beta g)\,dx = \alpha\int f\,dx + \beta\int g\,dx$; un solo $+C$ a fine calcolo.
- **Casi da ricordare:** $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1}+C$ (solo $n\neq-1$); $\displaystyle\int \frac1x\,dx = \ln\lvert x\rvert + C$ (caso $n=-1$, con valore assoluto).
- **Problema ai valori iniziali:** $F'=f$, $F(x_0)=y_0$ determina un'**unica** $F$; la costante $C$ è dove entra il dato iniziale.

$$\boxed{\ \int x^n\,dx = \frac{x^{n+1}}{n+1}+C\ (n\neq -1), \qquad \int \frac{1}{x}\,dx = \ln\lvert x\rvert + C\ }$$

## 6. Esercizi

**Esercizio 1 (introduttivo — integrali immediati).** Calcolare:
(a) $\displaystyle\int (5x^4 - 3x^2 + 7)\,dx$; \quad (b) $\displaystyle\int (2\cos x - e^x)\,dx$; \quad (c) $\displaystyle\int \frac{4}{1+x^2}\,dx$.

<details>
<summary>Soluzione</summary>

(a) Linearità e regola della potenza termine per termine:
$$\int (5x^4 - 3x^2 + 7)\,dx = 5\cdot\frac{x^5}{5} - 3\cdot\frac{x^3}{3} + 7x + C = x^5 - x^3 + 7x + C.$$

(b) $\displaystyle\int (2\cos x - e^x)\,dx = 2\sin x - e^x + C$.

(c) $\displaystyle\int \frac{4}{1+x^2}\,dx = 4\arctan x + C$.
</details>

---

**Esercizio 2 (introduttivo — riscrivere in potenze).** Calcolare:
(a) $\displaystyle\int \left(3\sqrt{x} - \frac{1}{x^3}\right)dx$; \quad (b) $\displaystyle\int \frac{x^2 + \sqrt[3]{x}}{x}\,dx$.

<details>
<summary>Soluzione</summary>

(a) $3\sqrt{x} = 3x^{1/2}$ e $\dfrac{1}{x^3} = x^{-3}$ (con $-3\neq-1$):
$$\int \left(3x^{1/2} - x^{-3}\right)dx = 3\cdot\frac{x^{3/2}}{3/2} - \frac{x^{-2}}{-2} + C = 2x^{3/2} + \frac{1}{2x^2} + C.$$

(b) Prima si divide: $\dfrac{x^2 + x^{1/3}}{x} = x + x^{1/3 - 1} = x + x^{-2/3}$ (con $-2/3\neq-1$):
$$\int \left(x + x^{-2/3}\right)dx = \frac{x^2}{2} + \frac{x^{1/3}}{1/3} + C = \frac{x^2}{2} + 3\sqrt[3]{x} + C.$$
</details>

---

**Esercizio 3 (intermedio — i casi speciali della tavola).** Calcolare:
(a) $\displaystyle\int \left(\frac{2}{x} - \frac{3}{\sqrt{1-x^2}}\right)dx$; \quad (b) $\displaystyle\int \frac{x^2}{1+x^2}\,dx$.

<details>
<summary>Soluzione</summary>

(a) $\displaystyle\int \frac{2}{x}\,dx = 2\ln\lvert x\rvert$ (valore assoluto!) e $\displaystyle\int \frac{-3}{\sqrt{1-x^2}}\,dx = -3\arcsin x$:
$$\int \left(\frac{2}{x} - \frac{3}{\sqrt{1-x^2}}\right)dx = 2\ln\lvert x\rvert - 3\arcsin x + C.$$

(b) Trucco algebrico: $\dfrac{x^2}{1+x^2} = \dfrac{(1+x^2) - 1}{1+x^2} = 1 - \dfrac{1}{1+x^2}$. Quindi
$$\int \frac{x^2}{1+x^2}\,dx = \int \left(1 - \frac{1}{1+x^2}\right)dx = x - \arctan x + C.$$
</details>

---

**Esercizio 4 (intermedio — semplificazione preliminare).** Calcolare:
(a) $\displaystyle\int (2x - 1)^2\,dx$; \quad (b) $\displaystyle\int \frac{x^4 - 1}{x^2 + 1}\,dx$.

<details>
<summary>Soluzione</summary>

(a) Si sviluppa il quadrato *prima* di integrare (non c'è una regola per la potenza di un binomio): $(2x-1)^2 = 4x^2 - 4x + 1$:
$$\int (4x^2 - 4x + 1)\,dx = \frac{4x^3}{3} - 2x^2 + x + C.$$

(b) Si semplifica la frazione: $\dfrac{x^4-1}{x^2+1} = \dfrac{(x^2-1)(x^2+1)}{x^2+1} = x^2 - 1$. Quindi
$$\int (x^2 - 1)\,dx = \frac{x^3}{3} - x + C.$$
</details>

---

**Esercizio 5 (intermedio — identità trigonometrica).** Calcolare $\displaystyle\int \cot^2 x\,dx$.

<details>
<summary>Soluzione</summary>

Dall'identità $1 + \cot^2 x = \dfrac{1}{\sin^2 x}$ (da $\sin^2 x + \cos^2 x = 1$ diviso per $\sin^2 x$) si ricava $\cot^2 x = \dfrac{1}{\sin^2 x} - 1$:
$$\int \cot^2 x\,dx = \int \left(\frac{1}{\sin^2 x} - 1\right)dx = -\cot x - x + C.$$
*Verifica:* $\big(-\cot x - x\big)' = \dfrac{1}{\sin^2 x} - 1 = \cot^2 x$.
</details>

---

**Esercizio 6 (avanzato — problema ai valori iniziali).** Trovare $F$ tale che $F'(x) = e^x + \dfrac{1}{x}$ e $F(1) = e$, specificando su quale intervallo si lavora.

<details>
<summary>Soluzione</summary>

Poiché la condizione iniziale è in $x_0=1>0$, si lavora sull'intervallo $(0,+\infty)$, dove $\dfrac1x$ ammette la primitiva $\ln x$ (su questo intervallo $\lvert x\rvert = x$).

Famiglia: $\displaystyle F(x) = \int \left(e^x + \frac1x\right)dx = e^x + \ln x + C$ (per $x>0$).

Condizione: $F(1) = e^1 + \ln 1 + C = e + 0 + C = e$, da cui $C = 0$.

Soluzione: $F(x) = e^x + \ln x$ su $(0,+\infty)$.
</details>

---

**Esercizio 7 (applicativo — economia).** Il ricavo marginale di un'impresa è $R'(q) = 100 - 4q$ (€/unità). Sapendo che il ricavo è nullo a produzione nulla, $R(0) = 0$, determinare la funzione di ricavo $R(q)$ e il livello di produzione che massimizza il ricavo.

<details>
<summary>Soluzione</summary>

Antiderivazione: $\displaystyle R(q) = \int (100 - 4q)\,dq = 100q - 2q^2 + K$. Da $R(0) = K = 0$ segue $K=0$, quindi
$$R(q) = 100q - 2q^2.$$
Il ricavo è massimo dove il ricavo marginale si annulla (la derivata di $R$ è $R'$): $R'(q) = 100 - 4q = 0 \Rightarrow q = 25$. Poiché $R'' = -4 < 0$, è un massimo. Ricavo massimo: $R(25) = 2500 - 1250 = 1250$ €.

*Osservazione:* $R(0)=0$ è economicamente naturale — a produzione nulla non c'è ricavo — e ha fissato $K=0$.
</details>

---

**Esercizio 8 (applicativo — fisica).** Un'auto frena con decelerazione costante $a(t) = -5\ \text{m/s}^2$ partendo da $v(0) = 20\ \text{m/s}$ e posizione $s(0) = 0$. Dopo quanti secondi si ferma, e quanto spazio percorre fino all'arresto?

<details>
<summary>Soluzione</summary>

Velocità: $\displaystyle v(t) = \int (-5)\,dt = -5t + C_1$, con $v(0) = C_1 = 20$, quindi $v(t) = -5t + 20$.

L'auto si ferma quando $v(t) = 0$: $-5t + 20 = 0 \Rightarrow t = 4\ \text{s}$.

Posizione: $\displaystyle s(t) = \int (-5t + 20)\,dt = -\frac{5}{2}t^2 + 20t + C_2$, con $s(0) = C_2 = 0$, quindi $s(t) = -\tfrac52 t^2 + 20t$.

Spazio d'arresto: $s(4) = -\tfrac52\cdot 16 + 20\cdot 4 = -40 + 80 = 40\ \text{m}$.
</details>

---

**Esercizio 9 (concettuale — il ruolo dell'intervallo).** Sia $f(x) = \dfrac{1}{x^2}$ su $\mathbb{R}\setminus\{0\}$. La funzione $G(x) = -\dfrac1x$ è una primitiva? È vero che *ogni* primitiva di $f$ su $\mathbb{R}\setminus\{0\}$ è della forma $-\dfrac1x + C$ con **un'unica** costante $C$? Motivare.

<details>
<summary>Soluzione</summary>

Sì, $G$ è una primitiva: $\left(-\dfrac1x\right)' = -(-x^{-2}) = \dfrac{1}{x^2} = f(x)$ per ogni $x\neq0$.

Ma **no**, non ogni primitiva ha una singola costante comune. Il dominio $\mathbb{R}\setminus\{0\} = (-\infty,0)\cup(0,+\infty)$ non è un intervallo: è unione di due intervalli disgiunti. Il teorema di struttura (§3.1) garantisce la costante unica *su ciascun intervallo separatamente*. Perciò
$$H(x) = \begin{cases} -\dfrac1x + 1 & x>0 \\[4pt] -\dfrac1x + 8 & x<0 \end{cases}$$
è ancora una primitiva di $f$ (la derivata è $\tfrac{1}{x^2}$ su entrambi i rami), ma la differenza $H - G$ vale $1$ su un ramo e $8$ sull'altro: non è una singola costante. È lo stesso fenomeno visto per $\ln\lvert x\rvert$ nel controesempio di §3.1.
</details>

---

**Esercizio 10 (concettuale — dalla famiglia al singolo membro).** Le curve $y = x^3 + C$ formano una famiglia di primitive di $f(x) = 3x^2$. (a) Quante di queste curve passano per il punto $(1, 5)$? (b) Esiste un punto del piano per cui passa più di una curva della famiglia?

<details>
<summary>Soluzione</summary>

(a) **Esattamente una.** Imporre il passaggio per $(1,5)$ significa $5 = 1^3 + C$, cioè $C = 4$: un'unica curva, $y = x^3 + 4$. È il contenuto dei problemi ai valori iniziali: un punto fissa la costante e quindi seleziona un solo membro.

(b) **No.** Due curve $y = x^3 + C_1$ e $y = x^3 + C_2$ con $C_1\neq C_2$ non si incontrano mai: differiscono per la costante non nulla $C_1 - C_2$ in *ogni* punto (sono traslate verticalmente). Quindi per ogni punto del piano passa una e una sola curva della famiglia — è la controparte geometrica dell'unicità dimostrata nel checkpoint di §2.2.
</details>
