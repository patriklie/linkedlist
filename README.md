# LinkedList-implementasjon i JavaScript

Dette prosjektet er en enkel implementasjon av en enkeltlenket liste i JavaScript. Det inkluderer flere nøkkelmetoder for å manipulere listen, som å legge til, fjerne og bytte noder.

## Funksjonalitet

- **addFirst(data)**: Legger til en ny node med gitt data i begynnelsen av listen.
- **addLast(data)**: Legger til en ny node på slutten av listen.
- **addAtIndex(data, index)**: Legger til en ny node på den spesifiserte indeksen.
- **removeAtIndex(index)**: Fjerner noden på den spesifiserte indeksen.
- **removeFirst()**: Fjerner den første noden i listen.
- **removeLast()**: Fjerner den siste noden i listen.
- **swapNodes(node1, node2)**: Bytter to noder i listen ved referanse.
- **findNode(data)**: Finner og returnerer en node med den angitte dataen.
- **printList()**: Skriver ut hele listen.

## Eksempel på bruk

Her er et eksempel på hvordan du kan bruke `LinkedList`-klassen:

```javascript
import LinkedList from './LinkedList.mjs';

const liste = new LinkedList();

liste.addFirst(500);
liste.addFirst(400);
liste.addFirst(300);
liste.addFirst(200);
liste.addFirst(100);

const node1 = liste.findNode(200);
const node2 = liste.findNode(400);

console.log("Før bytte:");
liste.printList();

liste.swapNodes(node1, node2);

console.log("Etter bytte:");
liste.printList();
