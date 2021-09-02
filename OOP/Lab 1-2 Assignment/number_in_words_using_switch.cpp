#include <iostream>
using namespace std;

int main(){
    int number;

    cout<<"Enter your number:\n";
    cin>>number;

    if (number < 20 && number >= 0){
        switch (number){
        case 0:
            cout<<"ZERO";break;
        case 1:
            cout<<"ONE";break;
        case 2:
            cout<<"TWO";break;
        case 3:
            cout<<"THREE";break;
        case 4:
            cout<<"FOUR";break;
        case 5:
            cout<<"FIVE";break;
        case 6:
            cout<<"SIX";break;
        case 7:
            cout<<"SEVEN";break;
        case 8:
            cout<<"EIGHT";break;
        case 9:
            cout<<"NINE";break;
        case 10:
            cout<<"TEN";break;
        case 11:
            cout<<"ELEVEN";break;
        case 12:
            cout<<"TWELVE";break;
        case 13:
            cout<<"THIRTEEN";break;
        case 14:
            cout<<"FOURTEEN";break;
        case 15:
            cout<<"FIFTEEN";break;
        case 16:
            cout<<"SIXTEEN";break;
        case 17:
            cout<<"SEVENTEEN";break;
        case 18:
            cout<<"EIGHTEEN";break;
        case 19:
            cout<<"NINETEEN";break;
        }
    }else if (number >= 20 && number < 100){
        switch (number / 10){
        case 2:
            cout<<"TWENTY";break;
        case 3:
            cout<<"THIRTY";break;
        case 4:
            cout<<"FORTY";break;
        case 5:
            cout<<"FIFTY";break;
        case 6:
            cout<<"SIXTY";break;
        case 7:
            cout<<"SEVENTY";break;
        case 8:
            cout<<"EIGHTY";break;
        case 9:
            cout<<"NINTY";break;
        }
        cout<<" ";

        switch (number % 10){
        case 1:
            cout<<"ONE";break;
        case 2:
            cout<<"TWO";break;
        case 3:
            cout<<"THREE";break;
        case 4:
            cout<<"FOUR";break;
        case 5:
            cout<<"FIVE";break;
        case 6:
            cout<<"SIX";break;
        case 7:
            cout<<"SEVEN";break;
        case 8:
            cout<<"EIGHT";break;
        case 9:
            cout<<"NINE";break;
        }
    }else{
        cout<<"PLEASE ENTER A NUMBER BETWEEN 0 AND 99";
    }

    return 0;
}
