---
id: analisi-03-calcolo-limiti
subject: analisi
topic_it: Limiti e continuità
topic_en: Limits and continuity
title_it: Calcolo dei limiti e forme indeterminate
title_en: Computing limits and indeterminate forms
level: blue
order: 3
source_book: "J. Stewart, Calculus; MIT OCW 18.01"
source_chapter: "Cap. 2 — Tecniche per i limiti"
---

## 1. Intuizione e motivazione

Immagina di pesare due oggetti su una bilancia ultra-sensibile. Se entrambi pesano quasi zero, il rapporto tra i loro pesi è incerto — la bilancia non sa "chi vince". Questo è il cuore di una **forma indeterminata**: il risultato del limite non si può dedurre dai soli valori limite dei pezzi, ma dipende da *come* essi si avvicinano ai loro valori critici — cioè dalla loro "velocità di convergenza".

Le forme indeterminate come $\frac{0}{0}$, $\frac{\infty}{\infty}$, $0 \cdot \infty$, $\infty - \infty$, $0^0$, $1^\infty$, $\infty^0$ non hanno un valore predefinito. La loro risoluzione richiede tecniche specifiche: fattorizzazione algebrica, razionalizzazione, mcd, o la potente regola di De l'Hôpital. Il calcolo differenziale fornisce strumenti sistematici per "sbrogliare" queste situazioni.

Nella pratica scientifica le forme indeterminate sono onnipresenti: la velocità istantanea è un $\frac{0}{0}$, le trasformate di Fourier portano al limite di $\frac{\sin(x)}{x}$ per $x\to 0$, le equazioni di campo della fisica relativistica sono piene di rapporti che tendono a $\frac{\infty}{\infty}$. Sapere come trattarle è una competenza imprescindibile per ogni matematico, fisico o ingegnere.

---

## 2. Prerequisiti

- Definizione di **limite** e limiti unilaterali (lezione 1)
- Definizione ε–δ (lezione 2) per il rigore sottostante
- **Fattorizzazione** di polinomi: $x^n - a^n = (x-a)(x^{n-1} + ax^{n-2} + \cdots + a^{n-1})$
- **Razionalizzazione**: moltiplica per il coniugato $(\sqrt{f} + \sqrt{g})$ per eliminare radici
- Concetto base di **derivata** (che verrà formalizzato in seguito): la regola di De l'Hôpital la utilizza
- Limite notevole fondamentale: $\lim_{x\to 0} \frac{\sin x}{x} = 1$ (dimostrato in lezione 5)

---

## 3. Teoria passo-passo

### Algebra dei limiti

**Teorema (Algebra dei limiti).** Se $\lim_{x\to a} f(x) = L$ e $\lim_{x\to a} g(x) = M$ (entrambi finiti), allora:

$$\lim_{x \to a} [f(x) \pm g(x)] = L \pm M$$

$$\lim_{x \to a} [f(x) \cdot g(x)] = L \cdot M$$

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M} \quad \text{se } M \neq 0$$

$$\lim_{x \to a} [f(x)]^n = L^n \quad \text{per } n \in \mathbb{N}$$

$$\lim_{x \to a} \sqrt[n]{f(x)} = \sqrt[n]{L} \quad \text{se } L \geq 0 \text{ (per } n \text{ pari)}$$

**Attenzione:** queste regole si applicano solo quando $L$ e $M$ esistono e sono finiti. Se $M = 0$ nel caso della divisione, o se uno dei limiti è infinito, si presentano le forme indeterminate, per le quali le regole non si applicano direttamente.

### Le sette forme indeterminate

| Forma | Simbolo | Tecniche principali |
| --- | --- | --- |
| Zero su zero | $\frac{0}{0}$ | Fattorizzazione, razionalizzazione, De l'Hôpital |
| Infinito su infinito | $\frac{\infty}{\infty}$ | Divisione per grado massimo, De l'Hôpital |
| Zero per infinito | $0 \cdot \infty$ | Riscrivere come $\frac{0}{1/\infty}$ o $\frac{\infty}{1/0}$ |
| Infinito meno infinito | $\infty - \infty$ | Razionalizzazione, mcd, riduzione a $\frac{0}{0}$ |
| Zero alla zero | $0^0$ | Logaritmo, riduzione a $0 \cdot \infty$ |
| Uno alla infinito | $1^\infty$ | Logaritmo, riduzione a $0 \cdot \infty$ |
| Infinito alla zero | $\infty^0$ | Logaritmo, riduzione a $0 \cdot \infty$ |

### Gerarchia delle "velocità": infiniti e infinitesimi a confronto

Quando $x \to +\infty$, le seguenti funzioni tendono all'infinito, ciascuna più lentamente della precedente:

$$\ln x \ll x^\alpha \ll x^n \ll e^x \ll e^{x^2} \quad (\alpha > 0, n \geq 1)$$

Il simbolo $\ll$ indica che il rapporto tra la funzione a sinistra e quella a destra tende a 0. Questa gerarchia è fondamentale per risolvere le forme $\frac{\infty}{\infty}$: la funzione "più grande" nella gerarchia vince.

### Regola di De l'Hôpital

**Teorema (De l'Hôpital).** Se $\lim_{x\to a} f(x) = 0$ e $\lim_{x\to a} g(x) = 0$ (oppure entrambi $\pm\infty$), se $f$ e $g$ sono derivabili in un intorno di $a$ con $g'(x) \neq 0$ nell'intorno (eccetto eventualmente in $a$), e se il limite $\lim_{x\to a} \frac{f'(x)}{g'(x)}$ esiste, allora:

$$\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}$$

**Ipotesi fondamentali (verificare sempre prima di applicare):**
1. La forma è effettivamente $\frac{0}{0}$ o $\frac{\infty}{\infty}$
2. Entrambe le funzioni sono derivabili nell'intorno di $a$
3. Il limite del rapporto delle derivate esiste (altrimenti la regola non dà informazioni)

La regola può essere applicata iterativamente se il risultato è ancora una forma indeterminata.

### Tecniche per le forme $0^0$, $1^\infty$, $\infty^0$

Per le potenze indeterminate $f(x)^{g(x)}$, si usa il logaritmo. Sia $A = \lim_{x\to a} f(x)^{g(x)}$. Allora:

$$\ln A = \lim_{x\to a} g(x) \cdot \ln f(x)$$

L'esponente $g(x) \cdot \ln f(x)$ ha la forma $0 \cdot \infty$, che si riconduce a $\frac{0}{0}$ o $\frac{\infty}{\infty}$, e si applica De l'Hôpital. Infine $A = e^{\ln A}$.

### Equivalenti asintotici per $x \to 0$

Queste approssimazioni si usano in modo rigoroso quando si prendono rapporti:

$$\sin x \sim x, \quad 1 - \cos x \sim \frac{x^2}{2}, \quad \tan x \sim x$$

$$\ln(1+x) \sim x, \quad e^x - 1 \sim x, \quad (1+x)^\alpha - 1 \sim \alpha x$$

Il simbolo $f \sim g$ significa $\lim \frac{f}{g} = 1$. Si possono **moltiplicare** equivalenti, ma **non sommare o sottrarre** (il termine errore potrebbe dominare).

---

## 4. Derivazione commentata

**Dimostrazione della regola di De l'Hôpital per la forma $\frac{0}{0}$ (caso base).**

**Teorema di Cauchy (valor medio generalizzato).** Se $f$ e $g$ sono continue su $[a,x]$ e derivabili su $(a,x)$ con $g'(c) \neq 0$, esiste $c \in (a,x)$ tale che:

$$\frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c)}{g'(c)}$$

**Applicazione al caso $\frac{0}{0}$:**

Supponiamo $f(a) = g(a) = 0$ (la forma è $\frac{0}{0}$). Per il teorema di Cauchy:

$$\frac{f(x)}{g(x)} = \frac{f(x) - f(a)}{g(x) - g(a)} = \frac{f'(c)}{g'(c)}$$

dove $c$ si trova tra $a$ e $x$, quindi $a < c < x$ (se $x > a$).

**Passaggio al limite:** quando $x \to a$, il punto $c$ — essendo compreso tra $a$ e $x$ — è "schiacciato" su $a$ per il teorema del confronto:

$$a < c < x \implies \lvert c - a \rvert < \lvert x - a \rvert \to 0 \implies c \to a$$

Quindi:

$$\lim_{x\to a} \frac{f(x)}{g(x)} = \lim_{x\to a} \frac{f'(c)}{g'(c)} = \lim_{c\to a} \frac{f'(c)}{g'(c)} = \lim_{x\to a} \frac{f'(x)}{g'(x)}$$

Questa è la tesi di De l'Hôpital. $\square$

**Commento chiave:** il teorema di Cauchy "separa" il rapporto $f/g$ nel rapporto $f'/g'$ valutato in un punto interno $c$. Al tendere di $x$ ad $a$, anche $c$ tende ad $a$, trasmettendo il limite. La regola trasferisce il problema dal rapporto di funzioni al rapporto di derivate, che è spesso più semplice da calcolare.

---

## 5. Esempi graduati

**Esempio 1 — Fattorizzazione semplice (forma $0/0$)**

$$\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$$

Sostituendo $x=2$: $\frac{0}{0}$. Fattorizziamo $x^2 - 4 = (x-2)(x+2)$:

$$= \lim_{x \to 2} \frac{(x-2)(x+2)}{x-2} = \lim_{x \to 2} (x+2) = 4$$

---

**Esempio 2 — Razionalizzazione (forma $0/0$ con radici)**

$$\lim_{x \to 0} \frac{\sqrt{1+x} - 1}{x}$$

Forma $0/0$. Moltiplichiamo per il coniugato $(\sqrt{1+x}+1)$:

$$= \lim_{x \to 0} \frac{(\sqrt{1+x}-1)(\sqrt{1+x}+1)}{x(\sqrt{1+x}+1)} = \lim_{x \to 0} \frac{(1+x) - 1}{x(\sqrt{1+x}+1)} = \lim_{x \to 0} \frac{1}{\sqrt{1+x}+1} = \frac{1}{2}$$

Questo limite è esattamente la derivata di $\sqrt{1+x}$ in $x=0$: $((\sqrt{1+x})')|_{x=0} = \frac{1}{2\sqrt{1}} = \frac{1}{2}$.

---

**Esempio 3 — Forma $\frac{\infty}{\infty}$: divisione per grado massimo**

$$\lim_{x \to +\infty} \frac{4x^3 - 2x + 1}{3x^3 + x^2}$$

Dividiamo numeratore e denominatore per $x^3$ (il grado massimo tra entrambi i polinomi):

$$= \lim_{x \to +\infty} \frac{4 - \frac{2}{x^2} + \frac{1}{x^3}}{3 + \frac{1}{x}} = \frac{4 - 0 + 0}{3 + 0} = \frac{4}{3}$$

**Regola rapida:** per $x\to\pm\infty$, il limite di un rapporto di polinomi dipende solo dai termini di grado massimo: $\frac{4x^3}{3x^3} = \frac{4}{3}$.

---

**Esempio 4 — Regola di De l'Hôpital (forma $0/0$, applicata due volte)**

$$\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$$

Sostituendo $x=0$: forma $0/0$. Prima applicazione di De l'Hôpital (deriviamo numeratore e denominatore separatamente):

$$= \lim_{x \to 0} \frac{(e^x - 1 - x)'}{(x^2)'} = \lim_{x \to 0} \frac{e^x - 1}{2x}$$

Ancora $0/0$. Seconda applicazione:

$$= \lim_{x \to 0} \frac{e^x}{2} = \frac{e^0}{2} = \frac{1}{2}$$

Questo risultato coincide con il coefficiente di $x^2$ nello sviluppo di Taylor di $e^x$: $e^x = 1 + x + \frac{x^2}{2} + \ldots$, da cui $\frac{e^x-1-x}{x^2} \approx \frac{1}{2}$.

---

**Esempio 5 — Forma $0 \cdot \infty$**

$$\lim_{x \to 0^+} x \ln x$$

La forma è $0 \cdot (-\infty)$. Riscriviamo come rapporto per poter applicare De l'Hôpital:

$$x \ln x = \frac{\ln x}{1/x} \quad \left(\text{forma } \frac{-\infty}{+\infty}\right)$$

De l'Hôpital:

$$= \lim_{x \to 0^+} \frac{(\ln x)'}{(1/x)'} = \lim_{x \to 0^+} \frac{1/x}{-1/x^2} = \lim_{x \to 0^+} \frac{x^2}{-x} \cdot \frac{1}{x} \cdot x = \lim_{x \to 0^+}(-x) = 0$$

Più semplicemente: $\frac{1/x}{-1/x^2} = -x$. Quindi il limite è $\lim_{x\to 0^+}(-x) = 0$.

La funzione $x\ln x$ tende a 0 per $x\to 0^+$: la potenza $x$ "vince" sul logaritmo.

---

**Esempio 6 — Forma $\infty - \infty$ (riduzione al mcd)**

$$\lim_{x \to 0} \left(\frac{1}{x} - \frac{1}{\sin x}\right)$$

La forma è $\infty - \infty$. Riduciamo al minimo comune denominatore:

$$= \lim_{x \to 0} \frac{\sin x - x}{x \sin x}$$

Forma $\frac{0}{0}$. Prima applicazione di De l'Hôpital:

$$= \lim_{x \to 0} \frac{\cos x - 1}{x\cos x + \sin x}$$

Ancora $0/0$. Seconda applicazione:

$$= \lim_{x \to 0} \frac{-\sin x}{-x\sin x + \cos x + \cos x} = \lim_{x \to 0} \frac{-\sin x}{2\cos x - x\sin x} = \frac{0}{2} = 0$$

---

**Esempio 7 — Forma $1^\infty$**

$$\lim_{x \to +\infty} \left(1 + \frac{3}{x}\right)^x$$

Forma $1^\infty$. Usiamo il logaritmo: sia $L = \lim_{x\to+\infty} x \ln\!\left(1 + \frac{3}{x}\right)$ (forma $\infty \cdot 0$).

Riscriviamo come rapporto:

$$L = \lim_{x\to+\infty} \frac{\ln\!\left(1+\frac{3}{x}\right)}{1/x} \quad \left(\text{forma } \frac{0}{0}\right)$$

De l'Hôpital (derivando rispetto a $x$):

$$L = \lim_{x\to+\infty} \frac{\frac{-3/x^2}{1+3/x}}{-1/x^2} = \lim_{x\to+\infty} \frac{3}{1+3/x} = 3$$

Dunque il limite originale è $e^L = e^3$.

---

**Esempio 8 — Forma $0^0$**

$$\lim_{x \to 0^+} x^x$$

Forma $0^0$. Usiamo il logaritmo: il limite di $x \ln x$ è stato calcolato nell'Esempio 5 e vale 0.

Quindi $\ln(\lim_{x\to 0^+} x^x) = \lim_{x\to 0^+} x\ln x = 0$, da cui $\lim_{x\to 0^+} x^x = e^0 = 1$.

---

## 6. Grafico

```plot
{
  "title": "f(x) = (eˣ − 1 − x)/x²: forma 0/0 in x=0, limite = 1/2",
  "fn": "(Math.abs(x) > 0.01) ? (Math.exp(x) - 1 - x) / (x * x) : NaN",
  "fn2": "0.5",
  "domain": [-3, 3],
  "yDomain": [-0.5, 2],
  "label1": "(eˣ−1−x)/x²",
  "label2": "y = 1/2 (valore del limite)"
}
```

---

## 7. Elemento interattivo

Lo slider mostra $\frac{x^a - 1}{x - 1}$ per $x \to 1$ al variare di $a$. Per ogni $a$ intero, il limite vale $a$ (è la derivata di $x^a$ in $x=1$, che vale $a \cdot 1^{a-1} = a$). Al crescere di $a$, la curva si incurva sempre più, ma il "buco" in $x=1$ vale sempre $a$.

```slider
{
  "title": "Forma 0/0: limite di (xᵃ−1)/(x−1) per x→1 al variare di a",
  "fn": "(Math.abs(x - 1) > 0.02) ? (Math.pow(Math.max(x, 0.001), a) - 1) / (x - 1) : NaN",
  "domain": [0.1, 3],
  "yDomain": [-1, 10],
  "pname": "a",
  "pmin": 1,
  "pmax": 4,
  "pdefault": 2,
  "pstep": 0.5,
  "plabel": "Esponente a (limite in x=1 = a)",
  "label1": "(xᵃ−1)/(x−1)"
}
```

---

## 8. Errori comuni

**Errore 1 — Applicare De l'Hôpital senza verificare la forma indeterminata.**
De l'Hôpital si applica SOLO se la forma è $\frac{0}{0}$ o $\frac{\infty}{\infty}$. Applicarlo a $\lim_{x\to 0} \frac{\sin x}{x+1}$ sarebbe sbagliato: il denominatore tende a 1, non a 0. Si sostituisce direttamente: $\frac{0}{1} = 0$. Applicare De l'Hôpital porterebbe al risultato errato $\frac{\cos 0}{1} = 1$.

**Errore 2 — Derivare il quoziente invece di numeratore e denominatore separatamente.**
In De l'Hôpital si derivano **separatamente** $f$ e $g$, ottenendo $\frac{f'(x)}{g'(x)}$. Non si usa la regola del quoziente $\frac{f'g - fg'}{g^2}$: questo è un errore grave che produce risultati completamente errati.

**Errore 3 — Fermarsi quando si ottiene $\frac{0}{0}$ una seconda volta.**
Se dopo una prima applicazione di De l'Hôpital si ottiene ancora $\frac{0}{0}$ (o $\frac{\infty}{\infty}$), si può riapplicare la regola, se le ipotesi (derivabilità) sono ancora soddisfatte. La regola è applicabile iterativamente.

**Errore 4 — Credere che $0 \cdot \infty = 0$ o $0 \cdot \infty = \infty$.**
La forma $0 \cdot \infty$ è indeterminata: il risultato può essere qualsiasi numero reale. Esempi: $\lim_{x\to\infty} x \cdot \frac{1}{x} = 1$, ma $\lim_{x\to\infty} x^2 \cdot \frac{1}{x} = +\infty$ e $\lim_{x\to\infty} \frac{1}{x^2} \cdot x = 0$. Bisogna sempre riscrivere come rapporto e applicare De l'Hôpital.

**Errore 5 — Trattare $\infty - \infty$ come 0.**
La forma $\infty - \infty$ è indeterminata. $\lim_{x\to\infty}(\sqrt{x^2+x} - x) = \frac{1}{2}$, non 0. $\lim_{x\to\infty}(x^2 - x) = +\infty$ — la differenza può essere infinita. Bisogna sempre ridurre ad altra forma prima di calcolare.

**Errore 6 — Applicare De l'Hôpital a $0^0$, $1^\infty$, $\infty^0$ direttamente.**
Queste forme non sono rapporti: non si può applicare De l'Hôpital direttamente. Prima si usa il logaritmo per portare l'esponente fuori: $\lim f^g = e^{\lim g \ln f}$. Solo allora il nuovo limite (che ha forma $0 \cdot \infty$ o $\frac{0}{0}$) è trattabile con De l'Hôpital.

---

## 9. Applicazioni reali

**Fisica — sviluppi perturbativi.** Le forme indeterminate $\frac{0}{0}$ compaiono continuamente nella fisica teorica quando si studia il limite non-relativistico di formule relativistiche. Ad esempio, l'energia cinetica relativistica $E_k = mc^2(\gamma - 1)$ con $\gamma = 1/\sqrt{1-v^2/c^2}$ deve ridursi a $\frac{1}{2}mv^2$ per $v \ll c$. Sviluppando $\gamma - 1$ per piccoli $v/c$, il calcolo si riduce esattamente a un limite $\frac{0}{0}$ risolvibile con De l'Hôpital o con lo sviluppo di Taylor.

**Economia — elasticità al prezzo.** L'elasticità della domanda è il limite del rapporto tra la variazione percentuale della quantità domandata e la variazione percentuale del prezzo, quando queste variazioni tendono a zero. Questo rapporto è della forma $\frac{0}{0}$ e corrisponde alla derivata logaritmica della funzione di domanda. Un'elasticità pari a $-2$ significa che un aumento del prezzo dell'1\% provoca una riduzione della domanda del 2\% — un'informazione cruciale per le strategie di prezzo.

**Ingegneria del segnale — funzione sinc.** In teoria dei segnali, la funzione $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$ è fondamentale nella trasformata di Fourier discreta e nei filtri digitali. Ha una forma $\frac{0}{0}$ in $x=0$, il cui valore per continuità è 1 (dal limite notevole). Questa funzione descrive la risposta impulsiva di un filtro passa-basso ideale: ogni volta che si digitalizza audio o si comprime un'immagine, la funzione sinc è implicitamente coinvolta nel processo di campionamento e ricostruzione.

---

## 10. Riepilogo tabellare

| Forma | Tecnica | Risultato tipico |
| --- | --- | --- |
| $\frac{0}{0}$ (polinomi) | Fattorizzazione e semplificazione | Limite finito |
| $\frac{0}{0}$ (radici) | Razionalizzazione con coniugato | Limite finito |
| $\frac{0}{0}$ o $\frac{\infty}{\infty}$ | Regola di De l'Hôpital | $\lim \frac{f'}{g'}$ |
| $\frac{\infty}{\infty}$ (polinomi) | Divisione per grado massimo | Rapporto dei coefficienti dominanti |
| $0 \cdot \infty$ | Riscrivere come $\frac{0}{1/\infty}$, poi De l'Hôpital | Qualsiasi valore |
| $\infty - \infty$ | Riduzione a $\frac{0}{0}$ (mcd, coniugato) | Qualsiasi valore |
| $0^0$, $1^\infty$, $\infty^0$ | Logaritmo + riduzione a $0 \cdot \infty$ | $e^L$ dove $L = \lim(g \cdot \ln f)$ |

---

## 11. Esercizi con soluzioni

<details>
<summary>Esercizio 1 — Fattorizzazione</summary>

**Testo:** Calcola $\lim_{x \to -2} \dfrac{x^2 + 5x + 6}{x + 2}$.

**Soluzione:**

Sostituendo $x=-2$: forma $0/0$. Fattorizziamo il numeratore trovando le radici:

$x^2+5x+6 = (x+2)(x+3)$

$$\lim_{x\to -2} \frac{(x+2)(x+3)}{x+2} = \lim_{x\to -2}(x+3) = -2+3 = 1$$

Il limite vale $\boxed{1}$.

</details>

<details>
<summary>Esercizio 2 — Razionalizzazione</summary>

**Testo:** Calcola $\lim_{x \to 9} \dfrac{\sqrt{x} - 3}{x - 9}$.

**Soluzione:**

Forma $0/0$. Razionalizziamo moltiplicando per $(\sqrt{x}+3)$:

$$\frac{\sqrt{x}-3}{x-9} \cdot \frac{\sqrt{x}+3}{\sqrt{x}+3} = \frac{x-9}{(x-9)(\sqrt{x}+3)} = \frac{1}{\sqrt{x}+3}$$

$$\lim_{x\to 9} \frac{1}{\sqrt{x}+3} = \frac{1}{3+3} = \frac{1}{6}$$

Il limite vale $\boxed{\dfrac{1}{6}}$.

</details>

<details>
<summary>Esercizio 3 — De l'Hôpital applicato due volte</summary>

**Testo:** Calcola $\lim_{x \to 0} \dfrac{1 - \cos x}{x^2}$.

**Soluzione:**

Forma $0/0$. Prima applicazione di De l'Hôpital:

$$= \lim_{x\to 0} \frac{\sin x}{2x}$$

Ancora $0/0$. Seconda applicazione:

$$= \lim_{x\to 0} \frac{\cos x}{2} = \frac{1}{2}$$

Il limite vale $\boxed{\dfrac{1}{2}}$.

*Nota:* questo coincide con il coefficiente di $x^2$ nello sviluppo $1 - \cos x = \frac{x^2}{2} - \frac{x^4}{24} + \ldots$

</details>

<details>
<summary>Esercizio 4 — Forma ∞ − ∞ con razionalizzazione</summary>

**Testo:** Calcola $\lim_{x \to +\infty} (\sqrt{x^2 + x} - x)$.

**Soluzione:**

Forma $\infty - \infty$. Razionalizziamo moltiplicando per il coniugato:

$$\sqrt{x^2+x} - x = \frac{(\sqrt{x^2+x}-x)(\sqrt{x^2+x}+x)}{\sqrt{x^2+x}+x} = \frac{x^2+x-x^2}{\sqrt{x^2+x}+x} = \frac{x}{\sqrt{x^2+x}+x}$$

Dividiamo numeratore e denominatore per $x > 0$ ($\sqrt{x^2} = x$ per $x > 0$):

$$= \frac{1}{\sqrt{1+1/x}+1} \xrightarrow{x\to+\infty} \frac{1}{\sqrt{1}+1} = \frac{1}{2}$$

Il limite vale $\boxed{\dfrac{1}{2}}$.

</details>

<details>
<summary>Esercizio 5 — Forma 1^∞</summary>

**Testo:** Calcola $\lim_{x \to 0} (1 + 2x)^{1/x}$.

**Soluzione:**

Forma $1^\infty$. Prendiamo il logaritmo: $L = \lim_{x\to 0} \frac{\ln(1+2x)}{x}$ (forma $0/0$).

De l'Hôpital: $L = \lim_{x\to 0} \frac{\frac{2}{1+2x}}{1} = 2$.

Il limite originale è $e^L = \boxed{e^2}$.

</details>

<details>
<summary>Esercizio 6 — Forma 0·∞ con logaritmo</summary>

**Testo:** Calcola $\lim_{x \to 0^+} x^2 \ln x$.

**Soluzione:**

Forma $0 \cdot (-\infty)$. Riscriviamo come $\dfrac{\ln x}{1/x^2}$ (forma $\frac{-\infty}{+\infty}$).

De l'Hôpital:

$$= \lim_{x\to 0^+} \frac{1/x}{-2/x^3} = \lim_{x\to 0^+} \frac{-x^2}{2} = 0$$

Il limite vale $\boxed{0}$.

</details>

<details>
<summary>Esercizio 7 — Limite con gradi diversi</summary>

**Testo:** Calcola $\lim_{x \to +\infty} \dfrac{x^3 + 2x - 1}{2x^4 - x^2 + 3}$.

**Soluzione:**

Il grado del numeratore (3) è strettamente minore del grado del denominatore (4): il limite è 0. Confermiamo dividendo per $x^4$:

$$= \lim_{x\to+\infty} \frac{\frac{1}{x} + \frac{2}{x^3} - \frac{1}{x^4}}{2 - \frac{1}{x^2} + \frac{3}{x^4}} = \frac{0}{2} = 0$$

Il limite vale $\boxed{0}$.

</details>

<details>
<summary>Esercizio 8 — Forma 0⁰</summary>

**Testo:** Calcola $\lim_{x \to 0^+} (\sin x)^x$.

**Soluzione:**

Forma $0^0$. Logaritmo: $L = \lim_{x\to 0^+} x \ln(\sin x)$.

Riscriviamo: $L = \lim_{x\to 0^+} \dfrac{\ln(\sin x)}{1/x}$ (forma $\frac{-\infty}{+\infty}$). De l'Hôpital:

$$L = \lim_{x\to 0^+} \frac{\frac{\cos x}{\sin x}}{-1/x^2} = \lim_{x\to 0^+} \frac{-x^2 \cos x}{\sin x}$$

Per $x\to 0^+$: $\frac{x}{\sin x} \to 1$ e $x\cos x \to 0$, quindi $\frac{-x^2\cos x}{\sin x} = -x\cos x \cdot \frac{x}{\sin x} \to 0 \cdot 1 = 0$.

Il limite originale è $e^0 = \boxed{1}$.

</details>
