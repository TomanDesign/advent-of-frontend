// Tutaj skopiuj kod zadania

export class GiftRegistry {
    private giftList: Record<number, string[]> = {};

      addGift(childID: number, gift: string):void {
        if (!this.giftList[childID]) {
          this.giftList[childID] = [];
        }
        this.giftList[childID].push(gift);
      }

      removeGift(childID: number, gift: string) {
        if (this.giftList[childID]) {
          const index = this.giftList[childID].indexOf(gift);
          if (index !== -1) {
            this.giftList[childID].splice(index, 1);
            if (this.giftList[childID].length === 0) {
              delete this.giftList[childID];
            }
            console.log(`Prezent '${gift}' został usunięty dla dziecka o ID ${childID}.`);
          } else {
            console.log(`Dziecko o ID ${childID} nie ma prezentu o nazwie '${gift}'.`);
          }
        } else {
          console.log(`Dziecko o ID ${childID} nie istnieje na liście prezentów.`);
        }
      }

      getGiftsForChild(childID: number): string[] {
        return this.giftList[childID] || [];
      }
}



// Przykładowe użycie
const santa = new GiftRegistry();

// Dodanie prezentów
santa.addGift(1, "Lalka");
santa.addGift(1, "Klocki");
santa.addGift(2, "Samochodzik");
santa.addGift(3, "Książka");

// Usunięcie prezentu
santa.removeGift(1, "Lalka");

// Znalezienie prezentów dla danego dziecka
const giftForChild1 = santa.getGiftsForChild(1);
console.log(`Prezenty dla dziecka o ID 1: ${giftForChild1}`);