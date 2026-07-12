---
id: analisi-13-tecniche-integrazione
titolo: "Tecniche di integrazione"
materia: analisi
argomento: "Calcolo integrale (una variabile)"
modulo: "Tecniche di integrazione"
livello: universitario
slug: analisi-13-tecniche-integrazione

# legacy
subject: analisi
topic_it: Calcolo integrale (una variabile)
topic_en: Integral calculus (one variable)
title_it: "Tecniche di integrazione"
title_en: "Integration techniques"
level: blue
order: 13
source_book: "OpenStax, Calculus Vol. 1; A. Villanacci, Notes for Mathematics 1"
source_chapter: "OpenStax Cap. 5.5–5.7; regola del prodotto/catena (lez.07)"

prerequisiti:
  - analisi-07-regole-derivazione
  - analisi-11-integrale-indefinito
  - analisi-12-integrale-definito

collegamenti:
  - analisi-11-integrale-indefinito
  - analisi-12-integrale-definito
  - analisi-14-applicazioni-integrale
  - analisi-15-integrali-impropri

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 5.5 (sostituzione, indefinita e definita con cambio degli estremi), 5.6–5.7 (integrali di esponenziali e logaritmi)"
    note: "struttura e ordine; sostituzione come catena letta all'indietro. NB: integrazione per parti, frazioni parziali e sostituzione trigonometrica sono trattate in OpenStax Vol.2 (non in catalogo): qui sono ricostruite con derivazione propria dalla regola del prodotto (lez.07) e dall'algebra, con rigore garantito dalle dimostrazioni (gap di copertura, opzione A del curriculum)"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 8 — regola del prodotto e della catena (base delle formule di questa lezione); convenzioni notazionali d'esame"
    note: "priorità su notazione (u, dv, du; estremi trasformati); per parti e sostituzione come inverse delle regole di derivazione"

versione: "3.0"
data_ultima_rielaborazione: "2026-07-12"
stato: completa

componenti_usati:
  - checkpoint

sezioni_omesse: []
---

## 1. Motivazione e intuizione

Il [Teorema Fondamentale del Calcolo](/analisi/calcolo-integrale-una-variabile/12-integrale-definito) (lez.12) ha ridotto il calcolo di un integrale definito a un problema apparentemente più semplice: *trovare una primitiva*. Ma «più semplice» è ingannevole. La [tavola delle primitive elementari](/analisi/calcolo-integrale-una-variabile/11-integrale-indefinito) (lez.11) copre solo le funzioni che si riconoscono a colpo d'occhio come «derivate note lette all'indietro». Basta poco per uscirne: $\int x e^x\,dx$, $\int \frac{1}{x^2-1}\,dx$, $\int \sqrt{4-x^2}\,dx$ non compaiono in nessuna tabella, eppure hanno primitive elementari. Il problema non è che la primitiva non esista: è che è *nascosta*, e va fatta emergere trasformando l'integranda.

Questa lezione è la **cassetta degli attrezzi** per farla emergere. Ci sono quattro strumenti, e conviene vederli in due famiglie, perché la loro natura è diversa.

I primi due **non sono trucchi nuovi**: sono le due regole di derivazione fondamentali, lette al contrario. La [regola della catena](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) $\big(F(g(x))\big)'=f(g(x))\,g'(x)$, invertita, diventa l'**integrazione per sostituzione**: riconoscere dentro l'integranda «una funzione e la sua derivata» e cambiarle nome. La [regola del prodotto](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) $(uv)'=u'v+uv'$, invertita, diventa l'**integrazione per parti**: spostare la derivata da un fattore all'altro. Ogni regola di derivazione lascia in eredità una tecnica di integrazione; queste due sono le eredi delle regole più usate.

Gli altri due strumenti sono invece **riscritture algebriche mirate** a una classe precisa di integrande. Le **frazioni parziali** smontano una funzione razionale $\frac{p(x)}{q(x)}$ — un rapporto di polinomi — in una somma di mattoncini elementari, ciascuno integrabile con logaritmo o arcotangente; è l'analogo di scomporre $\frac{5}{6}=\frac12+\frac13$. La **sostituzione trigonometrica** aggredisce i radicali del tipo $\sqrt{a^2-x^2}$, $\sqrt{a^2+x^2}$, $\sqrt{x^2-a^2}$, sfruttando l'identità $\sin^2+\cos^2=1$ per far sparire la radice: geometricamente, si legge $x$ come un lato di un triangolo rettangolo.

Il filo comune è sempre lo stesso: **non si inventano primitive nuove, si trasforma l'integranda finché non ricade nella tavola di lez.11.** Per questo l'obiettivo non è memorizzare ricette, ma capire *da dove viene* ogni metodo e *quando* è quello giusto — così la scelta della tecnica diventa una lettura della forma dell'integranda, non un tentativo alla cieca.

## 2. Teoria

### 2.1 Integrazione per sostituzione (cambio di variabile)

La regola della catena dice che derivando una funzione composta $F(g(x))$ compare un fattore $g'(x)$:
$$\frac{d}{dx}F(g(x))=F'(g(x))\,g'(x)=f(g(x))\,g'(x)\qquad(\text{dove }F'=f).$$
Leggendola come antiderivazione, si ottiene la tecnica.

**Formula (sostituzione, forma indefinita).** Se $F$ è una primitiva di $f$ e $g$ è derivabile, allora
$$\int f\big(g(x)\big)\,g'(x)\,dx = F\big(g(x)\big)+C = \left[\int f(u)\,du\right]_{u=g(x)}.$$
La giustificazione completa è in §3.1.

L'uso pratico è meccanico e mnemonico: si pone $u=g(x)$, si scrive $du=g'(x)\,dx$, si sostituisce fino a **eliminare ogni traccia di $x$**, si integra in $u$, si torna a $x$. Il punto delicato è il riconoscimento: la sostituzione funziona quando nell'integranda compaiono *sia* una funzione composta $f(g(x))$ *sia* (a meno di costanti) la derivata $g'(x)$ del suo argomento interno.

*Micro-esempio.* $\displaystyle\int 2x\,e^{x^2}\,dx$. Qui l'argomento interno è $g(x)=x^2$, e la sua derivata $g'(x)=2x$ è proprio l'altro fattore. Con $u=x^2$, $du=2x\,dx$:
$$\int e^{x^2}\,(2x\,dx)=\int e^u\,du=e^u+C=e^{x^2}+C.$$
*Verifica:* $\big(e^{x^2}\big)'=e^{x^2}\cdot2x$. Corretto.

Spesso la derivata interna compare *a meno di una costante*: la si aggiusta con la linearità.

*Micro-esempio.* $\displaystyle\int \frac{x}{1+x^2}\,dx$. Con $u=1+x^2$ si ha $du=2x\,dx$, cioè $x\,dx=\tfrac12\,du$:
$$\int \frac{x\,dx}{1+x^2}=\int\frac{\tfrac12\,du}{u}=\frac12\ln|u|+C=\frac12\ln(1+x^2)+C.$$
(Il valore assoluto si può togliere perché $1+x^2>0$ sempre.)

### 2.2 Sostituzione nell'integrale definito: gli estremi cambiano

In un integrale *definito* la sostituzione è ancora più comoda, perché evita di tornare alla variabile originale — a patto di **trasformare anche gli estremi**.

**Formula (sostituzione, forma definita).** Se $g$ è derivabile con $g'$ continua su $[a,b]$ e $f$ è continua sull'immagine di $g$, allora
$$\int_a^b f\big(g(x)\big)\,g'(x)\,dx=\int_{g(a)}^{g(b)} f(u)\,du.$$
Cioè: quando $x$ va da $a$ a $b$, la nuova variabile $u=g(x)$ va da $g(a)$ a $g(b)$. Gli estremi seguono la sostituzione. La ragione è trasparente nella dimostrazione (§3.1): entrambi i membri valgono $F(g(b))-F(g(a))$.

*Micro-esempio.* $\displaystyle\int_0^{\sqrt\pi} 2x\sin(x^2)\,dx$. Con $u=x^2$, $du=2x\,dx$; estremi: $x=0\Rightarrow u=0$, $x=\sqrt\pi\Rightarrow u=\pi$. Dunque
$$\int_0^{\sqrt\pi}\sin(x^2)\,(2x\,dx)=\int_0^{\pi}\sin u\,du=\big[-\cos u\big]_0^\pi=-(-1)-(-1)=2.$$
Non è servito riscrivere la primitiva in $x$: i nuovi estremi $0,\pi$ hanno già incorporato la sostituzione.

```checkpoint
[domanda]
Nell'integrale definito $\int_a^b f(g(x))\,g'(x)\,dx$ con la sostituzione $u=g(x)$, perché posso cambiare gli estremi in $g(a)$ e $g(b)$ invece di tornare alla variabile $x$ alla fine? Cosa succede se cambio variabile ma **dimentico** di cambiare gli estremi?

[risposta]
Perché l'integrale definito è un *numero* che, per il TFC, vale $F(g(b))-F(g(a))$: se calcolo la primitiva $\int f(u)\,du=F(u)$ nella variabile $u$, devo valutarla tra i valori che $u$ *effettivamente assume*, cioè $g(a)$ e $g(b)$ — non tra $a$ e $b$, che sono valori di $x$. Cambiare gli estremi è semplicemente tenere il conto di «da dove a dove viaggia $u$». Se lascio gli estremi $a,b$ ma la primitiva in $u$, valuto $F(u)$ nei punti sbagliati e ottengo un numero errato. Due strade corrette: **(1)** cambiare gli estremi e restare in $u$; **(2)** tornare a $x$ con $u=g(x)$ e usare gli estremi originali $a,b$. Mai mescolarle.
```

### 2.3 Integrazione per parti

La regola del prodotto, $\big(u(x)v(x)\big)'=u'(x)v(x)+u(x)v'(x)$, dice che la derivata di un prodotto ha *due* pezzi. Integrando entrambi i membri e isolando un pezzo si ottiene la tecnica (dimostrazione in §3.2).

**Formula (integrazione per parti).** Se $u,v$ sono derivabili con derivate continue, allora
$$\int u(x)\,v'(x)\,dx=u(x)\,v(x)-\int u'(x)\,v(x)\,dx,$$
o, in notazione differenziale (con $dv=v'\,dx$, $du=u'\,dx$),
$$\int u\,dv=uv-\int v\,du.$$

Lettura: per integrare un prodotto in cui *non* si riconosce «funzione e sua derivata» (quindi la sostituzione non aiuta), si **sposta la derivata** da un fattore all'altro. Si sceglie un pezzo da chiamare $u$ (che verrà *derivato*) e un pezzo da chiamare $dv$ (che verrà *integrato*); la scommessa è che il nuovo integrale $\int v\,du$ sia più facile del primo.

Il metodo funziona solo se la scelta di $u$ e $dv$ è azzeccata. L'euristica classica è l'acronimo **LIATE**, che ordina i tipi di funzione secondo la preferenza per il ruolo di $u$ (cioè: quale conviene *derivare*):

> **L**ogaritmiche → **I**nverse trig. (arcsin, arctan…) → **A**lgebriche (polinomi) → **T**rigonometriche → **E**sponenziali.

Si sceglie come $u$ la funzione che viene *prima* nella lista (derivandola, tende a semplificarsi o a sparire), e come $dv$ il resto. È un'euristica, non un dogma: serve a evitare tentativi ciechi, ma la vera guida è «il nuovo integrale è più facile?».

*Micro-esempio.* $\displaystyle\int x\,e^x\,dx$. Tra $x$ (algebrica) ed $e^x$ (esponenziale), LIATE mette prima l'algebrica: $u=x$, $dv=e^x\,dx$. Allora $du=dx$, $v=e^x$:
$$\int x\,e^x\,dx=x\,e^x-\int e^x\,dx=x\,e^x-e^x+C=(x-1)e^x+C.$$
Derivando $x$ è sparita (diventa $1$) e l'integrale residuo $\int e^x\,dx$ si risolve subito, perché $\int e^x\,dx=e^x+C$: è esattamente l'effetto voluto. Se avessimo scelto $u=e^x$, $dv=x\,dx$, il nuovo integrale $\int \tfrac{x^2}{2}e^x\,dx$ sarebbe stato *peggiore* (il polinomio cresce di grado): la scelta conta.

Un caso che sembra fuori portata ma è un'applicazione perfetta:

*Micro-esempio.* $\displaystyle\int \ln x\,dx$. Non è un prodotto «visibile», ma lo si legge come $\ln x\cdot 1$: $u=\ln x$ (logaritmica, prima in LIATE), $dv=1\,dx$. Allora $du=\tfrac1x\,dx$, $v=x$:
$$\int \ln x\,dx=x\ln x-\int x\cdot\frac1x\,dx=x\ln x-\int 1\,dx=x\ln x-x+C.$$
Per parti trasforma un logaritmo (che non è nella tavola) in un integrale banale.

```checkpoint
[domanda]
Da quale regola di derivazione nasce l'integrazione per parti? E questo spiega perché nella formula compare un termine «già integrato» $uv$ *fuori* dal segno di integrale?

[risposta]
Nasce dalla **regola del prodotto** $(uv)'=u'v+uv'$. Integrando entrambi i membri su un intervallo si ha $uv=\int u'v\,dx+\int uv'\,dx$ (perché $\int(uv)'\,dx=uv$, per definizione di primitiva). Isolando l'integrale che interessa: $\int uv'\,dx=uv-\int u'v\,dx$. Il termine $uv$ *fuori* dall'integrale è proprio quel «$\int(uv)'=uv$»: è la parte di prodotto che si è già riusciti a integrare esattamente (la primitiva del prodotto derivato). Per parti, in sostanza, «restituisce» subito il pezzo $uv$ e lascia da fare solo l'altro pezzo, $\int u'v$.
```

### 2.4 Per parti ricorsiva e il trucco del «ritorno»

A volte per parti va applicata **più volte** (tipicamente con $x^n$ davanti a $e^x$, $\sin x$, $\cos x$: ogni passo abbassa il grado del polinomio di uno, fino a esaurirlo). Altre volte accade qualcosa di più sorprendente: dopo due applicazioni **ricompare l'integrale di partenza**, e lo si risolve algebricamente come se fosse un'incognita.

*Micro-esempio (il ritorno).* $\displaystyle I=\int e^x\cos x\,dx$. Per parti con $u=\cos x$, $dv=e^x dx$ ($du=-\sin x\,dx$, $v=e^x$):
$$I=e^x\cos x+\int e^x\sin x\,dx.$$
Il nuovo integrale non è più facile, ma applichiamo di nuovo per parti con $u=\sin x$, $dv=e^x dx$:
$$\int e^x\sin x\,dx=e^x\sin x-\int e^x\cos x\,dx=e^x\sin x-I.$$
Sostituendo: $I=e^x\cos x+e^x\sin x-I$. L'integrale di partenza è ricomparso; portandolo a sinistra, $2I=e^x(\cos x+\sin x)$, quindi
$$I=\frac{e^x(\cos x+\sin x)}{2}+C.$$
Il «ritorno» dell'integrale, che sembrava un fallimento, è invece la chiave: diventa un'equazione in $I$.

### 2.5 Frazioni parziali: smontare una funzione razionale

Passiamo alla prima delle due tecniche *algebriche*. Una **funzione razionale** è un rapporto $\dfrac{p(x)}{q(x)}$ di polinomi. L'idea è decomporla in una somma di frazioni elementari, ciascuna delle quali sappiamo integrare. La procedura ha quattro passi.

**Passo 1 — grado del numeratore.** Se $\deg p\ge\deg q$, si esegue la **divisione euclidea** tra polinomi:
$$\frac{p(x)}{q(x)}=s(x)+\frac{r(x)}{q(x)},\qquad \deg r<\deg q,$$
dove $s$ è il quoziente (un polinomio, che si integra subito) e $r$ il resto. La decomposizione si applica solo alla parte *propria* $\frac{r}{q}$, in cui il numeratore ha grado minore del denominatore.

**Passo 2 — fattorizzazione del denominatore.** Si scompone $q(x)$ in fattori **lineari** $(x-a)$ e **quadratici irriducibili** $(x^2+bx+c)$ (con discriminante $<0$, quindi senza radici reali). Un teorema di algebra garantisce che ogni polinomio a coefficienti reali si fattorizza così.

**Passo 3 — forma della decomposizione.** A ogni fattore del denominatore corrisponde un blocco di frazioni, secondo lo schema:

| Fattore in $q(x)$ | Termini nella decomposizione |
| --- | --- |
| $(x-a)$ semplice | $\dfrac{A}{x-a}$ |
| $(x-a)^k$ ripetuto | $\dfrac{A_1}{x-a}+\dfrac{A_2}{(x-a)^2}+\cdots+\dfrac{A_k}{(x-a)^k}$ |
| $(x^2+bx+c)$ irriducibile | $\dfrac{Ax+B}{x^2+bx+c}$ |
| $(x^2+bx+c)^k$ ripetuto | $\dfrac{A_1x+B_1}{x^2+bx+c}+\cdots+\dfrac{A_kx+B_k}{(x^2+bx+c)^k}$ |

Due regole da non violare: un fattore ripetuto di ordine $k$ richiede **esattamente $k$ termini** (uno per ogni potenza da $1$ a $k$); e sopra un fattore quadratico irriducibile il numeratore è **lineare** ($Ax+B$), non costante — perché deve poter «coprire» un numeratore di grado fino a $1$.

**Passo 4 — determinazione dei coefficienti.** Si moltiplicano entrambi i membri per $q(x)$, ottenendo un'identità tra polinomi, e si ricavano i coefficienti o sostituendo **valori strategici** di $x$ (le radici del denominatore azzerano quasi tutti i termini) o **confrontando i coefficienti** delle potenze di $x$.

*Micro-esempio.* $\displaystyle\int\frac{dx}{x^2-1}$. Il denominatore è $(x-1)(x+1)$, due fattori lineari semplici, quindi $\dfrac{1}{(x-1)(x+1)}=\dfrac{A}{x-1}+\dfrac{B}{x+1}$. Moltiplicando: $1=A(x+1)+B(x-1)$. Con $x=1$: $1=2A\Rightarrow A=\tfrac12$; con $x=-1$: $1=-2B\Rightarrow B=-\tfrac12$. Perciò
$$\int\frac{dx}{x^2-1}=\frac12\ln|x-1|-\frac12\ln|x+1|+C=\frac12\ln\left|\frac{x-1}{x+1}\right|+C.$$

### 2.6 Integrare i mattoni della decomposizione

La decomposizione ha senso perché ogni singolo mattoncino si integra con la tavola di lez.11, eventualmente dopo un piccolo aggiustamento. Ecco il repertorio completo:

$$\int\frac{A}{x-a}\,dx=A\ln|x-a|+C;$$
$$\int\frac{A}{(x-a)^k}\,dx=\frac{A}{(1-k)(x-a)^{k-1}}+C\quad(k\ge2)\ \ (\text{regola della potenza con }n=-k);$$
$$\int\frac{dx}{x^2+a^2}=\frac1a\arctan\frac{x}{a}+C;\qquad \int\frac{x\,dx}{x^2+a^2}=\frac12\ln(x^2+a^2)+C.$$

Per un numeratore lineare $\dfrac{Ax+B}{x^2+bx+c}$ su un quadratico irriducibile si procede sempre così: si **completa il quadrato** al denominatore, $x^2+bx+c=(x+\tfrac b2)^2+k^2$ con $k^2=c-\tfrac{b^2}{4}>0$ (positivo perché irriducibile), e si spezza il numeratore in due parti — una proporzionale alla derivata del denominatore (che dà un logaritmo per sostituzione) e una costante (che dà un'arcotangente). Il procedimento completo, con tutti i conti, è nel dettaglio tecnico dell'Esempio 6.

*Micro-esempio.* $\displaystyle\int\frac{dx}{x^2+4}=\frac12\arctan\frac x2+C$ (formula con $a=2$). Se invece il denominatore fosse $x^2+4x+8=(x+2)^2+4$, basterebbe la sostituzione $u=x+2$ per ricondursi allo stesso caso: $\int\frac{du}{u^2+4}=\frac12\arctan\frac{x+2}{2}+C$.

### 2.7 Sostituzione trigonometrica: cancellare i radicali

L'ultima tecnica attacca gli integrali con radici quadrate di espressioni quadratiche: $\sqrt{a^2-x^2}$, $\sqrt{a^2+x^2}$, $\sqrt{x^2-a^2}$ (con $a>0$). Nessuna sostituzione algebrica le semplifica; ma le identità pitagoriche $1-\sin^2=\cos^2$ e $1+\tan^2=\frac{1}{\cos^2}$ trasformano la somma/differenza di quadrati in un quadrato perfetto, facendo sparire la radice. L'idea geometrica: leggere $x$ come un lato di un triangolo rettangolo di ipotenusa o cateto $a$, e chiamare $\theta$ l'angolo.

| Radicale | Sostituzione | Dominio di $\theta$ | Effetto (radice → ) |
| --- | --- | --- | --- |
| $\sqrt{a^2-x^2}$ | $x=a\sin\theta$ | $\theta\in[-\tfrac\pi2,\tfrac\pi2]$ | $a\cos\theta$ |
| $\sqrt{a^2+x^2}$ | $x=a\tan\theta$ | $\theta\in(-\tfrac\pi2,\tfrac\pi2)$ | $\dfrac{a}{\cos\theta}$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec\theta=\dfrac{a}{\cos\theta}$ | $\theta\in[0,\tfrac\pi2)$ (per $x\ge a$) | $a\tan\theta$ |

La **restrizione del dominio di $\theta$** non è un dettaglio: serve a garantire che il coseno (o la tangente) sia $\ge0$, così che $\sqrt{\cdot}=$ (quantità positiva) senza valore assoluto. Ad esempio con $x=a\sin\theta$ e $\theta\in[-\tfrac\pi2,\tfrac\pi2]$ si ha $\cos\theta\ge0$, quindi $\sqrt{a^2-a^2\sin^2\theta}=a\sqrt{\cos^2\theta}=a|\cos\theta|=a\cos\theta$. Fatto l'integrale in $\theta$, si **torna a $x$** usando il triangolo rettangolo (o le relazioni inverse).

*Micro-esempio.* $\displaystyle\int\frac{dx}{\sqrt{a^2-x^2}}$. Con $x=a\sin\theta$, $dx=a\cos\theta\,d\theta$ e $\sqrt{a^2-x^2}=a\cos\theta$:
$$\int\frac{a\cos\theta\,d\theta}{a\cos\theta}=\int d\theta=\theta+C=\arcsin\frac xa+C.$$
Ritroviamo la formula della tavola di lez.11 — ma ora sappiamo *da dove viene*.

```checkpoint
[domanda]
Nella sostituzione $x=a\sin\theta$ per trattare $\sqrt{a^2-x^2}$, perché si impone $\theta\in[-\tfrac\pi2,\tfrac\pi2]$? Cosa andrebbe storto senza questa restrizione?

[risposta]
Perché su $[-\tfrac\pi2,\tfrac\pi2]$ il coseno è $\ge0$, e questo permette di scrivere $\sqrt{a^2-x^2}=\sqrt{a^2\cos^2\theta}=a|\cos\theta|=a\cos\theta$ **senza valore assoluto**. Senza la restrizione, $\theta$ potrebbe cadere dove $\cos\theta<0$: allora $\sqrt{a^2\cos^2\theta}=a|\cos\theta|=-a\cos\theta$, con un segno opposto, e i conti successivi risulterebbero sbagliati. In più, restringere a $[-\tfrac\pi2,\tfrac\pi2]$ rende $\sin$ *invertibile*, così alla fine si può tornare a $x$ con $\theta=\arcsin\frac xa$ in modo univoco. La restrizione garantisce sia il segno corretto della radice sia l'invertibilità.
```

## 3. Dimostrazioni

### 3.1 La formula di sostituzione

**Enunciato (§2.1–2.2).** *Sia $F$ una primitiva di $f$ e $g$ derivabile. Allora $\int f(g(x))g'(x)\,dx=F(g(x))+C$; e se $g'$ è continua su $[a,b]$ e $f$ è continua sull'immagine di $g$, allora $\int_a^b f(g(x))g'(x)\,dx=\int_{g(a)}^{g(b)}f(u)\,du$.*

**Dimostrazione (caso indefinito).** Deriviamo la funzione candidata $F(g(x))$ usando la [regola della catena](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07):
$$\frac{d}{dx}F\big(g(x)\big)=F'\big(g(x)\big)\cdot g'(x)=f\big(g(x)\big)\,g'(x),$$
dove nell'ultimo passaggio si è usato $F'=f$ (definizione di primitiva). Dunque $F(g(x))$ è una primitiva di $f(g(x))g'(x)$, il che è esattamente l'affermazione $\int f(g(x))g'(x)\,dx=F(g(x))+C$. $\quad\blacksquare$

**Dimostrazione (caso definito).** Per il [Teorema Fondamentale del Calcolo, parte 2](/analisi/calcolo-integrale-una-variabile/12-integrale-definito) (lez.12), applicato al membro sinistro con la primitiva $F(g(x))$ appena trovata:
$$\int_a^b f\big(g(x)\big)g'(x)\,dx=\Big[F\big(g(x)\big)\Big]_a^b=F\big(g(b)\big)-F\big(g(a)\big).$$
D'altra parte, sempre per il TFC-2 applicato a $\int_{g(a)}^{g(b)}f(u)\,du$ con la primitiva $F$ di $f$:
$$\int_{g(a)}^{g(b)}f(u)\,du=\Big[F(u)\Big]_{g(a)}^{g(b)}=F\big(g(b)\big)-F\big(g(a)\big).$$
I due membri valgono lo stesso numero $F(g(b))-F(g(a))$, quindi sono uguali. $\quad\blacksquare$

Questa dimostrazione mostra *perché* gli estremi diventano $g(a)$ e $g(b)$: sono i valori tra cui varia $u=g(x)$, ed è lì che va valutata la primitiva $F(u)$.

### 3.2 La formula di integrazione per parti

**Enunciato (§2.3).** *Se $u,v$ hanno derivate continue, $\int u\,v'\,dx=uv-\int u'\,v\,dx$.*

**Dimostrazione.** Partiamo dalla [regola del prodotto](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07), valida perché $u,v$ sono derivabili:
$$\big(u(x)v(x)\big)'=u'(x)v(x)+u(x)v'(x).$$
Integriamo entrambi i membri rispetto a $x$ (le derivate $u',v'$ sono continue, quindi tutti gli integrali esistono). A sinistra, l'integrale di una derivata restituisce la funzione stessa (definizione di primitiva): $\int\big(uv\big)'\,dx=u(x)v(x)$. A destra, per la linearità dell'integrale (lez.11):
$$u(x)v(x)=\int u'(x)v(x)\,dx+\int u(x)v'(x)\,dx.$$
Isolando l'ultimo integrale, cioè portando l'altro a sinistra:
$$\int u(x)v'(x)\,dx=u(x)v(x)-\int u'(x)v(x)\,dx. \qquad\blacksquare$$

*Versione definita.* Applicando il TFC-2 al termine $uv$ (che è già una primitiva esatta), la stessa identità su $[a,b]$ diventa
$$\int_a^b u\,v'\,dx=\Big[u(x)v(x)\Big]_a^b-\int_a^b u'\,v\,dx.$$
Il termine di bordo $\big[uv\big]_a^b$ va valutato agli estremi: dimenticarlo è l'errore più comune nella versione definita.

## 4. Esempi

**Esempio 1 (introduttivo — sostituzione «funzione e sua derivata»).** Calcolare $\displaystyle\int (2x+1)\sqrt{x^2+x+3}\,dx$.

*Strategia:* dentro la radice c'è $g(x)=x^2+x+3$, e il fattore esterno $2x+1$ è esattamente $g'(x)$: è lo schema della sostituzione.

Con $u=x^2+x+3$, $du=(2x+1)\,dx$:
$$\int\sqrt{u}\,du=\int u^{1/2}\,du=\frac{u^{3/2}}{3/2}+C=\frac23\,(x^2+x+3)^{3/2}+C.$$
*Verifica:* derivando, $\tfrac23\cdot\tfrac32(x^2+x+3)^{1/2}(2x+1)=(2x+1)\sqrt{x^2+x+3}$. Corretto.

---

**Esempio 2 (introduttivo — sostituzione definita con cambio degli estremi).** Calcolare $\displaystyle\int_0^{\pi/2}\sin x\,\cos^3 x\,dx$.

*Strategia:* $\cos^3 x=\cos^2x\cdot\cos x$; ponendo $u=\cos x$ compare $du=-\sin x\,dx$, cioè l'altro fattore.

Con $u=\cos x$, $du=-\sin x\,dx$; estremi: $x=0\Rightarrow u=\cos0=1$, $x=\tfrac\pi2\Rightarrow u=\cos\tfrac\pi2=0$:
$$\int_0^{\pi/2}\cos^3x\,(\sin x\,dx)=\int_{1}^{0}u^3\,(-du)=\int_0^1 u^3\,du=\Big[\frac{u^4}{4}\Big]_0^1=\frac14.$$
(Il segno $-$ si è riassorbito scambiando gli estremi, per la convenzione $\int_1^0=-\int_0^1$ di lez.12.)

> ⚠️ **Errore da evitare — cambiare variabile ma non gli estremi.** Scrivere $\int_0^{\pi/2}u^3\,du$ (estremi di $x$ lasciati su un integrale in $u$) darebbe $\tfrac14\big[u^4\big]_0^{\pi/2}$, un numero senza senso. Quando si sostituisce in un integrale definito, o si trasformano gli estremi, o si torna a $x$ prima di valutare — mai le due cose mescolate.

---

**Esempio 3 (intermedio — per parti, con e senza prodotto visibile).** Calcolare (a) $\displaystyle\int x\cos x\,dx$; (b) $\displaystyle\int \arctan x\,dx$.

(a) LIATE: $x$ (algebrica) prima di $\cos x$ (trigonometrica), quindi $u=x$, $dv=\cos x\,dx$, da cui $du=dx$, $v=\sin x$:
$$\int x\cos x\,dx=x\sin x-\int\sin x\,dx=x\sin x+\cos x+C.$$

(b) Non c'è prodotto visibile: si legge $\arctan x=\arctan x\cdot 1$, con $u=\arctan x$ (inversa trig., alta in LIATE), $dv=dx$, quindi $du=\tfrac{1}{1+x^2}\,dx$, $v=x$:
$$\int\arctan x\,dx=x\arctan x-\int\frac{x}{1+x^2}\,dx=x\arctan x-\frac12\ln(1+x^2)+C,$$
dove l'ultimo integrale si è fatto per sostituzione ($u=1+x^2$, come in §2.1).

> ⚠️ **Errore da evitare — scegliere $u$ e $dv$ al contrario.** In (a), la scelta opposta $u=\cos x$, $dv=x\,dx$ porta a $\int \tfrac{x^2}{2}(-\sin x)\,dx$, con il polinomio di grado *aumentato*: l'integrale peggiora. La bussola è LIATE, ma il criterio definitivo è «il nuovo integrale è più semplice?». Se no, si è scelto male.

---

**Esempio 4 (avanzato — per parti ricorsiva).** Calcolare $\displaystyle\int x^2 e^x\,dx$.

*Strategia:* $u=x^2$ (algebrica) si abbassa di grado a ogni applicazione; servono due passi.

Primo passo, $u=x^2$, $dv=e^x dx$ ($du=2x\,dx$, $v=e^x$):
$$\int x^2 e^x\,dx=x^2e^x-\int 2x\,e^x\,dx=x^2e^x-2\int x e^x\,dx.$$
L'integrale residuo $\int x e^x\,dx=(x-1)e^x+C$ è già stato calcolato in §2.3. Sostituendo:
$$\int x^2 e^x\,dx=x^2e^x-2(x-1)e^x+C=e^x\big(x^2-2x+2\big)+C.$$
*Verifica:* $\big(e^x(x^2-2x+2)\big)'=e^x(x^2-2x+2)+e^x(2x-2)=e^x\,x^2$. Corretto. Ogni applicazione di per parti ha abbassato il grado di $x$ finché è sparito.

---

**Esempio 5 (intermedio — frazioni parziali con divisione preliminare).** Calcolare $\displaystyle\int\frac{x^3}{x^2-1}\,dx$.

*Strategia:* $\deg(\text{num})=3\ge2=\deg(\text{den})$: prima la divisione euclidea (Passo 1), poi frazioni parziali sul resto.

Divisione: $x^3=(x^2-1)\cdot x+x$, quindi $\dfrac{x^3}{x^2-1}=x+\dfrac{x}{x^2-1}$. Sul resto, $\dfrac{x}{(x-1)(x+1)}=\dfrac{A}{x-1}+\dfrac{B}{x+1}$; da $x=A(x+1)+B(x-1)$, con $x=1$: $1=2A\Rightarrow A=\tfrac12$; con $x=-1$: $-1=-2B\Rightarrow B=\tfrac12$. Perciò
$$\int\frac{x^3}{x^2-1}\,dx=\int\Big(x+\frac{1/2}{x-1}+\frac{1/2}{x+1}\Big)dx=\frac{x^2}{2}+\frac12\ln|x-1|+\frac12\ln|x+1|+C=\frac{x^2}{2}+\frac12\ln|x^2-1|+C.$$

> ⚠️ **Errore da evitare — decomporre senza dividere.** Applicare le frazioni parziali direttamente a $\tfrac{x^3}{x^2-1}$ (numeratore di grado $\ge$ denominatore) è scorretto: la decomposizione in $\tfrac{A}{x-1}+\tfrac{B}{x+1}$ produce solo funzioni che tendono a $0$ all'infinito, mentre $\tfrac{x^3}{x^2-1}\to\infty$. Manca il pezzo polinomiale $s(x)=x$: va sempre estratto prima con la divisione.

---

**Esempio 6 (avanzato — fattore quadratico irriducibile, con dettaglio tecnico).** Calcolare $\displaystyle\int\frac{3x+1}{(x-1)(x^2+1)}\,dx$.

*Strategia:* denominatore già fattorizzato in un lineare e un quadratico irriducibile ($x^2+1$ ha $\Delta<0$). Forma: $\dfrac{A}{x-1}+\dfrac{Bx+D}{x^2+1}$ (numeratore **lineare** sul quadratico).

<details class="dim-tecnica">
<summary>Dettaglio tecnico — calcolo dei coefficienti e integrazione dei mattoni</summary>

Moltiplicando per $(x-1)(x^2+1)$ si ottiene l'identità polinomiale
$$3x+1=A(x^2+1)+(Bx+D)(x-1).$$
*Coefficiente $A$ (valore strategico).* Con $x=1$ (radice del fattore lineare), i termini con $(x-1)$ si annullano: $3\cdot1+1=A(1+1)$, cioè $4=2A$, quindi $A=2$.

*Coefficienti $B,D$ (confronto).* Sviluppiamo il membro destro:
$$A(x^2+1)+(Bx+D)(x-1)=Ax^2+A+Bx^2-Bx+Dx-D=(A+B)x^2+(D-B)x+(A-D).$$
Uguagliando ai coefficienti di $3x+1=0\cdot x^2+3x+1$:
- grado $2$: $A+B=0\Rightarrow B=-A=-2$;
- grado $1$: $D-B=3\Rightarrow D=3+B=1$;
- grado $0$: $A-D=1\Rightarrow 2-1=1$ ✓ (conferma di coerenza).

Dunque $\dfrac{3x+1}{(x-1)(x^2+1)}=\dfrac{2}{x-1}+\dfrac{-2x+1}{x^2+1}$. Integriamo i mattoni:
$$\int\frac{2}{x-1}\,dx=2\ln|x-1|;$$
$$\int\frac{-2x+1}{x^2+1}\,dx=\underbrace{-\int\frac{2x}{x^2+1}\,dx}_{u=x^2+1}+\int\frac{1}{x^2+1}\,dx=-\ln(x^2+1)+\arctan x.$$
Il primo pezzo del numeratore lineare, $-2x$, è (a meno del segno) la derivata $2x$ del denominatore, quindi dà un logaritmo per sostituzione; il pezzo costante $+1$ dà l'arcotangente. Sommando:
$$\int\frac{3x+1}{(x-1)(x^2+1)}\,dx=2\ln|x-1|-\ln(x^2+1)+\arctan x+C.$$
</details>

Risultato: $\displaystyle\int\frac{3x+1}{(x-1)(x^2+1)}\,dx=2\ln|x-1|-\ln(x^2+1)+\arctan x+C$.

> ⚠️ **Errore da evitare — numeratore costante sul quadratico.** Scrivere $\dfrac{A}{x-1}+\dfrac{B}{x^2+1}$ (numeratore *costante* sul fattore quadratico) è una forma incompleta: sopra un irriducibile serve $\dfrac{Bx+D}{x^2+1}$. Con un solo parametro $B$ il sistema non avrebbe soluzione per numeratori generici.

---

**Esempio 7 (avanzato — sostituzione trigonometrica $\sqrt{a^2-x^2}$).** Calcolare $\displaystyle\int\sqrt{4-x^2}\,dx$.

*Strategia:* radice del tipo $\sqrt{a^2-x^2}$ con $a=2$: si pone $x=2\sin\theta$, $\theta\in[-\tfrac\pi2,\tfrac\pi2]$.

Allora $dx=2\cos\theta\,d\theta$ e $\sqrt{4-x^2}=\sqrt{4-4\sin^2\theta}=2\cos\theta$ (positivo perché $\cos\theta\ge0$ sul dominio scelto). Quindi
$$\int\sqrt{4-x^2}\,dx=\int 2\cos\theta\cdot2\cos\theta\,d\theta=4\int\cos^2\theta\,d\theta.$$
Con la formula di bisezione $\cos^2\theta=\tfrac{1+\cos2\theta}{2}$:
$$4\int\frac{1+\cos2\theta}{2}\,d\theta=2\Big(\theta+\frac{\sin2\theta}{2}\Big)+C=2\theta+\sin2\theta+C=2\theta+2\sin\theta\cos\theta+C.$$
*Ritorno a $x$:* da $x=2\sin\theta$ si ha $\theta=\arcsin\tfrac x2$, $\sin\theta=\tfrac x2$, $\cos\theta=\tfrac{\sqrt{4-x^2}}{2}$. Sostituendo $2\sin\theta\cos\theta=2\cdot\tfrac x2\cdot\tfrac{\sqrt{4-x^2}}{2}=\tfrac{x\sqrt{4-x^2}}{2}$:
$$\int\sqrt{4-x^2}\,dx=2\arcsin\frac x2+\frac{x\sqrt{4-x^2}}{2}+C.$$
(Interpretazione: per $-2\le x\le2$ è l'area con segno sotto la semicirconferenza di raggio $2$.)

> ⚠️ **Errore da evitare — restare in $\theta$.** Lasciare il risultato come $2\theta+\sin2\theta$ non è una risposta: l'integrale è in $x$, e va riespresso in $x$ tramite le relazioni inverse (o il triangolo rettangolo con cateti $x$, $\sqrt{4-x^2}$ e ipotenusa $2$).

---

**Esempio 8 (avanzato — completare il quadrato prima della sostituzione).** Calcolare $\displaystyle\int\frac{dx}{\sqrt{6x-x^2}}$.

*Strategia:* sotto radice non c'è una forma pulita $a^2-x^2$; la si crea completando il quadrato.

$6x-x^2=-(x^2-6x)=-(x^2-6x+9-9)=9-(x-3)^2$. Con la sostituzione lineare $u=x-3$, $du=dx$:
$$\int\frac{dx}{\sqrt{9-(x-3)^2}}=\int\frac{du}{\sqrt{9-u^2}}=\arcsin\frac u3+C=\arcsin\frac{x-3}{3}+C,$$
dove l'ultimo integrale è quello del micro-esempio di §2.7 con $a=3$. Completare il quadrato riconduce un trinomio generico a uno dei tre casi standard.

## 5. Collegamenti e riepilogo

**Da dove vengono, dove servono.** Le due tecniche principali non sono novità ma *eredità* del calcolo differenziale: la [sostituzione](/analisi/calcolo-integrale-una-variabile/12-integrale-definito) è la [regola della catena](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) (lez.07) letta all'indietro, e le [parti](/analisi/calcolo-differenziale-una-variabile/07-regole-derivazione) sono la regola del prodotto letta all'indietro; entrambe passano per il [TFC-2](/analisi/calcolo-integrale-una-variabile/12-integrale-definito) (lez.12) nella versione definita. Le frazioni parziali e la sostituzione trigonometrica sono invece riscritture algebriche che riconducono classi intere di integrande alla [tavola elementare](/analisi/calcolo-integrale-una-variabile/11-integrale-indefinito) (lez.11). Guardando avanti, queste tecniche sono strumenti di servizio: servono per le [applicazioni](/analisi/calcolo-integrale-una-variabile/14-applicazioni-integrale) (lez.14, aree, volumi, valor medio) e sono indispensabili per gli [integrali impropri](/analisi/calcolo-integrale-una-variabile/15-integrali-impropri) (lez.15), dove prima si calcola la primitiva con questi metodi e poi si passa al limite.

**Applicazioni.** Le frazioni parziali sono il pane dell'**ingegneria dei sistemi**: la scomposizione di una funzione di trasferimento razionale $H(s)=\frac{N(s)}{D(s)}$ (nel dominio di Laplace) trasforma la risposta di un circuito o di un sistema di controllo in una somma di esponenziali, una per ogni polo. La sostituzione trigonometrica ricorre in **meccanica** e **geometria** ogni volta che compaiono lunghezze d'arco, aree di settori ellittici o integrali con radicali quadratici. In **statistica**, l'integrale della densità di Cauchy $\frac{1}{\pi(1+x^2)}$ è un'arcotangente, e le frazioni parziali compaiono nel calcolo di distribuzioni di rapporti e somme di variabili. In **economia**, il valore attuale di flussi e molti calcoli di surplus richiedono primitive che solo queste tecniche rendono accessibili.

**Riepilogo — quale tecnica, quando.**

- **Sostituzione:** l'integranda contiene una funzione composta $f(g(x))$ e (a meno di costanti) la derivata $g'(x)$. Si pone $u=g(x)$; nel *definito* si cambiano gli estremi in $g(a),g(b)$.
- **Per parti:** prodotto di due fattori di natura diversa, senza «funzione+sua derivata». $\int u\,dv=uv-\int v\,du$; scelta di $u$ con euristica **LIATE**; occhio ai casi ricorsivi e al «ritorno» dell'integrale.
- **Frazioni parziali:** integranda razionale $\frac{p}{q}$. Se $\deg p\ge\deg q$ prima si divide; poi si fattorizza $q$ e si decompone (fattore ripetuto ⇒ $k$ termini; quadratico irriducibile ⇒ numeratore $Ax+B$).
- **Sostituzione trigonometrica:** radicali $\sqrt{a^2-x^2}\ (x=a\sin\theta)$, $\sqrt{a^2+x^2}\ (x=a\tan\theta)$, $\sqrt{x^2-a^2}\ (x=a\sec\theta)$; restringere $\theta$ per fissare il segno della radice; completare il quadrato se il trinomio non è standard; tornare a $x$ alla fine.

$$\boxed{\ \int u\,dv=uv-\int v\,du,\qquad \int_a^b f(g(x))g'(x)\,dx=\int_{g(a)}^{g(b)}f(u)\,du\ }$$

## 6. Esercizi

**Esercizio 1 (introduttivo — sostituzione).** Calcolare (a) $\displaystyle\int \frac{\ln x}{x}\,dx$; \quad (b) $\displaystyle\int \frac{e^x}{1+e^x}\,dx$.

<details>
<summary>Soluzione</summary>

(a) $u=\ln x$, $du=\tfrac1x\,dx$: $\displaystyle\int u\,du=\tfrac{u^2}{2}+C=\tfrac{(\ln x)^2}{2}+C$.

(b) $u=1+e^x$, $du=e^x\,dx$: $\displaystyle\int\frac{du}{u}=\ln|u|+C=\ln(1+e^x)+C$ (il modulo si toglie perché $1+e^x>0$).
</details>

---

**Esercizio 2 (introduttivo — sostituzione definita).** Calcolare $\displaystyle\int_0^2 x\,e^{-x^2}\,dx$.

<details>
<summary>Soluzione</summary>

$u=-x^2$, $du=-2x\,dx$, cioè $x\,dx=-\tfrac12\,du$; estremi: $x=0\Rightarrow u=0$, $x=2\Rightarrow u=-4$.
$$\int_0^2 e^{-x^2}(x\,dx)=\int_0^{-4}e^u\Big(-\frac12\,du\Big)=\frac12\int_{-4}^{0}e^u\,du=\frac12\big[e^u\big]_{-4}^0=\frac12(1-e^{-4}).$$
</details>

---

**Esercizio 3 (intermedio — per parti).** Calcolare (a) $\displaystyle\int x\ln x\,dx$; \quad (b) $\displaystyle\int_0^{1} \arcsin x\,dx$.

<details>
<summary>Soluzione</summary>

(a) $u=\ln x$ (logaritmica, prima in LIATE), $dv=x\,dx$: $du=\tfrac1x dx$, $v=\tfrac{x^2}{2}$.
$$\int x\ln x\,dx=\frac{x^2}{2}\ln x-\int\frac{x^2}{2}\cdot\frac1x\,dx=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C.$$

(b) $u=\arcsin x$, $dv=dx$: $du=\tfrac{1}{\sqrt{1-x^2}}dx$, $v=x$.
$$\int_0^1\arcsin x\,dx=\Big[x\arcsin x\Big]_0^1-\int_0^1\frac{x}{\sqrt{1-x^2}}\,dx=1\cdot\frac\pi2-\Big[-\sqrt{1-x^2}\Big]_0^1=\frac\pi2-(0-(-1))=\frac\pi2-1.$$
(L'integrale residuo si fa con $w=1-x^2$, $dw=-2x\,dx$.)
</details>

---

**Esercizio 4 (avanzato — per parti con «ritorno»).** Calcolare $\displaystyle\int e^{x}\sin x\,dx$.

<details>
<summary>Soluzione</summary>

Sia $I=\int e^x\sin x\,dx$. Per parti, $u=\sin x$, $dv=e^x dx$: $I=e^x\sin x-\int e^x\cos x\,dx$. Di nuovo per parti sul residuo, $u=\cos x$, $dv=e^x dx$: $\int e^x\cos x\,dx=e^x\cos x+\int e^x\sin x\,dx=e^x\cos x+I$. Sostituendo:
$$I=e^x\sin x-\big(e^x\cos x+I\big)=e^x(\sin x-\cos x)-I\ \Rightarrow\ 2I=e^x(\sin x-\cos x).$$
$$\int e^x\sin x\,dx=\frac{e^x(\sin x-\cos x)}{2}+C.$$
</details>

---

**Esercizio 5 (intermedio — frazioni parziali, fattori lineari).** Calcolare $\displaystyle\int\frac{3x-1}{(x+2)(x-1)}\,dx$.

<details>
<summary>Soluzione</summary>

$\dfrac{3x-1}{(x+2)(x-1)}=\dfrac{A}{x+2}+\dfrac{B}{x-1}$, cioè $3x-1=A(x-1)+B(x+2)$. Con $x=1$: $2=3B\Rightarrow B=\tfrac23$; con $x=-2$: $-7=-3A\Rightarrow A=\tfrac73$.
$$\int\frac{3x-1}{(x+2)(x-1)}\,dx=\frac73\ln|x+2|+\frac23\ln|x-1|+C.$$
</details>

---

**Esercizio 6 (avanzato — frazioni parziali, fattore ripetuto).** Calcolare $\displaystyle\int\frac{x^2+1}{x(x-1)^2}\,dx$.

<details>
<summary>Soluzione</summary>

Fattore $(x-1)^2$ ripetuto ⇒ due termini: $\dfrac{x^2+1}{x(x-1)^2}=\dfrac{A}{x}+\dfrac{B}{x-1}+\dfrac{C}{(x-1)^2}$. Moltiplicando: $x^2+1=A(x-1)^2+Bx(x-1)+Cx$. Con $x=0$: $1=A$; con $x=1$: $2=C$; confronto del coefficiente di $x^2$: $1=A+B\Rightarrow B=0$.
$$\int\Big(\frac1x+\frac{2}{(x-1)^2}\Big)dx=\ln|x|-\frac{2}{x-1}+C.$$

> Nota: dimenticare il termine $\dfrac{B}{x-1}$ (tenendo solo $\dfrac{C}{(x-1)^2}$) è l'errore tipico dei fattori ripetuti: servono sempre $k$ termini per un fattore di ordine $k$, anche se qui $B$ risulta nullo.
</details>

---

**Esercizio 7 (avanzato — quadratico irriducibile e completamento del quadrato).** Calcolare $\displaystyle\int\frac{2x+3}{x^2+2x+5}\,dx$.

<details>
<summary>Soluzione</summary>

Il denominatore è irriducibile ($\Delta=4-20<0$): $x^2+2x+5=(x+1)^2+4$. Spezziamo il numeratore usando la derivata del denominatore $(x^2+2x+5)'=2x+2$: $2x+3=(2x+2)+1$.
$$\int\frac{2x+2}{x^2+2x+5}\,dx+\int\frac{1}{(x+1)^2+4}\,dx=\ln(x^2+2x+5)+\frac12\arctan\frac{x+1}{2}+C.$$
(Primo pezzo: sostituzione $u=x^2+2x+5$; secondo: formula $\int\frac{du}{u^2+a^2}=\frac1a\arctan\frac ua$ con $u=x+1$, $a=2$.)
</details>

---

**Esercizio 8 (avanzato — sostituzione trigonometrica $\sqrt{a^2+x^2}$).** Calcolare $\displaystyle\int_0^1\frac{dx}{(1+x^2)^{3/2}}$.

<details>
<summary>Soluzione</summary>

Radice $\sqrt{1+x^2}$ ⇒ $x=\tan\theta$, $dx=\tfrac{1}{\cos^2\theta}\,d\theta$, e $1+x^2=\tfrac{1}{\cos^2\theta}$ (perché $1+\tan^2\theta=\tfrac1{\cos^2\theta}$), quindi $(1+x^2)^{3/2}=\tfrac{1}{\cos^3\theta}$. Estremi: $x=0\Rightarrow\theta=0$, $x=1\Rightarrow\theta=\tfrac\pi4$.
$$\int_0^{\pi/4}\frac{1/\cos^2\theta}{1/\cos^3\theta}\,d\theta=\int_0^{\pi/4}\cos\theta\,d\theta=\big[\sin\theta\big]_0^{\pi/4}=\frac{\sqrt2}{2}.$$
</details>

---

**Esercizio 9 (avanzato — sostituzione trigonometrica $\sqrt{a^2-x^2}$).** Calcolare $\displaystyle\int\frac{x^2}{\sqrt{9-x^2}}\,dx$.

<details>
<summary>Soluzione</summary>

$x=3\sin\theta$, $\theta\in[-\tfrac\pi2,\tfrac\pi2]$, $dx=3\cos\theta\,d\theta$, $\sqrt{9-x^2}=3\cos\theta$:
$$\int\frac{9\sin^2\theta}{3\cos\theta}\,3\cos\theta\,d\theta=9\int\sin^2\theta\,d\theta=9\int\frac{1-\cos2\theta}{2}\,d\theta=\frac92\Big(\theta-\frac{\sin2\theta}{2}\Big)+C.$$
Ritorno: $\theta=\arcsin\tfrac x3$, $\sin2\theta=2\sin\theta\cos\theta=2\cdot\tfrac x3\cdot\tfrac{\sqrt{9-x^2}}{3}=\tfrac{2x\sqrt{9-x^2}}{9}$:
$$\int\frac{x^2}{\sqrt{9-x^2}}\,dx=\frac92\arcsin\frac x3-\frac{x\sqrt{9-x^2}}{2}+C.$$
</details>

---

**Esercizio 10 (concettuale — scegliere la tecnica).** Per ciascun integrale, indicare quale tecnica è la più adatta e perché (senza calcolarlo): (a) $\displaystyle\int x^3\sqrt{x^4+1}\,dx$; \ (b) $\displaystyle\int x^2\ln x\,dx$; \ (c) $\displaystyle\int\frac{1}{x^2+x-6}\,dx$; \ (d) $\displaystyle\int\frac{dx}{\sqrt{x^2-25}}$.

<details>
<summary>Soluzione</summary>

(a) **Sostituzione:** $g(x)=x^4+1$ ha derivata $4x^3$, e il fattore $x^3$ è presente (a meno della costante $4$). $u=x^4+1$.

(b) **Per parti:** prodotto di logaritmica e algebrica, senza «funzione+sua derivata». $u=\ln x$ (LIATE), $dv=x^2 dx$; derivando $\ln x$ si semplifica.

(c) **Frazioni parziali:** integranda razionale con denominatore fattorizzabile $x^2+x-6=(x+3)(x-2)$ (due radici reali). Decomposizione $\tfrac{A}{x+3}+\tfrac{B}{x-2}$.

(d) **Sostituzione trigonometrica:** radicale del tipo $\sqrt{x^2-a^2}$ con $a=5$. $x=5\sec\theta=\tfrac{5}{\cos\theta}$, che porta $\sqrt{x^2-25}=5\tan\theta$.

Riconoscere la *forma* dell'integranda — funzione+derivata, prodotto misto, rapporto di polinomi, radicale quadratico — è il primo passo, prima di qualunque conto.
</details>
