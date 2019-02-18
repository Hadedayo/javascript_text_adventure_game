alert("It is the zombie apocalypse. You're admiring a rack filled with culottes, mom jeans and some striped t-shirts at Zara and suddenly a zombie bursts through the door!!!" );

var weapon_choice = prompt('You frantically search for a weapon. What do you choose? An hanger, your ankle boots or a tote bag?');

if (weapon_choice == 'hanger') {
  alert('Really sis...an hanger (side eye)')
}
var random_num = Math.round(Math.random());

alert("You attack the zombie with your" + " " + weapon_choice);



if (random_num === 0) {
  alert('The zombie bites you. You lose!!!')
}else if (random_num === 1) {
  alert('You kill the zombie with your ' + weapon_choice + '.You win!')
}
