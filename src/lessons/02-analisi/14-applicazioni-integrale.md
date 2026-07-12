---
id: analisi-14-applicazioni-integrale
titolo: "Applicazioni dell'integrale"
materia: analisi
argomento: "Calcolo integrale (una variabile)"
modulo: "Applicazioni dell'integrale"
livello: universitario
slug: analisi-14-applicazioni-integrale

# legacy
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: "Applicazioni dell'integrale (aree, volumi, valor medio, economia)"
title_en: "Applications of the integral (areas, volumes, average value, economics)"
level: blue
order: 14
source_book: "OpenStax, Calculus Vol. 1; A. Villanacci, Notes for Mathematics 1"
source_chapter: "OpenStax Cap. 6 (aree, volumi, valor medio, applicazioni); TFC (lez.12)"

prerequisiti:
  - analisi-12-integrale-definito
  - analisi-13-tecniche-integrazione
  - analisi-04-continuita

collegamenti:
  - analisi-11-integrale-indefinito
  - analisi-12-integrale-definito
  - analisi-13-tecniche-integrazione
  - analisi-15-integrali-impropri

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 6 — area tra curve (6.1), volumi per sezioni/dischi/anelli (6.2), gusci cilindrici (6.3), valor medio (5.3), applicazioni fisiche ed economiche (6.5, 6.8)"
    note: "struttura, ordine di esposizione e schema dell'elemento infinitesimo. Le applicazioni economiche (surplus, valore attuale di un flusso continuo, Gini) sono ricostruite con derivazione propria dallo schema dell'elemento infinitesimo, coerentemente con l'impostazione OpenStax (opzione A del curriculum)"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "TFC e teorema del valor medio integrale (base di valor medio e applicazioni); convenzioni notazionali d'esame"
    note: "priorità su notazione e sul legame valor medio integrale ↔ teorema della media (lez.12)"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - plot
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Il [Teorema Fondamentale del Calcolo](/analisi/calcolo-integrale-una-variabile/12-integrale-definito) (lez.12) ci ha dato uno strumento potente, ma finora l'abbiamo usato quasi solo per calcolare aree sotto una curva. Quella però era solo la prima interpretazione. La vera portata dell'integrale è che risolve una **classe intera di problemi** che a prima vista non c'entrano nulla con le aree: il volume di un solido, la ricchezza media di una popolazione, il valore oggi di uno stipendio pagato per trent'anni, la disuguaglianza economica di un paese. Tutti questi problemi hanno la stessa struttura profonda, ed è questa struttura — non le singole formule — l'oggetto della lezione.

Lo schema comune si chiama **metodo dell'elemento infinitesimo** e ha sempre quattro mosse:

1. **Affetta.** Si divide il problema in tantissimi pezzetti, ciascuno così piccolo da poter essere trattato come «regolare»: un rettangolo sottile, un dischetto piatto, un istante di tempo. Il pezzetto sta in una posizione $x$ (o un istante $t$) e ha spessore infinitesimo $dx$.
2. **Approssima.** Su un pezzetto la quantità che ci interessa (area, volume, valore) è quasi costante: la si stima con una formula elementare che dà il **contributo elementare** $dQ$. Per l'area di una striscia verticale è $dA=(\text{altezza})\cdot dx$; per un dischetto è $dV=(\text{area del cerchio})\cdot dx$; per il valore attuale è $dV=(\text{incasso in }dt)\cdot(\text{fattore di sconto})$.
3. **Somma.** Si sommano i contributi di tutti i pezzetti.
4. **Passa al limite.** Rendendo i pezzetti sempre più fini, la somma diventa un integrale: $Q=\int_a^b dQ$.

Le mosse 3 e 4 insieme *sono* la definizione dell'integrale come limite di somme di Riemann (lez.12): «$\int_a^b dQ$» è solo un'abbreviazione per «il limite della somma dei contributi elementari». Per questo l'integrale è lo strumento naturale di ogni problema di **accumulo**: qualunque grandezza che si costruisca sommando infiniti contributi piccoli, distribuiti lungo un intervallo, è un integrale.

L'idea è antica: è il principio di **Cavalieri** (XVII secolo), «un solido è la somma delle sue fette». La novità del calcolo è aver reso quel «somma» un'operazione esatta e calcolabile grazie al TFC. In questa lezione impareremo a *tradurre* un problema concreto nel suo contributo elementare $dQ$ — è la parte creativa — e poi lasceremo che il TFC faccia il calcolo.

## 2. Teoria

### 2.1 Lo schema dell'elemento infinitesimo, preso sul serio

Prima di applicarlo, mettiamo a fuoco cosa significa davvero scrivere $Q=\int_a^b dQ$, perché è un abuso di notazione comodo ma potenzialmente ingannevole.

Supponiamo che una grandezza $Q$ si accumuli lungo $[a,b]$ e che, su un intervallino $[x,x+\Delta x]$, il contributo $\Delta Q$ sia approssimato da una **densità** $A(x)$ secondo
$$\Delta Q = A(x)\,\Delta x + (\text{errore infinitesimo di ordine superiore a }\Delta x).$$
La frase «di ordine superiore» significa che l'errore, diviso per $\Delta x$, tende a $0$ quando $\Delta x\to0$: è trascurabile rispetto al termine principale $A(x)\,\Delta x$. In notazione infinitesimale scriviamo il contributo elementare come $dQ=A(x)\,dx$. Sommando su tutti gli intervallini di una partizione e passando al limite si ottiene
$$Q=\int_a^b A(x)\,dx.$$
Il punto delicato — che dimostreremo con rigore in §3.1 — è che gli errori «di ordine superiore», pur essendo infiniti (uno per pezzetto), **si sommano a zero** nel limite: è questo che rende lecito il passaggio dalla somma approssimata all'integrale esatto. La regola operativa, quindi, è semplice: *trova il contributo elementare $dQ$ della forma «densità $\times\,dx$», poi integra*. Tutta la difficoltà di questi problemi è nel primo passo, geometrico o economico; il secondo è calcolo di lez.11–13.

*Micro-esempio (perché lo schema funziona).* La massa di una sbarra $[0,L]$ con densità lineare $\rho(x)$ (massa per unità di lunghezza): su $[x,x+dx]$ la densità è quasi costante $=\rho(x)$, quindi il contributo è $dm=\rho(x)\,dx$, e la massa totale è $m=\int_0^L\rho(x)\,dx$. Lo stesso schema, con «densità» diversa, genererà aree, volumi e valori economici.

### 2.2 Area tra due curve

Il primo uso geometrico. Siano $f,g$ continue su $[a,b]$ con $f(x)\ge g(x)$ su tutto l'intervallo. Vogliamo l'area della regione compresa **verticalmente** tra i due grafici.

Applichiamo lo schema. Affettiamo la regione con strisce verticali. Una striscia in posizione $x$, di spessore $dx$, è quasi un rettangolo: la sua **altezza** è la distanza verticale tra le curve, cioè $f(x)-g(x)$ (curva di sopra meno curva di sotto), e la sua **base** è $dx$. Il contributo elementare è dunque
$$dA=\big[f(x)-g(x)\big]\,dx.$$
Sommando e integrando:
$$\boxed{\,A=\int_a^b\big[f(x)-g(x)\big]\,dx\,}\qquad(f\ge g\ \text{su }[a,b]).$$
Nota che la formula usa la **differenza delle funzioni**, $f-g$, non la differenza degli integrali: l'altezza della striscia è un dato locale, punto per punto. Il segno è già sistemato dal fatto che $f\ge g$ rende $f-g\ge0$: stiamo davvero sommando altezze positive.

*Micro-esempio.* Area tra $y=x^2$ (sotto) e $y=2x$ (sopra). Intersezioni: $x^2=2x\Rightarrow x(x-2)=0\Rightarrow x=0,2$. Su $[0,2]$ verifichiamo in $x=1$: $2\cdot1=2>1=1^2$, quindi $2x\ge x^2$. Allora
$$A=\int_0^2(2x-x^2)\,dx=\Big[x^2-\tfrac{x^3}{3}\Big]_0^2=4-\tfrac{8}{3}=\tfrac{4}{3}.$$

**Se le curve si incrociano** dentro $[a,b]$, la curva «di sopra» cambia. In quel caso non si può usare $\int(f-g)$ su tutto l'intervallo: bisogna trovare i punti d'incrocio, spezzare l'integrale e mettere in ciascun tratto la differenza «giusta» (sopra meno sotto). In modo compatto:
$$A=\int_a^b\big|f(x)-g(x)\big|\,dx,$$
dove il valore assoluto sceglie automaticamente il segno corretto in ogni tratto.

*Micro-esempio.* Area tra $y=\sin x$ e $y=\cos x$ su $[0,\pi/2]$. Si incrociano dove $\sin x=\cos x$, cioè $x=\pi/4$. Su $[0,\pi/4]$ è $\cos x\ge\sin x$; su $[\pi/4,\pi/2]$ è $\sin x\ge\cos x$. Quindi
$$A=\int_0^{\pi/4}(\cos x-\sin x)\,dx+\int_{\pi/4}^{\pi/2}(\sin x-\cos x)\,dx=(\sqrt2-1)+(\sqrt2-1)=2\sqrt2-2.$$
(Ogni integrale vale $\sqrt2-1$: i due tratti sono simmetrici.)

```checkpoint
[domanda]
Perché l'area tra due curve è $\int_a^b(\text{sopra}-\text{sotto})\,dx$ e **non** $\big|\int_a^b f\,dx-\int_a^b g\,dx\big|$? In quale caso particolare le due espressioni coincidono, e perché in generale no?

[risposta]
Perché l'area si costruisce sommando le **altezze locali** delle strisce, $f(x)-g(x)$, che devono essere *tutte positive* (è questo che rende «$f$ sopra, $g$ sotto» in ogni punto). L'espressione $\big|\int f-\int g\big|=\big|\int(f-g)\big|$ mette il valore assoluto **fuori** dall'integrale: se le curve si incrociano, i tratti in cui $f-g>0$ e quelli in cui $f-g<0$ si **cancellano parzialmente** dentro l'integrale, e il risultato sottostima l'area (arriva perfino a $0$ per regioni simmetriche non vuote). Con il valore assoluto **dentro**, $\int|f-g|$, ogni tratto contribuisce con la sua altezza positiva e nulla si cancella. Le due espressioni coincidono **solo** se $f-g$ ha segno costante su tutto $[a,b]$ (le curve non si incrociano all'interno): allora il modulo esterno e quello interno fanno la stessa cosa. In generale no, ed è per questo che il primo passo è sempre trovare i punti d'incrocio.
```

**Affettare in orizzontale.** A volte la regione è descritta più naturalmente da funzioni di $y$, cioè $x=$ (qualcosa di $y$). Allora si affetta con strisce *orizzontali* di spessore $dy$: la striscia ha lunghezza «curva a destra meno curva a sinistra» e
$$A=\int_c^d\big[x_{\text{destra}}(y)-x_{\text{sinistra}}(y)\big]\,dy.$$
È lo stesso schema con i ruoli di $x$ e $y$ scambiati; si sceglie l'orientamento che rende la regione descrivibile senza spezzarla.

*Micro-esempio.* Regione tra $x=y^2$ e $x=y+2$. Intersezioni: $y^2=y+2\Rightarrow y^2-y-2=0\Rightarrow y=-1,2$. Su $[-1,2]$ la retta $y+2$ sta a destra della parabola (in $y=0$: $2>0$). Quindi
$$A=\int_{-1}^{2}\big[(y+2)-y^2\big]\,dy=\Big[\tfrac{y^2}{2}+2y-\tfrac{y^3}{3}\Big]_{-1}^{2}=\tfrac{9}{2}.$$
Descrivere questa stessa regione in verticale avrebbe richiesto di spezzarla, perché il bordo inferiore cambia natura: l'affettamento orizzontale la evita.

### 2.3 Volumi di solidi di rotazione

Se ruotiamo una regione piana attorno a un asse, otteniamo un solido. Il suo volume è di nuovo un accumulo — di fette — e lo schema si applica identico, con una densità che ora è un'**area di sezione**.

**Metodo dei dischi e degli anelli** (rotazione attorno all'asse $x$). Affettiamo il solido con piani perpendicolari all'asse $x$. La fetta in posizione $x$, di spessore $dx$, è un cilindretto molto piatto: un **disco**. Se la regione ruotata è quella sotto $y=R(x)$ (con $R(x)\ge0$), il disco ha raggio $R(x)$, quindi area di sezione $\pi R(x)^2$, e volume elementare
$$dV=\pi R(x)^2\,dx\quad\Longrightarrow\quad V=\pi\int_a^b R(x)^2\,dx.$$
Il fattore $\pi$ è l'area del cerchio, non un dettaglio ornamentale: senza di esso staremmo calcolando un'altra cosa. Se invece ruotiamo la regione *tra* due curve $R(x)\ge r(x)\ge0$, la sezione è un **anello** (una corona circolare) di area $\pi R(x)^2-\pi r(x)^2$:
$$\boxed{\,V=\pi\int_a^b\big[R(x)^2-r(x)^2\big]\,dx\,}.$$
Attenzione: si sottraggono le **aree** ($R^2-r^2$), non i raggi: $\pi(R-r)^2$ è un errore, perché non è l'area di nessun anello.

*Micro-esempio (disco).* La regione sotto $y=\sqrt x$ su $[0,4]$ ruota attorno all'asse $x$. Raggio $R(x)=\sqrt x$:
$$V=\pi\int_0^4(\sqrt x)^2\,dx=\pi\int_0^4 x\,dx=\pi\Big[\tfrac{x^2}{2}\Big]_0^4=8\pi.$$

**Metodo dei gusci cilindrici** (comodo per rotazioni attorno all'asse $y$). Qui affettiamo la regione in strisce verticali *parallele* all'asse di rotazione. Ruotando la striscia in posizione $x$ (spessore $dx$, altezza $h(x)$) attorno all'asse $y$, essa spazza un sottile **guscio cilindrico**: un cilindro cavo di raggio $x$, altezza $h(x)$, parete di spessore $dx$. Srotolandolo diventa una lastra di dimensioni «circonferenza $\times$ altezza $\times$ spessore», quindi
$$dV=2\pi x\cdot h(x)\cdot dx\quad\Longrightarrow\quad\boxed{\,V=2\pi\int_a^b x\,h(x)\,dx\,}.$$
La derivazione rigorosa del volume del guscio (dove va a finire il termine $(dx)^2$) è in §3.2.

*Micro-esempio (gusci).* La regione sotto $y=x^2$ su $[0,2]$ ruota attorno all'asse $y$. Guscio di raggio $x$, altezza $x^2$:
$$V=2\pi\int_0^2 x\cdot x^2\,dx=2\pi\int_0^2 x^3\,dx=2\pi\Big[\tfrac{x^4}{4}\Big]_0^2=8\pi.$$

I due metodi non sono in competizione: sono due modi di affettare lo *stesso* solido, e danno lo stesso volume. Si sceglie quello che rende le fette descrivibili con una sola formula: dischi/anelli quando l'asse di rotazione **coincide** con l'asse lungo cui si integra, gusci quando l'asse di rotazione è **perpendicolare** ad esso.

### 2.4 Valor medio di una funzione

Che cosa vuol dire «valore medio» di una grandezza che cambia con continuità — la temperatura di un giorno, la velocità di un viaggio, il reddito lungo una distribuzione? La media di un numero finito di valori è la loro somma diviso quanti sono. Per un continuo di valori $f(x)$ su $[a,b]$, la «somma» diventa un integrale e il «quanti sono» diventa la lunghezza $b-a$:
$$\boxed{\,\bar f=\frac{1}{b-a}\int_a^b f(x)\,dx\,}.$$
La lettura geometrica è netta: $\bar f$ è l'altezza del **rettangolo** che, sulla base $[a,b]$, ha esattamente la stessa area dell'integrale di $f$. Si «spiana» il profilo di $f$ in un livello costante che racchiude la medesima area.

Questa non è una nuova definizione arbitraria: è il numero che compare nel **teorema del valor medio integrale** (lez.12), secondo cui, se $f$ è continua su $[a,b]$, esiste almeno un punto $c\in[a,b]$ con $f(c)=\bar f$. Cioè: una funzione continua *assume davvero* il proprio valor medio, in almeno un punto. Il collegamento è esatto: $\bar f$ è definito qui come media, e il teorema garantisce che quella media è un valore effettivamente raggiunto.

*Micro-esempio.* Valor medio di $f(x)=\sin x$ su $[0,\pi]$:
$$\bar f=\frac1\pi\int_0^\pi\sin x\,dx=\frac1\pi\big[-\cos x\big]_0^\pi=\frac1\pi(1+1)=\frac2\pi\approx0{,}637.$$
Attenzione: $\bar f\neq\sin(\pi/2)=1$. Il valor medio non è il valore nel punto medio dell'intervallo, né il massimo: è l'integrale diviso per l'ampiezza. Il punto $c$ del teorema è $c=\arcsin\frac2\pi\approx0{,}69$, che sta in $[0,\pi]$ come promesso.

### 2.5 Applicazioni economiche

Qui lo schema dell'elemento infinitesimo mostra la sua vera generalità: la «densità» non è più geometrica ma economica, eppure la macchina è identica.

**Surplus del consumatore e del produttore.** In un mercato, la **curva di domanda** $p=D(q)$ dice il prezzo che i consumatori sono disposti a pagare per la $q$-esima unità: è decrescente, perché le prime unità valgono di più. La **curva di offerta** $p=S(q)$ dice il prezzo minimo a cui i produttori sono disposti a vendere la $q$-esima unità: è crescente. Il mercato si equilibra alla quantità $q^*$ e prezzo $p^*$ in cui $D(q^*)=S(q^*)=p^*$.

Applichiamo lo schema alla domanda. Sull'unità infinitesima tra $q$ e $q+dq$, i consumatori *sarebbero stati disposti* a pagare $D(q)\,dq$, ma ne pagano solo $p^*\,dq$ (tutti pagano il prezzo di equilibrio). Il **guadagno netto** su quel pezzetto è $[D(q)-p^*]\,dq$. Sommando su tutte le unità acquistate:
$$\boxed{\,\text{CS}=\int_0^{q^*}\big[D(q)-p^*\big]\,dq\,}\qquad(\text{surplus del consumatore}).$$
È l'area tra la curva di domanda e la retta orizzontale del prezzo: quanto la collettività dei consumatori «risparmia» rispetto a quello che avrebbe pagato. Simmetricamente, il **surplus del produttore** è l'area tra il prezzo e la curva di offerta:
$$\text{PS}=\int_0^{q^*}\big[p^*-S(q)\big]\,dq.$$

*Micro-esempio.* Domanda $D(q)=20-q$, offerta $S(q)=2+q$. Equilibrio: $20-q=2+q\Rightarrow q^*=9$, $p^*=11$. Surplus del consumatore:
$$\text{CS}=\int_0^{9}\big[(20-q)-11\big]\,dq=\int_0^9(9-q)\,dq=\Big[9q-\tfrac{q^2}{2}\Big]_0^9=81-\tfrac{81}{2}=\tfrac{81}{2}=40{,}5.$$

**Valore attuale di un flusso continuo di reddito.** Un capitale $C$ oggi, investito a tasso $r$ con **capitalizzazione continua**, dopo un tempo $t$ vale $C\,e^{rt}$; letto all'indietro, un incasso $C$ ricevuto tra $t$ anni vale **oggi** $C\,e^{-rt}$ (lo si «sconta», perché denaro futuro vale meno di denaro presente). Supponiamo ora un reddito che non arriva in un istante ma *fluisce* nel tempo a un tasso $f(t)$ (euro per anno). Sull'intervallino $[t,t+dt]$ l'incasso è $f(t)\,dt$; scontato al presente vale $f(t)e^{-rt}\,dt$. Sommando su $[0,T]$:
$$\boxed{\,\text{PV}=\int_0^T f(t)\,e^{-rt}\,dt\,}\qquad(\text{valore attuale del flusso}).$$
Il segno dell'esponente è **negativo**: si sconta, cioè si riporta indietro nel tempo. Un errore frequente è scrivere $e^{+rt}$, che invece *capitalizza* in avanti e darebbe il **valore futuro** $\text{FV}=\int_0^T f(t)e^{r(T-t)}\,dt$.

*Micro-esempio.* Un investimento rende un flusso costante $f(t)=1000$ euro/anno per $T=5$ anni, tasso $r=0{,}04$ continuo. Valore attuale:
$$\text{PV}=\int_0^5 1000\,e^{-0{,}04t}\,dt=1000\cdot\frac{1-e^{-0{,}2}}{0{,}04}=25000\,(1-e^{-0{,}2})\approx25000\cdot0{,}1813\approx4532\text{ euro}.$$
Molto meno dei $5000$ euro nominali: lo sconto continuo erode il valore del denaro futuro.

```checkpoint
[domanda]
Nel valore attuale $\text{PV}=\int_0^T f(t)\,e^{-rt}\,dt$: (a) cosa rappresenta economicamente il fattore $e^{-rt}$ e perché l'esponente è negativo? (b) Cosa cambierebbe, concettualmente, se scrivessi $e^{+rt}$?

[risposta]
(a) $e^{-rt}$ è il **fattore di sconto**: converte un euro incassato all'istante $t$ nel suo valore *oggi*. Nasce dall'inverso della capitalizzazione continua $C\mapsto C\,e^{rt}$: se investire $C$ oggi lo fa diventare $C\,e^{rt}$ tra $t$ anni, allora un euro tra $t$ anni «vale» oggi $e^{-rt}$ euro, perché è quanto dovrei investire adesso per averne uno a scadenza. L'esponente è negativo perché il denaro futuro vale **meno** del presente (preferenza temporale + rendimento perso), e più è lontano nel tempo, più è scontato: $e^{-rt}\to0$ per $t$ grande. L'integrale somma i contributi elementari $f(t)\,dt$, ciascuno *già riportato al presente*. (b) Con $e^{+rt}$ non si sconterebbe ma si **capitalizzerebbe**: ogni incasso verrebbe proiettato in avanti anziché indietro, e l'integrale non darebbe più il valore attuale bensì una grandezza legata al valore futuro. È esattamente l'errore di segno da evitare: cambia la direzione temporale del calcolo.
```

**Disuguaglianza: il coefficiente di Gini (cenno).** Ordinando la popolazione dal più povero al più ricco, la **curva di Lorenz** $L(x)$ dice quale frazione del reddito totale è posseduta dalla frazione più povera $x$ della popolazione ($0\le x\le1$). L'uguaglianza perfetta corrisponde alla diagonale $L(x)=x$ (il $20\%$ più povero possiede il $20\%$ del reddito). Più la curva di Lorenz «sprofonda» sotto la diagonale, più il reddito è concentrato. Il **coefficiente di Gini** misura questa concentrazione come area, normalizzata:
$$G=\frac{\text{area tra diagonale e Lorenz}}{\text{area sotto la diagonale}}=\frac{\int_0^1\big[x-L(x)\big]\,dx}{1/2}=2\int_0^1\big[x-L(x)\big]\,dx.$$
Vale $G=0$ per l'uguaglianza perfetta (Lorenz $=$ diagonale, area nulla) e tende a $1$ per la massima concentrazione. È di nuovo un'area tra due curve (§2.2), riletta come indice economico.

### 2.6 Lunghezza di un arco di curva

Chiudiamo con un'ultima applicazione geometrica, che mostra lo schema con una densità di tipo diverso. Quanto è lungo il grafico di $f$ tra $a$ e $b$? Affettiamo la curva in tratti corrispondenti a $[x,x+dx]$. Un trattino è quasi un segmento con base orizzontale $dx$ e dislivello verticale $dy=f'(x)\,dx$; per il teorema di Pitagora la sua lunghezza è
$$ds=\sqrt{(dx)^2+(dy)^2}=\sqrt{1+\big[f'(x)\big]^2}\,dx.$$
Sommando:
$$L=\int_a^b\sqrt{1+\big[f'(x)\big]^2}\,dx.$$
Qui la «densità» è $\sqrt{1+f'^2}$, che pesa quanto ripida è la curva: dove $f$ è piatta ($f'\approx0$) il fattore vale $\approx1$ e la lunghezza è quasi $dx$; dove è ripida, il fattore cresce. Va sottolineato che $L\neq\int f'\,dx$: quell'integrale darebbe solo la variazione verticale $f(b)-f(a)$, non la lunghezza del percorso.

*Micro-esempio.* Lunghezza di $f(x)=\tfrac23 x^{3/2}$ su $[0,3]$. Qui $f'(x)=x^{1/2}$, quindi $1+f'^2=1+x$ e
$$L=\int_0^3\sqrt{1+x}\,dx=\Big[\tfrac23(1+x)^{3/2}\Big]_0^3=\tfrac23(8-1)=\tfrac{14}{3}.$$

Ecco la regione dell'esempio introduttivo dell'area, tra $y=x$ e $y=x^2$ su $[0,1]$: l'area vale $\int_0^1(x-x^2)\,dx=\tfrac16$.

```plot
{"title":"Area tra y=x e y=x²","fn":"x","fn2":"x*x","domain":[-0.3,1.3],"yDomain":[-0.2,1.2],"label1":"y=x","label2":"y=x²"}
```

## 3. Dimostrazioni

Le formule di questa lezione derivano tutte dallo stesso schema. Dimostriamo qui i due punti dove lo schema richiede una giustificazione non ovvia: che «sommare i contributi elementari $A(x)\,dx$» dia davvero l'integrale (§3.1), e che il volume del guscio cilindrico sia esattamente $2\pi x\,h\,dx$ una volta scartato il termine di ordine superiore (§3.2). Le altre formule (area tra curve, valor medio, applicazioni economiche) sono applicazioni dirette di §3.1 con densità diverse, e non richiedono una dimostrazione separata.

### 3.1 Il metodo delle sezioni (Cavalieri) è rigoroso

**Enunciato.** Sia $S$ un solido compreso tra i piani $x=a$ e $x=b$, e sia $A(x)$ l'area della sua sezione con il piano perpendicolare all'asse $x$ in posizione $x$. Se $A$ è **continua** su $[a,b]$, allora il volume di $S$ è
$$V=\int_a^b A(x)\,dx.$$
(Con $A(x)=\pi R(x)^2$ o $A(x)=\pi[R^2-r^2]$ si ottengono dischi e anelli; con $A(x)=f(x)-g(x)$, in dimensione una in meno, si ottiene l'area tra curve. La struttura della dimostrazione è la stessa.)

**Dimostrazione.** Prendiamo una partizione di $[a,b]$ in $n$ intervallini $[x_{i-1},x_i]$ tramite punti $a=x_0<x_1<\dots<x_n=b$, e indichiamo con $\Delta x_i=x_i-x_{i-1}$ l'ampiezza dell'$i$-esimo. Concentriamoci sulla fetta di solido compresa tra $x_{i-1}$ e $x_i$.

*Passo 1 — incastro tra due cilindretti.* Poiché $A$ è continua sull'intervallo chiuso e limitato $[x_{i-1},x_i]$, per il [teorema di Weierstrass](/analisi/calcolo-differenziale-una-variabile/08-teoremi-differenziale) essa vi assume un valore minimo $m_i=A(\xi_i)$ e un valore massimo $M_i=A(\eta_i)$, in opportuni punti $\xi_i,\eta_i$ dell'intervallino. La fetta *contiene* allora il cilindretto di sezione costante $m_i$ e altezza $\Delta x_i$, ed *è contenuta* nel cilindretto di sezione $M_i$ e stessa altezza. Passando ai volumi (che per un cilindro sono sezione $\times$ altezza):
$$m_i\,\Delta x_i\ \le\ V_i\ \le\ M_i\,\Delta x_i,$$
dove $V_i$ è il volume della fetta $i$-esima.

*Passo 2 — somma su tutte le fette.* Sommando queste disuguaglianze per $i=1,\dots,n$ e usando che $V=\sum_i V_i$ (il volume è additivo sulle fette):
$$\sum_{i=1}^n m_i\,\Delta x_i\ \le\ V\ \le\ \sum_{i=1}^n M_i\,\Delta x_i.$$
Ma la somma a sinistra è esattamente una **somma inferiore di Darboux** della funzione $A$ sulla partizione scelta, e quella a destra una **somma superiore** (lez.12): $m_i$ e $M_i$ sono per costruzione l'inf e il sup di $A$ su ciascun intervallino.

*Passo 3 — passaggio al limite.* La funzione $A$ è continua, dunque [integrabile](/analisi/calcolo-integrale-una-variabile/12-integrale-definito) su $[a,b]$ (lez.12): al raffinarsi della partizione le sue somme inferiori e superiori tendono **entrambe** allo stesso limite, cioè $\int_a^b A(x)\,dx$. Il volume $V$ è un numero *fisso* schiacciato tra queste due somme per ogni partizione; poiché i due estremi convergono allo stesso valore, per il teorema del confronto ($V$ è costretto tra due successioni con lo stesso limite) si conclude
$$V=\int_a^b A(x)\,dx.\qquad\blacksquare$$

Questo è ciò che, informalmente, chiamiamo «$V=\int dV$ con $dV=A(x)\,dx$»: la scrittura infinitesimale è un riassunto di questo incastro tra somme inferiori e superiori. La stima quantitativa che garantisce che il divario tra le due somme si chiude — la parte più tecnica — è isolata qui sotto.

<details class="dim-tecnica">
<summary>Perché il divario superiore−inferiore tende a zero (stima con la continuità uniforme)</summary>

Il Passo 3 usa che $\sum M_i\Delta x_i-\sum m_i\Delta x_i\to0$. Vediamolo direttamente. La differenza è
$$\sum_{i=1}^n (M_i-m_i)\,\Delta x_i=\sum_{i=1}^n\big[A(\eta_i)-A(\xi_i)\big]\,\Delta x_i.$$
La funzione $A$ è continua sull'intervallo chiuso e limitato $[a,b]$, quindi vi è **uniformemente continua** (teorema di Heine–Cantor): fissato $\varepsilon>0$, esiste $\delta>0$ tale che $|s-t|<\delta$ implica $|A(s)-A(t)|<\dfrac{\varepsilon}{b-a}$, **con lo stesso $\delta$ valido ovunque** sull'intervallo. Prendiamo una partizione con tutti gli intervallini di ampiezza $\Delta x_i<\delta$. Allora $\xi_i,\eta_i$ stanno nello stesso intervallino, dunque $|\eta_i-\xi_i|<\delta$ e $M_i-m_i=A(\eta_i)-A(\xi_i)<\dfrac{\varepsilon}{b-a}$. Perciò
$$\sum_{i=1}^n (M_i-m_i)\,\Delta x_i<\frac{\varepsilon}{b-a}\sum_{i=1}^n\Delta x_i=\frac{\varepsilon}{b-a}\,(b-a)=\varepsilon.$$
Essendo $\varepsilon$ arbitrario, il divario tra somma superiore e inferiore si può rendere piccolo a piacere: le due somme hanno lo stesso limite, e il volume $V$, incastrato in mezzo, coincide con esso. È lo stesso argomento che in lez.12 dimostra l'integrabilità delle funzioni continue, applicato qui alla densità $A$.
</details>

### 3.2 Il volume del guscio cilindrico

**Enunciato.** Un guscio cilindrico di raggio interno $x$, spessore $dx$ e altezza $h$ ha volume $dV=2\pi x\,h\,dx$ a meno di infinitesimi di ordine superiore, da cui $V=2\pi\int_a^b x\,h(x)\,dx$.

**Dimostrazione.** Il guscio è la differenza tra due cilindri pieni coassiali di altezza $h$: quello esterno di raggio $x+dx$ e quello interno di raggio $x$. Il volume di un cilindro pieno è (area di base) $\times$ altezza $=\pi(\text{raggio})^2\,h$. Quindi
$$dV=\pi(x+dx)^2\,h-\pi x^2\,h=\pi h\big[(x+dx)^2-x^2\big]=\pi h\big[2x\,dx+(dx)^2\big]=2\pi x\,h\,dx+\pi h\,(dx)^2.$$
Il primo termine, $2\pi x\,h\,dx$, è proporzionale a $dx$; il secondo, $\pi h\,(dx)^2$, è proporzionale a $(dx)^2$, ed è quindi un **infinitesimo di ordine superiore**: diviso per $dx$ tende a $0$ quando $dx\to0$. Nel senso reso rigoroso in §3.1, i termini di ordine superiore sommati su tutte le fette contribuiscono $0$ al limite; sopravvive solo la parte lineare. Dunque il contributo elementare da integrare è $2\pi x\,h\,dx$, e sommando su $[a,b]$ (con $h=h(x)$):
$$V=2\pi\int_a^b x\,h(x)\,dx.\qquad\blacksquare$$
La lettura mnemonica «circonferenza $\times$ altezza $\times$ spessore» $=2\pi x\cdot h\cdot dx$ non è un caso: srotolando il guscio sottile si ottiene proprio una lastra rettangolare di quelle tre dimensioni, e il termine $(dx)^2$ scartato è l'errore che si commette trattando il guscio curvo come una lastra piatta — errore che sparisce nel limite.

## 4. Esempi

Gli esempi sono ordinati per tipo e difficoltà crescente. In ciascuno, la parte creativa è **individuare il contributo elementare $dQ$**; il calcolo poi usa le tecniche di lez.11–13.

**Esempio 1 (area, curve che si incrociano).** Area della regione chiusa tra $y=4-x^2$ e $y=x+2$.

*Strategia:* trovare gli incroci, decidere chi sta sopra, integrare la differenza.
Intersezioni: $4-x^2=x+2\Rightarrow x^2+x-2=0\Rightarrow(x+2)(x-1)=0\Rightarrow x=-2,1$. In $x=0$: la parabola vale $4$, la retta $2$, quindi $4-x^2\ge x+2$ su $[-2,1]$. Allora
$$A=\int_{-2}^{1}\big[(4-x^2)-(x+2)\big]\,dx=\int_{-2}^1(2-x-x^2)\,dx=\Big[2x-\tfrac{x^2}{2}-\tfrac{x^3}{3}\Big]_{-2}^1.$$
Calcolando i due valori dell'antiderivata: in $x=1$ vale $2-\tfrac12-\tfrac13=\tfrac76$; in $x=-2$ vale $-4-2+\tfrac83=-\tfrac{10}{3}=-\tfrac{20}{6}$. La differenza è $\tfrac76-\big(-\tfrac{20}{6}\big)=\tfrac{27}{6}=\tfrac92$.
*Errore da evitare:* saltare la verifica del segno e scrivere $(x+2)-(4-x^2)$, ottenendo $-\tfrac92$: un'area non può essere negativa; il segno segnala che si è invertito sopra e sotto.

**Esempio 2 (area, affettamento orizzontale).** Area tra $x=y^2-2$ e $x=y$.

*Strategia:* le curve sono funzioni di $y$; conviene affettare in orizzontale. Intersezioni: $y^2-2=y\Rightarrow y^2-y-2=0\Rightarrow y=-1,2$. In $y=0$: la retta dà $x=0$, la parabola $x=-2$, quindi $y$ (retta) sta a destra. Allora
$$A=\int_{-1}^{2}\big[y-(y^2-2)\big]\,dy=\int_{-1}^2(y-y^2+2)\,dy=\Big[\tfrac{y^2}{2}-\tfrac{y^3}{3}+2y\Big]_{-1}^2=\tfrac{10}{3}-\big(-\tfrac{7}{6}\big)=\tfrac92.$$
*Osservazione:* in verticale la stessa regione avrebbe richiesto di spezzare l'integrale, perché il bordo inferiore passa da un ramo all'altro della parabola. Scegliere l'affettamento giusto è metà del lavoro.

**Esempio 3 (volume per anelli).** La regione tra $y=\sqrt x$ e $y=x$ su $[0,1]$ ruota attorno all'asse $x$.

*Strategia:* su $[0,1]$ è $\sqrt x\ge x$ (in $x=\tfrac14$: $\tfrac12>\tfrac14$), quindi ruotando si forma un anello con raggio esterno $R=\sqrt x$ e interno $r=x$:
$$V=\pi\int_0^1\big[(\sqrt x)^2-x^2\big]\,dx=\pi\int_0^1(x-x^2)\,dx=\pi\Big[\tfrac{x^2}{2}-\tfrac{x^3}{3}\Big]_0^1=\frac{\pi}{6}.$$
*Errore da evitare:* scrivere $\pi\int(\sqrt x-x)^2\,dx$ (raggi sottratti e poi elevati): si devono sottrarre le **aree** $R^2-r^2$, non i raggi.

**Esempio 4 (volume per gusci con integrazione per parti).** La regione sotto $y=\sin x$ su $[0,\pi]$ ruota attorno all'asse $y$.

*Strategia:* l'asse di rotazione ($y$) è perpendicolare all'asse d'integrazione: gusci. Raggio $x$, altezza $\sin x$:
$$V=2\pi\int_0^\pi x\sin x\,dx.$$
L'integrale si fa [per parti](/analisi/calcolo-integrale-una-variabile/13-tecniche-integrazione) (lez.13) con $u=x$, $dv=\sin x\,dx$, quindi $v=-\cos x$:
$$\int_0^\pi x\sin x\,dx=\big[-x\cos x\big]_0^\pi+\int_0^\pi\cos x\,dx=\pi+\big[\sin x\big]_0^\pi=\pi+0=\pi.$$
Dunque $V=2\pi\cdot\pi=2\pi^2$.

**Esempio 5 (volume della sfera, derivazione).** Ricavare $V=\tfrac43\pi R^3$ con il metodo dei dischi.

*Strategia:* la sfera è generata ruotando il semicerchio $y=\sqrt{R^2-x^2}$ (con $x\in[-R,R]$) attorno all'asse $x$. Ogni disco ha raggio $\sqrt{R^2-x^2}$, area di sezione $\pi(R^2-x^2)$:
$$V=\pi\int_{-R}^{R}(R^2-x^2)\,dx=\pi\Big[R^2x-\tfrac{x^3}{3}\Big]_{-R}^{R}=\pi\Big[\big(R^3-\tfrac{R^3}{3}\big)-\big(-R^3+\tfrac{R^3}{3}\big)\Big]=\pi\cdot\tfrac{4R^3}{3}=\frac{4}{3}\pi R^3.$$
Una formula «geometrica» nota, ricavata come puro accumulo di fette.

**Esempio 6 (valor medio e teorema della media).** Valor medio di $f(x)=e^x$ su $[0,2]$ e il punto $c$ garantito.

$$\bar f=\frac12\int_0^2 e^x\,dx=\frac12\big[e^x\big]_0^2=\frac{e^2-1}{2}\approx3{,}19.$$
Il punto $c$ del teorema della media risolve $e^c=\bar f$, cioè $c=\ln\dfrac{e^2-1}{2}\approx1{,}16$, che sta in $[0,2]$. *Nota:* $\bar f\approx3{,}19$ è maggiore del valore nel punto medio $e^1\approx2{,}72$, perché $e^x$ è convessa e «pesa» di più verso destra.

**Esempio 7 (economia: surplus totale).** Domanda $D(q)=100-2q$, offerta $S(q)=20+q$. Calcolare equilibrio, surplus del consumatore e del produttore.

Equilibrio: $100-2q=20+q\Rightarrow 80=3q\Rightarrow q^*=\tfrac{80}{3}$, $p^*=20+\tfrac{80}{3}=\tfrac{140}{3}$.
$$\text{CS}=\int_0^{q^*}\big[(100-2q)-p^*\big]\,dq=\int_0^{80/3}\Big(100-\tfrac{140}{3}-2q\Big)\,dq=\int_0^{80/3}\Big(\tfrac{160}{3}-2q\Big)\,dq.$$
$$=\Big[\tfrac{160}{3}q-q^2\Big]_0^{80/3}=\tfrac{160}{3}\cdot\tfrac{80}{3}-\Big(\tfrac{80}{3}\Big)^2=\tfrac{12800}{9}-\tfrac{6400}{9}=\tfrac{6400}{9}\approx711{,}1.$$
*Interpretazione:* la curva di domanda è una retta e il prezzo è orizzontale, quindi CS è l'area di un triangolo di base $q^*=\tfrac{80}{3}$ e altezza $D(0)-p^*=100-\tfrac{140}{3}=\tfrac{160}{3}$: $\tfrac12\cdot\tfrac{80}{3}\cdot\tfrac{160}{3}=\tfrac{6400}{9}$. L'integrale conferma la geometria.

**Esempio 8 (economia: valore attuale di un flusso crescente).** Un progetto genera un flusso di reddito $f(t)=1000+200t$ euro/anno per $T=10$ anni, con tasso continuo $r=0{,}05$. Calcolarne il valore attuale.

$$\text{PV}=\int_0^{10}(1000+200t)\,e^{-0{,}05t}\,dt.$$
Spezziamo in due. Il primo pezzo, $\int_0^{10}1000\,e^{-0{,}05t}\,dt=1000\cdot\dfrac{1-e^{-0{,}5}}{0{,}05}=20000(1-e^{-0{,}5})$. Il secondo richiede l'integrazione per parti; lo isoliamo nel blocco tecnico.

<details class="dim-tecnica">
<summary>Calcolo di $\int_0^{10}200t\,e^{-0{,}05t}\,dt$ per parti</summary>

Poniamo $u=200t$, $dv=e^{-0{,}05t}\,dt$, dunque $du=200\,dt$ e $v=-\dfrac{1}{0{,}05}e^{-0{,}05t}=-20\,e^{-0{,}05t}$:
$$\int_0^{10}200t\,e^{-0{,}05t}\,dt=\Big[-4000t\,e^{-0{,}05t}\Big]_0^{10}+\int_0^{10}4000\,e^{-0{,}05t}\,dt.$$
Il termine di bordo: in $t=10$ vale $-40000\,e^{-0{,}5}$, in $t=0$ vale $0$; quindi $-40000\,e^{-0{,}5}$. L'integrale residuo: $4000\cdot\dfrac{1-e^{-0{,}5}}{0{,}05}=80000(1-e^{-0{,}5})$. In totale
$$\int_0^{10}200t\,e^{-0{,}05t}\,dt=-40000\,e^{-0{,}5}+80000(1-e^{-0{,}5})=80000-120000\,e^{-0{,}5}.$$
</details>

Sommando i due pezzi, con $e^{-0{,}5}\approx0{,}6065$:
$$\text{PV}=20000(1-e^{-0{,}5})+80000-120000\,e^{-0{,}5}=100000-140000\,e^{-0{,}5}\approx100000-84910\approx15090\text{ euro}.$$
Il flusso nominale totale sarebbe $\int_0^{10}(1000+200t)\,dt=1000\cdot10+200\cdot50=20000$ euro: lo sconto continuo lo riduce a circa $15090$ euro di valore odierno.

## 5. Collegamenti e riepilogo

**Idea centrale.** Ogni grandezza che si costruisce **accumulando contributi infinitesimi** distribuiti lungo un intervallo è un integrale. Il lavoro concettuale è sempre lo stesso: affettare, trovare il contributo elementare $dQ=(\text{densità})\cdot(\text{spessore})$, integrare. La densità cambia natura — altezza di striscia, area di sezione, incasso scontato — ma la macchina è unica, e il TFC (lez.12) esegue il calcolo.

**Collegamenti.**
- **[Integrale definito e TFC](/analisi/calcolo-integrale-una-variabile/12-integrale-definito)** (lez.12): è il fondamento. Il valor medio è il numero del teorema della media integrale; il metodo delle sezioni (§3.1) è una diretta applicazione dell'integrabilità delle funzioni continue e delle somme di Darboux.
- **[Tecniche di integrazione](/analisi/calcolo-integrale-una-variabile/13-tecniche-integrazione)** (lez.13): senza per parti e sostituzione, molti di questi integrali (volume di $x\sin x$, valore attuale $t\,e^{-rt}$) resterebbero bloccati. Le applicazioni sono il banco di prova delle tecniche.
- **[Integrali impropri](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri)** (lez.15): il passo successivo. Il valore attuale di una **rendita perpetua** ($T\to\infty$) è $\int_0^\infty f(t)e^{-rt}\,dt$, un integrale improprio; e la gittata cardiaca in medicina è $\int_0^\infty c(t)\,dt$. La convergenza di questi integrali è il tema della prossima lezione.
- **Probabilità e statistica:** il **valore atteso** di una variabile continua, $E[X]=\int x\,f(x)\,dx$, è un valor medio pesato dalla densità — lo stesso schema di §2.4 con peso $f(x)$. Il coefficiente di Gini (§2.5) è un'area tra curve. Il ponte con la probabilità passa da qui.
- **Finanza:** valore attuale e valore futuro di flussi continui sono la versione «a tempo continuo» delle formule di attualizzazione discrete; ritornano nel calcolo del prezzo di obbligazioni e nella valutazione di progetti d'investimento (VAN).

**Formule chiave.**

| Grandezza | Contributo elementare $dQ$ | Formula |
|---|---|---|
| Area tra curve ($f\ge g$) | $(f-g)\,dx$ | $A=\int_a^b(f-g)\,dx$ |
| Area (affettamento in $y$) | $(x_{\text{dx}}-x_{\text{sx}})\,dy$ | $A=\int_c^d(x_{\text{dx}}-x_{\text{sx}})\,dy$ |
| Volume (dischi/anelli, asse $x$) | $\pi(R^2-r^2)\,dx$ | $V=\pi\int_a^b(R^2-r^2)\,dx$ |
| Volume (gusci, asse $y$) | $2\pi x\,h(x)\,dx$ | $V=2\pi\int_a^b x\,h(x)\,dx$ |
| Valor medio | — | $\bar f=\tfrac{1}{b-a}\int_a^b f\,dx$ |
| Lunghezza d'arco | $\sqrt{1+f'^2}\,dx$ | $L=\int_a^b\sqrt{1+f'^2}\,dx$ |
| Surplus consumatore | $[D(q)-p^*]\,dq$ | $\text{CS}=\int_0^{q^*}[D-p^*]\,dq$ |
| Surplus produttore | $[p^*-S(q)]\,dq$ | $\text{PS}=\int_0^{q^*}[p^*-S]\,dq$ |
| Valore attuale (flusso) | $f(t)e^{-rt}\,dt$ | $\text{PV}=\int_0^T f(t)e^{-rt}\,dt$ |

## 6. Esercizi

Le soluzioni sono complete e nascoste: prova prima da solo, poi apri per confrontare il procedimento (non solo il risultato).

<details>
<summary>Esercizio 1 (area, introduttivo) — Trovare l'area tra $y=x^2$ e $y=x+2$.</summary>

Intersezioni: $x^2=x+2\Rightarrow x^2-x-2=0\Rightarrow(x-2)(x+1)=0\Rightarrow x=-1,2$. In $x=0$: la retta vale $2>0$, quindi $x+2\ge x^2$ su $[-1,2]$.
$$A=\int_{-1}^{2}\big[(x+2)-x^2\big]\,dx=\Big[\tfrac{x^2}{2}+2x-\tfrac{x^3}{3}\Big]_{-1}^{2}=\tfrac{10}{3}-\big(-\tfrac{7}{6}\big)=\frac{9}{2}.$$
</details>

<details>
<summary>Esercizio 2 (area con incrocio, standard) — Area tra $y=x^3$ e $y=x$ su $[-1,1]$.</summary>

Le curve si incrociano in $x=-1,0,1$ (da $x^3=x\Rightarrow x(x^2-1)=0$). Su $[-1,0]$ è $x^3\ge x$ (in $x=-\tfrac12$: $-\tfrac18>-\tfrac12$); su $[0,1]$ è $x\ge x^3$. Per simmetria i due tratti danno lo stesso contributo:
$$A=\int_{-1}^{0}(x^3-x)\,dx+\int_0^1(x-x^3)\,dx=\tfrac14+\tfrac14=\frac12.$$
Usare $\int_{-1}^1(x-x^3)\,dx=0$ sarebbe l'errore tipico: la funzione è dispari e le aree si cancellano.
</details>

<details>
<summary>Esercizio 3 (volume dischi, standard) — La regione sotto $y=\sqrt{x}$ su $[0,4]$ ruota attorno all'asse $x$. Volume?</summary>

Dischi di raggio $\sqrt x$:
$$V=\pi\int_0^4(\sqrt x)^2\,dx=\pi\int_0^4 x\,dx=\pi\Big[\tfrac{x^2}{2}\Big]_0^4=8\pi.$$
</details>

<details>
<summary>Esercizio 4 (volume, dischi in $y$) — La regione tra $y=x^2$ e $y=4$ ruota attorno all'asse $y$. Volume?</summary>

Conviene affettare in $y$: la sezione a quota $y$ è un disco di raggio $x=\sqrt y$, con $y\in[0,4]$.
$$V=\pi\int_0^4(\sqrt y)^2\,dy=\pi\int_0^4 y\,dy=\pi\Big[\tfrac{y^2}{2}\Big]_0^4=8\pi.$$
</details>

<details>
<summary>Esercizio 5 (volume gusci) — La regione sotto $y=x^2$ su $[0,2]$ ruota attorno all'asse $y$. Volume (con i gusci) e verifica.</summary>

Gusci di raggio $x$, altezza $x^2$:
$$V=2\pi\int_0^2 x\cdot x^2\,dx=2\pi\int_0^2 x^3\,dx=2\pi\Big[\tfrac{x^4}{4}\Big]_0^2=8\pi.$$
*Verifica con i dischi in $y$:* la regione ruotata è tra la parabola e la retta $x=2$; in $y$ è un anello con $R=2$, $r=\sqrt y$, $y\in[0,4]$: $V=\pi\int_0^4(4-y)\,dy=\pi[4y-\tfrac{y^2}{2}]_0^4=\pi(16-8)=8\pi$. Coincide.
</details>

<details>
<summary>Esercizio 6 (lunghezza d'arco) — Lunghezza di $f(x)=\ln(\cos x)$ su $[0,\pi/4]$.</summary>

$f'(x)=\dfrac{-\sin x}{\cos x}=-\tan x$, quindi $1+f'^2=1+\tan^2x=\sec^2x$ e $\sqrt{1+f'^2}=\sec x$ (positivo su $[0,\pi/4]$).
$$L=\int_0^{\pi/4}\sec x\,dx=\big[\ln|\sec x+\tan x|\big]_0^{\pi/4}=\ln(\sqrt2+1)-\ln1=\ln(\sqrt2+1).$$
</details>

<details>
<summary>Esercizio 7 (valor medio) — Valor medio di $f(x)=\dfrac{1}{x}$ su $[1,e]$, e punto $c$ della media.</summary>

$$\bar f=\frac{1}{e-1}\int_1^e\frac1x\,dx=\frac{1}{e-1}\big[\ln x\big]_1^e=\frac{1}{e-1}\approx0{,}582.$$
Punto $c$: $\dfrac1c=\dfrac{1}{e-1}\Rightarrow c=e-1\approx1{,}718\in[1,e]$.
</details>

<details>
<summary>Esercizio 8 (economia, surplus) — Domanda $D(q)=50-q^2$, prezzo di equilibrio $p^*=25$. Surplus del consumatore.</summary>

La quantità di equilibrio risolve $D(q^*)=p^*$: $50-q^2=25\Rightarrow q^2=25\Rightarrow q^*=5$.
$$\text{CS}=\int_0^{5}\big[(50-q^2)-25\big]\,dq=\int_0^5(25-q^2)\,dq=\Big[25q-\tfrac{q^3}{3}\Big]_0^5=125-\tfrac{125}{3}=\frac{250}{3}\approx83{,}3.$$
</details>

<details>
<summary>Esercizio 9 (economia, valore attuale) — Flusso costante $f(t)=5000$ euro/anno per $T=8$ anni, $r=0{,}03$ continuo. Valore attuale, e confronto col nominale.</summary>

$$\text{PV}=\int_0^8 5000\,e^{-0{,}03t}\,dt=5000\cdot\frac{1-e^{-0{,}24}}{0{,}03}=\frac{5000}{0{,}03}(1-e^{-0{,}24}).$$
Con $e^{-0{,}24}\approx0{,}7866$: $\text{PV}\approx166667\cdot0{,}2134\approx35563$ euro. Il flusso nominale è $5000\cdot8=40000$ euro: lo sconto ne toglie circa $4400$.
</details>

<details>
<summary>Esercizio 10 (economia, Gini — avanzato) — La curva di Lorenz di un paese è $L(x)=x^2$. Calcolare il coefficiente di Gini.</summary>

$$G=2\int_0^1\big[x-L(x)\big]\,dx=2\int_0^1(x-x^2)\,dx=2\Big[\tfrac{x^2}{2}-\tfrac{x^3}{3}\Big]_0^1=2\cdot\tfrac16=\frac13.$$
Un Gini di $\tfrac13\approx0{,}33$: disuguaglianza moderata. Con $L(x)=x$ (uguaglianza perfetta) si otterrebbe $G=0$; con Lorenz molto incurvata verso il basso, $G\to1$. *Nota:* la curva di Lorenz deve sempre stare sotto la diagonale e passare per $(0,0)$ e $(1,1)$, come fa $x^2$.
</details>
