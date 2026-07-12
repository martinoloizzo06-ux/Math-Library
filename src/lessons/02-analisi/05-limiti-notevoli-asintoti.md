---
id: analisi-05-limiti-notevoli-asintoti
titolo: "Limiti notevoli e asintoti"
materia: analisi
argomento: "Limiti e continuità"
modulo: "Limiti notevoli e comportamento all'infinito"
livello: universitario
slug: analisi-05-limiti-notevoli-asintoti

# legacy
subject: analisi
topic_it: "Limiti e continuità"
topic_en: "Limits and continuity"
title_it: "Limiti notevoli e asintoti"
title_en: "Notable limits and asymptotes"
level: blue
order: 5
source_book: "OpenStax, Calculus Vol. 1; A. Villanacci, Appunti di Matematica 1"
source_chapter: "OpenStax Cap. 2.2, 2.5, 4.6; Villanacci Cap. 6"

prerequisiti:
  - analisi-01-limite-intuitivo
  - analisi-02-limite-epsilon-delta
  - analisi-03-calcolo-limiti
  - analisi-04-continuita
  - base-18-seno-coseno-tangente
  - base-15-funzione-logaritmica

collegamenti:
  - analisi-06-derivata-definizione
  - analisi-09-studio-funzione
  - analisi-10-taylor
  - analisi-16-successioni
  - analisi-19-serie-taylor

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 2.2 (Squeeze), 2.5 (limiti all'infinito e asintoti), 4.6 (asintoti)"
    note: "dimostrazione geometrica di sin x / x = 1 con il teorema del confronto; classificazione degli asintoti (orizzontale/verticale/obliquo)"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 6 — Limiti notevoli ed equivalenze asintotiche"
    note: "priorità su notazione (x₀, ℓ) e convenzioni d'esame; catalogo dei limiti notevoli ed equivalenze asintotiche f ∼ g come strumento di calcolo primario (metodo d'esame); regola d'uso (solo in prodotti e quozienti)"

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

Alcuni limiti ritornano così spesso che memorizzarli conviene tanto quanto ricordare le tabelline. Sono i **limiti notevoli**: risultati esatti — non approssimazioni — che compaiono ovunque nell'analisi e che, una volta noti, trasformano calcoli apparentemente impossibili in poche righe di algebra.

Il più importante di tutti è $\displaystyle\lim_{x\to 0}\frac{\sin x}{x}=1$. A prima vista è misterioso: sia il numeratore sia il denominatore tendono a $0$, quindi siamo davanti a una forma indeterminata $0/0$. Eppure il rapporto tende a un valore preciso, $1$. Questo limite non è una curiosità: è la pietra angolare della trigonometria differenziale. Da esso discende la derivata di $\sin x$, e da quella l'intera analisi delle oscillazioni, delle onde, dei segnali e dei circuiti. Senza questo limite non esisterebbe il calcolo che descrive il suono e la luce.

Altrettanto fondamentale è $\displaystyle\lim_{x\to+\infty}\Big(1+\frac1x\Big)^x=e$. Qui la forma indeterminata è $1^\infty$: la base tende a $1$ (e $1$ elevato a qualsiasi cosa fa $1$?), ma l'esponente cresce senza limite. La tensione tra questi due effetti produce un numero irrazionale ben definito, $e\approx 2{,}71828$, la base dei logaritmi naturali e il cuore di ogni fenomeno di crescita, decadimento e interesse composto.

La seconda metà della lezione affronta una domanda geometrica: *come si comporta il grafico di una funzione quando ci si allontana all'infinito, o ci si avvicina a un punto proibito?* La risposta è il concetto di **asintoto** — una retta a cui la curva si incolla sempre di più senza (necessariamente) toccarla. Pensa a un aereo che sale: da lontano la sua traiettoria sembra una retta. O al decadimento radioattivo $N(t)=N_0e^{-\lambda t}$, che si avvicina a zero senza mai annullarsi in tempo finito: la retta $y=0$ è il suo asintoto orizzontale. Limiti notevoli e asintoti sono due facce dello stesso strumento — il limite — usato per catturare comportamenti "al bordo" del dominio.

---

## 2. Teoria

### 2.1 Limiti notevoli trigonometrici

**Limite fondamentale del seno.**

$$\lim_{x\to 0}\frac{\sin x}{x}=1.$$

In parole: il rapporto tra il seno di un angolo e l'angolo stesso tende a $1$ quando l'angolo si stringe a zero. Qui $x$ è misurato in **radianti**: è un'ipotesi essenziale, non una convenzione stilistica (in gradi il limite varrebbe $\pi/180$ — il perché è nella dimostrazione, §3.1). Il significato è che, per angoli piccoli, il seno dell'angolo e l'angolo stesso sono *quasi indistinguibili*: $\sin x\approx x$.

**Limite del coseno.**

$$\lim_{x\to 0}\frac{1-\cos x}{x^2}=\frac12,\qquad\text{da cui}\qquad \lim_{x\to 0}\frac{1-\cos x}{x}=0.$$

In parole: la distanza di $\cos x$ da $1$ è, per $x$ piccolo, circa metà del quadrato dell'angolo. Il coseno si avvicina a $1$ "più in fretta" (all'ordine $x^2$) di quanto il seno si avvicini a $0$ (all'ordine $x$). Questa gerarchia di velocità sarà resa precisa dalle equivalenze asintotiche (§2.3).

*Micro-esempio.* $\displaystyle\lim_{x\to 0}\frac{\sin(2x)}{x}$: l'argomento del seno è $2x$, non $x$; moltiplichiamo e dividiamo per $2$: $\frac{\sin(2x)}{x}=2\cdot\frac{\sin(2x)}{2x}\to 2\cdot 1=2$.

```checkpoint
[domanda]
Una calcolatrice in modalità GRADI mostra che $\frac{\sin x}{x}$ per $x$ piccolo si avvicina a $\approx 0{,}0175$, non a $1$. Perché? Quanto vale esattamente quel numero?
[risposta]
Il limite notevole vale solo con $x$ in **radianti**: la dimostrazione (§3.1) usa l'area del settore circolare $\frac{x}{2}$, che è corretta solo se l'angolo è in radianti. In gradi si ha $\sin(x°)=\sin\!\big(\frac{\pi x}{180}\big)$, quindi $\frac{\sin(x°)}{x}=\frac{\pi}{180}\cdot\frac{\sin(\pi x/180)}{\pi x/180}\to\frac{\pi}{180}\approx 0{,}01745$. In analisi gli angoli sono sempre in radianti proprio per far valere $\sin x\sim x$.
```

### 2.2 Il numero $e$ e i limiti esponenziali–logaritmici

**Definizione di $e$ tramite limite.**

$$\lim_{x\to+\infty}\Big(1+\frac1x\Big)^x=e,\qquad\text{equivalentemente}\qquad \lim_{t\to 0}(1+t)^{1/t}=e.$$

Le due forme sono la stessa cosa vista da due lati: ponendo $t=1/x$, quando $x\to+\infty$ si ha $t\to 0^+$. Il numero $e\approx 2{,}71828\ldots$ è irrazionale (anzi trascendente) ed è la base naturale dell'analisi.

**Generalizzazione con parametro.** Per ogni $a\in\mathbb{R}$,

$$\lim_{x\to+\infty}\Big(1+\frac{a}{x}\Big)^x=e^{a}.$$

La ricaviamo dalla definizione di $e$ in §3.4. L'elemento interattivo seguente serve a *vedere* questa convergenza: muovendo lo slider cambi il parametro $a$; per ogni $a$ la curva, al crescere di $x$, si appiattisce verso il valore orizzontale $e^a$. Prova $a=1$ (la curva si stabilizza attorno a $e\approx 2{,}718$), $a=2$ (verso $e^2\approx 7{,}389$), $a=0{,}5$ (verso $\sqrt e\approx 1{,}649$). Manipolando $a$ percepisci che la stessa struttura "$(1+\text{piccolo})^{\text{grande}}$" produce l'intera famiglia delle potenze di $e$, con $a$ che regola l'esponente finale.

```slider
{
  "title": "(1 + a/x)^x converge a e^a per x→+∞",
  "fn": "Math.pow(1 + a / Math.max(x, 0.1), x)",
  "domain": [0.5, 30],
  "yDomain": [0, 20],
  "pname": "a",
  "pmin": 0.5,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Parametro a (limite orizzontale = e^a)",
  "label1": "(1 + a/x)^x"
}
```

**Limite del logaritmo.**

$$\lim_{x\to 0}\frac{\ln(1+x)}{x}=1.$$

**Limite dell'esponenziale.**

$$\lim_{x\to 0}\frac{e^{x}-1}{x}=1.$$

Questi due, come vedremo in §3.3, si deducono l'uno dall'altro e dalla definizione di $e$. Interpretazione: vicino a $0$, sia $\ln(1+x)$ sia $e^x-1$ sono "quasi uguali" a $x$.

**Limite della potenza.** Per ogni $\alpha\in\mathbb{R}$,

$$\lim_{x\to 0}\frac{(1+x)^{\alpha}-1}{x}=\alpha.$$

In parole: alzare $1+x$ a una potenza $\alpha$ sposta il valore da $1$ di circa $\alpha$ volte $x$, quando $x$ è piccolo.

*Micro-esempio.* $\displaystyle\lim_{x\to 0}\frac{\sqrt{1+x}-1}{x}$: è il limite della potenza con $\alpha=\tfrac12$, quindi vale $\tfrac12$. (Coerente con la razionalizzazione: $\frac{\sqrt{1+x}-1}{x}=\frac{1}{\sqrt{1+x}+1}\to\frac12$.)

### 2.3 Equivalenze asintotiche

I limiti notevoli si riassumono in modo compatto con le **equivalenze asintotiche**, lo strumento di calcolo più efficiente per le forme $0/0$ e il metodo atteso all'esame.

**Definizione.** Due funzioni $f,g$ sono *asintoticamente equivalenti* per $x\to x_0$, e si scrive $f\sim g$, se

$$\lim_{x\to x_0}\frac{f(x)}{g(x)}=1.$$

In parole: $f$ e $g$ diventano indistinguibili *in rapporto* — il loro quoziente tende a $1$, anche se entrambe tendono a $0$ o a $\infty$. Dai limiti notevoli, per $x\to 0$:

$$\sin x\sim x,\qquad \tan x\sim x,\qquad 1-\cos x\sim \frac{x^2}{2},$$
$$\ln(1+x)\sim x,\qquad e^{x}-1\sim x,\qquad (1+x)^{\alpha}-1\sim \alpha x.$$

**Regola d'uso (fondamentale).** In un limite si può sostituire un fattore con un suo equivalente asintotico **solo se il fattore compare in un prodotto o in un quoziente**. È vietato sostituire un termine dentro una somma o differenza, perché lì i termini di ordine superiore — quelli trascurati dall'equivalenza — possono diventare decisivi. Esempio del divieto: $x-\sin x\sim x-x=0$ è **falso** (il vero comportamento è $\sim x^3/6$). La sostituzione ingenua cancella proprio l'informazione che cerchiamo.

*Micro-esempio.* $\displaystyle\lim_{x\to 0}\frac{\tan(2x)\,\ln(1+3x)}{x^2}$: tutti i fattori sono in prodotto/quoziente, quindi le equivalenze sono lecite: $\tan(2x)\sim 2x$ e $\ln(1+3x)\sim 3x$, da cui $\frac{2x\cdot 3x}{x^2}=6$.

```checkpoint
[domanda]
Un compagno calcola $\lim_{x\to 0}\dfrac{x-\sin x}{x^3}$ così: "poiché $\sin x\sim x$, il numeratore è $x-x=0$, quindi il limite è $0$". Il risultato corretto è $\tfrac16$. Dov'è l'errore?
[risposta]
Ha usato l'equivalenza $\sin x\sim x$ **dentro una differenza**, violando la regola d'uso. L'equivalenza dice solo che $\frac{\sin x}{x}\to 1$: non dice che $x-\sin x$ sia trascurabile, e infatti $x-\sin x$ è dell'ordine di $x^3/6$ — esattamente il termine che la sostituzione cancella. Nelle somme/differenze servono gli [sviluppi di Taylor](/analisi/calcolo-differenziale-una-variabile/10-taylor): $\sin x = x-\frac{x^3}{6}+o(x^3)$ dà $x-\sin x=\frac{x^3}{6}+o(x^3)$ e il limite $\frac16$.
```

### 2.4 Asintoti orizzontali e verticali

Un **asintoto** di $f$ è una retta a cui la distanza del punto $(x,f(x))$ dalla retta tende a $0$ quando $x\to\pm\infty$ oppure $x\to x_0^{\pm}$.

**Asintoto orizzontale.** La retta $y=\ell$ è asintoto orizzontale (per $x\to+\infty$, o per $x\to-\infty$) se

$$\lim_{x\to+\infty}f(x)=\ell\qquad\text{oppure}\qquad \lim_{x\to-\infty}f(x)=\ell,\quad \ell\in\mathbb{R}.$$

Una funzione può avere **due** asintoti orizzontali distinti, uno per parte (es. $\arctan x$: $\pi/2$ a destra, $-\pi/2$ a sinistra).

**Asintoto verticale.** La retta $x=x_0$ è asintoto verticale se almeno uno dei limiti unilaterali è infinito:

$$\lim_{x\to x_0^{+}}f(x)=\pm\infty\qquad\text{o}\qquad \lim_{x\to x_0^{-}}f(x)=\pm\infty.$$

Si cercano tipicamente dove il denominatore si annulla **ma il numeratore no** (se anche il numeratore si annulla può esserci una [discontinuità eliminabile](/analisi/limiti-e-continuita/04-continuita) invece di un asintoto).

Il grafico seguente riunisce i due mondi della lezione. La funzione è $\frac{\sin x}{x}$ (definita per continuità con valore $1$ in $x=0$): vicino a $x=0$ la curva "punta" esattamente a $1$ (il limite notevole di §2.1), mentre per $x\to\pm\infty$ le oscillazioni si smorzano e la curva si schiaccia sulla retta $y=0$, il suo asintoto orizzontale.

```plot
{
  "title": "sin(x)/x: → 1 per x→0, e asintoto orizzontale y=0 per x→±∞",
  "fn": "(Math.abs(x) > 0.001) ? Math.sin(x) / x : 1",
  "fn2": "0",
  "domain": [-12, 12],
  "yDomain": [-0.4, 1.2],
  "label1": "sin(x)/x",
  "label2": "y = 0 (asintoto orizzontale)"
}
```

> ⚠️ **Errore comune — il grafico PUÒ attraversare un asintoto orizzontale.** "Se $y=0$ è asintoto, la curva non tocca mai l'asse $x$" è falso: nel grafico qui sopra, $\frac{\sin x}{x}$ attraversa $y=0$ infinite volte. L'asintoto vincola il comportamento solo *al limite* ($x\to\pm\infty$): è una tendenza, non una barriera.

*Micro-esempio.* $f(x)=\dfrac{1}{x-3}$: in $x_0=3$ il denominatore si annulla e il numeratore no ($=1$), con $\lim_{x\to 3^\pm}f=\pm\infty$: asintoto verticale $x=3$. All'infinito $\lim_{x\to\pm\infty}f=0$: asintoto orizzontale $y=0$ da entrambe le parti.

### 2.5 Asintoto obliquo e le formule di $m$ e $q$

**Definizione.** La retta $y=mx+q$ con $m\neq 0$ è **asintoto obliquo** per $x\to+\infty$ se

$$\lim_{x\to+\infty}\big[f(x)-(mx+q)\big]=0. \qquad (\ast)$$

In parole: la differenza verticale tra la curva e la retta si spegne all'infinito. Le formule operative per $m$ e $q$ non vanno memorizzate alla cieca: si *ricavano* dalla definizione.

**Ricavare $m$.** Dividiamo la quantità in $(\ast)$ per $x$:

$$\frac{f(x)-mx-q}{x}=\frac{f(x)}{x}-m-\frac{q}{x}.$$

Per $x\to+\infty$ il primo membro tende a $0$ (numeratore tendente a $0$ per $(\ast)$, denominatore a $+\infty$) e $\frac{q}{x}\to 0$. Resta $\lim\big(\frac{f(x)}{x}-m\big)=0$, cioè

$$\boxed{\,m=\lim_{x\to+\infty}\frac{f(x)}{x}\,}.$$

**Ricavare $q$.** Noto $m$, isoliamo $q$ direttamente da $(\ast)$: poiché $\lim[f(x)-mx-q]=0$ e $q$ è costante,

$$\boxed{\,q=\lim_{x\to+\infty}\big[f(x)-mx\big]\,}.$$

L'ordine è obbligatorio: senza $m$ non si può calcolare $q$. Se $m$ risulta $0$, non c'è asintoto obliquo (semmai orizzontale); se $m$ è infinito o non esiste, non c'è asintoto obliquo affatto. La stessa procedura vale per $x\to-\infty$.

Se esiste un asintoto orizzontale ($\lim f=\ell$ finito), allora $m=\lim\frac{f(x)}{x}=0$: l'asintoto orizzontale è il caso degenere $m=0$ dell'obliquo, e i due **non coesistono** dallo stesso lato.

*Micro-esempio.* $f(x)=2x+1+\dfrac{5}{x}$: a occhio, per $x\to+\infty$ il termine $\frac5x$ svanisce e resta la retta $y=2x+1$. Le formule confermano: $m=\lim\frac{f(x)}{x}=\lim\big(2+\frac1x+\frac{5}{x^2}\big)=2$, $q=\lim\big[f(x)-2x\big]=\lim\big(1+\frac5x\big)=1$.

```checkpoint
[domanda]
$f(x)=\dfrac{3x^2-1}{x^2+2}$ può avere un asintoto obliquo per $x\to+\infty$? Rispondi senza calcolare $m$ e $q$.
[risposta]
No. $\lim_{x\to+\infty}f(x)=3$ (gradi uguali, rapporto dei coefficienti direttivi): esiste l'asintoto **orizzontale** $y=3$. Ma allora $m=\lim\frac{f(x)}{x}=0$, e l'obliquo richiede $m\neq 0$: orizzontale e obliquo non coesistono dallo stesso lato. Regola pratica: calcola prima il limite all'infinito; se è finito, l'asintoto è orizzontale e la ricerca si ferma lì.
```

---

## 3. Dimostrazioni

### 3.1 $\lim_{x\to 0}\frac{\sin x}{x}=1$ (dimostrazione geometrica)

Sia $0<x<\pi/2$, con $x$ in radianti. L'idea è **intrappolare** il rapporto $\frac{\sin x}{x}$ tra due quantità che tendono entrambe a $1$, confrontando tre aree nel cerchio unitario. Consideriamo il centro $O$, il punto $A=(1,0)$, il punto $B=(\cos x,\sin x)$ corrispondente all'angolo $x$, e $C=(1,\tan x)$ sulla retta tangente in $A$. Il triangolo $OAB$ sta dentro il settore circolare $OAB$, che sta dentro il triangolo $OAC$:

$$\underbrace{\text{area}(\triangle OAB)}_{\frac12\sin x}\;\le\;\underbrace{\text{area(settore }OAB)}_{\frac{x}{2}}\;\le\;\underbrace{\text{area}(\triangle OAC)}_{\frac12\tan x}.$$

L'area del settore vale $\frac{x}{2\pi}\cdot\pi\cdot 1^2=\frac{x}{2}$ perché il settore copre una frazione $\frac{x}{2\pi}$ del disco unitario — ed è **qui** che entra la misura in radianti: solo in radianti l'angolo misura direttamente la frazione di giro. Moltiplicando per $2$:

$$\sin x\le x\le \frac{\sin x}{\cos x}.$$

Da questa doppia disuguaglianza, con due passaggi algebrici e il teorema del confronto, segue la tesi.

<details class="dim-tecnica">
<summary>Dettaglio tecnico — espandi i passaggi algebrici e la conclusione</summary>

**Passaggio 1 — dividere per $\sin x$.** Per $0<x<\pi/2$ si ha $\sin x>0$, quindi dividere per $\sin x$ conserva il verso delle disuguaglianze:

$$1\le \frac{x}{\sin x}\le \frac{1}{\cos x}.$$

**Passaggio 2 — passare ai reciproci.** Tutte e tre le quantità sono positive ($x>0$, $\sin x>0$, $\cos x>0$ nel primo quadrante). Per quantità positive $0<u\le v$ implica $\frac1v\le\frac1u$ (la funzione $t\mapsto 1/t$ è decrescente su $(0,+\infty)$): i reciproci **invertono** entrambe le disuguaglianze,

$$\cos x\le \frac{\sin x}{x}\le 1.$$

**Passaggio 3 — squeeze.** Per $x\to 0^+$: $\cos x\to 1$ (continuità del coseno in $0$) e la costante $1\to 1$. Per il [teorema del confronto](/analisi/limiti-e-continuita/03-calcolo-limiti), la funzione intrappolata converge allo stesso valore:

$$\lim_{x\to 0^+}\frac{\sin x}{x}=1.$$

**Passaggio 4 — dal limite destro al bilatero.** La funzione $\frac{\sin x}{x}$ è **pari**: $\frac{\sin(-x)}{-x}=\frac{-\sin x}{-x}=\frac{\sin x}{x}$ ($\sin$ è dispari, $x$ è dispari, il rapporto è pari). Quindi il comportamento per $x\to 0^-$ è lo specchio di quello per $x\to 0^+$: il limite sinistro vale anch'esso $1$, e per il teorema bilatero⇔unilaterali

$$\lim_{x\to 0}\frac{\sin x}{x}=1. \qquad\blacksquare$$

</details>

### 3.2 $\lim_{x\to 0}\frac{1-\cos x}{x^2}=\frac12$ (via coniugato)

Moltiplichiamo numeratore e denominatore per il "coniugato" $1+\cos x$ per far comparire $\sin^2 x$:

$$\frac{1-\cos x}{x^2}=\frac{(1-\cos x)(1+\cos x)}{x^2(1+\cos x)}=\frac{1-\cos^2 x}{x^2(1+\cos x)}=\frac{\sin^2 x}{x^2(1+\cos x)}.$$

Abbiamo usato l'identità pitagorica $1-\cos^2 x=\sin^2 x$. Ora separiamo i fattori:

$$\frac{\sin^2 x}{x^2(1+\cos x)}=\Big(\frac{\sin x}{x}\Big)^{2}\cdot\frac{1}{1+\cos x}.$$

Per $x\to 0$: il primo fattore tende a $1^2=1$ (per §3.1 e il limite del prodotto) e il secondo a $\frac{1}{1+1}=\frac12$ (continuità del coseno e algebra dei limiti, con denominatore $\to 2\neq 0$). Per l'algebra dei limiti il prodotto tende a $1\cdot\frac12=\frac12$. $\blacksquare$

### 3.3 $\lim_{x\to 0}\frac{\ln(1+x)}{x}=1$ e $\lim_{x\to 0}\frac{e^{x}-1}{x}=1$ (dal numero $e$, per inversione)

**Passo 1 (dal numero $e$ al logaritmo).** Riscriviamo il rapporto usando la proprietà $\alpha\ln\beta=\ln\beta^{\alpha}$:

$$\frac{\ln(1+x)}{x}=\frac{1}{x}\ln(1+x)=\ln\!\big((1+x)^{1/x}\big).$$

Per $x\to 0$, l'argomento tende a $(1+x)^{1/x}\to e$ (definizione di $e$, §2.2). Poiché il logaritmo è **continuo** in $e$, possiamo scambiare limite e funzione ([permutabilità](/analisi/limiti-e-continuita/04-continuita)):

$$\lim_{x\to 0}\frac{\ln(1+x)}{x}=\ln\!\Big(\lim_{x\to 0}(1+x)^{1/x}\Big)=\ln e=1.$$

**Passo 2 (dal logaritmo all'esponenziale).** L'idea: il limite dell'esponenziale è lo *stesso* limite del Passo 1, letto attraverso l'inversione $\exp\leftrightarrow\ln$ con un cambio di variabile.

<details class="dim-tecnica">
<summary>Dettaglio tecnico — espandi il cambio di variabile del Passo 2</summary>

Nel limite $\lim_{x\to 0}\frac{e^x-1}{x}$ poniamo la sostituzione $y=e^{x}-1$. Essa è invertibile: $e^x=1+y$ dà $x=\ln(1+y)$, ben definito per $y>-1$ (e vicino a $0$ ci siamo). Quando $x\to 0$ si ha $y=e^x-1\to e^0-1=0$ per la continuità dell'esponenziale, con $y\neq 0$ per $x\neq 0$ (l'esponenziale è iniettiva): le condizioni del [cambio di variabile nei limiti](/analisi/limiti-e-continuita/03-calcolo-limiti) sono soddisfatte. Allora

$$\frac{e^{x}-1}{x}=\frac{y}{\ln(1+y)}=\left(\frac{\ln(1+y)}{y}\right)^{-1}.$$

Per il Passo 1 la quantità fra parentesi tende a $1$ per $y\to 0$; per il limite del quoziente (denominatore $\to 1\neq 0$) il reciproco tende a $\frac11=1$:

$$\lim_{x\to 0}\frac{e^{x}-1}{x}=1. \qquad\blacksquare$$

</details>

I due limiti sono quindi **la stessa affermazione** letta nei due versi dell'inversione $\exp\leftrightarrow\ln$.

### 3.4 Il limite generalizzato $\big(1+\frac{a}{x}\big)^x\to e^a$

Vogliamo ricavare $\lim_{x\to+\infty}\big(1+\frac{a}{x}\big)^{x}=e^{a}$ dalla definizione di $e$, per $a\neq 0$. La strategia è **passare al logaritmo** per trasformare la potenza in un prodotto:

$$L=\lim_{x\to+\infty}\Big(1+\frac{a}{x}\Big)^{x}\;\Longrightarrow\;\ln L=\lim_{x\to+\infty}x\,\ln\!\Big(1+\frac{a}{x}\Big),$$

dove il passaggio del limite dentro il logaritmo è lecito per la continuità di $\ln$ (e a posteriori $L=e^a>0$ è nel dominio). Poniamo $t=\frac{a}{x}$, così $t\to 0$ e $x=\frac{a}{t}$:

$$\ln L=\lim_{t\to 0}\frac{a}{t}\,\ln(1+t)=a\cdot\lim_{t\to 0}\frac{\ln(1+t)}{t}=a\cdot 1=a,$$

avendo usato il limite notevole del logaritmo (§3.3). Poiché $\ln L=a$ e l'esponenziale è continuo, $L=e^{a}$. $\blacksquare$

La tecnica — logaritmo, cambio di variabile, limite notevole, esponenziale — è lo schema universale per le forme $1^{\infty}$.

---

## 4. Esempi

### Esempio 1 — Riporto alla forma notevole (introduttivo)

Calcolare $\displaystyle\lim_{x\to 0}\frac{\sin(5x)}{x}$.

**Soluzione.** L'argomento del seno è $5x$, non $x$: moltiplichiamo e dividiamo per $5$ per ricostruire la forma $\frac{\sin t}{t}$ con $t=5x\to 0$:

$$\frac{\sin(5x)}{x}=5\cdot\frac{\sin(5x)}{5x}\;\xrightarrow[x\to 0]{}\;5\cdot 1=5.$$

*Commento:* la manovra "moltiplica e dividi per far combaciare l'argomento" è il gesto base di tutti i limiti notevoli trigonometrici.

> ⚠️ **Errore comune — il limite notevole richiede che argomento e denominatore combacino.** "$\lim_{x\to 0}\frac{\sin(2x^2+x)}{x}=1$ perché è la forma $\frac{\sin}{\cdot}$" è un salto illecito: l'argomento del seno è $2x^2+x$, diverso dal denominatore $x$. Ricostruisci sempre la forma: $\frac{\sin(2x^2+x)}{2x^2+x}\cdot\frac{2x^2+x}{x}\to 1\cdot(2x+1)\big|_{x=0}=1$. Qui il risultato è comunque $1$, ma solo dopo il riporto corretto — non per la ragione sbagliata.

### Esempio 2 — Rapporto di due seni (introduttivo)

Calcolare $\displaystyle\lim_{x\to 0}\frac{\sin(3x)}{\sin(7x)}$.

**Soluzione.** Con le equivalenze $\sin(3x)\sim 3x$ e $\sin(7x)\sim 7x$ (lecito: sono in un quoziente):

$$\frac{\sin(3x)}{\sin(7x)}\sim\frac{3x}{7x}=\frac{3}{7}.$$

*Verifica rigorosa:* $\dfrac{\sin(3x)}{3x}\cdot\dfrac{7x}{\sin(7x)}\cdot\dfrac{3x}{7x}\to 1\cdot1\cdot\frac37=\frac37.$ $\square$

### Esempio 3 — Forma $1^\infty$ (standard)

Calcolare $\displaystyle\lim_{x\to+\infty}\Big(1+\frac{2}{x}\Big)^{x}$.

**Soluzione.** È il limite generalizzato (§3.4) con $a=2$, quindi vale $e^{2}$. In alternativa, per esplicitare: $\big(1+\frac2x\big)^{x}=\Big[\big(1+\frac{1}{x/2}\big)^{x/2}\Big]^{2}$; posto $t=x/2\to+\infty$ la base tende a $e$, dunque il tutto a $e^{2}$. $\square$

### Esempio 4 — Equivalenze in composizione (standard)

Calcolare $\displaystyle\lim_{x\to 0}\frac{\ln(1+\sin x)}{x}$.

**Soluzione.** Concateniamo equivalenze: per $x\to 0$, $\sin x\sim x$, quindi $\sin x\to 0$ e $\ln(1+\sin x)\sim \sin x\sim x$ (sostituzione lecita: siamo in un quoziente). Perciò il limite è $1$.

*Verifica rigorosa:* $\dfrac{\ln(1+\sin x)}{x}=\dfrac{\ln(1+\sin x)}{\sin x}\cdot\dfrac{\sin x}{x}\to 1\cdot 1=1.$ $\square$

> ⚠️ **Errore comune — equivalenze MAI dentro somme o differenze.** "$\lim_{x\to 0}\frac{x-\sin x}{x^3}=\frac{x-x}{x^3}=0$" è l'errore più insidioso del capitolo: $\sin x\sim x$ vale solo in prodotti/quozienti, e nella differenza cancella proprio il termine di ordine superiore che serve. Il vero comportamento è $x-\sin x\sim\frac{x^3}{6}$, quindi il limite è $\frac16$ (Esercizio 9). Nelle somme/differenze usa gli [sviluppi di Taylor](/analisi/calcolo-differenziale-una-variabile/10-taylor), non le equivalenze grezze.

### Esempio 5 — Esponenziale e seno insieme (avanzato)

Calcolare $\displaystyle\lim_{x\to 0}\frac{e^{2x}-1}{\sin(3x)}$.

**Soluzione.** Equivalenze: $e^{2x}-1\sim 2x$ e $\sin(3x)\sim 3x$, entrambe in un quoziente:

$$\frac{e^{2x}-1}{\sin(3x)}\sim\frac{2x}{3x}=\frac23.$$

*Verifica:* $\dfrac{e^{2x}-1}{2x}\cdot\dfrac{3x}{\sin(3x)}\cdot\dfrac23\to 1\cdot1\cdot\frac23=\frac23.$ $\square$

### Esempio 6 — Asintoti verticali e orizzontali (standard)

Trovare tutti gli asintoti di $f(x)=\dfrac{x^{2}}{x^{2}-1}$.

**Soluzione.** *Verticali:* $x^{2}-1=(x-1)(x+1)$ si annulla in $x=\pm1$, dove il numeratore vale $1\neq 0$; entrambi i limiti unilaterali sono infiniti, dunque $x=1$ e $x=-1$ sono asintoti verticali. *Orizzontale:* $\lim_{x\to\pm\infty}\frac{x^2}{x^2-1}=\lim\frac{1}{1-1/x^2}=1$, quindi $y=1$ è asintoto orizzontale in entrambe le direzioni. *Obliquo:* poiché esiste l'orizzontale, $m=\lim f(x)/x=0$: nessun asintoto obliquo. $\square$

> ⚠️ **Errore comune — "denominatore nullo" NON basta per l'asintoto verticale.** "$\frac{x^2-1}{x-1}$ ha asintoto verticale in $x=1$ perché il denominatore si annulla" è falso: anche il numeratore si annulla in $x=1$, e semplificando $\frac{x^2-1}{x-1}=x+1\to 2$ — è una [discontinuità eliminabile](/analisi/limiti-e-continuita/04-continuita), non un asintoto. Fattorizza sempre numeratore e denominatore e calcola il limite: l'asintoto verticale c'è solo se il limite è effettivamente infinito.

### Esempio 7 — Asintoto obliquo con verifica per divisione (avanzato)

Trovare l'asintoto obliquo di $f(x)=\dfrac{x^{2}+1}{x-1}$ per $x\to+\infty$.

**Soluzione.** $m=\lim_{x\to+\infty}\frac{x^{2}+1}{x(x-1)}=\lim\frac{x^2+1}{x^2-x}=1$. Poi

$$q=\lim_{x\to+\infty}\Big[\frac{x^{2}+1}{x-1}-x\Big]=\lim_{x\to+\infty}\frac{x^{2}+1-x(x-1)}{x-1}=\lim_{x\to+\infty}\frac{x+1}{x-1}=1.$$

Asintoto obliquo: $y=x+1$. *Verifica:* la divisione dà $\frac{x^2+1}{x-1}=x+1+\frac{2}{x-1}$, e il resto $\frac{2}{x-1}\to 0$. $\square$

> ⚠️ **Errore comune — non cercare l'obliquo quando c'è già l'orizzontale.** Calcolare $m$ e $q$ per $f(x)=\frac{3x^2-1}{x^2+2}$ è lavoro sprecato: quella funzione ha asintoto orizzontale $y=3$, quindi $m=\lim\frac{f(x)}{x}=0$ e l'obliquo (che richiede $m\neq 0$) non esiste. Ordine giusto della ricerca: verticali → orizzontali → obliqui *solo se* il limite all'infinito è infinito.

### Esempio 8 — Forma $\infty-\infty$ con razionalizzazione (applicativo)

Calcolare $\displaystyle\lim_{x\to+\infty}\big(\sqrt{x^{2}+x}-x\big)$ e interpretarlo come asintoto.

**Soluzione.** Forma $\infty-\infty$: razionalizziamo moltiplicando per il coniugato:

$$\sqrt{x^{2}+x}-x=\frac{(x^{2}+x)-x^{2}}{\sqrt{x^{2}+x}+x}=\frac{x}{\sqrt{x^{2}+x}+x}.$$

Per $x>0$, $\sqrt{x^{2}+x}=x\sqrt{1+1/x}$, quindi

$$\frac{x}{x\sqrt{1+1/x}+x}=\frac{1}{\sqrt{1+1/x}+1}\;\xrightarrow[x\to+\infty]{}\;\frac{1}{1+1}=\frac12.$$

Interpretazione: la funzione $g(x)=\sqrt{x^2+x}$ ha asintoto obliquo $y=x+\frac12$ per $x\to+\infty$, poiché $g(x)-x\to\frac12$ (qui $m=1$, $q=\frac12$). $\square$

---

## 5. Collegamenti e riepilogo

### 5.1 Nella biblioteca

- **[Derivata: definizione](/analisi/calcolo-differenziale-una-variabile/06-derivata-definizione)**: $\lim_{x\to 0}\frac{\sin x}{x}=1$ è esattamente il calcolo della derivata di $\sin$ in $0$; $\lim_{x\to 0}\frac{e^x-1}{x}=1$ dà la derivata di $e^x$ in $0$. I limiti notevoli sono derivate travestite.
- **[Studio di funzione](/analisi/calcolo-differenziale-una-variabile/09-studio-funzione)**: gli asintoti sono un capitolo obbligato dello studio completo del grafico, insieme a dominio, segno, monotonia e concavità.
- **[Formula di Taylor](/analisi/calcolo-differenziale-una-variabile/10-taylor)**: le equivalenze asintotiche sono i primi termini degli sviluppi di Taylor; Taylor risolve i casi (somme/differenze) in cui le equivalenze grezze falliscono.
- **Successioni** (Analisi, lezione 16): la forma $\big(1+\frac{a}{n}\big)^n\to e^a$ è la versione per successioni, base dell'interesse composto e delle stime di crescita.
- **Serie di Taylor** (Analisi, lezione 19): $e^x-1\sim x$, $\ln(1+x)\sim x$ e $1-\cos x\sim x^2/2$ sono i troncamenti al primo ordine non nullo delle rispettive serie.

### 5.2 Nelle discipline

- **Segnali — funzione sinc.** La funzione $\operatorname{sinc}(x)=\frac{\sin(\pi x)}{\pi x}$, con valore $1$ in $0$ definito per continuità dal limite notevole, è la risposta del filtro passa-basso ideale nel teorema di campionamento di Nyquist–Shannon. È implicita in ogni digitalizzazione audio/video.
- **Finanza — capitalizzazione continua.** Da $\big(1+\frac{r}{n}\big)^n\to e^r$ segue che un capitale $C_0$ a tasso $r$ capitalizzato con continuità vale $C_0e^{rt}$ dopo tempo $t$. È il mattone della formula di Black–Scholes e dei modelli a tempo continuo.
- **Fisica — decadimento e asintoti.** $N(t)=N_0e^{-\lambda t}$ ha asintoto orizzontale $N=0$ per $t\to+\infty$: la sostanza si avvicina a zero senza annullarsi in tempo finito. Il numero $e$ vi entra come limite del decadimento discreto reso continuo.
- **Machine learning — approssimazioni al prim'ordine.** Le equivalenze $\ln(1+x)\sim x$ e $e^x-1\sim x$ giustificano le approssimazioni usate nelle funzioni di costo (log-loss) e nella stabilità numerica del softmax attorno all'origine.

### 5.3 Riepilogo

| Concetto | Formula | Note |
|---|---|---|
| Seno fondamentale | $\lim_{x\to 0}\frac{\sin x}{x}=1$ | Solo in radianti; base della trig. differenziale |
| Coseno | $\lim_{x\to 0}\frac{1-\cos x}{x^2}=\frac12$ | $1-\cos x\sim x^2/2$ |
| Numero $e$ (all'∞) | $\lim_{x\to+\infty}\big(1+\frac1x\big)^x=e$ | Definizione di $e$ |
| Numero $e$ (in 0) | $\lim_{t\to 0}(1+t)^{1/t}=e$ | Forma equivalente, $t=1/x$ |
| Generalizzato | $\lim_{x\to+\infty}\big(1+\frac{a}{x}\big)^x=e^a$ | Via logaritmo (§3.4) |
| Logaritmo | $\lim_{x\to 0}\frac{\ln(1+x)}{x}=1$ | $\ln(1+x)\sim x$ |
| Esponenziale | $\lim_{x\to 0}\frac{e^x-1}{x}=1$ | $e^x-1\sim x$; inverso del log |
| Potenza | $\lim_{x\to 0}\frac{(1+x)^\alpha-1}{x}=\alpha$ | $(1+x)^\alpha-1\sim \alpha x$ |
| Regola equivalenze | $f\sim g \Leftrightarrow \lim\frac fg=1$ | Solo in prodotti/quozienti |
| Asintoto orizzontale | $\lim_{x\to\pm\infty}f=\ell$ | Retta $y=\ell$; fino a due |
| Asintoto verticale | $\lim_{x\to x_0^\pm}f=\pm\infty$ | Retta $x=x_0$; num. $\neq 0$ |
| Asintoto obliquo | $m=\lim\frac{f}{x}$, $q=\lim(f-mx)$ | $m\neq 0$ finito; esclude l'orizz. |

**Punti chiave da ricordare:** (1) i limiti notevoli trigonometrici richiedono i radianti; (2) le equivalenze asintotiche accelerano i calcoli ma valgono *solo* in prodotti e quozienti; (3) $e$ nasce dalla forma $1^\infty$ e le forme $1^\infty$ si risolvono passando al logaritmo; (4) gli asintoti si cercano nell'ordine verticali → orizzontali → (solo se manca l'orizzontale) obliqui.

---

## 6. Esercizi

### Esercizio 1
Calcola $\displaystyle\lim_{x\to 0}\frac{\sin(4x)}{3x}$.

<details>
<summary>Soluzione</summary>

$$\frac{\sin(4x)}{3x}=\frac{4}{3}\cdot\frac{\sin(4x)}{4x}\;\xrightarrow[x\to 0]{}\;\frac43\cdot 1=\frac43.$$

</details>

### Esercizio 2
Calcola $\displaystyle\lim_{x\to 0}\frac{\tan x}{x}$.

<details>
<summary>Soluzione</summary>

$\tan x=\frac{\sin x}{\cos x}$, quindi $\frac{\tan x}{x}=\frac{\sin x}{x}\cdot\frac{1}{\cos x}\to 1\cdot\frac{1}{1}=1$. Dunque $\tan x\sim x$ per $x\to 0$.

</details>

### Esercizio 3
Trova gli asintoti orizzontali di $f(x)=\dfrac{2x-1}{\sqrt{x^2+1}}$.

<details>
<summary>Soluzione</summary>

Per $x\to+\infty$ ($\sqrt{x^2}=x$): $\dfrac{2x-1}{\sqrt{x^2+1}}=\dfrac{2-1/x}{\sqrt{1+1/x^2}}\to 2$. Per $x\to-\infty$ ($\sqrt{x^2}=-x$): $\dfrac{2-1/x}{-\sqrt{1+1/x^2}}\to -2$. Due asintoti orizzontali: $y=2$ (destra) e $y=-2$ (sinistra).

</details>

### Esercizio 4
Trova l'asintoto obliquo di $f(x)=\dfrac{x^2-3x+1}{x+2}$ per $x\to+\infty$.

<details>
<summary>Soluzione</summary>

$m=\lim\frac{x^2-3x+1}{x(x+2)}=1$. $q=\lim\Big[\frac{x^2-3x+1}{x+2}-x\Big]=\lim\frac{-5x+1}{x+2}=-5$. Asintoto: $y=x-5$. Verifica: $\frac{x^2-3x+1}{x+2}=x-5+\frac{11}{x+2}$, resto $\to 0$. ✓

</details>

### Esercizio 5
Calcola $\displaystyle\lim_{x\to 0}\frac{e^{2x}-1}{\sin(3x)}$.

<details>
<summary>Soluzione</summary>

Equivalenze in quoziente: $e^{2x}-1\sim 2x$, $\sin(3x)\sim 3x$. Quindi il limite è $\frac{2x}{3x}=\frac23$. Verifica: $\frac{e^{2x}-1}{2x}\cdot\frac{3x}{\sin 3x}\cdot\frac23\to\frac23$.

</details>

### Esercizio 6
Trova tutti gli asintoti di $f(x)=\dfrac{x+1}{x^2-4}$.

<details>
<summary>Soluzione</summary>

*Verticali:* $x^2-4=(x-2)(x+2)=0$ in $x=\pm2$; il numeratore vale $3$ e $-1$ (entrambi $\neq 0$), quindi $x=2$ e $x=-2$ sono asintoti verticali. *Orizzontale:* $\lim_{x\to\pm\infty}\frac{x+1}{x^2-4}=0$ (grado num. $<$ grado den.), quindi $y=0$. *Obliquo:* assente ($m=0$).

</details>

### Esercizio 7
Calcola $\displaystyle\lim_{x\to+\infty}\Big(1-\frac{3}{x}\Big)^{2x}$.

<details>
<summary>Soluzione</summary>

Passiamo al logaritmo: $\ln L=\lim_{x\to+\infty}2x\ln\!\big(1-\frac3x\big)$. Con $\ln(1-3/x)\sim -3/x$: $\ln L=\lim 2x\cdot(-3/x)=-6$. Dunque $L=e^{-6}$.

</details>

### Esercizio 8
Calcola $\displaystyle\lim_{x\to 0}\frac{1-\cos(2x)}{x^2}$.

<details>
<summary>Soluzione</summary>

Con $t=2x$: $\frac{1-\cos(2x)}{x^2}=\frac{1-\cos(2x)}{(2x)^2}\cdot 4\to \frac12\cdot 4=2$. Alternativa: $1-\cos(2x)=2\sin^2 x$, quindi $\frac{2\sin^2 x}{x^2}=2\big(\frac{\sin x}{x}\big)^2\to 2$.

</details>

### Esercizio 9
Calcola $\displaystyle\lim_{x\to 0}\frac{x-\sin x}{x^3}$ e spiega perché la sostituzione $\sin x\sim x$ *non* si può usare qui.

<details>
<summary>Soluzione</summary>

La differenza $x-\sin x$ è una somma algebrica: sostituire $\sin x\sim x$ darebbe $0$ al numeratore, cancellando l'informazione (regola d'uso, §2.3). Serve lo sviluppo di Taylor $\sin x=x-\frac{x^3}{6}+o(x^3)$ (lezione 10): allora $x-\sin x=\frac{x^3}{6}+o(x^3)$ e

$$\frac{x-\sin x}{x^3}=\frac{\frac{x^3}{6}+o(x^3)}{x^3}\to\frac16.$$

Il limite vale $\frac16$, non $0$: è l'esempio-tipo del divieto di §2.3.

</details>

### Esercizio 10
Determina l'asintoto obliquo di $f(x)=\sqrt{x^2+3x}$ per $x\to+\infty$.

<details>
<summary>Soluzione</summary>

$m=\lim_{x\to+\infty}\frac{\sqrt{x^2+3x}}{x}=\lim\sqrt{1+3/x}=1$. Poi $q=\lim\big[\sqrt{x^2+3x}-x\big]$; razionalizzando, $\sqrt{x^2+3x}-x=\frac{3x}{\sqrt{x^2+3x}+x}=\frac{3}{\sqrt{1+3/x}+1}\to\frac32$. Asintoto obliquo: $y=x+\frac32$.

</details>
