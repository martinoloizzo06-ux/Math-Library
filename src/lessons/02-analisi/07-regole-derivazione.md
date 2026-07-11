---
id: analisi-07-regole-derivazione
titolo: "Regole di derivazione"
materia: analisi
argomento: "Calcolo differenziale (una variabile)"
modulo: "Calcolo delle derivate"
livello: universitario
slug: analisi-07-regole-derivazione

subject: analisi
topic_it: "Calcolo differenziale (una variabile)"
topic_en: "Differential calculus (single variable)"
title_it: "Regole di derivazione"
title_en: "Differentiation rules"
level: blue
order: 7
source_book: "OpenStax, Calculus Volume 1 (Cap. 3.3–3.9); A. Villanacci, Appunti di Matematica 1 (Cap. 8)"
source_chapter: "OpenStax 3.3–3.9; Villanacci Cap. 8"

prerequisiti:
  - analisi-06-derivata-definizione
  - analisi-04-continuita
  - analisi-03-calcolo-limiti
  - base-18-seno-coseno-tangente
  - base-10-funzioni
collegamenti:
  - analisi-08-teoremi-differenziale
  - analisi-09-studio-funzione
  - analisi-10-taylor
  - analisi-06-derivata-definizione

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 3.3 (regole di base), 3.4 (tassi di variazione), 3.5 (trigonometriche), 3.6 (catena), 3.7 (inverse), 3.8 (implicita), 3.9 (esponenziali e logaritmi)"
    note: "Struttura, ordine di presentazione delle regole, notazione operatoriale d/dx, dimostrazioni standard di prodotto e catena."
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 8 (algebra delle derivate, derivazione della composta e dell'inversa)"
    note: "Priorità su notazione e convenzioni d'esame; enunciato della regola dell'inversa e uso sistematico della tabella delle derivate fondamentali."

componenti_usati:
  - plot
  - slider

versione: "2.0"
data_ultima_rielaborazione: "2026-07-10"
stato: da-rielaborare
sezioni_omesse: []
---

# Regole di derivazione

## 1. Motivazione e intuizione

Nella lezione precedente abbiamo definito la derivata come limite del rapporto incrementale,

$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h},
$$

e abbiamo visto che questo limite misura la pendenza della retta tangente e la velocità istantanea di variazione. Calcolare la derivata *dalla definizione*, però, è faticoso: già per $f(x) = x^3$ bisogna espandere $(x+h)^3$, semplificare e passare al limite. Per $f(x) = \dfrac{x^2 \sin x}{e^x + 1}$ il calcolo diretto sarebbe proibitivo.

Il punto centrale di questa lezione è che **non serve mai tornare alla definizione** una volta stabilite poche regole. La derivazione è un'operazione *algoritmica*: si conoscono le derivate di una manciata di funzioni elementari e si conoscono le regole che dicono come la derivata si comporta rispetto a somma, prodotto, quoziente e composizione. Combinando questi due ingredienti si deriva *qualunque* funzione ottenibile dalle elementari con le operazioni usuali, in modo meccanico e sicuro.

L'analogia giusta è con l'aritmetica. Per moltiplicare $47 \times 83$ non contiamo 47 gruppi di 83 oggetti: applichiamo l'algoritmo della moltiplicazione in colonna, che poggia sulle tabelline (i "mattoni") e sulla proprietà distributiva (la "regola di combinazione"). Allo stesso modo, la tabella delle derivate fondamentali è la tabellina del calcolo differenziale, e le regole di derivazione sono le proprietà che permettono di montare i mattoni.

Storicamente furono proprio queste regole — pubblicate da Leibniz nel 1684 con la notazione $d(uv) = u\,dv + v\,du$ — a trasformare il calcolo da collezione di trucchi geometrici a *macchina di calcolo* universale. La potenza del simbolismo leibniziano sta esattamente qui: le regole si scrivono e si applicano senza dover ripensare ogni volta al significato di limite.

## 2. Prerequisiti

Per seguire questa lezione servono:

- La **definizione di derivata** come limite del rapporto incrementale e il suo significato geometrico (retta tangente) e cinematico (velocità istantanea): [Derivata: definizione e significato](analisi-06-derivata-definizione).
- L'**algebra dei limiti** — limite di somma, prodotto, quoziente — e le forme che qui useremo per manipolare i rapporti incrementali: [Calcolo dei limiti](analisi-03-calcolo-limiti).
- Il legame **derivabilità ⇒ continuità**, che interverrà nella dimostrazione della regola del prodotto e della catena: [Continuità e teoremi fondamentali](analisi-04-continuita).
- Le **funzioni trigonometriche** e i limiti notevoli $\dfrac{\sin h}{h} \to 1$, $\dfrac{1 - \cos h}{h} \to 0$, che servono per derivare seno e coseno: [Seno, coseno e tangente](base-18-seno-coseno-tangente).
- Il linguaggio delle **funzioni** — dominio, composizione, funzione inversa: [Funzioni](base-10-funzioni).

## 3. Teoria completa

### 3.1 La tabella delle derivate fondamentali

Il primo mattone è l'insieme delle derivate delle funzioni elementari. Le riportiamo qui e ne dimostriamo le più importanti nella sezione 4; per le altre rimandiamo alle derivazioni della lezione precedente e della sezione 5.

| $f(x)$ | $f'(x)$ | dominio di validità |
|---|---|---|
| $c$ (costante) | $0$ | $\mathbb{R}$ |
| $x^{n}$, $n \in \mathbb{N}$ | $n\,x^{n-1}$ | $\mathbb{R}$ |
| $x^{\alpha}$, $\alpha \in \mathbb{R}$ | $\alpha\,x^{\alpha-1}$ | $x > 0$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $x > 0$ |
| $e^{x}$ | $e^{x}$ | $\mathbb{R}$ |
| $a^{x}$, $a>0$ | $a^{x}\ln a$ | $\mathbb{R}$ |
| $\ln x$ | $\dfrac{1}{x}$ | $x > 0$ |
| $\log_a x$ | $\dfrac{1}{x\ln a}$ | $x > 0$ |
| $\sin x$ | $\cos x$ | $\mathbb{R}$ |
| $\cos x$ | $-\sin x$ | $\mathbb{R}$ |
| $\tan x$ | $\dfrac{1}{\cos^2 x} = 1 + \tan^2 x$ | $x \neq \tfrac{\pi}{2} + k\pi$ |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1 - x^2}}$ | $-1 < x < 1$ |
| $\arccos x$ | $-\dfrac{1}{\sqrt{1 - x^2}}$ | $-1 < x < 1$ |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$ | $\mathbb{R}$ |

Ogni riga è un'affermazione *puntuale*: nei punti indicati la funzione è derivabile e la sua derivata vale quanto scritto. La notazione operatoriale $\dfrac{d}{dx}$ indica l'operazione "deriva rispetto a $x$"; per esempio $\dfrac{d}{dx}(\sin x) = \cos x$. Il simbolo $\dfrac{d}{dx}$ letto ad alta voce è "de su de x": è un *operatore* che prende una funzione e ne restituisce la derivata, non una frazione (anche se, come vedremo, in molte manipolazioni si comporta come tale).

### 3.2 Linearità: somma e prodotto per una costante

**Enunciato.** Siano $f, g$ derivabili in $x$ e $c \in \mathbb{R}$. Allora $f+g$ e $c\,f$ sono derivabili in $x$ e

$$
(f + g)'(x) = f'(x) + g'(x), \qquad (c\,f)'(x) = c\,f'(x).
$$

**Lettura in linguaggio naturale.** La derivata di una somma è la somma delle derivate; una costante moltiplicativa "esce" dalla derivata. Insieme, queste due proprietà dicono che l'operazione di derivazione è **lineare**: rispetta le combinazioni lineari, cioè $(c_1 f + c_2 g)' = c_1 f' + c_2 g'$.

**Perché la struttura è questa.** La derivata è un limite, e il limite di una somma è la somma dei limiti (quando esistono finiti). Il rapporto incrementale di $f+g$ si spezza esattamente nella somma dei due rapporti incrementali:

$$
\frac{[f(x+h)+g(x+h)] - [f(x)+g(x)]}{h} = \frac{f(x+h)-f(x)}{h} + \frac{g(x+h)-g(x)}{h}.
$$

Passando al limite si ottiene la tesi. La linearità è quindi *ereditata* dalla linearità del limite.

**Interpretazione.** Se $f$ e $g$ sono due contributi che si sommano — per esempio due forze, due componenti di un costo, due segnali — il tasso di variazione totale è la somma dei tassi. È il principio di sovrapposizione applicato alle pendenze.

### 3.3 Regola del prodotto (regola di Leibniz)

**Enunciato.** Siano $f, g$ derivabili in $x$. Allora $fg$ è derivabile in $x$ e

$$
(fg)'(x) = f'(x)\,g(x) + f(x)\,g'(x).
$$

**Lettura.** "Derivata del primo per il secondo, più il primo per la derivata del secondo." Ci sono due addendi perché entrambi i fattori variano contemporaneamente.

**Attenzione al fraintendimento più naturale.** Verrebbe da scrivere $(fg)' = f'g'$, per analogia con la somma. È **falso**: basta $f = g = x$, dove $(x \cdot x)' = (x^2)' = 2x$ mentre $f'g' = 1 \cdot 1 = 1$. La derivata non è moltiplicativa.

**Significato geometrico.** Immaginiamo un rettangolo di lati $f(x)$ e $g(x)$, la cui area è $A(x) = f(x)g(x)$. Quando $x$ aumenta di $h$, il lato $f$ cresce di circa $f'(x)h$ e il lato $g$ di circa $g'(x)h$. L'area guadagnata è la somma di due striscioline — una alta $g$ e larga $f'h$, una alta $f$ e larga $g'h$ — più un rettangolino d'angolo di lati $f'h$ e $g'h$, di area $\approx f'g'h^2$. Dividendo per $h$ e mandando $h \to 0$, il termine d'angolo è infinitesimo di ordine superiore e sparisce, lasciando esattamente $f'g + fg'$. Questa figura è il modo più efficace di *ricordare* la regola:

$$
\underbrace{f'(x)\,g(x)}_{\text{striscia orizzontale}} + \underbrace{f(x)\,g'(x)}_{\text{striscia verticale}} + \underbrace{f'(x)g'(x)\,h}_{\text{angolo} \to 0}.
$$

### 3.4 Regola del quoziente

**Enunciato.** Siano $f, g$ derivabili in $x$ con $g(x) \neq 0$. Allora $\dfrac{f}{g}$ è derivabile in $x$ e

$$
\left(\frac{f}{g}\right)'(x) = \frac{f'(x)\,g(x) - f(x)\,g'(x)}{[g(x)]^2}.
$$

**Lettura.** "Derivata del numeratore per il denominatore, meno il numeratore per la derivata del denominatore, tutto diviso per il denominatore al quadrato." L'ordine conta: c'è un **segno meno**, quindi $f'g - fg'$ e non $fg' - f'g$.

**Come non dimenticare l'ordine.** Il segno del risultato deve avere senso in casi noti. Prendiamo $\dfrac{1}{x} = \dfrac{f}{g}$ con $f = 1$, $g = x$: la formula dà $\dfrac{0 \cdot x - 1 \cdot 1}{x^2} = -\dfrac{1}{x^2}$, che è negativa come dev'essere ($1/x$ decresce). Se avessimo scambiato l'ordine avremmo ottenuto $+1/x^2$, sbagliato. Un caso di controllo così, tenuto a mente, blocca l'ordine dei termini.

**Ipotesi essenziale.** Serve $g(x) \neq 0$: dove il denominatore si annulla la funzione $f/g$ non è definita, e in generale nemmeno prolungabile con continuità. La formula vale solo nei punti del dominio.

### 3.5 Regola della catena (derivata della funzione composta)

**Enunciato.** Sia $g$ derivabile in $x$ e $f$ derivabile in $u = g(x)$. Allora la composta $F = f \circ g$, cioè $F(x) = f(g(x))$, è derivabile in $x$ e

$$
F'(x) = f'\big(g(x)\big)\cdot g'(x).
$$

In notazione di Leibniz, ponendo $y = f(u)$ e $u = g(x)$:

$$
\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}.
$$

**Lettura.** "Derivata della funzione esterna calcolata nella funzione interna, per la derivata della funzione interna." Si deriva "da fuori verso dentro", moltiplicando per la derivata di ciò che sta dentro.

**Perché la struttura è questa — le velocità si moltiplicano.** La notazione di Leibniz rende trasparente il meccanismo: se $u$ varia $g'(x)$ volte più in fretta di $x$, e $y$ varia $f'(u)$ volte più in fretta di $u$, allora $y$ varia $f'(u)\cdot g'(x)$ volte più in fretta di $x$. È la composizione di due "rapporti di ingranaggi": una ruota gira 3 volte più veloce dell'input, un'altra 5 volte più veloce della prima, il risultato gira $15$ volte più veloce dell'input. I fattori di scala si moltiplicano.

**Il fattore interno è l'errore più frequente.** Chi impara tende a scrivere $\dfrac{d}{dx}\sin(x^2) = \cos(x^2)$, dimenticando il $\cdot\, 2x$. Il fattore $g'(x)$ è il cuore della regola: senza di esso si sta derivando rispetto alla variabile interna, non rispetto a $x$.

### 3.6 Derivata della funzione inversa

**Enunciato.** Sia $f$ invertibile e continua in un intorno di $x_0$, derivabile in $x_0$ con $f'(x_0) \neq 0$. Posto $y_0 = f(x_0)$, la funzione inversa $f^{-1}$ è derivabile in $y_0$ e

$$
\big(f^{-1}\big)'(y_0) = \frac{1}{f'\big(f^{-1}(y_0)\big)} = \frac{1}{f'(x_0)}.
$$

**Lettura e significato geometrico.** La derivata dell'inversa è il *reciproco* della derivata, calcolata nel punto corrispondente. Geometricamente il grafico di $f^{-1}$ è quello di $f$ riflesso rispetto alla bisettrice $y = x$: la riflessione scambia $x$ e $y$, quindi la pendenza $\dfrac{\Delta y}{\Delta x}$ diventa $\dfrac{\Delta x}{\Delta y}$, cioè il reciproco. Da qui l'ipotesi $f'(x_0)\neq 0$: se la tangente a $f$ è orizzontale (pendenza $0$), la tangente riflessa è verticale e la derivata dell'inversa non esiste finita.

Questa regola è lo strumento con cui si ricavano le derivate di $\ln x$ (inversa di $e^x$) e delle inverse trigonometriche $\arcsin, \arccos, \arctan$: lo faremo nelle derivazioni della sezione 5.

### 3.7 Derivate di ordine superiore

Se $f'$ è a sua volta derivabile, la sua derivata è la **derivata seconda**, denotata $f''(x)$ o $\dfrac{d^2 f}{dx^2}$. Iterando si ottengono $f'''$, e in generale la derivata $n$-esima $f^{(n)}$:

$$
f^{(n)}(x) = \frac{d}{dx}\Big(f^{(n-1)}(x)\Big), \qquad f^{(0)} = f.
$$

**Significato.** Se $f$ è la posizione nel tempo, $f'$ è la velocità e $f''$ è l'**accelerazione**: la derivata seconda misura come varia il tasso di variazione. Nello studio di funzione, $f''$ governa la **concavità** (curvatura verso l'alto o verso il basso) e individua i flessi. La derivata seconda è quindi la porta d'ingresso a tutta l'analisi qualitativa dei grafici e agli sviluppi di Taylor.

### 3.8 Derivazione implicita

Talvolta $y$ è legata a $x$ da un'equazione $\;F(x,y) = 0\;$ che non si risolve facilmente per esplicitare $y = y(x)$; per esempio $x^2 + y^2 = 25$ oppure $x^3 + y^3 = 6xy$. Se $y$ è comunque una funzione derivabile di $x$ in un intorno del punto considerato, si può derivare **entrambi i membri rispetto a $x$**, trattando $y$ come funzione di $x$ e applicando la regola della catena ogni volta che compare $y$: la derivata di $y^2$ è $2y\cdot y'$, quella di $\sin y$ è $\cos y \cdot y'$, e così via. Si ottiene un'equazione lineare in $y'$, da cui si ricava $y'$.

Questo metodo — la **derivazione implicita** — permette di calcolare la pendenza della tangente a una curva senza mai esplicitare $y$, ed è indispensabile per le curve che non sono grafici di funzioni (una circonferenza, un folium). Ne vedremo l'uso nell'esempio 8 e nell'esercizio 9.

## 4. Dimostrazioni

### 4.1 Regola del prodotto

**Tesi.** Se $f, g$ sono derivabili in $x$, allora $(fg)'(x) = f'(x)g(x) + f(x)g'(x)$.

**Idea.** Il rapporto incrementale di $fg$ contiene la differenza $f(x+h)g(x+h) - f(x)g(x)$, in cui *entrambi* i fattori sono cambiati. Il trucco è **aggiungere e sottrarre** un termine ibrido che cambia un fattore alla volta.

**Dimostrazione.** Consideriamo il rapporto incrementale e inseriamo $\pm f(x+h)g(x)$:

$$
\frac{f(x+h)g(x+h) - f(x)g(x)}{h}
= \frac{f(x+h)g(x+h) - f(x+h)g(x) + f(x+h)g(x) - f(x)g(x)}{h}.
$$

Raggruppiamo i primi due addendi (fattore comune $f(x+h)$) e gli ultimi due (fattore comune $g(x)$):

$$
= f(x+h)\cdot\frac{g(x+h) - g(x)}{h} + g(x)\cdot\frac{f(x+h) - f(x)}{h}.
$$

Ora passiamo al limite per $h \to 0$, usando l'algebra dei limiti:

- $\dfrac{g(x+h)-g(x)}{h} \to g'(x)$ per definizione di derivata di $g$;
- $\dfrac{f(x+h)-f(x)}{h} \to f'(x)$ per definizione di derivata di $f$;
- $g(x)$ è costante rispetto a $h$;
- $f(x+h) \to f(x)$ perché **$f$ è continua in $x$** (essendo derivabile, per il teorema derivabilità ⇒ continuità della lezione [Continuità](analisi-04-continuita)). Questo è il punto in cui la continuità entra in gioco: senza di essa il primo fattore non convergerebbe a $f(x)$.

Il limite del prodotto è il prodotto dei limiti, quindi

$$
(fg)'(x) = f(x)\,g'(x) + g(x)\,f'(x) = f'(x)g(x) + f(x)g'(x). \qquad \blacksquare
$$

### 4.2 Regola del quoziente

**Tesi.** Se $f, g$ sono derivabili in $x$ e $g(x)\neq 0$, allora $\left(\dfrac{f}{g}\right)'(x) = \dfrac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$.

**Strategia.** Deriviamo prima il reciproco $\dfrac{1}{g}$ dalla definizione, poi combiniamo con la regola del prodotto applicata a $f\cdot\dfrac{1}{g}$.

**Passo 1 — derivata di $1/g$.** Il rapporto incrementale di $1/g$ è

$$
\frac{1}{h}\left(\frac{1}{g(x+h)} - \frac{1}{g(x)}\right)
= \frac{1}{h}\cdot\frac{g(x) - g(x+h)}{g(x+h)\,g(x)}
= -\frac{1}{g(x+h)g(x)}\cdot\frac{g(x+h) - g(x)}{h}.
$$

Per $h \to 0$: il rapporto incrementale di $g$ tende a $g'(x)$; inoltre $g(x+h)\to g(x)$ perché $g$ è continua (derivabile), e $g(x)\neq 0$ garantisce che il denominatore non si annulli. Quindi

$$
\left(\frac{1}{g}\right)'(x) = -\frac{g'(x)}{[g(x)]^2}.
$$

**Passo 2 — prodotto.** Scriviamo $\dfrac{f}{g} = f\cdot\dfrac{1}{g}$ e applichiamo la regola del prodotto (4.1):

$$
\left(\frac{f}{g}\right)' = f'\cdot\frac{1}{g} + f\cdot\left(\frac{1}{g}\right)'
= \frac{f'}{g} + f\cdot\left(-\frac{g'}{g^2}\right)
= \frac{f'g - fg'}{g^2}.
$$

Riducendo allo stesso denominatore $g^2$ si ottiene esattamente la tesi. $\blacksquare$

### 4.3 Regola della catena

**Tesi.** Se $g$ è derivabile in $x$ e $f$ è derivabile in $u_0 = g(x)$, allora $(f\circ g)'(x) = f'(g(x))\,g'(x)$.

**La sottigliezza.** La dimostrazione "ingenua" moltiplicherebbe e dividerebbe per $g(x+h)-g(x)$:

$$
\frac{f(g(x+h)) - f(g(x))}{h} = \frac{f(g(x+h)) - f(g(x))}{g(x+h) - g(x)}\cdot\frac{g(x+h) - g(x)}{h}.
$$

Il problema è che $g(x+h)-g(x)$ può **annullarsi** per valori di $h$ arbitrariamente piccoli (se $g$ è localmente costante o oscilla), rendendo illecita la divisione. Per aggirarlo si introduce una funzione ausiliaria continua.

**Dimostrazione (con funzione ausiliaria).** Poniamo $u_0 = g(x)$ e definiamo, per $u$ nell'intorno di $u_0$,

$$
\varphi(u) =
\begin{cases}
\dfrac{f(u) - f(u_0)}{u - u_0} & \text{se } u \neq u_0, \\[2mm]
f'(u_0) & \text{se } u = u_0.
\end{cases}
$$

Poiché $f$ è derivabile in $u_0$, si ha $\displaystyle\lim_{u\to u_0}\varphi(u) = f'(u_0) = \varphi(u_0)$: dunque **$\varphi$ è continua in $u_0$**. Inoltre, per costruzione, vale l'identità

$$
f(u) - f(u_0) = \varphi(u)\,(u - u_0)
$$

per ogni $u$ (anche $u=u_0$, dove entrambi i membri sono $0$). Questa identità è valida *anche* quando $u = u_0$, e questo è precisamente ciò che elimina il problema della divisione per zero. Applichiamola con $u = g(x+h)$ e $u_0 = g(x)$, poi dividiamo per $h$:

$$
\frac{f(g(x+h)) - f(g(x))}{h} = \varphi\big(g(x+h)\big)\cdot\frac{g(x+h) - g(x)}{h}.
$$

Passiamo al limite $h\to 0$:

- $\dfrac{g(x+h)-g(x)}{h} \to g'(x)$;
- $g(x+h) \to g(x) = u_0$ perché $g$ è continua (derivabile); e poiché $\varphi$ è continua in $u_0$, segue $\varphi(g(x+h)) \to \varphi(u_0) = f'(u_0) = f'(g(x))$.

Per l'algebra dei limiti,

$$
(f\circ g)'(x) = f'(g(x))\cdot g'(x). \qquad \blacksquare
$$

### 4.4 Regola della potenza per esponente naturale

**Tesi.** Per ogni $n \in \mathbb{N}$, $n \geq 1$: $\;(x^n)' = n\,x^{n-1}$.

**Dimostrazione per induzione, usando la regola del prodotto.**

*Base* ($n=1$): $(x^1)' = (x)' = 1 = 1\cdot x^0$, vero dalla definizione (il rapporto incrementale di $x$ è $\frac{(x+h)-x}{h}=1$).

*Passo induttivo.* Supponiamo $(x^k)' = k\,x^{k-1}$ (ipotesi induttiva). Scriviamo $x^{k+1} = x\cdot x^k$ e applichiamo la regola del prodotto:

$$
(x^{k+1})' = (x)'\cdot x^k + x\cdot (x^k)' = 1\cdot x^k + x\cdot k\,x^{k-1} = x^k + k\,x^k = (k+1)\,x^k.
$$

Dunque la formula vale per $k+1$. Per il principio di induzione vale per ogni $n\geq 1$. $\blacksquare$

*Osservazione.* La stessa formula $(x^\alpha)' = \alpha x^{\alpha-1}$ vale per esponente reale $\alpha$ (con $x>0$): la si dimostra scrivendo $x^\alpha = e^{\alpha \ln x}$ e derivando con la catena — vedi derivazione 5.3.

## 5. Derivazioni

### 5.1 Derivata di seno e coseno

Partiamo dalla definizione e usiamo la formula di addizione $\sin(x+h) = \sin x\cos h + \cos x\sin h$:

$$
\frac{\sin(x+h) - \sin x}{h} = \frac{\sin x\cos h + \cos x\sin h - \sin x}{h}
= \sin x\cdot\frac{\cos h - 1}{h} + \cos x\cdot\frac{\sin h}{h}.
$$

Per $h\to 0$ intervengono i due limiti notevoli $\dfrac{\sin h}{h}\to 1$ e $\dfrac{\cos h - 1}{h}\to 0$ (lezione [Seno, coseno, tangente](base-18-seno-coseno-tangente)). Quindi

$$
(\sin x)' = \sin x\cdot 0 + \cos x\cdot 1 = \cos x.
$$

Analogamente, da $\cos(x+h) = \cos x\cos h - \sin x\sin h$ si ottiene $(\cos x)' = -\sin x$.

### 5.2 Derivata di tangente (dalla regola del quoziente)

Poiché $\tan x = \dfrac{\sin x}{\cos x}$, la regola del quoziente dà

$$
(\tan x)' = \frac{(\sin x)'\cos x - \sin x\,(\cos x)'}{\cos^2 x}
= \frac{\cos x\cos x - \sin x(-\sin x)}{\cos^2 x}
= \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x}.
$$

Usando $\cos^2 x + \sin^2 x = 1$ al numeratore si ha $\dfrac{1}{\cos^2 x}$; dividendo invece numeratore e denominatore per $\cos^2 x$ si ottiene la forma equivalente $1 + \tan^2 x$.

### 5.3 Derivata di $\ln x$ e della potenza reale (dalla regola dell'inversa)

$\ln x$ è l'inversa di $e^x$. Con la regola dell'inversa (3.6), posto $y = \ln x$ cioè $x = e^y$, e ricordando $(e^y)' = e^y$:

$$
(\ln x)' = \frac{1}{(e^y)'}\Big|_{y=\ln x} = \frac{1}{e^{y}} = \frac{1}{e^{\ln x}} = \frac{1}{x}.
$$

Da qui la **potenza a esponente reale**: per $x>0$ scriviamo $x^\alpha = e^{\alpha\ln x}$ e deriviamo con la catena (esterna $e^{(\cdot)}$, interna $\alpha\ln x$):

$$
(x^\alpha)' = e^{\alpha\ln x}\cdot\frac{d}{dx}(\alpha\ln x) = x^\alpha\cdot\frac{\alpha}{x} = \alpha\,x^{\alpha-1}.
$$

### 5.4 Derivata di $\arctan x$ (dalla regola dell'inversa)

$\arctan$ è l'inversa di $\tan$ (ristretta a $(-\pi/2,\pi/2)$). Posto $y = \arctan x$, cioè $x = \tan y$, e usando $(\tan y)' = 1 + \tan^2 y$:

$$
(\arctan x)' = \frac{1}{1 + \tan^2 y} = \frac{1}{1 + x^2},
$$

perché $\tan y = x$. Con lo stesso metodo, da $x = \sin y$ e $(\sin y)' = \cos y = \sqrt{1-\sin^2 y} = \sqrt{1-x^2}$ (per $y\in(-\pi/2,\pi/2)$, dove $\cos y>0$), si ricava $(\arcsin x)' = \dfrac{1}{\sqrt{1-x^2}}$.

## 6. Esempi

**Esempio 1 (introduttivo — linearità e potenze).** Derivare $f(x) = 3x^4 - 5x^2 + 7x - 2$.

*Strategia.* Linearità: si deriva termine a termine, e ogni potenza con la regola $x^n \to nx^{n-1}$.

$$
f'(x) = 3\cdot 4x^3 - 5\cdot 2x + 7\cdot 1 - 0 = 12x^3 - 10x + 7.
$$

La costante $-2$ ha derivata nulla: un termine costante non contribuisce mai alla pendenza.

**Esempio 2 (introduttivo — esponente frazionario e negativo).** Derivare $f(x) = \sqrt{x} + \dfrac{1}{x^3}$ per $x>0$.

*Strategia.* Riscrivere come potenze: $\sqrt{x} = x^{1/2}$, $\dfrac{1}{x^3} = x^{-3}$.

$$
f'(x) = \tfrac{1}{2}x^{-1/2} + (-3)x^{-4} = \frac{1}{2\sqrt{x}} - \frac{3}{x^4}.
$$

*Errore da evitare:* non si deriva $\dfrac{1}{x^3}$ come "$\dfrac{1}{3x^2}$". Bisogna passare all'esponente negativo.

**Esempio 3 (intermedio — regola del prodotto).** Derivare $f(x) = x^2\sin x$.

*Strategia.* Prodotto con $u = x^2$, $v = \sin x$.

$$
f'(x) = (x^2)'\sin x + x^2(\sin x)' = 2x\sin x + x^2\cos x.
$$

**Esempio 4 (intermedio — regola del quoziente).** Derivare $f(x) = \dfrac{x^2 + 1}{x - 1}$ per $x\neq 1$.

*Strategia.* Quoziente con $u = x^2+1$ ($u' = 2x$) e $v = x-1$ ($v' = 1$).

$$
f'(x) = \frac{2x(x-1) - (x^2+1)\cdot 1}{(x-1)^2} = \frac{2x^2 - 2x - x^2 - 1}{(x-1)^2} = \frac{x^2 - 2x - 1}{(x-1)^2}.
$$

*Controllo:* il denominatore è sempre positivo; il segno di $f'$ dipende dal numeratore $x^2-2x-1$, che si annulla in $x = 1\pm\sqrt2$ — informazione utile per lo studio di funzione.

**Esempio 5 (intermedio — regola della catena).** Derivare $f(x) = \sin(3x^2)$.

*Strategia.* Esterna $\sin(\cdot)$, interna $3x^2$. Deriva da fuori: $\cos(3x^2)$ per la derivata dell'interna $6x$.

$$
f'(x) = \cos(3x^2)\cdot 6x = 6x\cos(3x^2).
$$

*Errore da evitare:* fermarsi a $\cos(3x^2)$ dimenticando il fattore $6x$.

**Esempio 6 (avanzato — catena doppia).** Derivare $f(x) = e^{\sin(x^2)}$.

*Strategia.* Tre strati: esterno $e^{(\cdot)}$, medio $\sin(\cdot)$, interno $x^2$. Si moltiplicano le derivate procedendo da fuori.

$$
f'(x) = e^{\sin(x^2)}\cdot\cos(x^2)\cdot 2x = 2x\cos(x^2)\,e^{\sin(x^2)}.
$$

Ogni fattore corrisponde a uno strato: derivata dell'esponenziale ($=$ se stesso), per derivata del seno ($\cos$ dell'argomento), per derivata di $x^2$ ($2x$).

**Esempio 7 (avanzato — prodotto triplo).** Derivare $f(x) = x\,e^x\cos x$.

*Strategia.* Per tre fattori la regola del prodotto si estende: $(uvw)' = u'vw + uv'w + uvw'$ (si deriva un fattore alla volta, gli altri restano). Con $u=x$, $v=e^x$, $w=\cos x$:

$$
f'(x) = 1\cdot e^x\cos x + x\cdot e^x\cos x + x\,e^x\cdot(-\sin x) = e^x\big[(1+x)\cos x - x\sin x\big].
$$

**Esempio 8 (avanzato — derivazione implicita).** La circonferenza $x^2 + y^2 = 25$. Trovare $y'$ e la pendenza della tangente nel punto $(3,4)$.

*Strategia.* Deriviamo entrambi i membri rispetto a $x$, ricordando che $y = y(x)$, quindi $\dfrac{d}{dx}(y^2) = 2y\,y'$ (catena):

$$
2x + 2y\,y' = 0 \quad\Longrightarrow\quad y' = -\frac{x}{y}.
$$

Nel punto $(3,4)$: $y' = -\dfrac{3}{4}$. La tangente ha pendenza $-3/4$, coerente col fatto che il raggio dall'origine a $(3,4)$ ha pendenza $4/3$ e la tangente è ad esso perpendicolare ($-3/4 = -1/(4/3)$).

**Esempio 9 (applicativo — derivata seconda e accelerazione).** Un punto si muove con posizione $s(t) = t^3 - 6t^2 + 9t$ (in metri, $t$ in secondi). Trovare velocità e accelerazione, e l'istante in cui l'accelerazione si annulla.

$$
v(t) = s'(t) = 3t^2 - 12t + 9, \qquad a(t) = s''(t) = 6t - 12.
$$

L'accelerazione si annulla in $t = 2$ s. Prima di $t=2$ è negativa (il punto decelera), dopo è positiva. La derivata seconda ha quindi un significato fisico diretto: è il tasso con cui cambia la velocità.

## 7. Visualizzazioni e interattività

**Grafico statico — una funzione e la sua derivata.** Mostriamo $f(x) = x^3 - 3x$ insieme alla sua derivata $f'(x) = 3x^2 - 3$. Si osservi che $f'$ si annulla dove $f$ ha tangente orizzontale (in $x = \pm 1$, i punti di massimo e minimo locale), è negativa dove $f$ decresce e positiva dove $f$ cresce. Questo è il legame che governerà lo studio di funzione.

```plot
{
  "fn": "x**3 - 3*x",
  "fn2": "3*x**2 - 3",
  "domain": [-2.5, 2.5],
  "yDomain": [-6, 6],
  "title": "f(x) = x^3 - 3x  e la sua derivata f'(x) = 3x^2 - 3",
  "label1": "f(x)",
  "label2": "f'(x)",
  "color": "#2563eb",
  "color2": "#dc2626"
}
```

**Elemento interattivo — il fattore interno lineare della catena.** Il seguente slider mostra $f(x) = \sin(ax)$ e la sua derivata $f'(x) = a\cos(ax)$. Muovendo il parametro $a$ si vedono *simultaneamente* due effetti della regola della catena su un fattore interno lineare: la funzione oscilla più in fretta (frequenza $a$) e l'ampiezza della derivata cresce proporzionalmente ad $a$. È il fattore $g'(x) = a$ della catena reso visibile: derivare l'interno $ax$ produce il moltiplicatore $a$ davanti al coseno. Da testo statico questo legame "più veloce dentro ⇒ derivata più grande" resta astratto; qui si manipola e si vede.

```slider
{
  "fn": "Math.sin(a*x)",
  "fn2": "a*Math.cos(a*x)",
  "domain": [-6.283, 6.283],
  "yDomain": [-4, 4],
  "title": "f(x) = sin(ax)  e  f'(x) = a*cos(ax)",
  "label1": "sin(ax)",
  "label2": "a*cos(ax)",
  "pname": "a",
  "pmin": 0.5,
  "pmax": 3,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "a",
  "color": "#2563eb",
  "color2": "#dc2626"
}
```

## 8. Errori comuni

❌ **Credere che $(fg)' = f'g'$.** La derivata del prodotto non è il prodotto delle derivate. Il controesempio minimo è $f=g=x$: $(x^2)'=2x\neq 1\cdot 1$. Va sempre usata la regola di Leibniz $f'g+fg'$.

❌ **Sbagliare il segno o l'ordine nella regola del quoziente.** Scrivere $\dfrac{fg' - f'g}{g^2}$ (ordine invertito) o mettere $+$ al posto di $-$. Controllo rapido: derivare $1/x$ deve dare $-1/x^2$; se la formula ricordata non lo restituisce, l'ordine è sbagliato.

❌ **Dimenticare il fattore interno nella catena.** $\dfrac{d}{dx}\sin(x^2) = \cos(x^2)$ è **incompleto**: manca $\cdot\,2x$. Il fattore $g'(x)$ è la parte essenziale della regola, non un dettaglio.

❌ **Trattare $y$ come costante nella derivazione implicita.** Derivando $x^2 + y^2 = 25$ scrivere $2x + 2y = 0$ (senza $y'$) è sbagliato: $y$ dipende da $x$, quindi $\dfrac{d}{dx}(y^2) = 2y\,y'$. Ogni comparsa di $y$ trascina un fattore $y'$.

❌ **Derivare $a^x$ come $x\,a^{x-1}$.** Confondere la funzione **esponenziale** $a^x$ (variabile all'esponente) con la **potenza** $x^a$ (variabile alla base). È $\;(a^x)' = a^x\ln a\;$, non una regola di potenza. In particolare $(e^x)' = e^x$ perché $\ln e = 1$.

❌ **Semplificare troppo presto le derivate di ordine superiore.** Per calcolare $f''$ occorre derivare $f'$ *per intero*; è frequente perdere termini quando $f'$ è un prodotto o un quoziente e si applica male la regola una seconda volta. Conviene scrivere $f'$ in forma pulita prima di riderivare.

## 9. Collegamenti e applicazioni

Le regole di derivazione sono lo strumento operativo su cui poggia quasi tutto il calcolo differenziale successivo.

All'interno dell'analisi, esse alimentano direttamente i **teoremi del calcolo differenziale** (Rolle, Lagrange, monotonia) che sfruttano il segno di $f'$: [Teoremi del calcolo differenziale](analisi-08-teoremi-differenziale). Sono la base dello **studio di funzione**, dove crescenza/decrescenza vengono dal segno di $f'$ e concavità/flessi dal segno di $f''$: [Studio di funzione](analisi-09-studio-funzione). E sono il motore degli **sviluppi di Taylor**, che approssimano una funzione tramite le sue derivate successive in un punto: [Formula di Taylor](analisi-10-taylor).

In **fisica**, la catena di derivate posizione → velocità → accelerazione è esattamente la gerarchia $s, s', s''$; le regole permettono di ricavare le leggi del moto da qualunque legge oraria. In **economia**, la derivata è il *marginale*: costo marginale $C'(q)$, ricavo marginale $R'(q)$, e la condizione di ottimo del profitto $\pi'(q)=0$ si scrive derivando $\pi = R - C$ con la linearità. In **statistica e machine learning**, l'addestramento dei modelli minimizza una funzione di perdita tramite discesa del gradiente: ogni passo richiede la derivata della perdita rispetto ai parametri, e le reti profonde la calcolano applicando ripetutamente la **regola della catena** (è esattamente ciò che fa la *backpropagation*). In **probabilità**, densità e funzioni caratteristiche si ottengono derivando funzioni di ripartizione e trasformate.

## 10. Riepilogo

Le idee fondamentali di questa lezione:

- La derivazione è **algoritmica**: tabella delle derivate elementari + regole di combinazione = derivata di qualunque funzione elementare, senza tornare alla definizione.
- La derivazione è **lineare**: $(c_1 f + c_2 g)' = c_1 f' + c_2 g'$.
- **Prodotto**, **quoziente** e **catena** sono le tre regole di combinazione; la catena è la più usata e quella in cui si sbaglia più spesso (fattore interno).
- La **regola dell'inversa** produce le derivate di $\ln$ e delle inverse trigonometriche.
- Le **derivate di ordine superiore** ($f''$ = accelerazione, concavità) e la **derivazione implicita** estendono il calcolo a situazioni dinamiche e a curve non esplicitabili.

Formule chiave:

$$
(c f)' = c f', \qquad (f+g)' = f'+g', \qquad (fg)' = f'g + fg',
$$

$$
\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}, \qquad (f\circ g)'(x) = f'(g(x))\,g'(x), \qquad (f^{-1})'(y_0) = \frac{1}{f'(x_0)}.
$$

Tabella minima da memorizzare: $(x^\alpha)' = \alpha x^{\alpha-1}$, $(e^x)' = e^x$, $(\ln x)' = 1/x$, $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$, $(\arctan x)' = 1/(1+x^2)$.

## 11. Esercizi

**Esercizio 1 (introduttivo).** Derivare $f(x) = 5x^3 - 2x^2 + \dfrac{4}{x}$ per $x\neq 0$.

<details>
<summary>Soluzione</summary>

Riscriviamo $\dfrac{4}{x} = 4x^{-1}$. Per linearità e regola della potenza:

$$
f'(x) = 15x^2 - 4x - 4x^{-2} = 15x^2 - 4x - \frac{4}{x^2}.
$$
</details>

**Esercizio 2 (introduttivo).** Derivare $f(x) = \sqrt[3]{x} + 2\cos x$ per $x>0$.

<details>
<summary>Soluzione</summary>

$\sqrt[3]{x} = x^{1/3}$, quindi $(x^{1/3})' = \tfrac13 x^{-2/3}$, e $(2\cos x)' = -2\sin x$:

$$
f'(x) = \frac{1}{3\,x^{2/3}} - 2\sin x = \frac{1}{3\sqrt[3]{x^2}} - 2\sin x.
$$
</details>

**Esercizio 3 (standard — prodotto).** Derivare $f(x) = (x^2 + 1)e^x$.

<details>
<summary>Soluzione</summary>

Regola del prodotto con $u = x^2+1$ ($u'=2x$), $v = e^x$ ($v'=e^x$):

$$
f'(x) = 2x\,e^x + (x^2+1)e^x = e^x(x^2 + 2x + 1) = e^x(x+1)^2.
$$
</details>

**Esercizio 4 (standard — quoziente).** Derivare $f(x) = \dfrac{\sin x}{x}$ per $x\neq 0$.

<details>
<summary>Soluzione</summary>

Quoziente con $u = \sin x$ ($u'=\cos x$), $v = x$ ($v'=1$):

$$
f'(x) = \frac{\cos x\cdot x - \sin x\cdot 1}{x^2} = \frac{x\cos x - \sin x}{x^2}.
$$
</details>

**Esercizio 5 (standard — catena).** Derivare $f(x) = \sqrt{x^2 + 1}$.

<details>
<summary>Soluzione</summary>

Esterna $\sqrt{\cdot} = (\cdot)^{1/2}$, interna $x^2+1$:

$$
f'(x) = \tfrac12 (x^2+1)^{-1/2}\cdot 2x = \frac{x}{\sqrt{x^2+1}}.
$$
</details>

**Esercizio 6 (standard — catena con logaritmo).** Derivare $f(x) = \ln(1 + x^2)$.

<details>
<summary>Soluzione</summary>

Esterna $\ln(\cdot)$ (derivata $1/(\cdot)$), interna $1+x^2$ (derivata $2x$):

$$
f'(x) = \frac{1}{1+x^2}\cdot 2x = \frac{2x}{1+x^2}.
$$
</details>

**Esercizio 7 (avanzato — combinazione di regole).** Derivare $f(x) = \dfrac{e^{2x}}{x^2 + 1}$.

<details>
<summary>Soluzione</summary>

Quoziente; per il numeratore serve la catena: $(e^{2x})' = e^{2x}\cdot 2 = 2e^{2x}$. Con $u = e^{2x}$, $v = x^2+1$:

$$
f'(x) = \frac{2e^{2x}(x^2+1) - e^{2x}\cdot 2x}{(x^2+1)^2}
= \frac{2e^{2x}(x^2 - x + 1)}{(x^2+1)^2}.
$$
</details>

**Esercizio 8 (avanzato — catena tripla).** Derivare $f(x) = \cos^3(2x)$, cioè $\big(\cos(2x)\big)^3$.

<details>
<summary>Soluzione</summary>

Tre strati: esterno $(\cdot)^3$, medio $\cos(\cdot)$, interno $2x$.

$$
f'(x) = 3\cos^2(2x)\cdot\big(-\sin(2x)\big)\cdot 2 = -6\cos^2(2x)\sin(2x).
$$
</details>

**Esercizio 9 (avanzato — derivazione implicita).** La curva (folium di Cartesio) $x^3 + y^3 = 6xy$. Trovare $y'$ e la pendenza della tangente in $(3,3)$.

<details>
<summary>Soluzione</summary>

Deriviamo rispetto a $x$, ricordando $y=y(x)$ e usando prodotto e catena:

$$
3x^2 + 3y^2 y' = 6y + 6x\,y'.
$$

Raccogliamo $y'$:

$$
3y^2 y' - 6x\,y' = 6y - 3x^2 \;\Longrightarrow\; y'(3y^2 - 6x) = 6y - 3x^2 \;\Longrightarrow\; y' = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x}.
$$

In $(3,3)$: $y' = \dfrac{6 - 9}{9 - 6} = \dfrac{-3}{3} = -1$. La tangente ha pendenza $-1$.
</details>

**Esercizio 10 (avanzato — derivata seconda).** Sia $f(x) = x^2 e^{-x}$. Calcolare $f''(x)$.

<details>
<summary>Soluzione</summary>

Prima derivata (prodotto, con $(e^{-x})' = -e^{-x}$):

$$
f'(x) = 2x e^{-x} + x^2(-e^{-x}) = e^{-x}(2x - x^2).
$$

Seconda derivata (di nuovo prodotto, $u = e^{-x}$, $v = 2x - x^2$, $v' = 2 - 2x$):

$$
f''(x) = -e^{-x}(2x - x^2) + e^{-x}(2 - 2x) = e^{-x}\big(x^2 - 2x + 2 - 2x\big) = e^{-x}(x^2 - 4x + 2).
$$
</details>

## 12. Fonti

**Fonti utilizzate e loro ruolo.**

- **OpenStax, *Calculus Volume 1*, Cap. 3.3–3.9** — *fonte primaria*. Fornisce la struttura e l'ordine di presentazione (regole di base → trigonometriche → catena → inverse → implicita → esponenziali/logaritmi), la notazione operatoriale $\dfrac{d}{dx}$, e le dimostrazioni standard della regola del prodotto (trucco dell'aggiungi-e-sottrai) e della catena (funzione ausiliaria $\varphi$). Da qui provengono l'interpretazione geometrica del prodotto come area di un rettangolo e gli esempi cinematici.

- **A. Villanacci, *Appunti di Matematica 1*, Cap. 8** — *appunti del professore*, priorità su notazione e convenzioni d'esame. Da qui la formulazione della **regola dell'inversa** $(f^{-1})'(y_0) = 1/f'(x_0)$ come strumento sistematico per ricavare $\ln$, $\arcsin$, $\arctan$, e l'organizzazione del calcolo intorno a una **tabella delle derivate fondamentali** da applicare meccanicamente. La convenzione di indicare il punto con $x_0$ e il valore corrispondente con $y_0$ segue questi appunti.

**Differenze rilevanti tra le fonti.** Sull'**ordine con cui si giustifica la potenza reale** $(x^\alpha)'$ le due fonti divergono nel *metodo*, con conseguenze per l'apprendimento. OpenStax introduce presto la regola $(x^n)'=nx^{n-1}$ per $n$ intero (via teorema binomiale o induzione) e solo più avanti la estende a esponente reale tramite la derivazione logaritmica $x^\alpha = e^{\alpha\ln x}$. Villanacci, coerentemente con l'impianto d'esame, tende a introdurre subito $\ln$ ed $e^x$ e a ricavare la potenza reale in un colpo solo dalla catena su $e^{\alpha\ln x}$, senza passare dal caso intero come teorema separato. Per Martino la differenza è operativa: nelle verifiche che seguono Villanacci conviene avere pronta la scrittura $x^\alpha = e^{\alpha\ln x}$, mentre il caso intero via induzione (dimostrazione 4.4) resta il modo più pulito per *giustificare* la formula quando è richiesta la dimostrazione. Sulle formule finali e sulle derivate tabulate le due fonti coincidono: la divergenza è solo nella strada, non nel risultato.
