import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RulesdataService {

  constructor() { }

  gameTasks = [
    {
      card: '1',
      title: 'Watefall',
      description: 'Everyone should keep drinking until the person who picked the card stops. Wo who knows how long you will be going for!'
    },
    {
      card: '2',
      title: 'Choose',
      description: 'You can choose someone to drink.'
    },
    {
      card: '3',
      title: 'You',
      description: 'You must drink.'
    },
    {
      card: '4',
      title: 'Chicks',
      description: 'All girls must drink.'
    },
    {
      card: '5',
      title: 'Thumb Master',
      description: 'When you put your thumb on the table everyone must follow and whomever is last must drink. You are the thumb master till someone else picks five.'
    },
    {
      card: '6',
      title: 'Dicks',
      description: 'All guys must drink.'
    },
    {
      card: '7',
      title: 'Heaven',
      description: 'Pint your finger in the sky, whoever ist last must drink.'
    },
    {
      card: '8',
      title: 'Mate',
      description: 'Choose someone to drink with you. He/she, your drinking buddy, should always drink with you.'
    },
    {
      card: '9',
      title: 'Rhyme',
      description: 'Pick a word such as fog and the person next to you must rhyme with fog, like dog, and it goes to the next person and the next, in a circle, until someone messes up and he or she will have to drink.'
    },
    {
      card: '10',
      title: 'Categories',
      description: 'Pick a category such as football and you go in a circle and everyone has to say a word that fits with football such as: touchdown, field goal, USC. Whoever messes up, drinks.'
    },
    {
      card: '11',
      title: 'Rule',
      description: 'You can make up any rule that everyone has to follow, such as you can only drink with your left hand. Everyone (include you) must follow this rule for the whole entire game and if you disobey you must drink.'
    },
    {
      card: '12',
      title: 'Question',
      description: 'Go around in a circle and you have to keep asking questions to each other. Doesn\'t matter what the question is, as long as its a question. Whoever messes up and does not say a question, drinks.'
    },
    {
      card: '13',
      title: 'Pour!',
      description: 'You must pour a little of your drink into the cup that is in the middle of the table. Whomever picks up the LAST king must drink the whole cup, which could be filled with diffrent drinks, so who knows how bad it could taste!'
    }
  ]
}
