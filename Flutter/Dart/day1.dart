import 'dart:io';

void main() {
  int randomNum = 7;
  
  for (int i = 0; i < 3; i++) {
    print('Guess a number:');
    var enteredStr = stdin.readLineSync();
    
    try {
      int enteredNum = int.parse(enteredStr!);
      if (enteredNum == randomNum){
        print('You are correct');
        break;
      }
    } catch(e){
      print('Invalid input');
    }
  }
}
