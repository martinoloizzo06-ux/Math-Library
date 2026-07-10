---
id: analisi-06-derivata-definizione
titolo: "Derivata — definizione e significato geometrico"
materia: analisi
argomento: "Calcolo differenziale (una variabile)"
modulo: "Definizione e interpretazione geometrica"
livello: universitario
stato: completa
versione: "2.0"
data_ultima_rielaborazione: "2026-07-10"

prerequisiti:
  - analisi-01-limite-intuitivo
  - analisi-02-limite-epsilon-delta
  - analisi-04-continuita

collegamenti:
  - analisi-07-regole-derivazione
  - analisi-09-studio-funzione
  - analisi-10-taylor

fonti_integrate:
  - id_fonte: openstax-calculus-1
    ruolo: primaria
    sezioni_coperte: "Cap. 3.1–3.2, 3.4, 4.2"
    note: "percorso didattico secante→tangente, velocità istantanea, analisi marginale, approssimazione lineare"
  - id_fonte: villanacci-math1
    ruolo: appunti-prof
    sezioni_coperte: "Cap. 9 (Elementi di calcolo differenziale)"
    note: "definizione rigorosa con x₀ interno al dominio, derivate laterali, dimostrazioni complete; precedenza notazionale"
  - id_fonte: villanacci-math2
    ruolo: appunti-prof
    sezioni_coperte: "§16.1 (Differenziabilità)"
    note: "caratterizzazione della derivata come approssimazione lineare e generalizzazione a più variabili"

componenti_usati:
  - plot
  - slider

sezioni_omesse: []

# campi legacy (mantenuti per retrocompatibilità loader)
subject: analisi
topic_it: Calcolo differenziale (una variabile)
topic_en: Differential calculus (one variable)
title_it: Derivata — definizione e significato geometrico
title_en: Derivative — definition and geometric meaning
level: blue
order: 6
source_book: "OpenStax Calculus Vol.1 — Cap. 3; Villanacci Math 1 — Cap. 9"
source_chapter: "Cap. 3 — La derivata"
---

## 1. Motivazione e intuizione

### Il tachimetro: una velocità "in un istante"

Immagina di essere in macchina sull'autostrada. Il tachimetro mostra **120 km/h**. Fermati un attimo su questo fatto, perché è meno ovvio di quanto sembri: che cosa significa avere una velocità *in un istante*?

La velocità che conosciamo dalle scuole è un rapporto: spazio percorso diviso tempo impiegato. Se in 2 ore hai percorso 120 km, la tua velocità **media** è $\frac{120}{2} = 60$ km/h. Ma questo numero descrive l'intero viaggio, non un singolo momento: potresti essere stato fermo in coda per un'ora e aver viaggiato a 120 km/h per l'altra. La media "spalma" l'informazione e perde tutto il dettaglio.

Per avvicinarti a ciò che il tachimetro misura, puoi restringere l'intervallo di osservazione. Chiamiamo $s(t)$ la posizione dell'auto al tempo $t$. La velocità media tra l'istante $t_0$ e l'istante $t_0 + h$ è:

$$v_{\text{media}} = \frac{s(t_0 + h) - s(t_0)}{h}$$

Leggiamo questa formula pezzo per pezzo:

- $s(t_0 + h)$ — dove si trova l'auto **dopo** un intervallo di durata $h$;
- $s(t_0)$ — dove si trovava l'auto all'istante iniziale $t_0$;
- $s(t_0+h) - s(t_0)$ — lo **spazio percorso** durante l'intervallo;
- $h$ — la **durata** dell'intervallo;
- il rapporto — "quanti chilometri per ogni ora", cioè la velocità media su quell'intervallo.

Se $h$ è un'ora, ottieni una media grossolana. Se $h$ è un minuto, la media è già molto più vicina a ciò che stavi facendo "in quel momento". Se $h$ è un decimo di secondo, la media è praticamente indistinguibile dalla velocità istantanea. L'idea decisiva è: **la velocità istantanea è il valore a cui tendono le velocità medie quando l'intervallo di osservazione si restringe a zero.**

$$v(t_0) = \lim_{h \to 0} \frac{s(t_0 + h) - s(t_0)}{h}$$

Questo limite — quando esiste finito — è la **derivata** di $s$ in $t_0$. Il tachimetro, fisicamente, non fa altro che calcolare rapporti su intervalli piccolissimi: un'approssimazione concreta di questo limite.

### Lo stesso problema, in geometria: la tangente

C'è un secondo problema, apparentemente lontanissimo, che porta alla stessa identica costruzione. Data una curva $y = f(x)$ e un punto $P$ su di essa, come si definisce la **retta tangente** alla curva in $P$?

Per una circonferenza la risposta è classica (la retta che tocca la curva in un solo punto), ma per una curva generica quella definizione non funziona: una retta può toccare una parabola in un solo punto senza esserne tangente (una retta verticale, ad esempio), e una tangente può intersecare la curva anche altrove.

L'idea giusta è dinamica: prendi un secondo punto $Q$ sulla curva, traccia la retta **secante** per $P$ e $Q$, e fai scivolare $Q$ verso $P$. La secante ruota, e se al limite si stabilizza su una posizione precisa, quella è la tangente. La pendenza della secante è esattamente un rapporto del tipo $\frac{f(a+h)-f(a)}{h}$ — la stessa espressione della velocità media. **Velocità istantanea e pendenza della tangente sono lo stesso oggetto matematico.**

### Perché questo concetto è ovunque

La derivata risponde alla domanda: *con che rapidità sta cambiando una quantità, in un preciso istante?* Ogni disciplina quantitativa ha bisogno di questa domanda:

- **Fisica** — velocità e accelerazione sono derivate della posizione; forza, corrente, potenza sono tutte derivate;
- **Economia** — il *costo marginale* (quanto costa produrre un'unità in più) è la derivata della funzione di costo; l'*elasticità* della domanda è costruita con derivate;
- **Biologia** — il tasso di crescita di una popolazione è la derivata della sua numerosità;
- **Machine learning** — l'addestramento di una rete neurale segue il *gradiente* (un vettore di derivate) della funzione di perdita.

Storicamente, la derivata nasce nel Seicento proprio dai due problemi visti sopra: Newton la sviluppa per la meccanica (velocità), Leibniz per la geometria (tangenti). Le loro notazioni convivono ancora oggi, e le vedremo entrambe.

In questa lezione costruiamo la derivata dalle fondamenta: il rapporto incrementale, la definizione formale come limite (in due forme equivalenti), le derivate laterali, la retta tangente, il legame con la continuità, la classificazione completa dei punti in cui la derivata *non* esiste, e infine la lettura più profonda: la derivata come **migliore approssimazione lineare** di una funzione — la chiave che apre la porta al calcolo in più variabili.

---

## 2. Prerequisiti

Prima di procedere, assicurati di avere questi concetti chiari:

- **Limite di una funzione — idea intuitiva** (Analisi, lezione 1): la derivata **è** un limite; senza la nozione di limite la definizione non ha senso. Serve in particolare l'idea di "valore a cui tende" un'espressione quando la variabile si avvicina a un punto.
- **Limite — definizione ε-δ** (Analisi, lezione 2): per le dimostrazioni rigorose (derivabilità ⇒ continuità, unicità dell'approssimazione lineare) useremo le proprietà dei limiti: algebra dei limiti, limiti laterali, teorema del confronto.
- **Continuità** (Analisi, lezione 4): il legame tra derivabilità e continuità è uno dei teoremi centrali della lezione; serve la definizione di continuità in un punto ($\lim_{x \to a} f(x) = f(a)$).
- **Algebra e manipolazione di espressioni** (Matematica di base): sviluppo di $(x+h)^2$ e $(x+h)^n$, razionalizzazione con il coniugato ($\sqrt{a}-\sqrt{b}$), semplificazione di frazioni algebriche. Ogni calcolo di derivata dalla definizione è un esercizio di algebra sui limiti.
- **Funzioni elementari** (Matematica di base): valore assoluto e sua definizione a tratti, radici, funzioni definite a tratti; utile avere presente il grafico di $x^2$, $|x|$, $\sqrt{x}$, $\sin x$.

Se uno di questi punti è debole, apri prima la lezione corrispondente: i box dei prerequisiti in cima alla pagina sono cliccabili.

---

## 3. Teoria completa

### 3.1 Il rapporto incrementale

Partiamo da una funzione $f$ definita (almeno) in un intorno di un punto $a$, e prendiamo un secondo punto vicino: $x = a + h$, dove $h \neq 0$ è un **incremento** — un numero piccolo, positivo o negativo, che misura di quanto ci spostiamo da $a$.

La variazione della funzione tra i due punti è:

$$\Delta f = f(a + h) - f(a)$$

Il **rapporto incrementale** di $f$ in $a$, relativo all'incremento $h$, è:

$$R(h) = \frac{f(a+h) - f(a)}{h}$$

Leggiamolo simbolo per simbolo:

- $f(a+h)$ — il valore della funzione nel punto spostato;
- $f(a)$ — il valore nel punto di partenza;
- $f(a+h) - f(a)$ — la **variazione verticale**: quanto sale (o scende, se negativa) il grafico;
- $h$ — la **variazione orizzontale**: lo spostamento della variabile indipendente;
- il rapporto — "quante unità varia $f$ per ogni unità di variazione di $x$": un **tasso di variazione medio** sull'intervallo tra $a$ e $a+h$.

Perché proprio un *rapporto*? Perché la variazione $\Delta f$ da sola non basta: una funzione può variare di 10 unità su un intervallo lungo 100 (variazione lenta) o su un intervallo lungo 0.1 (variazione violenta). Dividere per $h$ normalizza la variazione rispetto alla lunghezza dell'intervallo e rende i tassi confrontabili.

**Significato geometrico.** I punti $A = (a, f(a))$ e $B = (a+h, f(a+h))$ stanno entrambi sul grafico di $f$. La retta che li congiunge — la **secante** — ha pendenza:

$$m_{AB} = \frac{\text{variazione verticale}}{\text{variazione orizzontale}} = \frac{f(a+h) - f(a)}{(a+h) - a} = \frac{f(a+h)-f(a)}{h} = R(h)$$

Il rapporto incrementale *è* la pendenza della secante. Man mano che $h \to 0$, il punto $B$ scivola lungo il grafico verso $A$ e la secante ruota attorno ad $A$: se si stabilizza su una posizione limite, quella è la tangente.

**Tabella numerica per $f(x) = x^2$, $a = 1$.** Calcoliamo $R(h) = \frac{(1+h)^2 - 1}{h}$ per valori di $h$ sempre più piccoli, da entrambi i lati:

| $h$ | $R(h)$ (da destra) | $h$ | $R(h)$ (da sinistra) |
|-----|--------------------|-----|----------------------|
| 1.0 | 3.000 | −1.0 | 1.000 |
| 0.5 | 2.500 | −0.5 | 1.500 |
| 0.1 | 2.100 | −0.1 | 1.900 |
| 0.01 | 2.010 | −0.01 | 1.990 |
| 0.001 | 2.001 | −0.001 | 1.999 |
| $\to 0^+$ | $\to$ **2** | $\to 0^-$ | $\to$ **2** |

Da entrambi i lati il rapporto converge allo stesso valore: $2$. Non è un caso che i valori siano così regolari: per $f(x)=x^2$ in $a=1$ vale esattamente $R(h) = \frac{1 + 2h + h^2 - 1}{h} = 2 + h$, quindi la tabella mostra semplicemente $2 + h$ che tende a $2$.

```plot
{
  "fn": "x*x",
  "domain": [-2.5, 2.5],
  "title": "f(x) = x² — la curva su cui costruiremo la derivata"
}
```

### 3.2 La definizione di derivata — due forme equivalenti

**Definizione (forma con $x \to x_0$).** Sia $f : S \to \mathbb{R}$ e sia $x_0$ un punto **interno** a $S$ (cioè esiste un intervallo aperto attorno a $x_0$ tutto contenuto in $S$). La **derivata di $f$ in $x_0$** è:

$$f'(x_0) = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}$$

**purché il limite esista finito**. In tal caso $f$ si dice **derivabile in $x_0$**.

**Definizione (forma con $h \to 0$).** Equivalentemente, ponendo $x = x_0 + h$:

$$\boxed{f'(x_0) = \lim_{h \to 0} \frac{f(x_0+h) - f(x_0)}{h}}$$

Le due forme sono davvero la stessa cosa (lo dimostriamo nella sezione 4.1): la prima guarda "il punto mobile $x$ che si avvicina a $x_0$", la seconda guarda "l'incremento $h$ che si spegne". Nei calcoli espliciti la forma con $h$ è quasi sempre più comoda (l'algebra si semplifica meglio); nelle dimostrazioni teoriche a volte è più naturale la forma con $x$.

Leggiamo la definizione con attenzione, perché ogni parola conta:

1. **"$x_0$ interno a $S$"** — serve che $f$ sia definita *da entrambi i lati* di $x_0$, altrimenti il limite per $h \to 0$ (che coinvolge $h$ sia positivi sia negativi) non avrebbe senso. In un estremo del dominio si può al più parlare di derivata *laterale* (§3.3).
2. **"il limite"** — non un valore del rapporto per qualche $h$ piccolo, ma il limite per $h \to 0$. Il rapporto incrementale per $h = 0.001$ è un'approssimazione, non la derivata.
3. **"esista"** — il limite può non esistere (limiti laterali diversi, come per $|x|$ in $0$), e in tal caso la derivata non esiste.
4. **"finito"** — se il limite esiste ma vale $+\infty$ o $-\infty$, per convenzione (che adottiamo dagli appunti del corso) la funzione **non** è derivabile in quel punto: geometricamente c'è una tangente verticale, ma $f'(x_0)$ non è un numero. Alcuni testi in questo caso scrivono comunque $f'(x_0) = \pm\infty$ come notazione descrittiva; noi la useremo solo per *classificare* i punti di non derivabilità (§3.8).

Nota bene la forma indeterminata: per $h \to 0$ sia il numeratore $f(x_0+h)-f(x_0)$ sia il denominatore $h$ tendono a $0$ (il numeratore tende a 0 se $f$ è continua). La derivata è quindi un limite del tipo $\frac{0}{0}$: il suo valore non è mai ovvio e dipende dalla "gara di velocità" tra numeratore e denominatore. Tutta l'algebra dei calcoli di derivata serve a sciogliere questa indeterminazione.

**Primo esempio completo: $f(x) = x^2$.** Usiamo la forma con $h$, in un generico punto $x$:

$$f'(x) = \lim_{h\to 0} \frac{(x+h)^2 - x^2}{h}$$

*Passo 1 — sviluppo del quadrato:* $(x+h)^2 = x^2 + 2xh + h^2$, quindi il numeratore è $x^2 + 2xh + h^2 - x^2 = 2xh + h^2$.

*Passo 2 — raccoglimento:* $2xh + h^2 = h(2x + h)$.

*Passo 3 — semplificazione:* poiché nel limite $h \to 0$ si considera $h \neq 0$, possiamo dividere numeratore e denominatore per $h$:

$$f'(x) = \lim_{h\to 0} \frac{h(2x+h)}{h} = \lim_{h\to 0} (2x + h)$$

*Passo 4 — calcolo del limite:* $2x + h$ è una funzione continua di $h$, quindi il limite si ottiene per sostituzione: $2x + 0 = 2x$.

$$\bigl(x^2\bigr)' = 2x$$

In $x = 1$: $f'(1) = 2$ — esattamente il valore verso cui convergeva la tabella del §3.1.

### 3.3 Derivate laterali

Il limite nella definizione può essere spezzato nei due limiti laterali, e questo produce due oggetti utilissimi.

**Definizione.** La **derivata destra** e la **derivata sinistra** di $f$ in $x_0$ sono:

$$f'_+(x_0) = \lim_{h \to 0^+} \frac{f(x_0+h) - f(x_0)}{h} \qquad f'_-(x_0) = \lim_{h \to 0^-} \frac{f(x_0+h) - f(x_0)}{h}$$

quando questi limiti esistono finiti. Geometricamente sono le pendenze delle "semitangenti": la direzione con cui il grafico arriva in $x_0$ da destra e da sinistra.

**Criterio di derivabilità.** $f$ è derivabile in $x_0$ **se e solo se** entrambe le derivate laterali esistono finite **e coincidono**:

$$f \text{ derivabile in } x_0 \iff f'_+(x_0) = f'_-(x_0) \in \mathbb{R}$$

e in tal caso $f'(x_0)$ è il valore comune. È la traduzione diretta del teorema sui limiti laterali: un limite esiste se e solo se esistono i due limiti laterali e sono uguali.

Questo criterio è lo strumento standard per studiare la derivabilità delle **funzioni definite a tratti**: nel punto di giunzione si calcolano le due derivate laterali e si confrontano (esempi 4 e 6 della sezione 6).

Le derivate laterali servono anche a dare senso alla derivabilità **agli estremi di un intervallo**: se $f : [a,b] \to \mathbb{R}$, in $a$ ha senso solo $f'_+(a)$ e in $b$ solo $f'_-(b)$. Quando si dice che una funzione è "derivabile su $[a,b]$" si intende derivabile nei punti interni e dotata delle derivate laterali appropriate agli estremi.

### 3.4 La retta tangente

Ora possiamo dare la definizione *ufficiale* di tangente — quella che il problema geometrico del §1 chiedeva.

**Definizione.** Se $f$ è derivabile in $x_0$, la **retta tangente** al grafico di $f$ nel punto $(x_0, f(x_0))$ è la retta:

$$y = f(x_0) + f'(x_0)\,(x - x_0)$$

Leggiamo l'equazione simbolo per simbolo:

- $f(x_0)$ — la "quota" del punto di tangenza: per $x = x_0$ la formula dà $y = f(x_0)$, quindi la retta **passa per il punto** $(x_0, f(x_0))$;
- $f'(x_0)$ — la **pendenza** della retta: per ogni unità di spostamento orizzontale da $x_0$, la retta sale di $f'(x_0)$ unità;
- $(x - x_0)$ — lo spostamento orizzontale dal punto di tangenza.

La struttura è "punto + pendenza × spostamento": il modo più naturale di scrivere una retta quando si conoscono un punto e la pendenza.

Perché questa è la definizione giusta? Perché la pendenza $f'(x_0)$ è *per costruzione* il limite delle pendenze delle secanti: la tangente è la posizione limite delle secanti, esattamente come richiesto dal problema geometrico. Non serve nessuna nozione di "toccare in un solo punto".

**Lettura del segno della pendenza:**

- $f'(x_0) > 0$ — la tangente sale: la funzione è **crescente** nel punto (localmente);
- $f'(x_0) < 0$ — la tangente scende: la funzione è **decrescente** nel punto;
- $f'(x_0) = 0$ — la tangente è **orizzontale**: punto stazionario (candidato massimo, minimo o flesso orizzontale — il criterio per distinguerli è nella lezione sullo studio di funzione).

**Esempio.** Per $f(x) = x^2$ in $x_0 = 1$: $f(1) = 1$, $f'(1) = 2$, quindi la tangente è

$$y = 1 + 2(x - 1) = 2x - 1$$

Nella sezione 7 un grafico interattivo mostra la secante per $(1, 1)$ e $(1+h, (1+h)^2)$ che ruota verso questa tangente quando trascini $h$ verso $0$.

### 3.5 La funzione derivata e le derivate di ordine superiore

Fin qui la derivata è un **numero** associato a un punto: $f'(x_0)$. Ma se $f$ è derivabile in *tutti* i punti di un insieme, possiamo far variare il punto e ottenere una **funzione**.

**Definizione.** Sia $f : S \to \mathbb{R}$ derivabile in ogni punto di $T \subseteq S$. La **funzione derivata** è:

$$f' : T \to \mathbb{R}, \qquad x \mapsto f'(x)$$

È un salto concettuale importante: da "pendenza in un punto" a "funzione che a ogni punto associa la pendenza lì". Ad esempio $(x^2)' = 2x$ non è un numero: è la funzione che dice "in ogni punto $x$, la parabola ha pendenza $2x$" — negativa a sinistra dell'origine, nulla nell'origine, positiva a destra.

Essendo $f'$ a sua volta una funzione, possiamo chiederci se *lei* è derivabile. Se lo è, la sua derivata si chiama **derivata seconda**:

$$f''(x) = \bigl(f'\bigr)'(x)$$

e così via: la **derivata $n$-esima** $f^{(n)}$ è definita ricorsivamente come la derivata della derivata $(n-1)$-esima:

$$f^{(n)}(x) = \bigl(f^{(n-1)}\bigr)'(x), \qquad f^{(0)} = f$$

**Interpretazione fisica.** Se $s(t)$ è la posizione, $s'(t) = v(t)$ è la velocità e $s''(t) = a(t)$ è l'accelerazione: "quanto rapidamente cambia la velocità". La derivata seconda ha anche un significato geometrico (la concavità del grafico) che viene sviluppato nella lezione sullo studio di funzione.

**Attenzione a un punto sottile:** l'esistenza di $f'(x_0)$ in un punto non garantisce nulla sulla regolarità di $f'$ *come funzione* vicino a $x_0$: esistono funzioni derivabili ovunque la cui derivata è discontinua (l'esempio $x^2\sin(1/x)$, dimostrazione 4.5). "Derivabile" e "derivata continua" sono proprietà diverse — la seconda, più forte, si indica con $f \in C^1$.

### 3.6 Notazioni

Per la derivata convivono tre notazioni storiche, tutte equivalenti. Conoscerle tutte è indispensabile perché ogni disciplina ha la sua preferita.

| Notazione | Nome | Come si legge | Tipico contesto |
|-----------|------|---------------|-----------------|
| $f'(x)$ | Lagrange | "f primo di x" | Matematica, questo corso |
| $\dfrac{df}{dx}$ | Leibniz | "de f su de x" | Fisica, ingegneria, economia |
| $\dot{f}(t)$ | Newton | "f punto" | Meccanica (solo derivate nel tempo) |
| $Df(x)$ | Operatoriale | "D di f" | Testi avanzati, analisi funzionale |

La notazione di **Leibniz** è la più espressiva: $\frac{df}{dx}$ ricorda che la derivata nasce come rapporto $\frac{\Delta f}{\Delta x}$ portato al limite, e $\frac{d}{dx}$ funziona come un **operatore** ("derivare rispetto a $x$") che applicato a $f$ produce $f'$. È insostituibile quando la funzione dipende da più lettere e bisogna dire rispetto a quale si deriva. Il suo difetto: la valutazione in un punto è goffa, e richiede la barra:

$$f'(a) = \left.\frac{df}{dx}\right|_{x=a}$$

Per le derivate di ordine superiore: $f''$, $f'''$, poi $f^{(4)}, f^{(5)}, \dots$ in notazione di Lagrange (le parentesi distinguono $f^{(4)}$, derivata quarta, da $f^4$, quarta potenza); $\frac{d^2f}{dx^2}$, $\frac{d^3f}{dx^3}$ in notazione di Leibniz.

**Convenzione di questa biblioteca** (che segue gli appunti del corso): notazione di Lagrange $f'$ come principale; Leibniz quando serve evidenziare la variabile di derivazione; $\log$ senza base indica il logaritmo naturale.

### 3.7 Derivabilità e continuità

I due concetti centrali dell'analisi in un punto — continuità e derivabilità — non sono indipendenti. Il legame è a senso unico:

**Teorema (derivabilità ⇒ continuità).** Se $f$ è derivabile in $x_0$, allora $f$ è continua in $x_0$.

L'idea intuitiva: se il grafico ha una tangente (non verticale) in un punto, vicino a quel punto il grafico "assomiglia a una retta", e una retta non ha salti. Un salto renderebbe il rapporto incrementale esplosivo: numeratore che non si spegne, denominatore che va a zero.

La dimostrazione completa, passo per passo, è nella sezione 4.2.

**Il viceversa è falso**, ed è uno dei punti su cui è più facile sbagliare. Continuità significa solo "nessun salto"; derivabilità chiede molto di più: "nessun salto **e** nessun cambio brusco di direzione **e** pendenza non verticale". L'esempio canonico è $f(x) = |x|$: perfettamente continua in $0$, ma con uno spigolo che rende impossibile scegliere *una* tangente (dimostrazione 4.3).

La gerarchia da ricordare:

$$\text{derivabile in } x_0 \;\Longrightarrow\; \text{continua in } x_0 \;\Longrightarrow\; \text{definita in } x_0$$

e **nessuna** delle due frecce si può invertire.

Conseguenza pratica utilissima (è la contronominale del teorema): **se $f$ non è continua in $x_0$, è inutile studiare la derivabilità — non può esserci.** Nei punti di salto di una funzione a tratti la derivata non esiste mai, senza bisogno di calcoli.

### 3.8 Dove la derivata non esiste — classificazione dei punti di non derivabilità

Se $f$ è continua in $x_0$ ma non derivabile, il limite del rapporto incrementale fallisce in uno di questi modi. La classificazione usa le derivate laterali (nel senso esteso, ammettendo anche limiti infiniti del rapporto incrementale).

**Tipo 1 — Punto angoloso (spigolo).** Le due derivate laterali esistono finite ma sono **diverse**:

$$f'_-(x_0) \neq f'_+(x_0), \quad \text{entrambe finite}$$

Il grafico arriva nel punto con due direzioni diverse: c'è una "semitangente" sinistra e una destra, ma nessuna tangente unica. *Esempio:* $|x|$ in $0$, con $f'_-(0) = -1$ e $f'_+(0) = +1$. Il caso in cui una sola delle due laterali è infinita (es. $\max\{\sqrt{x}, x\}$-tipo) si considera ancora punto angoloso.

**Tipo 2 — Cuspide.** I rapporti incrementali laterali divergono a **infiniti di segno opposto**:

$$\lim_{h\to 0^-} R(h) = \mp\infty, \qquad \lim_{h\to 0^+} R(h) = \pm\infty$$

Il grafico arriva nel punto con tangente verticale *da entrambi i lati*, ma formando una punta aguzza (le due semitangenti verticali coincidono come retta, il grafico rimbalza indietro). *Esempio:* $f(x) = \sqrt{|x|}$ in $0$: da destra $\frac{\sqrt{h}}{h} = \frac{1}{\sqrt{h}} \to +\infty$, da sinistra $\frac{\sqrt{-h}}{h} \to -\infty$.

**Tipo 3 — Flesso a tangente verticale.** Il rapporto incrementale diverge allo **stesso infinito** da entrambi i lati:

$$\lim_{h\to 0} R(h) = +\infty \quad \text{oppure} \quad -\infty$$

Il grafico attraversa il punto con tangente verticale, senza punta: la curva è "liscia" ma verticale. *Esempio:* $f(x) = \sqrt[3]{x}$ in $0$: $R(h) = \frac{h^{1/3}}{h} = h^{-2/3} \to +\infty$ da entrambi i lati. La retta $x = 0$ è tangente in senso geometrico, ma $f'(0)$ non esiste come numero.

**Tipo 4 — Oscillazione.** Il rapporto incrementale **non ha limite né finito né infinito**: oscilla senza stabilizzarsi. *Esempio:* $f(x) = x\sin(1/x)$ (con $f(0)=0$) in $0$: il rapporto incrementale è $\sin(1/h)$, che oscilla tra $-1$ e $+1$ per sempre, senza tendere a nulla (dimostrazione 4.5). Nessuna semitangente esiste.

| Tipo | $f'_-$ | $f'_+$ | Aspetto del grafico | Esempio |
|------|--------|--------|---------------------|---------|
| Punto angoloso | finita | finita, $\neq f'_-$ | spigolo | $\lvert x \rvert$ in $0$ |
| Cuspide | $\mp\infty$ | $\pm\infty$ | punta verticale | $\sqrt{\lvert x \rvert}$ in $0$ |
| Flesso a tang. verticale | $+\infty$ e $+\infty$ (o $-\infty$ e $-\infty$) | | curva verticale liscia | $\sqrt[3]{x}$ in $0$ |
| Oscillazione | non esiste | non esiste | vibrazione infinita | $x\sin(1/x)$ in $0$ |

**Quanto può andare male?** Si potrebbe pensare che una funzione continua sia non derivabile solo in punti isolati e "speciali". Non è così: nel 1872 Karl **Weierstrass** costruì una funzione continua su tutto $\mathbb{R}$ ma derivabile in **nessun punto** — una curva fatta interamente di "spigoli", a ogni scala di ingrandimento. La costruzione (una serie di coseni sempre più fitti) va oltre gli strumenti di questa lezione e non è trattata nelle fonti del corso; la citiamo perché ridimensiona per sempre l'intuizione "continua ⇒ quasi ovunque liscia". La morale: la derivabilità è una proprietà *molto* più forte della continuità.

### 3.9 La derivata come migliore approssimazione lineare

C'è un terzo modo di leggere la derivata — dopo "tasso di variazione istantaneo" e "pendenza della tangente" — ed è il più profondo: **la derivata è il coefficiente della migliore approssimazione lineare di $f$ vicino a $x_0$.**

**Teorema (caratterizzazione della derivabilità).** $f$ è derivabile in $x_0$ **se e solo se** esiste un numero $\ell \in \mathbb{R}$ tale che:

$$f(x_0 + h) = f(x_0) + \ell \cdot h + r(h) \qquad \text{con} \qquad \lim_{h \to 0} \frac{r(h)}{h} = 0$$

e in tal caso $\ell = f'(x_0)$ (ed è unico).

Leggiamo la scomposizione termine per termine:

- $f(x_0)$ — il valore di partenza (approssimazione di ordine zero: "la funzione vale circa quanto vale in $x_0$");
- $\ell \cdot h$ — la **correzione lineare**: proporzionale allo spostamento $h$, con coefficiente $\ell$;
- $r(h)$ — il **resto**: l'errore che si commette fermandosi alla parte lineare.

La condizione sul resto è il cuore del teorema: non basta che $r(h) \to 0$ (questo direbbe solo che $f$ è continua); serve che $r(h)$ vada a zero **più in fretta di $h$**, cioè $\frac{r(h)}{h} \to 0$. In simboli di Landau: $r(h) = o(h)$. È questo che rende la retta $y = f(x_0) + f'(x_0)(x - x_0)$ *la migliore* tra tutte le rette per il punto: qualunque altra pendenza lascia un errore che va a zero solo come $h$, non più in fretta.

La dimostrazione completa (nelle due direzioni, con l'unicità di $\ell$) è nella sezione 4.4.

**Perché questa lettura è importante:**

1. **Approssimazione numerica.** Per $h$ piccolo, trascurando il resto: $f(x_0+h) \approx f(x_0) + f'(x_0)\,h$. Esempio: $\sqrt{9.1} \approx \sqrt{9} + \frac{1}{2\sqrt{9}}(0.1) = 3 + \frac{0.1}{6} \approx 3.0167$ (valore vero: $3.01662\ldots$). Questa è la **linearizzazione**, sviluppata nella lezione su Taylor come caso di ordine 1.
2. **Il differenziale.** La parte lineare $f'(x_0)\,h$ ha un nome proprio: **differenziale** di $f$ in $x_0$, scritto $df = f'(x_0)\,dx$. È il modo rigoroso di dare senso ai simboli $df$ e $dx$ della notazione di Leibniz.
3. **La porta verso più variabili** — vedi §3.10: in $\mathbb{R}^n$ è *questa* la definizione che sopravvive, non quella col rapporto incrementale.

**Intuizione visiva:** se ingrandisci sempre di più il grafico di una funzione derivabile attorno a un punto, il grafico diventa indistinguibile dalla sua tangente ("le funzioni derivabili sono localmente rette"). Nella sezione 7 due grafici a scale diverse mostrano l'effetto. Al contrario, per quanto tu ingrandisca $|x|$ attorno all'origine, lo spigolo resta sempre identico: mai localmente retta, infatti mai derivabile lì.

### 3.10 Uno sguardo oltre: la derivata in più variabili

Questa sottosezione è un affaccio, non una trattazione: serve a capire *perché* la caratterizzazione del §3.9 è quella giusta.

Per una funzione di più variabili $f : \mathbb{R}^n \to \mathbb{R}$ (ad esempio la temperatura in funzione della posizione), il rapporto incrementale $\frac{f(x_0+h)-f(x_0)}{h}$ **non ha senso**: l'incremento $h$ ora è un *vettore*, e dividere per un vettore non è definito.

Sopravvive invece la lettura come approssimazione lineare. Si dice che $f$ è **differenziabile** in $x_0 \in \mathbb{R}^n$ se esiste una funzione lineare $L : \mathbb{R}^n \to \mathbb{R}$ tale che:

$$f(x_0 + h) = f(x_0) + L(h) + r(h) \qquad \text{con} \qquad \lim_{h \to 0} \frac{r(h)}{\lVert h \rVert} = 0$$

dove $\lVert h \rVert$ è la lunghezza del vettore $h$. La struttura è identica al §3.9: valore + parte lineare + resto che si spegne più in fretta dell'incremento. Il ruolo del numero $f'(x_0)$ è preso dalla funzione lineare $L$ (rappresentata dal vettore **gradiente**).

Due fatti si trasferiscono dal caso a una variabile: la differenziabilità implica la continuità, e l'approssimazione lineare è unica. Un fatto invece *cambia*: in $\mathbb{R}^n$ l'esistenza delle derivate "direzione per direzione" (le derivate parziali) **non basta** a garantire la differenziabilità — un'altra ragione per cui la definizione tramite approssimazione lineare, e non tramite rapporti incrementali, è quella fondamentale.

Tutto questo è sviluppato nelle lezioni di calcolo in più variabili; qui basta il messaggio: **delle tre letture della derivata, quella che generalizza è "migliore approssimazione lineare".**

---

## 4. Dimostrazioni

### 4.1 Equivalenza delle due forme della definizione

**Enunciato.** Per $f$ definita in un intorno di $x_0$:

$$\lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \ell \quad \iff \quad \lim_{h \to 0} \frac{f(x_0+h) - f(x_0)}{h} = \ell$$

(nel senso che se uno dei due limiti esiste, esiste anche l'altro e coincidono).

**Dimostrazione.** L'idea è un cambio di variabile: i due limiti descrivono lo stesso processo con nomi diversi.

*Passo 1 — il cambio di variabile.* Poniamo $h = x - x_0$, cioè $x = x_0 + h$. Questa corrispondenza tra $x$ e $h$ è biunivoca (a ogni $x$ corrisponde uno e un solo $h$ e viceversa) e trasforma:

- la condizione $x \to x_0$ nella condizione $h \to 0$ (se $x$ si avvicina a $x_0$, la differenza $x - x_0$ si avvicina a $0$, e viceversa);
- la condizione $x \neq x_0$ (implicita nel limite) nella condizione $h \neq 0$;
- l'espressione $\dfrac{f(x) - f(x_0)}{x - x_0}$ nell'espressione $\dfrac{f(x_0 + h) - f(x_0)}{h}$.

*Passo 2 — perché il cambio di variabile è lecito.* In generale, se $\lim_{x \to x_0} g(x) = \ell$ e $\varphi$ è una funzione con $\varphi(h) \to x_0$ per $h \to 0$, $\varphi(h) \neq x_0$ per $h \neq 0$ vicino a $0$, allora $\lim_{h \to 0} g(\varphi(h)) = \ell$ (teorema di sostituzione nei limiti). Qui $\varphi(h) = x_0 + h$: è continua, $\varphi(h) \to x_0$ per $h \to 0$, e $\varphi(h) = x_0$ solo per $h = 0$. Le ipotesi sono soddisfatte.

*Passo 3 — le due direzioni.* Applicando il passo 2 con $g(x) = \frac{f(x)-f(x_0)}{x-x_0}$ si ottiene: se esiste il limite in forma $x \to x_0$, esiste quello in forma $h \to 0$ con lo stesso valore. Per la direzione opposta si usa la sostituzione inversa $x \mapsto h = x - x_0$, che soddisfa le stesse ipotesi. $\blacksquare$

**Morale pratica:** puoi usare la forma che rende l'algebra più semplice — sono intercambiabili sempre.

### 4.2 Derivabile ⇒ continua

**Enunciato.** Se $f$ è derivabile in $x_0$, allora $f$ è continua in $x_0$.

**Strategia.** Continuità in $x_0$ significa $\lim_{x \to x_0} f(x) = f(x_0)$, cioè, equivalentemente, $\lim_{x \to x_0} \bigl[f(x) - f(x_0)\bigr] = 0$. Dimostriamo quest'ultima uguaglianza usando un trucco: moltiplicare e dividere per $x - x_0$ per far comparire il rapporto incrementale, di cui *sappiamo* che il limite esiste.

**Dimostrazione.**

*Passo 1 — riscrittura della differenza.* Per ogni $x \neq x_0$ (nel dominio di $f$, vicino a $x_0$) vale l'identità:

$$f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0} \cdot (x - x_0)$$

È un'identità algebrica: abbiamo moltiplicato e diviso per $x - x_0$, cosa lecita perché $x \neq x_0$ garantisce $x - x_0 \neq 0$.

*Passo 2 — limite di ciascun fattore.* Per $x \to x_0$:

- il primo fattore tende a $f'(x_0)$ — **per ipotesi di derivabilità** (è esattamente la definizione di derivata, forma $x \to x_0$);
- il secondo fattore tende a $0$ — banalmente, $\lim_{x \to x_0}(x - x_0) = x_0 - x_0 = 0$.

*Passo 3 — limite del prodotto.* Il teorema sull'algebra dei limiti (il limite del prodotto è il prodotto dei limiti, quando entrambi esistono finiti) dà:

$$\lim_{x \to x_0} \bigl[f(x) - f(x_0)\bigr] = \lim_{x \to x_0} \frac{f(x)-f(x_0)}{x-x_0} \;\cdot\; \lim_{x \to x_0} (x - x_0) = f'(x_0) \cdot 0 = 0$$

Nota dove serve l'ipotesi "limite **finito**": se il rapporto incrementale divergesse ($f'(x_0)$ "$= \infty$"), il prodotto sarebbe la forma indeterminata $\infty \cdot 0$ e l'argomento crollerebbe.

*Passo 4 — conclusione.* Da $\lim_{x \to x_0}[f(x) - f(x_0)] = 0$ segue, sommando la costante $f(x_0)$:

$$\lim_{x \to x_0} f(x) = f(x_0)$$

che è la definizione di continuità in $x_0$. $\blacksquare$

**Osservazione sulla contronominale.** Il teorema equivale a: *se $f$ non è continua in $x_0$, allora non è derivabile in $x_0$*. È la forma in cui il teorema si usa più spesso negli esercizi.

### 4.3 $|x|$ non è derivabile in $0$ (ma è continua)

**Enunciato.** La funzione $f(x) = |x|$ è continua in $x = 0$ ma non derivabile in $x = 0$.

**Dimostrazione.**

*Parte 1 — continuità.* Per definizione di valore assoluto, $-|x| \le x \le |x|$ e $\bigl||x| - 0\bigr| = |x|$. Quindi per ogni $\varepsilon > 0$, scegliendo $\delta = \varepsilon$: se $|x - 0| < \delta$ allora $\bigl|f(x) - f(0)\bigr| = |x| < \varepsilon$. Dunque $\lim_{x \to 0}|x| = 0 = |0|$: continua in $0$. ✓

*Parte 2 — il rapporto incrementale in $0$.* Per $h \neq 0$:

$$R(h) = \frac{f(0+h) - f(0)}{h} = \frac{|h| - 0}{h} = \frac{|h|}{h}$$

Ora usiamo la definizione a tratti del valore assoluto: $|h| = h$ se $h > 0$, $|h| = -h$ se $h < 0$.

*Parte 3 — derivata destra.* Per $h > 0$: $R(h) = \frac{h}{h} = 1$ (costantemente). Quindi:

$$f'_+(0) = \lim_{h \to 0^+} R(h) = \lim_{h \to 0^+} 1 = 1$$

*Parte 4 — derivata sinistra.* Per $h < 0$: $R(h) = \frac{-h}{h} = -1$ (costantemente). Quindi:

$$f'_-(0) = \lim_{h \to 0^-} R(h) = \lim_{h \to 0^-} (-1) = -1$$

*Parte 5 — conclusione.* Le derivate laterali esistono entrambe finite ma $f'_+(0) = 1 \neq -1 = f'_-(0)$. Per il criterio del §3.3 (un limite esiste se e solo se i limiti laterali esistono e coincidono), il limite del rapporto incrementale non esiste: $f$ **non è derivabile in $0$**. Il punto è un **punto angoloso**. $\blacksquare$

Geometricamente: da destra il grafico è la retta $y = x$ (pendenza $+1$), da sinistra la retta $y = -x$ (pendenza $-1$). Le due semirette formano lo spigolo, e nessuna retta unica può essere tangente a entrambe. Nota che *fuori* dall'origine $|x|$ è derivabilissima: $f'(x) = 1$ per $x > 0$ e $f'(x) = -1$ per $x < 0$. Il problema è solo nel punto di raccordo.

### 4.4 Derivabilità ⟺ migliore approssimazione lineare

**Enunciato.** $f$ è derivabile in $x_0$ se e solo se esiste $\ell \in \mathbb{R}$ tale che

$$f(x_0 + h) = f(x_0) + \ell h + r(h), \qquad \lim_{h\to 0}\frac{r(h)}{h} = 0 \qquad (\ast)$$

In tal caso $\ell = f'(x_0)$, e il numero $\ell$ con questa proprietà è unico.

**Dimostrazione.**

*Direzione 1: derivabile ⇒ ($\ast$).* Supponiamo che esista $f'(x_0)$. **Definiamo** il resto come ciò che manca alla parte lineare per raggiungere $f$:

$$r(h) := f(x_0+h) - f(x_0) - f'(x_0)\,h$$

Con questa definizione l'uguaglianza in $(\ast)$ vale automaticamente (con $\ell = f'(x_0)$): abbiamo solo spostato termini. Il contenuto da verificare è la condizione sul resto. Dividiamo per $h \neq 0$:

$$\frac{r(h)}{h} = \frac{f(x_0+h) - f(x_0) - f'(x_0)h}{h} = \underbrace{\frac{f(x_0+h)-f(x_0)}{h}}_{\to\, f'(x_0)} - \underbrace{f'(x_0)}_{\text{costante}}$$

Per $h \to 0$ il primo addendo tende a $f'(x_0)$ per definizione di derivata, quindi:

$$\lim_{h\to 0} \frac{r(h)}{h} = f'(x_0) - f'(x_0) = 0 \checkmark$$

*Direzione 2: ($\ast$) ⇒ derivabile.* Supponiamo che valgano l'uguaglianza e la condizione sul resto per qualche $\ell$. Isoliamo il rapporto incrementale: da $(\ast)$, per $h \neq 0$,

$$\frac{f(x_0+h) - f(x_0)}{h} = \frac{\ell h + r(h)}{h} = \ell + \frac{r(h)}{h}$$

Per $h \to 0$ il secondo addendo tende a $0$ per ipotesi, quindi:

$$\lim_{h \to 0} \frac{f(x_0+h)-f(x_0)}{h} = \ell + 0 = \ell$$

Il limite del rapporto incrementale esiste finito e vale $\ell$: dunque $f$ è derivabile in $x_0$ con $f'(x_0) = \ell$. ✓

*Unicità di $\ell$.* Supponiamo che $(\ast)$ valga per due numeri $\ell_1$ e $\ell_2$, con resti $r_1$ e $r_2$. Sottraendo le due uguaglianze $f(x_0+h) = f(x_0) + \ell_1 h + r_1(h)$ e $f(x_0+h) = f(x_0) + \ell_2 h + r_2(h)$:

$$0 = (\ell_1 - \ell_2)h + r_1(h) - r_2(h) \implies \ell_1 - \ell_2 = \frac{r_2(h) - r_1(h)}{h}$$

Il membro sinistro è una costante; il membro destro tende a $0 - 0 = 0$ per $h \to 0$. Una costante uguale a una quantità che tende a zero deve essere zero: $\ell_1 = \ell_2$. $\blacksquare$

**Commento.** La direzione 2 dice qualcosa di notevole: per dimostrare che una funzione è derivabile non serve calcolare il limite del rapporto incrementale — basta *esibire* una scomposizione "valore + lineare + resto piccolo". Questa flessibilità è ciò che rende la caratterizzazione così potente in più variabili.

### 4.5 Due funzioni gemelle dal comportamento opposto: $x\sin(1/x)$ e $x^2\sin(1/x)$

Questa coppia di esempi mostra quanto sia *sottile* il confine della derivabilità: due funzioni quasi identiche, una derivabile in $0$ e l'altra no.

Definiamo (entrambe continue su tutto $\mathbb{R}$, con il valore in $0$ assegnato a parte):

$$g(x) = \begin{cases} x \sin\frac{1}{x} & x \neq 0 \\ 0 & x = 0 \end{cases} \qquad\qquad f(x) = \begin{cases} x^2 \sin\frac{1}{x} & x \neq 0 \\ 0 & x = 0 \end{cases}$$

*(Continuità in $0$: in entrambi i casi $|{\sin(1/x)}| \le 1$, quindi $|g(x)| \le |x| \to 0$ e $|f(x)| \le x^2 \to 0$; per il teorema del confronto entrambe tendono a $0 = $ valore assegnato.)*

**Parte 1 — $g(x) = x\sin(1/x)$ NON è derivabile in $0$.**

Il rapporto incrementale in $0$, per $h \neq 0$:

$$R_g(h) = \frac{g(h) - g(0)}{h} = \frac{h\sin(1/h) - 0}{h} = \sin\frac{1}{h}$$

Dobbiamo stabilire se $\lim_{h \to 0}\sin(1/h)$ esiste. Non esiste, e lo si prova esibendo due successioni che tendono a $0$ lungo le quali $\sin(1/h)$ ha limiti diversi:

- $h_n = \dfrac{1}{2\pi n}$: allora $\sin(1/h_n) = \sin(2\pi n) = 0$ per ogni $n$, quindi lungo questa successione $R_g \to 0$;
- $k_n = \dfrac{1}{2\pi n + \pi/2}$: allora $\sin(1/k_n) = \sin(2\pi n + \pi/2) = 1$ per ogni $n$, quindi lungo questa successione $R_g \to 1$.

Entrambe le successioni tendono a $0$, ma il rapporto incrementale tende a valori diversi ($0$ e $1$): il limite non può esistere (né finito né infinito — i valori restano confinati in $[-1,1]$ ma continuano a oscillare). Quindi $g'(0)$ **non esiste**: è il "Tipo 4 — oscillazione" della classificazione §3.8. $\blacksquare$

**Parte 2 — $f(x) = x^2\sin(1/x)$ È derivabile in $0$, con $f'(0) = 0$.**

Il rapporto incrementale in $0$, per $h \neq 0$:

$$R_f(h) = \frac{f(h) - f(0)}{h} = \frac{h^2\sin(1/h)}{h} = h\sin\frac{1}{h}$$

Ora stimiamo: poiché $|\sin(1/h)| \le 1$ per ogni $h \neq 0$,

$$0 \le \left| h \sin\frac{1}{h} \right| \le |h|$$

Per $h \to 0$, $|h| \to 0$: per il **teorema del confronto** (due carabinieri), $R_f(h) \to 0$. Il limite esiste finito, quindi:

$$f'(0) = 0$$

Il fattore $x^2$, a differenza di $x$, "schiaccia" l'oscillazione di $\sin(1/x)$ abbastanza in fretta da domarla anche *dopo* la divisione per $h$. $\blacksquare$

**Parte 3 — il colpo di scena: $f'$ esiste ovunque ma è discontinua in $0$.**

Per $x \neq 0$, $f$ si deriva con le regole ordinarie (prodotto + catena, lezione successiva):

$$f'(x) = 2x\sin\frac{1}{x} - \cos\frac{1}{x}$$

Per $x \to 0$: il primo addendo tende a $0$ (stesso confronto di prima), ma $\cos(1/x)$ **oscilla senza limite** (stesso argomento delle due successioni). Quindi $\lim_{x\to 0} f'(x)$ non esiste, mentre $f'(0) = 0$ esiste: la funzione derivata $f'$ è **discontinua in $0$**.

Morale in due righe: *derivabile ovunque* non implica *derivata continua* ($f \in C^1$ è strettamente più forte), e la derivabilità in un punto è una proprietà genuinamente **puntuale** — non dice nulla sul comportamento della derivata nei punti vicini.

---

## 5. Derivazioni

In questa sezione ricaviamo **dalla definizione** — senza regole di calcolo, che arrivano nella lezione successiva — le derivate delle funzioni fondamentali. Ogni derivazione segue lo stesso schema in quattro mosse: *scrivi il rapporto incrementale → manipola l'algebra per far comparire un fattore $h$ al numeratore → semplifica $h$ → calcola il limite.* La manipolazione algebrica cambia da funzione a funzione, ed è lì che si impara davvero.

### 5.1 La costante: $(c)' = 0$

Sia $f(x) = c$ per ogni $x$. Rapporto incrementale:

$$\frac{f(x+h)-f(x)}{h} = \frac{c - c}{h} = \frac{0}{h} = 0 \qquad \text{per ogni } h \neq 0$$

Il rapporto è identicamente nullo, quindi il suo limite è $0$:

$$(c)' = 0$$

Ha perfettamente senso: una funzione costante non varia mai, il suo tasso di variazione è zero ovunque, e la tangente (che coincide col grafico, una retta orizzontale) ha pendenza zero.

### 5.2 La retta: $(ax + b)' = a$

Sia $f(x) = ax + b$. Rapporto incrementale:

$$\frac{f(x+h) - f(x)}{h} = \frac{\bigl[a(x+h) + b\bigr] - \bigl[ax + b\bigr]}{h} = \frac{ax + ah + b - ax - b}{h} = \frac{ah}{h} = a$$

Il rapporto vale costantemente $a$, per qualunque $h$: non serve nemmeno il passaggio al limite in senso stretto.

$$(ax+b)' = a$$

Anche qui la geometria conferma: la tangente a una retta è la retta stessa, e la sua pendenza è $a$ in ogni punto. Nota che $b$ è sparito subito nella sottrazione: **le costanti additive non influenzano la derivata** (traslare un grafico in verticale non cambia le pendenze).

### 5.3 La potenza: $(x^n)' = n\,x^{n-1}$ per $n \in \mathbb{N}$

Sia $f(x) = x^n$ con $n$ intero positivo. Il cuore della derivazione è lo sviluppo del **binomio di Newton**:

$$(x+h)^n = x^n + n x^{n-1} h + \binom{n}{2} x^{n-2} h^2 + \binom{n}{3} x^{n-3} h^3 + \cdots + h^n$$

Leggiamolo: il primo termine è $x^n$; il secondo è lineare in $h$ con coefficiente $n x^{n-1}$; **tutti i termini successivi contengono $h$ almeno al quadrato**. Questa struttura è esattamente ciò che serve. Il numeratore del rapporto incrementale:

$$(x+h)^n - x^n = n x^{n-1} h + \underbrace{\binom{n}{2} x^{n-2} h^2 + \cdots + h^n}_{\text{ogni termine ha } h^2 \text{ come fattore}}$$

Raccogliamo $h$ e dividiamo:

$$\frac{(x+h)^n - x^n}{h} = n x^{n-1} + h\left[\binom{n}{2} x^{n-2} + \binom{n}{3}x^{n-3}h + \cdots + h^{n-2}\right]$$

Il contenuto della parentesi quadra è un polinomio in $h$ (quindi una quantità che resta limitata per $h \to 0$), moltiplicato per $h$ che va a zero: tutto il secondo addendo si spegne. Resta:

$$(x^n)' = n\,x^{n-1}$$

Casi particolari da verificare mentalmente: $n=1$ dà $(x)' = 1 \cdot x^0 = 1$ ✓ (coerente con §5.2 con $a=1, b=0$); $n=2$ dà $(x^2)' = 2x$ ✓ (coerente con §3.2). La formula vale in realtà per ogni esponente reale ($x^b$ con $b \in \mathbb{R}$, sul dominio appropriato); la dimostrazione generale usa esponenziale e logaritmo ed è negli appunti del corso.

### 5.4 Il reciproco: $\left(\dfrac{1}{x}\right)' = -\dfrac{1}{x^2}$ per $x \neq 0$

Sia $f(x) = \frac{1}{x}$, con $x \neq 0$. Rapporto incrementale (con $h$ abbastanza piccolo perché anche $x + h \neq 0$):

$$\frac{f(x+h)-f(x)}{h} = \frac{\dfrac{1}{x+h} - \dfrac{1}{x}}{h}$$

*Mossa algebrica: denominatore comune al numeratore.*

$$\frac{1}{x+h} - \frac{1}{x} = \frac{x - (x+h)}{x(x+h)} = \frac{-h}{x(x+h)}$$

Quindi:

$$\frac{f(x+h)-f(x)}{h} = \frac{1}{h} \cdot \frac{-h}{x(x+h)} = \frac{-1}{x(x+h)}$$

Il fattore $h$ si è semplificato: l'indeterminazione è sciolta. Per $h \to 0$ il denominatore $x(x+h) \to x \cdot x = x^2$ (algebra dei limiti), dunque:

$$\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$$

Osservazioni: la derivata è **sempre negativa** — coerente col fatto che $1/x$ è decrescente su ciascuno dei due rami del suo grafico; e coincide con la regola della potenza per $n = -1$: $(x^{-1})' = -1 \cdot x^{-2}$ ✓.

### 5.5 La radice: $(\sqrt{x}\,)' = \dfrac{1}{2\sqrt{x}}$ per $x > 0$

Sia $f(x) = \sqrt{x}$, con $x > 0$. Rapporto incrementale:

$$\frac{\sqrt{x+h} - \sqrt{x}}{h}$$

Qui né sviluppi né denominatori comuni aiutano. La mossa giusta è la **razionalizzazione**: moltiplicare numeratore e denominatore per il *coniugato* $\sqrt{x+h} + \sqrt{x}$, per sfruttare il prodotto notevole $(A-B)(A+B) = A^2 - B^2$:

$$\frac{\sqrt{x+h} - \sqrt{x}}{h} \cdot \frac{\sqrt{x+h} + \sqrt{x}}{\sqrt{x+h} + \sqrt{x}} = \frac{(x+h) - x}{h\bigl(\sqrt{x+h} + \sqrt{x}\bigr)} = \frac{h}{h\bigl(\sqrt{x+h} + \sqrt{x}\bigr)} = \frac{1}{\sqrt{x+h} + \sqrt{x}}$$

Di nuovo il fattore $h$ è emerso e si è semplificato. Per $h \to 0$: $\sqrt{x+h} \to \sqrt{x}$ (continuità della radice), quindi il denominatore tende a $2\sqrt{x}$:

$$(\sqrt{x}\,)' = \frac{1}{2\sqrt{x}}$$

Coerenza con la regola della potenza: $\sqrt{x} = x^{1/2}$ e $\frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$ ✓. Nota il comportamento agli estremi del dominio: per $x \to 0^+$ la derivata esplode a $+\infty$ — è la tangente verticale della radice nell'origine (dove infatti $\sqrt{x}$ non è derivabile); per $x$ grandi la derivata è piccolissima — la radice cresce sempre più piano.

### 5.6 Il seno: $(\sin x)' = \cos x$

Questa è la derivazione più ricca. Sia $f(x) = \sin x$ (angoli in **radianti** — vedremo perché è essenziale). Rapporto incrementale:

$$\frac{\sin(x+h) - \sin x}{h}$$

*Mossa 1 — formula di prostaferesi.* La differenza di due seni si trasforma in prodotto:

$$\sin A - \sin B = 2 \cos\frac{A+B}{2}\,\sin\frac{A-B}{2}$$

Con $A = x + h$ e $B = x$: $\frac{A+B}{2} = x + \frac{h}{2}$ e $\frac{A-B}{2} = \frac{h}{2}$, quindi:

$$\sin(x+h) - \sin x = 2\cos\!\left(x + \frac{h}{2}\right)\sin\frac{h}{2}$$

*Mossa 2 — riorganizzazione del rapporto.*

$$\frac{\sin(x+h)-\sin x}{h} = \frac{2\cos\left(x + \frac{h}{2}\right)\sin\frac{h}{2}}{h} = \cos\!\left(x + \frac{h}{2}\right) \cdot \frac{\sin\frac{h}{2}}{\frac{h}{2}}$$

(nell'ultimo passaggio abbiamo scritto $\frac{2}{h} = \frac{1}{h/2}$ per far comparire la struttura $\frac{\sin t}{t}$ con $t = h/2$).

*Mossa 3 — i due limiti.* Per $h \to 0$:

- $\cos\left(x + \frac{h}{2}\right) \to \cos x$, per continuità del coseno;
- $\dfrac{\sin(h/2)}{h/2} \to 1$: è il **limite notevole** $\lim_{t \to 0}\frac{\sin t}{t} = 1$, dimostrato nella lezione sui limiti. *Qui entra la scelta dei radianti:* il limite notevole vale $1$ solo in radianti; in gradi varrebbe $\pi/180$, e la formula della derivata si sporcherebbe di costanti.

Prodotto dei limiti:

$$(\sin x)' = \cos x \cdot 1 = \cos x$$

Il risultato ha una lettura geometrica elegante: il coseno vale $1$ dove il seno sale con pendenza massima (in $x=0$), vale $0$ dove il seno ha un massimo o minimo (tangente orizzontale in $x = \pm\pi/2$), è negativo dove il seno scende. Il grafico nella sezione 7 mostra questa danza. Con la stessa tecnica (prostaferesi del coseno) si ottiene $(\cos x)' = -\sin x$.

### 5.7 La linearizzazione e il differenziale

Chiudiamo ricavando le due formule "operative" della lettura come approssimazione lineare (§3.9).

**Linearizzazione.** La retta tangente in $x_0$ è la funzione lineare che meglio approssima $f$ vicino a $x_0$. Come funzione di $x$ si chiama **linearizzazione** di $f$ in $x_0$:

$$L(x) = f(x_0) + f'(x_0)(x - x_0)$$

Da dove viene: è l'unica retta che (1) passa per il punto $(x_0, f(x_0))$ — sostituendo $x = x_0$ si ottiene $L(x_0) = f(x_0)$ — e (2) ha la pendenza della curva, $L'(x) = f'(x_0)$ per il §5.2. Il teorema 4.4 garantisce che l'errore $f(x) - L(x) = r(x - x_0)$ va a zero più in fretta di $x - x_0$: per questo, **per $x$ vicino a $x_0$**, la sostituzione $f(x) \approx L(x)$ è legittima.

*Esempio numerico:* stimare $\sqrt{9.1}$ senza calcolatrice. Prendiamo $f(x) = \sqrt{x}$, $x_0 = 9$ (il quadrato perfetto più vicino): $f(9) = 3$, $f'(9) = \frac{1}{2\sqrt{9}} = \frac{1}{6}$.

$$\sqrt{9.1} \approx L(9.1) = 3 + \frac{1}{6}(9.1 - 9) = 3 + \frac{0.1}{6} \approx 3.0167$$

Valore vero: $3.016621\ldots$ — quattro cifre corrette con un conto a mente.

**Differenziale.** Isolando la parte lineare della variazione: se $x$ varia di una quantità $dx$, la variazione di $f$ *stimata dalla tangente* è:

$$df = f'(x_0)\,dx$$

Questo oggetto si chiama **differenziale** di $f$. La variazione *vera* è $\Delta f = f(x_0 + dx) - f(x_0) = df + r(dx)$: differenziale più un resto trascurabile. Il differenziale dà finalmente cittadinanza autonoma ai simboli $df$ e $dx$ di Leibniz: la scrittura $\frac{df}{dx} = f'(x_0)$ diventa una vera uguaglianza tra quozienti.

**Dove trovare il resto della cassetta degli attrezzi.** Le regole di calcolo (linearità, prodotto, quoziente, funzione composta, funzione inversa) e la tavola completa delle derivate elementari — esponenziali, logaritmi, funzioni trigonometriche e loro inverse — sono l'oggetto della lezione successiva, *Regole di derivazione*. Con la definizione di questa lezione e le regole di quella, saprai derivare qualunque funzione elementare.

---

## 6. Esempi

### Esempio 1 — Retta tangente alla parabola in un punto assegnato

*Trovare l'equazione della retta tangente a $f(x) = x^2$ nel punto di ascissa $x_0 = 3$.*

Servono due ingredienti: il valore e la pendenza.

- **Valore:** $f(3) = 9$; il punto di tangenza è $(3, 9)$.
- **Pendenza:** dal §3.2, $f'(x) = 2x$, quindi $f'(3) = 6$.

Equazione della tangente (formula del §3.4):

$$y = f(3) + f'(3)(x - 3) = 9 + 6(x-3) = 6x - 9$$

*Verifica di coerenza:* in $x = 3$, $y = 18 - 9 = 9$ ✓ (passa per il punto). Un controllo in più: risolvendo $x^2 = 6x - 9$, cioè $x^2 - 6x + 9 = (x-3)^2 = 0$, si trova che retta e parabola si toccano *solo* in $x = 3$, con molteplicità due — il segno algebrico della tangenza.

### Esempio 2 — Un salto uccide la derivata: la funzione segno

*Studiare la derivabilità in $0$ di* $\;\operatorname{sgn}(x) = \begin{cases} 1 & x > 0 \\ 0 & x = 0 \\ -1 & x < 0 \end{cases}$

Qui non serve nessun calcolo di rapporto incrementale: $\operatorname{sgn}$ è **discontinua** in $0$ (limite destro $1$, limite sinistro $-1$, valore $0$: tre numeri diversi). Per la contronominale del teorema 4.2, *niente continuità ⇒ niente derivabilità*.

$\operatorname{sgn}$ non è derivabile in $0$. Fine.

*Perché questo esempio è utile:* mostra l'ordine giusto delle verifiche. Davanti a una funzione a tratti, **prima** si controlla la continuità nel punto di giunzione (veloce), e **solo se** c'è continuità si calcolano le derivate laterali (più laborioso). Se si prova a calcolare comunque il rapporto incrementale: $R(h) = \frac{\operatorname{sgn}(h) - 0}{h} = \frac{\pm 1}{h} \to \pm\infty$ — diverge da entrambi i lati, confermando la non derivabilità.

### Esempio 3 — Velocità istantanea in caduta libera

*Un sasso viene lasciato cadere da una torre. La sua altezza (in metri, dopo $t$ secondi) è $s(t) = 80 - 4.9\,t^2$. Con che velocità colpisce il suolo?*

**Passo 1 — quando tocca terra:** $s(t) = 0 \Rightarrow 4.9\,t^2 = 80 \Rightarrow t^* = \sqrt{80/4.9} \approx 4.04$ s.

**Passo 2 — la velocità è la derivata della posizione.** Calcoliamola dalla definizione, in un generico istante $t$:

$$s'(t) = \lim_{h\to 0}\frac{\bigl[80 - 4.9(t+h)^2\bigr] - \bigl[80 - 4.9t^2\bigr]}{h} = \lim_{h\to 0}\frac{-4.9\,(2th + h^2)}{h} = \lim_{h\to 0}\bigl[-4.9(2t + h)\bigr] = -9.8\,t$$

(la struttura del calcolo è identica a quella di $x^2$: sviluppo, raccoglimento di $h$, semplificazione, limite; le costanti $80$ e $-4.9$ viaggiano intatte).

**Passo 3 — valutazione all'impatto:**

$$v(t^*) = -9.8 \times 4.04 \approx -39.6 \text{ m/s} \approx -143 \text{ km/h}$$

Il segno negativo dice che l'altezza sta *diminuendo* (il sasso scende). Nota il bonus concettuale: $s''(t) = (-9.8t)' = -9.8$ m/s² — l'accelerazione di gravità, costante: la derivata seconda della posizione restituisce la fisica del problema.

### Esempio 4 — Funzione a tratti: continuità sì, derivabilità no

*Studiare continuità e derivabilità in $x_0 = 1$ di* $\;f(x) = \begin{cases} x^2 & x \le 1 \\ x & x > 1 \end{cases}$

**Continuità in $1$:** valore $f(1) = 1^2 = 1$; limite sinistro $\lim_{x\to 1^-} x^2 = 1$; limite destro $\lim_{x\to 1^+} x = 1$. Tutti uguali: **continua** ✓. Ha senso procedere.

**Derivate laterali in $1$.** Da sinistra il ramo attivo è $x^2$:

$$f'_-(1) = \lim_{h\to 0^-}\frac{(1+h)^2 - 1}{h} = \lim_{h\to 0^-}(2 + h) = 2$$

Da destra il ramo attivo è $x$:

$$f'_+(1) = \lim_{h\to 0^+}\frac{(1+h) - 1}{h} = \lim_{h\to 0^+}\frac{h}{h} = 1$$

**Conclusione:** $f'_-(1) = 2 \neq 1 = f'_+(1)$: le laterali esistono finite ma diverse — **punto angoloso**, $f$ non è derivabile in $1$ (ma lo è in ogni altro punto). Geometricamente: la parabola arriva in $(1,1)$ salendo con pendenza $2$, la retta riparte con pendenza $1$; il raccordo è continuo ma "sterza" bruscamente.

### Esempio 5 — Il massimo di due funzioni: dove nasce lo spigolo

*Studiare la derivabilità di $f(x) = \max\{\sqrt{x} - 1,\; 1 - x\}$ per $x \ge 0$.*

**Passo 1 — capire chi vince dove.** Confrontiamo $g_1(x) = \sqrt{x} - 1$ (crescente) e $g_2(x) = 1 - x$ (decrescente). Si incontrano dove $\sqrt{x} - 1 = 1 - x$, cioè $\sqrt{x} = 2 - x$. Elevando al quadrato (lecito per $0 \le x \le 2$, dove entrambi i membri hanno segno gestibile): $x = 4 - 4x + x^2$, cioè $x^2 - 5x + 4 = 0$, cioè $(x-1)(x-4) = 0$. La soluzione $x = 4$ è spuria ($\sqrt{4} = 2 \neq 2 - 4$); resta $x = 1$, dove entrambe valgono $0$. Poiché $g_1$ cresce e $g_2$ decresce:

$$f(x) = \begin{cases} 1 - x & 0 \le x \le 1 \\ \sqrt{x} - 1 & x > 1 \end{cases}$$

**Passo 2 — derivate laterali nel punto di scambio $x_0 = 1$.** Da sinistra (ramo $1 - x$, che è una retta): $f'_-(1) = -1$. Da destra (ramo $\sqrt{x} - 1$, derivata $\frac{1}{2\sqrt{x}}$ dal §5.5): $f'_+(1) = \frac{1}{2}$.

**Conclusione:** $-1 \neq \frac{1}{2}$: **punto angoloso** in $x = 1$. Il fenomeno è generale e vale la pena fissarlo: il massimo (o il minimo) di due funzioni derivabili è tipicamente **non derivabile nei punti di sorpasso**, dove il "testimone" passa da una funzione all'altra con pendenze diverse. È esattamente il meccanismo per cui $|x| = \max\{x, -x\}$ ha lo spigolo in $0$.

### Esempio 6 — Progettare il raccordo liscio: trovare $b$ e $c$

*Determinare $b$ e $c$ in modo che* $\;f(x) = \begin{cases} x^2 & x \le 2 \\ bx + c & x > 2 \end{cases}\;$ *sia derivabile in $x_0 = 2$ (e quindi ovunque).*

Questo è il problema inverso dell'Esempio 4: invece di *verificare* un raccordo, dobbiamo *costruirlo*. Le condizioni sono due, e vanno imposte nell'ordine giusto.

**Condizione 1 — continuità in $2$** (necessaria per la derivabilità, teorema 4.2): il limite sinistro $2^2 = 4$ deve uguagliare il limite destro $2b + c$:

$$2b + c = 4$$

**Condizione 2 — uguaglianza delle derivate laterali:** da sinistra $f'_-(2) = \left.(x^2)'\right|_{x=2} = 4$; da destra $f'_+(2) = (bx+c)' = b$. Uguagliando:

$$b = 4$$

**Sistema:** da $b = 4$ e $2b + c = 4$ segue $c = 4 - 8 = -4$.

$$f(x) = \begin{cases} x^2 & x \le 2 \\ 4x - 4 & x > 2 \end{cases}$$

*Interpretazione elegante:* la retta $y = 4x - 4$ è esattamente la **tangente** alla parabola in $(2,4)$ (verifica: $y = f(2) + f'(2)(x-2) = 4 + 4(x-2) = 4x - 4$). Un raccordo è liscio quando il ramo rettilineo prosegue lungo la tangente del ramo curvo — l'intuizione geometrica e l'algebra coincidono perfettamente. Questo problema è il cuore matematico degli *spline* usati in grafica e nel design industriale.

### Esempio 7 — Costo marginale

*Un'azienda produce zaini. Il costo totale per produrre $x$ zaini al giorno è* $C(x) = 10000 + 200x + 0.1x^2$ *(in euro). Che cosa dice $C'(100)$? Confrontarlo con il costo effettivo del $101$-esimo zaino.*

**Il concetto.** In economia, il **costo marginale** è la derivata della funzione di costo:

$$MC(x) = C'(x)$$

e si interpreta come "il costo di produrre un'unità aggiuntiva quando il livello di produzione è $x$". Perché la derivata approssima questo costo? Per la linearizzazione (§5.7) con $h = 1$:

$$C(x+1) - C(x) \approx C'(x) \cdot 1 = C'(x)$$

L'approssimazione è buona quando la scala di produzione è grande rispetto alla singola unità ($1$ è "piccolo" rispetto a $x = 100$).

**Il calcolo.** $C'(x) = 200 + 0.2x$ (per §5.2 e §5.3 con linearità), quindi:

$$MC(100) = 200 + 0.2 \times 100 = 220 \;\text{euro}$$

**Il confronto col costo vero del 101-esimo zaino:**

$$C(101) - C(100) = \bigl[10000 + 20200 + 0.1(10201)\bigr] - \bigl[10000 + 20000 + 0.1(10000)\bigr] = 220.10 \;\text{euro}$$

La derivata stima $220$ €, il valore esatto è $220.10$ €: errore dello $0.05\%$. Nota anche la struttura del costo: $C'(x) = 200 + 0.2x$ è *crescente* — ogni zaino in più costa più del precedente (rendimenti decrescenti), informazione che l'azienda legge direttamente dal segno di $C''(x) = 0.2 > 0$.

### Esempio 8 — Ricavo marginale ed elasticità della domanda

*Un ristorante vende cene a buffet. Se fissa il prezzo $p$ in funzione del numero di coperti $x$ secondo la relazione $p(x) = 9 - 0.03x$ (in dollari, per $0 \le x \le 300$), il ricavo è $R(x) = x \cdot p(x)$. Calcolare il ricavo marginale a $x = 100$ e confrontarlo con il ricavo effettivo del $101$-esimo coperto. Valutare poi l'elasticità della domanda a quel prezzo.*

**Il ricavo e la sua derivata.**

$$R(x) = x(9 - 0.03x) = 9x - 0.03x^2$$

$$MR(x) = R'(x) = 9 - 0.06x \qquad \Rightarrow \qquad MR(100) = 9 - 6 = 3 \text{ \$}$$

Il $101$-esimo coperto porta *circa* 3 \$ di ricavo aggiuntivo. Il valore esatto:

$$R(101) - R(100) = \bigl[909 - 0.03 \cdot 10201\bigr] - \bigl[900 - 0.03\cdot 10000\bigr] = 602.97 - 600 = 2.97 \text{ \$}$$

Stima $3$, verità $2.97$: di nuovo la linearizzazione al lavoro. Il punto economico interessante: ogni coperto venduto in più *abbassa* il prezzo di tutti ($p$ cala di 3 centesimi), quindi il ricavo marginale (3 dollari) è molto sotto il prezzo di vendita ($p(100) = 6$ dollari).

**L'elasticità.** Invertiamo la relazione per avere la domanda in funzione del prezzo: $x(p) = \frac{9 - p}{0.03} = 300 - \frac{100}{3}p$, da cui $x'(p) = -\frac{100}{3}$. L'**elasticità della domanda** è il rapporto tra variazione *percentuale* della quantità e variazione *percentuale* del prezzo, e con le derivate si scrive:

$$\varepsilon(p) = x'(p)\,\frac{p}{x(p)}$$

(la struttura: $x'(p)$ converte variazioni di prezzo in variazioni di quantità; il fattore $p/x$ trasforma entrambe in percentuali). A $x = 100$ il prezzo è $p = 9 - 3 = 6$:

$$\varepsilon(6) = -\frac{100}{3}\cdot\frac{6}{100} = -2$$

$|\varepsilon| = 2 > 1$: domanda **elastica** — un aumento di prezzo dell'$1\%$ fa perdere il $2\%$ dei clienti. Regola generale (che si dimostra proprio con il ricavo marginale): quando la domanda è elastica, *alzare* il prezzo riduce il ricavo; il ricavo è massimo dove $\varepsilon = -1$. Qui: $MR(x) = 0$ per $x = 150$, cioè $p = 4.5$, dove infatti $\varepsilon(4.5) = -\frac{100}{3}\cdot\frac{4.5}{150} = -1$ ✓.

---

## 7. Visualizzazioni e interattività

### 7.1 La secante che diventa tangente ★

Questo è il cuore geometrico dell'intera lezione, in versione interattiva. La curva è $f(x) = x^2$, il punto base è $A = (1, 1)$. La seconda retta è la **secante** per $A$ e per il punto mobile $B = (1+h,\, (1+h)^2)$: la sua pendenza è esattamente il rapporto incrementale $R(h) = 2 + h$.

**Trascina $h$ verso $0$** e osserva la secante ruotare attorno ad $A$ fino ad adagiarsi sulla tangente $y = 2x - 1$ (pendenza $2$). Prova ad avvicinarti a $0$ sia da destra ($h > 0$) sia da sinistra ($h < 0$): la posizione limite è la stessa — è proprio questo che significa "il limite esiste".

```slider
{
  "fn": "x*x",
  "fn2": "1 + (2 + h) * (x - 1)",
  "domain": [-1.5, 3.5],
  "yDomain": [-1.5, 9],
  "title": "Secante per A=(1,1) e B=(1+h, (1+h)²) — per h → 0 diventa la tangente",
  "label1": "f(x) = x²",
  "label2": "Secante AB (pendenza 2 + h)",
  "pname": "h",
  "pmin": -0.95,
  "pmax": 2,
  "pdefault": 2,
  "pstep": 0.05,
  "plabel": "Incremento h"
}
```

*Osserva:* con $h = 2$ la secante taglia visibilmente la parabola in due punti lontani; con $h = 0.05$ i due punti sono ormai indistinguibili; con $h = 0$ esatto la retta mostrata è la tangente ($y = 2x - 1$). Il valore della pendenza è sempre $2 + h$: la tabella del §3.1, in forma di figura.

### 7.2 La tangente che scorre lungo la curva

Qui invece $h$ è già "andato a zero" e a muoversi è il **punto di tangenza** $a$: la retta mostrata è la tangente $y = 2ax - a^2$ in $(a, a^2)$. È la visualizzazione della *funzione derivata* (§3.5): a ogni posizione $a$ corrisponde una pendenza $2a$.

```slider
{
  "fn": "x*x",
  "fn2": "2*a*x - a*a",
  "domain": [-2.8, 2.8],
  "yDomain": [-0.5, 8],
  "title": "Tangente alla parabola y = x² nel punto (a, a²)",
  "label1": "f(x) = x²",
  "label2": "Tangente in x = a",
  "pname": "a",
  "pmin": -2.5,
  "pmax": 2.5,
  "pdefault": 1,
  "pstep": 0.1,
  "plabel": "Punto di tangenza  a"
}
```

*Osserva:* per $a = 0$ la tangente è orizzontale (vertice: punto stazionario); per $a > 0$ sale, per $a < 0$ scende — il segno di $f'(a) = 2a$ letto in figura.

### 7.3 La galleria dei punti patologici

**Il punto angoloso:** $f(x) = |x|$ in $0$. Le due semirette hanno pendenze $-1$ e $+1$: nessuna tangente unica possibile.

```plot
{
  "fn": "Math.abs(x)",
  "domain": [-2, 2],
  "title": "f(x) = |x| — punto angoloso nell'origine: f'₋(0) = −1 ≠ +1 = f'₊(0)"
}
```

**Il flesso a tangente verticale:** $f(x) = \sqrt[3]{x}$ in $0$. La curva è liscia all'occhio, ma nell'origine la pendenza esplode: il rapporto incrementale tende a $+\infty$ da entrambi i lati.

```plot
{
  "fn": "Math.cbrt(x)",
  "domain": [-2, 2],
  "title": "f(x) = ∛x — tangente verticale nell'origine: R(h) → +∞ da entrambi i lati"
}
```

**La cuspide:** $f(x) = \sqrt{|x|}$ in $0$. Come la precedente la pendenza esplode, ma con segni opposti dai due lati: il grafico scende a picco e risale a picco, formando la punta.

```plot
{
  "fn": "Math.sqrt(Math.abs(x))",
  "domain": [-2, 2],
  "title": "f(x) = √|x| — cuspide nell'origine: R(h) → −∞ da sinistra, +∞ da destra"
}
```

### 7.4 "Localmente retta": lo zoom sulla derivabilità

La proprietà del §3.9 — una funzione derivabile è indistinguibile dalla sua tangente sotto ingrandimento — mostrata con due fotogrammi della stessa curva $f(x) = x^2$ attorno al punto $(1,1)$, insieme alla tangente $y = 2x - 1$.

A scala normale, curva e tangente sono chiaramente diverse:

```plot
{
  "fn": "x*x",
  "fn2": "2*x - 1",
  "domain": [-0.5, 2.5],
  "title": "Scala normale: parabola e tangente in (1,1) ben distinte",
  "label1": "f(x) = x²",
  "label2": "y = 2x − 1"
}
```

Con uno zoom 25×, nello stesso punto, le due curve si fondono:

```plot
{
  "fn": "x*x",
  "fn2": "2*x - 1",
  "domain": [0.94, 1.06],
  "title": "Zoom 25× attorno a (1,1): curva e tangente indistinguibili",
  "label1": "f(x) = x²",
  "label2": "y = 2x − 1"
}
```

Confronta mentalmente con $|x|$: per quanto si ingrandisca l'origine, lo spigolo resta identico a se stesso. Lo zoom è il "test visivo" della derivabilità.

### 7.5 La derivata come funzione: il seno e la sua ombra

Il grafico mostra $\sin x$ insieme alla sua derivata $\cos x$ (§5.6). Verifica punto per punto la coerenza: dove il seno ha tangente orizzontale (massimi e minimi, $x = \pm\frac{\pi}{2}, \pm\frac{3\pi}{2}$) il coseno attraversa lo zero; dove il seno sale più ripido ($x = 0, \pm 2\pi$) il coseno tocca il suo massimo $+1$; dove il seno scende, il coseno è negativo.

```plot
{
  "fn": "Math.sin(x)",
  "fn2": "Math.cos(x)",
  "domain": [-6.28, 6.28],
  "title": "sin(x) e la sua derivata cos(x)",
  "label1": "f(x) = sin(x)",
  "label2": "f'(x) = cos(x)"
}
```

*Nota tecnica:* nei grafici interattivi di questa lezione il punto di tangenza non è evidenziato con un marcatore e lo zoom non è manovrabile dall'utente — i componenti attuali non lo prevedono (segnalato per sviluppo futuro); i grafici statici a doppia scala del §7.4 sostituiscono lo zoom interattivo.

---

## 8. Errori comuni

### ❌ Errore 1 — Scambiare il rapporto incrementale per la derivata

**Esempio sbagliato:** "Per $f(x) = x^2$ in $a = 1$, con $h = 0.01$ ottengo $R(0.01) = 2.01$, quindi $f'(1) = 2.01$."

**Perché è sbagliato:** il rapporto incrementale con un $h$ *fissato* è una velocità **media** su un intervallo, per quanto piccolo. La derivata è il **limite** per $h \to 0$: un'operazione qualitativamente diversa, non "un $h$ molto piccolo". $R(0.01) = 2.01$ è un'ottima *approssimazione*, ma il valore esatto è un altro numero.

**Versione corretta:** $f'(1) = \lim_{h \to 0}(2 + h) = 2$. Il rapporto incrementale approssima la derivata; il limite *è* la derivata.

### ❌ Errore 2 — "È continua, quindi è derivabile"

**Esempio sbagliato:** "$f(x) = |x - 3|$ è continua su tutto $\mathbb{R}$, quindi è derivabile su tutto $\mathbb{R}$."

**Perché è sbagliato:** l'implicazione vera va nel verso opposto (derivabile ⇒ continua, teorema 4.2). La continuità esclude i salti ma non gli spigoli, le cuspidi, le tangenti verticali, le oscillazioni (§3.8). $|x-3|$ ha un punto angoloso in $x = 3$: derivate laterali $-1$ e $+1$.

**Versione corretta:** $f$ è continua ovunque e derivabile ovunque **tranne che in $x = 3$**. E l'esempio di Weierstrass mostra che una funzione può essere continua ovunque e derivabile in nessun punto: la continuità non dà *nessuna* garanzia di derivabilità.

### ❌ Errore 3 — Valutare prima, derivare poi

**Esempio sbagliato:** "Devo calcolare $f'(3)$ per $f(x) = x^2$. Calcolo $f(3) = 9$, e la derivata di $9$ è $0$: quindi $f'(3) = 0$."

**Perché è sbagliato:** $f(3) = 9$ è una **costante**: il valore della funzione in un punto, che ha perso ogni informazione su *come la funzione varia* attorno a quel punto. La derivata in $3$ dipende dal comportamento di $f$ in tutto un intorno di $3$, non dal solo valore in $3$. L'ordine delle operazioni è: **prima** derivare (ottenendo la funzione $f'$), **poi** valutare.

**Versione corretta:** $f'(x) = 2x$, quindi $f'(3) = 6$. In notazione di Leibniz l'errore è scrivere $\frac{d}{dx}\bigl[f(3)\bigr]$ al posto di $\left.\frac{df}{dx}\right|_{x = 3}$.

### ❌ Errore 4 — Sostituire $h = 0$ nel rapporto incrementale

**Esempio sbagliato:** "$f'(x) = \frac{f(x+0) - f(x)}{0} = \frac{0}{0}$… la derivata non esiste mai?!"

**Perché è sbagliato:** il limite per $h \to 0$ *non* si calcola sostituendo $h = 0$: si studia il comportamento del rapporto per $h$ **vicino** a $0$ ma **diverso** da $0$. Il rapporto incrementale è sempre una forma $\frac{0}{0}$ *al bordo*: tutto il lavoro algebrico (sviluppare, raccogliere, razionalizzare — sezione 5) serve a riscrivere il rapporto in una forma equivalente per $h \neq 0$ in cui l'indeterminazione è sciolta, e **solo allora** si passa al limite.

**Versione corretta:** $\frac{(x+h)^2 - x^2}{h} = \frac{h(2x+h)}{h} \stackrel{h \neq 0}{=} 2x + h \xrightarrow{h \to 0} 2x$. La semplificazione di $h$ è lecita proprio perché nel limite $h \neq 0$.

### ❌ Errore 5 — Fidarsi del rapporto simmetrico

**Esempio sbagliato:** "Per verificare la derivabilità di $f(x) = |x|$ in $0$ uso due punti simmetrici: $\frac{f(0.01) - f(-0.01)}{0.02} = \frac{0.01 - 0.01}{0.02} = 0$. Il valore si stabilizza a $0$ per ogni $h$: quindi $f'(0) = 0$."

**Perché è sbagliato:** il rapporto *simmetrico* $\frac{f(a+h) - f(a-h)}{2h}$ non è la definizione di derivata. Per $|x|$ in $0$ vale identicamente $0$ (per simmetria della funzione!) eppure la derivata **non esiste** (dimostrazione 4.3): il rapporto simmetrico "salta" il punto $a$ e non si accorge dello spigolo, perché media la pendenza sinistra ($-1$) e destra ($+1$). Se la derivata esiste, il rapporto simmetrico vi converge; ma può convergere anche quando la derivata non esiste.

**Versione corretta:** usare la definizione vera (che "tocca" il punto $a$): i limiti di $\frac{f(0+h)-f(0)}{h}$ da destra e da sinistra valgono $+1$ e $-1$, sono diversi, la derivata non esiste. *(Curiosità applicativa: il rapporto simmetrico si usa davvero in analisi numerica perché è più preciso — ma solo dopo aver garantito per altra via che la derivata esiste.)*

### ❌ Errore 6 — "Il limite del rapporto è $+\infty$, quindi $f'(x_0) = +\infty$"

**Esempio sbagliato:** "Per $f(x) = \sqrt[3]{x}$ in $0$: $R(h) = h^{-2/3} \to +\infty$. Quindi $f$ è derivabile in $0$ con $f'(0) = +\infty$."

**Perché è sbagliato:** la definizione richiede che il limite esista **finito**. La derivata è un numero reale — deve poter fare da *pendenza* di una retta e da *coefficiente* dell'approssimazione lineare $f(x_0) + \ell h$, e "$\infty$" non può fare nessuna delle due cose. Se $R(h)$ diverge, la funzione **non è derivabile** nel punto; la scrittura $f'(0) = +\infty$ è al più un'abbreviazione descrittiva per "flesso a tangente verticale".

**Versione corretta:** $\sqrt[3]{x}$ non è derivabile in $0$; il suo grafico ha ivi tangente verticale (Tipo 3 della classificazione §3.8). Attenzione anche alla conseguenza teorica: per una tale $f$ il teorema "derivabile ⇒ continua" non è applicabile *nel senso che non serve* — la continuità va verificata per altra via.

### ❌ Errore 7 — Confondere "derivabile in $x_0$" con "derivata continua in $x_0$"

**Esempio sbagliato:** "Ho calcolato $f'(x) = 2x\sin(1/x) - \cos(1/x)$ per $x \neq 0$; poiché $\lim_{x \to 0} f'(x)$ non esiste, $f(x) = x^2\sin(1/x)$ non è derivabile in $0$."

**Perché è sbagliato:** l'esistenza di $f'(x_0)$ è definita dal limite del **rapporto incrementale in $x_0$**, non dal limite della **funzione derivata** $f'(x)$ per $x \to x_0$. Sono due limiti diversi e il secondo può non esistere mentre il primo esiste: è esattamente il caso di $x^2\sin(1/x)$, che ha $f'(0) = 0$ (dimostrazione 4.5) benché $f'$ sia discontinua in $0$.

**Versione corretta:** per decidere la derivabilità *in un punto sospetto* si torna alla definizione (rapporto incrementale), non si calcola il limite della derivata. *(Il limite di $f'$ dà informazioni solo sotto ipotesi aggiuntive — è il "teorema del limite della derivata", che richiede strumenti della lezione sullo studio di funzione.)*

### ❌ Errore 8 — Applicare la definizione dove non ha senso

**Esempio sbagliato:** "Per $f(x) = \sqrt{x}$ calcolo la derivata in $x_0 = 0$: il limite di $\frac{\sqrt{h}}{h}$ per $h \to 0$… considero anche $h < 0$… ma $\sqrt{h}$ non esiste! La definizione è rotta."

**Perché è sbagliato:** la definizione di derivata richiede che $x_0$ sia **interno** al dominio (§3.2, punto 1): serve spazio da *entrambi* i lati. Per $f(x) = \sqrt{x}$, il punto $0$ è un estremo del dominio $[0, +\infty)$: il limite bilaterale non è nemmeno formulabile.

**Versione corretta:** in un estremo del dominio si studia la **derivata laterale** appropriata: qui $f'_+(0) = \lim_{h\to 0^+}\frac{\sqrt{h}}{h} = \lim_{h\to 0^+}\frac{1}{\sqrt{h}} = +\infty$, che non è finita — quindi nemmeno la derivata destra esiste: $\sqrt{x}$ parte dall'origine con tangente verticale. Prima di scrivere qualunque rapporto incrementale, controlla sempre *dove vive* la funzione.

---

## 9. Collegamenti e applicazioni

### Nella biblioteca

**A monte (da dove veniamo):**

- *Limite — idea intuitiva* e *Limite — definizione ε-δ* (Analisi 01–02): la derivata è un limite; l'algebra dei limiti, i limiti laterali e il teorema del confronto sono gli strumenti di ogni dimostrazione di questa lezione.
- *Continuità* (Analisi 04): il teorema 4.2 salda i due concetti; la gerarchia derivabile ⇒ continua ⇒ definita organizza tutta l'analisi locale.

**A valle (dove si va da qui):**

- *Regole di derivazione* (Analisi 07): linearità, prodotto, quoziente, funzione composta e inversa + tavola completa delle derivate elementari — il "motore di calcolo" che evita di tornare ogni volta alla definizione.
- *Studio di funzione* (Analisi 09): il segno di $f'$ (crescenza/decrescenza), i punti stazionari, la derivata seconda e la concavità, i teoremi di Rolle e Lagrange: tutta l'analisi grafica poggia sulla definizione data qui.
- *Sviluppi di Taylor* (Analisi 10): la linearizzazione del §5.7 è il polinomio di Taylor di ordine 1; Taylor generalizza a ordine $n$ la domanda "qual è il polinomio che meglio approssima $f$ vicino a $x_0$?".
- Più avanti nel percorso: l'*integrale* è l'operazione inversa della derivata (teorema fondamentale del calcolo), e in più variabili la caratterizzazione del §3.9 diventa la definizione di *differenziabilità* con gradiente e matrice jacobiana.

### Nelle discipline

- **Fisica.** Velocità e accelerazione sono le derivate prima e seconda della posizione (Esempio 3); la seconda legge di Newton $F = m\,s''(t)$ è un'equazione tra derivate. Corrente elettrica ($i = \frac{dq}{dt}$), potenza ($P = \frac{dE}{dt}$): quasi ogni grandezza fisica "istantanea" è una derivata.
- **Economia e finanza.** Costo, ricavo e profitto marginali sono derivate (Esempi 7–8); l'elasticità è un rapporto di derivate percentuali; la condizione di ottimo $f'(x) = 0$ governa la massimizzazione del profitto. In finanza, la sensibilità del prezzo di un derivato al sottostante (il "Delta") è letteralmente una derivata.
- **Statistica e machine learning.** L'addestramento di modelli minimizza una funzione di perdita seguendo il *gradiente* — il vettore delle derivate parziali (§3.10); la backpropagation delle reti neurali è un'applicazione sistematica della regola della catena.
- **Ingegneria e grafica.** Il raccordo liscio dell'Esempio 6 è il principio degli *spline*: curve da disegno industriale e font digitali sono incollate imponendo l'uguaglianza delle derivate nei punti di giunzione.
- **Biologia e medicina.** Tassi di crescita di popolazioni, velocità di diffusione di un farmaco nel sangue, dinamica delle epidemie: i modelli sono equazioni differenziali, cioè relazioni tra funzioni e loro derivate.

---

## 10. Riepilogo

| Concetto | Definizione / Formula | Note |
|----------|----------------------|------|
| Rapporto incrementale | $R(h) = \dfrac{f(x_0+h) - f(x_0)}{h}$ | tasso di variazione **medio**; pendenza della secante |
| Derivata in un punto | $f'(x_0) = \displaystyle\lim_{h \to 0} R(h)$ | deve esistere **finito**; $x_0$ interno al dominio |
| Forma equivalente | $f'(x_0) = \displaystyle\lim_{x \to x_0} \dfrac{f(x) - f(x_0)}{x - x_0}$ | stessa cosa, cambio di variabile $h = x - x_0$ |
| Derivate laterali | $f'_\pm(x_0) = \displaystyle\lim_{h \to 0^\pm} R(h)$ | derivabile ⟺ entrambe finite e uguali |
| Retta tangente | $y = f(x_0) + f'(x_0)(x - x_0)$ | punto + pendenza × spostamento |
| Linearizzazione | $f(x_0 + h) \approx f(x_0) + f'(x_0)h$ | errore $r(h) = o(h)$: va a zero più in fretta di $h$ |
| Differenziale | $df = f'(x_0)\,dx$ | la parte lineare della variazione |
| Derivabilità ⇒ continuità | (teorema 4.2) | il viceversa è **falso**: $\lvert x \rvert$ in $0$ |
| Funzione derivata | $f' : x \mapsto f'(x)$ | può esistere ovunque ed essere discontinua ($x^2\sin\frac{1}{x}$) |
| Punto angoloso | $f'_- \neq f'_+$, entrambe finite | $\lvert x \rvert$ in $0$ |
| Cuspide | $R(h) \to \mp\infty$ e $\pm\infty$ | $\sqrt{\lvert x \rvert}$ in $0$ |
| Tangente verticale | $R(h) \to +\infty$ (o $-\infty$) da entrambi i lati | $\sqrt[3]{x}$ in $0$ |
| Oscillazione | $\lim R(h)$ non esiste, nemmeno infinito | $x\sin\frac{1}{x}$ in $0$ |
| Derivate ricavate qui | $(c)' = 0$, $(ax+b)' = a$, $(x^n)' = nx^{n-1}$, $\left(\frac{1}{x}\right)' = -\frac{1}{x^2}$, $(\sqrt{x})' = \frac{1}{2\sqrt{x}}$, $(\sin x)' = \cos x$ | tutte dalla definizione (sezione 5) |
| Costo marginale | $MC(x) = C'(x) \approx C(x+1) - C(x)$ | analisi marginale in economia |

Le tre letture della derivata, da tenere insieme: **tasso di variazione istantaneo** (fisica), **pendenza della tangente** (geometria), **coefficiente della migliore approssimazione lineare** (la lettura che generalizza a più variabili).

---

## 11. Esercizi

Gli esercizi sono in ordine di difficoltà crescente: 1–3 di base (calcoli dalla definizione e tangenti), 4–6 intermedi (funzioni a tratti e derivate laterali), 7 applicato (economia), 8 avanzato (dimostrazione teorica). Prova a risolverli prima di aprire le soluzioni.

### Esercizio 1 — Derivata dalla definizione (base)

Calcola $f'(2)$ per $f(x) = x^2 - 4x + 3$ usando la definizione come limite. Interpreta geometricamente il risultato.

<details>
<summary>Soluzione</summary>

Scriviamo il rapporto incrementale in $x_0 = 2$:

$$f'(2) = \lim_{h\to 0} \frac{f(2+h) - f(2)}{h}$$

**Calcolo di $f(2+h)$:** $(2+h)^2 - 4(2+h) + 3 = 4 + 4h + h^2 - 8 - 4h + 3 = h^2 - 1$.

**Calcolo di $f(2)$:** $4 - 8 + 3 = -1$.

**Rapporto e limite:**

$$f'(2) = \lim_{h\to 0} \frac{(h^2 - 1) - (-1)}{h} = \lim_{h\to 0} \frac{h^2}{h} = \lim_{h\to 0} h = 0$$

**Interpretazione geometrica:** $f'(2) = 0$ significa tangente orizzontale in $x = 2$: punto stazionario. In effetti, completando il quadrato, $f(x) = (x-2)^2 - 1$: una parabola con vertice proprio in $(2, -1)$ — il punto di minimo, dove la tangente è orizzontale. ✓

</details>

### Esercizio 2 — Definizione e tangente per il reciproco (base)

Per $f(x) = \dfrac{1}{x}$, calcola $f'(2)$ **dalla definizione** e scrivi l'equazione della retta tangente al grafico nel punto $\left(2, \frac{1}{2}\right)$.

<details>
<summary>Soluzione</summary>

**Derivata dalla definizione.** Rapporto incrementale in $x_0 = 2$ (per $h \neq 0$ piccolo, cosicché $2 + h \neq 0$):

$$\frac{f(2+h) - f(2)}{h} = \frac{\dfrac{1}{2+h} - \dfrac{1}{2}}{h}$$

Denominatore comune al numeratore:

$$\frac{1}{2+h} - \frac{1}{2} = \frac{2 - (2+h)}{2(2+h)} = \frac{-h}{2(2+h)}$$

Quindi il rapporto diventa:

$$\frac{1}{h} \cdot \frac{-h}{2(2+h)} = \frac{-1}{2(2+h)} \xrightarrow{\;h \to 0\;} \frac{-1}{2 \cdot 2} = -\frac{1}{4}$$

Dunque $f'(2) = -\frac{1}{4}$ (coerente con la formula generale del §5.4: $-\frac{1}{x^2}$ in $x=2$ dà $-\frac{1}{4}$ ✓).

**Retta tangente** (formula del §3.4):

$$y = f(2) + f'(2)(x - 2) = \frac{1}{2} - \frac{1}{4}(x - 2) = -\frac{x}{4} + 1$$

Verifica: in $x = 2$, $y = -\frac{1}{2} + 1 = \frac{1}{2}$ ✓. La pendenza negativa riflette il fatto che $\frac{1}{x}$ è decrescente sul ramo positivo.

</details>

### Esercizio 3 — Tangente alla radice (base)

Trova l'equazione della retta tangente a $f(x) = \sqrt{x}$ nel punto $(4, 2)$, e usala per stimare $\sqrt{4.2}$ senza calcolatrice.

<details>
<summary>Soluzione</summary>

**Pendenza:** dal §5.5, $f'(x) = \dfrac{1}{2\sqrt{x}}$, quindi $f'(4) = \dfrac{1}{2\sqrt{4}} = \dfrac{1}{4}$.

**Tangente in $(4, 2)$:**

$$y = 2 + \frac{1}{4}(x - 4) = \frac{x}{4} + 1$$

Verifica: per $x = 4$, $y = 1 + 1 = 2$ ✓.

**Stima di $\sqrt{4.2}$** per linearizzazione (§5.7): la tangente approssima la curva vicino a $x = 4$:

$$\sqrt{4.2} \approx \frac{4.2}{4} + 1 = 1.05 + 1 = 2.05$$

Valore vero: $\sqrt{4.2} = 2.04939\ldots$ — l'errore è sotto il millesimo. Nota che la stima è per *eccesso*: la radice è concava e sta sempre *sotto* la sua tangente.

</details>

### Esercizio 4 — Studio completo di derivabilità (intermedio)

Studia continuità e derivabilità di $f(x) = |x - 3|$ su tutto $\mathbb{R}$, e scrivi esplicitamente la funzione derivata $f'$ con il suo dominio.

<details>
<summary>Soluzione</summary>

**Riscrittura a tratti.** Per definizione di valore assoluto:

$$f(x) = \begin{cases} x - 3 & x \ge 3 \\ 3 - x & x < 3 \end{cases}$$

**Continuità.** Su $x > 3$ e $x < 3$, $f$ coincide con polinomi (continui). In $x = 3$: limite destro $= 0$, limite sinistro $= 0$, valore $f(3) = 0$: continua anche lì. Quindi continua su $\mathbb{R}$. ✓

**Derivabilità fuori dal punto critico.** Per $x > 3$: $f$ coincide con la retta $x - 3$, quindi $f'(x) = 1$. Per $x < 3$: $f$ coincide con $3 - x$, quindi $f'(x) = -1$.

**Nel punto $x = 3$** — derivate laterali dalla definizione:

$$f'_+(3) = \lim_{h\to 0^+}\frac{|3 + h - 3| - 0}{h} = \lim_{h\to 0^+}\frac{|h|}{h} = \lim_{h\to 0^+}\frac{h}{h} = 1$$

$$f'_-(3) = \lim_{h\to 0^-}\frac{|h|}{h} = \lim_{h\to 0^-}\frac{-h}{h} = -1$$

$f'_+(3) = 1 \neq -1 = f'_-(3)$: **punto angoloso**, $f$ non derivabile in $3$.

**Funzione derivata:**

$$f' : \mathbb{R}\setminus\{3\} \to \mathbb{R}, \qquad f'(x) = \begin{cases} 1 & x > 3 \\ -1 & x < 3 \end{cases}$$

È l'esempio 4.3 traslato da $0$ a $3$: traslare orizzontalmente una funzione trasla anche i suoi punti di non derivabilità.

</details>

### Esercizio 5 — Progettare il raccordo (intermedio)

Determina $b$ e $c$ in modo che $f(x) = \begin{cases} x^3 & x \le 1 \\ bx + c & x > 1 \end{cases}$ sia derivabile in $x_0 = 1$.

<details>
<summary>Soluzione</summary>

Due condizioni, nell'ordine giusto (come nell'Esempio 6).

**Condizione 1 — continuità in $1$:** limite sinistro $1^3 = 1$, limite destro $b + c$. Quindi:

$$b + c = 1$$

**Condizione 2 — derivate laterali uguali:** da sinistra, $(x^3)' = 3x^2$ (regola della potenza, §5.3), quindi $f'_-(1) = 3$; da destra, $(bx + c)' = b$. Quindi:

$$b = 3$$

**Sistema:** $b = 3$, $c = 1 - 3 = -2$:

$$f(x) = \begin{cases} x^3 & x \le 1 \\ 3x - 2 & x > 1 \end{cases}$$

**Controllo con l'interpretazione geometrica:** la tangente alla cubica in $(1,1)$ è $y = f(1) + f'(1)(x-1) = 1 + 3(x - 1) = 3x - 2$ — il ramo rettilineo è esattamente la tangente del ramo cubico, come deve essere per un raccordo liscio. ✓

</details>

### Esercizio 6 — Una funzione derivabile "nonostante" il valore assoluto (intermedio-avanzato)

Dimostra che $f(x) = x\,|x|$ è derivabile su **tutto** $\mathbb{R}$ (incluso $x = 0$) e scrivi $f'(x)$. Perché qui il valore assoluto non crea lo spigolo?

<details>
<summary>Soluzione</summary>

**Riscrittura a tratti:**

$$f(x) = x|x| = \begin{cases} x^2 & x \ge 0 \\ -x^2 & x < 0 \end{cases}$$

**Fuori dall'origine:** per $x > 0$, $f'(x) = 2x$; per $x < 0$, $f'(x) = -2x$. (Polinomi su intervalli aperti.)

**Nell'origine — dalla definizione:**

$$R(h) = \frac{f(h) - f(0)}{h} = \frac{h|h| - 0}{h} = |h|$$

(abbiamo semplificato $h$, lecito per $h \neq 0$). Quindi:

$$f'(0) = \lim_{h \to 0} |h| = 0$$

Il limite esiste finito: $f$ **è derivabile in $0$** con $f'(0) = 0$. Non servono nemmeno le laterali: $|h| \to 0$ da entrambi i lati.

**Funzione derivata su tutto $\mathbb{R}$:** i tre pezzi ($2x$ per $x>0$, $0$ in $0$, $-2x$ per $x<0$) si compattano in:

$$f'(x) = 2|x|$$

**Perché niente spigolo?** In $|x|$ i due rami arrivano nell'origine con pendenze $\pm 1$ *diverse*. In $x|x|$ i due rami sono $x^2$ e $-x^2$: entrambi arrivano nell'origine *appiattendosi* (pendenza $0$ da entrambi i lati) — le semitangenti coincidono. Il valore assoluto crea il problema solo dove produce un *cambio brusco di pendenza*, non ovunque appaia. (Bonus: $f'(x) = 2|x|$ è continua ma a sua volta non derivabile in $0$: quindi $f$ è derivabile ovunque ma non due volte derivabile in $0$.)

</details>

### Esercizio 7 — Analisi marginale (applicato)

Il costo per produrre $x$ paia di scarpe al giorno è $C(x) = 500 + 8x + 0.02x^2$ (in euro).

**(a)** Calcola il costo marginale a $x = 50$ e confrontalo con il costo effettivo del $51$-esimo paio.
**(b)** Il prezzo di vendita è fissato a $12$ € al paio. Conviene aumentare la produzione oltre le 50 paia? Fino a quale livello di produzione conviene produrre di più?

<details>
<summary>Soluzione</summary>

**(a) Costo marginale.** $C'(x) = 8 + 0.04x$ (linearità + regola della potenza), quindi:

$$MC(50) = 8 + 0.04 \times 50 = 10 \;\text{euro}$$

Costo effettivo del 51-esimo paio:

$$C(51) - C(50) = \bigl[500 + 408 + 0.02 \times 2601\bigr] - \bigl[500 + 400 + 0.02 \times 2500\bigr] = 960.02 - 950 = 10.02 \;\text{euro}$$

La derivata stima $10$ €, il valore vero è $10.02$ €: la linearizzazione con $h = 1$ funziona (errore $0.2\%$).

**(b) Decisione al margine.** Il paio in più costa $\approx 10$ € e si vende a $12$ €: margine positivo di $2$ € — **sì, conviene** aumentare la produzione. Conviene finché il ricavo marginale ($12$ €, costante perché il prezzo è fisso) supera il costo marginale:

$$12 > MC(x) = 8 + 0.04x \iff 0.04x < 4 \iff x < 100$$

Conviene espandersi **fino a $x = 100$ paia al giorno**, dove costo marginale e prezzo si eguagliano ($MC(100) = 12$): oltre, ogni paio aggiuntivo costa più di quanto rende. È la condizione di ottimo "ricavo marginale = costo marginale" — cioè, matematicamente, il punto stazionario del profitto $\pi(x) = 12x - C(x)$: $\pi'(x) = 12 - 8 - 0.04x = 0 \Rightarrow x = 100$.

</details>

### Esercizio 8 — Le funzioni pari hanno tangente orizzontale nell'origine (avanzato)

Sia $f$ una funzione **pari** (cioè $f(-x) = f(x)$ per ogni $x$) e **derivabile in $0$**. Dimostra, usando solo la definizione di derivata, che necessariamente:

$$f'(0) = 0$$

Poi spiega perché questo *non* contraddice l'esempio di $|x|$ (pari, ma con spigolo nell'origine).

<details>
<summary>Soluzione</summary>

**Strategia:** calcoliamo il limite del rapporto incrementale in $0$ in due modi — lungo $h$ e lungo $-h$ — e usiamo la parità per collegarli.

**Passo 1.** Per ipotesi $f$ è derivabile in $0$, cioè esiste finito:

$$f'(0) = \lim_{h\to 0}\frac{f(h) - f(0)}{h}$$

**Passo 2 — sostituzione $h \mapsto -h$.** Se $h \to 0$, anche $-h \to 0$; il cambio di variabile nei limiti (lo stesso del teorema 4.1) dà:

$$f'(0) = \lim_{h\to 0}\frac{f(-h) - f(0)}{-h}$$

(abbiamo semplicemente rinominato il modo in cui l'incremento si avvicina a zero: il limite, che esiste per ipotesi, non cambia).

**Passo 3 — parità.** Poiché $f(-h) = f(h)$:

$$f'(0) = \lim_{h\to 0}\frac{f(h) - f(0)}{-h} = -\lim_{h\to 0}\frac{f(h) - f(0)}{h} = -f'(0)$$

**Passo 4 — conclusione.** L'unico numero uguale al proprio opposto è zero:

$$f'(0) = -f'(0) \implies 2f'(0) = 0 \implies f'(0) = 0 \qquad \blacksquare$$

Interpretazione geometrica: il grafico di una funzione pari è simmetrico rispetto all'asse $y$; se nell'origine c'è una tangente, la simmetria costringe la tangente a essere simmetrica di se stessa, cioè orizzontale.

**Perché $|x|$ non è un controesempio:** $|x|$ è pari, ma **non è derivabile in $0$** — l'ipotesi del teorema non è soddisfatta, quindi il teorema non dice nulla su di lei. La dimostrazione al Passo 3 produce infatti $f'(0) = -f'(0)$ *solo se quel limite esiste*: per $|x|$ non esiste (dimostrazione 4.3), e non c'è nessuna contraddizione. Attenzione dunque all'enunciato corretto: "pari **e derivabile in 0** ⇒ $f'(0) = 0$", non "pari ⇒ derivabile con derivata nulla". Verifica sugli esempi noti: $x^2$ (pari, $f'(0) = 0$ ✓), $\cos x$ (pari, $(\cos)'(0) = -\sin 0 = 0$ ✓), $x^2\sin(1/x)$ prolungata con $f(0)=0$... non è pari, ma il suo $f'(0) = 0$ arriva dal confronto (dim. 4.5).

</details>

---

## 12. Fonti

Questa lezione integra tre fonti del catalogo. Tutto il materiale è stato rielaborato: nessun passaggio è una traduzione o trascrizione letterale.

- **openstax-calculus-1** (*Calculus Volume 1*, OpenStax) — **fonte primaria**. Capitoli 3.1–3.2 per il percorso didattico (secante → tangente, velocità istantanea, tabelle numeriche del rapporto incrementale, l'esempio $x\sin(1/x)$ e il raccordo liscio); capitolo 3.4 per l'analisi marginale (costo e ricavo marginale, i numeri dell'Esempio 8 sono ricalcolati sul suo Esempio 3.38); capitolo 4.2 per la linearizzazione ($L(x)$ e la stima di $\sqrt{9.1}$).
- **villanacci-math1** (appunti del corso, Matematica 1) — **appunti del professore**, con precedenza notazionale. Capitolo 9: definizione rigorosa con $x_0$ interno al dominio e richiesta di limite finito, derivate laterali e criterio di derivabilità, definizione di funzione derivata e derivate $n$-esime, teorema "derivabile ⇒ continua" (la dimostrazione 4.2 segue la sua struttura a passi giustificati), gli esempi $|x|$, $\sqrt{|x|}$ (cuspide), la funzione segno, il raccordo a tratti e $x^2\sin(1/x)$ (dagli esercizi del capitolo).
- **villanacci-math2** (appunti del corso, Matematica 2) — **appunti del professore**. §16.1: la caratterizzazione della derivabilità come esistenza dell'approssimazione lineare con resto $o(h)$ (teorema 4.4 e §3.9) e la sua promozione a *definizione* di differenziabilità in $\mathbb{R}^n$ (§3.10), inclusa l'osservazione che le derivate parziali non bastano.

### Discrepanze tra fonti

1. **Forma della definizione.** Villanacci definisce la derivata con $\lim_{x \to x_0}\frac{f(x)-f(x_0)}{x-x_0}$; OpenStax privilegia la forma $\lim_{h \to 0}\frac{f(a+h)-f(a)}{h}$. Le due forme sono equivalenti (dimostrazione 4.1): questa lezione le presenta entrambe, adottando la forma con $h$ nei calcoli (più maneggevole) e quella con $x \to x_0$ dove è più trasparente (teorema 4.2).
2. **Ipotesi sul punto.** Villanacci richiede esplicitamente che $x_0$ sia **interno** al dominio; OpenStax chiede che $f$ sia definita su un intervallo aperto contenente il punto — condizioni sostanzialmente equivalenti, ma la formulazione di Villanacci è più precisa per domini generali ed è quella adottata (§3.2 e Errore 8).
3. **Notazione del logaritmo.** Villanacci usa $\log$ per il logaritmo naturale; OpenStax usa $\ln$. Per la precedenza degli appunti del corso, in questa biblioteca $\log$ senza base indica il logaritmo naturale (la questione è marginale in questa lezione, centrale nella successiva).
4. **Tangente verticale.** OpenStax parla di "funzione non differenziabile con tangente verticale" descrivendo il limite infinito del rapporto incrementale; Villanacci tratta i limiti infiniti delle derivate laterali negli esempi (es. $\sqrt{|x|}$) senza mai chiamare $f'(x_0) = \pm\infty$ una derivata. La lezione segue Villanacci: derivata solo se il limite è **finito**; i limiti infiniti servono solo a *classificare* i punti di non derivabilità (§3.8).
5. **Funzione di Weierstrass.** Nessuna delle fonti a catalogo la tratta: la menzione nel §3.8 è un'integrazione culturale esterna (fatto storico standard, 1872), segnalata qui per trasparenza; non vengono dati né costruzione né dimostrazione.



