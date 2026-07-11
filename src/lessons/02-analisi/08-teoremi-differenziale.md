---
id: analisi-08-teoremi-differenziale
titolo: "Teoremi del calcolo differenziale (Rolle, Lagrange, de l'Hôpital)"
materia: analisi
argomento: "Calcolo differenziale (una variabile)"
modulo: "Teoremi fondamentali del calcolo differenziale"
livello: universitario
slug: analisi-08-teoremi-differenziale

subject: analisi
topic_it: "Calcolo differenziale (una variabile)"
topic_en: "Differential calculus (single variable)"
title_it: "Teoremi del calcolo differenziale (Rolle, Lagrange, de l'Hôpital)"
title_en: "Theorems of differential calculus (Rolle, MVT, L'Hôpital)"
level: blue
order: 8
source_book: "OpenStax, Calculus Volume 1 (Cap. 4.4, 4.8); A. Villanacci, Appunti di Matematica 1 (Cap. 8)"
source_chapter: "OpenStax 4.4 (Mean Value Theorem), 4.8 (L'Hôpital); Villanacci Cap. 8"

prerequisiti:
  - analisi-07-regole-derivazione
  - analisi-06-derivata-definizione
  - analisi-04-continuita
  - analisi-03-calcolo-limiti
collegamenti:
  - analisi-09-studio-funzione
  - analisi-10-taylor
  - analisi-05-limiti-notevoli-asintoti
  - analisi-04-continuita

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 4.4 (Teorema di Rolle e del valor medio, corollari sulla monotonia), 4.8 (regola di de l'Hôpital, forme indeterminate)"
    note: "Struttura espositiva, enunciati, dimostrazione di Lagrange via funzione ausiliaria, catalogo delle forme indeterminate."
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 8 (teoremi del valor medio, conseguenze sulla monotonia, de l'Hôpital via teorema di Cauchy)"
    note: "Priorità su notazione e convenzioni d'esame; catena logica Weierstrass→Fermat→Rolle→Lagrange→Cauchy→de l'Hôpital; uso parsimonioso di de l'Hôpital rispetto alle equivalenze asintotiche."

componenti_usati:
  - plot
  - slider

versione: "2.0"
data_ultima_rielaborazione: "2026-07-11"
stato: completa
sezioni_omesse: []
---

# Teoremi del calcolo differenziale (Rolle, Lagrange, de l'Hôpital)

## 1. Motivazione e intuizione

Immagina di percorrere un tratto autostradale con il tutor attivo. Il sistema registra che hai percorso $100$ km in $40$ minuti: la tua velocità **media** è stata $150$ km/h. Anche senza aver mai guardato il tuo tachimetro, il tutor può multarti con assoluta certezza, perché c'è stato **almeno un istante** in cui la tua velocità *istantanea* è stata esattamente $150$ km/h — e quindi, in particolare, hai superato il limite. Non serve sapere *quando* o *dove*: la matematica garantisce che quell'istante è esistito.

Questo è il cuore del **Teorema di Lagrange** (o *teorema del valor medio*, in inglese *Mean Value Theorem*): se una funzione realizza un certo incremento medio su un intervallo, allora in almeno un punto interno la sua derivata — la velocità istantanea di variazione — è *uguale* a quell'incremento medio. È un teorema di **esistenza**: non ti dice dove si trova il punto, ma ti garantisce che c'è.

Perché è così importante? Perché è il ponte che collega il comportamento *locale* di una funzione (la derivata in un punto) al suo comportamento *globale* (la variazione complessiva su un intervallo). Quasi tutto il calcolo differenziale applicato — stabilire se una funzione cresce o decresce, stimare errori, dimostrare disuguaglianze, giustificare lo studio di funzione — poggia su questo ponte. Senza di esso, sapere che $f'(x) > 0$ in ogni punto *non basterebbe* logicamente a concludere che $f$ è crescente: è proprio Lagrange a rendere lecito quel passo che diamo per scontato.

I risultati di questa lezione formano una **catena logica** elegante, in cui ogni anello si dimostra a partire dal precedente:

$$
\underbrace{\text{Weierstrass}}_{\text{esistenza max/min}}
\;\Rightarrow\;
\underbrace{\text{Fermat}}_{f'(c)=0 \text{ negli estremi interni}}
\;\Rightarrow\;
\underbrace{\text{Rolle}}_{\text{caso } f(a)=f(b)}
\;\Rightarrow\;
\underbrace{\text{Lagrange}}_{\text{caso generale}}
\;\Rightarrow\;
\underbrace{\text{Cauchy}}_{\text{versione a due funzioni}}
\;\Rightarrow\;
\underbrace{\text{de l'Hôpital}}_{\text{limiti di forme indeterminate}}
$$

Alla fine di questa catena troviamo uno strumento di calcolo concreto e potentissimo — la **regola di de l'Hôpital** — che trasforma il calcolo di limiti apparentemente impossibili (forme $\tfrac{0}{0}$, $\tfrac{\infty}{\infty}$) in una semplice derivazione. Il fatto che uno strumento così pratico discenda per pura logica da un teorema di esistenza è uno degli esempi più belli di come l'analisi costruisca cattedrali a partire da poche pietre.

---

## 2. Teoria

I prerequisiti (continuità su $[a,b]$, derivabilità su $(a,b)$, teorema di Weierstrass) sono richiamati nel riquadro dei prerequisiti in cima alla lezione. Qui li useremo come mattoni già disponibili. Un mattone in più ci serve subito, ed è talmente centrale che lo enunciamo per esteso: il **teorema di Fermat**.

### 2.1 Teorema di Fermat (punti stazionari)

**Enunciato.** Sia $f$ definita su un intervallo e sia $c$ un punto **interno** in cui $f$ ha un estremo locale (massimo o minimo). Se $f$ è derivabile in $c$, allora
$$
f'(c) = 0.
$$

**Lettura in linguaggio naturale.** «Dove una funzione derivabile raggiunge una cima o una valle *interna*, la tangente è orizzontale.» La derivata, che misura la pendenza, deve annullarsi: se fosse positiva la funzione starebbe ancora salendo (e quindi $c$ non sarebbe un massimo), se fosse negativa starebbe scendendo.

**Perché "interno" e "derivabile" sono essenziali.** Se il massimo è raggiunto a un estremo dell'intervallo (bordo), la tangente può benissimo essere inclinata: pensa a $f(x)=x$ su $[0,1]$, il massimo è in $x=1$ ma $f'(1)=1\neq 0$. E se $f$ non è derivabile in $c$ — come $f(x)=|x|$ nel suo minimo $x=0$ — il teorema semplicemente non parla, perché $f'(0)$ non esiste. Il teorema di Fermat identifica i **candidati** a essere estremi (i punti dove $f'=0$, detti *punti critici* o *stazionari*), ma attenzione: $f'(c)=0$ è condizione *necessaria*, non sufficiente. In $f(x)=x^3$ si ha $f'(0)=0$ senza che $0$ sia un estremo (è un flesso). Torneremo su questo negli errori comuni.

### 2.2 Teorema di Rolle

**Enunciato.** Sia $f:[a,b]\to\mathbb{R}$ tale che
1. $f$ è **continua** su $[a,b]$;
2. $f$ è **derivabile** su $(a,b)$;
3. $f(a)=f(b)$.

Allora esiste almeno un punto $c\in(a,b)$ tale che
$$
f'(c)=0.
$$

**Significato di ogni ipotesi.** La continuità su tutto il chiuso $[a,b]$ serve a garantire (via Weierstrass) l'esistenza di massimo e minimo; la derivabilità sull'aperto $(a,b)$ serve ad applicare Fermat nel punto interno; l'ipotesi $f(a)=f(b)$ è ciò che "chiude il cerchio": partendo e arrivando alla stessa quota, la funzione o è piatta, o deve prima salire e poi tornare giù (o viceversa), e in mezzo c'è un'inversione di tendenza — cioè un punto a tangente orizzontale.

**Interpretazione geometrica.** Traccia una corda orizzontale tra $(a,f(a))$ e $(b,f(b))$: il grafico deve avere almeno un punto in cui la tangente è parallela a questa corda, ossia orizzontale.

### 2.3 Teorema di Lagrange (del valor medio)

**Enunciato.** Sia $f:[a,b]\to\mathbb{R}$ continua su $[a,b]$ e derivabile su $(a,b)$. Allora esiste $c\in(a,b)$ tale che
$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

**Lettura simbolo per simbolo.** Il membro destro $\dfrac{f(b)-f(a)}{b-a}$ è il **rapporto incrementale medio** su $[a,b]$: di quanto cambia $f$ in media per unità di $x$. Il membro sinistro $f'(c)$ è la **variazione istantanea** nel punto $c$. Il teorema afferma che la media è realizzata istantaneamente in almeno un punto. Rolle è il caso particolare $f(a)=f(b)$: allora il rapporto incrementale vale $0$ e si ritrova $f'(c)=0$.

**Interpretazione geometrica.** Esiste un punto in cui la tangente al grafico è **parallela alla corda** che congiunge gli estremi $(a,f(a))$ e $(b,f(b))$.

**Derivazione dell'idea (funzione ausiliaria).** Come si passa da Rolle — che richiede estremi alla stessa quota — al caso generale in cui $f(a)\neq f(b)$? Con un trucco geometrico: "raddrizziamo" la corda. Consideriamo la retta che passa per gli estremi,
$$
r(x)=f(a)+\frac{f(b)-f(a)}{b-a}\,(x-a),
$$
e sottraiamola a $f$. La differenza $g(x)=f(x)-r(x)$ misura lo scarto verticale tra la curva e la corda; agli estremi questo scarto è nullo, cioè $g(a)=g(b)=0$. Abbiamo così fabbricato una funzione che *soddisfa Rolle*: applicando Rolle a $g$ otterremo Lagrange per $f$. La costruzione esplicita è nella §3.

### 2.4 Conseguenze sulla monotonia (il vero motivo per cui Lagrange serve)

Dal teorema di Lagrange discendono i criteri che useremo di continuo nello studio di funzione. Sono corollari, ma sono *loro* la ragione pratica per cui il teorema esiste.

**Corollario 1 (funzione costante).** Se $f'(x)=0$ per ogni $x\in(a,b)$, allora $f$ è costante su $(a,b)$.

**Corollario 2 (crescenza).** Se $f'(x)>0$ per ogni $x\in(a,b)$, allora $f$ è strettamente crescente su $(a,b)$.

**Corollario 3 (decrescenza).** Se $f'(x)<0$ per ogni $x\in(a,b)$, allora $f$ è strettamente decrescente su $(a,b)$.

**Perché non sono "ovvi".** Che derivata positiva significhi "in salita" è l'intuizione *locale* (in ogni singolo punto la curva sale). Ma passare da "sale in ogni punto" a "il valore in $x_2$ è maggiore del valore in $x_1$" è un'affermazione *globale*, che confronta due punti distanti. È esattamente Lagrange a colmare il salto: applicato su $[x_1,x_2]$ dà $f(x_2)-f(x_1)=f'(c)(x_2-x_1)$, e il segno di $f'(c)$ decide il segno della differenza. Senza Lagrange, "derivata positiva ⇒ crescente" resterebbe un atto di fede.

### 2.5 Teorema di Cauchy (valor medio generalizzato)

**Enunciato.** Siano $f,g:[a,b]\to\mathbb{R}$ continue su $[a,b]$ e derivabili su $(a,b)$, con $g'(x)\neq 0$ per ogni $x\in(a,b)$. Allora esiste $c\in(a,b)$ tale che
$$
\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}.
$$

**Come leggerlo.** È Lagrange "in forma parametrica": invece di confrontare $f$ con la variabile $x$, si confrontano *due* funzioni tra loro. Ponendo $g(x)=x$ (per cui $g'=1$, $g(b)-g(a)=b-a$) si ricade esattamente in Lagrange. L'ipotesi $g'(x)\neq 0$ garantisce, sempre via Lagrange, che $g(b)-g(a)\neq 0$, così la frazione a destra ha senso.

**A cosa serve.** È il gradino tecnico che rende possibile la dimostrazione pulita della regola di de l'Hôpital: mette a rapporto due incrementi, ed è proprio un rapporto $f/g$ che vogliamo studiare nei limiti indeterminati.

### 2.6 Regola di de l'Hôpital

**Enunciato.** Siano $f,g$ derivabili in un intorno di $a$ (eventualmente escluso $a$), con $g'(x)\neq 0$ in tale intorno. Supponiamo che $\displaystyle\lim_{x\to a}\frac{f(x)}{g(x)}$ si presenti come **forma indeterminata** $\dfrac{0}{0}$ oppure $\dfrac{\infty}{\infty}$. Allora
$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)},
$$
**a condizione che** il limite di destra esista (finito o infinito). La regola vale anche per $a=\pm\infty$ e per i limiti unilaterali.

**Lettura e avvertenze incorporate nell'enunciato.** La regola *sostituisce* il rapporto delle funzioni con il rapporto delle *derivate*. È lecita solo in presenza di una vera indeterminazione: applicarla, per esempio, a $\tfrac{0}{1}$ è un errore che produce risultati sbagliati (vedi §4). Ed è un'implicazione a senso unico: se il limite del rapporto delle derivate *esiste*, allora coincide con quello di partenza; ma se quel limite *non* esiste, la regola non dice nulla — il limite originale potrebbe comunque esistere.

**Le altre forme indeterminate.** De l'Hôpital tratta direttamente solo $\tfrac{0}{0}$ e $\tfrac{\infty}{\infty}$. Tutte le altre si riconducono a queste con manipolazioni algebriche:

| Forma | Riscrittura | Diventa |
|---|---|---|
| $0\cdot\infty$ | $f\cdot g=\dfrac{f}{1/g}$ | $\tfrac{0}{0}$ o $\tfrac{\infty}{\infty}$ |
| $\infty-\infty$ | denominatore comune | $\tfrac{0}{0}$ |
| $0^0,\ 1^\infty,\ \infty^0$ | $f^{\,g}=e^{\,g\ln f}$ | $0\cdot\infty$ all'esponente |

**Derivazione della regola (caso $\tfrac{0}{0}$).** L'idea è applicare Cauchy sull'intervallo $[a,x]$. Se $f(a)=g(a)=0$ (dopo eventuale prolungamento per continuità), Cauchy dà un punto $c_x$ tra $a$ e $x$ con
$$
\frac{f(x)}{g(x)}=\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{f'(c_x)}{g'(c_x)}.
$$
Quando $x\to a$, il punto $c_x$ — schiacciato tra $a$ e $x$ — tende ad $a$; se $\dfrac{f'(x)}{g'(x)}$ ha limite $\ell$, allora anche $\dfrac{f'(c_x)}{g'(c_x)}\to\ell$, e con esso $\dfrac{f(x)}{g(x)}$. Dimostrazione completa nella §3.

> **Nota d'uso (metodo d'esame).** Negli appunti di Villanacci de l'Hôpital è usato con **parsimonia**: quando il limite si risolve più rapidamente con le equivalenze asintotiche e i limiti notevoli (vedi la lezione *Limiti notevoli e asintoti*), quella è la strada preferita, riservando de l'Hôpital ai casi in cui gli sviluppi non sono immediati. Le due strade portano allo **stesso** risultato: è una scelta di efficienza, non di correttezza.

---

## 3. Dimostrazioni

### 3.1 Teorema di Fermat

**Ipotesi.** $c$ interno, $f$ ha in $c$ un massimo locale (il caso del minimo è simmetrico), $f'(c)$ esiste.

**Dimostrazione.** Poiché $c$ è un massimo locale, per $h$ abbastanza piccolo si ha $f(c+h)\le f(c)$, cioè $f(c+h)-f(c)\le 0$. Consideriamo il rapporto incrementale da destra e da sinistra.

*Da destra* ($h>0$): $\dfrac{f(c+h)-f(c)}{h}\le 0$, perché numeratore $\le 0$ e denominatore $>0$. Passando al limite, la derivata destra soddisfa $f'_+(c)\le 0$.

*Da sinistra* ($h<0$): $\dfrac{f(c+h)-f(c)}{h}\ge 0$, perché numeratore $\le 0$ e denominatore $<0$. Quindi $f'_-(c)\ge 0$.

Poiché $f'(c)$ esiste, le due derivate laterali coincidono: $f'(c)=f'_+(c)=f'_-(c)$. Ma allora $f'(c)\le 0$ e $f'(c)\ge 0$ simultaneamente, da cui $f'(c)=0$. $\blacksquare$

*Commento.* Il fulcro è che l'esistenza della derivata **incolla** le due disuguaglianze opposte in un'unica uguaglianza. È qui che l'ipotesi di derivabilità lavora davvero.

### 3.2 Teorema di Rolle

**Ipotesi.** $f$ continua su $[a,b]$, derivabile su $(a,b)$, $f(a)=f(b)$.

**Passo 1 — Estremi assoluti (Weierstrass).** Essendo $f$ continua sul compatto $[a,b]$, esistono il minimo $m=\min_{[a,b]}f$ e il massimo $M=\max_{[a,b]}f$, entrambi raggiunti.

**Passo 2 — Caso costante.** Se $m=M$, allora $f$ è costante su $[a,b]$: $f(x)=m$ per ogni $x$. Dunque $f'(x)=0$ ovunque e qualunque $c\in(a,b)$ va bene.

**Passo 3 — Caso non costante.** Se $m<M$, almeno uno dei due valori è diverso da $f(a)=f(b)$. Supponiamo sia $M\neq f(a)$ (altrimenti si ragiona su $m$). Il massimo $M$ non può essere raggiunto in $a$ né in $b$ (dove $f$ vale $f(a)=f(b)\neq M$), quindi è raggiunto in un punto **interno** $c\in(a,b)$.

**Passo 4 — Fermat.** In $c$ la funzione ha un massimo interno ed è derivabile; per il teorema di Fermat, $f'(c)=0$. $\blacksquare$

### 3.3 Teorema di Lagrange

**Ipotesi.** $f$ continua su $[a,b]$, derivabile su $(a,b)$.

**Costruzione della funzione ausiliaria.** Sia $r(x)=f(a)+\dfrac{f(b)-f(a)}{b-a}(x-a)$ la retta per gli estremi, e poniamo
$$
g(x)=f(x)-r(x).
$$

**Verifica delle ipotesi di Rolle per $g$.**
- $g$ è continua su $[a,b]$ e derivabile su $(a,b)$, come differenza di $f$ (per ipotesi) e di un polinomio di primo grado (sempre regolare).
- $g(a)=f(a)-r(a)=f(a)-f(a)=0$.
- $g(b)=f(b)-r(b)=f(b)-\Big(f(a)+\tfrac{f(b)-f(a)}{b-a}(b-a)\Big)=f(b)-f(b)=0$.

Quindi $g(a)=g(b)=0$: Rolle è applicabile a $g$.

**Applicazione di Rolle e conclusione.** Esiste $c\in(a,b)$ con $g'(c)=0$. Ma $g'(x)=f'(x)-r'(x)=f'(x)-\dfrac{f(b)-f(a)}{b-a}$, dunque
$$
g'(c)=0\ \Longrightarrow\ f'(c)=\frac{f(b)-f(a)}{b-a}. \qquad\blacksquare
$$

### 3.4 Teorema di Cauchy

**Ipotesi.** $f,g$ continue su $[a,b]$, derivabili su $(a,b)$, $g'(x)\neq 0$ su $(a,b)$.

**Osservazione preliminare.** $g(b)\neq g(a)$: se fosse $g(a)=g(b)$, per Rolle esisterebbe un punto con $g'=0$, contro l'ipotesi. La frazione a destra è quindi ben definita.

**Funzione ausiliaria.** Poniamo
$$
h(x)=\big(f(b)-f(a)\big)\,g(x)-\big(g(b)-g(a)\big)\,f(x).
$$
Questa combinazione è costruita apposta perché i termini agli estremi si cancellino. Verifichiamo:
$$
h(a)=\big(f(b)-f(a)\big)g(a)-\big(g(b)-g(a)\big)f(a)=f(b)g(a)-g(b)f(a),
$$
$$
h(b)=\big(f(b)-f(a)\big)g(b)-\big(g(b)-g(a)\big)f(b)=-f(a)g(b)+g(a)f(b),
$$
e i due risultati coincidono: $h(a)=h(b)$.

**Rolle su $h$.** $h$ è continua su $[a,b]$, derivabile su $(a,b)$ e $h(a)=h(b)$: esiste $c\in(a,b)$ con $h'(c)=0$. Poiché $h'(x)=\big(f(b)-f(a)\big)g'(x)-\big(g(b)-g(a)\big)f'(x)$,
$$
\big(f(b)-f(a)\big)g'(c)=\big(g(b)-g(a)\big)f'(c).
$$
Dividendo per $g'(c)\,\big(g(b)-g(a)\big)\neq 0$ si ottiene la tesi
$$
\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}. \qquad\blacksquare
$$

### 3.5 Regola di de l'Hôpital (caso $\tfrac{0}{0}$, $x\to a$ finito)

**Ipotesi.** $f,g$ derivabili in un intorno destro-sinistro di $a$ (escluso $a$), $g'\neq 0$ lì, $\lim_{x\to a}f(x)=\lim_{x\to a}g(x)=0$, e $\displaystyle\lim_{x\to a}\frac{f'(x)}{g'(x)}=\ell$.

**Prolungamento per continuità.** Ridefiniamo (o poniamo) $f(a)=g(a)=0$; così $f,g$ diventano continue in $a$ e possiamo applicare Cauchy su intervalli con estremo $a$.

**Applicazione di Cauchy.** Preso $x$ nell'intorno, $x\neq a$, Cauchy su $[a,x]$ (o $[x,a]$) fornisce un punto $c_x$ *strettamente compreso* tra $a$ e $x$ tale che
$$
\frac{f(x)}{g(x)}=\frac{f(x)-f(a)}{g(x)-g(a)}=\frac{f'(c_x)}{g'(c_x)}.
$$

**Passaggio al limite.** Quando $x\to a$, poiché $c_x$ è compreso tra $a$ e $x$, per il teorema del confronto $c_x\to a$. Allora
$$
\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(c_x)}{g'(c_x)}=\lim_{t\to a}\frac{f'(t)}{g'(t)}=\ell. \qquad\blacksquare
$$

*Commento.* La dimostrazione mostra con chiarezza **perché serve l'esistenza del limite di $f'/g'$**: è lui a fornire il valore $\ell$ verso cui tutto converge. Se $f'/g'$ oscilla senza limite, il ragionamento si spezza — ed è la ragione dell'avvertenza nell'enunciato. Il caso $\tfrac{\infty}{\infty}$ e il caso $a=\pm\infty$ si trattano con adattamenti tecnici (sostituzione $x=1/t$ per l'infinito) che non cambiano l'idea di fondo.

---

## 4. Esempi

Gli esempi crescono in difficoltà, dai controlli diretti sugli enunciati fino alle forme indeterminate più insidiose. Gli errori tipici sono segnalati **in linea** dove è naturale incontrarli.

### Esempio 1 — Verifica di Rolle (introduttivo)

$f(x)=x^2-4x+3$ su $[1,3]$. Controlliamo le ipotesi: $f$ è un polinomio (continua e derivabile ovunque) e $f(1)=1-4+3=0=f(3)=9-12+3$. Rolle si applica. Cerchiamo $c$: $f'(x)=2x-4=0\Rightarrow x=2\in(1,3)$. Come previsto, $f'(2)=0$. ✓

### Esempio 2 — Punto di Lagrange (introduttivo)

$f(x)=x^3$ su $[0,2]$. Rapporto incrementale medio: $\dfrac{f(2)-f(0)}{2-0}=\dfrac{8}{2}=4$. Imponiamo $f'(c)=3c^2=4\Rightarrow c=\dfrac{2}{\sqrt 3}\approx 1.155\in(0,2)$. ✓ La tangente in $c$ è parallela alla corda.

> **⚠️ Errore da evitare.** Rolle richiede *esplicitamente* $f(a)=f(b)$. Su $[0,2]$ questa funzione ha $f(0)=0\neq 8=f(2)$: **non** possiamo aspettarci $f'(c)=0$. Vale Lagrange, non Rolle. Confondere i due teoremi è l'errore più comune: Rolle è il caso particolare a corda orizzontale.

### Esempio 3 — L'ipotesi di derivabilità non è un dettaglio (intermedio)

$f(x)=|x|$ su $[-1,1]$: $f(-1)=f(1)=1$, quindi la terza ipotesi di Rolle è soddisfatta. Eppure **non** esiste $c$ con $f'(c)=0$: la derivata vale $-1$ per $x<0$ e $+1$ per $x>0$, non si annulla mai. Nessuna contraddizione: $f$ non è derivabile in $x=0$, quindi Rolle *non è applicabile*. L'esempio mostra che ogni ipotesi è portante.

### Esempio 4 — de l'Hôpital, forma $\tfrac{0}{0}$ (intermedio)

$$
\lim_{x\to 0}\frac{\sin x}{x}\quad\Big(\text{forma }\tfrac{0}{0}\Big)\ \stackrel{\text{H}}{=}\ \lim_{x\to 0}\frac{\cos x}{1}=1.
$$

Ritroviamo il limite notevole per pura derivazione.

> **⚠️ Circolarità da conoscere.** Questo "trucco" è elegante ma logicamente *circolare* se la derivata di $\sin x$ è stata a sua volta ricavata usando $\lim_{x\to 0}\tfrac{\sin x}{x}=1$ (come si fa di solito). Per una *prima* dimostrazione di quel limite serve la via geometrica (squeeze); de l'Hôpital è legittimo qui solo se hai già stabilito $(\sin x)'=\cos x$ per altra via.

### Esempio 5 — de l'Hôpital, forma $\tfrac{\infty}{\infty}$ (intermedio)

$$
\lim_{x\to+\infty}\frac{\ln x}{x}\ \stackrel{\text{H}}{=}\ \lim_{x\to+\infty}\frac{1/x}{1}=0.
$$

Il logaritmo cresce più lentamente di qualsiasi potenza positiva: è la gerarchia degli infiniti, dimostrata in una riga.

### Esempio 6 — Applicazione ripetuta (intermedio)

$$
\lim_{x\to 0}\frac{e^{x}-1-x}{x^{2}}\ \stackrel{\text{H}}{=}\ \lim_{x\to 0}\frac{e^{x}-1}{2x}\ \stackrel{\text{H}}{=}\ \lim_{x\to 0}\frac{e^{x}}{2}=\frac12.
$$

Ogni passaggio richiede di **ricontrollare** che si tratti ancora di una forma indeterminata: dopo la prima derivazione siamo di nuovo a $\tfrac{0}{0}$, dopo la seconda no (numeratore $\to 1$), e ci fermiamo.

### Esempio 7 — Forma $0\cdot\infty$ (avanzato)

$$
\lim_{x\to 0^{+}} x\ln x.
$$
La riscriviamo come quoziente per creare l'indeterminazione trattabile:
$$
x\ln x=\frac{\ln x}{1/x}\quad\Big(\text{forma }\tfrac{-\infty}{+\infty}\Big)\ \stackrel{\text{H}}{=}\ \frac{1/x}{-1/x^{2}}=-x\ \longrightarrow\ 0.
$$

> **⚠️ Scelta della riscrittura.** Si poteva scrivere anche $\dfrac{x}{1/\ln x}$, ma la derivata di $1/\ln x$ è scomoda. Regola pratica: manda a denominatore il fattore la cui derivata *semplifica* l'espressione. Una scelta infelice non è sbagliata, ma può innescare catene di de l'Hôpital che non finiscono mai.

### Esempio 8 — Forma $1^{\infty}$ (avanzato)

$$
\lim_{x\to 0}(1+x)^{1/x}.
$$
Passiamo al logaritmo: $(1+x)^{1/x}=e^{\frac{1}{x}\ln(1+x)}$. L'esponente è una forma $\tfrac{0}{0}$:
$$
\lim_{x\to 0}\frac{\ln(1+x)}{x}\ \stackrel{\text{H}}{=}\ \lim_{x\to 0}\frac{1/(1+x)}{1}=1.
$$
Per continuità dell'esponenziale, il limite cercato è $e^{1}=e$. Ritroviamo la definizione del numero di Nepero.

### Esempio 9 — Forma $\infty-\infty$ (avanzato)

$$
\lim_{x\to 1}\left(\frac{1}{\ln x}-\frac{1}{x-1}\right).
$$
Denominatore comune per creare un unico quoziente:
$$
\frac{(x-1)-\ln x}{(x-1)\ln x}\quad\Big(\text{forma }\tfrac{0}{0}\Big).
$$
Derivando numeratore e denominatore: num. $\to 1-\tfrac1x$, den. $\to \ln x+\tfrac{x-1}{x}$; ancora $\tfrac00$. Seconda applicazione: num. $\tfrac{1}{x^{2}}$, den. $\tfrac{1}{x}+\tfrac{1}{x^{2}}$, e per $x\to 1$
$$
\frac{1}{1+1}=\frac12.
$$

### Esempio 10 — Disuguaglianza via Lagrange (applicativo)

Dimostriamo che $|\sin b-\sin a|\le|b-a|$ per ogni $a,b\in\mathbb{R}$. Applichiamo Lagrange a $\sin$ su $[a,b]$: esiste $c$ tra $a$ e $b$ con $\sin b-\sin a=\cos(c)\,(b-a)$. Passando ai moduli, $|\sin b-\sin a|=|\cos c|\,|b-a|\le|b-a|$, poiché $|\cos c|\le 1$. $\blacksquare$ È la **1-lipschitzianità** del seno, alla base della stabilità di molti metodi numerici.

### Visualizzazione — tangente parallela alla corda

Il grafico mostra $f(x)=x^3-3x$ (in cui il fenomeno di Lagrange è ben visibile) insieme alla sua derivata $f'(x)=3x^2-3$: i punti $c$ garantiti da Lagrange su un intervallo $[a,b]$ sono quelli in cui $f'(c)$ eguaglia il rapporto incrementale medio su quell'intervallo.

```plot
{
  "title": "Lagrange: dove la tangente è parallela alla corda",
  "fn": "x*x*x - 3*x",
  "fn2": "3*x*x - 3",
  "domain": [-2.5, 2.5],
  "yDomain": [-5, 5],
  "label1": "f(x) = x³ − 3x",
  "label2": "f'(x) = 3x² − 3"
}
```

### Interattività — monotonia dai Corollari di Lagrange

Variando il parametro $a$, osserva la funzione $f(x)=\sin x + a\,x$ e la sua derivata $f'(x)=\cos x + a$. Quando $a>1$ la derivata resta sempre positiva ($\cos x+a>0$): per il Corollario 2, $f$ è strettamente crescente. Quando $a<-1$ la derivata è sempre negativa e $f$ decresce. Nella fascia $-1\le a\le 1$ la derivata cambia segno e compaiono massimi e minimi locali (dove $f'=0$, cioè Fermat).

```slider
{
  "title": "Monotonia di f(x) = sin(x) + a·x al variare di a",
  "fn": "Math.sin(x) + a*x",
  "fn2": "Math.cos(x) + a",
  "domain": [-6.28, 6.28],
  "yDomain": [-8, 8],
  "pname": "a",
  "pmin": -2,
  "pmax": 2,
  "pdefault": 0,
  "pstep": 0.1,
  "plabel": "Coefficiente lineare a",
  "label1": "f(x) = sin(x) + a·x",
  "label2": "f'(x) = cos(x) + a"
}
```

---

## 5. Collegamenti e riepilogo

### Collegamenti

I corollari sulla monotonia (§2.4) sono il motore dello **studio di funzione** (lezione *Studio di funzione*): il segno di $f'$ determina crescenza e decrescenza, e i punti in cui $f'=0$ — i punti stazionari di Fermat — sono i candidati a massimi e minimi. Il teorema di Cauchy e de l'Hôpital preparano il terreno alla **formula di Taylor** (lezione *Polinomi di Taylor*), dove la versione con resto di Lagrange generalizza il valor medio agli ordini superiori: Lagrange è letteralmente il caso $n=0$ di Taylor con resto. Le forme indeterminate qui risolte con de l'Hôpital si intrecciano con i **limiti notevoli e le equivalenze asintotiche** (lezione *Limiti notevoli e asintoti*), spesso via più rapida ed elegante.

### Applicazioni

In **fisica**, il valor medio giustifica la propagazione degli errori di misura: $\Delta f\approx f'(c)\,\Delta x$ per un opportuno $c$ nell'intervallo di incertezza, permettendo di stimare l'errore assoluto massimo con rigore. In **analisi numerica**, la convergenza quadratica del metodo di Newton–Raphson si dimostra con una versione del teorema del valor medio: senza di esso non si potrebbero dare garanzie sull'accuratezza delle approssimazioni. In **economia**, Lagrange garantisce che, se il costo totale $C(q)$ cresce da $C(0)$ a $C(Q)$, esiste un livello di produzione $q^*\in(0,Q)$ in cui il costo marginale istantaneo $C'(q^*)$ eguaglia il costo marginale medio — un risultato usato per localizzare punti di efficienza produttiva.

### Idee fondamentali

Il filo conduttore è la **catena logica** Weierstrass → Fermat → Rolle → Lagrange → Cauchy → de l'Hôpital: ogni teorema si costruisce sul precedente costruendo una *funzione ausiliaria* che riconduce il caso generale a un caso già noto (è lo stesso trucco, ripetuto). Tutti i teoremi di questa famiglia sono di **esistenza**: garantiscono che un punto $c$ esiste, senza localizzarlo e senza affermarne l'unicità. Il ponte locale-globale che essi realizzano è ciò che rende lecito lo studio di funzione.

### Formule chiave

| Teorema | Ipotesi aggiuntive (oltre a continuità su $[a,b]$ e derivabilità su $(a,b)$) | Tesi |
|---|---|---|
| Fermat | $c$ estremo locale **interno**, $f'(c)$ esiste | $f'(c)=0$ |
| Rolle | $f(a)=f(b)$ | $\exists\,c\in(a,b):\ f'(c)=0$ |
| Lagrange | — | $\exists\,c:\ f'(c)=\dfrac{f(b)-f(a)}{b-a}$ |
| Cauchy | $g'(x)\neq 0$ | $\exists\,c:\ \dfrac{f'(c)}{g'(c)}=\dfrac{f(b)-f(a)}{g(b)-g(a)}$ |
| de l'Hôpital | forma $\tfrac{0}{0}$ o $\tfrac{\infty}{\infty}$, $g'\neq0$ | $\displaystyle\lim\frac{f}{g}=\lim\frac{f'}{g'}$ (se quest'ultimo esiste) |

| Forma indeterminata | Come ridurla a de l'Hôpital |
|---|---|
| $\tfrac{0}{0}$, $\tfrac{\infty}{\infty}$ | diretta |
| $0\cdot\infty$ | $f\cdot g=\dfrac{f}{1/g}$ |
| $\infty-\infty$ | denominatore comune |
| $0^0,\ 1^\infty,\ \infty^0$ | $f^{\,g}=e^{\,g\ln f}$ |

---

## 6. Esercizi

<details>
<summary>Esercizio 1 — Verifica di Rolle (introduttivo)</summary>

**Testo.** Verifica le ipotesi di Rolle per $f(x)=x^3-x$ su $[-1,1]$ e trova tutti i punti $c$.

**Soluzione.** $f(-1)=-1+1=0=f(1)=1-1$; $f$ è un polinomio, continua e derivabile ovunque: ipotesi soddisfatte. $f'(x)=3x^2-1=0\Rightarrow x=\pm\tfrac{1}{\sqrt3}\approx\pm0.577$, entrambi in $(-1,1)$. Ci sono **due** punti di Rolle. ✓
</details>

<details>
<summary>Esercizio 2 — Punto di Lagrange (introduttivo)</summary>

**Testo.** Trova il punto $c$ garantito da Lagrange per $f(x)=\sqrt{x}$ su $[1,9]$.

**Soluzione.** $\dfrac{f(9)-f(1)}{9-1}=\dfrac{3-1}{8}=\dfrac14$. Con $f'(x)=\dfrac{1}{2\sqrt x}$, imponiamo $\dfrac{1}{2\sqrt c}=\dfrac14\Rightarrow\sqrt c=2\Rightarrow c=4\in(1,9)$. ✓
</details>

<details>
<summary>Esercizio 3 — Dove Rolle non si applica (introduttivo)</summary>

**Testo.** La funzione $f(x)=1-x^{2/3}$ su $[-1,1]$ ha $f(-1)=f(1)=0$. Esiste $c$ con $f'(c)=0$? Spiega.

**Soluzione.** $f'(x)=-\tfrac23 x^{-1/3}$ non si annulla mai e non è definita in $x=0$. $f$ non è derivabile in $0$ (cuspide): Rolle non è applicabile, e infatti non esiste alcun $c$ con $f'(c)=0$. Nessuna contraddizione: manca l'ipotesi di derivabilità. ✓
</details>

<details>
<summary>Esercizio 4 — de l'Hôpital, forma 0/0 ripetuta (standard)</summary>

**Testo.** Calcola $\displaystyle\lim_{x\to 0}\frac{e^{x}-1-x-x^{2}/2}{x^{3}}$.

**Soluzione.** Forma $\tfrac00$; applichiamo tre volte:
$$
\lim_{x\to0}\frac{e^{x}-1-x}{3x^{2}}\stackrel{\text{H}}{=}\lim_{x\to0}\frac{e^{x}-1}{6x}\stackrel{\text{H}}{=}\lim_{x\to0}\frac{e^{x}}{6}=\frac16.
$$
(Confronta con lo sviluppo di Taylor $e^x=1+x+\tfrac{x^2}{2}+\tfrac{x^3}{6}+\dots$: il coefficiente di $x^3$ è proprio $\tfrac16$.) ✓
</details>

<details>
<summary>Esercizio 5 — Gerarchia degli infiniti (standard)</summary>

**Testo.** Calcola $\displaystyle\lim_{x\to+\infty}\frac{x^{2}}{e^{x}}$.

**Soluzione.** Forma $\tfrac{\infty}{\infty}$: $\dfrac{x^2}{e^x}\stackrel{\text{H}}{=}\dfrac{2x}{e^x}\stackrel{\text{H}}{=}\dfrac{2}{e^x}\to 0$. L'esponenziale batte ogni potenza. ✓
</details>

<details>
<summary>Esercizio 6 — Forma 0·∞ (standard)</summary>

**Testo.** Calcola $\displaystyle\lim_{x\to+\infty} x\,e^{-x}$.

**Soluzione.** Riscrivi come $\dfrac{x}{e^{x}}$, forma $\tfrac{\infty}{\infty}$: $\stackrel{\text{H}}{=}\dfrac{1}{e^{x}}\to 0$. ✓
</details>

<details>
<summary>Esercizio 7 — Forma 1^∞ (avanzato)</summary>

**Testo.** Calcola $\displaystyle\lim_{x\to+\infty}\left(1+\frac{3}{x}\right)^{x}$.

**Soluzione.** Scrivi $e^{x\ln(1+3/x)}$ e studia l'esponente:
$$
x\ln\!\Big(1+\tfrac3x\Big)=\frac{\ln(1+3/x)}{1/x}\stackrel{\text{H}}{=}\frac{\dfrac{-3/x^{2}}{1+3/x}}{-1/x^{2}}=\frac{3}{1+3/x}\to 3.
$$
Il limite è $e^{3}$. (Coerente con $\lim_{x\to\infty}(1+a/x)^x=e^a$.) ✓
</details>

<details>
<summary>Esercizio 8 — Disuguaglianza fondamentale (avanzato)</summary>

**Testo.** Dimostra che $e^{x}\ge 1+x$ per ogni $x\in\mathbb{R}$, con uguaglianza solo in $x=0$.

**Soluzione.** Sia $f(x)=e^{x}-1-x$, con $f(0)=0$ e $f'(x)=e^{x}-1$. Per $x>0$: $f'(x)>0$, quindi (Corollario 2) $f$ è strettamente crescente e $f(x)>f(0)=0$. Per $x<0$: $f'(x)<0$, $f$ strettamente decrescente, quindi avvicinandosi a $0$ da sinistra $f$ scende verso $0$, cioè $f(x)>0$. Dunque $f(x)\ge 0$ ovunque, con $=0$ solo in $x=0$. $\blacksquare$
</details>

<details>
<summary>Esercizio 9 — Forma ∞−∞ (avanzato)</summary>

**Testo.** Calcola $\displaystyle\lim_{x\to 0^{+}}\left(\frac{1}{x}-\frac{1}{\sin x}\right)$.

**Soluzione.** Denominatore comune: $\dfrac{\sin x-x}{x\sin x}$, forma $\tfrac00$. Usando $\sin x\sim x$ al denominatore, $x\sin x\sim x^2$; oppure due de l'Hôpital:
$$
\frac{\sin x-x}{x\sin x}\stackrel{\text{H}}{=}\frac{\cos x-1}{\sin x+x\cos x}\stackrel{\text{H}}{=}\frac{-\sin x}{2\cos x-x\sin x}\ \longrightarrow\ \frac{0}{2}=0.
$$ ✓
</details>

<details>
<summary>Esercizio 10 — Quando de l'Hôpital NON conclude (avanzato)</summary>

**Testo.** Prova ad applicare de l'Hôpital a $\displaystyle\lim_{x\to+\infty}\frac{x+\sin x}{x}$. Cosa succede? Qual è il vero valore del limite?

**Soluzione.** Forma $\tfrac{\infty}{\infty}$. Derivando: $\dfrac{1+\cos x}{1}=1+\cos x$, che **non ha limite** per $x\to+\infty$ (oscilla tra $0$ e $2$). De l'Hôpital quindi *non permette di concludere* — ma questo **non** significa che il limite originale non esista. Anzi: $\dfrac{x+\sin x}{x}=1+\dfrac{\sin x}{x}\to 1+0=1$. Morale: se il limite del rapporto delle derivate non esiste, si torna ai metodi elementari. $\blacksquare$
</details>
