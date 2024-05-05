import { Injectable, inject } from '@angular/core';
import { GameStructure } from '../interfaces/gameStructure';
import { Firestore, collection, onSnapshot, doc, addDoc, getDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  unsubGames;
  games: GameStructure[] = [];

  firestore: Firestore = inject(Firestore);

  constructor() { 
    this.unsubGames = this.subGames();
    //this.unsubscribe();
  }

  unsubscribe() {
    this.unsubGames();
  }

  setGameObject(object: any, id: string): GameStructure {
    return {
      id: id,
      players: object.players,
      stack: object.stack,
      playCard: object.playCard,
      currentPlayer: object.currentPlayer
    }
  }

  async updateGame(game: GameStructure, id: string) {
    await updateDoc(this.getSingleDocRef('games', id), this.getCleanJSON(game)).catch(
      (err) => {console.log(err)}
    );
  }

  getCleanJSON(game: GameStructure): {} {
    return {
      players: game.players,
      stack: game.stack,
      playCard: game.playCard,
      currentPlayer: game.currentPlayer
    }
  }

  async addGame(game: Object) {
    await addDoc(this.getGamesRef(), this.setGameObject(game, '')).catch(
      (err) => {console.log(err)}
    ).then(
      (docRef) => {
        console.log('Document written with ID: ', docRef?.id);
      }
    );
  }

  subGames() {
    return onSnapshot(this.getGamesRef(), (games) => {
      this.games = [];
      games.forEach((game) => {
        this.games.push(this.setGameObject(game.data(), game.id));
      })
    });
  }

  getGamesRef() {
    return collection(this.firestore, 'games');
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}