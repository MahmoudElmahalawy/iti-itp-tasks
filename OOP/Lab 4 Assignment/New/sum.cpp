#include <iostream>
using namespace std;

int main(){
    int input_length, i, j;
    int sum = 0;

    cout<<"How many numbers are you going to enter?\n"<<endl;
    cin>>input_length;

    int temp;
    int numbers_list[input_length];

    for (i=0; i<input_length; i++){
        cout<<"Enter a new number"<<endl;
        cin>>temp;

        numbers_list[i] = temp;
    }

    cout<<"----------\n";

    for (i=0; i<input_length; i++){
        sum += numbers_list[i];
    }

    cout<<"Summation of numbers = "<<sum<<endl;



    return 0;
}
