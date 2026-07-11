---
id: finanza-14-tassi
subject: finanza
topic_it: Matematica finanziaria
topic_en: Financial mathematics
title_it: Tassi di interesse e struttura a termine
title_en: Interest rates and term structure
level: purple
order: 14
source_book: "J.C. Hull, Options, Futures and Other Derivatives; Bodie, Kane & Marcus, Investments"
source_chapter: "Cap. 4, 15 — Struttura a termine"
stato: da-rielaborare
---

## 1. Intuizione — analogia concreta + perché si studia

Immagina di prestare dei soldi a un amico. Se li vuole per una settimana, probabilmente accetti un interesse modesto — sei disposto ad aspettare, e il rischio che l'amico sparisca è basso. Se invece li vuole per dieci anni, vuoi un tasso molto più alto: ci sono più anni in cui qualcosa può andare storto, e in dieci anni l'inflazione potrebbe erodere il potere d'acquisto di quello che ti restituisce. Questo principio fondamentale — tassi più alti per scadenze più lunghe — produce la **curva dei tassi** (yield curve), uno degli strumenti più potenti della finanza moderna.

La struttura a termine dei tassi di interesse descrive come il rendimento di un investimento privo di rischio varia al variare della sua durata. Non è solo un fatto tecnico: la forma della curva codifica le aspettative di mercato sulla crescita economica futura, sull'inflazione e sulla politica monetaria. Una curva crescente segnala ottimismo; una curva invertita (tassi a breve superiori al lungo termine) ha storicamente anticipato tutte le recessioni americane degli ultimi 60 anni.

Comprendere i tassi spot, i tassi forward e i modelli della struttura a termine è indispensabile per: prezzare obbligazioni con cedola, costruire curve di sconto per valutare aziende, gestire il rischio di tasso in un portafoglio obbligazionario, e interpretare la politica monetaria. Le banche centrali, le banche commerciali, le compagnie assicurative e i fondi pensione vivono di questi strumenti.

I modelli di Vasicek e CIR (Cox-Ingersoll-Ross), che deriviamo in questa lezione, permettono non solo di descrivere la curva corrente, ma di modellarne l'evoluzione stocastica nel tempo — fondamentale per prezzare derivati su tassi (interest rate swaps, cap, floor, swaption) e per la gestione del rischio di tasso.

## 2. Prerequisiti

- Valore attuale e capitalizzazione continua (lezione F-01)
- Obbligazioni: prezzi, cedole, yield to maturity (lezione F-06)
- Duration e convexity (lezione F-07)
- Fondamenti di probabilità: variabili aleatorie, processi stocastici
- Equazioni differenziali ordinarie (per i modelli di tassi)
- Nozioni di moto browniano (per Vasicek e CIR)

## 3. Teoria

### Tassi spot

Il **tasso spot** $r(t)$ (o $r_0(t)$ per enfatizzare che è osservato a tempo 0) è il tasso di rendimento, espresso in capitalizzazione continua, per un investimento privo di rischio dalla data odierna alla data $t$. 

Il fattore di sconto corrispondente è:

$$B(0,t) = e^{-r(t) \cdot t}$$

dove $B(0,t)$ è il prezzo oggi di uno zero-coupon bond che paga 1€ alla scadenza $t$ (bond di sconto puro). La funzione $t \mapsto r(t)$ è la **struttura a termine** o **curva dei tassi**.

Nota: con capitalizzazione discreta annua, $B(0,t) = (1+r(t))^{-t}$. Nel seguito useremo sempre la capitalizzazione continua per semplicità algebrica.

### Tassi forward

Il **tasso forward** $f(t_1, t_2)$ è il tasso implicito per un investimento nel periodo $[t_1, t_2]$, fissato contrattualmente oggi. Non è un rendimento che si ottiene aspettando — è il tasso che puoi bloccare oggi per un investimento futuro, usando strumenti come i Forward Rate Agreement (FRA).

La condizione di no-arbitraggio determina univocamente $f(t_1, t_2)$: investire per $t_2$ anni deve essere equivalente a investire per $t_1$ anni e poi reinvestire al tasso forward per $(t_2 - t_1)$ anni:

$$e^{r(t_2) \cdot t_2} = e^{r(t_1) \cdot t_1} \cdot e^{f(t_1,t_2)(t_2-t_1)}$$

Risolvendo per $f(t_1, t_2)$:

$$\boxed{f(t_1,t_2) = \frac{r(t_2) \cdot t_2 - r(t_1) \cdot t_1}{t_2 - t_1}}$$

Il **tasso forward istantaneo** $f(t)$ è il limite per $t_2 \to t_1 = t$:

$$f(t) = r(t) + t \cdot r'(t) = \frac{d}{dt}[t \cdot r(t)]$$

Questa relazione mostra che il tasso forward è uguale al tasso spot più una correzione per la pendenza della curva.

### Yield to maturity di un bond con cedola

Un bond con cedola $c$ pagata periodicamente e nominale 1 ha prezzo:

$$P = \sum_{i=1}^{n} c \cdot e^{-r(t_i) \cdot t_i} + e^{-r(T) \cdot T}$$

dove ogni cedola viene scontata al tasso spot della sua scadenza specifica. La **yield to maturity** (YTM) $y$ è il tasso unico che soddisfa:

$$P = \sum_{i=1}^{n} c \cdot e^{-y \cdot t_i} + e^{-y \cdot T}$$

La YTM è una media ponderata dei tassi spot, con pesi proporzionali ai flussi attualizzati.

### Le teorie della struttura a termine

**Teoria delle aspettative pure (Pure Expectations Hypothesis):**
I tassi forward sono predittori non distorti dei futuri tassi spot:

$$f(t, t+\Delta) = E_t[r_{t+\Delta}]$$

Implica che la curva sia crescente se il mercato si aspetta tassi in aumento, piatta se li aspetta stabili, invertita se li aspetta in calo.

**Liquidity Preference Theory (Hicks, 1946):**
Gli investitori preferiscono la liquidità — obbligazioni a breve termine espongono a meno rischio di tasso. Per convincerli a detenere obbligazioni a lungo termine, è necessario offrire un premio per la liquidità $\lambda(t) > 0$:

$$f(t, t+\Delta) = E_t[r_{t+\Delta}] + \lambda(t)$$

Questo spiega perché la curva è normalmente crescente anche quando i tassi attesi rimangono stabili. Il premio cresce con la scadenza: le obbligazioni 10-anni richiedono un premio maggiore delle 2-anni.

**Market Segmentation Theory:**
Mercati a diverse scadenze sono separati — la domanda e l'offerta a ciascuna scadenza determinano indipendentemente il tasso. La curva riflette le preferenze istituzionali: le banche commerciali dominano le scadenze brevi; i fondi pensione e le assicurazioni domandano scadenze lunghe. Non esiste arbitraggio tra segmenti a causa di vincoli normativi e preferenze di assets-liabilities matching.

### Il modello di Vasicek (1977)

Il modello di Vasicek descrive l'evoluzione del tasso istantaneo $r_t$ come un processo di Ornstein-Uhlenbeck:

$$dr_t = \kappa(\theta - r_t) \, dt + \sigma \, dW_t$$

dove:
- $\kappa > 0$ è la **velocità di mean-reversion** (quanto velocemente $r_t$ torna verso $\theta$)
- $\theta$ è il **livello di lungo periodo** (tasso di equilibrio)
- $\sigma$ è la **volatilità** del tasso istantaneo
- $W_t$ è un moto browniano standard

La soluzione del processo è:

$$r_t = r_0 e^{-\kappa t} + \theta(1 - e^{-\kappa t}) + \sigma \int_0^t e^{-\kappa(t-s)} dW_s$$

Il tasso $r_t$ è gaussiano con:
$$E[r_t] = r_0 e^{-\kappa t} + \theta(1-e^{-\kappa t}), \quad \text{Var}(r_t) = \frac{\sigma^2}{2\kappa}(1-e^{-2\kappa t})$$

Il prezzo di uno zero-coupon bond nel modello di Vasicek è:

$$B(t,T) = A(t,T) \cdot e^{-b(t,T) \cdot r_t}$$

con:
$$b(t,T) = \frac{1-e^{-\kappa(T-t)}}{\kappa}, \quad \ln A(t,T) = \left(\theta - \frac{\sigma^2}{2\kappa^2}\right)[b(t,T)-(T-t)] - \frac{\sigma^2}{4\kappa} b(t,T)^2$$

Il tasso spot risultante è affine in $r_t$:
$$r(t,T) = -\frac{\ln B(t,T)}{T-t} = \alpha(T-t) + \beta(T-t) \cdot r_t$$

**Limite del modello di Vasicek:** il tasso può diventare negativo (distribuzione gaussiana). Questo era considerato un difetto teorico prima del 2012, ma i tassi negativi sono poi effettivamente apparsi in Europa e Giappone.

### Il modello CIR (Cox-Ingersoll-Ross, 1985)

Il modello CIR risolve il problema dei tassi negativi aggiungendo un fattore $\sqrt{r_t}$ alla volatilità:

$$dr_t = \kappa(\theta - r_t) \, dt + \sigma \sqrt{r_t} \, dW_t$$

Quando $r_t \to 0$, la volatilità $\sigma\sqrt{r_t} \to 0$, e il drift $\kappa\theta > 0$ spinge il tasso verso l'alto. La condizione di Feller $2\kappa\theta > \sigma^2$ garantisce che $r_t > 0$ quasi certamente.

Il processo CIR segue una distribuzione chi-quadrato non centrale — è sempre positivo. Il prezzo dello zero-coupon bond ha ancora forma analitica chiusa (ma più complessa di Vasicek), con $b(t,T)$ e $A(t,T)$ che soddisfano equazioni differenziali ordinarie.

## 4. Derivazioni

### Derivazione del tasso forward per no-arbitraggio

Supponiamo che esista un mercato di zero-coupon bond con prezzi $B(0,t_1)$ e $B(0,t_2)$ con $t_2 > t_1$. Consideriamo due strategie:

**Strategia A:** investire 1€ in un bond con scadenza $t_2$. Al tempo $t_2$ si ottiene $1/B(0,t_2)$.

**Strategia B:** investire 1€ in un bond con scadenza $t_1$ (ottengo $1/B(0,t_1)$ al tempo $t_1$) e simultaneamente concordare oggi un reinvestimento al tasso forward $f(t_1,t_2)$ dal tempo $t_1$ al tempo $t_2$. Al tempo $t_2$ si ottiene $e^{f(t_1,t_2)(t_2-t_1)}/B(0,t_1)$.

Per assenza di arbitraggio, le due strategie devono dare lo stesso risultato:
$$\frac{1}{B(0,t_2)} = \frac{e^{f(t_1,t_2)(t_2-t_1)}}{B(0,t_1)}$$

$$e^{f(t_1,t_2)(t_2-t_1)} = \frac{B(0,t_1)}{B(0,t_2)} = \frac{e^{-r(t_1)t_1}}{e^{-r(t_2)t_2}} = e^{r(t_2)t_2 - r(t_1)t_1}$$

Prendendo il logaritmo:
$$f(t_1,t_2)(t_2-t_1) = r(t_2)t_2 - r(t_1)t_1$$

$$\boxed{f(t_1,t_2) = \frac{r(t_2)t_2 - r(t_1)t_1}{t_2-t_1}}$$

### Derivazione del prezzo del bond in Vasicek

L'equazione di pricing (Black-Scholes per i tassi) per il prezzo $B(r,t,T)$ è:

$$\frac{\partial B}{\partial t} + [\kappa(\theta - r) - \lambda\sigma]\frac{\partial B}{\partial r} + \frac{1}{2}\sigma^2 \frac{\partial^2 B}{\partial r^2} - rB = 0$$

con condizione al contorno $B(r,T,T)=1$. Il termine $\lambda$ è il prezzo di mercato del rischio.

Proviamo la soluzione nella forma $B = \exp[A(\tau) - b(\tau)r]$ dove $\tau = T-t$. Sostituendo:

$$-b'(\tau)r + A'(\tau) + [\kappa(\theta-r)-\lambda\sigma](-b(\tau)) + \frac{1}{2}\sigma^2 b(\tau)^2 - r = 0$$

Raccogliendo i termini in $r$ e quelli costanti:

**Termini in $r$:** $-b'(\tau) - \kappa b(\tau) \cdot (-1) \cdot (-1) - 1 = 0 \Rightarrow b'(\tau) - \kappa b(\tau) = -1$

Questa ODE lineare del primo ordine con $b(0)=0$ ha soluzione: $b(\tau) = (1-e^{-\kappa\tau})/\kappa$.

**Termini costanti:** $A'(\tau) = \kappa\theta_* b(\tau) - \frac{1}{2}\sigma^2 b(\tau)^2$ dove $\theta_* = \theta - \lambda\sigma/\kappa$.

Integrando con $A(0)=0$ si ottiene la formula completa per $A(\tau)$.

## 5. Esempi

**Esempio 1 — Calcolo del tasso forward**

Dati: $r(1) = 3\%$, $r(2) = 4\%$, $r(3) = 4.5\%$ (capitalizzazione continua).

Tasso forward da anno 1 ad anno 2:
$$f(1,2) = \frac{4\% \times 2 - 3\% \times 1}{2-1} = \frac{8\% - 3\%}{1} = 5\%$$

Tasso forward da anno 2 ad anno 3:
$$f(2,3) = \frac{4.5\% \times 3 - 4\% \times 2}{3-2} = \frac{13.5\% - 8\%}{1} = 5.5\%$$

Interpretazione: il mercato prezza un tasso del 5% per il secondo anno e del 5.5% per il terzo — aspettative di tassi crescenti.

**Esempio 2 — Prezzo di uno zero-coupon bond**

Zero coupon bond con nominale $F = 1000€$, scadenza $T = 5$ anni, $r(5) = 4\%$ c.c.

$$P = 1000 \cdot e^{-0.04 \times 5} = 1000 \cdot e^{-0.20} = 1000 \times 0.8187 = 818.7€$$

Se la curva si muove in modo parallelo di +100 bps (tutti i tassi spot aumentano dell'1%):
$$P' = 1000 \cdot e^{-0.05 \times 5} = 1000 \times 0.7788 = 778.8€$$

Perdita percentuale: $(818.7 - 778.8)/818.7 = -4.87\%$, circa uguale alla duration $D = T = 5$ anni (per uno zero coupon) moltiplicata per la variazione di tasso.

**Esempio 3 — Prezzo di un bond con cedola e struttura a termine non flat**

Bond con cedola annua $c = 4\%$ sul nominale 1000€, scadenza 3 anni. Curva spot: $r(1)=3\%$, $r(2)=4\%$, $r(3)=4.5\%$.

$$P = 40 e^{-0.03} + 40 e^{-0.08} + 1040 e^{-0.135}$$
$$= 40 \times 0.9704 + 40 \times 0.9231 + 1040 \times 0.8737$$
$$= 38.82 + 36.92 + 908.65 = 984.4€$$

La YTM $y$ soddisfa: $984.4 = 40e^{-y} + 40e^{-2y} + 1040e^{-3y}$. Per iterazione numerica: $y \approx 4.37\%$.

**Esempio 4 — Interpretazione della curva invertita**

Anno 2006 (prima della crisi 2008): curva USA invertita, con $r(3 \text{ mesi}) \approx 5.3\%$ e $r(10 \text{ anni}) \approx 4.9\%$.

$f(0.25, 10) = \frac{4.9\% \times 10 - 5.3\% \times 0.25}{9.75} = \frac{49\% - 1.325\%}{9.75} = \frac{47.675\%}{9.75} \approx 4.89\%$

Il mercato prezzava tassi a lungo termine inferiori ai tassi a breve — aspettative di taglio dei tassi. In retrospettiva, stava segnalando il rallentamento economico imminente.

**Esempio 5 — Simulazione del processo di Vasicek**

Parametri: $r_0 = 0.03$ (3%), $\kappa = 0.2$, $\theta = 0.05$ (5%), $\sigma = 0.01$.

Dopo 1 anno ($t=1$): $E[r_1] = 0.03 \times e^{-0.2} + 0.05 \times (1-e^{-0.2}) = 0.03 \times 0.819 + 0.05 \times 0.181 = 0.0246 + 0.0091 = 0.0337 = 3.37\%$.

Deviazione standard: $\sqrt{\frac{0.01^2}{2 \times 0.2}(1-e^{-0.4})} = \sqrt{\frac{0.0001}{0.4} \times 0.330} = \sqrt{0.0000825} = 0.00908 = 0.91\%$.

Il tasso si trova nell'intervallo $3.37\% \pm 1.96 \times 0.91\% = [1.59\%, 5.15\%]$ con probabilità 95%.

**Esempio 6 — Confronto Vasicek vs CIR**

Per gli stessi parametri $\kappa=0.2$, $\theta=0.05$, $\sigma=0.01$, $r_0=0.03$:

| Modello | $P(r_t < 0)$ | Distribuzione $r_t$ | Prezzo analitico |
| --- | --- | --- | --- |
| Vasicek | Possibile (gaussiana) | Normale | Sì |
| CIR | Zero (se $2\kappa\theta > \sigma^2$) | Chi-quadrato non centrale | Sì |

Verifica condizione Feller per CIR: $2 \times 0.2 \times 0.05 = 0.02 > 0.01^2 = 0.0001$. Soddisfatta ampiamente — il tasso CIR rimane positivo.

**Esempio 7 — Duration e immunizzazione**

Un fondo pensione ha passività con valore attuale 10M€ e duration 12 anni. Ha a disposizione due bond:
- Bond A: duration 5 anni, prezzo 100€
- Bond B: duration 20 anni, prezzo 100€

Per immunizzare (duration del portafoglio attivi = 12 anni):
$$w_A \times 5 + w_B \times 20 = 12, \quad w_A + w_B = 1$$

Dalla seconda: $w_A = 1 - w_B$. Sostituendo: $5(1-w_B) + 20w_B = 12 \Rightarrow 15w_B = 7 \Rightarrow w_B = 7/15 \approx 46.7\%$, $w_A \approx 53.3\%$.

Il fondo deve investire 5.33M€ nel bond A (duration 5) e 4.67M€ nel bond B (duration 20).

## 6. Grafico

```plot
{"fn":"0.03+0.015*(1-Math.exp(-0.3*x))","fn2":"0.06-0.02*(1-Math.exp(-0.4*x))","domain":[0,30],"yDomain":[0,0.08],"title":"Struttura a termine: curva normale (blu) e invertita (rossa)","label1":"Curva normale r(t)","label2":"Curva invertita r(t)","color":"steelblue"}
```

## 7. Interattivo

```slider
{"fn":"theta*(1-Math.exp(-kappa*x))+r0*Math.exp(-kappa*x)","domain":[0,30],"yDomain":[0,0.1],"params":[{"name":"r0","min":0.01,"max":0.08,"step":0.005,"default":0.03},{"name":"theta","min":0.01,"max":0.08,"step":0.005,"default":0.05},{"name":"kappa","min":0.05,"max":1,"step":0.05,"default":0.2}],"title":"Tasso atteso E[r(t)] nel modello di Vasicek (r₀=tasso iniziale, θ=livello LT, κ=velocità mean-reversion)"}
```

## 8. Errori comuni

**Errore 1 — Confondere tasso spot e YTM:** Il tasso spot $r(t)$ è specifico per ogni scadenza — è il tasso che si applica a un singolo flusso di cassa a tempo $t$. La YTM è una media di tutti i tassi spot ponderata per i flussi. Usare la YTM come tasso di sconto per i singoli flussi di cassa è sbagliato se la curva non è piatta: si sbaglia il valore attuale di ogni singola cedola.

**Errore 2 — Dimenticare la capitalizzazione nel calcolo del forward:** Il tasso forward si ricava dalla condizione di equivalenza degli *investimenti composti*, non dei tassi additivi. Con capitalizzazione discreta: $(1+f(t_1,t_2))^{t_2-t_1} = (1+r(t_2))^{t_2}/(1+r(t_1))^{t_1}$. Non si può sottrarre semplicemente $r(t_2) - r(t_1)$.

**Errore 3 — Invertire curva = tassi in calo certi:** La curva invertita segnala che il mercato si *aspetta* tassi in calo — non che certamente caleranno. La teoria della liquidity preference aggiunge che la curva normalmente cresce per il premio di liquidità; quindi una curva invertita implica aspettative di tassi *ancora più* in calo di quello che la curva mostra. L'inversione è un indicatore, non una profezia.

**Errore 4 — Duration è sensibilità al tasso per piccole variazioni:** La duration di Macaulay è la vita media ponderata dei flussi. La duration modificata $D^* = D/(1+y)$ è la sensibilità percentuale al prezzo per una variazione infinitesimale del tasso. Per grandi variazioni, la convexity diventa importante: $\Delta P/P \approx -D^* \Delta y + \frac{1}{2}C(\Delta y)^2$ dove $C$ è la convexity. Ignorare la convexity sovrastima le perdite per aumenti di tasso.

**Errore 5 — Il modello di Vasicek prevede un livello a lungo termine fisso:** Il parametro $\theta$ di Vasicek è il livello di lungo periodo del tasso *nel modello*. Non è una previsione immutabile. Il modello può essere ricalibrato aggiornando i parametri con i dati correnti di mercato. La curva a lungo termine dipende da $\theta$ e dal premio di rischio $\lambda$ — entrambi variano nel tempo.

**Errore 6 — Immunizzazione funziona per tutti i movimenti della curva:** L'immunizzazione per duration funziona solo per spostamenti *paralleli* della curva — tutti i tassi spot si muovono della stessa quantità. Se la curva si torce (si appiattisce o si ripidisce), la sola duration non basta. L'immunizzazione completa richiede il matching di duration *e* convexity, o approcci più sofisticati (key rate duration).

**Errore 7 — Il tasso forward è uguale al tasso spot futuro atteso:** Il tasso forward è determinato oggi da no-arbitraggio — è un numero certo, calcolabile dai prezzi osservati. Il tasso spot futuro è una variabile aleatoria. Il tasso forward eguaglia il tasso spot atteso solo nella Pure Expectations Hypothesis, che ignora i premi per il rischio. Nella pratica, i tassi forward sovrastimano sistematicamente i futuri tassi spot (specialmente per le scadenze lunghe) proprio perché includono il premio di liquidità.

## 9. Applicazioni reali

**Swap su tassi di interesse (IRS):** Un interest rate swap scambia pagamenti a tasso fisso contro pagamenti a tasso variabile (tipicamente EURIBOR o SOFR). Il tasso fisso dello swap è fissato in modo che il valore iniziale sia zero — equivale alla media dei tassi forward per le scadenze intermedie. La struttura a termine dei tassi spot è lo strumento essenziale per prezzare e coprire questi contratti. Il mercato degli IRS ha un nozionale outstanding di centinaia di trilioni di dollari.

**Gestione del rischio ALM (Asset-Liability Management):** Le compagnie assicurative hanno passività (pagamenti di polizze) a lunghissima scadenza (20-40 anni). Per immunizzarle, devono detenere attività con duration simile. Solvency II (la regolamentazione europea) obbliga le assicurazioni a scontare le passività usando la struttura a termine dei tassi swap, calibrata trimestralmente dall'EIOPA. Una variazione di 50 bps nella curva dei tassi può cambiare il Solvency Capital Requirement di miliardi di euro.

**Curva dei tassi come indicatore macro:** La Federal Reserve monitora lo spread 10 anni — 2 anni (o 10 anni — 3 mesi) come indicatore anticipatore dell'economia. Studi della Fed di San Francisco mostrano che ogni recessione americana dal 1955 è stata preceduta (di 6-24 mesi) da un'inversione della curva. La Fed utilizza modelli dinamici della struttura a termine (DTSM) per stimare il premio a termine e separarlo dalle aspettative sui tassi.

**Pricing di opzioni su tassi (cap e floor):** Un cap su tassi di interesse paga quando il tasso EURIBOR supera uno strike $K$. Ogni caplet è una call su un tasso forward — il modello di Black (1976) e il modello di Hull-White (basato su Vasicek) forniscono formule chiuse per il prezzo. Il mercato dei cap/floor è uno dei principali mercati di derivati sui tassi, usato da imprese per coprire rischi di finanziamento a tasso variabile.

## 10. Riepilogo

| Concetto | Formula | Note |
| --- | --- | --- |
| Tasso spot | $r(t)$ tale che $B(0,t) = e^{-r(t)t}$ | Rendimento per scadenza $t$ |
| Fattore di sconto | $B(0,t) = e^{-r(t)t}$ | Prezzo ZCB con nominale 1 |
| Tasso forward | $f(t_1,t_2) = \frac{r(t_2)t_2-r(t_1)t_1}{t_2-t_1}$ | No-arbitraggio |
| Forward istantaneo | $f(t) = r(t) + t \cdot r'(t)$ | Limite per $t_2 \to t_1$ |
| YTM | $P = \sum c_i e^{-y t_i}$ | Media ponderata dei tassi spot |
| Duration modificata | $D^* = -\frac{1}{P}\frac{dP}{dy}$ | Sensibilità al tasso |
| Vasicek | $dr_t = \kappa(\theta-r_t)dt + \sigma dW_t$ | Tasso può essere negativo |
| CIR | $dr_t = \kappa(\theta-r_t)dt + \sigma\sqrt{r_t}dW_t$ | Sempre positivo (Feller: $2\kappa\theta > \sigma^2$) |
| Immunizzazione | Duration attivi = Duration passivi | Valida per shift paralleli |

## 11. Esercizi

<details>
<summary>Esercizio 1: Calcolo tassi forward dalla curva spot</summary>

La curva dei tassi spot è: $r(0.5) = 2\%$, $r(1) = 2.5\%$, $r(2) = 3\%$, $r(3) = 3.5\%$, $r(5) = 4\%$ (capitalizzazione continua).

(a) Calcola $f(1, 2)$, $f(2, 3)$, $f(3, 5)$.
(b) La curva forward è più ripida o meno ripida della curva spot? Perché?

**Soluzione:**

(a)
$$f(1,2) = \frac{3\% \times 2 - 2.5\% \times 1}{2-1} = \frac{6\%-2.5\%}{1} = 3.5\%$$

$$f(2,3) = \frac{3.5\% \times 3 - 3\% \times 2}{3-2} = \frac{10.5\%-6\%}{1} = 4.5\%$$

$$f(3,5) = \frac{4\% \times 5 - 3.5\% \times 3}{5-3} = \frac{20\%-10.5\%}{2} = \frac{9.5\%}{2} = 4.75\%$$

(b) La curva forward è **più ripida** della curva spot. Questo è sempre vero quando la curva spot è crescente: la formula del forward "estrapola" la pendenza. Matematicamente, se $r(t)$ è strettamente crescente, $f(t_1,t_2) > r(t_2) > r(t_1)$ — il forward è sempre sopra il corrispettivo spot.

</details>

<details>
<summary>Esercizio 2: Prezzo di un bond con curva non flat</summary>

Bond con cedola annua 5% (su nominale 1000€), scadenza 4 anni. Curva spot: $r(1)=3\%$, $r(2)=3.5\%$, $r(3)=4\%$, $r(4)=4.5\%$.

(a) Calcola il prezzo esatto usando i tassi spot.
(b) Stima la YTM approssimativamente.
(c) Perché la YTM è inferiore a $r(4) = 4.5\%$?

**Soluzione:**

(a) Cedole: 50€ ogni anno. Nominale: 1000€ alla fine.

| Anno $t$ | Flusso | $r(t)$ | $e^{-r(t)t}$ | VAN flusso |
| --- | --- | --- | --- | --- |
| 1 | 50 | 3% | $e^{-0.03}=0.9704$ | 48.52 |
| 2 | 50 | 3.5% | $e^{-0.07}=0.9324$ | 46.62 |
| 3 | 50 | 4% | $e^{-0.12}=0.8869$ | 44.35 |
| 4 | 1050 | 4.5% | $e^{-0.18}=0.8353$ | 877.1 |

$P = 48.52 + 46.62 + 44.35 + 877.1 = 1016.6€$

(b) Per trovare la YTM $y$: il bond vale sopra la pari (1016.6 > 1000) e ha cedola 5%, quindi $y < 5\%$. Per iterazione numerica: $y \approx 4.43\%$.

(c) La YTM è una media dei tassi spot ponderata per i flussi di cassa. Le cedole iniziali (anni 1-3) hanno pesi non trascurabili e vengono scontate a tassi (3%, 3.5%, 4%) inferiori a $r(4)=4.5\%$. La media ponderata risultante è inferiore al tasso spot dell'ultima scadenza.

</details>

<details>
<summary>Esercizio 3: Vasicek — tasso atteso e distribuzione</summary>

Parametri Vasicek: $r_0 = 1\%$, $\kappa = 0.15$, $\theta = 4\%$, $\sigma = 1.5\%$.

(a) Calcola $E[r_t]$ e $\text{Var}(r_t)$ per $t = 1, 5, 10$.
(b) A quale valore converge $E[r_t]$ per $t \to \infty$?
(c) Qual è la probabilità che $r_5 < 0$?

**Soluzione:**

(a) $E[r_t] = r_0 e^{-\kappa t} + \theta(1-e^{-\kappa t})$, $\text{Var}(r_t) = \frac{\sigma^2}{2\kappa}(1-e^{-2\kappa t})$

Per $t=1$: $E = 0.01 e^{-0.15} + 0.04(1-e^{-0.15}) = 0.01 \times 0.861 + 0.04 \times 0.139 = 0.00861 + 0.00556 = 1.42\%$

$\text{Var}(r_1) = \frac{0.015^2}{0.30}(1-e^{-0.30}) = 0.00075 \times 0.259 = 0.000194$, $\text{SD}(r_1) = 1.39\%$

Per $t=5$: $e^{-0.75}=0.472$. $E = 0.01 \times 0.472 + 0.04 \times 0.528 = 0.00472 + 0.02112 = 2.58\%$, $\text{SD} \approx 1.87\%$.

Per $t=10$: $e^{-1.5}=0.223$. $E = 0.01 \times 0.223 + 0.04 \times 0.777 = 3.33\%$, $\text{SD} \approx 1.99\%$.

(b) $\lim_{t\to\infty} E[r_t] = \theta = 4\%$. Il tasso converge al livello di lungo periodo, indipendentemente da $r_0$.

(c) $r_5 \sim N(2.58\%, 1.87\%^2)$. $P(r_5 < 0) = \Phi\left(\frac{0-2.58\%}{1.87\%}\right) = \Phi(-1.38) \approx 8.4\%$. Con questi parametri, la probabilità di tasso negativo a 5 anni è circa 8% — una debolezza del modello Vasicek rispetto al CIR.

</details>

<details>
<summary>Esercizio 4: Immunizzazione di un portafoglio</summary>

Una compagnia assicurativa ha passività: 2M€ tra 5 anni e 8M€ tra 10 anni. Il tasso spot è flat al 4% (c.c.).

(a) Calcola il valore attuale e la duration delle passività.
(b) Ha a disposizione bond A (duration 3 anni, prezzo pari) e bond B (duration 12 anni, prezzo pari). Quanti euro investire in ciascuno per immunizzare?

**Soluzione:**

(a) VAN passività:
$PV_5 = 2M \times e^{-0.04 \times 5} = 2M \times 0.8187 = 1.637M€$
$PV_{10} = 8M \times e^{-0.04 \times 10} = 8M \times 0.6703 = 5.362M€$
$PV_{tot} = 1.637 + 5.362 = 6.999M€ \approx 7M€$

Duration delle passività (= media ponderata delle scadenze):
$$D_L = \frac{1.637 \times 5 + 5.362 \times 10}{7.0} = \frac{8.185 + 53.62}{7.0} = \frac{61.8}{7.0} = 8.83 \text{ anni}$$

(b) Il portafoglio investito deve avere: $VAN = 7M€$ e $D_A = 8.83$ anni.
Con $w_A$ investito nel bond A e $w_B = 1 - w_A$ nel bond B:
$$3 w_A + 12 (1-w_A) = 8.83$$
$$3 w_A + 12 - 12 w_A = 8.83$$
$$-9 w_A = -3.17 \Rightarrow w_A = 35.2\%, \quad w_B = 64.8\%$$

Importi: bond A: $7M \times 0.352 = 2.46M€$; bond B: $7M \times 0.648 = 4.54M€$.

</details>

<details>
<summary>Esercizio 5: Curva invertita e previsione recessione</summary>

A marzo 2023, la curva US Treasury era: $r(3M) = 5.0\%$, $r(2Y) = 4.6\%$, $r(10Y) = 3.9\%$.

(a) Calcola il tasso forward $f(2, 10)$ e interpreta il segnale economico.
(b) Se la Pure Expectations Hypothesis è vera, quale livello di tassi a breve si aspetta il mercato tra 2 anni?
(c) Aggiungi un liquidity premium di 0.5% annuo per le scadenze oltre 2 anni. Come cambia la previsione del tasso a breve tra 2 anni?

**Soluzione:**

(a) $f(2,10) = \frac{3.9\% \times 10 - 4.6\% \times 2}{10-2} = \frac{39\% - 9.2\%}{8} = \frac{29.8\%}{8} = 3.73\%$

Il tasso forward dal 2° al 10° anno (3.73%) è inferiore al tasso attuale a 2 anni (4.6%) — il mercato si aspetta una significativa riduzione dei tassi. Questa è una curva fortemente invertita, segnale di recessione attesa.

(b) Dalla Pure Expectations: $f(0,2) = E_0[r_2] = r(2) = 4.6\%$ (non utile). Il mercato si aspetta che il tasso a breve tra 2 anni segua $f(2,10) \approx 3.73\%$ come media degli anni 2-10, il che implica tassi a breve ben sotto il 4.6% attuale.

(c) Con liquidity premium 0.5%: il tasso a 10 anni include un premio, quindi: $r(10)_{osservato} = E[r_{10}] + 0.5\%$. La curva corretta per le aspettative ha $r(10)_{aspettative} = 3.9\% - 0.5\% = 3.4\%$. Il mercato si aspetta tassi ancora più bassi di quanto la curva osservata suggerisca. La previsione di recessione è rafforzata.

</details>

<details>
<summary>Esercizio 6: Bootstrap della curva spot dai prezzi dei bond</summary>

Osservi tre bond privi di rischio:
- Bond 1: scadenza 1 anno, cedola 0%, prezzo 97.08€ su nominale 100€
- Bond 2: scadenza 2 anni, cedola 3%, prezzo 99.21€ su nominale 100€
- Bond 3: scadenza 3 anni, cedola 5%, prezzo 101.50€ su nominale 100€

Derivi la curva spot $r(1)$, $r(2)$, $r(3)$ con il metodo bootstrap.

**Soluzione:**

**$r(1)$:** Dal bond 1 (zero coupon): $97.08 = 100 \cdot e^{-r(1) \cdot 1}$

$e^{-r(1)} = 0.9708 \Rightarrow r(1) = -\ln(0.9708) = 0.0300 = 3\%$

**$r(2)$:** Il bond 2 paga 3€ a $t=1$ e 103€ a $t=2$:
$99.21 = 3 e^{-0.03 \times 1} + 103 e^{-r(2) \times 2}$
$99.21 = 3 \times 0.9704 + 103 e^{-2r(2)}$
$99.21 - 2.91 = 103 e^{-2r(2)}$
$e^{-2r(2)} = 96.30/103 = 0.9350$
$r(2) = -\ln(0.9350)/2 = 0.0672/2 = 3.36\% \approx 3.5\%$

**$r(3)$:** Il bond 3 paga 5€ a $t=1,2$ e 105€ a $t=3$:
$101.50 = 5 e^{-0.03} + 5 e^{-0.07} + 105 e^{-3r(3)}$
$101.50 = 5 \times 0.9704 + 5 \times 0.9324 + 105 e^{-3r(3)}$
$101.50 - 4.852 - 4.662 = 105 e^{-3r(3)}$
$e^{-3r(3)} = 91.986/105 = 0.8761$
$r(3) = -\ln(0.8761)/3 = 0.1320/3 = 4.40\%$

Curva bootstrapped: $r(1)=3\%$, $r(2)=3.5\%$, $r(3)=4.4\%$ — curva crescente normale.

</details>
